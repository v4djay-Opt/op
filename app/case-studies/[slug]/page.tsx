import type { Metadata } from "next";
import Image from "next/image";
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

const SITE_URL = "https://optimaxstudio.com";

interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string } | string;
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  publishedAt: string;
  heroMetrics?: { value: string; label: string }[];
  challenge?: unknown[];
  approach?: unknown[];
  outcome?: unknown[];
  image?: string;
  approachSteps?: { title: string; description: string }[];
  results?: { value: string; label: string; description: string }[];
  testimonial?: { quote: string; name: string; role: string; company: string };
}

function normalizeSlug(slug: { current: string } | string): string {
  return typeof slug === "string" ? slug : slug.current;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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

  const title = `${cs.client} Case Study — ${cs.result} ${cs.metric} | Optimax Studio`;
  const description = `See how Optimax Studio helped ${cs.client} achieve ${cs.result} ${cs.metric}. ${cs.description.slice(0, 90)}`;
  const canonical = `${SITE_URL}/case-studies/${normalizeSlug(cs.slug)}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${cs.client} Case Study | Optimax Studio`,
      description,
      url: canonical,
      type: "article",
      images: [{ url: `${SITE_URL}/og/${normalizeSlug(cs.slug)}.jpg` }],
    },
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

  const canonicalUrl = `${SITE_URL}/case-studies/${normalizeSlug(cs.slug)}`;
  const datePublished = cs.publishedAt ? cs.publishedAt.split("T")[0] : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${cs.client} Case Study — ${cs.result} ${cs.metric}`,
        author: { "@type": "Organization", name: "Optimax Studio" },
        publisher: {
          "@type": "Organization",
          name: "Optimax Studio",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        datePublished,
        dateModified: datePublished,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: `${SITE_URL}/case-studies`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: cs.client,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
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
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {cs.industry}
              </span>
              <span className="text-xs text-muted">
                Published: {formatDate(cs.publishedAt)}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-text font-display leading-tight">
              {cs.client} Case Study — {cs.result} {cs.metric} in{" "}
              {cs.heroMetrics?.[0]?.value || ""}
            </h1>

            {/* Metric row — main + 2 extra */}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-xl font-bold text-accent font-display">
                  {cs.result}
                </span>
                <span className="text-sm text-muted">{cs.metric}</span>
              </div>
              {cs.heroMetrics?.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 border-l border-white/10 pl-4 md:pl-6"
                >
                  <span className="text-xl font-bold text-accent font-display">
                    {m.value}
                  </span>
                  <span className="text-sm text-muted">{m.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed">
              {cs.description}
            </p>
          </FadeIn>

          {/* Featured image */}
          <FadeIn className="mb-12">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-card">
              {cs.image ? (
                <Image
                  src={cs.image}
                  alt={cs.client}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-navy-800 to-navy-900">
                  <span className="text-8xl font-bold text-white/10 font-display absolute">
                    {cs.client.charAt(0)}
                  </span>
                  <div className="relative z-10 text-center">
                    <div className="text-5xl font-bold text-accent font-display">
                      {cs.result}
                    </div>
                    <div className="text-lg text-text mt-1">{cs.metric}</div>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* The Challenge */}
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

          {/* Our Approach */}
          {cs.approachSteps && cs.approachSteps.length > 0 && (
            <FadeIn className="mb-12">
              <h2 className="text-2xl font-bold text-text font-display mb-6">
                Our Approach
              </h2>
              <ol className="space-y-5">
                {cs.approachSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">
                        {step.title}
                      </p>
                      <p className="text-sm text-muted leading-relaxed mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>
          )}

          {/* The Results */}
          {cs.results && cs.results.length > 0 && (
            <FadeIn className="mb-12">
              <h2 className="text-2xl font-bold text-text font-display mb-6">
                The Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cs.results.map((r) => (
                  <div
                    key={r.label}
                    className="flex flex-col rounded-xl border border-border bg-white p-5 shadow-card"
                  >
                    <span className="text-2xl font-bold text-accent font-display">
                      {r.value}
                    </span>
                    <span className="text-sm font-medium text-text mt-1">
                      {r.label}
                    </span>
                    <span className="text-xs text-muted mt-2 leading-relaxed">
                      {r.description}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* What the Client Said */}
          {cs.testimonial && (
            <FadeIn className="mb-12">
              <h2 className="text-2xl font-bold text-text font-display mb-6">
                What the Client Said
              </h2>
              <blockquote className="rounded-xl border-l-4 border-accent bg-navy-800/40 p-6">
                <p className="text-base italic text-muted leading-relaxed">
                  &ldquo;{cs.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-muted">
                  <span className="font-semibold text-text">
                    {cs.testimonial.name}
                  </span>
                  <span className="mx-2">·</span>
                  <span>{cs.testimonial.role}</span>
                  <span className="mx-2">·</span>
                  <span>{cs.testimonial.company}</span>
                </footer>
              </blockquote>
            </FadeIn>
          )}

          {/* More Case Studies */}
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
                    className="group flex flex-col rounded-xl border border-border bg-white p-5 transition-all hover:border-accent/20 hover:shadow-lg"
                  >
                    {/* Industry tag */}
                    <span className="inline-flex self-start items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-3">
                      {r.industry}
                    </span>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-accent font-display">
                        {r.result}
                      </span>
                      <span className="text-sm text-muted">{r.metric}</span>
                    </div>
                    <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                      {r.client}
                    </h3>
                    <p className="text-sm text-muted mt-1 flex-1">
                      {r.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                      Read Case Study
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
