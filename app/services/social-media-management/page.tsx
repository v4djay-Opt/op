import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://optimaxstudio.com";

export const metadata: Metadata = {
  title: "Social Media Management Service in Gurgaon & India | Optimax Studio",
  description:
    "Looking for a social media management agency in India? Optimax Studio offers complete services for social media management — content, Reels, community handling & packages. Book a free call.",
  keywords:
    "social media management service, social media management agency, instagram management service, social media management packages, social media packages pricing, services for social media management, social media management near me",
  alternates: {
    canonical: `${SITE_URL}/services/social-media-management`,
  },
  openGraph: {
    title: "Social Media Management Service in India | Optimax Studio",
    description:
      "End-to-end social media management agency in Gurgaon. Content creation, Reels, community management & influencer outreach. Starting Rs. 8,999/mo.",
    type: "website",
    url: `${SITE_URL}/services/social-media-management`,
    siteName: "Optimax Studio",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/og/social-media-management.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Service | Optimax Studio",
    description:
      "Complete social media management packages starting Rs. 8,999/mo. Instagram, Facebook, LinkedIn & more.",
    images: [`${SITE_URL}/og/social-media-management.jpg`],
  },
};

/* ── JSON-LD data ── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Management Service",
  description:
    "End-to-end social media management from content creation to community engagement. We grow your following and turn fans into customers.",
  provider: {
    "@type": "Organization",
    name: "Optimax Studio",
    url: SITE_URL,
    telephone: "+91-89570-79052",
    email: "hello@optimaxstudio.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit No F104, Crown Avenue, Sector 92",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122505",
      addressCountry: "IN",
    },
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter Social Media Package",
      price: "8999",
      priceCurrency: "INR",
      description:
        "12 posts/month, Instagram + Facebook, basic graphics and monthly report",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "8999",
        priceCurrency: "INR",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Growth Social Media Package",
      price: "14999",
      priceCurrency: "INR",
      description:
        "20 posts/month, 3 platforms, Reels, community management, bi-weekly report",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "14999",
        priceCurrency: "INR",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Pro Social Media Package",
      price: "24999",
      priceCurrency: "INR",
      description:
        "30 posts/month, all platforms, influencer outreach, paid ads, weekly report",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "24999",
        priceCurrency: "INR",
        unitText: "MONTH",
      },
    },
  ],
  areaServed: [
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Delhi" },
    { "@type": "Country", name: "India" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which platforms do you manage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manage Instagram, Facebook, LinkedIn, YouTube, Twitter/X, and Google Business Profile. Most clients start with Instagram and Facebook, then expand as they grow.",
      },
    },
    {
      "@type": "Question",
      name: "How many posts per week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on your plan: Starter is 3 posts/week, Growth is 5 posts/week, and Pro is 7+ posts/week including Reels and stories.",
      },
    },
    {
      "@type": "Question",
      name: "Will I approve content before it goes live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We share the full monthly content calendar for approval before publishing. You can request edits and we revise before anything goes live.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide content or ideas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We handle everything — topic research, scripting, design, and captions. We do a one-time brand onboarding call to understand your tone, goals, and preferences.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see measurable improvement in reach and engagement within the first 30 days. Follower growth and lead generation typically pick up between months 2 and 3.",
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
      name: "Social Media Management",
      item: `${SITE_URL}/services/social-media-management`,
    },
  ],
};

/* ── page data ── */
const whatWeDo = [
  {
    title: "Content calendar planning and creation",
    description:
      "We plan 30 days of content in advance — topics, formats, captions, and posting times — so your brand never goes silent.",
  },
  {
    title: "Reels, graphics, and copywriting",
    description:
      "Scroll-stopping visuals and captions written to drive saves, shares, and profile visits. Every piece fits your brand voice.",
  },
  {
    title: "Community management and response handling",
    description:
      "We monitor comments and DMs daily, respond within 24 hours, and build genuine relationships with your audience.",
  },
  {
    title: "Influencer outreach and collaboration",
    description:
      "We identify, vet, and coordinate with micro and macro influencers relevant to your industry and target audience.",
  },
  {
    title: "Performance tracking and monthly reporting",
    description:
      "Every month you get a clear report: reach, engagement, follower growth, and what we're doing differently next month.",
  },
  {
    title: "Paid social ad management (optional add-on)",
    description:
      "Boost top-performing organic content or run dedicated campaigns on Instagram, Facebook, and LinkedIn.",
  },
];

const platforms = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "YouTube",
  "Twitter/X",
  "Google Business",
];

const process = [
  {
    step: 1,
    title: "Brand Audit & Onboarding",
    description:
      "We spend the first week understanding your business, competitors, tone, and goals. We define your content pillars and platform strategy before writing a single post.",
  },
  {
    step: 2,
    title: "Create & Get Approved",
    description:
      "We produce the full month's content — Reels, carousels, stories, and captions — and share a content calendar for your approval before anything goes live.",
  },
  {
    step: 3,
    title: "Publish at Optimal Times",
    description:
      "We schedule and publish posts at the exact times your audience is most active, using platform analytics to maximise reach and engagement.",
  },
  {
    step: 4,
    title: "Engage & Build Community",
    description:
      "We respond to comments, DMs, and mentions daily — building real relationships with your audience and turning followers into loyal customers.",
  },
];

const stats = [
  { value: "200%", label: "Avg. Engagement Growth" },
  { value: "15+", label: "Brands Managed" },
  { value: "30 Days", label: "To First Results" },
];

