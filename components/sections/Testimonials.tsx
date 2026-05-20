"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
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
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white font-bold text-xs font-display shrink-0">
      {initials}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="h-full rounded-2xl bg-accent-light/40 border border-border p-6 lg:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
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

      <p className="text-base text-text leading-relaxed mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-border/60">
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
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 5);

  return (
    <section className="py-12 lg:py-20 px-4 bg-surface-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="TESTIMONIALS"
          title={<>What Our Clients <em className="italic text-accent">Say</em></>}
        />

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {topRow.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <TestimonialCard t={t} />
            </FadeIn>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6 max-w-3xl mx-auto">
          {bottomRow.map((t, i) => (
            <FadeIn key={t.name} delay={(i + 3) * 0.08}>
              <TestimonialCard t={t} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
