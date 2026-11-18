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
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { SITE_URL } from "@/lib/site";
import { getCaseStudies, getFaqs, getPosts } from "@/lib/wordpress/content";
import type { CaseStudyCard } from "@/components/sections/CaseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Optimax Studio",
      "@id": `${SITE_URL}/#organization`,
      url: SITE_URL,
      logo: `${SITE_URL}/web-app-manifest-512x512.png`,
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
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default async function Home() {
  const [posts, caseStudies, faqs] = await Promise.all([getPosts(), getCaseStudies(), getFaqs("home")]);
  const cases: CaseStudyCard[] = caseStudies.map((c) => ({
    client: c.client,
    industry: c.industry,
    result: c.result,
    metric: c.metric,
    description: c.description,
    href: `/case-studies/${c.slug}`,
    image: c.image,
  }));
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
      >
        {JSON.stringify(jsonLd)}
      </script>
      <LocalBusinessSchema />
      <Hero />
      <ServicesStrip />
      <StatsRow />
      <Industries />
      <CaseStudies cases={cases} />
      <Testimonials />
      <FAQ items={faqs} />
      <IntegrationsGrid />
      <BlogPreview posts={posts} />
      <CTABanner />
    </>
  );
}
