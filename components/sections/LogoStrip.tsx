"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const logos = [
  "EduPro Academy",
  "FitLife Gym",
  "Prime Realty",
  "GreenLeaf Interiors",
  "MediCare Clinic",
  "SmartRetail",
  "TechStart",
];

export function LogoStrip() {
  return (
    <section className="py-12 lg:py-16 border-y border-border-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-8">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider">
            Trusted by businesses across India
          </p>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-semibold text-muted/60 hover:text-text transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
