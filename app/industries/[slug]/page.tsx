import type { Metadata } from "next";
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
import Image from "next/image";
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
      <section className="relative min-h-[520px] flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden" style={{ background: "#1a4a3a" }}>
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] blob-1 pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.04)" }} />
        <div className="absolute -bottom-16 -right-16 h-[350px] w-[350px] blob-2 pointer-events-none animate-blob-float-delayed" style={{ background: "rgba(255,255,255,0.03)" }} />
        <div className="absolute top-10 right-1/3 h-[180px] w-[180px] rounded-full pointer-events-none animate-blob-float" style={{ background: "rgba(255,255,255,0.025)", animationDelay: "1.5s" }} />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4 mt-4">
              Industry
            </span>
            <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white font-display leading-[1.15]">
              {industry.name}
            </h1>
            <p className="mt-4 text-base font-normal text-white/75 max-w-[580px] mx-auto leading-relaxed">
              {industry.tagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── BREADCRUMB BAR ── */}
      <div className="border-b border-border bg-[#235142] px-4 py-3">
        <div className="mx-auto w-full max-w-6xl">
          <Breadcrumbs
            light
            className="!mb-0"
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.name },
            ]}
          />
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <section className="inner-page border-y border-border px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-display">40+</div>
              <div className="text-muted mt-2 text-sm">Clients Served</div>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-display">7</div>
              <div className="text-muted mt-2 text-sm">Industries</div>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-display">92%</div>
              <div className="text-muted mt-2 text-sm">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE SHOWCASE GRID ── */}
      {industry.images && industry.images.length > 0 && (
        <section className="inner-page px-4 mb-16 mt-8">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {industry.images.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-accent"
                  >
                    <Image
                      src={src}
                      alt={`${industry.name} ${i + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="inner-page pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Pain Points */}
          <FadeIn className="mb-16 mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Common Challenges
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {industry.painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-sm"
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
                  className="flex flex-col rounded-xl border border-border bg-white p-5 shadow-sm h-full"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
