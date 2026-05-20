import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { sanityFetch } from "@/lib/sanity/client";
import { caseStudiesQuery } from "@/lib/sanity/queries";
import { fallbackCaseStudies } from "@/lib/data/casestudy-fallback";
import { CaseStudyGrid } from "./CaseStudyGrid";

export const metadata: Metadata = {
  title: "Case Studies — Optimax Studio",
  description:
    "See how we have helped businesses across industries achieve measurable growth with digital solutions.",
};

interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string } | string;
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  image?: string;
}

export default async function CaseStudiesPage() {
  const sanityData = await sanityFetch<CaseStudy[]>(caseStudiesQuery);
  const cases: CaseStudy[] = sanityData || (fallbackCaseStudies as CaseStudy[]);

  return (
    <>
      <PageHero
        label="Results"
        title="Case Studies That Speak for Themselves"
        subtitle="Real numbers, real businesses, real impact. See how Optimax delivers measurable growth."
        green
        breadcrumbs={[{ label: "Case Studies" }]}
      />

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl">
          <CaseStudyGrid cases={cases} />
        </div>
      </section>
    </>
  );
}
