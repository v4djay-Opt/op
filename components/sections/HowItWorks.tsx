"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";

const steps = [
  {
    title: "Discovery Call",
    description:
      "We understand your business goals, audience, challenges, and project requirements in a strategic consultation call.",
  },
  {
    title: "Strategy & Planning",
    description:
      "We create a clear execution roadmap, structure, timelines, and digital strategy tailored to your business.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our team designs modern, responsive, and conversion-focused user experiences aligned with your brand.",
  },
  {
    title: "Development & Integration",
    description:
      "We develop scalable websites, systems, automations, and integrations with clean performance-focused code.",
  },
  {
    title: "Testing & Optimization",
    description:
      "Every project goes through quality checks, speed optimization, responsiveness testing, and SEO setup.",
  },
  {
    title: "Launch & Scale",
    description:
      "We launch your solution, monitor performance, and continuously optimize for long-term growth and ROI.",
  },
];

function StepCircle({
  index,
  isActive,
}: {
  index: number;
  isActive: boolean;
}) {
  return (
    <div
      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full font-bold font-display text-lg transition-all duration-500 ${
        isActive
          ? "bg-accent text-white shadow-xl scale-110"
          : "bg-white text-accent border-2 border-accent/20 shadow-md"
      }`}
    >
      {index + 1}
    </div>
  );
}

function StepCard({
  step,
  isActive,
}: {
  step: (typeof steps)[0];
  isActive: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-500 group h-full ${
        isActive
          ? "bg-white border-accent/20 shadow-card-hover -translate-y-2"
          : "bg-white/70 border-border/60 shadow-card hover:border-accent/15 hover:shadow-card-hover hover:-translate-y-1"
      }`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-8 right-8 h-[2px] rounded-full transition-all duration-500 ${
          isActive ? "bg-accent" : "bg-transparent group-hover:bg-accent/30"
        }`}
      />
      <h3
        className={`text-base lg:text-lg font-semibold font-display mb-3 transition-colors duration-300 ${
          isActive ? "text-accent" : "text-text group-hover:text-accent"
        }`}
      >
        {step.title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 px-4 bg-surface-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="PROCESS"
          title="How We Work"
        />

        {/* Desktop: horizontal timeline (lg+) */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Horizontal connecting line */}
            <div className="absolute top-8 left-[8.33%] right-[8.33%] h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.1}>
                  <div
                    className="flex flex-col items-center text-center cursor-default h-full"
                    onMouseEnter={() => setActiveStep(i)}
                  >
                    <StepCircle index={i} isActive={i === activeStep} />
                    <div className="mt-6 w-full flex-1 flex">
                      <StepCard step={step} isActive={i === activeStep} />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet: 3x2 grid with partial connecting lines */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-x-6 gap-y-10 relative">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <div
                className="flex flex-col items-center text-center h-full"
                onMouseEnter={() => setActiveStep(i)}
              >
                <StepCircle index={i} isActive={i === activeStep} />
                <div className="mt-5 w-full flex-1 flex">
                  <StepCard step={step} isActive={i === activeStep} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative max-w-lg mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08}>
                <div
                  className="flex items-stretch gap-5 cursor-default"
                  onMouseEnter={() => setActiveStep(i)}
                >
                  <div className="flex-shrink-0 pt-1">
                    <StepCircle index={i} isActive={i === activeStep} />
                  </div>
                  <div className="flex-1 pt-1 flex">
                    <StepCard step={step} isActive={i === activeStep} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
