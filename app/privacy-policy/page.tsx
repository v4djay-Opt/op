import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Optimax Studio — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-3xl prose-invert">
          <p>Last updated: May 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            When you use our contact form, schedule a call, or purchase a product, we collect
            your name, email address, phone number, and any additional information you provide.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To process payments via Razorpay.</li>
            <li>To send project updates and relevant communications.</li>
            <li>To improve our website and services.</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>
            We do not sell or rent your personal information. We may share data with trusted
            third-party services (Resend for email, Razorpay for payments, Google Analytics
            for website analytics) solely to provide our services.
          </p>

          <h2>4. Cookies</h2>
          <p>
            We use essential cookies for site functionality and analytics cookies to understand
            how visitors use our website. You can disable cookies in your browser settings.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. However,
            no method of transmission over the Internet is 100% secure.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data by
            contacting us at{" "}
            <a href="mailto:hello@optimax.studio">hello@optimax.studio</a>.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on
            this page with an updated revision date.
          </p>

          <h2>8. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:hello@optimax.studio">hello@optimax.studio</a>.
          </p>
        </div>
      </section>
    </>
  );
}
