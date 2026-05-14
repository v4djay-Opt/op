"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cases = [
  {
    client: "EduPro Academy",
    industry: "Education",
    result: "3x",
    metric: "Lead Generation",
    description:
      "Redesigned their digital presence and implemented a custom CRM that tripled qualified leads in 6 months.",
    href: "/case-studies/edupro-academy",
  },
  {
    client: "FitLife Gym",
    industry: "Fitness",
    result: "150%",
    metric: "Membership Growth",
    description:
      "Built an integrated management system with automated renewals and lead tracking.",
    href: "/case-studies/fitlife-gym",
  },
  {
    client: "Prime Realty",
    industry: "Real Estate",
    result: "2.5x",
    metric: "Faster Closings",
    description:
      "Deployed a custom real estate CRM that streamlined the entire sales pipeline.",
    href: "/case-studies/prime-realty",
  },
];

export function CaseStudies() {
  return (
    <section className="relative py-[64px] lg:py-[120px] px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Results"
          title={<>Case <em className="italic text-accent">Studies</em></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <FadeIn key={c.client} delay={i * 0.12}>
              <Link
                href={c.href}
                className="group flex flex-col rounded-2xl bg-white border border-border p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 h-full"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/20">
                    {c.industry}
                  </span>
                  <TrendingUp className="h-5 w-5 text-accent/30 group-hover:text-accent/60 transition-colors" />
                </div>

                <div className="mb-5">
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-muted font-display leading-tight">
                    {c.result}
                  </div>
                  <div className="text-sm font-medium text-muted mt-1">{c.metric}</div>
                </div>

                <h3 className="text-xl font-semibold text-text font-display mb-2">
                  {c.client}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {c.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent/60 transition-all group-hover:text-accent">
                  Read Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
