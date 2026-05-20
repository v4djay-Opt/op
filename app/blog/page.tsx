import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { sanityFetch } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import { fallbackPosts } from "@/lib/data/blog-fallback";
import { BlogGrid } from "./BlogGrid";

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
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl">
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
