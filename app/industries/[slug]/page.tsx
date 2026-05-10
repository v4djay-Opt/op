import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getIndustryBySlug,
  getAllIndustrySlugs,
  type Industry,
} from "@/lib/data/industries";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { XCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: `${industry.name} — Optimax Studio`,
    description: industry.tagline,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        label="Industry"
        title={industry.name}
        subtitle={industry.tagline}
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                { label: industry.name },
              ]}
            />
          </FadeIn>

          {/* Pain Points */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Common Challenges
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industry.painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                >
                  <XCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                  <span className="text-sm text-text leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Solutions */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              How Optimax Solves Them
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industry.solutions.map((solution, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-accent/10 bg-accent/5 p-5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span className="text-sm text-text leading-relaxed">{solution}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Relevant Services */}
          {industry.relevantServices.length > 0 && (
            <FadeIn className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
                Relevant Services
              </h2>
              <div className="flex flex-wrap gap-3">
                {industry.relevantServices.map((service) => (
                  <Link
                    key={service}
                    href="/services"
                    className="inline-flex items-center rounded-full border border-white/10 bg-navy-800/40 px-4 py-2 text-sm text-text transition-colors hover:border-accent/30 hover:bg-accent/10"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Relevant Products */}
          {industry.relevantProducts.length > 0 && (
            <FadeIn className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
                Recommended Products
              </h2>
              <div className="flex flex-wrap gap-3">
                {industry.relevantProducts.map((product) => (
                  <Link
                    key={product}
                    href="/products"
                    className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/20"
                  >
                    {product}
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}

          {/* FAQ */}
          <div className="mb-16">
            <FAQSection faqs={industry.faqs} />
          </div>

          <BottomCTA
            title={`Ready to transform your ${industry.name.toLowerCase()} business?`}
          />
        </div>
      </section>
    </>
  );
}
