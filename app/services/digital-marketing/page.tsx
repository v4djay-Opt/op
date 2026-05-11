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
    title: "Audit",
    description:
      "Deep dive into your current marketing funnel, ad accounts, SEO health, and competitor landscape.",
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "Build a channel mix, budget allocation, and 90-day growth roadmap tailored to your goals.",
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
    plan: "Pro",
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

const whoWeServe = [
  {
    label: "Startups & Founders",
    desc: "Digital marketing services for businesses starting from scratch — fast GTM, lead gen, and brand awareness.",
  },
  {
    label: "E-commerce Brands",
    desc: "Ecommerce digital marketing built around ROAS — Google Shopping, Meta retargeting, and abandoned cart flows.",
  },
  {
    label: "Local Businesses in Gurgaon",
    desc: "Local SEO, Google Ads, and social campaigns tailored for Gurgaon and Delhi NCR markets.",
  },
  {
    label: "Enterprises & Corporates",
    desc: "End-to-end performance marketing across multiple channels with dedicated account management.",
  },
];

const portfolio = [
  { name: "EduPro Academy", result: "3x Lead Generation", slug: "edupro-academy" },
  { name: "FitLife Gym", result: "150% Membership Growth", slug: "fitlife-gym" },
  { name: "Prime Realty", result: "2.5x Faster Closings", slug: "prime-realty" },
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

const interlinks = [
  {
    label: "Website Development Company",
    href: "/services/web-design-development",
    desc: "High-performance, SEO-ready websites built to convert.",
  },
  {
    label: "SEO Services in India",
    href: "/services/seo",
    desc: "Technical and content SEO to rank above competitors on Google.",
  },
  {
    label: "Social Media Management Agency",
    href: "/services/social-media-management",
    desc: "Instagram, LinkedIn, and Facebook content, Reels, and community growth.",
  },
  {
    label: "Custom CRM Development",
    href: "/services/crm-custom-portals",
    desc: "Automate your sales, ops, and client workflows with a custom CRM.",
  },
  {
    label: "Real Estate Digital Solutions",
    href: "/industries/real-estate",
    desc: "CRM, website, and marketing solutions tailored for property businesses.",
  },
  {
    label: "Ecommerce Solutions India",
    href: "/industries/retail-ecommerce",
    desc: "End-to-end digital solutions for retail and online stores.",
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
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-nature-sky/30 to-background" />
        </div>
        {/* img: alt="digital marketing agency team at Optimax Studio Gurgaon" */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: "Digital Marketing" },
              ]}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent font-display mb-4 mt-2">
              Service
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text font-display leading-tight">
              Digital Marketing Agency That Drives Real Results
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              SEO, paid ads, social media, and performance marketing — all
              under one roof, all built for measurable growth.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/5"
              >
                See Our Results
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">

          {/* Intro — first 100 words: digital marketing agency, digital marketing services, performance marketing agencies */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-16">
              Optimax Studio is a full-service{" "}
              <strong>digital marketing agency</strong> helping startups,
              e-commerce brands, and growing businesses dominate online. From
              SEO and Google Ads to social media and performance marketing, our{" "}
              <strong>digital marketing services</strong> are built around one
              goal — measurable growth. Unlike traditional{" "}
              <strong>performance marketing agencies</strong> that silo channels,
              we run an integrated strategy across paid, organic, and social —
              so every rupee you invest compounds into long-term brand authority
              and consistent revenue. Whether you're a local business in Gurgaon
              or scaling internationally, we've got you covered.
            </p>
          </FadeIn>

          {/* H2: Why Choose a Performance Marketing Agency Over a Traditional One? */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Why Choose a Performance Marketing Agency Over a Traditional One?
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Traditional agencies charge retainers and show you vanity metrics.
              As a <strong>best digital marketing agency</strong> alternative,
              Optimax Studio is obsessed with one thing: your return on
              investment. Every campaign is tracked at the click, lead, and
              rupee level — so you always know exactly what's working.
            </p>
            <p className="text-base text-muted leading-relaxed mb-6">
              We combine the agility of a startup with the rigour of an
              enterprise <strong>digital marketing company</strong> — fast
              execution, transparent reporting, and a team that treats your ad
              budget like their own.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Data-Driven Decisions",
                  desc: "Every campaign runs on real-time data — click-through rate, cost per lead, ROAS, and conversion rate tracked weekly.",
                },
                {
                  title: "Full-Funnel Coverage",
                  desc: "From brand awareness at the top of the funnel to retargeting and email automation at the bottom — we cover it all.",
                },
                {
                  title: "Integrated Paid + Organic",
                  desc: "Paid media fuels immediate growth while SEO builds long-term organic traffic — both working together.",
                },
                {
                  title: "No Locked Contracts",
                  desc: "Month-to-month engagements. We earn your trust every 30 days — or you walk. No lock-ins, no hidden fees.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
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

          {/* H2: Our Digital Marketing Services for Businesses */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Our Digital Marketing Services for Businesses
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Our end-to-end{" "}
              <strong>digital marketing services for businesses</strong> span
              every growth channel — from paid acquisition to organic SEO and
              social media. Each service is built around your specific audience,
              industry, and conversion goal.
            </p>
            {/* img: alt="digital marketing services for businesses India" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, i) => {
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

          {/* H2: SEO and Digital Marketing Services Under One Roof */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              SEO and Digital Marketing Services Under One Roof
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Most agencies force you to choose between paid and organic. We
              don't. Our integrated{" "}
              <strong>SEO and digital marketing services</strong> run in
              parallel — Google Ads drives immediate leads while our{" "}
              <strong>search engine optimization agency</strong> work builds a
              compounding organic pipeline that keeps delivering even when you
              pause spend.
            </p>
            <p className="text-base text-muted leading-relaxed">
              This dual-channel strategy means faster results in the short term
              and lower cost per acquisition as organic traffic grows. Brands
              that combine SEO with paid media typically see 2–3x better
              scalability compared to running paid alone.{" "}
              <Link
                href="/services/seo"
                className="text-accent hover:underline font-medium"
              >
                Explore our SEO services in India →
              </Link>
            </p>
          </FadeIn>

          {/* H2: Social Media Marketing Agency — Content That Converts */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Social Media Marketing Agency — Content That Converts
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Looking for a{" "}
              <strong>social media marketing agency near me</strong> that
              actually drives leads — not just likes? Our social media campaigns
              are built around your conversion funnel, not follower counts.
            </p>
            <p className="text-base text-muted leading-relaxed">
              We run paid social on Instagram, Facebook, and LinkedIn with
              audience segmentation, retargeting loops, and creative that stops
              the scroll. Combined with our organic{" "}
              <Link
                href="/services/social-media-management"
                className="text-accent hover:underline font-medium"
              >
                social media management agency
              </Link>{" "}
              service, your brand stays top-of-mind across every touchpoint.
            </p>
          </FadeIn>

          {/* H2: Ecommerce Digital Marketing Agency — Built for Online Stores */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Ecommerce Digital Marketing Agency — Built for Online Stores
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              As a specialized{" "}
              <strong>ecommerce digital marketing agency</strong>, we understand
              the unique challenges of online retail — cart abandonment,
              seasonal demand, high CPAs, and low repeat purchase rates. Our
              ecommerce marketing stack addresses all of them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Google Shopping Campaigns",
                  desc: "High-intent product ads with optimized feed, bidding strategy, and negative keyword management.",
                },
                {
                  title: "Meta Retargeting Funnels",
                  desc: "Abandoned cart recovery, product view retargeting, and lookalike audiences for new customer acquisition.",
                },
                {
                  title: "Email Automation",
                  desc: "Welcome sequences, cart recovery, post-purchase upsells, and loyalty campaigns — all automated.",
                },
                {
                  title: "Ecommerce SEO",
                  desc: "Category page optimization, product schema, and long-tail keyword content that ranks and converts.",
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
            <p className="text-sm text-muted mt-4">
              Learn more about our{" "}
              <Link
                href="/industries/retail-ecommerce"
                className="text-accent hover:underline font-medium"
              >
                ecommerce solutions India
              </Link>{" "}
              industry page.
            </p>
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
              {/* img: alt="performance marketing agency results dashboard" */}
              <div className="rounded-2xl border border-border bg-surface-alt overflow-hidden">
                <div className="h-64 lg:h-full flex items-center justify-center">
                  <span className="text-muted text-sm font-medium">
                    Digital Marketing Process
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

          {/* H2: Top Digital Marketing Agency in Gurgaon & Delhi NCR */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Top Digital Marketing Agency in Gurgaon & Delhi NCR
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Voted among the{" "}
              <strong>top digital marketing agency</strong> options in the NCR
              region, Optimax Studio is headquartered in Sector 93, Gurgaon.
              We work with businesses across Gurgaon, Noida, Delhi, Faridabad,
              and Greater Noida — in-person or remotely.
            </p>
            <p className="text-base text-muted leading-relaxed mb-4">
              As a <strong>digital marketing company Gurgaon</strong> businesses
              trust, we understand the local market: the competitive real estate
              sector, the booming startup ecosystem, the D2C brands scaling
              fast, and the enterprises looking for a reliable growth partner.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Searching for a{" "}
              <strong>digital marketing agency near me</strong>? Our Gurgaon
              office is open for in-person strategy sessions. Or book a virtual
              call and we'll get started the same day.{" "}
              <Link
                href="/contact"
                className="text-accent hover:underline font-medium"
              >
                Get in touch →
              </Link>
            </p>
          </FadeIn>

          {/* Who We Serve */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Who We Work With
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whoWeServe.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-accent/10 bg-accent/5 p-5"
                >
                  <h3 className="text-sm font-semibold text-text font-display mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* H2: Transparent Pricing for Every Budget */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Transparent Pricing for Every Budget
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              No bloated retainers. No vague scopes. Our{" "}
              <strong>digital marketing services</strong> are packaged
              transparently so you know exactly what you're getting. Need
              something custom?{" "}
              <Link
                href="/contact"
                className="text-accent hover:underline font-medium"
              >
                get in touch
              </Link>{" "}
              for a tailored quote.
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
                  <a
                    href="https://cal.com/optimax-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      plan.badge === "Most Popular"
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "border border-accent/30 text-accent hover:bg-accent/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Recent Results */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Recent Results
            </h2>
            {/* img: alt="top digital marketing agency in Gurgaon Optimax Studio" */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {portfolio.map((project) => (
                <div
                  key={project.slug}
                  className="group overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all hover:shadow-lg hover:-translate-y-1.5"
                >
                  <div
                    className="relative aspect-[16/10] bg-surface-alt overflow-hidden"
                    aria-label={`digital marketing results — ${project.name}`}
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
                View Our Work and Case Studies
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
            title="Ready to grow with a trusted digital marketing agency?"
            subtitle="Book a free strategy call and let's map out your 90-day growth plan."
            buttonText="Book a Free Strategy Call"
            href="https://cal.com/optimax-studio"
          />
        </div>
      </section>
    </>
  );
}
