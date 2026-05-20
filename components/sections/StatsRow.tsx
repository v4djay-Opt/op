"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "250+", label: "Projects Delivered" },
  { value: "8", label: "Industries Served" },
  { value: "3X", label: "Avg Revenue Growth" },
];

export function StatsRow() {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl border border-border bg-white overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex flex-col items-center justify-center py-8 md:py-10 px-4"
            >
              {/* Divider — vertical on desktop, horizontal on mobile */}
              {i > 0 && (
                <>
                  <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-px bg-border" />
                  {i % 2 === 0 && (
                    <div className="lg:hidden absolute left-0 top-0 bottom-0 w-px bg-border" />
                  )}
                </>
              )}
              {i < 2 && (
                <div className="lg:hidden absolute left-4 right-4 bottom-0 h-px bg-border" />
              )}

              <span className="text-[32px] md:text-[40px] font-bold font-display text-accent leading-none">
                {stat.value}
              </span>
              <span className="mt-2 text-xs md:text-sm font-medium text-muted text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
