import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | Optimax Studio",
  description:
    "Terms of Service for Optimax Studio — governing the use of our website, services, and products.",
  alternates: {
    canonical: "https://optimaxstudio.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Service" />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-3xl prose-invert">
          <p>Last updated: May 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Optimax Studio website, services, or
            products, you agree to be bound by these Terms of Service. If you do
            not agree with any part of these terms, you must not use our
            services.
          </p>

          <h2>2. Services</h2>
          <p>
            Optimax Studio provides digital services including but not limited
            to web design, web development, digital marketing, social media
            management, SEO, and custom software development. Specific terms for
            each engagement are outlined in individual service agreements or
            contracts signed with the client.
          </p>

          <h2>3. Payments & Refunds</h2>
          <ul>
            <li>
              Payment terms are defined in the project contract or invoice.
            </li>
            <li>
              For product purchases, all sales are final unless otherwise stated.
            </li>
            <li>
              Refund requests for services are evaluated on a case-by-case basis
              and must be submitted in writing within 14 days of the disputed
              charge.
            </li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, designs, code, and materials created by Optimax Studio
            remain our intellectual property until full payment is received.
            Upon full payment, ownership of deliverables is transferred to the
            client as specified in the service agreement. Third-party assets
            (stock photos, fonts, plugins) may be subject to their own licenses.
          </p>

          <h2>5. Client Responsibilities</h2>
          <ul>
            <li>
              Provide accurate and complete information required for project
              execution.
            </li>
            <li>
              Respond to feedback and approval requests in a timely manner.
            </li>
            <li>
              Ensure they have the legal right to use any content, logos, or
              materials they provide to us.
            </li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            Optimax Studio shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services or
            website. Our total liability is limited to the amount paid by the
            client for the specific service in question.
          </p>

          <h2>7. Termination</h2>
          <p>
            Either party may terminate a service agreement with written notice.
            Clients remain liable for all fees incurred up to the termination
            date. Work completed but not yet paid for must be settled before
            deliverables are handed over.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall
            be subject to the exclusive jurisdiction of the courts in Gurgaon,
            Haryana.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Changes will
            be posted on this page with an updated revision date. Continued use
            of our services after changes constitutes acceptance of the new terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have questions about these Terms of Service, please contact us
            at{" "}
            <a href="mailto:hello@optimaxstudio.com">hello@optimaxstudio.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
