import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { industries } from "@/lib/data/industries";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Heart,
  Dumbbell,
  Sofa,
  ShoppingBag,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://optimaxstudio.com";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  GraduationCap,
  Heart,
  Dumbbell,
  Sofa,
  ShoppingBag,
  Briefcase,
};

export const metadata: Metadata = {
  title:
    "Industries We Serve — Real Estate, Education, Healthcare & More | Optimax Studio",
  description:
    "Optimax Studio builds custom CRMs, websites, and digital tools for Real Estate, Schools, Healthcare, Fitness, Interior Design, Retail, and Corporate businesses in India.",
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title: "Industries | Optimax Studio",
    description:
      "Custom digital solutions for 7 industries. Real estate CRM, school management, gym software & more.",
    type: "website",
    url: `${SITE_URL}/industries`,
  },
};

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries Served by Optimax Studio",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Real Estate", url: `${SITE_URL}/industries/real-estate` },
      { "@type": "ListItem", position: 2, name: "Schools & Education", url: `${SITE_URL}/industries/education` },
      { "@type": "ListItem", position: 3, name: "Healthcare", url: `${SITE_URL}/industries/healthcare` },
      { "@type": "ListItem", position: 4, name: "Fitness & Gym", url: `${SITE_URL}/industries/fitness` },
      { "@type": "ListItem", position: 5, name: "Interior Design", url: `${SITE_URL}/industries/interior-design` },
      { "@type": "ListItem", position: 6, name: "Retail & E-commerce", url: `${SITE_URL}/industries/retail` },
      { "@type": "ListItem", position: 7, name: "Corporate", url: `${SITE_URL}/industries/corporate` },
    ],
  };

  return (
    <>
      {/* SEO JSON-LD */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(jsonLd)}
      </script>

      <PageHero
        label="Industries"
        title="Solutions Tailored to Your Industry"
        subtitle="From real estate CRMs to school management systems — we've built digital solutions for 40+ businesses across 7 industries in India."
        green
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = iconMap[industry.icon];
              const isLast = i === industries.length - 1;
              return (
                <FadeIn
                  key={industry.slug}
                  delay={i * 0.08}
                  className={isLast ? "md:col-span-2 lg:col-span-3" : ""}
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className={`group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-card transition-all hover:border-accent/20 hover:shadow-lg hover:-translate-y-1.5 h-full ${
                      isLast
                        ? "lg:flex-row lg:items-center lg:gap-8"
                        : ""
                    }`}
                  >
                    {/* Icon */}
                    {Icon && (
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 ${
                          isLast ? "lg:mb-0" : ""
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    )}

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors group-hover:underline underline-offset-4 decoration-accent/40">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {industry.tagline}
                      </p>
                      <p className="text-sm text-muted leading-relaxed mt-1">
                        {industry.description}
                      </p>
                    </div>

                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                      Explore Solutions
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="inner-page pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-3">
              Don't See Your Industry?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-6">
              We build custom solutions for any business. Let's talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
            >
              Book Free Call
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
