"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  siNextdotjs,
  siReact,
  siTailwindcss,
  siWordpress,
  siShopify,
  siRazorpay,
  siGoogleads,
  siMeta,
  siSanity,
  siVercel,
  siAmazonaws,
  siFigma,
} from "simple-icons";

const tools = [
  { name: "Next.js",      icon: siNextdotjs },
  { name: "React",        icon: siReact },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "WordPress",    icon: siWordpress },
  { name: "Shopify",      icon: siShopify },
  { name: "Razorpay",     icon: siRazorpay },
  { name: "Google Ads",   icon: siGoogleads },
  { name: "Meta Ads",     icon: siMeta },
  { name: "Sanity CMS",   icon: siSanity },
  { name: "Vercel",       icon: siVercel },
  { name: "AWS",          icon: siAmazonaws },
  { name: "Figma",        icon: siFigma },
];

/* Duplicate for seamless loop */
const allTools = [...tools, ...tools];

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <div className="flex-shrink-0 w-[140px] md:w-[160px] lg:w-[180px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-accent-light/30 border border-accent/10 p-5 lg:p-6 transition-all duration-300 hover:bg-accent-light/50 hover:shadow-sm hover:-translate-y-0.5">
      <svg
        role="img"
        viewBox="0 0 24 24"
        aria-label={tool.name}
        className="h-8 w-8 lg:h-10 lg:w-10"
        style={{ fill: `#${tool.icon.hex}` }}
      >
        <path d={tool.icon.path} />
      </svg>
      <span className="text-xs font-medium text-text text-center whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  );
}

export function IntegrationsGrid() {
  return (
    <section className="py-12 lg:py-20 px-4 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="TECH STACK"
          title={<>Tools We <em className="italic text-accent">Use</em></>}
          description="Modern technologies and platforms we leverage to build your digital presence."
        />
      </div>

      {/* Continuous marquee with fade edges */}
      <div className="mt-8 lg:mt-10 relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-[#F5F2EC] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-[#F5F2EC] to-transparent" />

        <div className="animate-scroll-left flex gap-5 lg:gap-6">
          {allTools.map((tool, i) => (
            <ToolCard key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
