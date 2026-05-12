# Sanity CMS — Deployment & Configuration Guide

## Project Overview

| File | Purpose |
|---|---|
| `sanity.config.ts` | Studio config (schemas, plugins, basePath) |
| `sanity.cli.ts` | CLI config (deploy studio, manage datasets) |
| `lib/sanity/client.ts` | Next.js fetch client with ISR revalidation |
| `lib/sanity/env.ts` | Env var exports |
| `lib/sanity/queries.ts` | GROQ queries |
| `sanity/schemas/` | Document type definitions |

---

## Step 1 — Create a Sanity Project

```bash
# Install CLI globally (once)
npm install -g sanity@latest

# Login
sanity login

# Create new project (run from project root, select "No" when asked to initialize new repo)
sanity init --env
```

This generates a **Project ID** and **Dataset**. Note them down.

---

## Step 2 — Environment Variables

Create a `.env.local` file in the project root:

```env
# ─── SANITY ───────────────────────────────────────
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01

# Required for server-side mutations, draft mode, webhooks
SANITY_API_TOKEN=your_token_here
SANITY_WEBHOOK_SECRET=your_webhook_secret_here
```

### How to get the API Token
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project → **API** → **Tokens**
3. Add token → Name: `nextjs-server` → Permission: **Editor**
4. Copy and paste as `SANITY_API_TOKEN`

---

## Step 3 — CORS Origins

Add your domains so the Next.js frontend can query Sanity:

1. [sanity.io/manage](https://sanity.io/manage) → Your Project → **API** → **CORS Origins**
2. Add:
   - `http://localhost:3000` (dev)
   - `https://your-production-domain.com` (prod)
   - `https://optimax.sanity.studio` (studio)
3. Check **Allow credentials** for all three

---

## Step 4 — Deploy Sanity Studio

The studio is embedded at `/studio` (set in `sanity.config.ts` via `basePath: "/studio"`).
It deploys automatically with your Next.js app. **No separate deployment needed.**

However, to also host a standalone studio at `optimax.sanity.studio`:

```bash
npx sanity deploy
# Studio host: optimax  →  https://optimax.sanity.studio
```

---

## Step 5 — Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Set Environment Variables in Vercel Dashboard

Go to **Project → Settings → Environment Variables** and add:

| Key | Value | Environment |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `your_project_id` | All |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | All |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-03-01` | All |
| `SANITY_API_TOKEN` | `your_token` | Production + Preview |
| `SANITY_WEBHOOK_SECRET` | `your_secret` | Production |

---

## Step 6 — Deploy to Netlify (Alternative)

```bash
npm install -g netlify-cli
netlify deploy --prod
```

Add environment variables in **Netlify → Site Settings → Environment Variables**.
Same keys as the Vercel table above.

---

## Step 7 — On-Demand Revalidation Webhook (Optional)

Set up a webhook so pages revalidate instantly when you publish in Sanity:

### Create the webhook route

`app/api/revalidate/route.ts`:

```ts
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }
  const body = await req.json();
  const type = body._type;
  if (type === "post") revalidatePath("/blog", "layout");
  if (type === "caseStudy") revalidatePath("/case-studies", "layout");
  return NextResponse.json({ revalidated: true });
}
```

### Register the webhook in Sanity

1. [sanity.io/manage](https://sanity.io/manage) → Your Project → **API** → **Webhooks**
2. Add webhook:
   - **URL**: `https://your-domain.com/api/revalidate?secret=your_webhook_secret`
   - **Trigger on**: `Create`, `Update`, `Delete`
   - **Filter**: `_type in ["post", "caseStudy", "testimonial"]`
   - **HTTP method**: `POST`
   - **Secret**: same as `SANITY_WEBHOOK_SECRET`

---

## Current Schemas

| Schema | Fields | Used In |
|---|---|---|
| `post` | title, slug, excerpt, mainImage, categories, publishedAt, estimatedReadTime, body | `/blog` |
| `caseStudy` | title, slug, client, industry, result, metric, description, challenge, approach, outcome, mainImage | `/case-studies` |
| `testimonial` | name, role, quote, rating | Testimonials section |
| `category` | title, description | Blog categories |
| `blockContent` | Rich text with marks, links, images | Blog body |

---

## ISR Revalidation

The client in `lib/sanity/client.ts` uses `next: { revalidate: 60 }` — pages rebuild from Sanity data every **60 seconds** automatically. Combined with the webhook above, published changes appear within seconds.

---

## Access the Studio

Once deployed, your embedded studio is at:
```
http://localhost:3000/studio        (dev)
https://your-domain.com/studio      (prod)
https://optimax.sanity.studio       (standalone, after sanity deploy)
```

Login with your Sanity account. Add team members at [sanity.io/manage](https://sanity.io/manage) → **Members**.
