"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface BottomCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
}

export function BottomCTA({
  title = "Ready to Get Started?",
  subtitle = "Book a free 30-minute strategy call and let us show you what is possible.",
  buttonText = "Book Free Call",
  href = "/contact",
}: BottomCTAProps) {
  return (
    <FadeIn className="text-center py-16">
      <h3 className="text-2xl md:text-3xl font-bold text-text font-display mb-3">
        {title}
      </h3>
      <p className="text-text-secondary max-w-xl mx-auto mb-6">{subtitle}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
      >
        {buttonText}
        <ArrowRight className="h-5 w-5" />
      </Link>
    </FadeIn>
  );
}
