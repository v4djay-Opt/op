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
  { name: "Tailwind",     icon: siTailwindcss },
  { name: "WordPress",    icon: siWordpress },
  { name: "Shopify",      icon: siShopify },
  { name: "Razorpay",     icon: siRazorpay },
  { name: "Google Ads",   icon: siGoogleads },
  { name: "Meta Ads",     icon: siMeta },
  { name: "Sanity",       icon: siSanity },
  { name: "Vercel",       icon: siVercel },
  { name: "AWS",          icon: siAmazonaws },
  { name: "Figma",        icon: siFigma },
];

function ToolIcon({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <svg
        role="img"
        viewBox="0 0 24 24"
        aria-label={tool.name}
        className="h-10 w-10"
        style={{ fill: `#${tool.icon.hex}` }}
      >
        <path d={tool.icon.path} />
      </svg>
      <span className="text-xs font-medium text-muted text-center">
        {tool.name}
      </span>
    </div>
  );
}

export function IntegrationsGrid() {
  return (
    <section className="py-12 lg:py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="TECH STACK"
          title={<>Tools We <em className="italic text-accent">Use</em></>}
          description="Modern technologies and platforms we leverage to build your digital presence."
        />

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-8 place-items-center">
          {tools.map((tool) => (
            <ToolIcon key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
