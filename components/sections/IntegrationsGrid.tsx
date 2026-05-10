"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tools = [
  { name: "Next.js" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "WordPress" },
  { name: "Shopify" },
  { name: "Razorpay" },
  { name: "Google Ads" },
  { name: "Meta Ads" },
  { name: "Sanity CMS" },
  { name: "Vercel" },
  { name: "AWS" },
  { name: "Figma" },
];

export function IntegrationsGrid() {
  return (
    <section className="py-20 lg:py-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Tech Stack"
          title={<>Tools We <em className="italic text-accent">Use</em></>}
          description="Modern technologies and platforms we leverage to build your digital presence."
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <FadeIn key={tool.name} delay={i * 0.05}>
              <div className="flex flex-col items-center rounded-2xl bg-white border border-border p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                <div className="h-10 w-10 mb-2 flex items-center justify-center rounded-lg bg-surface-alt">
                  <span className="text-sm font-bold text-accent font-display">
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium text-muted">{tool.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
