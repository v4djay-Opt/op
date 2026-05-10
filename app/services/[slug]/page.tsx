import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  type Service,
} from "@/lib/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.name} — Optimax Studio`,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        label="Service"
        title={service.name}
        subtitle={service.tagline}
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: service.name },
              ]}
            />
          </FadeIn>

          {/* Description */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-16">
              {service.description}
            </p>
          </FadeIn>

          {/* What We Do */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              What We Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whatWeDo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span className="text-sm text-text leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Process */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Process
            </h2>
            <div className="space-y-4">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold font-display">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text font-display">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn className="mb-16">
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent font-display">
                {service.stats.value}
              </div>
              <div className="text-muted mt-2">{service.stats.label}</div>
            </div>
          </FadeIn>

          {/* FAQ */}
          <div className="mb-16">
            <FAQSection faqs={service.faqs} />
          </div>

          <BottomCTA
            title={`Ready to start your ${service.name.toLowerCase()} project?`}
          />
        </div>
      </section>
    </>
  );
}
