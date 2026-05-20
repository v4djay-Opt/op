"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started online",
    price: "₹25,000",
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
    price: "₹30,000",
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
    <section className="py-12 lg:py-20 px-4 bg-surface-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="PRICING"
          title={<>Transparent <em className="italic text-accent">Pricing</em></>}
          description="No hidden fees. Choose a plan that fits your business stage and scale as you grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-start">
          {/* Mobile: featured first; Desktop: original order */}
          {plans.map((plan, i) => (
            <FadeIn
              key={plan.name}
              delay={i * 0.1}
              className={plan.featured ? "order-first md:order-none" : ""}
            >
              <div
                className={`relative flex flex-col rounded-2xl p-6 lg:p-8 h-full transition-shadow hover:shadow-card-hover ${
                  plan.featured
                    ? "bg-accent text-white border-2 border-accent shadow-lg md:-mt-4 md:mb-4"
                    : "bg-white border border-border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-light px-3 py-1 text-xs font-bold text-accent border border-accent/20">
                    Most Popular
                  </div>
                )}

                <h3
                  className={`text-lg font-semibold font-display ${
                    plan.featured ? "text-white" : "text-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    plan.featured ? "text-white/70" : "text-muted"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold font-display ${
                      plan.featured ? "text-white" : "text-text"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white/70" : "text-muted"
                      }`}
                    >
                      /project
                    </span>
                  )}
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm ${
                        plan.featured ? "text-white/90" : "text-text-secondary"
                      }`}
                    >
                      <Check
                        className={`h-4 w-4 shrink-0 mt-0.5 ${
                          plan.featured ? "text-white" : "text-accent"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 block text-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                    plan.featured
                      ? "bg-white text-accent hover:bg-white/90"
                      : "border border-border text-text hover:bg-surface-alt"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
