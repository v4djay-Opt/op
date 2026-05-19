"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2, LayoutGrid, TrendingUp } from "lucide-react";


const stats = [
  {
    value: "7+",
    label: "Years of Experience",
    sub: "Building digital products since 2017",
    icon: Clock,
    accent: "#1a4a3a",
    light: "#e6f0eb",
  },
  {
    value: "250+",
    label: "Projects Delivered",
    sub: "Across startups, SMBs & enterprises",
    icon: CheckCircle2,
    accent: "#2d6a4f",
    light: "#e8f4ee",
  },
  {
    value: "8",
    label: "Industries Served",
    sub: "From healthcare to real estate",
    icon: LayoutGrid,
    accent: "#c9a84c",
    light: "#faf3e0",
  },
  {
    value: "3x",
    label: "Avg Revenue Growth",
    sub: "Measured across client portfolios",
    icon: TrendingUp,
    accent: "#1a4a3a",
    light: "#e6f0eb",
  },
];

export function StatsRow() {
  return (
    <section className="py-20 px-4 bg-[#f8faf8]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-white border border-border p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: stat.accent }}
                />

                {/* Icon badge */}
                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: stat.light }}
                >
                  <Icon className="h-5 w-5" style={{ color: stat.accent }} />
                </div>

                {/* Value */}
                <motion.span
                  className="text-5xl font-black font-display leading-none"
                  style={{ color: stat.accent }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.12 + 0.2, stiffness: 180 }}
                >
                  {stat.value}
                </motion.span>

                {/* Label */}
                <p className="mt-2 text-base font-semibold text-text font-display leading-snug">
                  {stat.label}
                </p>

                {/* Sub */}
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  {stat.sub}
                </p>

                {/* Corner decoration */}
                <div
                  className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-full opacity-[0.07]"
                  style={{ background: stat.accent }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
