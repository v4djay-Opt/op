"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Director, EduPro Academy",
    quote:
      "Optimax transformed our entire digital strategy. The CRM they built is intuitive and our lead pipeline has never been healthier.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, FitLife Gym",
    quote:
      "From concept to launch in under 8 weeks. The team understood our fitness business better than we did. Incredible ROI.",
    rating: 5,
  },
  {
    name: "Amit Khanna",
    role: "CEO, Prime Realty",
    quote:
      "Our agents now close deals 2.5x faster. The real estate CRM Optimax built is the best investment we've made.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Co-founder, StyleStreet Boutique",
    quote:
      "Our online sales jumped 180% after the website redesign. The checkout flow they built is seamless and customers love it.",
    rating: 5,
  },
  {
    name: "Dr. Vikram Joshi",
    role: "Medical Director, Healing Touch Hospital",
    quote:
      "The HMS streamlined our patient bookings and billing. Staff training took one day. That is how intuitive the system is.",
    rating: 5,
  },
];

function TestimonialCard({
  t,
  isActive,
}: {
  t: (typeof testimonials)[0];
  isActive: boolean;
}) {
  return (
    <div
      className={`h-full rounded-3xl bg-white border border-border p-8 lg:p-10 shadow-card transition-all duration-500 ${
        isActive
          ? "opacity-100 scale-100"
          : "opacity-40 scale-95"
      }`}
    >
      <div className="flex justify-center gap-1 mb-6">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} className="h-5 w-5 fill-highlight text-highlight" />
        ))}
      </div>
      <p className="text-lg lg:text-xl text-text leading-relaxed font-medium text-center">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent font-bold text-sm font-display">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="text-sm font-semibold text-text">{t.name}</div>
        <div className="text-xs text-muted">{t.role}</div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative py-20 lg:py-28 px-4 bg-surface-alt overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Testimonials"
          title={<>What Our Clients <em className="italic text-accent">Say</em></>}
        />

        {/* Desktop: half-full-half carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(calc(25% - ${activeIndex * 50}%))`,
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-1/2 flex-shrink-0 px-3">
                  <TestimonialCard t={t} isActive={i === activeIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white border border-border shadow-sm text-text transition-all hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white border border-border shadow-sm text-text transition-all hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile: single card snap scroll */}
        <div className="md:hidden relative">
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {testimonials.map((t, i) => (
                <div key={i} className="w-[85vw] snap-center flex-shrink-0">
                  <TestimonialCard t={t} isActive={i === activeIndex} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === activeIndex ? "bg-accent w-8" : "bg-border hover:bg-muted w-2.5"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
