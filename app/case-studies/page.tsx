import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { sanityFetch } from "@/lib/sanity/client";
import { caseStudiesQuery } from "@/lib/sanity/queries";
import {
  fallbackCaseStudies,
  type FallbackCaseStudy,
} from "@/lib/data/casestudy-fallback";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Optimax Studio",
  description:
    "See how we have helped businesses across industries achieve measurable growth with digital solutions.",
};

interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string } | string;
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  image?: string;
}

function normalizeSlug(slug: { current: string } | string): string {
  return typeof slug === "string" ? slug : slug.current;
}

export default async function CaseStudiesPage() {
  const sanityData = await sanityFetch<CaseStudy[]>(caseStudiesQuery);
  const cases: CaseStudy[] = sanityData || (fallbackCaseStudies as CaseStudy[]);

  return (
    <>
      <PageHero
        label="Results"
        title="Case Studies That Speak for Themselves"
        subtitle="Real numbers, real businesses, real impact. See how Optimax delivers measurable growth."
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <FadeIn key={c._id} delay={i * 0.1}>
                <Link
                  href={`/case-studies/${normalizeSlug(c.slug)}`}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-navy-800/40 p-7 backdrop-blur-sm transition-all hover:border-accent/20 hover:bg-navy-800/60 hover:-translate-y-1.5 h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {c.industry}
                    </span>
                    <TrendingUp className="h-5 w-5 text-accent/50" />
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl font-bold text-accent font-display">
                      {c.result}
                    </div>
                    <div className="text-sm text-muted">{c.metric}</div>
                  </div>

                  <h3 className="text-xl font-semibold text-text font-display mb-2">
                    {c.client}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {c.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Read Case Study
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
