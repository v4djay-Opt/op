import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/lib/data/services";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Share2,
  Database,
  Search,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  TrendingUp,
  Share2,
  Database,
  Search,
};

export const metadata: Metadata = {
  title: "Services — Optimax Studio",
  description:
    "Explore our full range of digital services: Web Design, Digital Marketing, Social Media, CRM Development, and SEO.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Everything Your Business Needs to Grow Online"
        subtitle="From strategy to execution, we provide end-to-end digital solutions tailored to your goals."
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              const span = i < 3 ? "md:col-span-4" : "md:col-span-6";
              return (
                <FadeIn key={service.slug} delay={i * 0.08} className={span}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-card transition-all hover:border-accent/20 hover:shadow-lg hover:-translate-y-1.5 h-full"
                  >
                    {Icon && (
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors group-hover:underline underline-offset-4 decoration-accent/40">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-muted leading-relaxed mt-1">
                      {service.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
