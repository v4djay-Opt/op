export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://optimaxstudio.com").replace(/\/+$/, "");

export const SITE_NAME = "Optimax Studio";

/** Top-level routes implemented in app/ — a WordPress page with the same slug is never rendered. */
export const RESERVED_SLUGS = new Set([
  "about",
  "blog",
  "careers",
  "case-studies",
  "contact",
  "industries",
  "locations",
  "payment",
  "pricing",
  "privacy-policy",
  "services",
  "terms",
  "api",
]);
