import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
  type Product,
} from "@/lib/data/products";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { RazorpayButton } from "@/components/ui/RazorpayButton";
import { parsePriceToPaise } from "@/lib/utils";

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
  return {
    title: `${product.name} — Optimax Studio`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <PageHero
        label="Product"
        title={product.name}
        subtitle={product.tagline}
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Products", href: "/products" },
                { label: product.name },
              ]}
            />
          </FadeIn>

          {/* Description */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-16 max-w-3xl">
              {product.description}
            </p>
          </FadeIn>

          {/* Features */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-xl border border-white/5 bg-navy-800/40 p-6"
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
                      : "border-white/5 bg-navy-800/40"
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
          <div className="mb-16">
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
