import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { cmsMetadata } from "@/lib/seo";
import { RESERVED_SLUGS } from "@/lib/site";
import { getPage, getPages } from "@/lib/wordpress/content";

async function findPage(slug: string) {
  return RESERVED_SLUGS.has(slug) ? undefined : getPage(slug);
}

export async function generateStaticParams() {
  return (await getPages()).filter((p) => !RESERVED_SLUGS.has(p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await findPage(slug);
  if (!page) return { title: "Not Found" };
  return cmsMetadata({
    path: `/${page.slug}`,
    title: page.title,
    description: page.excerpt,
    seo: page.seo,
    image: page.image,
  });
}

export default async function CmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await findPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero title={page.title} subtitle={page.excerpt || undefined} green breadcrumbs={[{ label: page.title }]} />

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
          </FadeIn>
          <BottomCTA />
        </div>
      </section>
    </>
  );
}
