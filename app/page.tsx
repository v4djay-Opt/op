import { Hero } from "@/components/sections/Hero";
import { ServicesStrip } from "@/components/sections/ServicesStrip";
import { StatsRow } from "@/components/sections/StatsRow";
import { Industries } from "@/components/sections/Industries";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { sanityFetch } from "@/lib/sanity/client";
import { postsQuery, caseStudiesQuery } from "@/lib/sanity/queries";
import { fallbackPosts } from "@/lib/data/blog-fallback";
import type { CaseStudyCard } from "@/components/sections/CaseStudies";

interface SanityCase {
  _id: string;
  slug: { current: string } | string;
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
}

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

function normalizeSlug(slug: { current: string } | string): string {
  return typeof slug === "string" ? slug : slug.current;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Optimax Studio",
      url: "https://optimax.studio",
      description:
        "We build digital machines that generate revenue. Web design, development, marketing, and custom CRM solutions.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-89570-79052",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://x.com/optimaxstudio",
        "https://www.linkedin.com/company/optimaxstudio/",
        "https://www.instagram.com/optimaxstudioin/",
        "https://www.facebook.com/OptimaxStudio.IN",
      ],
    },
    {
      "@type": "WebSite",
      name: "Optimax Studio",
      url: "https://optimax.studio",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://optimax.studio/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default async function Home() {
  const [sanityPosts, sanityCases] = await Promise.all([
    sanityFetch<Post[]>(postsQuery),
    sanityFetch<SanityCase[]>(caseStudiesQuery),
  ]);
  const rawPosts: Post[] = sanityPosts || fallbackPosts;
  const cases: CaseStudyCard[] = (sanityCases || []).map((c) => ({
    client: c.client,
    industry: c.industry,
    result: c.result,
    metric: c.metric,
    description: c.description,
    href: `/case-studies/${typeof c.slug === "string" ? c.slug : c.slug.current}`,
  }));
  const posts = rawPosts.map((p) => ({
    ...p,
    slug: normalizeSlug(p.slug),
  }));
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
      >
        {JSON.stringify(jsonLd)}
      </script>
      <Hero />
      <ServicesStrip />
      <StatsRow />
      <Industries />
      <CaseStudies cases={cases} />
      <Testimonials />
      <FAQ />
      <IntegrationsGrid />
      <BlogPreview posts={posts} />
      <CTABanner />
    </>
  );
}
