import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Globe,
  MapPin,
  Link2,
  FileText,
  Zap,
  Users,
} from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://optimaxstudio.com";

export const metadata: Metadata = {
  title: "Website Designing Company in Delhi — Optimax Studio",
  description:
    "Optimax Studio is a trusted website designing company in Delhi offering Search Engine Optimization, web design, and digital marketing services across Delhi NCR. Book a free consultation today.",
  alternates: {
    canonical: `${SITE_URL}/services/seo`,
  },
  openGraph: {
    title: "Website Designing Company in Delhi | Optimax Studio",
    description:
      "Optimax Studio is a trusted website designing company in Delhi offering Search Engine Optimization, web design, and digital marketing services across Delhi NCR. Book a free consultation today.",
    type: "website",
    url: `${SITE_URL}/services/seo`,
    siteName: "Optimax Studio",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/og/seo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Delhi | Optimax Studio",
    description:
      "Optimax Studio is a trusted website designing company in Delhi offering Search Engine Optimization, web design, and digital marketing services across Delhi NCR. Book a free consultation today.",
    images: [`${SITE_URL}/og/seo.jpg`],
  },
};

/* ── JSON-LD schemas ── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Designing Company in Delhi",
  description:
    "Optimax Studio is a professional website designing company in Delhi offering Search Engine Optimization services, web design, and digital marketing across Delhi NCR, Gurgaon, Noida, and India.",
  provider: {
    "@type": "Organization",
    name: "Optimax Studio",
    url: SITE_URL,
    telephone: "+91-89570-79052",
    email: "hello@optimaxstudio.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F104, Crown Avenue, Sector 92",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122505",
      addressCountry: "IN",
    },
  },
  areaServed: ["Delhi", "New Delhi", "Gurgaon", "Noida", "Delhi NCR", "India"],
  serviceType: "Website Designing and Search Engine Optimization",
  offers: [
    { "@type": "Offer", name: "Basic Search Engine Optimization Plan", priceCurrency: "INR", price: "7999" },
    { "@type": "Offer", name: "Growth Search Engine Optimization Plan", priceCurrency: "INR", price: "14999" },
    { "@type": "Offer", name: "Pro Search Engine Optimization Plan", priceCurrency: "INR", price: "24999" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Optimax Studio a website designing company in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Optimax Studio is a trusted website designing company serving clients in Delhi, New Delhi, Gurgaon, Noida, and across Delhi NCR. We offer end-to-end web design and Search Engine Optimization services for businesses of all sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Search Engine Optimization services in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We are a full-service Search Engine Optimization agency in Delhi NCR offering on-page Search Engine Optimization, technical Search Engine Optimization, local Search Engine Optimization, and backlink building to help businesses rank higher on Google and drive organic traffic.",
      },
    },
    {
      "@type": "Question",
      name: "What makes you the best Search Engine Optimization agency in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine website design and Search Engine Optimization under one roof. Every website we build is Search Engine Optimization-ready from day one — fast, mobile-friendly, and structured for Google. Our clients see measurable ranking improvements within 60–90 days.",
      },
    },
    {
      "@type": "Question",
      name: "How much do your Search Engine Optimization and web design services cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Search Engine Optimization packages start at Rs. 7,999/month and web design projects start at Rs. 25,000. We offer flexible pricing based on your goals and budget. Book a free call to get a custom quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with website designers in Delhi NCR for local businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with local businesses, startups, and established brands across Delhi NCR. Our team understands the local market and builds websites and Search Engine Optimization strategies tailored for Delhi-based audiences.",
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
    { "@type": "ListItem", position: 3, name: "Search Engine Optimization" },
  ],
};

/* ── page data ── */
const seoServices = [
  {
    icon: Search,
    title: "On-Page Search Engine Optimization Optimization",
    description:
      "Title tags, meta descriptions, header structure, keyword density, and internal linking — every on-page Search Engine Optimization element optimized for maximum SERP visibility.",
  },
  {
    icon: Zap,
    title: "Technical Search Engine Optimization & Site Health",
    description:
      "Crawlability, indexing, page speed, Core Web Vitals, and mobile-first optimization — the technical foundation that lets Google understand and rank your site.",
  },
  {
    icon: MapPin,
    title: "Local Search Engine Optimization & Google Business Profile",
    description:
      "Rank in the Google 3-Pack for your location. We optimize your Google Business Profile, local citations, and location-based content for Delhi NCR searches.",
  },
  {
    icon: Link2,
    title: "Backlink Building & Domain Authority",
    description:
      "High-quality off-page Search Engine Optimization through editorial backlinks, guest posts, and digital PR — building domain authority that compounds over time.",
  },
  {
    icon: FileText,
    title: "Keyword Research & Content Strategy",
    description:
      "Comprehensive keyword research mapped to search intent — from informational blog content to high-converting service pages targeting Delhi NCR audiences.",
  },
  {
    icon: Globe,
    title: "Web Design Built for Search Engine Optimization",
    description:
      "As a website making company in Delhi, every site we build ships Search Engine Optimization-ready: clean semantic HTML, schema markup, sitemap, and sub-2s load times.",
  },
];

