"use client";

import { useLayoutEffect, useEffect, useRef, useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Monitor,
  TrendingUp,
  Share2,
  Database,
  Search,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** px of extra scroll allocated to each card reveal step */
const STEP = 450;

const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description:
      "Custom, high-performance websites that convert visitors into customers. We build fast, responsive, search-engine-optimized experiences.",
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
    image: "/images/services/web-design.png",
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
    image: "/images/services/digital-marketing.png",
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
    image: "/images/services/social-media.png",
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
    image: "/images/services/crm-portals.png",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Technical and content search engine optimization that ranks you above the competition and drives organic revenue.",
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
    image: "/images/services/seo.png",
  },
];

export const ServicesStrip = memo(function ServicesStrip() {
  const pinRef   = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const initedRef = useRef(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useIsomorphicLayoutEffect(() => {
    // Mobile: skip GSAP, CSS shows normal list
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const pin = pinRef.current;
    const stack = stackRef.current;
    if (!pin || !stack || initedRef.current) return;
    initedRef.current = true;

    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLElement>(".stack-reveal-card", stack);
    if (cards.length < 2) return;

    const ctx = gsap.context(() => {
      // Sync GSAP state with CSS initial state (non-first cards off-screen)
      gsap.set(cards.slice(1), { y: "100%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          pin: true,
          anticipatePin: 1,
          start: "top top+=80",
          end: `+=${(cards.length - 1) * STEP}`,
          scrub: 0.5,
        },
      });

      for (let i = 1; i < cards.length; i++) {
        const pos = i - 1;
        tl.to(cards[i], { y: 0, ease: "power2.out", duration: 1 }, pos);
        for (let j = 0; j < i; j++) {
          const depth = i - j;
          const scale = 1 - depth * 0.04;
          tl.to(cards[j], { scale, ease: "none", duration: 1 }, pos);
        }
      }
    }, pin);

    return () => {
      initedRef.current = false;
      ctx.revert();
    };
  }, []);

  /* ── Mobile carousel ── */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const dragStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
    setDragX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartX.current;
    setDragX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragX) > 50) {
      if (dragX > 0 && mobileIndex > 0) {
        setMobileIndex(mobileIndex - 1);
      } else if (dragX < 0 && mobileIndex < services.length - 1) {
        setMobileIndex(mobileIndex + 1);
      }
    }
    setDragX(0);
  };

  const goMobilePrev = useCallback(() => {
    setMobileIndex((i) => Math.max(0, i - 1));
  }, []);

  const goMobileNext = useCallback(() => {
    setMobileIndex((i) => Math.min(services.length - 1, i + 1));
  }, []);

  return (
    <section className="relative py-[64px] lg:py-[120px] px-4">
      <div ref={pinRef} className="mx-auto max-w-5xl py-10 lg:py-16">
        <SectionHeading
          label="What We Do"
          title={<>Services Built for <em className="italic text-accent">Growth</em></>}
          description="We don't just build — we engineer revenue machines tailored to your industry."
        />

        {/* Desktop — untouched */}
        <div className="hidden md:block">
          <div
            ref={stackRef}
            className="services-stack-grid"
            style={
              isDesktop
                ? { display: "grid", gridTemplateColumns: "1fr", overflow: "hidden" }
                : undefined
            }
          >
            {services.map((service, i) => (
              <div
                key={service.title}
                className="stack-reveal-card rounded-3xl bg-white border border-border shadow-card overflow-hidden"
                style={{
                  zIndex: i + 1,
                  ...(isDesktop
                    ? {
                        gridArea: "1 / 1",
                        transformOrigin: "top center",
                        transform: i === 0 ? undefined : "translateY(100%)",
                      }
                    : {}),
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px]">

                  {/* ── Left: text ── */}
                  <div
                    className={`flex flex-col justify-center px-8 py-10 lg:px-12 ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-accent shrink-0"
                        style={{ background: service.color }}
                      >
                        <service.icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-muted">
                        0{i + 1}
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
                      className="self-start inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all group"
                      style={{ background: "#1a4a3a" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#16402f")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#1a4a3a")}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* ── Right: visual panel ── */}
                  <div
                    className={`relative flex items-center justify-center min-h-[260px] lg:min-h-0 overflow-hidden ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                    style={{ background: service.color }}
                  >
                    {"image" in service && service.image ? (
                      <Image
                        src={service.image as string}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <service.icon className="h-36 w-36 text-accent/15" strokeWidth={1} />
                    )}

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
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mt-8">
          {/* Counter */}
          <div className="flex justify-end mb-2">
            <span className="text-sm font-medium text-muted">
              {mobileIndex + 1} / {services.length}
            </span>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === mobileIndex ? "w-6 bg-accent" : "w-2 bg-border"
                }`}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>

          {/* Track */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex ${isDragging ? "" : "transition-transform duration-500 ease-out"}`}
              style={{
                transform: `translateX(calc(-${mobileIndex * 100}% + ${dragX}px))`,
              }}
            >
              {services.map((service, i) => (
                <div key={service.title} className="w-full flex-shrink-0 px-3 overflow-hidden">
                  <div className="rounded-2xl bg-white border border-border shadow-card overflow-hidden transform scale-[0.92] hover:scale-100 hover:rotate-[2deg] transition-transform duration-300">
                    {/* Top image area */}
                    <div className="relative h-[280px] overflow-hidden" style={{ background: service.color }}>
                      {"image" in service && service.image ? (
                        <Image
                          src={service.image as string}
                          alt={service.title}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <service.icon className="h-24 w-24 text-accent/15" strokeWidth={1} />
                        </div>
                      )}
                      {/* Number badge */}
                      <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-muted">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      {/* Stat pill */}
                      <div className="absolute bottom-3 right-3 rounded-xl bg-white border border-border shadow-card px-4 py-2.5">
                        <div className="text-xl font-bold text-accent font-display leading-none">
                          {service.stat}
                        </div>
                        <div className="text-[10px] text-muted mt-0.5">{service.statLabel}</div>
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="p-4">
                      <h3 className="text-base font-bold text-text font-display mb-1.5 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Bottom button bar */}
                    <Link
                      href={service.href}
                      className="flex items-center justify-between w-full px-5 py-3.5 text-sm font-semibold text-white transition-all group"
                      style={{ background: "#1a4a3a" }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goMobilePrev}
              disabled={mobileIndex === 0}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-all hover:bg-accent hover:text-white hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goMobileNext}
              disabled={mobileIndex === services.length - 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition-all hover:bg-accent hover:text-white hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next service"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
