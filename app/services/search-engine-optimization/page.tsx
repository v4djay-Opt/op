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
} from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://optimaxstudio.com";

export const metadata: Metadata = {
  title: "Search Engine Optimization Agency in Delhi NCR | Optimax Studio",
  description:
    "Result-driven SEO agency in Gurgaon & Delhi NCR. On-page SEO, technical SEO, local SEO, backlink building, and content strategy for startups, local businesses, and ecommerce brands.",
  alternates: {
    canonical: `${SITE_URL}/services/search-engine-optimization`,
  },
  openGraph: {
    title: "Search Engine Optimization Agency in Delhi NCR | Optimax Studio",
    description:
      "Result-driven SEO agency in Gurgaon & Delhi NCR. On-page SEO, technical SEO, local SEO, backlink building, and content strategy. Starting Rs. 5,999/mo.",
    type: "website",
    url: `${SITE_URL}/services/search-engine-optimization`,
    siteName: "Optimax Studio",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/og/seo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Agency in Delhi NCR | Optimax Studio",
    description:
      "Result-driven SEO agency in Gurgaon & Delhi NCR. On-page SEO, technical SEO, local SEO, backlink building, and content strategy. Starting Rs. 5,999/mo.",
    images: [`${SITE_URL}/og/seo.jpg`],
  },
};

/* ── JSON-LD schemas ── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Search Engine Optimization Agency in Delhi NCR",
  description:
    "Result-driven SEO services in Gurgaon and Delhi NCR — on-page SEO, technical SEO, local SEO, backlink building, and content strategy.",
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
  areaServed: ["Gurgaon", "Delhi", "Noida", "Delhi NCR", "India"],
  serviceType: "Search Engine Optimization",
  offers: [
    { "@type": "Offer", name: "Starter SEO Plan", priceCurrency: "INR", price: "5999", priceSpecification: { "@type": "UnitPriceSpecification", price: "5999", priceCurrency: "INR", unitText: "MONTH" } },
    { "@type": "Offer", name: "Growth SEO Plan", priceCurrency: "INR", price: "14999", priceSpecification: { "@type": "UnitPriceSpecification", price: "14999", priceCurrency: "INR", unitText: "MONTH" } },
    { "@type": "Offer", name: "Scale SEO Plan", priceCurrency: "INR", price: "24999", priceSpecification: { "@type": "UnitPriceSpecification", price: "24999", priceCurrency: "INR", unitText: "MONTH" } },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see measurable improvements in keyword rankings and organic traffic within 60–90 days. Significant results typically appear by month 3–6 depending on competition and starting baseline.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide monthly reporting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every client receives a monthly report covering keyword rankings, organic traffic growth, domain authority, and the work completed — with clear next steps for the following month.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do you use for SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use Ahrefs, SEMrush, Google Search Console, Google Analytics 4, Screaming Frog, and PageSpeed Insights — industry-standard tools for auditing, tracking, and reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do SEO and website design together for Delhi NCR businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Optimax Studio combines SEO and web design under one roof. Every site we build ships SEO-ready — schema markup, fast load times, mobile-first code, and proper site structure — so you rank from day one.",
      },
    },
    {
      "@type": "Question",
      name: "How much do your Search Engine Optimization services cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our SEO packages start at Rs. 5,999/month for local businesses and go up to Rs. 24,999/month for competitive industries. All plans are month-to-month with no lock-in. Book a free consultation for a custom quote.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Search Engine Optimization", item: `${SITE_URL}/services/search-engine-optimization` },
  ],
};

/* ── page data ── */
const seoServices = [
  {
    icon: Search,
    title: "On-Page SEO Optimization",
    description:
      "Title tags, meta descriptions, header structure, keyword density, and internal linking — every on-page element optimized for maximum SERP visibility.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    description:
      "Rank in the Google 3-Pack for your location. We optimize your Google Business Profile, local citations, and location-based content for Delhi NCR searches.",
  },
  {
    icon: Zap,
    title: "Technical SEO & Core Web Vitals",
    description:
      "Crawlability, indexing, page speed, Core Web Vitals, and mobile-first optimization — the technical foundation that lets Google understand and rank your site.",
  },
  {
    icon: Link2,
    title: "Backlink Building & Domain Authority",
    description:
      "High-quality off-page SEO through editorial backlinks, guest posts, and digital PR — building domain authority that compounds over time.",
  },
  {
    icon: FileText,
    title: "National Keyword & Content Strategy",
    description:
      "Comprehensive keyword research mapped to search intent — from high-converting service pages to informational content targeting Delhi NCR and national audiences.",
  },
  {
    icon: Globe,
    title: "Content & Blog SEO Strategy",
    description:
      "Topic cluster planning, blog content creation, and content refresh strategy to build topical authority and drive consistent long-tail organic traffic.",
  },
];

