import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { products } from "@/lib/data/products";
import {
  GraduationCap,
  Heart,
  Dumbbell,
  Building2,
  Sofa,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://optimaxstudio.com";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Heart,
  Dumbbell,
  Building2,
  Sofa,
};

export const metadata: Metadata = {
  title:
    "Products — School, Hospital, Gym & Real Estate Software | Optimax Studio",
  description:
    "Ready-to-deploy software for Schools, Hospitals, Gyms, Real Estate agencies, and Interior Design firms. Custom-built by Optimax Studio. Deploy in weeks, not months.",
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: "Products | Optimax Studio",
    description:
      "Industry-specific software built for Indian businesses. School management, hospital systems, gym CRM, real estate tools & more.",
    type: "website",
    url: `${SITE_URL}/products`,
  },
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Optimax Studio Products",
    description: "Ready-to-deploy software products for various industries",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/products/${p.slug}`,
      description: p.featureLine,
    })),
  };

  return (
    <>
      {/* JSON-LD ItemList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        label="Products"
        title="Software Built for Your Industry"
        subtitle="Deploy in days, not months. Our ready-to-use products are customized to fit your exact workflow."
      />

      {/* ── TRUST STRIP ── */}
      <section className="border-y border-border bg-accent/5 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-display">
                5
              </div>
              <div className="text-sm text-muted mt-1">Products Live</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-display flex items-center justify-center gap-1">
                <Clock className="h-6 w-6" />
                2–4
              </div>
              <div className="text-sm text-muted mt-1">Weeks to Deploy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-display">
                40+
              </div>
              <div className="text-sm text-muted mt-1">
                Businesses Using Our Software
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => {
              const Icon = iconMap[product.icon];
              return (
                <FadeIn key={product.slug} delay={i * 0.08}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group flex flex-col rounded-2xl border border-white/5 bg-navy-800/40 p-7 backdrop-blur-sm transition-all hover:border-accent/20 hover:bg-navy-800/60 hover:-translate-y-1.5 hover:shadow-lg h-full"
                  >
                    {Icon && (
                      <Icon className="h-6 w-6 text-accent mb-3" />
                    )}
                    <h3 className="text-xl font-semibold text-text font-display mb-1 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {product.tagline}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mt-1">
                      {product.featureLine}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}

            {/* Coming Soon card */}
            <FadeIn delay={products.length * 0.08}>
              <div className="flex flex-col rounded-2xl border border-white/5 bg-navy-800/40 p-7 backdrop-blur-sm opacity-50 h-full">
                <div className="h-6 w-6 rounded-full border-2 border-dashed border-muted mb-3" />
                <h3 className="text-xl font-semibold text-text font-display mb-1">
                  More Coming Soon
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  We are building solutions for more industries. Stay tuned.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <BottomCTA
        title="Not Sure Which Product Fits You?"
        subtitle="Book a free call and we will recommend the right solution for your business."
        buttonText="Book Free Call"
      />
    </>
  );
}
