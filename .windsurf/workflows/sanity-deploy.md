---
description: How to deploy / publish Sanity Studio and manage CMS content
---

# Sanity Studio Deployment Guide

## 1. Set up environment variables
Ensure `.env.local` has these values filled in (copy from `.env.example`):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token
```
Get these from https://sanity.io/manage → your project → API tab.

## 2. Deploy Sanity Studio (embedded at /studio)
The Studio is embedded inside the Next.js app at `/studio`. It deploys automatically when you deploy the Next.js app (Netlify / Vercel).

To deploy the Studio standalone (optional):
```
npx sanity deploy
```
Choose a studio hostname e.g. `optimaxstudio.sanity.studio`.

## 3. First-time Sanity project setup
If starting fresh:
```
npx sanity init
```
Then link the project ID in `.env.local`.

## 4. Add content in Sanity Studio
1. Go to `http://localhost:3000/studio` (local) or `https://your-site.com/studio` (live)
2. Click **Blog Post** or **Case Study** to create new content
3. Fill in: Title → Slug (auto-generated) → Excerpt → Main Image → OG Image → Body
4. For Case Studies: fill Client, Industry, Result, Metric, Challenge, Approach, Outcome
5. Click **Publish**

## 5. Content shows on website
- Blog posts appear at `/blog` and `/blog/[slug]`
- Case studies appear at `/case-studies` and `/case-studies/[slug]`
- No code changes needed — fetched live from Sanity API

## 6. Schema changes (adding new fields)
Edit files in `sanity/schemas/` then redeploy the Next.js app. No separate Sanity deploy needed for schema changes when Studio is embedded.

## 7. CORS / API token issues
Go to https://sanity.io/manage → your project → API → CORS Origins
Add your live domain e.g. `https://optimaxstudio.com` with credentials allowed.
