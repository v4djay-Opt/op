import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { cmsMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  getCaseStudies,
  getLocation,
  getLocations,
  getServices,
  type Location,
} from "@/lib/wordpress/content";

const DEFAULT_PHONE = "+918957079052";

const STATUS_LABEL: Record<Location["officeStatus"], string> = {
  head_office: "Head Office",
  branch: "Branch Office",
  remote: "Service Area",
};

export async function generateStaticParams() {
  return (await getLocations()).map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = await getLocation(slug);
  if (!location) return { title: "Not Found" };
  return cmsMetadata({
    path: `/locations/${location.slug}`,
    title: location.title,
    description: location.intro || `Website development and lead generation for businesses in ${location.city}.`,
    seo: location.seo,
    image: location.image,
  });
}

function locationSchema(location: Location, url: string) {
  const hasOffice = location.officeStatus !== "remote" && Boolean(location.address);
  const city = { "@type": "City", name: [location.city, location.region].filter(Boolean).join(", ") };
  const business = hasOffice
    ? {
        "@type": "ProfessionalService",
        "@id": `${url}#office`,
        name: `${SITE_NAME} — ${location.city}`,
        url,
        telephone: location.phone || DEFAULT_PHONE,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address,
          addressLocality: location.city,
          ...(location.region ? { addressRegion: location.region } : {}),
          ...(location.postalCode ? { postalCode: location.postalCode } : {}),
          addressCountry: "IN",
        },
        ...(location.latitude && location.longitude
          ? { geo: { "@type": "GeoCoordinates", latitude: location.latitude, longitude: location.longitude } }
          : {}),
        ...(location.mapUrl ? { hasMap: location.mapUrl } : {}),
        areaServed: city,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      }
    : {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Website development and lead generation in ${location.city}`,
        url,
        areaServed: city,
        provider: { "@id": `${SITE_URL}/#organization`, "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      };

  return {
    "@context": "https://schema.org",
    "@graph": [
      business,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
          { "@type": "ListItem", position: 3, name: location.city, item: url },
        ],
      },
    ],
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [location, services, caseStudies] = await Promise.all([getLocation(slug), getServices(), getCaseStudies()]);
  if (!location) notFound();

  const url = `${SITE_URL}/locations/${location.slug}`;
  const phone = location.phone || DEFAULT_PHONE;
  const relatedServices = location.relatedServices
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s) => s !== undefined);
  const localCases = caseStudies.filter((c) => c.city?.toLowerCase() === location.city.toLowerCase());
  const showAddress = location.officeStatus !== "remote" && location.address;
  const whatsappText = encodeURIComponent(`Hi Optimax Studio, I'm enquiring from ${location.city}.`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema(location, url)) }}
      />

      <PageHero
        label={STATUS_LABEL[location.officeStatus]}
        title={location.title}
        subtitle={location.intro}
        green
        breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: location.city }]}
      />

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[68%]">
            {location.bodyHtml && (
              <FadeIn>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: location.bodyHtml }} />
              </FadeIn>
            )}

            {relatedServices.length > 0 && (
              <FadeIn className="mt-14">
                <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
                  Services in {location.city}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:border-accent/20 hover:shadow-lg hover:-translate-y-1"
                    >
                      <h3 className="text-lg font-semibold text-text font-display group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mt-1">{service.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </FadeIn>
            )}

            {localCases.length > 0 && (
              <FadeIn className="mt-14">
                <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
                  Work in {location.city}
                </h2>
                <div className="space-y-4">
                  {localCases.map((c) => (
                    <Link
                      key={c.id}
                      href={`/case-studies/${c.slug}`}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-all hover:border-accent/20 hover:shadow-lg"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-lg font-bold text-accent font-display">{c.result}</span>
                          <span className="text-xs text-muted">{c.metric}</span>
                        </div>
                        <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                          {c.client}
                        </h3>
                        <p className="text-sm text-muted mt-0.5 line-clamp-2">{c.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-accent shrink-0 self-center" />
                    </Link>
                  ))}
                </div>
              </FadeIn>
            )}

            {location.faqs.length > 0 && (
              <div className="mt-14">
                <FAQSection faqs={location.faqs} />
              </div>
            )}

            <BottomCTA
              title={`Planning a project in ${location.city}?`}
              subtitle="Tell us what you need and we'll send a custom quote."
            />
          </div>

          <aside className="lg:w-[32%]">
            <div className="lg:sticky lg:top-24 space-y-6">
              <FadeIn>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                  <h2 className="text-lg font-bold text-text font-display mb-4">
                    {showAddress ? `Our ${location.city} office` : `Working with ${location.city} clients`}
                  </h2>
                  <ul className="space-y-3 text-sm text-muted">
                    {showAddress ? (
                      <li className="flex gap-3">
                        <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        <span>
                          {location.address}
                          {location.postalCode ? ` – ${location.postalCode}` : ""}
                          {location.mapUrl && (
                            <>
                              {" "}
                              <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                View on map
                              </a>
                            </>
                          )}
                        </span>
                      </li>
                    ) : (
                      <li className="flex gap-3">
                        <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        <span>Delivered remotely, with in-person meetings arranged when needed.</span>
                      </li>
                    )}
                    {location.hours && (
                      <li className="flex gap-3">
                        <Clock className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        <span>{location.hours}</span>
                      </li>
                    )}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
                    >
                      Get a Custom Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                    >
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                    <a
                      href={`https://wa.me/${DEFAULT_PHONE.replace(/\D/g, "")}?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
