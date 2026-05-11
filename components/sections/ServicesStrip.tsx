"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  Monitor,
  TrendingUp,
  Share2,
  Database,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description:
      "Custom, high-performance websites that convert visitors into customers. We build fast, responsive, SEO-optimized experiences.",
    bullets: [
      "Custom UI/UX design from scratch",
      "Next.js / React development",
      "Mobile-first responsive builds",
      "Performance & Core Web Vitals optimized",
    ],
    stat: "250+",
    statLabel: "Websites Delivered",
    href: "/services/web-design-development",
    color: "#D8E8D4",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that maximize ROI and drive qualified traffic. Every rupee spent is tracked and optimized.",
    bullets: [
      "Google & Meta Ads management",
      "Conversion rate optimization",
      "Analytics & performance tracking",
      "Retargeting funnels",
    ],
    stat: "3x",
    statLabel: "Avg ROI Growth",
    href: "/services/digital-marketing",
    color: "#E8F0D8",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content and community management that builds brand loyalty and drives engagement.",
    bullets: [
      "Content calendar & creation",
      "Community engagement",
      "Brand voice development",
      "Monthly performance reports",
    ],
    stat: "10K+",
    statLabel: "Followers Grown",
    href: "/services/social-media-management",
    color: "#D8E8E4",
  },
  {
    icon: Database,
    title: "CRM & Custom Portals",
    description:
      "Tailored CRM solutions that streamline operations and boost productivity for your specific industry.",
    bullets: [
      "Custom workflow automation",
      "Lead & pipeline tracking",
      "Third-party integrations",
      "Role-based access control",
    ],
    stat: "15+",
    statLabel: "Custom CRMs Built",
    href: "/services/crm-custom-portals",
    color: "#DDE8D8",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical and content SEO that ranks you above the competition and drives organic revenue.",
    bullets: [
      "Technical SEO audits",
      "Content strategy & creation",
      "Local SEO optimization",
      "Monthly ranking reports",
    ],
    stat: "90%",
    statLabel: "Keyword Rankings",
    href: "/services/seo",
    color: "#D8DDE8",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon;
  return (
    <div className="rounded-3xl bg-white border border-border shadow-card overflow-hidden h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] lg:min-h-[440px]">
        {/* Text panel */}
        <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-accent shrink-0"
              style={{ background: service.color }}
            >
              <Icon className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-muted">
              Service
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-text font-display mb-4 leading-snug">
            {service.title}
          </h3>
          <p className="text-text-secondary leading-relaxed mb-6 text-sm lg:text-base">
            {service.description}
          </p>

          <ul className="space-y-2.5 mb-8">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-text-secondary">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>

          <Link
            href={service.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent group w-fit"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Visual panel */}
        <div
          className="relative flex items-center justify-center min-h-[260px] lg:min-h-0"
          style={{ background: service.color }}
        >
          <Icon className="h-36 w-36 text-accent/15" strokeWidth={1} />

          <div className="absolute bottom-6 right-6 rounded-2xl bg-white border border-border shadow-card px-5 py-4">
            <div className="text-3xl font-bold text-accent font-display leading-none">
              {service.stat}
            </div>
            <div className="text-xs text-muted mt-1">{service.statLabel}</div>
          </div>

          <div className="absolute top-6 left-6 flex gap-1.5">
            {[0, 1, 2].map((d) => (
              <div key={d} className="h-2 w-2 rounded-full bg-accent/25" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => Math.min(services.length - 1, i + 1));
  }, []);

  return (
    <section className="relative pt-20 lg:pt-28 pb-20 px-4 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="What We Do"
          title={<>Services Built for <em className="italic text-accent">Growth</em></>}
          description="We don't just build — we engineer revenue machines tailored to your industry."
        />

        {/* Desktop: horizontal carousel with arrows */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ServiceCard service={services[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-label="Previous service"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-border shadow-sm text-text transition-all hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                disabled={activeIndex === services.length - 1}
                aria-label="Next service"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-border shadow-sm text-text transition-all hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Step counter */}
            <div className="flex items-center gap-3">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-8 bg-accent"
                      : "w-2.5 bg-border hover:bg-muted"
                  }`}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>

            <span className="text-sm font-medium text-muted font-display">
              {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="sm:hidden space-y-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
