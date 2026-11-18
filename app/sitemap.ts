import type { MetadataRoute } from "next";
import { RESERVED_SLUGS, SITE_URL } from "@/lib/site";
import {
  getCaseStudies,
  getIndustries,
  getLocations,
  getPages,
  getPosts,
  getServices,
} from "@/lib/wordpress/content";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, industries, posts, caseStudies, locations, pages] = await Promise.all([
    getServices(),
    getIndustries(),
    getPosts(),
    getCaseStudies(),
    getLocations(),
    getPages(),
  ]);

  const entry = (path: string, priority: number, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
    priority,
  });

  return [
    entry("", 1),
    entry("/services", 0.9),
    entry("/contact", 0.9),
    entry("/industries", 0.8),
    entry("/about", 0.7),
    entry("/pricing", 0.6),
    entry("/blog", 0.7),
    entry("/case-studies", 0.7),
    entry("/careers", 0.3),
    entry("/privacy-policy", 0.2),
    entry("/terms", 0.2),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9, s.modifiedAt)),
    ...(locations.length ? [entry("/locations", 0.7)] : []),
    ...locations.map((l) => entry(`/locations/${l.slug}`, 0.9, l.modifiedAt)),
    ...industries.map((i) => entry(`/industries/${i.slug}`, 0.7, i.modifiedAt)),
    ...caseStudies.map((c) => entry(`/case-studies/${c.slug}`, 0.6, c.modifiedAt)),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.6, p.modifiedAt)),
    ...pages.filter((p) => !RESERVED_SLUGS.has(p.slug)).map((p) => entry(`/${p.slug}`, 0.5, p.modifiedAt)),
  ];
}
