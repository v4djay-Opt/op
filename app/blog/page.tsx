import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { sanityFetch } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import { fallbackPosts, type FallbackPost } from "@/lib/data/blog-fallback";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Optimax Studio",
  description:
    "Insights on digital marketing, web design, CRM, and growth strategies from the Optimax team.",
};

interface Post {
  _id: string;
  title: string;
  slug: { current: string } | string;
  excerpt: string;
  category?: string;
  publishedAt: string;
  estimatedReadTime?: number;
  image?: string;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function normalizeSlug(slug: { current: string } | string): string {
  return typeof slug === "string" ? slug : slug.current;
}

export default async function BlogPage() {
  const sanityPosts = await sanityFetch<Post[]>(postsQuery);
  const posts: Post[] = sanityPosts || (fallbackPosts as Post[]);

  return (
    <>
      <PageHero
        label="Blog"
        title="Insights for Digital Growth"
        subtitle="Actionable strategies on marketing, design, CRM, and product development."
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <FadeIn key={post._id} delay={i * 0.08}>
                <Link
                  href={`/blog/${normalizeSlug(post.slug)}`}
                  className="group flex flex-col md:flex-row gap-6 rounded-2xl border border-white/5 bg-navy-800/40 p-6 backdrop-blur-sm transition-all hover:border-accent/20 hover:bg-navy-800/60"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {post.category && (
                        <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {post.category}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Clock className="h-3 w-3" />
                        {post.estimatedReadTime || 5} min read
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        Read
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
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