const process = [
  {
    step: 1,
    title: "Search Engine Optimization Audit",
    description:
      "Comprehensive technical and content audit — crawlability, indexing errors, page speed, keyword gaps, and competitor analysis.",
  },
  {
    step: 2,
    title: "Fix & Optimise",
    description:
      "Resolve technical issues, improve site structure, fix on-page Search Engine Optimization, and ensure every page is search-engine ready.",
  },
  {
    step: 3,
    title: "Create & Publish",
    description:
      "Publish keyword-targeted content, optimize existing pages, and build topical authority in your niche.",
  },
  {
    step: 4,
    title: "Build Authority",
    description:
      "Acquire quality backlinks, monitor SERP rankings, and report measurable organic traffic growth every month.",
  },
];

const stats = [
  { value: "50+", label: "Websites Designed & Ranked" },
  { value: "Top 3", label: "Google Rankings for Clients" },
  { value: "90 Days", label: "to Measurable Search Engine Optimization Results" },
];

const pricing = [
  {
    plan: "Basic Search Engine Optimization",
    price: "Rs. 7,999/mo",
    badge: null as string | null,
    description: "For local businesses and early-stage startups.",
    features: [
      "Up to 10 keywords targeted",
      "On-page Search Engine Optimization (5 pages/mo)",
      "Google Business Profile optimization",
      "Monthly ranking report",
      "Technical Search Engine Optimization audit (one-time)",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    plan: "Growth Search Engine Optimization",
    price: "Rs. 14,999/mo",
    badge: "Most Popular" as string | null,
    description: "For growing brands targeting Delhi NCR.",
    features: [
      "Up to 25 keywords targeted",
      "On-page Search Engine Optimization (15 pages/mo)",
      "2 blog posts/mo",
      "Backlink building (5 links/mo)",
      "Local Search Engine Optimization optimization",
      "Bi-weekly progress calls",
      "GA4 + Search Console reporting",
    ],
    cta: "Get Started",
  },
  {
    plan: "Pro Search Engine Optimization",
    price: "Rs. 24,999/mo",
    badge: null as string | null,
    description: "Full-stack Search Engine Optimization for competitive industries.",
    features: [
      "Unlimited keyword targeting",
      "On-page Search Engine Optimization (unlimited pages)",
      "4 blog posts/mo",
      "Backlink building (15 links/mo)",
      "Technical Search Engine Optimization (ongoing)",
      "Dedicated Search Engine Optimization manager",
      "Weekly reporting + strategy call",
    ],
    cta: "Get a Quote",
  },
];

const whoWeServe = [
  {
    label: "Local Businesses in Delhi NCR",
    desc: "Website designer in Delhi NCR for local shops, clinics, schools, and service providers wanting to rank for local searches.",
  },
  {
    label: "E-commerce Brands",
    desc: "Product page Search Engine Optimization, category optimization, and schema markup to drive organic traffic to your online store.",
  },
  {
    label: "Startups & Founders",
    desc: "Launch with an Search Engine Optimization-ready website from day one — no retrofitting required. Rank faster, spend less on ads.",
  },
  {
    label: "Real Estate & Enterprises",
    desc: "High-competition keyword strategies and local Search Engine Optimization for real estate developers and enterprise brands across Delhi NCR.",
  },
];

const portfolio = [
  { name: "EduPro Academy", result: "Top 3 for 12 Keywords", slug: "edupro-academy" },
  { name: "FitLife Gym", result: "3x Organic Traffic", slug: "fitlife-gym" },
  { name: "Prime Realty", result: "#1 for Local Searches", slug: "prime-realty" },
];

const faqs = [
  {
    question: "Is Optimax Studio a website designing company in Delhi?",
    answer:
      "Yes. Optimax Studio is a trusted website designing company serving clients in Delhi, New Delhi, Gurgaon, Noida, and across Delhi NCR. We offer end-to-end web design and Search Engine Optimization services for businesses of all sizes.",
  },
  {
    question: "Do you provide Search Engine Optimization services in Delhi NCR?",
    answer:
      "Absolutely. We are a full-service Search Engine Optimization agency in Delhi NCR offering on-page Search Engine Optimization, technical Search Engine Optimization, local Search Engine Optimization, and backlink building to help businesses rank higher on Google and drive organic traffic.",
  },
  {
    question: "What makes you the best Search Engine Optimization agency in Delhi?",
    answer:
      "We combine website design and Search Engine Optimization under one roof. Every website we build is Search Engine Optimization-ready from day one — fast, mobile-friendly, and structured for Google. Our clients see measurable ranking improvements within 60–90 days.",
  },
  {
    question: "How much do your Search Engine Optimization and web design services cost in Delhi?",
    answer:
      "Our Search Engine Optimization packages start at Rs. 7,999/month and web design projects start at Rs. 25,000. We offer flexible pricing based on your goals and budget. Book a free call to get a custom quote.",
  },
  {
    question:
      "Do you work with website designers in Delhi NCR for local businesses?",
    answer:
      "Yes. We work with local businesses, startups, and established brands across Delhi NCR. Our team understands the local market and builds websites and Search Engine Optimization strategies tailored for Delhi-based audiences.",
  },
];

const interlinks = [
  {
    label: "Website Development Company",
    href: "/services/web-design-development",
    desc: "Custom, Search Engine Optimization-ready websites built to convert visitors into customers.",
  },
  {
    label: "Digital Marketing Agency in Gurgaon",
    href: "/services/digital-marketing",
    desc: "Google Ads, Meta Ads, and performance marketing for measurable ROI.",
  },
  {
    label: "Social Media Management Agency",
    href: "/services/social-media-management",
    desc: "Content, Reels, and community management across all platforms.",
  },
  {
    label: "Custom CRM Development",
    href: "/services/crm-custom-portals",
    desc: "Automate your sales and operations with a custom-built CRM.",
  },
  {
    label: "Real Estate Digital Solutions",
    href: "/industries/real-estate",
    desc: "Search Engine Optimization, website, and marketing solutions for property businesses.",
  },
  {
    label: "Ecommerce Solutions India",
    href: "/industries/retail-ecommerce",
    desc: "End-to-end digital solutions for online retail and D2C brands.",
  },
];

const delhiLocations = [
  "New Delhi",
  "South Delhi",
  "North Delhi",
  "Gurgaon",
  "Noida",
  "Faridabad",
  "Dwarka",
  "Rohini",
  "Connaught Place",
  "Nehru Place",
];

export default function SeoPage() {
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
      <section className="relative min-h-[520px] flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden" style={{ background: "#1a4a3a" }}>
        <div
          className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.04)" }}
        />
        <div
          className="absolute -bottom-16 -right-16 h-[350px] w-[350px] rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.03)" }}
        />
        {/* img: alt="website designing company in delhi optimax studio team" */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: "Search Engine Optimization" },
              ]}
              light
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4 mt-2">
              Service
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white font-display leading-[1.15]">
              Website Designing Company in Delhi
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-base font-normal text-white/75 max-w-[580px] mx-auto leading-relaxed">
              That also ranks you on Google — web design and Search Engine Optimization
              under one roof for Delhi NCR businesses.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a4a3a] transition-all hover:bg-white/90"
              >
                Get a Free Search Engine Optimization Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
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

      {/* ── MAIN CONTENT ── */}
      <section className="inner-page pt-12 md:pt-16 px-4 pb-24">
        <div className="mx-auto max-w-6xl">

          {/* Intro — first 100 words: website designing company in delhi, seo agency in delhi, web designing company delhi */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-16">
              Optimax Studio is a leading{" "}
              <strong>website designing company in Delhi</strong> helping
              businesses across Delhi NCR get found online and convert visitors
              into customers. As a full-service{" "}
              <strong>Search Engine Optimization agency in Delhi</strong>, we combine stunning web
              design with powerful search engine optimization — so your business
              doesn't just look great, it ranks on Google too. From startups in
              New Delhi to established brands in Gurgaon, our{" "}
              <strong>web designing company</strong> delivers results that
              matter. Every project ships with on-page Search Engine Optimization, schema markup, and
              mobile-first responsive design built in from day one.
            </p>
          </FadeIn>

          {/* H2: Why Businesses Choose Our Search Engine Optimization Agency in Delhi */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Why Businesses Choose Our Search Engine Optimization Agency in Delhi
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              As the <strong>best Search Engine Optimization agency in Delhi</strong>, Optimax Studio
              takes a fundamentally different approach: we don't separate web
              design from Search Engine Optimization. When you work with us, every page we design is
              built with crawlability, indexing, and SERP performance in mind —
              before a single word of content is written.
            </p>
            <p className="text-base text-muted leading-relaxed mb-6">
              Most{" "}
              <strong>Search Engine Optimization companies in Delhi NCR</strong> either handle only
              rankings or only design. We do both — which means faster organic
              traffic growth, lower cost per acquisition, and a website that
              compounds in value over time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Search Engine Optimization-Ready Websites From Day One",
                  desc: "Schema markup, sitemap, canonical tags, and mobile-first code — zero retrofitting needed after launch.",
                },
                {
                  title: "Proven Keyword Research Process",
                  desc: "We map search intent, competition, and conversion likelihood before targeting any keyword.",
                },
                {
                  title: "Transparent Monthly Reporting",
                  desc: "Keyword rankings, organic traffic, domain authority, and conversion — all in a clear, jargon-free report.",
                },
                {
                  title: "Local Search Engine Optimization Expertise",
                  desc: "Google Business Profile, local citations, and location-page optimization for Delhi NCR searches.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent p-5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white/80 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white block mb-1">
                      {item.title}
                    </span>
                    <span className="text-xs text-white/75 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* H2: Web Designing Company Delhi — Design Built for Search */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Web Designing Company Delhi — Design Built for Search
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              A beautiful website that doesn't rank is just an expensive
              brochure. As a <strong>web designing company in New Delhi</strong>,
              we design with search engines and users in mind simultaneously —
              because both need to be impressed for your business to grow.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Our websites score 90+ on Google PageSpeed, pass Core Web Vitals,
              and ship with proper semantic HTML — so the moment we launch, your
              pages are ready to be crawled, indexed, and ranked. Whether you
              need a landing page, a full corporate site, or an ecommerce store,
              we are the{" "}
              <strong>website developer in Delhi</strong> that makes design and
              Search Engine Optimization inseparable.{" "}
              <Link
                href="/services/web-design-development"
                className="text-accent hover:underline font-medium"
              >
                Explore our website development company services →
              </Link>
            </p>
          </FadeIn>

          {/* H2: Our Search Engine Optimization Services in Delhi NCR */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Our Search Engine Optimization Services in Delhi NCR
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Our end-to-end <strong>Search Engine Optimization services in Delhi NCR</strong> cover
              every layer of search optimization — from technical foundations
              to content creation and backlink authority building.
            </p>
            {/* img: alt="seo agency in delhi results and analytics dashboard" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {seoServices.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-text block mb-1">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* H2: Best Search Engine Optimization Agency in Delhi — What We Do Differently */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Best Search Engine Optimization Agency in Delhi — What We Do Differently
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Among <strong>Search Engine Optimization companies in Delhi NCR</strong>, most agencies
              rely on templated strategies and recycled reports. Optimax Studio
              builds a bespoke Search Engine Optimization roadmap for every client — based on your
              industry, audience, and competition — and executes it with
              full transparency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "No Black-Hat Tactics",
                  desc: "We build sustainable organic growth through white-hat keyword research, quality content, and ethical backlink building.",
                },
                {
                  title: "Full Technical Search Engine Optimization Coverage",
                  desc: "We fix crawlability issues, page speed, mobile-first errors, and indexing problems that most agencies overlook.",
                },
                {
                  title: "Content That Ranks and Converts",
                  desc: "We write for SERP position first and conversion second — so traffic doesn't just arrive, it becomes revenue.",
                },
                {
                  title: "Local + National Search Engine Optimization Together",
                  desc: "Whether you're targeting 'near me' searches in Delhi or national keywords across India — we run both strategies simultaneously.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-accent/10 bg-accent/5 p-5"
                >
                  <h3 className="text-sm font-semibold text-text font-display mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* H2: Website Designer in Delhi NCR for Every Industry */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Website Designer in Delhi NCR for Every Industry
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              As a full-service{" "}
              <strong>website designer in Delhi NCR</strong>, we build and rank
              websites for businesses across every vertical. Our{" "}
              <strong>digital marketing services for businesses</strong> include
              industry-specific keyword strategies and design frameworks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whoWeServe.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent p-5"
                >
                  <Users className="h-5 w-5 shrink-0 text-white/80 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white block mb-1">
                      {item.label}
                    </span>
                    <span className="text-xs text-white/75 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Our Process */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Process
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {process.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold font-display">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text font-display">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* img: alt="web designing company delhi portfolio mockup" */}
              <div className="rounded-2xl border border-border bg-surface-alt overflow-hidden">
                <div className="h-64 lg:h-full flex items-center justify-center">
                  <span className="text-muted text-sm font-medium">
                    Search Engine Optimization Process Dashboard
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stats Strip */}
          <FadeIn className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent font-display">
                    {stat.value}
                  </div>
                  <div className="text-muted mt-2 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* H2: Digital Media Agency Delhi — Search Engine Optimization + Design + Marketing */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Digital Media Agency Delhi — Search Engine Optimization + Design + Marketing
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Optimax Studio is more than an Search Engine Optimization firm. As a full-service{" "}
              <strong>digital media agency Delhi</strong> businesses rely on, we
              offer end-to-end growth services: web design, Search Engine Optimization, Google Ads,
              social media management, and custom CRM development — all under
              one roof, all working together.
            </p>
            <p className="text-base text-muted leading-relaxed">
              This integrated approach means your organic Search Engine Optimization and paid media
              reinforce each other, your website is designed to convert the
              traffic your Search Engine Optimization generates, and your social media content supports
              your keyword authority. The result: faster growth, lower cost per
              lead, and a scalable digital presence.{" "}
              <Link
                href="/services/digital-marketing"
                className="text-accent hover:underline font-medium"
              >
                Explore our digital marketing agency in Gurgaon →
              </Link>
            </p>
          </FadeIn>

          {/* H2: Search Engine Optimization Companies in Delhi NCR — Why Optimax Stands Out */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Search Engine Optimization Companies in Delhi NCR — Why Optimax Stands Out
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Delhi NCR has hundreds of{" "}
              <strong>Search Engine Optimization companies in Delhi NCR</strong> — most offering the
              same templated packages, the same recycled reports, and the same
              vague promises. Optimax Studio is different for three reasons:
            </p>
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "We own both design and Search Engine Optimization",
                  desc: "No handoff between a design agency and an Search Engine Optimization firm. We build the site and rank it — total ownership, total accountability.",
                },
                {
                  num: "02",
                  title: "We work with your business goals, not keyword counts",
                  desc: "Your Search Engine Optimization strategy is built around leads, sales, and revenue — not impressions or rankings for keywords nobody converts on.",
                },
                {
                  num: "03",
                  title: "We show you exactly what we do and why",
                  desc: "Weekly updates, monthly ranking reports, and a dedicated point of contact. No black boxes. No vague retainers.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                >
                  <span className="text-2xl font-bold text-accent/30 font-display shrink-0 leading-none">
                    {item.num}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-text block mb-1">
                      {item.title}
                    </span>
                    <span className="text-xs text-muted leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Transparent Pricing */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Transparent Pricing for Every Budget
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              Our Search Engine Optimization packages are priced transparently — no hidden fees, no
              lock-in contracts. Web design projects start separately at Rs.
              25,000. Need a combined Search Engine Optimization + web design quote?{" "}
              <Link
                href="/contact"
                className="text-accent hover:underline font-medium"
              >
                Contact us
              </Link>{" "}
              for a custom plan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.map((plan) => (
                <div
                  key={plan.plan}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    plan.badge === "Most Popular"
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-white shadow-card"
                  }`}
                >
                  {plan.badge && (
                    <span className="self-start mb-3 inline-block rounded-full bg-accent text-white text-xs font-semibold px-3 py-1">
                      {plan.badge}
                    </span>
                  )}
                  <span className="text-sm font-medium text-muted">
                    {plan.plan}
                  </span>
                  <div className="mt-1 text-3xl font-bold text-text font-display">
                    {plan.price}
                  </div>
                  <p className="text-xs text-muted mt-1 mb-4">
                    {plan.description}
                  </p>
                  <ul className="mb-6 space-y-2.5 flex-1">
                    {plan.features.map((f, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      plan.badge === "Most Popular"
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "border border-accent/30 text-accent hover:bg-accent/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Local Search Engine Optimization Section */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Website Designing Company Serving All of Delhi NCR
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              As a <strong>website design company in New Delhi</strong> and
              surrounding areas, we work with businesses across the entire
              Delhi NCR region. Whether you're based in{" "}
              <strong>Connaught Place</strong>,{" "}
              <strong>Nehru Place</strong>, <strong>South Delhi</strong>, or{" "}
              <strong>Dwarka</strong>, we offer the same quality of web design
              and Search Engine Optimization services — in-person or remote.
            </p>
            <p className="text-base text-muted leading-relaxed mb-6">
              Our team regularly works with clients in{" "}
              <strong>Noida</strong>, <strong>Faridabad</strong>,{" "}
              <strong>Rohini</strong>, and <strong>North Delhi</strong> — and
              our Gurgaon office makes same-day in-person strategy sessions
              possible for the entire <strong>web designing company in New
              Delhi</strong> area. Wherever you are in the NCR, our local Search Engine Optimization
              strategies are built specifically for your geography and audience.
            </p>
            <div className="flex flex-wrap gap-2">
              {delhiLocations.map((loc) => (
                <span
                  key={loc}
                  className="inline-block rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                >
                  {loc}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Recent Results */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Recent Results
            </h2>
            {/* img: alt="best seo agency in delhi ncr optimax studio gurgaon" */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {portfolio.map((project) => (
                <div
                  key={project.slug}
                  className="group overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all hover:shadow-lg hover:-translate-y-1.5"
                >
                  <div
                    className="relative aspect-[16/10] bg-surface-alt overflow-hidden"
                    aria-label={`Search Engine Optimization results — ${project.name}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-muted text-sm font-medium">
                      {project.name}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-text font-display mb-1.5">
                      {project.name}
                    </h3>
                    <span className="inline-block rounded-full bg-accent/10 text-accent px-2.5 py-0.5 text-xs font-medium">
                      {project.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2 transition-all"
              >
                View Our Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Internal Links */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Explore More Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {interlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col rounded-xl border border-border bg-white p-5 shadow-card transition-all hover:border-accent/20 hover:shadow-lg"
                >
                  <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors mb-1">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted leading-relaxed flex-1">
                    {link.desc}
                  </span>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>

          {/* H2: Frequently Asked Questions */}
          <div className="mb-10">
            <FAQSection faqs={faqs} />
          </div>

          {/* Bottom CTA */}
          <BottomCTA
            title="Ready to rank higher with the best Search Engine Optimization agency in Delhi NCR?"
            subtitle="Get a free Search Engine Optimization audit and see exactly where your website stands — and how we'll fix it."
            buttonText="Get a Free Search Engine Optimization Audit"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}
