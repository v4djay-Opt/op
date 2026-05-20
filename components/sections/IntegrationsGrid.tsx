"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const CARDS_PER_PAGE = 6;

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-accent-light/30 border border-accent/10 p-5 lg:p-6 transition-all duration-300 hover:bg-accent-light/50 hover:shadow-sm hover:-translate-y-0.5">
      <svg
        role="img"
        viewBox="0 0 24 24"
        aria-label={tool.name}
        className="h-8 w-8 lg:h-10 lg:w-10"
        style={{ fill: `#${tool.icon.hex}` }}
      >
        <path d={tool.icon.path} />
      </svg>
      <span className="text-xs font-medium text-text text-center">
        {tool.name}
      </span>
    </div>
  );
}

export function IntegrationsGrid() {
  const totalPages = Math.ceil(tools.length / CARDS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setDirection(1);
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  /* Auto-slide */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const start = page * CARDS_PER_PAGE;
  const visible = tools.slice(start, start + CARDS_PER_PAGE);

  return (
    <section
      className="py-12 lg:py-20 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="TECH STACK"
          title={<>Tools We <em className="italic text-accent">Use</em></>}
          description="Modern technologies and platforms we leverage to build your digital presence."
        />

        {/* Slider track */}
        <div className="relative overflow-hidden" style={{ minHeight: '120px' }}>
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={page}
              initial={{ x: direction > 0 ? '8%' : '-8%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? '-8%' : '8%', opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-3 md:grid-cols-6 gap-6 lg:gap-8 place-items-center"
            >
              {visible.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
