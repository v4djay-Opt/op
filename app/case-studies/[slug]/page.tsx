import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/lib/sanity/client";
import {
  caseStudyBySlugQuery,
  caseStudySlugsQuery,
} from "@/lib/sanity/queries";
import {
  getFallbackCaseStudyBySlug,
  getAllFallbackCaseStudySlugs,
  fallbackCaseStudies,
  type FallbackCaseStudy,
} from "@/lib/data/casestudy-fallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FadeIn } from "@/components/ui/FadeIn";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string } | string;
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  challenge?: unknown[];
  approach?: unknown[];
  outcome?: unknown[];
  image?: string;
}

function normalizeSlug(slug: { current: string } | string): string {
  return typeof slug === "string" ? slug : slug.current;
}

export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<string[]>(caseStudySlugsQuery);
  const slugs = sanitySlugs || getAllFallbackCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs =
    (await sanityFetch<CaseStudy>(caseStudyBySlugQuery, { slug })) ||
    getFallbackCaseStudyBySlug(slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.client}: ${cs.result} ${cs.metric} — Optimax Studio`,
    description: cs.description,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs =
    (await sanityFetch<CaseStudy>(caseStudyBySlugQuery, { slug })) ||
    getFallbackCaseStudyBySlug(slug);
  if (!cs) notFound();

  const related =
    fallbackCaseStudies.filter((c) => c.slug.current !== slug).slice(0, 2) || [];

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.15),transparent_50%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Case Studies", href: "/case-studies" },
                { label: cs.client },
              ]}
            />
          </FadeIn>
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-4">
              {cs.industry}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-text font-display leading-tight">
              {cs.client}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-accent font-display">
                {cs.result}
              </span>
              <span className="text-lg text-muted">{cs.metric}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-12">
              {cs.description}
            </p>
          </FadeIn>

          {cs.challenge && (
            <FadeIn className="mb-12">
              <h2 className="text-2xl font-bold text-text font-display mb-4">
                The Challenge
              </h2>
              <div className="prose prose-invert max-w-none prose-p:text-muted">
                <PortableText value={cs.challenge as never} />
              </div>
            </FadeIn>
          )}

          {cs.approach && (
            <FadeIn className="mb-12">
              <h2 className="text-2xl font-bold text-text font-display mb-4">
                Our Approach
              </h2>
              <div className="prose prose-invert max-w-none prose-p:text-muted">
                <PortableText value={cs.approach as never} />
              </div>
            </FadeIn>
          )}

          {cs.outcome && (
            <FadeIn className="mb-12">
              <h2 className="text-2xl font-bold text-text font-display mb-4">
                The Outcome
              </h2>
              <div className="prose prose-invert max-w-none prose-p:text-muted">
                <PortableText value={cs.outcome as never} />
              </div>
            </FadeIn>
          )}

          {related.length > 0 && (
            <FadeIn className="mt-16">
              <h2 className="text-2xl font-bold text-text font-display mb-6">
                More Case Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r._id}
                    href={`/case-studies/${normalizeSlug(r.slug)}`}
                    className="group flex flex-col rounded-xl border border-white/5 bg-navy-800/40 p-5 transition-all hover:border-accent/20 hover:bg-navy-800/60"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-accent font-display">
                        {r.result}
                      </span>
                      <span className="text-sm text-muted">{r.metric}</span>
                    </div>
                    <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                      {r.client}
                    </h3>
                    <p className="text-sm text-muted mt-1">{r.description}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Read
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}

          <BottomCTA
            title={`Want similar results for your ${cs.industry.toLowerCase()} business?`}
            subtitle="Book a free strategy call and let us show you exactly how we can help."
          />
        </div>
      </section>
    </>
  );
}
