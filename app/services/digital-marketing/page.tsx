import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Search,
  Share2,
  Mail,
  BarChart3,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://optimaxstudio.com";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Gurgaon, India",
  description:
    "Optimax Studio is a results-driven digital marketing agency in Gurgaon offering SEO, paid ads, social media & performance marketing services. Book a free call.",
  alternates: {
    canonical: `${SITE_URL}/services/digital-marketing`,
  },
  openGraph: {
    title: "Digital Marketing Agency in Gurgaon, India | Optimax Studio",
    description:
      "Optimax Studio is a results-driven digital marketing agency in Gurgaon offering SEO, paid ads, social media & performance marketing services. Book a free call.",
    type: "website",
    url: `${SITE_URL}/services/digital-marketing`,
    siteName: "Optimax Studio",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/og/digital-marketing.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Gurgaon, India | Optimax Studio",
    description:
      "Optimax Studio is a results-driven digital marketing agency in Gurgaon offering SEO, paid ads, social media & performance marketing services. Book a free call.",
    images: [`${SITE_URL}/og/digital-marketing.jpg`],
  },
};

/* ── JSON-LD schemas ── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Agency",
  description:
    "Optimax Studio is a full-service digital marketing agency in Gurgaon offering SEO, Google Ads, social media marketing, performance marketing, and ecommerce digital marketing services across India.",
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
  serviceType: "Digital Marketing",
  offers: [
    { "@type": "Offer", name: "Starter Plan", priceCurrency: "INR", price: "9999" },
    { "@type": "Offer", name: "Growth Plan", priceCurrency: "INR", price: "19999" },
    { "@type": "Offer", name: "Pro Plan", priceCurrency: "INR", price: "34999" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Optimax Studio the best digital marketing agency in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optimax Studio combines SEO, paid ads, social media, and performance marketing under one roof. We are a data-driven digital marketing company focused on delivering measurable ROI for every client — from startups to established brands.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer digital marketing services for ecommerce businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As a specialized ecommerce digital marketing agency, we run high-ROAS Google Shopping campaigns, Meta Ads, and SEO strategies specifically built for online stores to increase traffic, conversions, and repeat purchases.",
      },
    },
    {
      "@type": "Question",
      name: "How much do your digital marketing services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our digital marketing packages start at Rs. 9,999/month. Pricing depends on the channels and scope of work. Book a free strategy call to get a custom quote for your business.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide SEO and digital marketing services together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our integrated approach combines search engine optimization with paid media and social media marketing — so your brand grows both organically and through paid channels simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a digital marketing agency near me in Gurgaon or Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are based in Sector 93, Gurgaon, and serve clients across Delhi NCR including Noida, Faridabad, and South Delhi — as well as remotely across India and internationally.",
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
      name: "Digital Marketing",
    },
  ],
};

/* ── page data ── */
const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "As a dedicated search engine optimization agency, we drive sustainable organic growth through technical audits, keyword strategy, on-page optimization, and authority building.",
  },
  {
    icon: TrendingUp,
    title: "Google Ads & PPC Management",
    description:
      "Data-driven paid campaigns across Google Search, Display, and Shopping — optimized for maximum ROAS and lowest cost per lead.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Full-funnel social media campaigns on Instagram, Facebook, and LinkedIn — from brand awareness to retargeting and lead conversion.",
  },
  {
    icon: Target,
    title: "Performance Marketing & Retargeting",
    description:
      "As a results-driven performance marketing company, we run retargeting funnels and lookalike audience campaigns that turn browsers into buyers.",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description:
      "Behaviour-triggered drip sequences, newsletters, and lifecycle campaigns that nurture leads through your funnel on autopilot.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Rate Optimization",
    description:
      "GA4 setup, heatmaps, A/B testing, and weekly reporting — so every decision is backed by data, not guesswork.",
  },
];

const process = [
  {
    step: 1,
    title: "Audit & Strategy",
    description:
      "Deep dive into your current marketing funnel, ad accounts, SEO health, and competitor landscape — then build a 90-day growth roadmap.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Define channel mix, budget allocation, content calendar, and KPIs before a single rupee is spent.",
  },
  {
    step: 3,
    title: "Execute",
    description:
      "Launch campaigns with precise targeting, conversion-optimized creatives, and tracking in place.",
  },
  {
    step: 4,
    title: "Scale",
    description:
      "Optimize based on real ROAS data and aggressively scale what generates the highest return.",
  },
];

const stats = [
  { value: "3x", label: "Average ROAS for Clients" },
  { value: "25+", label: "Brands Scaled" },
  { value: "60 Days", label: "To First Measurable Results" },
];

