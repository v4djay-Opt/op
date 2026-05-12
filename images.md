# Image Audit — Optimax Studio

This document catalogs every image referenced across the Optimax Studio Next.js codebase, including static assets in `/public`, code-referenced product/industry images, externally hosted images, and inline SVG iconography.

> **Audit basis:** Source code analysis (Next.js `<Image>`, `<img>`, and asset path references). Live URL crawl not executed — this inventory is taken from the build-time source of truth.

---

## Image 1: Optimax Studio Brand Logo

| Field | Details |
|---|---|
| **URL/Path** | `/images/logo.png` |
| **Location** | Global Header (`components/layout/Header.tsx`) — top-left, every page |
| **Existing Alt** | `"Optimax Studio"` |
| **Suggested Alt** | `Optimax Studio — digital marketing and web design agency logo` |
| **Purpose** | Functional (brand identity + home link) |
| **Dimensions** | 140 × 40 (rendered); source ~36 KB PNG |

### 🎨 AI Generation Prompt
Modern minimalist wordmark logo reading "Optimax Studio" in a clean geometric sans-serif typeface, deep forest green (#2D6A4F) on transparent background, subtle leaf or growth-arrow accent glyph integrated into the "O", professional agency feel, vector-style flat design, balanced kerning, ample whitespace, 4:1 aspect ratio.

---

## Image 2: About Page — Team Collaboration Hero

| Field | Details |
|---|---|
| **URL/Path** | `https://images.unsplash.com/photo-1522071820081-009f012c6c71?auto=format&fit=crop&w=1200&q=80` |
| **Location** | `/about` — "Our Team / Studio" section (`app/about/page.tsx:160-164`) |
| **Existing Alt** | `"Optimaxstudio diverse creative team collaborating in a modern minimal office"` |
| **Suggested Alt** | `Diverse creative team at Optimax Studio collaborating on a digital marketing strategy in a modern Gurgaon office` |
| **Purpose** | Informational (humanizes agency, builds trust) |
| **Dimensions** | 1200 × ~514 (rendered aspect 21:9), lazy-loaded |

### 🎨 AI Generation Prompt
A diverse team of 5–6 young creative professionals collaborating around a large light-wood conference table in a bright modern minimal office, laptops and notebooks visible, plants in the background, floor-to-ceiling windows with soft natural daylight, muted warm color palette of beige, sage green, and white, candid documentary photography style, shallow depth of field, friendly engaged expressions, 21:9 cinematic aspect ratio.

---

## Image 3: Favicon (Browser Tab Icon)

| Field | Details |
|---|---|
| **URL/Path** | `/favicon.ico` |
| **Location** | `<head>` of every page |
| **Existing Alt** | N/A (not applicable to favicons) |
| **Suggested Alt** | N/A |
| **Purpose** | Functional (browser identity) |
| **Dimensions** | 16 × 16 / 32 × 32 (multi-resolution ICO, 6.1 KB) |

### 🎨 AI Generation Prompt
Square favicon featuring a stylized "O" mark or leaf glyph in deep forest green (#2D6A4F) on transparent background, ultra-minimalist, optimized for 16px and 32px rendering, sharp pixel-perfect edges, vector flat design, 1:1 aspect ratio.

---

## Image 4: Favicon 16 × 16

| Field | Details |
|---|---|
| **URL/Path** | `/favicon-16x16.png` |
| **Location** | `<head>` link rel="icon" |
| **Existing Alt** | N/A |
| **Suggested Alt** | N/A |
| **Purpose** | Functional |
| **Dimensions** | 16 × 16 (~0.8 KB) |

### 🎨 AI Generation Prompt
See Image 3 — generate at exact 16×16 resolution, prioritize legibility at thumbnail size.

---

## Image 5: Favicon 32 × 32

| Field | Details |
|---|---|
| **URL/Path** | `/favicon-32x32.png` |
| **Location** | `<head>` link rel="icon" |
| **Existing Alt** | N/A |
| **Suggested Alt** | N/A |
| **Purpose** | Functional |
| **Dimensions** | 32 × 32 (~2 KB) |

### 🎨 AI Generation Prompt
See Image 3 — generate at 32×32 resolution with slightly more detail than the 16×16.

---

## Image 6: Apple Touch Icon

| Field | Details |
|---|---|
| **URL/Path** | `/apple-touch-icon.png` |
| **Location** | iOS home-screen / Safari pinned tab |
| **Existing Alt** | N/A |
| **Suggested Alt** | N/A |
| **Purpose** | Functional (iOS PWA identity) |
| **Dimensions** | 180 × 180 (~20 KB) |

### 🎨 AI Generation Prompt
Square iOS app icon featuring Optimax Studio "O" mark in deep forest green on a soft cream background (#F5F2EC), rounded-square ready (iOS adds the mask), subtle drop shadow under the mark, premium professional feel, 1:1 aspect ratio at 180px.

---

## Image 7: Android Chrome Icon 192 × 192

| Field | Details |
|---|---|
| **URL/Path** | `/android-chrome-192x192.png` |
| **Location** | Android home-screen / PWA manifest |
| **Existing Alt** | N/A |
| **Suggested Alt** | N/A |
| **Purpose** | Functional |
| **Dimensions** | 192 × 192 (~22 KB) |

### 🎨 AI Generation Prompt
See Image 6 — generate at 192×192 for crisp Android home-screen rendering.

---

## Image 8: Android Chrome Icon 512 × 512

| Field | Details |
|---|---|
| **URL/Path** | `/android-chrome-512x512.png` |
| **Location** | Android splash / PWA manifest |
| **Existing Alt** | N/A |
| **Suggested Alt** | N/A |
| **Purpose** | Functional |
| **Dimensions** | 512 × 512 (~136 KB) |

### 🎨 AI Generation Prompt
See Image 6 — generate at 512×512 for splash-screen and maskable PWA use.

---

## Image 9–13: Next.js Boilerplate SVGs (Likely Unused)

| Field | Details |
|---|---|
| **URL/Path** | `/file.svg`, `/globe.svg`, `/next.svg`, `/vercel.svg`, `/window.svg` |
| **Location** | Present in `/public` from Next.js scaffold; **not referenced anywhere in source** |
| **Existing Alt** | N/A |
| **Suggested Alt** | N/A |
| **Purpose** | Decorative leftovers — **safe to delete** |
| **Dimensions** | Vector (varies) |

### 🎨 AI Generation Prompt
N/A — recommend removal during next cleanup pass.

---

# Product Screenshot Images (Referenced — ⚠️ Missing from `/public/images/products/`)

All entries below are referenced in `lib/data/products.ts` and rendered inside `app/products/[slug]/page.tsx`. **None currently exist on disk**, so production deploys will 404 unless these are uploaded.

---

## Image 14: School Management — Main Dashboard

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/school-dashboard.png` |
| **Location** | `/products/school-management-system` — image carousel (slot 1) |
| **Existing Alt** | `"School Management System dashboard showing attendance and fees overview"` |
| **Suggested Alt** | `School management software dashboard displaying student attendance, fee collection summary, and announcements widget` |
| **Purpose** | Informational (product proof) |
| **Dimensions** | Rendered at 16:10 (`aspect-[16/10]`) — recommend 1600 × 1000 |

### 🎨 AI Generation Prompt
Clean modern SaaS dashboard UI screenshot for a school management system, top navigation with logo and user avatar, sidebar with icons for Students/Fees/Attendance/Exams, main panel showing attendance heatmap chart, fee collection donut chart, and "Today's Announcements" feed, color palette of forest green accents (#2D6A4F) on white with soft gray cards, rounded corners, subtle shadows, Inter or DM Sans typography, 16:10 aspect ratio, photorealistic UI mockup style.

---

## Image 15: School Management — Fees Module

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/school-fees.png` |
| **Location** | `/products/school-management-system` — image carousel (slot 2) |
| **Existing Alt** | `"Fee management module with invoice generation and payment tracking"` |
| **Suggested Alt** | `School fee management module with auto-generated invoice list, online payment status, and parent receipt download` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 recommended 1600 × 1000 |

### 🎨 AI Generation Prompt
SaaS UI screenshot of a school fees module — table listing student names, fee categories, due amounts, status badges (Paid/Pending/Overdue), a "Generate Invoice" button, sidebar filters by class and term, forest green primary buttons, clean white background, rounded UI, 16:10 aspect ratio.

---

## Image 16: School Management — Parent Mobile App

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/school-parent-app.png` |
| **Location** | `/products/school-management-system` — image carousel (slot 3) |
| **Existing Alt** | `"Parent mobile app showing real-time attendance and result notifications"` |
| **Suggested Alt** | `Parent-facing mobile app screen with daily attendance card, recent exam result, and homework notification` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 recommended 1600 × 1000 |

### 🎨 AI Generation Prompt
Mobile app mockup of a parent companion app on a modern smartphone frame, screen shows greeting "Hi, Priya", child profile card, "Attendance Today: Present" pill, exam result snippet, and homework reminder, soft green and white palette with playful rounded cards, photorealistic phone render on a clean cream background, 16:10 aspect ratio.

---

## Image 17: Hospital Management — Dashboard

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/hospital-dashboard.png` |
| **Location** | `/products/hospital-management-system` — carousel (slot 1) |
| **Existing Alt** | `"Hospital Management System dashboard with patient overview"` |
| **Suggested Alt** | `Hospital management software dashboard showing patient flow, OPD appointments queue, and daily revenue chart` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Modern hospital SaaS dashboard UI, top bar with hospital name and notifications, KPI cards for "Today's Patients", "OPD Queue", "Revenue", a line chart of weekly footfall and a pie chart of department-wise patient distribution, sterile clinical aesthetic with calm teal-green accents on white, 16:10 aspect ratio.

---

## Image 18: Hospital Management — OPD Scheduling

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/hospital-opd.png` |
| **Location** | `/products/hospital-management-system` — carousel (slot 2) |
| **Existing Alt** | `"OPD scheduling screen with doctor availability"` |
| **Suggested Alt** | `OPD appointment scheduling interface showing doctor availability slots and patient booking form` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Calendar-grid scheduling UI for hospital OPD, weekly view with time slots, doctor avatars and specialties listed in sidebar, color-coded availability blocks (green=open, gray=booked), "Book Appointment" modal in foreground, clean medical UI design, white background with green accents, 16:10 aspect ratio.

---

## Image 19: Hospital Management — Patient Portal

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/hospital-patient-portal.png` |
| **Location** | `/products/hospital-management-system` — carousel (slot 3) |
| **Existing Alt** | `"Patient portal showing lab reports and prescriptions"` |
| **Suggested Alt** | `Patient self-service portal displaying downloadable lab reports, e-prescription, and upcoming follow-up appointment` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Patient self-service portal UI screenshot, card grid showing "Lab Reports", "Prescriptions", "Upcoming Visits", and "Bills", each card with icon and download/view CTA, reassuring soft green and white palette, friendly rounded UI, 16:10 aspect ratio.

---

## Image 20: Gym Management — Dashboard

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/gym-dashboard.png` |
| **Location** | `/products/gym-management-system` — carousel (slot 1) |
| **Existing Alt** | `"Gym Management System dashboard showing member analytics"` |
| **Suggested Alt** | `Gym management dashboard with active members count, renewal alerts, and class booking analytics` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Energetic gym SaaS dashboard, KPI tiles for "Active Members", "Renewals Due", "Today's Classes", a bar chart of monthly check-ins, athletic dark-green and lime accent palette on white, bold modern typography, 16:10 aspect ratio.

---

## Image 21: Gym Management — Class Booking

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/gym-classes.png` |
| **Location** | `/products/gym-management-system` — carousel (slot 2) |
| **Existing Alt** | `"Class booking screen with capacity and trainer schedules"` |
| **Suggested Alt** | `Gym class booking interface with yoga, Zumba, and PT sessions, trainer photos, and live seat availability` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Class booking UI grid with cards for Yoga, Zumba, HIIT, and Personal Training, each showing trainer headshot, time slot, and "X seats left" indicator, "Book Now" green CTA buttons, motivating fitness aesthetic, 16:10 aspect ratio.

---

## Image 22: Gym Management — Member App

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/gym-member-app.png` |
| **Location** | `/products/gym-management-system` — carousel (slot 3) |
| **Existing Alt** | `"Member mobile app showing workout plans and schedules"` |
| **Suggested Alt** | `Gym member mobile app with personalized workout plan, class schedule, and membership renewal reminder` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Smartphone mockup of a gym member app, screen shows "Today's Workout" plan, upcoming class card, membership expiry pill, dark gym-floor blurred background, neon green accents on dark UI cards, photorealistic phone render, 16:10 aspect ratio.

---

## Image 23: Real Estate CRM — Dashboard

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/realestate-dashboard.png` |
| **Location** | `/products/real-estate-crm` — carousel (slot 1) |
| **Existing Alt** | `"Real Estate CRM dashboard with lead pipeline"` |
| **Suggested Alt** | `Real estate CRM dashboard with Kanban lead pipeline, hot leads count, and site-visit calendar` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Real-estate CRM dashboard UI, Kanban-style pipeline columns labeled "New Lead → Site Visit → Negotiation → Closed", lead cards with avatars and property names, KPI strip on top, professional navy + green palette on white, 16:10 aspect ratio.

---

## Image 24: Real Estate CRM — Property Catalog

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/realestate-properties.png` |
| **Location** | `/products/real-estate-crm` — carousel (slot 2) |
| **Existing Alt** | `"Property catalog with advanced filters and map view"` |
| **Suggested Alt** | `Real estate property catalog with filterable listings, map view, floor plans, and virtual tour previews` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Split-view property listing UI — left side card grid of property thumbnails with price, BHK, and city tags; right side interactive map with green location pins, filter chips at top (Budget, BHK, Locality), clean real-estate aesthetic, 16:10 aspect ratio.

---

## Image 25: Real Estate CRM — WhatsApp Automation

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/realestate-whatsapp.png` |
| **Location** | `/products/real-estate-crm` — carousel (slot 3) |
| **Existing Alt** | `"WhatsApp automation screen for instant lead replies"` |
| **Suggested Alt** | `WhatsApp automation builder showing instant lead reply templates, follow-up sequences, and broadcast campaigns` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Workflow builder UI for WhatsApp Business automation, node-based canvas with triggers and message bubbles, side panel listing template messages, WhatsApp green accents, friendly modern SaaS aesthetic, 16:10 aspect ratio.

---

## Image 26: Interior Design CRM — Dashboard

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/interior-dashboard.png` |
| **Location** | `/products/interior-design-crm` — carousel (slot 1) |
| **Existing Alt** | `"Interior Design CRM dashboard with project timeline"` |
| **Suggested Alt** | `Interior design project management dashboard with Gantt timeline, budget tracker, and approval status` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Interior-design studio SaaS dashboard, project cards with cover images of finished rooms, Gantt-style timeline below, budget vs. spend ring chart, warm earthy palette of sage, terracotta, and cream, sophisticated design-agency aesthetic, 16:10 aspect ratio.

---

## Image 27: Interior Design CRM — Mood Board

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/interior-moodboard.png` |
| **Location** | `/products/interior-design-crm` — carousel (slot 2) |
| **Existing Alt** | `"Digital mood board with 3D renders and material samples"` |
| **Suggested Alt** | `Digital interior design mood board with 3D room renders, fabric swatches, and material samples for client approval` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Pinterest-style digital mood board canvas, draggable cards of 3D living-room renders, fabric swatches, wood-grain samples, color chips, and Pantone codes, soft cream canvas background, sophisticated muted palette, 16:10 aspect ratio.

---

## Image 28: Interior Design CRM — Vendor Management

| Field | Details |
|---|---|
| **URL/Path** | `/images/products/interior-vendor.png` |
| **Location** | `/products/interior-design-crm` — carousel (slot 3) |
| **Existing Alt** | `"Vendor management screen with orders and payments"` |
| **Suggested Alt** | `Interior design vendor management interface with purchase orders, delivery tracking, and payment status` |
| **Purpose** | Informational |
| **Dimensions** | 16:10 — 1600 × 1000 |

### 🎨 AI Generation Prompt
Vendor management table UI listing furniture and fabric suppliers, columns for PO number, item, status (Ordered/In Transit/Delivered), and payment chips, clean SaaS aesthetic with sage accents, 16:10 aspect ratio.

---

# Industry Showcase Images (Referenced — ⚠️ Missing from `/public/images/industries/`)

Referenced in `lib/data/industries.ts`, rendered in `app/industries/[slug]/page.tsx` as a 3-image showcase grid. Alt text is generated dynamically: `${industry.name} showcase ${i + 1}` — recommend supplying specific alt text per image upon upload.

---

## Image 29–31: Real Estate Showcase

| Field | Details |
|---|---|
| **URL/Path** | `/images/industries/real-estate-1.jpg`, `-2.jpg`, `-3.jpg` |
| **Location** | `/industries/real-estate` — showcase grid |
| **Existing Alt** | `"Real Estate showcase 1/2/3"` (generic, generated) |
| **Suggested Alt** | `Modern luxury apartment exterior in Gurgaon for real estate CRM showcase`; `Real estate agent on tablet using lead management software during site visit`; `Property listing wall display with virtual tour QR codes` |
| **Purpose** | Informational (industry context) |
| **Dimensions** | Object-cover fill (recommend 1200 × 900, 4:3) |

### 🎨 AI Generation Prompt
**Image 1:** Architectural photograph of a modern luxury high-rise apartment building in Gurgaon at golden hour, glass facade, manicured landscaping, warm natural light, premium real-estate marketing aesthetic, 4:3 aspect ratio.
**Image 2:** Lifestyle shot of a real-estate agent in formal attire holding a tablet showing a CRM dashboard, standing in front of a modern apartment, soft window light, professional editorial photography, 4:3 aspect ratio.
**Image 3:** Close-up of a glossy property catalog brochure spread on a wood desk with a smartphone displaying a virtual property tour, soft natural lighting, sophisticated real-estate branding mood, 4:3 aspect ratio.

---

## Image 32–34: Education Showcase

| Field | Details |
|---|---|
| **URL/Path** | `/images/industries/education-1.jpg`, `-2.jpg`, `-3.jpg` |
| **Location** | `/industries/education` — showcase grid |
| **Existing Alt** | `"Education showcase 1/2/3"` |
| **Suggested Alt** | `Modern Indian classroom with students using tablets and digital learning tools`; `Teacher marking attendance on a school management software tablet`; `Parent receiving exam result notification on smartphone from school app` |
| **Purpose** | Informational |
| **Dimensions** | 1200 × 900 recommended |

### 🎨 AI Generation Prompt
**Image 1:** Bright modern classroom with diverse Indian students seated at desks using tablets, smartboard at front, natural daylight from large windows, friendly inviting atmosphere, 4:3 aspect ratio.
**Image 2:** Indian teacher in a sari holding a tablet displaying an attendance management UI in a classroom setting, candid editorial photo, soft window light, 4:3 aspect ratio.
**Image 3:** Parent at home looking at smartphone with an excited expression, school app notification visible, warm cozy interior, lifestyle photography, 4:3 aspect ratio.

---

## Image 35–37: Healthcare Showcase

| Field | Details |
|---|---|
| **URL/Path** | `/images/industries/healthcare-1.jpg`, `-2.jpg`, `-3.jpg` |
| **Location** | `/industries/healthcare` — showcase grid |
| **Existing Alt** | `"Healthcare showcase 1/2/3"` |
| **Suggested Alt** | `Doctor consulting patient with tablet showing electronic health records`; `Modern hospital reception with digital appointment kiosk`; `Patient using mobile app to book OPD appointment and view lab reports` |
| **Purpose** | Informational |
| **Dimensions** | 1200 × 900 |

### 🎨 AI Generation Prompt
**Image 1:** Doctor in white coat with stethoscope consulting a seated patient, holding a tablet displaying an EHR UI, modern clean clinic interior, soft daylight, reassuring medical photography, 4:3 aspect ratio.
**Image 2:** Hospital reception desk with a digital self-check-in kiosk in the foreground, soft teal and white color palette, calm and modern interior, 4:3 aspect ratio.
**Image 3:** Patient lying comfortably on a sofa at home, smartphone in hand showing a healthcare app booking interface, warm domestic lighting, 4:3 aspect ratio.

---

## Image 38–40: Fitness Showcase

| Field | Details |
|---|---|
| **URL/Path** | `/images/industries/fitness-1.jpg`, `-2.jpg`, `-3.jpg` |
| **Location** | `/industries/fitness` — showcase grid |
| **Existing Alt** | `"Fitness showcase 1/2/3"` |
| **Suggested Alt** | `Modern gym floor with members working out and trainer using tablet`; `Yoga class with members checked in via gym management app`; `Athlete using smartphone gym app to track workout and book trainer` |
| **Purpose** | Informational |
| **Dimensions** | 1200 × 900 |

### 🎨 AI Generation Prompt
**Image 1:** Energetic modern gym interior with athletes lifting weights, personal trainer in foreground holding a tablet, industrial lighting, motivating fitness photography, 4:3 aspect ratio.
**Image 2:** Group yoga class in a sunlit studio, instructor leading, members in tree pose, calm wellness aesthetic, 4:3 aspect ratio.
**Image 3:** Close-up of an athlete in workout gear holding a smartphone displaying a fitness app dashboard, gym floor blurred behind, dynamic high-contrast photo, 4:3 aspect ratio.

---

## Image 41–43: Interior Design Showcase

| Field | Details |
|---|---|
| **URL/Path** | `/images/industries/interior-1.jpg`, `-2.jpg`, `-3.jpg` |
| **Location** | `/industries/interior-design` — showcase grid |
| **Existing Alt** | `"Interior Design showcase 1/2/3"` |
| **Suggested Alt** | `Luxury modern living room with curated furniture and accent lighting`; `Interior designer presenting 3D render to clients on a tablet`; `Material sample board with fabric swatches and wood finishes for client approval` |
| **Purpose** | Informational |
| **Dimensions** | 1200 × 900 |

### 🎨 AI Generation Prompt
**Image 1:** Photorealistic render of a luxury modern living room with sage green sofa, terracotta accents, warm wood floor, statement pendant light, large window with sheer curtains, sophisticated interior photography, 4:3 aspect ratio.
**Image 2:** Interior designer pointing at a tablet showing a 3D render while two clients lean in to look, designer studio backdrop with mood boards on wall, editorial photography, 4:3 aspect ratio.
**Image 3:** Flat-lay of fabric swatches, wood-grain samples, paint chips, and a tablet showing a digital mood board, soft natural lighting on a cream surface, 4:3 aspect ratio.

---

## Image 44–46: Retail / E-commerce Showcase

| Field | Details |
|---|---|
| **URL/Path** | `/images/industries/retail-1.jpg`, `-2.jpg`, `-3.jpg` |
| **Location** | `/industries/retail-ecommerce` — showcase grid |
| **Existing Alt** | `"Retail & E-commerce showcase 1/2/3"` |
| **Suggested Alt** | `Modern boutique storefront with synced online inventory display`; `Customer using mobile e-commerce app to checkout with seamless UX`; `Warehouse manager scanning packages with inventory management software` |
| **Purpose** | Informational |
| **Dimensions** | 1200 × 900 |

### 🎨 AI Generation Prompt
**Image 1:** Stylish modern boutique store interior with curated product displays and a digital screen showing live inventory, warm boutique lighting, premium retail photography, 4:3 aspect ratio.
**Image 2:** Hand holding a smartphone showing an e-commerce checkout page, soft cafe background, lifestyle photography, 4:3 aspect ratio.
**Image 3:** Warehouse worker in branded uniform scanning a package barcode with a handheld device, neat shelving in background, logistics photography, 4:3 aspect ratio.

---

## Image 47–49: Corporate / Enterprise Showcase

| Field | Details |
|---|---|
| **URL/Path** | `/images/industries/corporate-1.jpg`, `-2.jpg`, `-3.jpg` |
| **Location** | `/industries/corporate` — showcase grid |
| **Existing Alt** | `"Corporate & Enterprise showcase 1/2/3"` |
| **Suggested Alt** | `Modern corporate boardroom meeting with executive dashboard projected on screen`; `Employees collaborating in office using internal portal on laptops`; `Executive reviewing custom CRM dashboard on large monitor` |
| **Purpose** | Informational |
| **Dimensions** | 1200 × 900 |

### 🎨 AI Generation Prompt
**Image 1:** Sleek corporate boardroom with executives around a long table, projected screen showing a KPI dashboard, glass walls, professional editorial photography, 4:3 aspect ratio.
**Image 2:** Open-plan office with diverse employees collaborating at standing desks, laptops showing portal UI, modern bright workspace, 4:3 aspect ratio.
**Image 3:** Over-the-shoulder shot of an executive at a desk reviewing a custom CRM dashboard on a 27-inch monitor, soft window light, premium corporate aesthetic, 4:3 aspect ratio.

---

# Dynamic CMS Images (Sanity-backed, dynamic)

## Image 50: Blog Post Cover (Dynamic)

| Field | Details |
|---|---|
| **URL/Path** | Dynamic — `post.image` from Sanity CMS (fallback `undefined` in `lib/data/blog-fallback.ts`) |
| **Location** | `/blog` listing, `/blog/[slug]` detail, `<BlogPreview />` homepage section |
| **Existing Alt** | `{post.title}` (dynamic — uses post title as alt) |
| **Suggested Alt** | Keep dynamic; ensure CMS editors fill a descriptive alt per post (e.g. "Hero illustration for blog post about conversion rate optimization") |
| **Purpose** | Informational (article hero) |
| **Dimensions** | Cover-fill (aspect-[16/9] in cards, full-width on detail) |

### 🎨 AI Generation Prompt
Per-article hero illustration: editorial flat-style illustration matching the article topic, deep forest green and cream palette consistent with brand, conceptual not photographic, 16:9 aspect ratio. Generate uniquely per blog post topic.

---

## Image 51: Case Study Cover (Dynamic)

| Field | Details |
|---|---|
| **URL/Path** | Dynamic — `cs.image` / `c.image` from Sanity CMS |
| **Location** | `/case-studies`, `/case-studies/[slug]` |
| **Existing Alt** | `{cs.client}` (uses client name as alt) |
| **Suggested Alt** | Keep dynamic; recommend pattern: `"{Client Name} — {result headline} case study cover"` for richer SEO |
| **Purpose** | Informational |
| **Dimensions** | Cover-fill (16:9 cards, hero-size on detail) |

### 🎨 AI Generation Prompt
Branded case-study cover image: clean dark-green gradient background, large white serif client name overlay, subtle product-screenshot mockup or industry photograph, 16:9 aspect ratio, consistent across all case studies.

---

# Inline SVG Iconography (Code-embedded, not separate files)

These are inline `<svg>` paths or icon-component imports rendered directly in JSX. They have no `src` URL and do not produce HTTP requests beyond the JS bundle.

## Image 52: Social Icon — X (Twitter)

| Field | Details |
|---|---|
| **URL/Path** | Inline SVG `<path>` in `components/layout/Footer.tsx:32` |
| **Location** | Footer — social links row |
| **Existing Alt** | N/A (uses `aria-label` via parent link `"X (Twitter)"`) |
| **Suggested Alt** | Add `<title>X (Twitter)</title>` inside the SVG for AT users |
| **Purpose** | Functional (social link icon) |
| **Dimensions** | 24 × 24 (viewBox) |

### 🎨 AI Generation Prompt
N/A — official X (Twitter) brand glyph; do not redraw. Use official brand assets.

---

## Image 53: Social Icon — LinkedIn

| Field | Details |
|---|---|
| **URL/Path** | Inline SVG path in `components/layout/Footer.tsx:39` |
| **Location** | Footer |
| **Existing Alt** | N/A (aria via link label) |
| **Suggested Alt** | Add `<title>LinkedIn</title>` |
| **Purpose** | Functional |
| **Dimensions** | 24 × 24 |

### 🎨 AI Generation Prompt
N/A — official LinkedIn brand mark.

---

## Image 54: Social Icon — Instagram

| Field | Details |
|---|---|
| **URL/Path** | Inline SVG path in `components/layout/Footer.tsx:46` |
| **Location** | Footer |
| **Existing Alt** | N/A |
| **Suggested Alt** | Add `<title>Instagram</title>` |
| **Purpose** | Functional |
| **Dimensions** | 24 × 24 |

### 🎨 AI Generation Prompt
N/A — official Instagram brand glyph.

---

## Image 55: Social Icon — Facebook

| Field | Details |
|---|---|
| **URL/Path** | Inline SVG path in `components/layout/Footer.tsx:53` |
| **Location** | Footer |
| **Existing Alt** | N/A |
| **Suggested Alt** | Add `<title>Facebook</title>` |
| **Purpose** | Functional |
| **Dimensions** | 24 × 24 |

### 🎨 AI Generation Prompt
N/A — official Facebook brand glyph.

---

## Image 56: Lucide & Tabler Icon Library (Bundle-wide)

| Field | Details |
|---|---|
| **URL/Path** | `lucide-react` and `@tabler/icons-react` imports across the codebase |
| **Location** | Every page section — buttons, feature cards, navigation, breadcrumbs, social proof, FAQ toggles, etc. |
| **Existing Alt** | MISSING `aria-label` on most decorative icons (acceptable when adjacent to text); functional icons (close buttons, menu toggle) should have `aria-label` |
| **Suggested Alt** | Audit: ensure every standalone icon button has `aria-label`; decorative icons inside labeled cards/buttons can keep `aria-hidden="true"` |
| **Purpose** | Decorative (most) and Functional (icon-only buttons) |
| **Dimensions** | 16–24 px typical (rendered via Tailwind `h-* w-*`) |

### 🎨 AI Generation Prompt
N/A — use the existing Lucide and Tabler open-source icon sets; do not regenerate.

---

# 📊 Summary

| Metric | Count |
|---|---|
| **Total Images Catalogued** | 56 entries (49 raster/external image entries + 7 SVG/icon entries) |
| **Static files on disk in `/public`** | 12 (6 favicons + 5 unused Next.js SVGs + 1 logo) |
| **Referenced but missing from disk** | 36 (15 product PNGs + 21 industry JPGs) |
| **External (Unsplash CDN)** | 1 (About page hero) |
| **Dynamic CMS-backed** | 2 patterns (blog + case-study covers) |
| **Inline SVG icons** | 4 social glyphs + bundle-wide Lucide/Tabler icons |
| **Missing Alt Text** | 0 explicit `MISSING` cases; **dynamic alt** relies on CMS data quality |
| **Decorative** | ~5 (favicons + Next.js leftover SVGs) |
| **Informational** | 38 (product screenshots, industry photos, about hero, CMS covers) |
| **Functional** | 6+ (logo, favicons, social icons, icon-only buttons) |
| **Icons/SVGs** | 4 inline social + entire Lucide/Tabler libraries via tree-shaken imports |

---

# 🚨 Priority Action Items

1. **Upload missing product screenshots** (15 files) to `/public/images/products/` — currently 404 in production.
2. **Upload missing industry photos** (21 files) to `/public/images/industries/` — currently 404.
3. **Replace dynamic industry alt** `"{name} showcase {i+1}"` with hand-written alt text per uploaded asset.
4. **Remove unused Next.js boilerplate SVGs** (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) from `/public`.
5. **Add `<title>` elements** inside the 4 inline social SVGs in `components/layout/Footer.tsx` for accessibility.
6. **Self-host the About page Unsplash photo** to eliminate the third-party request and gain control over caching/optimization.
7. **CMS hygiene:** enforce that Sanity blog/case-study editors set descriptive alt text on every uploaded cover image.
