import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Optimax Studio",
  description:
    "Join Optimax Studio. We're always looking for talented designers, developers, and marketers who want to build digital products that matter.",
  alternates: {
    canonical: "https://optimaxstudio.com/careers",
  },
};

const perks = [
  "Flexible remote + hybrid work options",
  "Competitive salary + performance bonuses",
  "Paid time off and sick leave",
  "Learning budget for courses and conferences",
  "Direct client exposure from day one",
  "Fast growth — we promote from within",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Join the Team"
        subtitle="We're building the future of digital services in India. If you're obsessed with quality, speed, and results — you'll fit right in."
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Why Work Here */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Why Work at Optimax Studio
            </h2>
            <div className="space-y-4 text-base text-muted leading-relaxed max-w-3xl">
              <p>
                We're a small, high-performing team that moves fast and ships
                constantly. No corporate bureaucracy, no endless meetings — just
                smart people solving real problems for real businesses.
              </p>
              <p>
                Every team member gets direct ownership of their work. Designers
                talk to clients. Developers deploy to production. Marketers see
                the revenue impact of their campaigns. You'll grow faster here
                than at a company 10x our size.
              </p>
            </div>
          </FadeIn>

          {/* Perks */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Perks & Benefits
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-alt px-5 py-3 text-sm text-text"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {perk}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Open Positions */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Open Positions
            </h2>
            <div className="rounded-2xl border border-border bg-surface-alt p-8 text-center">
              <p className="text-base text-muted mb-2">
                We don't have any open roles right now.
              </p>
              <p className="text-sm text-muted">
                We're always happy to hear from great people. Send your resume
                and portfolio to{" "}
                <a
                  href="mailto:hello@optimaxstudio.com"
                  className="text-accent hover:underline"
                >
                  hello@optimaxstudio.com
                </a>{" "}
                and we'll reach out when something opens up.
              </p>
            </div>
          </FadeIn>

          {/* How to Apply */}
          <FadeIn className="mb-16">
            <div className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
              <h3 className="text-lg font-semibold text-text font-display mb-3">
                Don't see a fit?
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                We're always open to meeting talented people. If you think you can
                add value to our team, send us an email with your resume, a short
                note on what you'd like to do, and any relevant work samples.
              </p>
              <a
                href="mailto:hello@optimaxstudio.com?subject=Careers%20at%20Optimax%20Studio"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
              >
                <Mail className="h-4 w-4" />
                Send Your Resume
              </a>
            </div>
          </FadeIn>

          <BottomCTA
            title="Have a question about careers?"
            subtitle="Reach out and we'll get back to you within 24 hours."
            buttonText="Contact Us"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}
