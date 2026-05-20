"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTABanner() {
  return (
    <section className="relative py-12 lg:py-20 px-4 overflow-hidden">
      {/* Dark green background */}
      <div className="absolute inset-0 bg-[#1a3c2e]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text left */}
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-[28px] lg:text-[40px] font-bold text-white/95 font-display leading-tight">
                Ready to Grow Your Business?
              </h2>
              <p className="mt-3 text-base text-white/60 max-w-lg mx-auto lg:mx-0">
                Book a free strategy call. We&rsquo;ll audit your digital presence and show you exactly where the revenue leaks are.
              </p>
            </div>

            {/* Button right */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1a3c2e] transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
