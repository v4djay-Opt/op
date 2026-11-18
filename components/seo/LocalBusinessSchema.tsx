import { SITE_URL } from "@/lib/site";

export function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Optimax Studio",
    url: SITE_URL,
    telephone: "+91-8957079052",
    email: "hello@optimaxstudio.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "104, GLS Crown Avenue, Wazirpur Road",
      addressLocality: "Gurgaon",
      addressRegion: "HR",
      postalCode: "122505",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4595",
      longitude: "77.0266",
    },
    areaServed: [
      { "@type": "City", name: "Gurugram, Haryana" },
      { "@type": "City", name: "Gorakhpur, Uttar Pradesh" },
      { "@type": "City", name: "Lucknow, Uttar Pradesh" },
      { "@type": "City", name: "Basti, Uttar Pradesh" },
      { "@type": "City", name: "Deoria, Uttar Pradesh" },
      { "@type": "City", name: "Kushinagar, Uttar Pradesh" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      "https://www.instagram.com/optimaxstudioin/",
      "https://www.linkedin.com/company/optimaxstudio/",
      "https://www.facebook.com/OptimaxStudio.IN",
      "https://x.com/optimaxstudio",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
