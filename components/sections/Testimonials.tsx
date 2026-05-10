"use client";

import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
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
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative py-20 lg:py-28 px-4 bg-surface-alt">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Testimonials"
          title={<>What Our Clients <em className="italic text-accent">Say</em></>}
        />

        <FadeIn>
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-white border border-border p-10 shadow-card"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <p className="text-xl lg:text-2xl text-text leading-relaxed font-medium text-center">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </p>
                <div className="mt-8 flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent font-bold text-sm font-display">
                    {testimonials[activeIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-sm font-semibold text-text">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-xs text-muted">{testimonials[activeIndex].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === activeIndex ? "bg-accent w-8" : "bg-border hover:bg-muted"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
