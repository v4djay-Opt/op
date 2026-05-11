"use client";

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

function ToolCard({ tool }: { tool: { name: string } }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white border border-border p-7 min-w-[130px] lg:min-w-[160px] transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 hover:border-accent/20 select-none">
      <div className="h-12 w-12 mb-3 flex items-center justify-center rounded-xl bg-surface-alt">
        <span className="text-base font-bold text-accent font-display">
          {tool.name.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-medium text-muted whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  );
}

export function IntegrationsGrid() {
  const duplicated = [...tools, ...tools];

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          label="Tech Stack"
          title={<>Tools We <em className="italic text-accent">Use</em></>}
          description="Modern technologies and platforms we leverage to build your digital presence."
        />
      </div>

      {/* Carousel track with edge fade masks */}
      <div className="relative mt-10 px-12 lg:px-[200px]">
        {/* Left fade mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
        {/* Right fade mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-5 animate-scroll-left">
          {duplicated.map((tool, i) => (
            <ToolCard key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
