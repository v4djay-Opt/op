import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/lib/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-navy-800/40 p-7 backdrop-blur-sm transition-all hover:border-accent/20 hover:bg-navy-800/60 hover:-translate-y-1.5 h-full"
                >
                  <h3 className="text-xl font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {service.tagline}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
