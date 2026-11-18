import { cache } from "react";
import { wpFetch } from "./client";
import { readingTimeMinutes, toPlainText } from "./html";
import { services as localServices, type Service } from "@/lib/data/services";
import { industries as localIndustries, type Industry } from "@/lib/data/industries";

/*
 * Content model — mirrors wordpress/optimax-headless.php.
 * Multi-value fields are plain textareas so editors don't need ACF:
 *   list  → one item per line
 *   pairs → one item per line, columns separated by " | "
 */

interface WPItem {
  id: number;
  slug: string;
  date: string;
  modified: string;
  menu_order?: number;
  parent?: number;
  title: { rendered: string };
  content?: { rendered: string };
  excerpt?: { rendered: string };
  meta?: Record<string, unknown>;
  optimax?: {
    featured_image?: { url: string; alt: string; width: number; height: number } | null;
    categories?: string[];
    author?: string;
  };
}

export interface Seo {
  title?: string;
  description?: string;
  ogImage?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  bodyHtml: string;
  category?: string;
  publishedAt: string;
  modifiedAt: string;
  estimatedReadTime: number;
  image?: string;
  imageAlt?: string;
  author?: string;
  authorRole?: string;
  authorBio?: string;
  seo: Seo;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  city?: string;
  result: string;
  metric: string;
  description: string;
  challengeHtml: string;
  publishedAt: string;
  modifiedAt: string;
  heroMetrics: { value: string; label: string }[];
  approachSteps: { title: string; description: string }[];
  results: { value: string; label: string; description: string }[];
  testimonial?: { quote: string; name: string; role: string; company: string };
  image?: string;
  seo: Seo;
}

export type OfficeStatus = "head_office" | "branch" | "remote";

export interface Location {
  id: string;
  slug: string;
  title: string;
  city: string;
  region: string;
  officeStatus: OfficeStatus;
  intro: string;
  bodyHtml: string;
  address?: string;
  postalCode?: string;
  phone?: string;
  hours?: string;
  mapUrl?: string;
  latitude?: string;
  longitude?: string;
  relatedServices: string[];
  faqs: Faq[];
  image?: string;
  modifiedAt: string;
  seo: Seo;
}

export interface CmsPage {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  bodyHtml: string;
  image?: string;
  modifiedAt: string;
  seo: Seo;
}

export type CmsService = Service & { modifiedAt?: string; seo: Seo };
export type CmsIndustry = Industry & { modifiedAt?: string; seo: Seo };

/* ── field parsers ───────────────────────────────────────────── */

function str(item: WPItem, key: string): string {
  const v = item.meta?.[key];
  return typeof v === "string" ? v.trim() : "";
}

