import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { getPosts } from "@/lib/wordpress/content";
import { BlogGrid } from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on digital marketing, web design, CRM, and growth strategies from the Optimax team.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

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
