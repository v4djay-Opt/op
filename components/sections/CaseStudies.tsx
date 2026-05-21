"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface CaseStudyCard {
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  href: string;
}

function CaseCard({ c }: { c: CaseStudyCard }) {
  return (
    <Link
      href={c.href}
      className="group flex flex-col rounded-2xl bg-white border border-border p-6 lg:p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 h-full min-h-[300px] lg:min-h-[320px]"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/20">
          {c.industry}
        </span>
        <TrendingUp className="h-5 w-5 text-accent/30 group-hover:text-accent/60 transition-colors" />
      </div>

      <div className="mb-4">
        <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-muted font-display leading-tight">
          {c.result}
        </div>
        <div className="text-sm font-medium text-muted mt-1">{c.metric}</div>
      </div>

      <h3 className="text-lg lg:text-xl font-semibold text-text font-display mb-2">
        {c.client}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed flex-1">
        {c.description}
      </p>

      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent/60 transition-all group-hover:text-accent">
        Read Case Study
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

const CARDS_PER_PAGE = 3;

export function CaseStudies({ cases }: { cases: CaseStudyCard[] }) {
  const total = cases.length;
  const totalPages = Math.max(1, total - CARDS_PER_PAGE + 1);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const pageRef = useRef(page);
  pageRef.current = page;

  const goNext = useCallback(() => {
    setDirection(1);
    setPage((p) => (p + 1 >= totalPages ? 0 : p + 1));
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setPage((p) => (p - 1 < 0 ? totalPages - 1 : p - 1));
  }, [totalPages]);

  const goTo = useCallback((index: number) => {
    const current = pageRef.current;
    const forward = (index - current + totalPages) % totalPages;
    const backward = (current - index + totalPages) % totalPages;
    setDirection(forward <= backward ? 1 : -1);
    setPage(index);
  }, [totalPages]);

  /* Auto-slide */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setPage((p) => (p + 1 >= totalPages ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const visible = cases.slice(page, page + CARDS_PER_PAGE);
  const displayCards =
    visible.length < CARDS_PER_PAGE
      ? [...visible, ...cases.slice(0, CARDS_PER_PAGE - visible.length)]
      : visible;

  if (cases.length === 0) return null;

  return (
    <section
      className="relative py-12 lg:py-20 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="CASE STUDIES"
          title={<>Case <em className="italic text-accent">Studies</em></>}
        />

        {/* Desktop: 3 cards sliding */}
        <div className="hidden md:block relative overflow-hidden" style={{ minHeight: '340px' }}>
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={page}
              initial={{ x: direction > 0 ? '8%' : '-8%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? '-8%' : '8%', opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 grid grid-cols-3 gap-6"
            >
              {displayCards.map((c, i) => (
                <CaseCard key={`${c.client}-${i}`} c={c} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: 1 card sliding */}
        <div className="md:hidden relative overflow-hidden" style={{ minHeight: '320px' }}>
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={page}
              initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <CaseCard c={displayCards[0]!} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows + Dots */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-all hover:bg-accent hover:text-white hover:border-accent"
            aria-label="Previous case studies"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
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
            aria-label="Next case studies"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