function list(item: WPItem, key: string): string[] {
  return str(item, key)
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

function pairs(item: WPItem, key: string, columns: number): string[][] {
  return list(item, key)
    .map((line) => line.split("|").map((c) => c.trim()))
    .filter((cols) => cols[0])
    .map((cols) => Array.from({ length: columns }, (_, i) => cols[i] ?? ""));
}

function faqs(item: WPItem): Faq[] {
  return pairs(item, "faqs", 2)
    .filter(([q, a]) => q && a)
    .map(([question, answer]) => ({ question, answer }));
}

function seo(item: WPItem): Seo {
  return {
    title: str(item, "seo_title") || undefined,
    description: str(item, "seo_description") || undefined,
    ogImage: str(item, "og_image") || item.optimax?.featured_image?.url || undefined,
  };
}

const title = (i: WPItem) => toPlainText(i.title.rendered);
const excerpt = (i: WPItem) => toPlainText(i.excerpt?.rendered);
const html = (i: WPItem) => i.content?.rendered ?? "";
const image = (i: WPItem) => i.optimax?.featured_image?.url || undefined;

/* ── fetching ────────────────────────────────────────────────── */

const FIELDS = "id,slug,date,modified,menu_order,parent,title,content,excerpt,meta,optimax";

const fetchCollection = cache(async (restBase: string, ordered: boolean): Promise<WPItem[] | null> => {
  const order = ordered ? "&orderby=menu_order&order=asc" : "";
  return wpFetch<WPItem[]>(`${restBase}?per_page=100&_fields=${FIELDS}${order}`);
});

/* ── blog posts ──────────────────────────────────────────────── */

function mapPost(i: WPItem): Post {
  const body = html(i);
  return {
    id: String(i.id),
    slug: i.slug,
    title: title(i),
    excerpt: excerpt(i),
    bodyHtml: body,
    category: i.optimax?.categories?.[0],
    publishedAt: i.date,
    modifiedAt: i.modified,
    estimatedReadTime: Number(str(i, "read_time")) || readingTimeMinutes(body),
    image: image(i),
    imageAlt: i.optimax?.featured_image?.alt || undefined,
    author: i.optimax?.author || undefined,
    authorRole: str(i, "author_role") || undefined,
    authorBio: str(i, "author_bio") || undefined,
    seo: seo(i),
  };
}

export async function getPosts(): Promise<Post[]> {
  return ((await fetchCollection("posts", false)) ?? []).map(mapPost);
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return (await getPosts()).find((p) => p.slug === slug);
}

/* ── case studies ────────────────────────────────────────────── */

function mapCaseStudy(i: WPItem): CaseStudy {
  const [quote, name, role, company] = pairs(i, "testimonial", 4)[0] ?? [];
  return {
    id: String(i.id),
    slug: i.slug,
    title: title(i),
    client: str(i, "client_label") || title(i),
    industry: str(i, "industry"),
    city: str(i, "city") || undefined,
    result: str(i, "result"),
    metric: str(i, "metric"),
    description: excerpt(i),
    challengeHtml: html(i),
    publishedAt: i.date,
    modifiedAt: i.modified,
    heroMetrics: pairs(i, "hero_metrics", 2).map(([value, label]) => ({ value, label })),
    approachSteps: pairs(i, "approach_steps", 2).map(([t, description]) => ({ title: t, description })),
    results: pairs(i, "results", 3).map(([value, label, description]) => ({ value, label, description })),
    testimonial: quote ? { quote, name, role, company } : undefined,
    image: image(i),
    seo: seo(i),
  };
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return ((await fetchCollection("case-studies", true)) ?? []).map(mapCaseStudy);
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  return (await getCaseStudies()).find((c) => c.slug === slug);
}

/* ── services (WordPress overrides local data by slug) ───────── */

function mapService(i: WPItem): CmsService {
  const local = localServices.find((s) => s.slug === i.slug);
  const [statValue, statLabel] = pairs(i, "stats", 2)[0] ?? [];
  const process = pairs(i, "process", 2).map(([t, description], n) => ({ step: n + 1, title: t, description }));
  const whatWeDo = list(i, "what_we_do");
  const serviceFaqs = faqs(i);
  return {
    slug: i.slug,
    name: title(i),
    tagline: str(i, "tagline") || local?.tagline || "",
    description: excerpt(i) || local?.description || "",
    icon: str(i, "icon") || local?.icon || "Globe",
    whatWeDo: whatWeDo.length ? whatWeDo : local?.whatWeDo ?? [],
    process: process.length ? process : local?.process ?? [],
    stats: statValue ? { value: statValue, label: statLabel } : local?.stats ?? { value: "", label: "" },
    relatedCaseStudy: local?.relatedCaseStudy,
    faqs: serviceFaqs.length ? serviceFaqs : local?.faqs ?? [],
    modifiedAt: i.modified,
    seo: seo(i),
  };
}

export async function getServices(): Promise<CmsService[]> {
  const remote = ((await fetchCollection("services", true)) ?? []).map(mapService);
  const merged: CmsService[] = localServices.map((s) => remote.find((r) => r.slug === s.slug) ?? { ...s, seo: {} });
  return [...merged, ...remote.filter((r) => !localServices.some((s) => s.slug === r.slug))];
}

export async function getService(slug: string): Promise<CmsService | undefined> {
  return (await getServices()).find((s) => s.slug === slug);
}

/* ── industries (WordPress overrides local data by slug) ─────── */

function mapIndustry(i: WPItem): CmsIndustry {
  const local = localIndustries.find((d) => d.slug === i.slug);
  const pick = (key: string, fallback: string[] = []) => {
    const v = list(i, key);
    return v.length ? v : fallback;
  };
  const solutions = pairs(i, "solutions", 2).map(([t, description]) => ({ title: t, description }));
  const [client, result, metric, description, slug] = pairs(i, "case_study", 5)[0] ?? [];
  const industryFaqs = faqs(i);
  return {
    slug: i.slug,
    name: title(i),
    tagline: str(i, "tagline") || local?.tagline || "",
    description: excerpt(i) || local?.description || "",
    icon: str(i, "icon") || local?.icon || "Briefcase",
    images: pick("images", local?.images),
    painPoints: pick("pain_points", local?.painPoints),
    solutions: solutions.length ? solutions : local?.solutions ?? [],
    relevantServices: pick("relevant_services", local?.relevantServices),
    relevantProducts: pick("relevant_products", local?.relevantProducts),
    faqs: industryFaqs.length ? industryFaqs : local?.faqs ?? [],
    caseStudy: client && slug ? { client, result, metric, description, slug } : local?.caseStudy,
    modifiedAt: i.modified,
    seo: seo(i),
  };
}

export async function getIndustries(): Promise<CmsIndustry[]> {
  const remote = ((await fetchCollection("industries", true)) ?? []).map(mapIndustry);
  const merged: CmsIndustry[] = localIndustries.map((d) => remote.find((r) => r.slug === d.slug) ?? { ...d, seo: {} });
  return [...merged, ...remote.filter((r) => !localIndustries.some((d) => d.slug === r.slug))];
}

export async function getIndustry(slug: string): Promise<CmsIndustry | undefined> {
  return (await getIndustries()).find((d) => d.slug === slug);
}

/* ── locations (WordPress only — no placeholder city pages) ──── */

const OFFICE_STATUSES: OfficeStatus[] = ["head_office", "branch", "remote"];

function mapLocation(i: WPItem): Location {
  const status = str(i, "office_status") as OfficeStatus;
  return {
    id: String(i.id),
    slug: i.slug,
    title: title(i),
    city: str(i, "city") || title(i),
    region: str(i, "region"),
    officeStatus: OFFICE_STATUSES.includes(status) ? status : "remote",
    intro: excerpt(i),
    bodyHtml: html(i),
    address: str(i, "address") || undefined,
    postalCode: str(i, "postal_code") || undefined,
    phone: str(i, "phone") || undefined,
    hours: str(i, "hours") || undefined,
    mapUrl: str(i, "map_url") || undefined,
    latitude: str(i, "latitude") || undefined,
    longitude: str(i, "longitude") || undefined,
    relatedServices: list(i, "related_services"),
    faqs: faqs(i),
    image: image(i),
    modifiedAt: i.modified,
    seo: seo(i),
  };
}

export async function getLocations(): Promise<Location[]> {
  return ((await fetchCollection("locations", true)) ?? []).map(mapLocation);
}

export async function getLocation(slug: string): Promise<Location | undefined> {
  return (await getLocations()).find((l) => l.slug === slug);
}

/* ── generic pages ───────────────────────────────────────────── */

function mapPage(i: WPItem): CmsPage {
  return {
    id: String(i.id),
    slug: i.slug,
    title: title(i),
    excerpt: excerpt(i),
    bodyHtml: html(i),
    image: image(i),
    modifiedAt: i.modified,
    seo: seo(i),
  };
}

export async function getPages(): Promise<CmsPage[]> {
  return ((await fetchCollection("pages", true)) ?? []).filter((i) => !i.parent).map(mapPage);
}

export async function getPage(slug: string): Promise<CmsPage | undefined> {
  return (await getPages()).find((p) => p.slug === slug);
}

/* ── FAQs (grouped, e.g. "home") ─────────────────────────────── */

export async function getFaqs(group: string): Promise<Faq[]> {
  return ((await fetchCollection("faqs", true)) ?? [])
    .filter((i) => str(i, "faq_group") === group)
    .map((i) => ({ question: title(i), answer: toPlainText(html(i)) }))
    .filter((f) => f.question && f.answer);
}
