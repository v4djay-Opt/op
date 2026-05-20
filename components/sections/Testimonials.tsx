"use client";

import { useState, useEffect, useCallback } from "react";
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
      className={`h-full rounded-2xl border p-6 lg:p-8 transition-all duration-500 ${
        isActive
          ? "bg-white border-border shadow-card-hover scale-100 opacity-100"
          : "bg-accent-light/30 border-border/50 shadow-sm scale-[0.96] opacity-70"
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

      <p className="text-sm lg:text-base text-text leading-relaxed mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-border/40">
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
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const getIndex = useCallback(
    (offset: number) => {
      return (centerIndex + offset + total) % total;
    },
    [centerIndex, total]
  );

  const goNext = useCallback(() => {
    setCenterIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  /* Auto-slide */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const leftIndex = getIndex(-1);
  const rightIndex = getIndex(1);

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

        {/* Slider track — desktop: 3 cards */}
        <div className="hidden md:flex items-center justify-center gap-5 lg:gap-6">
          {/* Left card */}
          <div className="flex-1 min-w-0">
            <TestimonialCard t={testimonials[leftIndex]} isActive={false} />
          </div>

          {/* Center (active) card */}
          <div className="flex-1 min-w-0">
            <TestimonialCard
              t={testimonials[centerIndex]}
              isActive={true}
            />
          </div>

          {/* Right card */}
          <div className="flex-1 min-w-0">
            <TestimonialCard t={testimonials[rightIndex]} isActive={false} />
          </div>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <TestimonialCard
            t={testimonials[centerIndex]}
            isActive={true}
          />
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
                onClick={() => setCenterIndex(i)}
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
