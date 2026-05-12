"use client";

import { useLayoutEffect, useEffect, useRef, useState, memo } from "react";
import Link from "next/link";
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

  return (
    <section className="relative pt-20 lg:pt-28 pb-20 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="What We Do"
          title={<>Services Built for <em className="italic text-accent">Growth</em></>}
          description="We don't just build — we engineer revenue machines tailored to your industry."
        />

        <div ref={pinRef}>
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent group"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* ── Right: visual panel ── */}
                <div
                  className={`relative flex items-center justify-center min-h-[260px] lg:min-h-0 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                  style={{ background: service.color }}
                >
                  <service.icon className="h-36 w-36 text-accent/15" strokeWidth={1} />

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
      </div>
    </section>
  );
});
