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
  image?: string;
}

function CaseCard({ c, index }: { c: CaseStudyCard; index: number }) {
  return (
    <Link
      href={c.href}
      className="group flex flex-col rounded-2xl bg-white border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 h-full"
    >
      {/* Image area */}
      <div className="relative h-52 w-full overflow-hidden shrink-0 bg-gradient-to-br from-accent/10 to-accent/5">
        {c.image ? (
          <img
            src={c.image}
            alt={c.client}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <TrendingUp className="h-16 w-16 text-accent/15" />
          </div>
        )}
        {/* Number badge top-left */}
        <span className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-accent shadow-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
        {/* Result stat bottom-right */}
        <div className="absolute bottom-3 right-3 rounded-xl bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md text-right">
          <div className="text-lg font-extrabold text-accent font-display leading-none">
            {c.result}<span className="text-sm font-semibold">+</span>
          </div>
          <div className="text-[10px] text-muted leading-tight mt-0.5">{c.metric}</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-0">
        <h3 className="text-base font-bold text-text font-display mb-2 group-hover:text-accent transition-colors">
          {c.client}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
          {c.description}
        </p>
        {/* Industry as checklist item */}
        <div className="flex items-center gap-2 text-sm text-muted mb-1">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-accent text-accent text-[10px]">✓</span>
          {c.industry} Industry
        </div>
        <div className="flex items-center gap-2 text-sm text-muted mb-1">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-accent text-accent text-[10px]">✓</span>
          {c.result} {c.metric}
        </div>
      </div>

      {/* Full-width dark green button */}
      <div className="mt-5 flex items-center justify-between bg-accent px-5 py-4 transition-all group-hover:bg-accent-hover">
        <span className="text-sm font-bold text-white">Read Case Study</span>
        <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
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
    total < CARDS_PER_PAGE
      ? visible
      : visible.length < CARDS_PER_PAGE
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
        <div className="hidden md:block relative overflow-hidden" style={{ minHeight: '520px' }}>
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
                <CaseCard key={`${c.client}-${i}`} c={c} index={page + i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: 1 card sliding */}
        <div className="md:hidden relative overflow-hidden" style={{ minHeight: '500px' }}>
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={page}
              initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <CaseCard c={displayCards[0]!} index={page} />
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
