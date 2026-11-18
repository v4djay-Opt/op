import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/wordpress/content";
import { withHeadingIds } from "@/lib/wordpress/html";
import { cmsMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FadeIn } from "@/components/ui/FadeIn";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not Found" };

  return cmsMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt,
    seo: post.seo,
    image: post.image,
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      ...(post.author ? { authors: [post.author] } : {}),
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const sameCategory = posts.filter((p) => p.slug !== slug && post.category && p.category === post.category);
  const related = [...sameCategory, ...posts.filter((p) => p.slug !== slug && !sameCategory.includes(p))].slice(0, 3);

  const { html: bodyHtml, headings } = withHeadingIds(post.bodyHtml);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.seo.description || post.excerpt,
        author: {
          "@type": "Person",
          name: post.author || "Optimax Studio",
        },
        publisher: {
          "@type": "Organization",
          name: "Optimax Studio",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        ...(post.image ? { image: post.image } : {}),
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
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonicalUrl,
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
      <ReadingProgress />

      {/* ── HERO ── */}
      <section className="relative min-h-[520px] flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden" style={{ background: "#1a4a3a" }}>
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] blob-1 pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.04)" }} />
        <div className="absolute -bottom-16 -right-16 h-[350px] w-[350px] blob-2 pointer-events-none animate-blob-float-delayed" style={{ background: "rgba(255,255,255,0.03)" }} />
        <div className="absolute top-10 right-1/3 h-[180px] w-[180px] rounded-full pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.025)", animationDelay: "1.5s" }} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <FadeIn>
            {post.category && (
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-3">
                {post.category}
              </span>
            )}
            <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white font-display leading-[1.15]">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-base font-normal text-white/75 max-w-[580px] leading-relaxed">
                {post.excerpt}
              </p>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.estimatedReadTime || 5} min read
              </span>
              {post.author && (
                <span>
                  By <span className="text-white/80">{post.author}</span>
                </span>
              )}
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
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      {/* Featured image */}
      <section className="inner-page px-4 mt-12 md:mt-16 mb-10">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-card bg-surface-alt">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  priority
                  sizes="(min-width: 1152px) 1152px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-navy-800 to-navy-900">
                  <span className="text-8xl font-bold text-white/10 font-display absolute">
                    {post.title.charAt(0)}
                  </span>
                  <div className="relative z-10 text-center">
                    {post.category && (
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-3">
                        {post.category}
                      </span>
                    )}
                    <div className="text-2xl font-bold text-text font-display max-w-lg mx-auto px-4">
                      {post.title}
                    </div>
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
          {/* LEFT — Article (70%) */}
          <div className="lg:w-[70%]">
            <FadeIn>
              <p className="text-lg text-muted leading-relaxed mb-10">
                {post.excerpt}
              </p>
            </FadeIn>

            {/* Table of Contents */}
            {headings.length > 0 && (
              <FadeIn className="mb-10">
                <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text mb-4 font-display">
                    In This Article
                  </h3>
                  <ul className="space-y-2.5">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="text-sm text-muted hover:text-accent transition-colors"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )}

            {/* Article body */}
            {bodyHtml && (
              <FadeIn>
                <article
                  className="prose max-w-none [&_h2]:scroll-mt-24"
                  dangerouslySetInnerHTML={{ __html: bodyHtml }}
                />
              </FadeIn>
            )}

            {/* Key Insight callout */}
            <FadeIn className="mt-10">
              <div className="rounded-xl border-l-4 border-accent bg-navy-800/40 p-6">
                <p className="text-sm font-semibold text-text mb-1">
                  Key Insight:
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </FadeIn>

            {/* Author Bio */}
            {post.author && (
              <FadeIn className="mt-12">
                <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    {/* Avatar placeholder */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-lg font-display">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text">
                        Written by {post.author}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        {post.authorRole || "Optimax Team"}
                      </p>
                      {post.authorBio && (
                        <p className="text-sm text-muted leading-relaxed mt-2">
                          {post.authorBio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Related Posts */}
            {related.length > 0 && (
              <FadeIn className="mt-16">
                <h2 className="text-2xl font-bold text-text font-display mb-6">
                  Related Posts
                </h2>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/blog/${r.slug}`}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-white p-4 transition-all hover:border-accent/20 hover:shadow-lg"
                    >
                      {/* Thumbnail placeholder */}
                      <div className="relative aspect-[16/9] w-24 shrink-0 overflow-hidden rounded-lg bg-surface-alt flex items-center justify-center">
                        <span className="text-xl font-bold text-accent/20 font-display">
                          {r.title.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors leading-snug">
                          {r.title}
                        </h3>
                        <p className="text-sm text-muted mt-1 line-clamp-2">
                          {r.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs text-muted mt-2">
                          <Clock className="h-3 w-3" />
                          {r.estimatedReadTime || 5} min read
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-accent opacity-0 transition-opacity group-hover:opacity-100 shrink-0 self-center ml-2" />
                    </Link>
                  ))}
                </div>
              </FadeIn>
            )}

            <BottomCTA
              title="Want to implement these strategies?"
              subtitle="Book a free strategy call and let us audit your current setup."
            />
          </div>

          {/* RIGHT — Sticky Sidebar (30%) */}
          <aside className="lg:w-[30%]">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Book Free Call card */}
              <FadeIn>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-card text-center">
                  <h3 className="text-lg font-bold text-text font-display mb-2">
                    Need help with this?
                  </h3>
                  <p className="text-sm text-muted mb-5 leading-relaxed">
                    Book a free strategy call and let us show you exactly how we can help.
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

              {/* Category quick links */}
              {post.category && (
                <FadeIn>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-text mb-4 font-display">
                      More in {post.category}
                    </h3>
                    <div className="space-y-3">
                      {related.slice(0, 2).map((r) => (
                        <Link
                          key={r.id}
                          href={`/blog/${r.slug}`}
                          className="block text-sm text-muted hover:text-accent transition-colors leading-snug"
                        >
                          {r.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

