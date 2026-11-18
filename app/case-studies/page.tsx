import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { getCaseStudies } from "@/lib/wordpress/content";
import { CaseStudyGrid } from "./CaseStudyGrid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how we have helped businesses across industries achieve measurable growth with digital solutions.",
  alternates: { canonical: "/case-studies" },
};

export default async function CaseStudiesPage() {
  const cases = await getCaseStudies();

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
