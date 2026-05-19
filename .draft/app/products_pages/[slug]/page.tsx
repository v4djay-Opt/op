import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/lib/data/products";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { RazorpayButton } from "@/components/ui/RazorpayButton";
import { parsePriceToPaise } from "@/lib/utils";

const SITE_URL = "https://optimaxstudio.com";

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not Found" };

  const title = `${product.name} — Admissions, Fees & Attendance Software | Optimax Studio`;
  const description = `All-in-one ${product.name.toLowerCase()} for admissions, fee collection, attendance, exams, and parent communication. Deploy in 2 weeks. Starting at ${product.pricing[0]?.price || "custom pricing"}.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/products/${slug}` },
    openGraph: {
      title: `${product.name} | Optimax Studio`,
      description: `Run your business from one dashboard. ${product.tagline} Starting ${product.pricing[0]?.price || "custom pricing"}.`,
      type: "website",
      url: `${SITE_URL}/products/${slug}`,
    },
  };
}

function extractNumericPrice(priceStr: string): number | null {
  const match = priceStr.match(/[\d,]+/);
  if (!match) return null;
  return parseInt(match[0].replace(/,/g, ""), 10);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  /* SoftwareApplication schema */
  const offers = product.pricing
    .map((plan) => {
      const price = extractNumericPrice(plan.price);
      if (!price) return null;
      return {
        "@type": "Offer" as const,
        name: plan.plan,
        price: String(price),
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "UnitPriceSpecification" as const,
          price: String(price),
          priceCurrency: "INR",
          unitText: "MONTH",
        },
      };
    })
    .filter(Boolean);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: product.description,
    offers: offers.length > 0 ? offers : undefined,
    provider: {
      "@type": "Organization",
      name: "Optimax Studio",
      url: SITE_URL,
    },
  };

  /* FAQPage schema */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  /* BreadcrumbList schema */
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
        name: "Products",
        item: `${SITE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO (breadcrumb before label) ── */}
      <section className="relative min-h-[520px] flex flex-col justify-center pt-20 pb-10 px-4 overflow-hidden" style={{ background: "#1a4a3a" }}>
        <div
          className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.04)" }}
        />
        <div
          className="absolute -bottom-16 -right-16 h-[350px] w-[350px] rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.03)" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Products", href: "/products" },
                { label: product.name },
              ]}
              light
            />
          </FadeIn>
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4 mt-4">
              Product
            </span>
            <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white font-display leading-[1.15]">
              {product.name}
            </h1>
            <p className="mt-4 text-base font-normal text-white/75 max-w-[580px] leading-relaxed">
              {product.tagline}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Description */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              {product.description}
            </p>
          </FadeIn>

          {/* Social Proof Strip */}
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8 mt-10 border-y border-border bg-accent/5">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-display">
                  50+
                </div>
                <div className="text-sm text-muted mt-1">
                  {product.name.includes("School")
                    ? "Schools Onboarded"
                    : product.name.includes("Hospital")
                    ? "Clinics Onboarded"
                    : product.name.includes("Gym")
                    ? "Gyms Onboarded"
                    : product.name.includes("Real Estate")
                    ? "Agencies Onboarded"
                    : "Studios Onboarded"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-display">
                  2 Weeks
                </div>
                <div className="text-sm text-muted mt-1">Deploy Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-display">
                  4.8<span className="text-accent">★</span>
                </div>
                <div className="text-sm text-muted mt-1">Client Rating</div>
              </div>
            </div>
          </FadeIn>

          {/* Features */}
          <FadeIn className="mb-16 mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-card"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent mb-3" />
                  <h3 className="text-base font-semibold text-text font-display mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Screenshots */}
          {product.images && product.images.length > 0 && (
            <FadeIn className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-8 text-center">
                See It in Action
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.images.map((img, i) => (
                  <div key={i} className="flex flex-col">
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-border shadow-card group ${
                        i === 1
                          ? "hover:shadow-lg transition-shadow duration-300"
                          : ""
                      }`}
                    >
                      <div className="aspect-[16/10] relative">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className={`object-cover ${
                            i !== 1
                              ? "transition-transform duration-300 group-hover:scale-[1.03]"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                    <p className="text-sm text-muted mt-3 text-center leading-snug">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Pricing */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-8 text-center">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.pricing.map((plan) => (
                <div
                  key={plan.plan}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    plan.cta === "Most Popular"
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-white shadow-card"
                  }`}
                >
                  <div className="mb-4">
                    <span className="text-sm font-medium text-muted">
                      {plan.plan}
                    </span>
                    <div className="mt-1 text-3xl font-bold text-text font-display">
                      {plan.price}
                    </div>
                  </div>
                  <ul className="mb-6 space-y-3 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {parsePriceToPaise(plan.price) ? (
                    <RazorpayButton
                      planName={`${product.name} — ${plan.plan}`}
                      amount={parsePriceToPaise(plan.price)!}
                      ctaText={plan.cta}
                    />
                  ) : (
                    <Link
                      href="/contact"
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                        plan.cta === "Most Popular"
                          ? "bg-accent text-white hover:bg-accent-hover"
                          : "border border-white/10 text-text hover:bg-white/5"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* FAQ */}
          <div className="mb-8">
            <FAQSection faqs={product.faqs} />
          </div>

          <BottomCTA
            title={`Ready to deploy ${product.name}?`}
            subtitle="Request a personalized demo and see the product in action with your data."
            buttonText="Request Demo"
          />
        </div>
      </section>
    </>
  );
}
