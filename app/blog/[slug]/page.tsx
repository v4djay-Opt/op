import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/lib/sanity/client";
import { postBySlugQuery, relatedPostsQuery, postSlugsQuery } from "@/lib/sanity/queries";
import {
  getFallbackPostBySlug,
  getAllFallbackPostSlugs,
  fallbackPosts,
  type FallbackPost,
} from "@/lib/data/blog-fallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FadeIn } from "@/components/ui/FadeIn";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string } | string;
  excerpt: string;
  category?: string;
  publishedAt: string;
  estimatedReadTime?: number;
  body?: unknown[];
  image?: string;
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
  const sanitySlugs = await sanityFetch<string[]>(postSlugsQuery);
  const slugs = sanitySlugs || getAllFallbackPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = (await sanityFetch<Post>(postBySlugQuery, { slug })) || getFallbackPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Optimax Studio Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = (await sanityFetch<Post>(postBySlugQuery, { slug })) || getFallbackPostBySlug(slug);
  if (!post) notFound();

  const related = (await sanityFetch<Post[]>(relatedPostsQuery, { slug })) || fallbackPosts.filter((p) => p.slug.current !== slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.15),transparent_50%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
          </FadeIn>
          <FadeIn>
            {post.category && (
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent font-display mb-3">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-text font-display leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.estimatedReadTime || 5} min read
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-10">
              {post.excerpt}
            </p>
          </FadeIn>

          {post.body && (
            <FadeIn>
              <article className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-text prose-p:text-muted prose-a:text-accent prose-strong:text-text prose-li:text-muted">
                <PortableText value={post.body as never} />
              </article>
            </FadeIn>
          )}

          {related.length > 0 && (
            <FadeIn className="mt-16">
              <h2 className="text-2xl font-bold text-text font-display mb-6">
                Related Posts
              </h2>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link
                    key={r._id}
                    href={`/blog/${normalizeSlug(r.slug)}`}
                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-navy-800/40 p-4 transition-all hover:border-accent/20 hover:bg-navy-800/60"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-sm text-muted mt-1">{r.excerpt}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent opacity-0 transition-opacity group-hover:opacity-100 shrink-0 ml-4" />
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
      </section>
    </>
  );
}
