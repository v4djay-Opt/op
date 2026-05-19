import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  CheckCircle2,
  ArrowRight,
  Database,
  GitBranch,
  ShieldCheck,
  Plug,
  BarChart3,
  Users,
} from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://optimaxstudio.com";

export const metadata: Metadata = {
  title: "CRM & Custom Portal Development in Gurgaon | Optimax Studio",
  description:
    "Custom CRM and business portal development in Gurgaon. Automate workflows, track leads, and give your team real-time visibility. Built for your exact process.",
  alternates: {
    canonical: `${SITE_URL}/services/crm-custom-portals`,
  },
  openGraph: {
    title: "CRM & Custom Portal Development in Gurgaon | Optimax Studio",
    description:
      "Custom CRM and business portal development in Gurgaon. Automate workflows, track leads, and give your team real-time visibility. Built for your exact process.",
    type: "website",
    url: `${SITE_URL}/services/crm-custom-portals`,
    siteName: "Optimax Studio",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/og/crm-custom-portals.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM & Custom Portal Development in Gurgaon | Optimax Studio",
    description:
      "Custom CRM and business portal development in Gurgaon. Automate workflows, track leads, and give your team real-time visibility. Built for your exact process.",
    images: [`${SITE_URL}/og/crm-custom-portals.jpg`],
  },
};

/* ── JSON-LD schemas ── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM & Custom Portal Development",
  description:
    "Tailored CRMs and business portals that automate workflows, track leads, and give you real-time visibility into operations.",
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
  serviceType: "CRM & Custom Portal Development",
  offers: [
    { "@type": "Offer", name: "Basic Portal", priceCurrency: "INR", price: "49999" },
    { "@type": "Offer", name: "Business CRM", priceCurrency: "INR", price: "99999" },
    { "@type": "Offer", name: "Enterprise Portal", priceCurrency: "INR", price: "199999" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can the CRM integrate with WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer full WhatsApp Business API integration for lead capture, automated follow-ups, and team notifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is the data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We implement role-based access control, encrypted storage, and regular backups as standard on every project.",
      },
    },
    {
      "@type": "Question",
      name: "How long does CRM development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter portals are delivered in 2 weeks. Business CRMs take 4 weeks. Enterprise builds are typically 6 weeks depending on scope and integrations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build on existing platforms or from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. We can build on top of existing tools where it makes sense, or build entirely from scratch when your workflow is unique enough to warrant it. We recommend based on your specific needs.",
      },
    },
    {
      "@type": "Question",
      name: "Can we add features later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every system we build is architected for extensibility. New modules, integrations, and user roles can be added at any stage without rebuilding from scratch.",
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
    { "@type": "ListItem", position: 3, name: "CRM & Custom Portals" },
  ],
};

/* ── page data ── */
const whatWeDo = [
  {
    icon: Database,
    title: "Custom CRM Development",
    description:
      "Built around your exact workflow — lead stages, fields, follow-up rules, and team structure — not forced into a generic template.",
  },
  {
    icon: BarChart3,
    title: "Lead Tracking & Pipeline Management",
    description:
      "Visual pipelines, automated follow-up reminders, and real-time dashboards so no lead ever goes cold.",
  },
  {
    icon: Users,
    title: "Employee & Vendor Portals",
    description:
      "Dedicated portals for internal teams, vendors, or clients — with role-based access, document management, and task tracking.",
  },
  {
    icon: Plug,
    title: "Tool Integration",
    description:
      "Connect with WhatsApp Business API, email, Razorpay, Stripe, and your existing software — all in one unified workflow.",
  },
];

const process = [
  {
    step: 1,
    title: "Map",
    description:
      "We document your current workflow, pain points, and team structure to build a system that reflects how you actually work.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Wireframes and user flows for every role — reviewed and approved by your team before a single line of code is written.",
  },
  {
    step: 3,
    title: "Build",
    description:
      "Clean, scalable architecture with role-based security, encrypted data storage, and performance built in from day one.",
  },
  {
    step: 4,
    title: "Train & Deploy",
    description:
      "We onboard your team, run live training sessions, and stay available post-launch to ensure smooth adoption.",
  },
];

const stats = [
  { value: "40%", label: "Admin Time Saved on Average" },
  { value: "3–6 Wks", label: "Average Delivery Time" },
  { value: "100%", label: "Custom Built — No Templates" },
];

