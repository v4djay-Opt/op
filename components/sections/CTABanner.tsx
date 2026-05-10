"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 px-4 overflow-hidden">
      {/* Nature gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-nature-field/20 to-background" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-muted/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-display leading-tight">
            Ready to Grow Your <em className="italic text-accent">Business</em>?
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We&rsquo;ll audit your digital presence
            and show you exactly where the revenue leaks are.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Free 30-Min Strategy Call
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-medium text-text hover:border-accent hover:shadow-sm transition-all"
            >
              View Our Work
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
