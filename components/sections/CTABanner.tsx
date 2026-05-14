"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTABanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-[64px] lg:py-[120px] px-4 overflow-hidden">
      {/* Dark green background */}
      <div className="absolute inset-0 bg-[#1a3c2e]" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/95 font-display leading-tight">
            Ready to Grow Your <em className="italic text-white/80">Business</em>?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We&rsquo;ll audit your digital presence
            and show you exactly where the revenue leaks are.
          </p>

          {/* Email input + CTA */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <div className="relative w-full sm:w-auto flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-white/40 focus:ring-2 focus:ring-white/10"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1a3c2e] transition-all hover:bg-white/90 hover:shadow-lg whitespace-nowrap"
            >
              {submitted ? "Subscribed!" : "Get Started"}
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Or book a free strategy call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
