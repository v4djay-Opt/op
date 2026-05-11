import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    title: "Brand Voice & Onboarding",
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
    name: "Starter",
    price: "Rs. 8,999/mo",
    featured: false,
    features: [
      "12 posts per month",
      "Instagram + Facebook",
      "Basic graphics & captions",
      "Monthly performance report",
      "Content calendar approval",
    ],
  },
  {
    name: "Growth",
    price: "Rs. 14,999/mo",
    featured: true,
    features: [
      "20 posts per month",
      "Instagram + Facebook + LinkedIn",
      "Reels + graphics + copywriting",
      "Community management",
      "Bi-weekly performance report",
      "WhatsApp integration",
    ],
  },
  {
    name: "Pro",
    price: "Rs. 24,999/mo",
    featured: false,
    features: [
      "30 posts per month",
      "All platforms incl. YouTube",
      "Influencer outreach (2/month)",
      "Paid ads management",
      "Weekly report + strategy call",
      "Dedicated account manager",
    ],
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
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-nature-sky/30 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: "Social Media Management" },
              ]}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent font-display mb-4">
              Service
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text font-display leading-tight">
              Social Media Management
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Build a Brand People Love and Remember
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-4">
        <div className="mx-auto max-w-4xl">
          {/* Description */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-16">
              End-to-end social media management service from content creation to
              community engagement. We grow your following and turn fans into
              customers — across Instagram, Facebook, LinkedIn, and more.
            </p>
          </FadeIn>

          {/* What We Do */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              What We Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatWeDo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <div>
                    <span className="text-sm text-text leading-relaxed block">
                      {item.title}
                    </span>
                    <span className="text-xs text-muted leading-relaxed mt-1 block">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Platforms We Manage */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Instagram Management Service & More Platforms
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="inline-block rounded-full bg-accent/10 text-accent px-4 py-1.5 text-sm font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              We create platform-specific content strategies — Reels and carousels
              for Instagram, thought leadership posts for LinkedIn, and video content
              for YouTube. Each platform gets a tailored approach based on your
              audience, posting time data, and business goals. Our{" "}
              <Link
                href="/services/social-media-management"
                className="text-accent hover:underline"
              >
                instagram management service
              </Link>{" "}
              is one of our most in-demand offerings across India.
            </p>
          </FadeIn>

          {/* SEO Content Block */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Why Choose a Social Media Management Agency?
            </h2>
            <div className="space-y-4 max-w-3xl">
              <p className="text-base text-muted leading-relaxed">
                Most businesses post inconsistently — a burst of content for a
                week, then silence for a month. This inconsistency kills reach and
                confuses your audience. Social media algorithms reward accounts
                that show up regularly with quality content. Without a dedicated{" "}
                <strong>social media management service</strong>, you&apos;re invisible
                to thousands of potential customers who are actively searching for
                what you offer.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Social media is now the first place potential customers check
                before making a purchase decision. Your Instagram profile,
                LinkedIn page, and Facebook reviews are your digital storefront.
                A well-managed presence builds trust before a single conversation
                happens. Businesses with active, professional social media
                accounts convert 3x more leads from the same traffic than those
                without. That&apos;s why partnering with the right{" "}
                <strong>social media management agency</strong> matters.
              </p>
              <p className="text-base text-muted leading-relaxed">
                At Optimax Studio, we don&apos;t just post content — we build a brand.
                Every piece of content we create is backed by a strategy: what
                your audience responds to, when they&apos;re most active, and what
                moves them from follower to customer. Our clients across Gurgaon,
                Delhi NCR, and pan-India see measurable results — more DM
                inquiries, higher engagement rates, and a consistent brand voice —
                within the first 30 days of our{" "}
                <strong>social media management services</strong>.
              </p>
            </div>
          </FadeIn>

          {/* Demo Image */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Process in Action
            </h2>
            <div className="rounded-2xl border border-border bg-white overflow-hidden">
              <div className="relative aspect-[16/9] bg-surface-alt flex items-center justify-center">
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  Sample Dashboard
                </span>
                <span className="text-muted text-sm font-medium">
                  Social Media Management Dashboard
                </span>
              </div>
              <p className="px-5 py-3 text-xs text-muted italic border-t border-border bg-surface-alt">
                Sample social media management dashboard — content calendar,
                platform performance &amp; engagement tracking. Your actual
                dashboard will reflect your brand data.
              </p>
            </div>
          </FadeIn>

          {/* Our Process */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Process
            </h2>
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
                  <div className="text-muted mt-2 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Pricing Packages */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-8 text-center">
              Social Media Management Packages &amp; Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-2xl border p-6 relative ${
                    plan.featured
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-white shadow-card"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    <span
                      className={`text-sm font-medium ${
                        plan.featured ? "text-accent" : "text-muted"
                      }`}
                    >
                      {plan.name}
                    </span>
                    <div
                      className={`mt-1 text-3xl font-bold font-display ${
                        plan.featured ? "text-accent" : "text-text"
                      }`}
                    >
                      {plan.price}
                    </div>
                  </div>
                  <ul className="mb-6 space-y-3 flex-1">
                    {plan.features.map((f, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 text-sm ${
                          plan.featured ? "text-text" : "text-muted"
                        }`}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            plan.featured ? "text-accent" : "text-accent"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      plan.featured
                        ? "bg-accent text-white hover:bg-accent-hover"
                        : "border border-border text-text hover:bg-surface-alt"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group/link hover:gap-2 transition-all"
              >
                Not sure which plan fits? Book a free call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* FAQs */}
          <div className="mb-10">
            <FAQSection faqs={faqs} />
          </div>

          {/* Interlinks */}
          <FadeIn className="mb-16">
            <div className="rounded-2xl border border-border bg-surface-alt p-6 md:p-8">
              <h3 className="text-base font-semibold text-text font-display mb-4">
                Explore Related Services &amp; Solutions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    title: "Digital Marketing",
                    desc: "SEO, paid ads & full-funnel campaigns",
                    href: "/services/digital-marketing",
                  },
                  {
                    title: "Web Design & Development",
                    desc: "Websites that convert visitors to customers",
                    href: "/services/web-design-development",
                  },
                  {
                    title: "SEO Services",
                    desc: "Rank on Google and grow organic traffic",
                    href: "/services/seo",
                  },
                  {
                    title: "Real Estate Social Media",
                    desc: "Social media management for agents & builders",
                    href: "/industries/real-estate",
                  },
                  {
                    title: "Education Social Media",
                    desc: "Build brand presence for schools & institutes",
                    href: "/industries/schools-education",
                  },
                  {
                    title: "Case Studies",
                    desc: "See real results from our clients",
                    href: "/case-studies",
                  },
                ].map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group rounded-xl border border-border bg-white p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="text-accent text-xs float-right mt-0.5">
                      →
                    </span>
                    <strong className="text-sm text-text font-display block mb-1">
                      {card.title}
                    </strong>
                    <span className="text-xs text-muted">{card.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Bottom CTA */}
          <BottomCTA title="Ready to start your social media management project?" />
        </div>
      </section>
    </>
  );
}
