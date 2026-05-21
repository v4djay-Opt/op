"use client";

export function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.optimaxstudio.com/#localbusiness",
    name: "Optimax Studio",
    url: "https://www.optimaxstudio.com",
    telephone: "+91-8957079052",
    email: "Hello@optimaxstudio.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F104, GLS Crown Avenue, Sector 92",
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
    areaServed: {
      "@type": "Place",
      name: "Gurgaon, Haryana, India",
    },
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