const process = [
  {
    step: 1,
    title: "SEO Audit",
    description:
      "Comprehensive technical and content audit — crawlability, indexing errors, page speed, keyword gaps, and competitor analysis.",
  },
  {
    step: 2,
    title: "Fix & Optimize",
    description:
      "Resolve technical issues, improve site structure, fix on-page SEO, and ensure every page is search-engine ready.",
  },
  {
    step: 3,
    title: "Grow & Publish",
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
  { value: "50+", label: "Keywords Ranked for Clients" },
  { value: "Top 3", label: "Positions Achieved" },
  { value: "90 Days", label: "To Measurable Results" },
];

const pricing = [
  {
    plan: "Starter",
    price: "Rs. 5,999/mo",
    badge: null as string | null,
    description: "For local businesses and early-stage startups.",
    features: [
      "Up to 10 keywords targeted",
      "On-page SEO (5 pages/mo)",
      "Google Business Profile optimization",
      "Monthly ranking report",
      "Technical SEO audit (one-time)",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    plan: "Growth",
    price: "Rs. 14,999/mo",
    badge: "Most Popular" as string | null,
    description: "For growing brands targeting Delhi NCR.",
    features: [
      "Up to 25 keywords targeted",
      "On-page SEO (15 pages/mo)",
      "2 blog posts/mo",
      "Backlink building (5 links/mo)",
      "Local SEO optimization",
      "Bi-weekly progress calls",
      "GA4 + Search Console reporting",
    ],
    cta: "Get Started",
  },
  {
    plan: "Scale",
    price: "Rs. 24,999/mo",
    badge: null as string | null,
    description: "Full-stack SEO for competitive industries.",
    features: [
      "Unlimited keyword targeting",
      "On-page SEO (unlimited pages)",
      "4 blog posts/mo",
      "Backlink building (15 links/mo)",
      "Technical SEO (ongoing)",
      "Dedicated SEO manager",
      "Weekly reporting + strategy call",
    ],
    cta: "Get a Quote",
  },
];

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most clients see measurable improvements in keyword rankings and organic traffic within 60–90 days. Significant results typically appear by month 3–6 depending on competition and starting baseline.",
  },
  {
    question: "Do you provide monthly reporting?",
    answer:
      "Yes. Every client receives a monthly report covering keyword rankings, organic traffic growth, domain authority, and the work completed — with clear next steps for the following month.",
  },
  {
    question: "What tools do you use for SEO?",
    answer:
      "We use Ahrefs, SEMrush, Google Search Console, Google Analytics 4, Screaming Frog, and PageSpeed Insights — industry-standard tools for auditing, tracking, and reporting.",
  },
  {
    question: "Can you do SEO and website design together for Delhi NCR businesses?",
    answer:
      "Yes. Optimax Studio combines SEO and web design under one roof. Every site we build ships SEO-ready — schema markup, fast load times, mobile-first code, and proper site structure — so you rank from day one.",
  },
  {
    question: "How much do your Search Engine Optimization services cost in Delhi?",
    answer:
      "Our SEO packages start at Rs. 5,999/month for local businesses and go up to Rs. 24,999/month for competitive industries. All plans are month-to-month with no lock-in. Book a free consultation for a custom quote.",
  },
];

