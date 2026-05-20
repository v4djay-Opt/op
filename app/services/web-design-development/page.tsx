import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  CheckCircle2,
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  Zap,
  Users,
  Code2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://optimaxstudio.com";

export const metadata: Metadata = {
  title: "Website Development Company in India",
  description:
    "Looking for a reliable website development company? Optimax Studio builds custom, SEO-ready websites for businesses across India. Get a free consultation.",
  alternates: {
    canonical: `${SITE_URL}/services/web-design-development`,
  },
  openGraph: {
    title: "Website Development Company in India | Optimax Studio",
    description:
      "Looking for a reliable website development company? Optimax Studio builds custom, SEO-ready websites for businesses across India. Get a free consultation.",
    type: "website",
    url: `${SITE_URL}/services/web-design-development`,
    siteName: "Optimax Studio",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/og/web-design.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in India | Optimax Studio",
    description:
      "Looking for a reliable website development company? Optimax Studio builds custom, SEO-ready websites for businesses across India. Get a free consultation.",
    images: [`${SITE_URL}/og/web-design.jpg`],
  },
};

/* ── JSON-LD schemas ── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Company",
  description:
    "Optimax Studio is a professional website development company offering custom website design and development services for startups, e-commerce brands, and businesses across India.",
  provider: {
    "@type": "Organization",
    name: "Optimax Studio",
    url: SITE_URL,
    telephone: "+91-89570-79052",
    email: "hello@optimaxstudio.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F104, Crown Avenue, Sector 93",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122505",
      addressCountry: "IN",
    },
  },
  areaServed: "India",
  serviceType: "Web Design and Development",
  offers: [
    { "@type": "Offer", name: "Starter Website", priceCurrency: "INR", price: "25000" },
    { "@type": "Offer", name: "Business Website", priceCurrency: "INR", price: "50000" },
    { "@type": "Offer", name: "Ecommerce Website", priceCurrency: "INR", price: "80000" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Optimax Studio the best website development company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optimax Studio combines modern design, clean code, and SEO best practices to deliver websites that look great and rank on Google. We've built 40+ websites for businesses across India and internationally.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ecommerce website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a full-service ecommerce website development company. We build on Next.js, Shopify, and WooCommerce depending on your business needs.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our website development packages start at Rs. 25,000 for a starter site. Custom and ecommerce websites are priced based on scope. Book a free call to get an exact quote.",
      },
    },
    {
      "@type": "Question",
      name: "Are your websites mobile-friendly and SEO-ready?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every website we build is fully responsive and optimized for search engines from day one — fast loading, clean code, and proper meta tags.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide website development services near me in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are based in Gurgaon, Haryana, and serve clients locally across Delhi NCR as well as remotely across India and internationally.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Web Design & Development",
    },
  ],
};

/* ── page data ── */
const services = [
  {
    icon: Code2,
    title: "Custom Website Development",
    description:
      "Built from scratch around your brand and goals. No templates, no shortcuts — purpose-written code for maximum performance and conversion.",
  },
  {
    icon: Smartphone,
    title: "Responsive UI/UX Design",
    description:
      "Mobile-first design ensures your site performs flawlessly on every device. Pixel-perfect across all major browsers and screen sizes.",
  },
  {
    icon: Zap,
    title: "Performance & Core Web Vitals",
    description:
      "Performance-optimized builds that score 90+ on Google PageSpeed — fast load times, clean semantic code, and SEO architecture from day one.",
  },
  {
    icon: Globe,
    title: "CMS Integration (Sanity, WordPress)",
    description:
      "Update your content without touching code. We set up, migrate, and train your team on the CMS that fits your workflow.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Website Development",
    description:
      "Shopify, WooCommerce, or Next.js stores with conversion-optimized checkout, Razorpay/Stripe integration, and mobile-first UX.",
  },
  {
    icon: Users,
    title: "Website Redesign & Migration",
    description:
      "Audit, redesign, and migrate your existing site with zero downtime — delivering a faster, scalable, higher-converting result.",
  },
];

