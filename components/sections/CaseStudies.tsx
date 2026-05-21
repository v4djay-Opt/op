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

function CaseCard({ c }: { c: CaseStudyCard }) {
  return (
    <Link
      href={c.href}
      className="group flex flex-col rounded-2xl bg-white border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 h-full"
    >
      {/* Image */}
      {c.image ? (
        <div className="relative h-48 w-full overflow-hidden shrink-0">
          <img src={c.image} alt={c.client} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-accent">
            {c.industry}
          </span>
        </div>
      ) : (
        <div className="h-48 w-full shrink-0 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center relative">
          <TrendingUp className="h-10 w-10 text-accent/20" />
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-accent">
            {c.industry}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-extrabold text-accent font-display leading-none">{c.result}</span>
          <span className="text-sm text-muted">{c.metric}</span>
        </div>
        <h3 className="text-base font-semibold text-text font-display mb-1 group-hover:text-accent transition-colors">
          {c.client}
        </h3>
        <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-2">
          {c.description}
        </p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent/70 group-hover:text-accent group-hover:gap-2 transition-all">
          Read Case Study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
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
