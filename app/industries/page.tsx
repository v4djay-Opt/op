import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { industries } from "@/lib/data/industries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries — Optimax Studio",
  description:
    "We specialize in digital solutions for Real Estate, Education, Healthcare, Fitness, Interior Design, Retail, and Corporate sectors.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Solutions Tailored to Your Industry"
        subtitle="Deep domain expertise across 7 sectors. We understand your challenges and build solutions that solve them."
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <FadeIn key={industry.slug} delay={i * 0.08}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-navy-800/40 p-7 backdrop-blur-sm transition-all hover:border-accent/20 hover:bg-navy-800/60 hover:-translate-y-1.5 h-full"
                >
                  <h3 className="text-xl font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {industry.tagline}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Explore Solutions
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
