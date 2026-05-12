"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started online",
    price: "₹29,999",
    period: "project",
    features: [
      "5-page responsive website",
      "Basic search engine optimization setup",
      "Contact form integration",
      "Mobile optimized",
      "1 month free support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    description: "For businesses ready to scale",
    price: "₹79,999",
    period: "project",
    features: [
      "Custom web app / CRM",
      "Advanced search engine optimization & analytics",
      "Social media setup",
      "Lead capture funnels",
      "3 months free support",
      "Priority delivery",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale custom solutions",
    price: "Custom",
    period: null,
    features: [
      "Full custom portal / SaaS",
      "Dedicated project manager",
      "API integrations",
      "Ongoing maintenance",
      "SLA-backed support",
      "White-label options",
    ],
    featured: false,
  },
];

export function PricingCards() {
  return (
    <section className="py-20 lg:py-28 px-4 bg-surface-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Pricing"
          title={<>Transparent <em className="italic text-accent">Pricing</em></>}
          description="No hidden fees. Choose a plan that fits your business stage and scale as you grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              {plan.featured ? (
                <div className="flex flex-col rounded-2xl bg-accent text-white p-8 shadow-lg relative h-full">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-highlight px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                  <h3 className="text-lg font-semibold font-display">{plan.name}</h3>
                  <p className="text-sm text-white/70 mt-1">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-display">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-white/70">/{plan.period}</span>
                    )}
                  </div>
                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.features.map((f) => (
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
              ) : (
                <div className="flex flex-col rounded-2xl bg-white border border-border p-8 h-full">
                  <h3 className="text-lg font-semibold text-text font-display">{plan.name}</h3>
                  <p className="text-sm text-muted mt-1">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-text font-display">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-muted">/{plan.period}</span>
                    )}
                  </div>
                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.features.map((f) => (
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
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
