"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Director",
    company: "EduPro Academy",
    quote:
      "Optimax transformed our entire digital strategy. The CRM they built is intuitive and our lead pipeline has never been healthier.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder",
    company: "FitLife Gym",
    quote:
      "From concept to launch in under 8 weeks. The team understood our fitness business better than we did. Incredible ROI.",
    rating: 5,
  },
  {
    name: "Amit Khanna",
    role: "CEO",
    company: "Prime Realty",
    quote:
      "Our agents now close deals 2.5x faster. The real estate CRM Optimax built is the best investment we've made.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Co-founder",
    company: "StyleStreet Boutique",
    quote:
      "Our online sales jumped 180% after the website redesign. The checkout flow they built is seamless and customers love it.",
    rating: 5,
  },
  {
    name: "Dr. Vikram Joshi",
    role: "Medical Director",
    company: "Healing Touch Hospital",
    quote:
      "The HMS streamlined our patient bookings and billing. Staff training took one day. That is how intuitive the system is.",
    rating: 5,
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold text-xs font-display shrink-0">
      {initials}
    </div>
  );
}

function TestimonialCard({
  t,
  isActive,
}: {
  t: (typeof testimonials)[0];
  isActive: boolean;
}) {
  return (
    <div
      className={`h-full flex flex-col rounded-2xl border transition-all duration-500 ${
        isActive
          ? "bg-white border-border shadow-card-hover scale-100 opacity-100 p-6 lg:p-10 min-h-[280px] lg:min-h-[300px]"
          : "bg-accent-light/30 border-border/50 shadow-sm scale-[0.96] opacity-70 p-6 lg:p-7 min-h-[240px] lg:min-h-[260px]"
      }`}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star
            key={j}
            className={`h-4 w-4 ${
              j < t.rating
                ? "fill-accent text-accent"
                : "fill-border text-border"
            }`}
          />
        ))}
      </div>

      <p className="flex-1 text-sm lg:text-base text-text leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border/40">
        <Avatar name={t.name} />
        <div>
          <div className="text-sm font-semibold text-text">{t.name}</div>
          <div className="text-xs text-muted">
            {t.role}, {t.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [centerIndex, setCenterIndex] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;
  const centerIndexRef = useRef(centerIndex);
  centerIndexRef.current = centerIndex;

  const goNext = useCallback(() => {
    setDirection(1);
    setCenterIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCenterIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    const current = centerIndexRef.current;
    const forward = (index - current + total) % total;
    const backward = (current - index + total) % total;
    setDirection(forward <= backward ? 1 : -1);
    setCenterIndex(index);
  }, [total]);

  /* Auto-slide */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCenterIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const leftIndex = (centerIndex - 1 + total) % total;
  const rightIndex = (centerIndex + 1) % total;

  return (
    <section
      className="py-12 lg:py-20 px-4 bg-surface-alt"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="TESTIMONIALS"
          title={<>What Our Clients <em className="italic text-accent">Say</em></>}
        />

        {/* Desktop: center card slides, sides static */}
        <div className="hidden md:flex items-start justify-center gap-5 lg:gap-6">
          {/* Left — static */}
          <div className="flex-1 min-w-0">
            <TestimonialCard t={testimonials[leftIndex]} isActive={false} />
          </div>

          {/* Center — slides in/out */}
          <div className="flex-1 min-w-0 relative overflow-hidden" style={{ minHeight: '300px' }}>
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={centerIndex}
                initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <TestimonialCard t={testimonials[centerIndex]} isActive={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — static */}
          <div className="flex-1 min-w-0">
            <TestimonialCard t={testimonials[rightIndex]} isActive={false} />
          </div>
        </div>

        {/* Mobile: single card slides */}
        <div className="md:hidden relative overflow-hidden" style={{ minHeight: '280px' }}>
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={centerIndex}
              initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <TestimonialCard t={testimonials[centerIndex]} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows + Dots */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-all hover:bg-accent hover:text-white hover:border-accent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === centerIndex
                    ? "w-6 bg-accent"
                    : "w-2 bg-border hover:bg-muted"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-all hover:bg-accent hover:text-white hover:border-accent"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
