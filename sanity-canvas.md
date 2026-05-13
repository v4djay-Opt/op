# Sanity Canvas — Implementation Guide

## What is Canvas?

Sanity Canvas is an **AI-native writing workspace** (separate from your Studio) at [canvas.sanity.io](https://canvas.sanity.io). It is NOT a plugin — it's a standalone web app that connects to your Sanity project.

| Feature | Description |
|---|---|
| **AI Ghostwriter** | Writes alongside you, follows your lead, suggests content |
| **Schema-aware** | Understands your Studio schema, maps content to correct fields |
| **Send to Studio** | One-click handoff — pushes finished content into Studio documents |
| **Templates** | Reusable templates pre-configured with content types and field labels |
| **Collaboration** | Real-time multi-user editing |
| **Distraction-free** | Clean writing environment separate from Studio |

---

## How It Connects to Your Project

Canvas reads your **deployed Studio schema** from your Sanity dataset. It does NOT require any code changes to your Next.js app. The only requirement is that:
1. Your Sanity Studio schema is deployed to your dataset
2. Your Studio version is `≥ v3.88.1` (you're on `^5.24.0` — ✅ already satisfied)

---

## Implementation Plan

### Step 1 — Deploy Your Studio Schema

Since your Studio is **embedded** in Next.js at `/studio` (not Sanity-hosted), you must run:

```bash
npx sanity deploy
```

This deploys the schema to your dataset so Canvas can read it. This is **separate from your Next.js deployment** — it only pushes schema metadata to Sanity's API.

> **Note:** You need `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in your `.env.local` before running this.

---

### Step 2 — Set Up Sanity Dashboard (for Embedded Studios)

Since your Studio is self-hosted (embedded at `optimaxstudio.com/studio`), you need to connect it to the Sanity Dashboard to access Canvas.

1. Go to [sanity.io/manage](https://sanity.io/manage) → Your Project
2. Navigate to **Dashboard** → **Settings**
3. Add your Studio URL: `https://optimaxstudio.com/studio`
4. This registers your embedded Studio with the Sanity ecosystem

---

### Step 3 — Access Canvas

Once schema is deployed and Dashboard is connected:

1. Go to [canvas.sanity.io](https://canvas.sanity.io)
2. Log in with your Sanity account
3. Select your **Optimax Studio** project
4. Start writing — Canvas will show your content types (`post`, `caseStudy`, `testimonial`)

---

### Step 4 — Optional: Configure Schemas for Canvas

You can fine-tune how Canvas handles your schemas. Update your schema files in `sanity/schemas/`:

#### Hide internal/irrelevant fields from Canvas

```ts
// sanity/schemas/post.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The main headline — keep it under 70 characters for SEO.",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A 1-2 sentence summary shown in blog listings and meta tags.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      // Exclude from Canvas — auto-generated, not for writers
      options: {
        source: "title",
        maxLength: 96,
        canvasApp: { exclude: true },
      },
    }),
    defineField({
      name: "estimatedReadTime",
      title: "Estimated Read Time (minutes)",
      type: "number",
      // Exclude — technical field, not for Canvas writers
      options: { canvasApp: { exclude: true } },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      options: {
        canvasApp: {
          purpose: "Content category for blog filtering — choose the most relevant one.",
        },
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      description: "The full article content. Use headings, bullet points, and images for readability.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      options: { canvasApp: { exclude: true } },
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true, canvasApp: { exclude: true } },
    }),
  ],
});
```

#### Configure caseStudy schema

```ts
// sanity/schemas/caseStudy.ts — add canvasApp options to key fields
defineField({
  name: "result",
  title: "Result",
  type: "string",
  description: "The headline outcome — e.g. '3x increase in leads'",
  options: {
    canvasApp: {
      purpose: "The primary measurable result for this case study. Keep it punchy and data-driven.",
    },
  },
}),
```

---

### Step 5 — Redeploy Schema After Changes

After updating schema files, redeploy:

```bash
npx sanity deploy
```

Canvas will automatically pick up the new field descriptions, exclusions, and purpose hints.

---

## Canvas Workflow for Content Team

```
Canvas (canvas.sanity.io)
  └── Writer creates new document
  └── Selects content type (e.g. "Blog Post")
  └── AI Ghostwriter assists with writing
  └── Writer maps content to fields using field labels
  └── Clicks "Send to Studio"
        └── Content appears in Sanity Studio as a draft
              └── Editor reviews and publishes
                    └── Next.js fetches via GROQ and displays on site
```

---

## Current Schemas Available in Canvas

| Schema | Useful in Canvas | Fields to Exclude |
|---|---|---|
| `post` | ✅ Yes — blog writing | `slug`, `publishedAt`, `estimatedReadTime`, `mainImage` |
| `caseStudy` | ✅ Yes — case study writing | `slug`, `mainImage` |
| `testimonial` | ✅ Yes | none |
| `category` | ⚠️ Limited | `description` only |
| `blockContent` | Used internally | — |

---

## Canvas vs AI Assist — What's the Difference?

| Feature | Canvas | AI Assist (Studio plugin) |
|---|---|---|
| **Where** | canvas.sanity.io (separate app) | Inside your Studio |
| **For** | Writers creating content from scratch | Editors working on existing documents |
| **AI model** | Built-in ghostwriter | Configurable LLM (requires `@sanity/ai-assist`) |
| **Best for** | Blog posts, case studies, long-form | Translations, rewrites, field suggestions |

---

## Quick Start Commands

```bash
# 1. Ensure env vars are set
# NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
# NEXT_PUBLIC_SANITY_DATASET=production

# 2. Deploy schema to Sanity
npx sanity deploy

# 3. Go to canvas.sanity.io and connect your project
```

---

## Important Notes

- **Canvas is FREE** on all Sanity plans (as of 2025)
- Canvas works with **published documents** — it sends drafts to Studio for review before publish
- The AI ghostwriter works best when your schema fields have **clear `description` values** — the more context you give, the better field mapping works
- Canvas is accessible to **anyone with Sanity account access** to your project — manage team access at [sanity.io/manage](https://sanity.io/manage) → Members
