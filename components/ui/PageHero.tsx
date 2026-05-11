"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function PageHero({ label, title, subtitle, centered = true }: PageHeroProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-nature-sky/30 to-background" />
      </div>
      <div className={`relative z-10 mx-auto max-w-4xl ${centered ? "text-center" : ""}`}>
        {label && (
          <motion.span
            initial={isClient ? { opacity: 0, y: 10 } : false}
            animate={isClient ? { opacity: 1, y: 0 } : false}
            className="inline-block text-sm font-semibold uppercase tracking-wider text-accent font-display mb-4"
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          initial={isClient ? { opacity: 0, y: 20 } : false}
          animate={isClient ? { opacity: 1, y: 0 } : false}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-text font-display leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={isClient ? { opacity: 0, y: 20 } : false}
            animate={isClient ? { opacity: 1, y: 0 } : false}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
