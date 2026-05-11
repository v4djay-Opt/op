import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
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
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <Link
                key={c._id}
                href={`/case-studies/${normalizeSlug(c.slug)}`}
                className="group flex flex-col rounded-2xl bg-white border border-border shadow-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Image area with industry badge */}
                <div className="relative aspect-[16/10] bg-surface-alt overflow-hidden">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.client}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-4xl font-bold text-accent/20 font-display">
                        {c.client.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-accent border border-border">
                      {c.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Big result */}
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-accent font-display leading-none">
                      {c.result}
                    </div>
                    <div className="text-xs text-muted mt-1">{c.metric}</div>
                  </div>

                  {/* Client name */}
                  <h3 className="text-lg font-semibold text-text font-display mb-2 leading-snug group-hover:text-accent transition-colors">
                    {c.client}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {c.description}
                  </p>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Read Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
