# Optimax Studio — Phase-Wise Development Plan

**Stack:** Next.js (App Router) + Tailwind CSS + Framer Motion + Sanity CMS + Resend + Razorpay + Vercel

---

## PHASE 1 — Project Setup + Design System

### Goal
Clean foundation, design tokens, global layout ready.

### Tasks

**Project Init**
- `npx create-next-app@latest` — App Router, TypeScript, Tailwind
- Folder structure set karo:
  ```
  /app
  /components
    /ui
    /sections
    /layout
  /lib
  /sanity
  /public
  ```
- ESLint + Prettier config
- Framer Motion install karo

**Design System (globals.css + tailwind.config)**
- Color palette define karo CSS variables mein:
  - Primary: Deep Navy `#0A0F1E`
  - Accent: Electric Blue `#2563EB`
  - Highlight: Cyan `#06B6D4`
  - Text: Off-white `#F1F5F9`
  - Muted: `#94A3B8`
- Typography:
  - Display font: `Syne` (Google Fonts) — headings ke liye
  - Body font: `DM Sans` — paragraphs ke liye
- Spacing scale, border radius, shadow tokens

**Header (Most Important)**
- Sticky header with blur backdrop (`backdrop-blur-md`)
- Logo left, nav center/right
- Nav items: Home, Services, Products, Industries, Blog, Contact
- Mobile: Hamburger menu with smooth slide-down animation (Framer Motion)
- CTA button: "Book Free Call" — accent color, prominent
- Scroll pe header background transition (transparent → dark)
- Active link indicator — animated underline

**Footer**
- Dark background, 4-column layout
- Col 1: Logo + tagline + social links
- Col 2: Services list
- Col 3: Products list
- Col 4: Contact info + WhatsApp link
- Bottom bar: Copyright + Privacy Policy
- Subtle top border with gradient

### Test Checklist
- [ ] Header responsive hai (mobile + desktop)
- [ ] Fonts load ho rahe hain
- [ ] Dark theme consistent hai
- [ ] Footer sab pages pe same hai
- [ ] No layout shift on scroll

---

## PHASE 2 — Homepage (Hero + Sections)

### Goal
High-converting homepage with killer hero section.

### Hero Section (Priority #1)
- Full viewport height
- **Background:** Animated gradient mesh + subtle grid pattern (CSS)
- **Headline:** Bold, large — `Syne` font
  - Example: "We Build Digital Machines That Generate Revenue"
- **Subheadline:** 1 line, muted color
- **2 CTAs:**
  - Primary: "Book Free Strategy Call" → contact page
  - Secondary: "See Our Work" → case studies
- **Floating cards / stats** (Framer Motion animate-in):
  - "5+ Years Experience"
  - "50+ Projects Delivered"
  - "7 Industries Served"
- **Scroll indicator** — animated arrow bottom center

### Remaining Homepage Sections
1. **Services Strip** — 5 service cards, hover effect, icon + title + 1 line
2. **Industries We Serve** — grid of 7 industries with icons
3. **Products Showcase** — horizontal scroll or grid, 5 products with CTA
4. **Why OmTech** — 3-4 USPs with icons (Experience, Speed, Support, ROI)
5. **Case Studies Preview** — 2-3 cards with results numbers
6. **Testimonials** — 3 cards, clean layout
7. **CTA Banner** — "Ready to Grow?" + Book Call button
8. **Blog Preview** — Latest 3 posts (Sanity se)

### Animations (Framer Motion)
- Hero elements — staggered fade-in on load
- Sections — `whileInView` fade-up as user scrolls
- Cards — subtle hover scale + shadow

### Test Checklist
- [ ] Hero above the fold, fast load
- [ ] Mobile mein sab sections theek dikhte hain
- [ ] CTAs prominent hain
- [ ] Animations smooth hain, no jank
- [ ] Core Web Vitals green hain (Vercel Analytics)

---

## PHASE 3 — Services + Industries + Products Pages

### Goal
Individual pages for SEO keyword coverage.

### Services Pages
- `/services` — all services listing page
- `/services/web-design-development`
- `/services/digital-marketing`
- `/services/social-media-management`
- `/services/crm-custom-portals`
- `/services/seo`

**Each Service Page Structure:**
- Hero: Title + tagline + CTA
- What we do (3-4 points)
- Process (step 1 → 2 → 3 → 4)
- Results / Stats
- Related case study
- FAQ section (Schema markup ke saath)
- Bottom CTA

### Industries Pages
- `/industries` — listing page
- Individual page har industry ke liye (7 pages)
- `/industries/real-estate`, `/industries/schools-education` etc.

**Each Industry Page Structure:**
- Pain points of that industry
- How OmTech solves them
- Relevant services + products
- CTA

### Products Pages
- `/products` — all products listing
- `/products/school-management-system`
- `/products/hospital-management-system`
- `/products/gym-management-system`
- `/products/real-estate-crm`
- `/products/interior-design-crm`

