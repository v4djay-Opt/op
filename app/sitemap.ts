import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { getAllFallbackPostSlugs } from "@/lib/data/blog-fallback";
import { getAllFallbackCaseStudySlugs } from "@/lib/data/casestudy-fallback";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://optimax.studio";
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.8 },
    { path: "/industries", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/case-studies", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
  ];

  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...getAllFallbackPostSlugs().map((s) => `/blog/${s}`),
    ...getAllFallbackCaseStudySlugs().map((s) => `/case-studies/${s}`),
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),
    ...dynamicRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
