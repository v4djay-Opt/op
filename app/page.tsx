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
import { CTABanner } from "@/components/sections/CTABanner";

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      <PricingCards />
      <IntegrationsGrid />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