const pricing = [
  {
    plan: "Starter",
    price: "Rs. 9,999/mo",
    badge: null as string | null,
    description: "For early-stage startups and local businesses.",
    features: [
      "1 paid channel (Google or Meta)",
      "Ad spend management up to Rs. 50,000",
      "Monthly performance report",
      "Landing page audit",
      "Basic SEO health check",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    plan: "Growth",
    price: "Rs. 19,999/mo",
    badge: "Most Popular" as string | null,
    description: "For growing brands ready to scale.",
    features: [
      "2 paid channels (Google + Meta)",
      "Ad spend management up to Rs. 1,50,000",
      "SEO (on-page + content)",
      "Social media ad creatives (8/mo)",
      "Bi-weekly performance reports",
      "Conversion rate optimization",
      "WhatsApp + email support",
    ],
    cta: "Get Started",
  },
  {
    plan: "Scale",
    price: "Rs. 34,999/mo",
    badge: null as string | null,
    description: "Full-stack performance marketing for ambitious brands.",
    features: [
      "All channels (Google, Meta, LinkedIn)",
      "Unlimited ad spend management",
      "SEO + content strategy",
      "Email automation setup",
      "Weekly reporting + strategy call",
      "Dedicated account manager",
      "Landing page design (1/mo)",
    ],
    cta: "Book a Call",
  },
];

const faqs = [
  {
    question:
      "What makes Optimax Studio the best digital marketing agency in Gurgaon?",
    answer:
      "Optimax Studio combines SEO, paid ads, social media, and performance marketing under one roof. We are a data-driven digital marketing company focused on delivering measurable ROI for every client — from startups to established brands.",
  },
  {
    question: "Do you offer digital marketing services for ecommerce businesses?",
    answer:
      "Yes. As a specialized ecommerce digital marketing agency, we run high-ROAS Google Shopping campaigns, Meta Ads, and SEO strategies specifically built for online stores to increase traffic, conversions, and repeat purchases.",
  },
  {
    question: "How much do your digital marketing services cost?",
    answer:
      "Our digital marketing packages start at Rs. 9,999/month. Pricing depends on the channels and scope of work. Book a free strategy call to get a custom quote for your business.",
  },
  {
    question: "Do you provide SEO and digital marketing services together?",
    answer:
      "Absolutely. Our integrated approach combines search engine optimization with paid media and social media marketing — so your brand grows both organically and through paid channels simultaneously.",
  },
  {
    question:
      "Are you a digital marketing agency near me in Gurgaon or Delhi NCR?",
    answer:
      "Yes. We are based in Sector 93, Gurgaon, and serve clients across Delhi NCR including Noida, Faridabad, and South Delhi — as well as remotely across India and internationally.",
  },
];


export default function DigitalMarketingPage() {
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
        <div className="absolute top-10 right-1/3 h-[180px] w-[180px] rounded-full pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.025)", animationDelay: "1.5s" }} />
        {/* img: alt="digital marketing agency team at Optimax Studio Gurgaon" */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4 mt-2">
              Digital Marketing
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2rem,4.5vw,3.4rem)] font-bold text-white font-display leading-[1.12]">
              Digital Marketing Agency in Gurgaon &amp; Delhi NCR
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-5 text-base font-normal text-white/75 max-w-[600px] mx-auto leading-relaxed">
              SEO, paid ads, social media, and performance marketing — all under one roof
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
                Book a Free Strategy Call
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
              { label: "Digital Marketing" },
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
              Optimax Studio is a full-service <strong>digital marketing agency in Gurgaon</strong> that helps startups, e-commerce brands, and growing businesses dominate online. We combine SEO, Google Ads, social media, and performance marketing into a single integrated strategy — so every channel compounds your results instead of competing with them. Whether you&apos;re a local business or scaling internationally, we run your marketing as if it were our own.
            </p>
          </FadeIn>

          {/* Why Choose Us */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Why Choose a Performance Marketing Agency Over a Traditional One?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Data-Driven Results", desc: "Every campaign runs on real-time data — click-through rate, cost per lead, ROAS, and conversion rate tracked weekly." },
                { title: "Full-Funnel Coverage", desc: "From brand awareness at the top of the funnel to retargeting and email automation at the bottom — we cover it all." },
                { title: "Integrated Paid & Organic", desc: "Paid media fuels immediate growth while SEO builds long-term organic traffic — both working together." },
                { title: "No Locked Contracts", desc: "Month-to-month engagements. We earn your trust every 30 days — or you walk. No lock-ins, no hidden fees." },
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

          {/* Our Services */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Every service is built around your specific audience, industry, and conversion goal — not a generic package.
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
                  src="/images/services/digital-marketing-process.jpg"
                  alt="Digital marketing process at Optimax Studio"
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
                <p className="font-semibold text-text font-display text-lg">Not sure where to start?</p>
                <p className="text-sm text-muted mt-1">Book a free 30-minute strategy call and we&apos;ll map the right channels for your business.</p>
              </div>
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
              >
                Book Free Strategy Call
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
                <div key={plan.plan} className={`flex flex-col rounded-2xl border p-6 ${plan.badge === "Most Popular" ? "border-accent/30 bg-accent/5" : "border-border bg-white shadow-card"}`}>
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
                <p className="font-semibold !text-white font-display text-lg">Ready to grow smarter?</p>
                <p className="text-sm !text-white mt-1">We reply within 24 hours. No pushy sales — just a straight conversation.</p>
              </div>
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a4a3a] transition-all hover:bg-white/90"
              >
                Book a Free Strategy Call
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
            title="Ready to grow with a smarter digital marketing strategy?"
            subtitle="Share a few details and let us map out your growth plan."
            buttonText="Book a Free Strategy Call"
            href="https://cal.com/optimax-studio"
          />
        </div>
      </section>
    </>
  );
}
