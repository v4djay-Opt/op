"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  subtitleClassName?: string;
  centered?: boolean;
  green?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ label, title, subtitle, subtitleClassName, centered = true, green, breadcrumbs }: PageHeroProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  return (
    <>
    <section
      className={`relative min-h-[520px] flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden`}
      style={green ? { background: "#1a4a3a" } : undefined}
    >
      {green ? (
        <>
          <div
            className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />
          <div
            className="absolute -bottom-16 -right-16 h-[350px] w-[350px] rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.03)" }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-nature-sky/30 to-background" />
        </div>
      )}
      <div className={`relative z-10 mx-auto max-w-4xl ${centered ? "text-center" : ""}`}>
        {label && (
          <motion.span
            initial={isClient ? { opacity: 0, y: 10 } : false}
            animate={isClient ? { opacity: 1, y: 0 } : false}
            className={`inline-block text-sm font-semibold uppercase tracking-wider font-display mb-4 ${green ? "text-accent-light" : "text-accent"}`}
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          initial={isClient ? { opacity: 0, y: 20 } : false}
          animate={isClient ? { opacity: 1, y: 0 } : false}
          transition={{ delay: 0.1 }}
          className={`text-[clamp(2rem,4.5vw,3.2rem)] font-bold font-display leading-[1.15] ${green ? "text-white" : "text-text"}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={isClient ? { opacity: 0, y: 20 } : false}
            animate={isClient ? { opacity: 1, y: 0 } : false}
            transition={{ delay: 0.2 }}
            className={
              subtitleClassName ??
              `mt-4 text-base font-normal max-w-[580px] mx-auto leading-relaxed ${green ? "text-white/75" : "text-muted"}`
            }
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
    {breadcrumbs && (
      <div className="border-b border-border bg-[#235142] px-4 py-3">
        <div className="mx-auto w-full max-w-6xl">
          <Breadcrumbs light className="!mb-0" items={breadcrumbs} />
        </div>
      </div>
    )}
    </>
  );
}
