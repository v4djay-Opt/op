import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { sanityFetch } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import { fallbackPosts, type FallbackPost } from "@/lib/data/blog-fallback";
import { Clock } from "lucide-react";
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
  author?: string;
  authorRole?: string;
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

function AuthorAvatar({ name }: { name?: string }) {
  const initial = (name || "?").charAt(0).toUpperCase();
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">
      {initial}
    </div>
  );
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
        green
      />

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${normalizeSlug(post.slug)}`}
                className="group flex flex-col rounded-2xl bg-white border border-border shadow-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Featured image */}
                <div className="relative aspect-[16/10] bg-surface-alt overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-4xl font-bold text-accent/20 font-display">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Meta line */}
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="h-1 w-1 rounded-full bg-muted" />
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.estimatedReadTime || 5} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-text font-display mb-2 leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-border">
                    <AuthorAvatar name={post.author} />
                    <div className="leading-tight">
                      <p className="text-sm font-medium text-text">{post.author || "Optimax Team"}</p>
                      <p className="text-xs text-muted">{post.authorRole || "Content Manager"}</p>
                    </div>
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
