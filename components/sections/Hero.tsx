"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20">
      {/* Background: light cream with subtle gradient */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #F5F2EC 0%, #EDEFE8 40%, #F0F4EE 70%, #F5F2EC 100%)" }} />

      {/* Organic blob — top-right corner */}
      <div
        className="blob-1 absolute -top-[15%] -right-[15%] h-[420px] w-[420px] animate-mesh"
        style={{ background: "rgba(168, 197, 176, 0.30)" }}
      />

      {/* Organic blob — bottom-left corner */}
      <div
        className="blob-2 absolute -bottom-[10%] -left-[10%] h-[420px] w-[420px] animate-mesh"
        style={{ background: "rgba(181, 207, 168, 0.28)", animationDelay: "4s" }}
      />

      {/* Organic blob — desktop only, mid-left */}
      <div
        className="blob-3 absolute top-[55%] -left-[4%] h-[320px] w-[480px] animate-mesh max-md:hidden"
        style={{ background: "rgba(200, 218, 184, 0.24)", animationDelay: "8s" }}
      />

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase text-accent"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Digital Agency Since 2019
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-bold text-text leading-[1.1] text-[32px] md:text-[56px] lg:text-[64px]"
        >
          We Build Digital Machines That{" "}
          <em className="text-accent" style={{ fontStyle: "italic" }}>
            Generate Revenue
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-6 text-base md:text-lg text-text-secondary max-w-xl leading-relaxed"
        >
          From stunning websites to powerful CRMs — we deliver results
          that transform your business into a revenue engine.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5"
          >
            Start a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-accent/30 bg-white/70 px-7 py-3.5 text-sm font-medium text-accent backdrop-blur-sm transition-all hover:bg-white hover:border-accent"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted/40 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
