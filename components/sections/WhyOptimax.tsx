"use client";

import { Zap, Shield, Clock, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Zap,
    title: "5+ Years of Experience",
    description:
      "Deep expertise across web, mobile, and enterprise solutions.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Agile delivery with weekly milestones and transparent updates.",
  },
  {
    icon: Shield,
    title: "Dedicated Support",
    description:
      "Post-launch maintenance and 24/7 priority support included.",
  },
  {
    icon: BarChart3,
    title: "ROI Focused",
    description:
      "Every decision is backed by data to maximize your revenue.",
  },
];

export function WhyOptimax() {
  return (
    <section className="relative py-20 lg:py-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Why Us"
          title={<>Why Choose <em className="italic text-accent">Optimax</em></>}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.1}>
              <div className="group flex flex-col rounded-2xl bg-white border border-border p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text font-display mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
