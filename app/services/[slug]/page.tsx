import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  type Service,
} from "@/lib/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

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
      {/* Hero with breadcrumb above label */}
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
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/50 font-display mb-4">
              Service
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-white font-display leading-[1.15]">
              {service.name}
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-base font-normal text-white/75 max-w-[580px] mx-auto leading-relaxed">
              {service.tagline}
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
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      <section className="inner-page pt-12 md:pt-16 px-4">
        <div className="mx-auto max-w-6xl">
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
                  className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent p-5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white/80 mt-0.5" />
                  <span className="text-sm text-white leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Our Process */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Process
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      <p className="text-sm text-muted mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-border bg-surface-alt overflow-hidden">
                <div className="h-64 lg:h-full flex items-center justify-center">
                  <span className="text-muted text-sm font-medium">
                    {service.name} Process
                  </span>
                </div>
              </div>
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
