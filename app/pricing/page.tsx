import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQSection } from "@/components/ui/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for web design, development, digital marketing, and CRM solutions. No hidden fees.",
};

/* ── Plans ── */
const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started online",
    price: "₹29,999",
    period: "project",
    featured: false,
    features: [
      "5-page responsive website",
      "Basic search engine optimization setup",
      "Contact form integration",
      "Mobile optimized",
      "1 month free support",
      "1 revision round per deliverable",
      "Email support (48hr response)",
      "1 active project at a time",
    ],
  },
  {
    name: "Growth",
    description: "For businesses ready to scale",
    price: "₹79,999",
    period: "project",
    featured: true,
    features: [
      "Custom web app / CRM",
      "Advanced search engine optimization & analytics",
      "Social media setup",
      "Lead capture funnels",
      "3 months free support",
      "Priority delivery",
      "3 revision rounds per deliverable",
      "Priority email + WhatsApp support",
      "Up to 3 active projects simultaneously",
      "Monthly performance report",
    ],
  },
  {
    name: "Enterprise",
    description: "For large-scale custom solutions",
    price: "Custom",
    period: null,
    featured: false,
    features: [
      "Full custom portal / SaaS",
      "Dedicated project manager",
      "API integrations",
      "Ongoing maintenance",
      "SLA-backed support",
      "White-label options",
      "Unlimited revisions",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Custom SLA agreement",
      "Unlimited active projects",
    ],
  },
];

/* ── FAQ ── */
const pricingFaqs = [
  {
    question: "Are there any hidden charges?",
    answer:
      "None at all. The price you see is what you pay. Any additional scope is discussed and agreed upon before we begin — no surprises.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade at any time. We'll prorate the difference and move you to the new plan seamlessly.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a satisfaction guarantee on the first milestone. If you're not happy with the initial delivery, we'll revise it until you are — or refund that milestone.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, UPI, Razorpay, and international wire transfers for overseas clients.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "No lock-in contracts. Monthly retainer plans can be cancelled with 15 days notice.",
  },
  {
    question: "Can I get a custom quote?",
    answer:
      "Absolutely. If your requirements don't fit neatly into a plan, reach out and we'll build a custom package for you.",
  },
];

export default function PricingPage() {
  const starter = plans.find((p) => p.name === "Starter")!;
  const growth = plans.find((p) => p.name === "Growth")!;
  const enterprise = plans.find((p) => p.name === "Enterprise")!;

  return (
    <>
      {/* Hero */}
      <PageHero
        label="PRICING"
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. No long-term lock-ins. Pick a plan that fits where you are today — and scale when you're ready."
        subtitleClassName="mt-4 text-base font-normal max-w-[520px] mx-auto leading-relaxed text-white/75"
        green
        breadcrumbs={[{ label: "Pricing" }]}
      />

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 px-4 bg-surface-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <FadeIn>
              <div className="flex flex-col rounded-2xl bg-white border border-border p-8 h-full">
                <h3 className="text-lg font-semibold text-text font-display">{starter.name}</h3>
                <p className="text-sm text-muted mt-1">{starter.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-text font-display">{starter.price}</span>
                  {starter.period && (
                    <span className="text-sm text-muted">/{starter.period}</span>
                  )}
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {starter.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block text-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-text hover:bg-surface-alt transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>

            {/* Growth — Featured */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col rounded-2xl bg-accent text-white p-8 shadow-lg relative h-full">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-highlight px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
                <h3 className="text-lg font-semibold font-display">{growth.name}</h3>
                <p className="text-sm text-white/70 mt-1">{growth.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-display">{growth.price}</span>
                  {growth.period && (
                    <span className="text-sm text-white/70">/{growth.period}</span>
                  )}
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {growth.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                      <Check className="h-4 w-4 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block text-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent hover:bg-white/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>

            {/* Enterprise */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col rounded-2xl bg-white border border-border p-8 h-full">
                <h3 className="text-lg font-semibold text-text font-display">{enterprise.name}</h3>
                <p className="text-sm text-muted mt-1">{enterprise.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-text font-display">{enterprise.price}</span>
                  {enterprise.period && (
                    <span className="text-sm text-muted">/{enterprise.period}</span>
                  )}
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {enterprise.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block text-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-text hover:bg-surface-alt transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 px-4 bg-surface-alt">
        <FAQSection faqs={pricingFaqs} />
      </section>

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
