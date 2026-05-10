"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20">

      {/* ── Background: layered sage gradient ── */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #DCE9D5 0%, #E8F0E4 35%, #F0F4EE 70%, #F5F7F0 100%)" }} />

      {/* Organic blob — top-left */}
      <div
        className="blob-1 absolute -top-24 -left-24 h-[520px] w-[520px] animate-mesh"
        style={{ background: "rgba(168, 197, 176, 0.35)" }}
      />

      {/* Organic blob — top-right */}
      <div
        className="blob-2 absolute -top-16 -right-20 h-[400px] w-[400px] animate-mesh"
        style={{ background: "rgba(181, 207, 168, 0.25)", animationDelay: "4s" }}
      />

      {/* Organic blob — bottom-center */}
      <div
        className="blob-3 absolute -bottom-32 left-1/2 -translate-x-1/2 h-[350px] w-[600px] animate-mesh"
        style={{ background: "rgba(200, 218, 184, 0.3)", animationDelay: "8s" }}
      />

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

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

        {/* Heading — Playfair Display */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-bold text-text leading-[1.12]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.25rem)" }}
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
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Free 30-Min Strategy Call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/70 px-7 py-3.5 text-sm font-medium text-accent backdrop-blur-sm transition-all hover:bg-white hover:border-accent"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>

      {/* ── Floating stat card — LEFT ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute left-[4%] top-[38%] hidden xl:block animate-float"
      >
        <div className="w-52 rounded-2xl bg-white border border-border shadow-card p-5">
          <div className="text-4xl font-bold text-accent font-display leading-none">50+</div>
          <div className="mt-1 text-sm font-medium text-text">Projects Delivered</div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-accent-light overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="mt-1 text-xs text-muted">78% growth YoY</div>
        </div>
      </motion.div>

      {/* ── Floating stat card — RIGHT ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute right-[4%] top-[33%] hidden xl:block animate-float-delayed"
      >
        <div className="w-52 rounded-2xl bg-white border border-border shadow-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
              <span className="text-base font-bold text-accent font-display">7</span>
            </div>
            <span className="text-sm font-medium text-text leading-tight">Industries Served</span>
          </div>
          <div className="text-xs text-text-secondary">Since 2019, across Real Estate, Healthcare, Education &amp; more</div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