const process = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We analyze your business, competitors, and target audience to define a results-driven architecture and content strategy.",
  },
  {
    step: 2,
    title: "Design & Wireframes",
    description:
      "High-fidelity mockups crafted for conversion, reviewed and approved by you at every stage before development begins.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Clean, scalable, performance-optimized code using Next.js or the best-fit stack — with SEO structure built in from line one.",
  },
  {
    step: 4,
    title: "Launch & Handover",
    description:
      "Deploy, test across devices, set up analytics, and hand over a fully documented site with a 30-day support window.",
  },
];

const stats = [
  { value: "3x", label: "Average Conversion Lift" },
  { value: "2–4 Weeks", label: "Average Delivery Time" },
  { value: "40+", label: "Websites Delivered" },
];

const pricing = [
  {
    plan: "Starter",
    price: "₹25,000",
    badge: null as string | null,
    description: "Perfect for startups and personal brands.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "On-page SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "2-week delivery",
    ],
    cta: "Get Started",
  },
  {
    plan: "Business",
    price: "₹50,000",
    badge: "Most Popular" as string | null,
    description: "Ideal for growing SMBs and service companies.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS integration (Sanity/WordPress)",
      "Blog setup",
      "Performance optimization",
      "Google Analytics + Search Console",
      "3 rounds of revisions",
    ],
    cta: "Get Started",
  },
  {
    plan: "Ecommerce",
    price: "₹80,000",
    badge: null as string | null,
    description: "Full-featured ecommerce website development.",
    features: [
      "Shopify or Next.js store",
      "Product catalogue up to 500 items",
      "Payment gateway (Razorpay/Stripe)",
      "Inventory & order management",
      "Mobile-first checkout",
      "SEO + speed optimization",
      "Post-launch support (30 days)",
    ],
    cta: "Get a Quote",
  },
];

const testimonials = [
  {
    quote:
      "Optimax built our property website in 3 weeks flat. Within 90 days we were ranking for 15+ keywords we never ranked before — and inbound enquiries tripled.",
    name: "Rahul Sharma",
    company: "Founder, PrimeRealty Gurgaon",
  },
  {
    quote:
      "We went from a broken WordPress site to a fast, beautiful website that actually converts. Enquiries doubled in the first month. Best investment we've made.",
    name: "Sneha Kapoor",
    company: "Director, FitLife Gyms",
  },
  {
    quote:
      "The team understood our admissions funnel and built a site that now generates 40+ leads per week — entirely from organic search. No paid ads.",
    name: "Amit Verma",
    company: "CEO, EduPro Academy",
  },
];

const caseStudies = [
  {
    client: "PrimeRealty",
    industry: "Real Estate",
    result: "3x organic traffic in 90 days",
    detail:
      "Rebuilt their slow WordPress site on Next.js with local SEO structure. Ranked #1 for 'property in Gurgaon' within 3 months.",
    slug: "prime-realty",
  },
  {
    client: "FitLife Gyms",
    industry: "Fitness",
    result: "4x lead form submissions in 60 days",
    detail:
      "Redesigned with conversion-first UX, added membership inquiry flows, and cut load time from 8s to under 1.5s.",
    slug: "fitlife-gym",
  },
  {
    client: "EduPro Academy",
    industry: "Education",
    result: "₹0 → ₹8L/month from organic in 6 months",
    detail:
      "Built an admission-focused website with schema markup and landing pages for each course — now drives 40+ leads/week.",
    slug: "edupro-academy",
  },
];

