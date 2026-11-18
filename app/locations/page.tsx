import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { getLocations } from "@/lib/wordpress/content";

export const metadata: Metadata = {
  title: "Locations — Gurgaon, Gorakhpur & Uttar Pradesh",
  description:
    "Optimax Studio serves businesses from our Gurgaon head office and across Gorakhpur, Lucknow, Basti, Deoria and Kushinagar.",
  alternates: { canonical: "/locations" },
};

export default async function LocationsPage() {
  const locations = await getLocations();
  if (!locations.length) notFound();

  return (
    <>
      <PageHero
        label="Locations"
        title="Where We Work"
        subtitle="Website development and lead generation for businesses across Haryana and Uttar Pradesh."
        green
        breadcrumbs={[{ label: "Locations" }]}
      />

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, i) => (
            <FadeIn key={location.slug} delay={i * 0.06}>
              <Link
                href={`/locations/${location.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-border bg-white p-7 shadow-card transition-all hover:border-accent/20 hover:shadow-lg hover:-translate-y-1.5"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-text font-display mb-2 group-hover:text-accent transition-colors">
                  {location.city}
                </h2>
                <p className="text-sm text-muted leading-relaxed flex-1">{location.intro}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  View {location.city} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
