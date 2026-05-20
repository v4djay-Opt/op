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
  const description = `See how Optimax Studio helped ${cs.client ?? ""} achieve ${cs.result ?? ""} ${cs.metric ?? ""}. ${(cs.description ?? "").slice(0, 90)}`;
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
      <section className="relative min-h-[520px] flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden" style={{ background: "#1a4a3a" }}>
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] blob-1 pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.04)" }} />
        <div className="absolute -bottom-16 -right-16 h-[350px] w-[350px] blob-2 pointer-events-none animate-blob-float-delayed" style={{ background: "rgba(255,255,255,0.03)" }} />
        <div className="absolute top-10 right-1/3 h-[180px] w-[180px] rounded-full pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.025)", animationDelay: "1.5s" }} />
        <div className="relative z-10 mx-auto max-w-4xl">
          <FadeIn>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                {cs.industry}
              </span>
              <span className="text-xs text-white/50">
                Published: {formatDate(cs.publishedAt)}
              </span>
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white font-display leading-[1.15]">
              {cs.client} Case Study
            </h1>
            <p className="mt-4 text-base font-normal text-white/75 max-w-[580px] leading-relaxed">
              How we achieved {cs.result?.toLowerCase() ?? ""} {cs.metric?.toLowerCase() ?? ""} in{" "}
              {cs.heroMetrics?.[0]?.value || "record time"}.
            </p>

            {/* Metric row — main + 2 extra */}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-white/70" />
                <span className="text-xl font-bold text-white font-display">
                  {cs.result}
                </span>
                <span className="text-sm text-white/60">{cs.metric}</span>
              </div>
              {cs.heroMetrics?.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 border-l border-white/20 pl-4 md:pl-6"
                >
                  <span className="text-xl font-bold text-white font-display">
                    {m.value}
                  </span>
                  <span className="text-sm text-white/60">{m.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BREADCRUMB BAR ── */}
      <div className="border-b border-border bg-[#235142] px-4 py-3">
        <div className="mx-auto w-full max-w-6xl">
          <Breadcrumbs
            light
            className="!mb-0"
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: cs.client },
            ]}
          />
        </div>
      </div>

      {/* Featured image */}
      <section className="inner-page px-4 mt-12 md:mt-16 mb-10">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-card">
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
                    {cs.client?.charAt(0) ?? ""}
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
        </div>
      </section>

      {/* ── BODY (two-column) ── */}
      <section className="inner-page pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-12">

          {/* LEFT — Main content (70%) */}
          <div className="lg:w-[70%]">
            <FadeIn>
              <p className="text-lg text-muted leading-relaxed mb-10">
                {cs.description}
              </p>
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
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link
                      key={r._id}
                      href={`/case-studies/${normalizeSlug(r.slug)}`}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-white p-4 transition-all hover:border-accent/20 hover:shadow-lg"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4e4d4] to-[#b8d4b8]">
                        <span className="text-xl font-bold text-white/60 font-display">
                          {r.client?.charAt(0) ?? ""}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-lg font-bold text-accent font-display">{r.result}</span>
                          <span className="text-xs text-muted">{r.metric}</span>
                        </div>
                        <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors leading-snug">
                          {r.client}
                        </h3>
                        <p className="text-sm text-muted mt-0.5 line-clamp-1">{r.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-accent opacity-0 transition-opacity group-hover:opacity-100 shrink-0 self-center ml-2" />
                    </Link>
                  ))}
                </div>
              </FadeIn>
            )}

            <BottomCTA
              title={`Want similar results for your ${cs.industry?.toLowerCase() ?? ""} business?`}
              subtitle="Book a free strategy call and let us show you exactly how we can help."
            />
          </div>

          {/* RIGHT — Sticky Sidebar (30%) */}
          <aside className="lg:w-[30%]">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* CTA card */}
              <FadeIn>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-card text-center">
                  <h3 className="text-lg font-bold text-text font-display mb-2">
                    Want similar results?
                  </h3>
                  <p className="text-sm text-muted mb-5 leading-relaxed">
                    Book a free strategy call and let us show you exactly how we can help your business grow.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
                  >
                    Book Free Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>

              {/* Key metrics */}
              {cs.results && cs.results.length > 0 && (
                <FadeIn>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-text mb-4 font-display">
                      Key Results
                    </h3>
                    <div className="space-y-3">
                      {cs.results.slice(0, 3).map((r) => (
                        <div key={r.label} className="flex items-center justify-between">
                          <span className="text-xs text-muted">{r.label}</span>
                          <span className="text-sm font-bold text-accent font-display">{r.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}

              {/* Industry tag */}
              <FadeIn>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text mb-3 font-display">
                    Industry
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
                    {cs.industry}
                  </span>
                </div>
              </FadeIn>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
