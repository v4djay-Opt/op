"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedNumber({
  target,
  suffix,
  duration = 1500,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(easeOutQuart(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "", label: "Industries Served" },
  { value: 3, suffix: "x", label: "Avg Revenue Growth" },
];

export function StatsRow() {
  return (
    <section className="py-[64px] lg:py-[120px] px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center px-6">
                <span className="text-4xl lg:text-5xl font-bold text-text font-display tabular-nums">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 text-sm text-muted">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