**Each Product Page Structure:**
- Hero: Product name + tagline + "Request Demo" CTA
- Features list (icon grid)
- Screenshots / mockups
- Pricing section (Razorpay integrate karo)
- FAQ
- Contact/Demo form

### SEO Per Page
- Unique `metadata` export — title, description
- OG tags
- Schema markup — `Service` / `Product` / `FAQPage`
- Breadcrumbs

### Test Checklist
- [ ] Har page ka unique title + description hai
- [ ] Schema markup valid hai (Google Rich Results Test)
- [ ] Internal linking between services + products + industries
- [ ] Mobile responsive
- [ ] CTA har page pe hai

---

## PHASE 4 — Sanity CMS + Blog + Case Studies

### Goal
Content management ready, blog live, leads capture start.

### Sanity Setup
- `npm create sanity@latest` — project init
- Schemas banao:
  - `post` — blog posts
  - `caseStudy` — results + client info
  - `testimonial` — client reviews
  - `service` — service details (optional)
- Sanity Studio deploy karo (`/studio` route)
- Next.js mein `sanity/client` configure karo
- GROQ queries — blog list, single post, case studies

### Blog
- `/blog` — listing page, paginated
- `/blog/[slug]` — single post page
- Categories / tags support
- Reading time estimate
- Related posts
- Social share buttons
- SEO: metadata, OG image, Article schema

### Case Studies
- `/case-studies` — listing page
- `/case-studies/[slug]` — detail page
- Results numbers prominent dikhao
- Industry tag

### Test Checklist
- [ ] Sanity Studio login ho raha hai
- [ ] Blog post publish → site pe dikh raha hai
- [ ] Images optimized hain (Next.js Image component)
- [ ] Slug based routing kaam kar raha hai
- [ ] RSS feed `/feed.xml` generate ho raha hai

---

## PHASE 5 — Contact + Leads + Payment + SEO Final

### Goal
Leads capture, payment, aur SEO finalize.

### Contact Page
- `/contact` — form + info
- Form fields: Name, Email, Phone, Service interested in, Message
- Resend se email — tere inbox pe aaye
- WhatsApp button
- Google Maps embed (office location)
- "Book Free Call" — Cal.com embed

### Lead Flow
```
Form submit → Next.js API route (/api/contact) → Resend → Email to omtech inbox
```

### Razorpay Integration
- `/products/[slug]` pe "Buy Now" / "Request Demo" button
- Payment link ya checkout — Razorpay
- Success page after payment

### Technical SEO Final
- `sitemap.xml` — dynamic, Next.js se auto-generate
- `robots.txt`
- `manifest.json` — PWA basic
- 404 page — custom, branded
- Canonical URLs sab pages pe
- Image alt tags sab jagah
- Internal linking audit

### Analytics
- Google Search Console — verify + submit sitemap
- Vercel Analytics enable karo
- Google Analytics 4 (optional)

### Performance
- Lighthouse score target: 90+ all categories
- Image optimization check
- Font loading optimize karo (`font-display: swap`)

### Test Checklist
- [ ] Form submit ho raha hai, email aa raha hai
- [ ] Razorpay payment test mode mein kaam kar raha hai
- [ ] Sitemap Google Search Console mein submit
- [ ] Lighthouse 90+ hai
- [ ] SSL certificate active hai (Vercel auto)
- [ ] All links working, no 404s

---

## PHASE 6 — Final QA + Deployment

### Goal
Production ready, live karo.

### Pre-Launch Checklist
- [ ] Sab environment variables Vercel mein set hain
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `SANITY_API_TOKEN`
  - `RESEND_API_KEY`
  - `RAZORPAY_KEY_ID`
  - `RAZORPAY_KEY_SECRET`
- [ ] Domain connect karo Vercel pe
- [ ] www redirect set karo
- [ ] HTTPS working
- [ ] Mobile test — sab pages
- [ ] Cross browser test — Chrome, Safari, Firefox
- [ ] Forms test — real email aaya?
- [ ] Payment test — real transaction?
- [ ] Sanity Studio production mein kaam kar raha hai

### Go Live
- Vercel pe deploy
- Google Search Console mein domain verify
- Sitemap submit
- Google Business Profile update — website link

---

## Summary

| Phase | Focus | Est. Time |
|-------|-------|-----------|
| 1 | Setup + Header + Footer | 1-2 days |
| 2 | Homepage | 2-3 days |
| 3 | Services + Industries + Products pages | 3-4 days |
| 4 | Sanity + Blog + Case Studies | 2-3 days |
| 5 | Contact + Leads + Payment + SEO | 2-3 days |
| 6 | QA + Deployment | 1 day |

**Total: ~12-16 days**

---

*Har phase complete karo, test karo, tab next phase shuru karo.*
*Sonnet ko ek phase at a time do — poora context ek saath mat dena.*