const pricing = [
  {
    plan: "Starter",
    price: "₹49,999",
    badge: null as string | null,
    description: "Basic Portal — one-time project fee.",
    features: [
      "Up to 5 user roles",
      "Lead or task tracking module",
      "WhatsApp or email integration",
      "Basic dashboard & reports",
      "2 weeks delivery",
    ],
    cta: "Get Started",
  },
  {
    plan: "Growth",
    price: "₹99,999",
    badge: "Most Popular" as string | null,
    description: "Business CRM — one-time project fee.",
    features: [
      "Up to 15 user roles",
      "Full CRM: leads, pipeline, follow-ups",
      "Payment + WhatsApp + Email integration",
      "Custom dashboard & reports",
      "4 weeks delivery",
    ],
    cta: "Get Started",
  },
  {
    plan: "Scale",
    price: "₹1,99,999",
    badge: null as string | null,
    description: "Enterprise Portal — one-time project fee.",
    features: [
      "Unlimited roles & modules",
      "Multi-branch or multi-team support",
      "API integrations + automation workflows",
      "Dedicated project manager",
      "6 weeks delivery",
    ],
    cta: "Get a Quote",
  },
];

const faqs = [
  {
    question: "Can the CRM integrate with WhatsApp?",
    answer:
      "Yes, we offer full WhatsApp Business API integration for lead capture, automated follow-ups, and team notifications.",
  },
  {
    question: "Is the data secure?",
    answer:
      "Absolutely. We implement role-based access control, encrypted storage, and regular backups as standard on every project.",
  },
  {
    question: "How long does CRM development take?",
    answer:
      "Starter portals are delivered in 2 weeks. Business CRMs take 4 weeks. Enterprise builds are typically 6 weeks depending on scope and integrations.",
  },
  {
    question: "Do you build on existing platforms or from scratch?",
    answer:
      "Both. We can build on top of existing tools where it makes sense, or build entirely from scratch when your workflow is unique enough to warrant it. We recommend based on your specific needs.",
  },
  {
    question: "Can we add features later?",
    answer:
      "Yes. Every system we build is architected for extensibility. New modules, integrations, and user roles can be added at any stage without rebuilding from scratch.",
  },
];

export default function CRMPage() {
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
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.04)" }} />
        <div className="absolute -bottom-16 -right-16 h-[350px] w-[350px] rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.03)" }} />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4 mt-2">
              CRM & Custom Portals
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2rem,4.5vw,3.4rem)] font-bold text-white font-display leading-[1.12]">
              CRM & Custom Portals Development in Gurgaon
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-5 text-base font-normal text-white/75 max-w-[600px] mx-auto leading-relaxed">
              Software that works exactly how your business does — automate workflows, track leads, give your team real-time visibility
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
                See How It Works
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
              { label: "CRM & Custom Portals" },
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
              Optimax Studio builds <strong>tailored CRMs and business portals</strong> that automate workflows, track leads, and give you real-time visibility into operations. Every system is purpose-built around your exact process — no off-the-shelf templates, no compromises. Built for teams in Gurgaon and Delhi NCR who have outgrown spreadsheets.
            </p>
          </FadeIn>

          {/* Why Choose Us */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Why Choose a Custom-Built CRM?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: GitBranch, title: "Built Around Your Workflow", desc: "No template forced onto your process. We map every stage, field, and rule to match exactly how your team works." },
                { icon: Plug, title: "Integrates With Your Stack", desc: "WhatsApp Business API, email, payment gateways, and more — your CRM connects to every tool you already use." },
                { icon: ShieldCheck, title: "Secure & Scalable", desc: "Role-based access control, encrypted data, and an architecture that grows with your team and your business." },
                { icon: Users, title: "Trained & Supported", desc: "We onboard your team with live training sessions and stay available post-launch — no abandoned handovers." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent p-5">
                    <Icon className="h-5 w-5 shrink-0 text-white/80 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-white block mb-1">{item.title}</span>
                      <span className="text-xs text-white/75 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* What We Do */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              What We Build
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Every solution is purpose-built around your business goals — not a cookie-cutter template. Secure, scalable, and ready to grow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatWeDo.map((item, i) => {
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
              <div className="relative rounded-2xl border border-border overflow-hidden h-64 lg:h-full min-h-[260px] bg-surface-alt flex items-center justify-center">
                <span className="text-muted text-sm font-medium">CRM Development Process</span>
              </div>
            </div>
          </FadeIn>

          {/* Mid-page CTA — after process */}
          <FadeIn className="mb-16">
            <div className="rounded-2xl bg-accent/5 border border-accent/20 px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-text font-display text-lg">Not sure what you need?</p>
                <p className="text-sm text-muted mt-1">Book a free 30-minute consultation and we&apos;ll map the right solution for your business.</p>
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
              One-time project fees. No retainers, no lock-ins. Need something custom?{" "}
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
                <p className="font-semibold !text-white font-display text-lg">Ready to start your project?</p>
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
            title="Ready to start your CRM & custom portals project?"
            subtitle="Book a free 30-minute strategy call and let us show you what is possible."
            buttonText="Book Free Call"
            href="https://cal.com/optimax-studio"
          />
        </div>
      </section>
    </>
  );
}