const pricing = [
  {
    plan: "Starter",
    price: "Rs. 8,999/mo",
    badge: null as string | null,
    description: "For small businesses starting their social media presence.",
    features: [
      "12 posts per month",
      "Instagram + Facebook",
      "Basic graphics & captions",
      "Monthly performance report",
      "Content calendar approval",
    ],
    cta: "Get Started",
  },
  {
    plan: "Growth",
    price: "Rs. 14,999/mo",
    badge: "Most Popular" as string | null,
    description: "For growing brands ready to scale their social presence.",
    features: [
      "20 posts per month",
      "Instagram + Facebook + LinkedIn",
      "Reels + graphics + copywriting",
      "Community management",
      "Bi-weekly performance report",
      "WhatsApp integration",
    ],
    cta: "Get Started",
  },
  {
    plan: "Scale",
    price: "Rs. 24,999/mo",
    badge: null as string | null,
    description: "Full-stack social media management for ambitious brands.",
    features: [
      "30 posts per month",
      "All platforms incl. YouTube",
      "Influencer outreach (2/month)",
      "Paid ads management",
      "Weekly report + strategy call",
      "Dedicated account manager",
    ],
    cta: "Book a Call",
  },
];

const faqs = [
  {
    question: "Which platforms do you manage?",
    answer:
      "We manage Instagram, Facebook, LinkedIn, YouTube, Twitter/X, and Google Business Profile. Most clients start with Instagram and Facebook, then expand as they grow.",
  },
  {
    question: "How many posts per week?",
    answer:
      "Depending on your plan: Starter is 3 posts/week, Growth is 5 posts/week, and Pro is 7+ posts/week including Reels and stories.",
  },
  {
    question: "Will I approve content before it goes live?",
    answer:
      "Yes. We share the full monthly content calendar for approval before publishing. You can request edits and we revise before anything goes live.",
  },
  {
    question: "Do I need to provide content or ideas?",
    answer:
      "No. We handle everything — topic research, scripting, design, and captions. We do a one-time brand onboarding call to understand your tone, goals, and preferences, and take it from there.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Most clients see measurable improvement in reach and engagement within the first 30 days. Follower growth and lead generation typically pick up between months 2 and 3.",
  },
];

export default function SocialMediaPage() {
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
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4 mt-2">
              Social Media Management
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2rem,4.5vw,3.4rem)] font-bold text-white font-display leading-[1.12]">
              Social Media Management Services in Gurgaon
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-5 text-base font-normal text-white/75 max-w-[600px] mx-auto leading-relaxed">
              Build a brand people love and remember — across Instagram, Facebook, LinkedIn, and more
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
                Book Free Call
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
              { label: "Social Media Management" },
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
              Optimax Studio is a full-service <strong>social media management agency in Gurgaon</strong> that builds brand presence, drives engagement, and turns followers into customers. We handle everything — content, Reels, community, and reporting — so you can focus on running your business. Whether you&apos;re a startup, a local business, or a growing brand, we manage your social media as if it were our own.
            </p>
          </FadeIn>

          {/* What We Do */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              What We Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatWeDo.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent p-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white/80 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white block mb-1">{item.title}</span>
                    <span className="text-xs text-white/75 leading-relaxed">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Platform Tags */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Platform-Specific Content Strategy
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {platforms.map((p) => (
                <span key={p} className="inline-block rounded-full bg-accent/10 text-accent px-4 py-1.5 text-sm font-medium">
                  {p}
                </span>
              ))}
            </div>
            <p className="text-base text-muted leading-relaxed">
              Each platform gets a tailored approach based on your audience, posting time data, and business goals.
            </p>
          </FadeIn>

          {/* Why Choose */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Why Choose a Social Media Management Agency?
            </h2>
            <div className="space-y-4">
              <p className="text-base text-muted leading-relaxed">
                Most businesses post inconsistently — a burst of content for a week, then silence for a month. This kills reach and confuses your audience. Social media algorithms reward accounts that show up regularly with quality content. Without a dedicated <strong>social media management service</strong>, you&apos;re invisible to thousands of potential customers who are actively searching for what you offer.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Your Instagram profile, LinkedIn page, and Facebook reviews are your digital storefront. A well-managed presence builds trust before a single conversation happens. Businesses with active, professional social media accounts convert 3x more leads from the same traffic than those without — that&apos;s why partnering with the right <strong>social media management agency</strong> matters.
              </p>
              <p className="text-base text-muted leading-relaxed">
                At Optimax Studio, every piece of content is backed by a strategy: what your audience responds to, when they&apos;re most active, and what moves them from follower to customer. Our clients across Gurgaon, Delhi NCR, and pan-India see measurable results within the first 30 days.
              </p>
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
                  src="/images/services/social-media-process.jpg"
                  alt="Social media management process at Optimax Studio"
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
                <p className="font-semibold text-text font-display text-lg">Not sure which package suits you?</p>
                <p className="text-sm text-muted mt-1">Book a free 30-minute call and we&apos;ll recommend the right plan for your brand.</p>
              </div>
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
              >
                Book Free Call
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
                <p className="font-semibold !text-white font-display text-lg">Ready to grow your social media presence?</p>
                <p className="text-sm !text-white mt-1">We reply within 24 hours. No pushy sales — just a straight conversation.</p>
              </div>
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a4a3a] transition-all hover:bg-white/90"
              >
                Book Free Call
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
            title="Ready to start your social media management project?"
            subtitle="Book a free 30-minute strategy call and let us show you what is possible."
            buttonText="Book Free Call"
            href="https://cal.com/optimax-studio"
          />
        </div>
      </section>
    </>
  );
}
