import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getIndustryBySlug,
  getAllIndustrySlugs,
  type Industry,
} from "@/lib/data/industries";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { XCircle, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://optimaxstudio.com";

const serviceSlugMap: Record<string, string> = {
  "Web Design & Development": "web-design-development",
  "Digital Marketing": "digital-marketing",
  "Social Media Management": "social-media-management",
  "CRM & Custom Portals": "crm-custom-portals",
  "SEO": "seo",
};

const serviceDescriptionMap: Record<string, string> = {
  "Web Design & Development": "Custom, high-performance websites built for conversions.",
  "Digital Marketing": "Data-driven campaigns that maximize ROI and qualified traffic.",
  "Social Media Management": "Strategic content and community management.",
  "CRM & Custom Portals": "Tailored CRM solutions for your specific workflow.",
  "SEO": "Technical and content SEO that ranks you above competitors.",
};

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

  const title = `${industry.name} Digital Solutions | Optimax Studio`;
  const description = `Optimax Studio builds custom portals, CRMs, and digital tools for ${industry.name.toLowerCase()} businesses. ${industry.tagline} Book a free strategy call.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/industries/${slug}` },
    openGraph: {
      title: `${industry.name} Solutions | Optimax Studio`,
      description: `Custom digital tools for ${industry.name.toLowerCase()}. ${industry.tagline}`,
      type: "website",
      url: `${SITE_URL}/industries/${slug}`,
    },
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

  /* FAQPage schema for rich results */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${SITE_URL}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
      },
    ],
  };

  return (
    <>
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO (breadcrumbs before label) ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-nature-sky/30 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                { label: industry.name },
              ]}
            />
          </FadeIn>
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent font-display mb-4 mt-4">
              Industry
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text font-display leading-tight">
              {industry.name}
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              {industry.tagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section className="border-y border-border bg-accent/5 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-display">
                40+
              </div>
              <div className="text-sm text-muted mt-1">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-display">
                7
              </div>
              <div className="text-sm text-muted mt-1">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-display">
                92%
              </div>
              <div className="text-sm text-muted mt-1">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE GALLERY ── */}
      {industry.images && industry.images.length > 0 && (
        <section className="px-4 mb-16 mt-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {industry.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl border border-border shadow-card group aspect-[4/3]"
                  >
                    <Image
                      src={img}
                      alt={`${industry.name} showcase ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Pain Points */}
          <FadeIn className="mb-16 mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Common Challenges
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {industry.painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy-800/40 px-4 py-3"
                >
                  <XCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                  <span className="text-sm text-text leading-snug">
                    {point}
                  </span>
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
                  className="flex flex-col rounded-xl border border-accent/10 bg-accent/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <span className="text-sm font-semibold text-text leading-relaxed">
                      {solution.title}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mt-2 pl-8">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Relevant Services — clickable cards */}
          {industry.relevantServices.length > 0 && (
            <FadeIn className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
                Relevant Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industry.relevantServices.map((service) => {
                  const serviceSlug = serviceSlugMap[service];
                  return (
                    <Link
                      key={service}
                      href={
                        serviceSlug
                          ? `/services/${serviceSlug}`
                          : "/services"
                      }
                      className="group flex flex-col rounded-xl border border-border bg-white p-5 shadow-card transition-all hover:border-accent/20 hover:shadow-lg"
                    >
                      <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors mb-1">
                        {service}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed flex-1">
                        {serviceDescriptionMap[service] || ""}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  );
                })}
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

          {/* Case Study Teaser */}
          {industry.caseStudy && (
            <FadeIn className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
                See It in Action
              </h2>
              <Link
                href={`/case-studies/${industry.caseStudy.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-white p-5 transition-all hover:border-accent/20 hover:shadow-lg"
              >
                <span className="inline-flex self-start items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-3">
                  {industry.name}
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-accent font-display">
                    {industry.caseStudy.result}
                  </span>
                  <span className="text-sm text-muted">
                    {industry.caseStudy.metric}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                  {industry.caseStudy.client}
                </h3>
                <p className="text-sm text-muted mt-1 flex-1">
                  {industry.caseStudy.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Read Case Study
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>
          )}

          <BottomCTA
            title={`Ready to transform your ${industry.name.toLowerCase()} business?`}
          />
        </div>
      </section>
    </>
  );
}
