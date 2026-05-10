"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "7", label: "Industries Served" },
  { value: "3x", label: "Avg Revenue Growth" },
];

export function StatsRow() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center px-6">
                <motion.span
                  className="text-4xl lg:text-5xl font-bold text-text font-display"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.1, stiffness: 200 }}
                >
                  {stat.value}
                </motion.span>
                <span className="mt-2 text-sm text-muted">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
