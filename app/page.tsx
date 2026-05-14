import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ServicesStrip } from "@/components/sections/ServicesStrip";
import { StatsRow } from "@/components/sections/StatsRow";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { Industries } from "@/components/sections/Industries";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyOptimax } from "@/components/sections/WhyOptimax";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingCards } from "@/components/sections/PricingCards";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { sanityFetch } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import { fallbackPosts } from "@/lib/data/blog-fallback";

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
  const sanityPosts = await sanityFetch<Post[]>(postsQuery);
  const rawPosts: Post[] = sanityPosts || fallbackPosts;
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
      <LogoStrip />
      <ServicesStrip />
      <StatsRow />
      <ProductsShowcase />
      <Industries />
      <HowItWorks />
      <WhyOptimax />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <PricingCards />
      <IntegrationsGrid />
      <BlogPreview posts={posts} />
      <CTABanner />
    </>
  );
}
