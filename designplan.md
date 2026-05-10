# Optimax Studio — Complete Redesign Plan

> **Inspired by:** Finsync-style light, clean, nature-accented SaaS aesthetic
> **Tech Stack:** Next.js App Router · Tailwind CSS v4 · Framer Motion · Lucide Icons
> **Current State:** Dark navy theme → **Target:** Light, airy, modern with soft green/nature accents

---

## Table of Contents

1. [Design Tokens & Color Palette](#1-design-tokens--color-palette)
2. [Typography System](#2-typography-system)
3. [Global CSS Changes](#3-global-css-changes)
4. [Component File Structure](#4-component-file-structure)
5. [Section-by-Section Breakdown](#5-section-by-section-breakdown)
   - 5.1 Header (Sticky Minimal)
   - 5.2 Hero (Nature Gradient + Floating UI Cards)
   - 5.3 Trusted By / Logos Strip
   - 5.4 Services (Side-by-Side Feature Sections)
   - 5.5 Products Showcase (Floating Mockup Cards)
   - 5.6 Industries Grid
   - 5.7 Stats Row
   - 5.8 How It Works (Step-by-Step)
   - 5.9 Why Optimax (Feature Highlight)
   - 5.10 Case Studies
   - 5.11 Testimonials Carousel
   - 5.12 Pricing Cards
   - 5.13 Integrations / Tech Grid
   - 5.14 Blog / Insights
   - 5.15 Final CTA Section
   - 5.16 Footer
6. [Shared UI Components](#6-shared-ui-components)
7. [Framer Motion Patterns](#7-framer-motion-patterns)
8. [Mobile Responsiveness Rules](#8-mobile-responsiveness-rules)
9. [Migration Checklist](#9-migration-checklist)

---

## 1. Design Tokens & Color Palette

### Replace current `globals.css` `@theme` block

```css
@theme inline {
  /* --- LIGHT PALETTE --- */
  --color-background: #FAFBF6;        /* warm off-white, slight green tint */
  --color-surface: #FFFFFF;            /* card backgrounds */
  --color-surface-alt: #F3F5EF;       /* alternating section bg */
  --color-surface-glass: rgba(255,255,255,0.7); /* glassmorphism panels */

  /* Text */
  --color-text: #1A1A2E;              /* near-black for headings */
  --color-text-secondary: #4A4A68;    /* body copy */
  --color-muted: #8B8BA3;             /* captions, hints */

  /* Brand Accent — muted sage/teal green */
  --color-accent: #2D8C6E;            /* primary green */
  --color-accent-hover: #237358;      /* darker on hover */
  --color-accent-light: #E8F5EE;      /* light green tint for badges/tags */
  --color-accent-muted: #B8DFC9;      /* soft green for borders, illustrations */

  /* Secondary accent — warm amber (for highlights) */
  --color-highlight: #E8A838;
  --color-highlight-light: #FFF7E6;

  /* Borders & Dividers */
  --color-border: #E5E7EB;            /* gray-200 equivalent */
  --color-border-light: #F0F1EC;      /* very subtle dividers */

  /* Nature gradient stops (hero background) */
  --color-nature-sky: #E8F0E4;        /* top of hero — pale green sky */
  --color-nature-grass: #C5D9A4;      /* mid — soft grass green */
  --color-nature-field: #D4DFC2;      /* bottom — wheat/field */

  /* Fonts (keep current Syne + DM Sans) */
  --font-display: var(--font-syne);
  --font-body: var(--font-dm-sans);

  /* Radii — slightly larger for the clean look */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.25rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 2rem;

  /* Shadows — soft, diffused */
  --shadow-sm: 0 1px 3px 0 rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px -2px rgba(0,0,0,0.06);
  --shadow-lg: 0 12px 32px -8px rgba(0,0,0,0.08);
  --shadow-xl: 0 24px 48px -12px rgba(0,0,0,0.1);
  --shadow-card: 0 2px 16px -4px rgba(0,0,0,0.06);
  --shadow-card-hover: 0 8px 32px -8px rgba(0,0,0,0.1);
  --shadow-glow: 0 0 40px -10px rgba(45,140,110,0.2);
}
```

### Key Color Mapping (Old → New)

| Old Token | Old Value | New Token | New Value |
|-----------|-----------|-----------|-----------|
| `navy-900` | `#0A0F1E` | `background` | `#FAFBF6` |
| `navy-800` | `#0F172A` | `surface-alt` | `#F3F5EF` |
| `navy-700` | `#1E293B` | `surface` | `#FFFFFF` |
| `accent` | `#2563EB` (blue) | `accent` | `#2D8C6E` (sage green) |
| `text` | `#F1F5F9` (light) | `text` | `#1A1A2E` (dark) |
| `muted` | `#94A3B8` | `muted` | `#8B8BA3` |
| `highlight` | `#06B6D4` (cyan) | `highlight` | `#E8A838` (amber) |
| `white/5` borders | rgba white | `border` | `#E5E7EB` |

---

## 2. Typography System

### Font Pairing (Keep Current)

- **Display/Headings:** `Syne` (variable: `--font-syne`) — Bold, geometric, modern
- **Body:** `DM Sans` (variable: `--font-dm-sans`) — Clean, readable

### Typography Scale

| Element | Class | Size | Weight | Color |
|---------|-------|------|--------|-------|
| H1 (Hero) | `text-5xl sm:text-6xl lg:text-7xl` | 48/60/72px | `font-bold` | `text-text` |
| H2 (Section) | `text-3xl md:text-4xl lg:text-5xl` | 30/36/48px | `font-bold` | `text-text` |
| H3 (Card title) | `text-xl lg:text-2xl` | 20/24px | `font-semibold` | `text-text` |
| H4 (Sub-heading) | `text-lg` | 18px | `font-semibold` | `text-text` |
| Body | `text-base` | 16px | `font-normal` | `text-secondary` |
| Body small | `text-sm` | 14px | `font-normal` | `text-secondary` |
| Caption | `text-xs` | 12px | `font-medium` | `text-muted` |
| Label/Tag | `text-xs` | 12px | `font-semibold uppercase tracking-wider` | `text-accent` |

### Italic Accent Pattern (Inspired by Reference Image)

Headings use a pattern where one or two key words are wrapped in `<em>`:

```tsx
<h2 className="text-4xl font-bold text-text font-display">
  Services Built for <em className="not-italic font-display text-accent">Growth</em>
</h2>
```

Alternative — true italic with serif feel (add Playfair Display for italic words only):

```tsx
<em className="italic font-serif text-accent">Growth</em>
```

**Recommendation:** Use the Syne italic variant for accent words. Apply `italic text-accent` class. If Syne italic is too subtle, add `Playfair Display` as a third font just for italic accent words:

```ts
// layout.tsx — add if using serif italic
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});
```

```css
--font-serif: var(--font-playfair);
```

---

## 3. Global CSS Changes

### `app/globals.css` — Full replacement

```css
@import "tailwindcss";

@theme inline {
  /* paste full token block from Section 1 */
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-background);
  color: var(--color-text-secondary);
  font-family: var(--font-dm-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background-color: rgba(45, 140, 110, 0.2);
  color: var(--color-text);
}

/* Smooth mesh animation for hero blobs */
@keyframes mesh {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(2%, 3%) scale(1.02); }
  66%  { transform: translate(-1%, 1%) scale(0.98); }
  100% { transform: translate(0, 0) scale(1); }
}
.animate-mesh {
  animation: mesh 20s ease-in-out infinite;
}

/* Float animation for mockup cards */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-12px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float 6s ease-in-out 2s infinite;
}

/* Prose styles for blog/CMS content */
.prose h2 {
  color: var(--color-text);
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.prose h3 {
  color: var(--color-text);
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
}
.prose p {
  color: var(--color-text-secondary);
  line-height: 1.75;
  margin-bottom: 1.25rem;
}
.prose a {
  color: var(--color-accent);
  text-decoration: underline;
}
.prose strong {
  color: var(--color-text);
  font-weight: 600;
}
.prose ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
.prose ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
.prose li { color: var(--color-text-secondary); margin-bottom: 0.5rem; }
.prose blockquote {
  border-left: 3px solid var(--color-accent);
  padding-left: 1rem;
  font-style: italic;
  color: var(--color-muted);
  margin: 1.5rem 0;
}
.prose img { border-radius: 1rem; margin: 1.5rem 0; }
```

### `app/layout.tsx` — Body class change

```tsx
<body className="min-h-full flex flex-col bg-background text-text-secondary">
```

---

## 4. Component File Structure

```
components/
├── layout/
│   ├── Header.tsx              ← Sticky minimal light header
│   └── Footer.tsx              ← Clean light footer with columns
├── sections/
│   ├── Hero.tsx                ← Nature gradient + floating UI cards
│   ├── LogoStrip.tsx           ← NEW: Trusted by logos
│   ├── ServicesFeature.tsx     ← Side-by-side feature layout (replaces ServicesStrip)
│   ├── ProductsShowcase.tsx    ← Floating mockup cards grid
│   ├── Industries.tsx          ← Icon grid
│   ├── StatsRow.tsx            ← NEW: Big numbers row
│   ├── HowItWorks.tsx          ← NEW: Step-by-step process
│   ├── WhyOptimax.tsx          ← Feature highlights
│   ├── CaseStudies.tsx         ← Results cards
│   ├── Testimonials.tsx        ← Carousel with quotes
│   ├── PricingCards.tsx        ← NEW: Pricing tiers
│   ├── IntegrationsGrid.tsx    ← NEW: Tech/tools logos
│   ├── BlogPreview.tsx         ← Latest insights cards
│   └── CTABanner.tsx           ← Full-width nature CTA
├── ui/
│   ├── FadeIn.tsx              ← Keep (already works great)
│   ├── SlideIn.tsx             ← NEW: Horizontal slide animations
│   ├── NavDropdown.tsx         ← Update colors for light theme
│   ├── PageHero.tsx            ← Update for light theme
│   ├── BottomCTA.tsx           ← Update for light theme
│   ├── Breadcrumbs.tsx         ← Update for light theme
│   ├── FAQSection.tsx          ← Update for light theme
│   ├── Badge.tsx               ← NEW: Reusable section label badge
│   ├── SectionHeading.tsx      ← NEW: Reusable heading with italic accent
│   ├── Card.tsx                ← NEW: Reusable card wrapper
│   └── FloatingMockup.tsx      ← NEW: Animated floating screenshot card
```

---

## 5. Section-by-Section Breakdown

---

### 5.1 Header — `components/layout/Header.tsx`

**Visual:** Sticky, minimal, white background with subtle bottom border on scroll. Clean logo left, nav center, CTA right. Pill-shaped CTA button in green.

#### Layout & Classes

```
Container:   fixed top-0 left-0 right-0 z-50 transition-all duration-500
Default:     bg-transparent
Scrolled:    bg-white/80 backdrop-blur-xl border-b border-border shadow-sm
Inner:       mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
Height:      h-16 lg:h-20
```

#### Logo
```tsx
<Link href="/" className="flex items-center gap-1.5">
  <span className="text-xl font-bold tracking-tight font-display text-text">
    Optimax
  </span>
  <span className="text-accent text-xl font-bold tracking-tight font-display">.</span>
</Link>
```

#### Desktop Nav Links
```
Container:   hidden lg:flex items-center gap-8
Link:        text-sm font-medium text-text-secondary transition-colors hover:text-accent
Active:      text-accent
```

Dropdown (Services/Products) — update `NavDropdown.tsx`:
```
Dropdown panel:   bg-white rounded-2xl border border-border shadow-xl p-2
Item hover:       hover:bg-surface-alt rounded-xl
Label text:       text-sm font-medium text-text
Description:      text-xs text-muted
```

#### CTA Button
```
rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white
transition-all hover:bg-accent-hover hover:shadow-glow
```

#### Mobile Menu Overlay
```
Background:  bg-white/95 backdrop-blur-xl (not dark navy)
Link text:   text-2xl font-semibold text-text font-display
Hover:       hover:text-accent
```

#### Framer Motion
- Header: fade-in on mount (`initial={{ y: -20 }} animate={{ y: 0 }}`)
- Mobile overlay: `initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}`

#### Mobile Notes
- `lg:hidden` for hamburger
- Full-screen overlay with scroll lock
- Accordion sub-menus for Services/Products

---

### 5.2 Hero — `components/sections/Hero.tsx`

**Visual:** Full-viewport hero with soft nature gradient background (pale green → soft cream). Centered heading with italic accent word. Two CTA buttons. Floating UI mockup cards on sides. Soft landscape/nature illustration behind content.

#### Background
```tsx
<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
  {/* Nature gradient background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-nature-sky via-nature-field/30 to-background" />
    {/* Soft green blob — top left */}
    <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent-muted/20 blur-[120px] animate-mesh" />
    {/* Warm blob — top right */}
    <div className="absolute -top-20 -right-40 h-[400px] w-[400px] rounded-full bg-highlight-light/40 blur-[100px] animate-mesh" />
    {/* Grass/field illustration — consider an SVG wave or photo */}
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
  </div>
```

#### Content Block
```tsx
<div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
  {/* Eyebrow badge */}
  <motion.div ...>
    <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
      Digital Agency Since 2019
    </span>
  </motion.div>

  {/* Main heading — italic accent word */}
  <motion.h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-text leading-[1.08] tracking-tight">
    We Build Digital Machines<br />
    That <em className="italic text-accent">Generate Revenue</em>
  </motion.h1>

  {/* Subheading */}
  <motion.p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
    From stunning websites to powerful CRMs — we deliver results
    that transform your business into a revenue engine.
  </motion.p>

  {/* CTAs */}
  <motion.div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
    <Link className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5">
      Book Free 30-Min Strategy Call
      <ArrowRight className="h-5 w-5" />
    </Link>
    <Link className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-medium text-text transition-all hover:border-accent hover:shadow-sm">
      See Our Work
    </Link>
  </motion.div>
</div>
```

#### Floating UI Mockup Cards (Desktop Only)
```tsx
{/* Left floating card */}
<motion.div
  initial={{ opacity: 0, x: -40, y: 20 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="absolute left-[5%] top-[30%] hidden xl:block animate-float"
>
  <div className="w-56 rounded-2xl bg-white border border-border shadow-card p-4">
    <div className="text-3xl font-bold text-accent font-display">50+</div>
    <div className="text-xs text-muted mt-1">Projects Delivered</div>
    <div className="mt-3 h-1.5 w-full rounded-full bg-surface-alt">
      <div className="h-full w-3/4 rounded-full bg-accent" />
    </div>
  </div>
</motion.div>

{/* Right floating card */}
<motion.div
  initial={{ opacity: 0, x: 40, y: -20 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  transition={{ delay: 1.0, duration: 0.8 }}
  className="absolute right-[5%] top-[25%] hidden xl:block animate-float-delayed"
>
  <div className="w-48 rounded-2xl bg-white border border-border shadow-card p-4">
    <div className="flex items-center gap-2 mb-2">
      <div className="h-8 w-8 rounded-lg bg-accent-light flex items-center justify-center">
        <TrendingUp className="h-4 w-4 text-accent" />
      </div>
      <span className="text-xs font-medium text-muted">Revenue Growth</span>
    </div>
    <div className="text-2xl font-bold text-text font-display">3x</div>
    <div className="text-xs text-accent mt-0.5">↑ Average for clients</div>
  </div>
</motion.div>

{/* Bottom center card */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.8 }}
  className="absolute bottom-[15%] right-[12%] hidden lg:block animate-float"
>
  <div className="w-52 rounded-2xl bg-white border border-border shadow-card p-4">
    <div className="text-sm font-semibold text-text">7 Industries</div>
    <div className="text-xs text-muted">Served since 2019</div>
    <div className="flex gap-1 mt-2">
      {/* small colored dots representing industries */}
      {[...Array(7)].map((_, i) => (
        <div key={i} className="h-2 w-2 rounded-full bg-accent" style={{ opacity: 1 - i * 0.1 }} />
      ))}
    </div>
  </div>
</motion.div>
```

#### Scroll Indicator
```tsx
<motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2">
  <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
  <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
    <ChevronDown className="h-5 w-5 text-muted" />
  </motion.div>
</motion.div>
```

#### Framer Motion
- H1: `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} duration: 0.7`
- Subtext: `delay: 0.2`
- CTAs: `delay: 0.4`
- Floating cards: `delay: 0.8, 1.0, 1.2` with `animate-float` CSS
- Badge: `delay: 0, scale from 0.9`

#### Mobile
- Hide floating mockup cards below `xl:` or `lg:`
- Stack CTAs vertically on `sm:` down
- Reduce heading to `text-4xl`
- Remove background blobs on small screens for perf

---

### 5.3 LogoStrip (Trusted By) — `components/sections/LogoStrip.tsx` — NEW

**Visual:** Horizontal row of grayscale client/partner logos, auto-scrolling marquee.

```
Section:     py-12 lg:py-16 border-y border-border-light
Label:       text-center text-xs font-semibold text-muted uppercase tracking-wider mb-8
Logo row:    flex items-center gap-12 overflow-hidden (CSS marquee)
Logo:        h-8 w-auto grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all
```

Use a CSS infinite scroll animation or `framer-motion` drag marquee.

#### Mobile
- 2-row grid instead of marquee: `grid grid-cols-3 sm:grid-cols-4 gap-6`

---

### 5.4 Services — `components/sections/ServicesFeature.tsx`

**Visual:** Multiple side-by-side blocks. Each service gets a row with text on one side, floating screenshot/illustration on the other. Alternating left/right layout. Like the Finsync feature showcase sections.

#### Section Wrapper
```
Section:     py-20 lg:py-28 px-4
Container:   mx-auto max-w-7xl
```

#### Section Heading
```tsx
<SectionHeading
  label="What We Do"
  title={<>Services Built for <em className="italic text-accent">Growth</em></>}
  description="We don't just build — we engineer revenue machines tailored to your industry."
/>
```

#### Each Feature Row (alternating)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 border-b border-border-light last:border-0">
  {/* Text side */}
  <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
    <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-accent mb-4">
        <service.icon className="h-6 w-6" />
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold text-text font-display mb-4">
        {service.title}
      </h3>
      <p className="text-text-secondary leading-relaxed mb-6">
        {service.description}
      </p>
      <ul className="space-y-3">
        {service.bullets.map(b => (
          <li className="flex items-start gap-3 text-sm text-text-secondary">
            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            {b}
          </li>
        ))}
      </ul>
      <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </FadeIn>

  {/* Mockup/illustration side */}
  <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
    <div className={`${i % 2 === 1 ? "lg:order-1" : ""} relative`}>
      <div className="rounded-3xl bg-surface-alt border border-border p-4 shadow-card">
        {/* placeholder for screenshot / illustration */}
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent-light to-accent-muted/20 flex items-center justify-center">
          <service.icon className="h-16 w-16 text-accent/30" />
        </div>
      </div>
      {/* Small floating stat card */}
      <div className="absolute -bottom-4 -right-4 rounded-xl bg-white border border-border shadow-md px-4 py-3 animate-float">
        <div className="text-lg font-bold text-accent font-display">{service.stat}</div>
        <div className="text-xs text-muted">{service.statLabel}</div>
      </div>
    </div>
  </FadeIn>
</div>
```

#### Data Shape
```ts
const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Custom, high-performance websites that convert visitors into customers. We build fast, responsive, SEO-optimized experiences.",
    bullets: [
      "Custom UI/UX design from scratch",
      "Next.js / React development",
      "Mobile-first responsive builds",
      "Performance & Core Web Vitals optimized",
    ],
    stat: "50+",
    statLabel: "Websites Delivered",
    href: "/services/web-design-development",
  },
  // ... more services
];
```

#### Framer Motion
- Text side: `FadeIn direction="left"` (or "right" for alternating)
- Mockup side: `FadeIn direction="right"` (or "left")
- Floating stat card: gentle `animate-float`
- Stagger: each row triggers on scroll via `whileInView`

#### Mobile
- Single column stack: `grid-cols-1`
- Image always on top: remove `order` classes
- Reduce heading to `text-xl`
- Hide floating stat cards below `md:`

---

### 5.5 Products Showcase — `components/sections/ProductsShowcase.tsx`

**Visual:** Grid of product cards with floating mockup previews. Each card is a white card with border, icon, title, description, and a "Request Demo" link.

#### Section Wrapper
```
Section:     py-20 lg:py-28 px-4 bg-surface-alt
Container:   mx-auto max-w-7xl
```

#### SectionHeading
```
Label:       "Products"
Title:       <>Ready-to-Deploy <em>Solutions</em></>
Description: "Industry-specific software, customized and launched within days."
```

#### Card Grid
```
Grid:        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
```

#### Individual Card
```tsx
<Link href={product.href} className="group relative flex flex-col rounded-2xl bg-white border border-border p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 h-full">
  {/* Icon */}
  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-accent transition-colors group-hover:bg-accent group-hover:text-white">
    <product.icon className="h-6 w-6" />
  </div>

  {/* Title */}
  <h3 className="text-lg font-semibold text-text font-display mb-2">
    {product.name}
  </h3>

  {/* Description */}
  <p className="text-sm text-text-secondary leading-relaxed flex-1">
    {product.tagline}
  </p>

  {/* CTA link */}
  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5">
    Request Demo
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </div>
</Link>
```

#### Framer Motion
- Cards: `FadeIn delay={i * 0.1}` stagger on scroll

#### Mobile
- `grid-cols-1` on mobile → `sm:grid-cols-2` → `lg:grid-cols-3`

---

### 5.6 Industries Grid — `components/sections/Industries.tsx`

**Visual:** Grid of industry tiles — small white cards with icons and labels. Clean, tight grid.

#### Layout
```
Section:     py-20 lg:py-28 px-4
Grid:        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4
```

#### Individual Tile
```tsx
<Link href={industry.href} className="group flex flex-col items-center rounded-2xl bg-white border border-border p-5 text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 hover:border-accent/30">
  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-alt text-muted transition-all group-hover:bg-accent-light group-hover:text-accent">
    <industry.icon className="h-6 w-6" />
  </div>
  <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
    {industry.label}
  </span>
</Link>
```

#### Mobile
- `grid-cols-2` on small screens, `sm:grid-cols-3`
- Slightly smaller padding: `p-4`

---

### 5.7 Stats Row — `components/sections/StatsRow.tsx` — NEW

**Visual:** Horizontal row of 4 big numbers with labels underneath. Placed on a white card or inline. Clean dividers between stats. Inspired by the image's numbers row.

```
Section:     py-16 px-4
Container:   mx-auto max-w-5xl
```

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border">
  {stats.map((stat, i) => (
    <FadeIn key={stat.label} delay={i * 0.1}>
      <div className="flex flex-col items-center text-center px-6">
        <motion.span
          className="text-4xl lg:text-5xl font-bold text-text font-display"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: i * 0.1 }}
        >
          {stat.value}
        </motion.span>
        <span className="mt-2 text-sm text-muted">{stat.label}</span>
      </div>
    </FadeIn>
  ))}
</div>
```

#### Data
```ts
const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "7", label: "Industries Served" },
  { value: "3x", label: "Avg Revenue Growth" },
];
```

#### Framer Motion
- Numbers: spring scale animation `{ type: "spring", stiffness: 200 }`
- Counter animation (optional): animate from 0 to number using `useMotionValue` + `useTransform`

#### Mobile
- `grid-cols-2` on mobile with `gap-8`
- No dividers on mobile — remove `md:divide-x`

---

### 5.8 How It Works — `components/sections/HowItWorks.tsx` — NEW

**Visual:** 3–4 step process. Large step numbers, title, description. Side-by-side layout or horizontal cards. Connecting line between steps.

```
Section:     py-20 lg:py-28 px-4 bg-surface-alt
Container:   mx-auto max-w-7xl
```

#### SectionHeading
```
Label:       "Process"
Title:       <>How We <em>Work</em></>
```

#### Steps Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
  {/* Connecting line (desktop only) */}
  <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

  {steps.map((step, i) => (
    <FadeIn key={step.title} delay={i * 0.15}>
      <div className="relative flex flex-col items-center text-center">
        {/* Step number circle */}
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white text-xl font-bold font-display shadow-md mb-6">
          {i + 1}
        </div>
        <h3 className="text-lg font-semibold text-text font-display mb-2">{step.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed max-w-xs">{step.description}</p>
      </div>
    </FadeIn>
  ))}
</div>
```

#### Data
```ts
const steps = [
  {
    title: "Discovery Call",
    description: "We audit your digital presence and understand your business goals in a free 30-minute call.",
  },
  {
    title: "Strategy & Build",
    description: "Our team designs and develops your solution with weekly milestones and transparent updates.",
  },
  {
    title: "Launch & Scale",
    description: "We launch, monitor performance, and iterate to maximize your ROI month over month.",
  },
];
```

#### Mobile
- Single column, vertical line instead of horizontal
- Steps stack naturally

---

### 5.9 Why Optimax — `components/sections/WhyOptimax.tsx`

**Visual:** 4 cards in a 2×2 or 1×4 grid. Each has an icon in a colored circle, title, and description. White cards on light background.

#### Layout
```
Section:     py-20 lg:py-28 px-4
Grid:        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
```

#### Card
```tsx
<div className="group flex flex-col rounded-2xl bg-white border border-border p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5">
  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
    <reason.icon className="h-6 w-6" />
  </div>
  <h3 className="text-lg font-semibold text-text font-display mb-2">{reason.title}</h3>
  <p className="text-sm text-text-secondary leading-relaxed">{reason.description}</p>
</div>
```

---

### 5.10 Case Studies — `components/sections/CaseStudies.tsx`

**Visual:** 3 cards in a row. Each card has a white background, industry badge, large gradient result number, client name, description, and a read link.

#### Card
```tsx
<Link href={c.href} className="group flex flex-col rounded-2xl bg-white border border-border p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 h-full">
  {/* Badge row */}
  <div className="flex items-center justify-between mb-5">
    <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
      {c.industry}
    </span>
    <TrendingUp className="h-5 w-5 text-accent/30 group-hover:text-accent/60 transition-colors" />
  </div>

  {/* Big result */}
  <div className="mb-5">
    <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-muted font-display leading-tight">
      {c.result}
    </div>
    <div className="text-sm font-medium text-muted mt-1">{c.metric}</div>
  </div>

  <h3 className="text-xl font-semibold text-text font-display mb-2">{c.client}</h3>
  <p className="text-sm text-text-secondary leading-relaxed flex-1">{c.description}</p>

  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
    Read Case Study
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </div>
</Link>
```

---

### 5.11 Testimonials Carousel — `components/sections/Testimonials.tsx`

**Visual:** Single testimonial visible at a time with navigation dots and arrow buttons. Large quote, avatar, name, role. Clean white card centered.

#### Layout
```
Section:     py-20 lg:py-28 px-4 bg-surface-alt
Container:   mx-auto max-w-3xl text-center
```

#### Carousel Card
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={activeIndex}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.4 }}
    className="rounded-3xl bg-white border border-border p-10 shadow-card"
  >
    {/* Stars */}
    <div className="flex justify-center gap-1 mb-6">
      {Array.from({ length: t.rating }).map((_, j) => (
        <Star key={j} className="h-5 w-5 fill-highlight text-highlight" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-xl lg:text-2xl text-text leading-relaxed font-medium">
      &ldquo;{t.quote}&rdquo;
    </p>

    {/* Author */}
    <div className="mt-8 flex flex-col items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent font-bold text-sm font-display">
        {t.name.split(" ").map(n => n[0]).join("")}
      </div>
      <div className="text-sm font-semibold text-text">{t.name}</div>
      <div className="text-xs text-muted">{t.role}</div>
    </div>
  </motion.div>
</AnimatePresence>

{/* Navigation dots */}
<div className="flex justify-center gap-2 mt-8">
  {testimonials.map((_, i) => (
    <button
      onClick={() => setActiveIndex(i)}
      className={`h-2.5 w-2.5 rounded-full transition-all ${
        i === activeIndex ? "bg-accent w-8" : "bg-border hover:bg-muted"
      }`}
    />
  ))}
</div>
```

#### Framer Motion
- `AnimatePresence mode="wait"` with slide left/right
- Auto-rotate every 5s with `useEffect` interval
- Dots: transition width on active

#### Mobile
- Full width card
- Reduce quote text to `text-lg`
- Swipe support via `drag="x"` on motion.div

---

### 5.12 Pricing Cards — `components/sections/PricingCards.tsx` — NEW

**Visual:** 3 pricing tiers in a row. One highlighted (recommended). White cards with green accent for featured.

```
Section:     py-20 lg:py-28 px-4
Grid:        grid grid-cols-1 md:grid-cols-3 gap-6 items-start
```

#### Standard Card
```tsx
<div className="flex flex-col rounded-2xl bg-white border border-border p-8 h-full">
  <h3 className="text-lg font-semibold text-text font-display">{plan.name}</h3>
  <p className="text-sm text-muted mt-1">{plan.description}</p>
  <div className="mt-6 flex items-baseline gap-1">
    <span className="text-4xl font-bold text-text font-display">{plan.price}</span>
    {plan.period && <span className="text-sm text-muted">/{plan.period}</span>}
  </div>
  <ul className="mt-8 space-y-3 flex-1">
    {plan.features.map(f => (
      <li className="flex items-start gap-3 text-sm text-text-secondary">
        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
        {f}
      </li>
    ))}
  </ul>
  <Link className="mt-8 block text-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-text hover:bg-surface-alt transition-colors">
    Get Started
  </Link>
</div>
```

#### Featured Card (middle)
```tsx
<div className="flex flex-col rounded-2xl bg-accent text-white p-8 shadow-lg relative h-full">
  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-highlight px-4 py-1 text-xs font-bold text-white">
    Most Popular
  </div>
  {/* same structure but white text, button is bg-white text-accent */}
</div>
```

#### Data
```ts
const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started online",
    price: "₹29,999",
    period: "project",
    features: [
      "5-page responsive website",
      "Basic SEO setup",
      "Contact form integration",
      "Mobile optimized",
      "1 month free support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    description: "For businesses ready to scale",
    price: "₹79,999",
    period: "project",
    features: [
      "Custom web app / CRM",
      "Advanced SEO & analytics",
      "Social media setup",
      "Lead capture funnels",
      "3 months free support",
      "Priority delivery",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale custom solutions",
    price: "Custom",
    period: null,
    features: [
      "Full custom portal / SaaS",
      "Dedicated project manager",
      "API integrations",
      "Ongoing maintenance",
      "SLA-backed support",
      "White-label options",
    ],
    featured: false,
  },
];
```

---

### 5.13 Integrations / Tech Grid — `components/sections/IntegrationsGrid.tsx` — NEW

**Visual:** Grid of technology/tool logos in small white cards. Shows tech stack and platforms we integrate with.

```
Section:     py-20 lg:py-28 px-4 bg-surface-alt
Grid:        grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4
```

```tsx
<div className="flex flex-col items-center rounded-2xl bg-white border border-border p-5 transition-all hover:shadow-card-hover hover:-translate-y-1">
  {/* Use SVG logos or simple text placeholders */}
  <div className="h-10 w-10 mb-2 flex items-center justify-center text-muted">
    <img src={tool.logo} alt={tool.name} className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
  </div>
  <span className="text-xs font-medium text-muted">{tool.name}</span>
</div>
```

#### Tools Data
```ts
const tools = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { name: "WordPress", logo: "/logos/wordpress.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Razorpay", logo: "/logos/razorpay.svg" },
  { name: "Google Ads", logo: "/logos/google-ads.svg" },
  { name: "Meta Ads", logo: "/logos/meta.svg" },
  { name: "Sanity CMS", logo: "/logos/sanity.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
];
```

---

### 5.14 Blog / Insights — `components/sections/BlogPreview.tsx`

**Visual:** 3 blog cards with white background. Each has a colored gradient bar at top, category badge, title, excerpt, date, and read link.

#### Card
```tsx
<Link href={post.href} className="group flex flex-col rounded-2xl bg-white border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 h-full">
  {/* Top gradient bar */}
  <div className="h-1 bg-gradient-to-r from-accent via-accent-muted to-transparent" />

  <div className="p-6 flex flex-col flex-1">
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
        {post.category}
      </span>
      <span className="flex items-center gap-1 text-xs text-muted">
        <Clock className="h-3 w-3" /> {post.readTime}
      </span>
    </div>
    <h3 className="text-lg font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors">
      {post.title}
    </h3>
    <p className="text-sm text-text-secondary leading-relaxed flex-1">{post.excerpt}</p>
    <div className="mt-5 flex items-center justify-between">
      <span className="text-xs text-muted">{post.date}</span>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
        Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </div>
</Link>
```

---

### 5.15 Final CTA Section — `components/sections/CTABanner.tsx`

**Visual:** Full-width section with nature/gradient background. Large heading, subtext, and CTA button. Like the image's final green section with grass field.

```tsx
<section className="relative py-24 lg:py-32 px-4 overflow-hidden">
  {/* Nature gradient background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-nature-field/20 to-background" />
    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-muted/15 blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-3xl text-center">
    <FadeIn>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-display leading-tight">
        Ready to Grow Your <em className="italic text-accent">Business</em>?
      </h2>
      <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
        Book a free 30-minute strategy call. We&rsquo;ll audit your digital presence
        and show you exactly where the revenue leaks are.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5">
          Book Free 30-Min Strategy Call
          <ArrowRight className="h-5 w-5" />
        </Link>
        <Link className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-medium text-text hover:border-accent hover:shadow-sm transition-all">
          View Our Work
        </Link>
      </div>
    </FadeIn>
  </div>
</section>
```

---

### 5.16 Footer — `components/layout/Footer.tsx`

**Visual:** Light footer with columns. Clean white/off-white background. Logo, tagline, social icons. Service links, product links, company links, contact info. Bottom bar with copyright and legal links.

```
Footer:      bg-surface-alt border-t border-border
Container:   mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8
```

#### Columns
```
Grid:        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12
```

#### Brand Column
```tsx
<div className="space-y-5 max-w-sm">
  <Link href="/" className="inline-flex items-center gap-1.5">
    <span className="text-2xl font-bold tracking-tight font-display text-text">Optimax</span>
    <span className="text-accent text-2xl font-bold tracking-tight font-display">.</span>
  </Link>
  <p className="text-sm leading-relaxed text-text-secondary">
    We build digital machines that generate revenue. From stunning websites to powerful CRMs.
  </p>
  <div className="flex items-center gap-3">
    {socials.map(s => (
      <a className="rounded-lg bg-white border border-border p-2.5 text-muted transition-all hover:bg-accent hover:text-white hover:border-accent hover:shadow-sm">
        <svg className="h-4 w-4" ...>{s.svg}</svg>
      </a>
    ))}
  </div>
</div>
```

#### Link Column
```tsx
<div className="space-y-5">
  <h3 className="text-sm font-semibold uppercase tracking-wider text-text font-display">Services</h3>
  <ul className="space-y-3">
    <li>
      <Link className="text-sm text-text-secondary transition-colors hover:text-accent">{label}</Link>
    </li>
  </ul>
</div>
```

#### Contact Column
- Email, phone, address with Lucide icons in `text-accent`
- WhatsApp button: `bg-green-50 border border-green-200 text-green-700 hover:bg-green-100`

#### Bottom Bar
```tsx
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8 mt-12">
  <p className="text-sm text-muted">© 2025 Optimax Studio. All rights reserved.</p>
  <div className="flex items-center gap-6">
    <Link className="text-sm text-muted hover:text-text transition-colors">Privacy Policy</Link>
    <Link className="text-sm text-muted hover:text-text transition-colors">Terms of Service</Link>
  </div>
</div>
```

---

## 6. Shared UI Components

### `Badge.tsx`
```tsx
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
      {children}
    </span>
  );
}
```

### `SectionHeading.tsx`
```tsx
interface Props {
  label: string;        // e.g. "What We Do"
  title: ReactNode;     // JSX with <em> italic accent
  description?: string;
  centered?: boolean;   // default true
}

export function SectionHeading({ label, title, description, centered = true }: Props) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <Badge>{label}</Badge>
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text font-display leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
}
```

### `Card.tsx`
```tsx
export function Card({ children, className, hover = true }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`rounded-2xl bg-white border border-border p-6 ${hover ? "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5" : ""} ${className || ""}`}>
      {children}
    </div>
  );
}
```

### `FloatingMockup.tsx`
```tsx
export function FloatingMockup({ children, delay = 0, position }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`absolute hidden lg:block ${position} animate-float`}
    >
      <div className="rounded-2xl bg-white border border-border shadow-card p-4">
        {children}
      </div>
    </motion.div>
  );
}
```

---

## 7. Framer Motion Patterns

### Global Variants
```ts
// lib/animations.ts
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeLeft = {
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeRight = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { type: "spring", stiffness: 200, damping: 20 },
};

export const stagger = (delay: number = 0.1) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true },
  variants: {
    hidden: {},
    show: { transition: { staggerChildren: delay } },
  },
});
```

### Per-Section Motion Summary

| Section | Animation | Trigger |
|---------|-----------|---------|
| Header | `y: -20 → 0` | Page load |
| Hero H1 | `y: 30 → 0, opacity` | Page load |
| Hero cards | `float` CSS + staggered appear | Page load, delay 0.8–1.2s |
| Logo strip | Infinite CSS marquee | Always |
| Services rows | Alternating `fadeLeft` / `fadeRight` | Scroll into view |
| Product cards | `fadeUp` stagger 0.1s | Scroll into view |
| Industry tiles | `fadeUp` stagger 0.06s | Scroll into view |
| Stats numbers | `spring scale 0.5 → 1` | Scroll into view |
| How it works | `fadeUp` stagger 0.15s | Scroll into view |
| Why Optimax | `fadeUp` stagger 0.1s | Scroll into view |
| Case studies | `fadeUp` stagger 0.12s | Scroll into view |
| Testimonials | `AnimatePresence` slide left/right | Auto-rotate + click |
| Pricing cards | `fadeUp` stagger 0.1s | Scroll into view |
| Integrations | `fadeUp` stagger 0.05s | Scroll into view |
| Blog cards | `fadeUp` stagger 0.1s | Scroll into view |
| CTA | `fadeUp` + scale background blob | Scroll into view |

---

## 8. Mobile Responsiveness Rules

### Breakpoints (Tailwind defaults)
- `sm:` = 640px
- `md:` = 768px
- `lg:` = 1024px
- `xl:` = 1280px

### Global Rules

| Rule | Implementation |
|------|---------------|
| All grids collapse to 1-col on mobile | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-N` |
| Headings scale down | `text-3xl md:text-4xl lg:text-5xl` |
| Section padding reduces | `py-16 lg:py-28` |
| Side padding | `px-4 sm:px-6 lg:px-8` |
| Floating elements hidden | `hidden lg:block` or `hidden xl:block` |
| CTAs stack vertically | `flex-col sm:flex-row` |
| Full-bleed cards on mobile | `mx-0` or `-mx-4` with padding inside |
| Header hamburger | `lg:hidden` toggle |
| Testimonials: single card | Swipe or dots nav |
| Stats: 2-col grid | `grid-cols-2 md:grid-cols-4` |
| Industry grid: 2-col | `grid-cols-2 sm:grid-cols-3 lg:grid-cols-7` |

---

## 9. Migration Checklist

### Phase 1: Theme & Globals
- [ ] Update `globals.css` with new color tokens
- [ ] Update `layout.tsx` body classes
- [ ] Add new CSS animations (`float`, `float-delayed`)
- [ ] (Optional) Add Playfair Display font for italic accents

### Phase 2: Shared UI
- [ ] Create `Badge.tsx`
- [ ] Create `SectionHeading.tsx`
- [ ] Create `Card.tsx`
- [ ] Create `FloatingMockup.tsx`
- [ ] Create `lib/animations.ts`
- [ ] Update `FadeIn.tsx` (no changes needed, already works)
- [ ] Update `NavDropdown.tsx` colors
- [ ] Update `PageHero.tsx` to light theme
- [ ] Update `BottomCTA.tsx` to light theme
- [ ] Update `Breadcrumbs.tsx` to light theme
- [ ] Update `FAQSection.tsx` to light theme

### Phase 3: Layout
- [ ] Rewrite `Header.tsx` for light theme
- [ ] Rewrite `Footer.tsx` for light theme

### Phase 4: Homepage Sections
- [ ] Rewrite `Hero.tsx`
- [ ] Create `LogoStrip.tsx` (new)
- [ ] Rewrite `ServicesStrip.tsx` → `ServicesFeature.tsx` (side-by-side)
- [ ] Rewrite `ProductsShowcase.tsx`
- [ ] Rewrite `Industries.tsx`
- [ ] Create `StatsRow.tsx` (new)
- [ ] Create `HowItWorks.tsx` (new)
- [ ] Rewrite `WhyOptimax.tsx`
- [ ] Rewrite `CaseStudies.tsx`
- [ ] Rewrite `Testimonials.tsx` as carousel
- [ ] Create `PricingCards.tsx` (new)
- [ ] Create `IntegrationsGrid.tsx` (new)
- [ ] Rewrite `BlogPreview.tsx`
- [ ] Rewrite `CTABanner.tsx`

### Phase 5: Update `app/page.tsx`
```tsx
export default function Home() {
  return (
    <>
      <script type="application/ld+json" ... />
      <Hero />
      <LogoStrip />
      <ServicesFeature />
      <StatsRow />
      <ProductsShowcase />
      <Industries />
      <HowItWorks />
      <WhyOptimax />
      <CaseStudies />
      <Testimonials />
      <PricingCards />
      <IntegrationsGrid />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
```

### Phase 6: Inner Pages
- [ ] Update all service/product/industry detail pages for light theme
- [ ] Update contact page
- [ ] Update blog pages
- [ ] Update case study pages

### Phase 7: Assets
- [ ] Source or create nature/landscape hero illustration (SVG or image)
- [ ] Prepare technology logo SVGs for IntegrationsGrid
- [ ] Prepare client/partner logos for LogoStrip
- [ ] Screenshot mockups for floating cards (or use placeholder gradients)

---

## Quick Reference: Color Class Mapping

| Current Class | New Class |
|---------------|-----------|
| `bg-navy-900` | `bg-background` |
| `bg-navy-800/40` | `bg-white` or `bg-surface` |
| `bg-navy-800/30` | `bg-surface-alt` |
| `border-white/5` | `border-border` |
| `text-text` (was light) | `text-text` (now dark) |
| `text-muted` | `text-text-secondary` or `text-muted` |
| `bg-accent/10` | `bg-accent-light` |
| `text-accent` | `text-accent` (green now) |
| `hover:bg-white/5` | `hover:bg-surface-alt` |
| `bg-navy-900/50` | `bg-white` |
| `backdrop-blur-sm` | Can remove (not needed on light bg) |
| `shadow-glow` | `shadow-glow` (updated green tint) |

---

*This plan is complete. A developer can build each section pixel-perfect from these specifications without guesswork.*