const faqs = [
  {
    question: "How long does website development take?",
    answer:
      "Starter websites are delivered in 2 weeks. Business websites take 3–4 weeks. Ecommerce and custom builds are typically 4–6 weeks depending on scope. We provide a fixed timeline at the start of every project.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Starter plans include 1 round of revisions. Business plans include 3 rounds. Ecommerce and custom projects include revisions at each stage — design, development, and pre-launch — so you're never surprised.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "We recommend and set up hosting on Vercel, AWS, or a provider suited to your traffic and budget. We handle the full deployment — you just own the account. Hosting costs are separate from development fees.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We primarily build on Next.js (React) for high-performance websites and web apps. For content-heavy sites we use Sanity CMS or WordPress. For ecommerce, we use Shopify or Next.js + WooCommerce depending on your catalogue size and customization needs.",
  },
  {
    question: "Are your websites mobile-friendly and SEO-ready?",
    answer:
      "Yes — always. Every site we build is mobile-first, fully responsive, and scored 90+ on Google PageSpeed. On-page SEO (meta tags, schema, sitemap, robots.txt) is included in every package at no extra cost.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We work on a 50/50 model — 50% upfront to begin, 50% on final delivery before launch. For larger projects above ₹1,00,000, we offer milestone-based payments. No hidden fees.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. Every project includes a 30-day post-launch support window for bug fixes and minor updates at no additional cost. Beyond that, we offer monthly maintenance retainers starting at ₹5,000/month.",
  },
  {
    question: "Do you offer ongoing website maintenance?",
    answer:
      "Yes. Our maintenance plans cover plugin/dependency updates, security patches, uptime monitoring, content updates, and performance checks. Plans start at ₹5,000/month.",
  },
  {
    question: "Do you offer ecommerce website development?",
    answer:
      "Yes. We build on Shopify, WooCommerce, and Next.js. Every ecommerce project includes payment gateway integration (Razorpay/Stripe), mobile-first checkout, inventory management, and SEO optimization.",
  },
  {
    question: "Do you serve clients outside Gurgaon?",
    answer:
      "Absolutely. While we are based in Gurgaon (Sector 93, Haryana), we work with clients across Delhi NCR, Mumbai, Bangalore, Pune, and internationally — fully remote. Same quality, same process, wherever you are.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* ── HERO ── */}
      <section className="relative min-h-[540px] flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden" style={{ background: "#1a4a3a" }}>
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] blob-1 pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.04)" }} />
        <div className="absolute -bottom-16 -right-16 h-[350px] w-[350px] blob-2 pointer-events-none animate-blob-float-delayed" style={{ background: "rgba(255,255,255,0.03)" }} />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4 mt-2">
              Web Design & Development
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2rem,4.5vw,3.4rem)] font-bold text-white font-display leading-[1.12]">
              SEO-Ready Websites That Convert
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-5 text-base font-normal text-white/75 max-w-[600px] mx-auto leading-relaxed">
              We build high-performance, mobile-first websites for startups, service businesses, and ecommerce brands across India. Every site is engineered to rank on Google and turn visitors into revenue — delivered in 2–4 weeks.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-white/90"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BREADCRUMB BAR ── */}
      <div className="border-b border-border bg-[#235142] px-4 py-3">
        <div className="mx-auto w-full max-w-6xl">
          <Breadcrumbs
            light
            className="!mb-0"
            items={[
              { label: "Services", href: "/services" },
              { label: "Web Design & Development" },
            ]}
          />
        </div>
      </div>

      {/* ── LOCAL SEO TRUST STRIP ── */}
      <div className="border-b border-border bg-surface-alt px-4 py-3">
        <p className="mx-auto max-w-4xl text-center text-sm text-muted">
          📍 Based in <strong className="text-text">Gurgaon</strong> — serving clients across Delhi NCR, Mumbai, Bangalore, and internationally. In-person or fully remote.
        </p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="inner-page pt-12 md:pt-16 px-4 pb-24">
        <div className="mx-auto max-w-6xl">

          {/* Sharp positioning statement */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-16">
              Optimax Studio is a <strong>website development company in Gurgaon</strong> that builds SEO-ready, conversion-optimized websites — from scratch, on time, and within budget. We don't use templates. Every line of code is purpose-written to perform. Whether you need a landing page, a business website, or a full ecommerce store, we deliver it with a clean handover, transparent pricing, and a 30-day support window included.
            </p>
          </FadeIn>

          {/* Why Choose Us */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Why Businesses Choose Optimax Studio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Results-Driven Design", desc: "Every layout, color, and CTA is informed by conversion data — not guesswork." },
                { title: "90+ PageSpeed Score", desc: "Clean, scalable code that passes Core Web Vitals and loads fast on every device." },
                { title: "SEO Architecture From Day One", desc: "Proper meta structure, schema markup, and sitemap setup — before your first visitor." },
                { title: "Fixed Timeline. No Surprises.", desc: "A dedicated project manager, clear milestones, and zero hidden invoices." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent p-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white/80 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white block mb-1">{item.title}</span>
                    <span className="text-xs text-white/75 leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Our Website Design & Development Services
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Every solution is built around your business goals — not a cookie-cutter template. Responsive, performance-optimized, and ready to rank.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-white/5 bg-navy-800/40 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-text block mb-1">{item.title}</span>
                      <span className="text-xs text-muted leading-relaxed">{item.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* Our Process */}
          <FadeIn className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              How We Work
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {process.map((step) => (
                  <div key={step.step} className="flex items-start gap-4 rounded-xl border border-white/5 bg-navy-800/40 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold font-display">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text font-display">{step.title}</h3>
                      <p className="text-sm text-muted mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative rounded-2xl border border-border overflow-hidden h-64 lg:h-full min-h-[260px]">
                <Image
                  src="/images/services/web-process.jpg"
                  alt="Web design and development process at Optimax Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Mid-page CTA — after process */}
          <FadeIn className="mb-16">
            <div className="rounded-2xl bg-accent/5 border border-accent/20 px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-text font-display text-lg">Not sure what you need?</p>
                <p className="text-sm text-muted mt-1">Book a free 30-minute consultation and we'll map the right solution for your business.</p>
              </div>
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          {/* Stats Strip */}
          <FadeIn className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent font-display">{stat.value}</div>
                  <div className="text-muted mt-2 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Pricing */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Transparent Pricing — No Hidden Fees
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              Choose the plan that fits your goals. 50% upfront, 50% on delivery. Need something custom?{" "}
              <Link href="/contact" className="text-accent hover:underline font-medium">Get in touch</Link> for a tailored quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.map((plan) => (
                <div
                  key={plan.plan}
                  className={`flex flex-col rounded-2xl border p-6 ${plan.badge === "Most Popular" ? "border-accent/30 bg-accent/5" : "border-border bg-white shadow-card"}`}
                >
                  {plan.badge && (
                    <span className="self-start mb-3 inline-block rounded-full bg-accent text-white text-xs font-semibold px-3 py-1">
                      {plan.badge}
                    </span>
                  )}
                  <span className="text-sm font-medium text-muted">{plan.plan}</span>
                  <div className="mt-1 text-3xl font-bold text-text font-display">{plan.price}</div>
                  <p className="text-xs text-muted mt-1 mb-4">{plan.description}</p>
                  <ul className="mb-6 space-y-2.5 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://cal.com/optimax-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${plan.badge === "Most Popular" ? "bg-accent text-white hover:bg-accent/90" : "border border-accent/30 text-accent hover:bg-accent/5"}`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Mid-page CTA — after pricing */}
          <FadeIn className="mb-16">
            <div className="rounded-2xl bg-[#1a4a3a] px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold !text-white font-display text-lg">Ready to start your project?</p>
                <p className="text-sm !text-white mt-1">We reply within 24 hours. No pushy sales — just a straight conversation.</p>
              </div>
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a4a3a] transition-all hover:bg-white/90"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          {/* Testimonials */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-8">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="flex flex-col rounded-2xl border border-border bg-white shadow-card p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="h-4 w-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-muted">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Case Studies */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Real Results. Real Clients.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {caseStudies.map((cs) => (
                <div key={cs.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all hover:shadow-lg hover:-translate-y-1.5">
                  <div className="relative aspect-[16/10] bg-surface-alt overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-muted text-sm font-medium">
                      {cs.client}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <span className="inline-block self-start rounded-full bg-accent/10 text-accent px-2.5 py-0.5 text-xs font-medium mb-2">
                      {cs.industry}
                    </span>
                    <h3 className="text-base font-bold text-text font-display mb-1">{cs.client}</h3>
                    <p className="text-sm font-semibold text-accent mb-2">↑ {cs.result}</p>
                    <p className="text-xs text-muted leading-relaxed flex-1">{cs.detail}</p>
                    <Link
                      href={`/case-studies`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all"
                    >
                      Read Case Study <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2 transition-all">
                View All Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* FAQs */}
          <div className="mb-10">
            <FAQSection faqs={faqs} />
          </div>

          {/* Bottom CTA */}
          <BottomCTA
            title="Let's build a website that actually grows your business."
            subtitle="Free consultation. Fixed pricing. 30-day support included."
            buttonText="Get Free Consultation"
            href="https://cal.com/optimax-studio"
          />
        </div>
      </section>
    </>
  );
}
