"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Discovery Call",
    description:
      "We audit your digital presence and understand your business goals in a free 30-minute call.",
  },
  {
    title: "Strategy & Build",
    description:
      "Our team designs and develops your solution with weekly milestones and transparent updates.",
  },
  {
    title: "Launch & Scale",
    description:
      "We launch, monitor performance, and iterate to maximize your ROI month over month.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 px-4 bg-surface-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Process"
          title={<>How We <em className="italic text-accent">Work</em></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white text-xl font-bold font-display shadow-md mb-6">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-text font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