export default function SEOPage() {
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
      <section
        className="relative min-h-[540px] flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden"
        style={{ background: "#1a4a3a" }}
      >
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] blob-1 pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.04)" }} />
        <div className="absolute -bottom-16 -right-16 h-[350px] w-[350px] blob-2 pointer-events-none animate-blob-float-delayed" style={{ background: "rgba(255,255,255,0.03)" }} />
        <div className="absolute top-10 right-1/3 h-[180px] w-[180px] rounded-full pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.025)", animationDelay: "1.5s" }} />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4 mt-2">
              Search Engine Optimization
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2rem,4.5vw,3.4rem)] font-bold text-white font-display leading-[1.12]">
              Search Engine Optimization Agency in Delhi NCR
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-5 text-base font-normal text-white/75 max-w-[600px] mx-auto leading-relaxed">
              Rank higher, get more traffic, and grow revenue — with transparent, result-driven SEO
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a4a3a] transition-all hover:bg-white/90"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                See Our Results
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
              { label: "Search Engine Optimization" },
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

          {/* Intro paragraph */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-16">
              Optimax Studio is a full-service <strong>SEO agency in Gurgaon and Delhi NCR</strong> that helps businesses rank higher on Google, drive qualified organic traffic, and convert that traffic into revenue. We work with startups, local businesses, and ecommerce brands across industries to build long-term organic growth — with transparent reporting and no black-hat shortcuts.
            </p>
          </FadeIn>

          {/* Why Choose Us */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Why Businesses Choose Our SEO Agency
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Search Engine Rank Improvement From Day One", desc: "Schema markup, sitemap, canonical tags, and mobile-first code built in from the start — zero retrofitting needed after launch." },
                { title: "Transparent Monthly Reports", desc: "Keyword rankings, organic traffic, domain authority, and conversion — all in a clear, jargon-free report every month." },
                { title: "Expert SEO Team From Day One", desc: "Your project is handled by in-house SEO specialists in Gurgaon — not outsourced or handed off to junior staff." },
                { title: "Local & Brand Search Keyword Focus", desc: "Google Business Profile, local citations, and location-page optimization specifically for Delhi NCR searches." },
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

          {/* Our SEO Services */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Our SEO Services
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              End-to-end SEO covering every layer of search optimization — from technical foundations to content creation and backlink authority building.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {seoServices.map((item, i) => {
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

          {/* What Makes Our SEO Different */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              What Makes Our SEO Different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "We Set Our Own Targets", desc: "Transparent KPIs — keyword targets, traffic goals, and ranking timelines — agreed with you before work starts." },
                { title: "Full-Funnel SEO Execution", desc: "Technical, on-page, off-page, and content strategy all handled internally by one integrated team." },
                { title: "No Outsourcing", desc: "All SEO work is done by our in-house team in Gurgaon — no white-labelling, no offshore handoffs." },
                { title: "ROI-First Reporting", desc: "You see rankings, organic traffic growth, and lead impact every month — not vanity metrics." },
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
              <div className="relative rounded-2xl border border-border overflow-hidden h-64 lg:h-full min-h-[260px] bg-surface-alt flex items-center justify-center">
                <span className="text-muted text-sm font-medium">SEO Process Overview</span>
              </div>
            </div>
          </FadeIn>

          {/* Mid-page CTA — after process */}
          <FadeIn className="mb-16">
            <div className="rounded-2xl bg-accent/5 border border-accent/20 px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-text font-display text-lg">Want a free SEO audit first?</p>
                <p className="text-sm text-muted mt-1">We&apos;ll review your current rankings, traffic, and technical health — no commitment required.</p>
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
              Month-to-month plans, no lock-ins. Need something custom?{" "}
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
                <p className="font-semibold !text-white font-display text-lg">Ready to start ranking?</p>
                <p className="text-sm !text-white mt-1">We reply within 24 hours. No pushy sales — just a straight conversation.</p>
              </div>
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a4a3a] transition-all hover:bg-white/90"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          {/* FAQs */}
          <div className="mb-10">
            <FAQSection faqs={faqs} />
          </div>

          {/* Bottom CTA */}
          <BottomCTA
            title="Ready to rank higher on Google?"
            subtitle="Get a free SEO consultation — no pushy sales, just a straight conversation."
            buttonText="Get Free Consultation"
            href="https://cal.com/optimax-studio"
          />
        </div>
      </section>
    </>
  );
}
