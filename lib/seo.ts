import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import type { Seo } from "@/lib/wordpress/content";

function clamp(text: string, max = 160): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

/** Metadata for CMS-driven pages; editor SEO fields win over derived values. */
export function cmsMetadata({
  path,
  title,
  description,
  seo,
  image,
  article,
}: {
  path: string;
  title: string;
  description: string;
  seo?: Seo;
  image?: string;
  article?: { publishedTime: string; modifiedTime: string; authors?: string[] };
}): Metadata {
  const metaTitle = seo?.title || title;
  const metaDescription = clamp(seo?.description || description);
  const ogImage = seo?.ogImage || image;
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${metaTitle} | ${SITE_NAME}`,
      description: metaDescription,
      url: path,
      siteName: SITE_NAME,
      ...(article ? { type: "article", ...article } : { type: "website" }),
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
