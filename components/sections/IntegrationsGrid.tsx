"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
                <ToolIcon key={tool.name} tool={tool} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows + Dots */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-all hover:bg-accent hover:text-white hover:border-accent"
            aria-label="Previous tools"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > page ? 1 : -1);
                  setPage(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-6 bg-accent"
                    : "w-2 bg-border hover:bg-muted"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-all hover:bg-accent hover:text-white hover:border-accent"
            aria-label="Next tools"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
