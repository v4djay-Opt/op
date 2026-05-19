import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyOptimax } from "@/components/sections/WhyOptimax";
import {
  IconLayoutDashboard,
  IconSearch,
  IconSpeakerphone,
  IconBrush,
  IconShoppingCart,
  IconFileText,
} from "@tabler/icons-react";
import { Lightbulb, Users, Target, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://optimaxstudio.com";

export const metadata: Metadata = {
  title: "About Us | Optimaxstudio – Full-Service Digital Agency",
  description:
    "Optimaxstudio is a full-service digital agency helping startups, e-commerce brands, and businesses worldwide. Web design, SEO, branding & more.",
  keywords:
    "full-service digital agency, web design and development, SEO services, branding agency, digital marketing agency, e-commerce solutions, startup-friendly agency, international digital agency, Optimaxstudio",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Optimaxstudio – Full-Service Digital Agency",
    description:
      "Optimaxstudio is a full-service digital agency helping startups, e-commerce brands, and businesses worldwide.",
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "Optimax Studio",
    locale: "en_IN",
  },
};

/* ── JSON-LD ── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Optimaxstudio",
  url: SITE_URL,
  description:
    "Full-service digital agency offering web design, development, SEO, branding, and digital marketing.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit No F104, Crown Avenue, Sector 92",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    postalCode: "122505",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-89570-79052",
    contactType: "sales",
    areaServed: ["IN", "US", "GB", "AE"],
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://x.com/optimaxstudio",
    "https://www.linkedin.com/company/optimaxstudio/",
    "https://www.instagram.com/optimaxstudioin/",
    "https://www.facebook.com/OptimaxStudio.IN",
  ],
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Optimaxstudio",
  url: `${SITE_URL}/about`,
  mainEntity: orgSchema,
};

const services = [
  {
    title: "Web Design & Development",
    desc: "Fast, beautiful, mobile-ready websites built to convert. Our web design and development services use Next.js, Tailwind, and modern stacks — SEO-ready from day one.",
    Icon: IconLayoutDashboard,
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Get found on Google by the right people at the right time. Our SEO services include technical SEO, content strategy, and link building to rank and drive organic traffic.",
    Icon: IconSearch,
  },
  {
    title: "Digital Marketing",
    desc: "Social media, paid ads, and email campaigns that drive real growth. Full-funnel campaigns across Google Ads, Meta, and LinkedIn optimised for cost per lead.",
    Icon: IconSpeakerphone,
  },
  {
    title: "Graphic Design & Branding",
    desc: "Logos, brand identities, and visuals that make you memorable. We create cohesive brand systems that stand out in crowded markets.",
    Icon: IconBrush,
  },
  {
    title: "E-commerce Solutions",
    desc: "Online stores built for sales, speed, and seamless shopping. Our e-commerce solutions help you convert visitors into loyal customers.",
    Icon: IconShoppingCart,
  },
  {
    title: "Content Strategy",
    desc: "Words and visuals that connect with your audience and rank on search. We plan content that builds authority and drives engagement.",
    Icon: IconFileText,
  },
];

const values = [
  {
    title: "We listen first",
    desc: "Every project starts with understanding your goals, your audience, and your vision. No cookie-cutter solutions here.",
    icon: Users,
  },
  {
    title: "We're a full-service team",
    desc: "You don't need to manage five different vendors. Strategy, design, development, marketing — we do it all under one roof.",
    icon: Lightbulb,
  },
  {
    title: "We work globally",
    desc: "Our clients are based in India, the US, UK, UAE, and beyond. We understand diverse markets and build solutions that work worldwide.",
    icon: Rocket,
  },
  {
    title: "We're results-driven",
    desc: "Pretty designs are great, but we care more about what those designs actually do for your business — traffic, leads, and sales.",
    icon: Target,
  },
  {
    title: "We keep it simple",
    desc: "No confusing jargon, no unnecessary complexity. We communicate clearly and keep you in the loop at every step.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(aboutSchema)}
      </script>

      <PageHero
        label="Company"
        title="Turning Ideas into Digital Masterpieces"
        subtitle="We're Optimaxstudio — a passionate team of designers, developers, and digital strategists who believe every great business deserves an equally great online presence. Whether you're a scrappy startup finding your footing or an established brand ready to scale globally, we're here to make it happen."
        subtitleClassName="mt-4 md:mt-6 text-base md:text-lg text-muted max-w-[600px] mx-auto leading-[1.8] text-center"
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Who We Are */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Who We Are
            </h2>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f012c6c71?auto=format&fit=crop&w=1200&q=80"
              alt="Optimaxstudio diverse creative team collaborating in a modern minimal office"
              className="w-full rounded-xl mb-8 object-cover aspect-[21/9]"
              loading="lazy"
            />
            <div className="space-y-4 text-base text-muted leading-relaxed max-w-3xl">
              <p>
                At Optimaxstudio, we're not just another{" "}
                <strong>full-service digital agency</strong> — we're your creative
                and tech partner. From crafting stunning websites to running
                powerful marketing campaigns, we handle everything under one roof
                so you can focus on what you do best: running your business.
              </p>
              <p>
                We work with small businesses, growing startups, e-commerce
                brands, and mid-size companies across the world. Our team brings
                together creativity, strategy, and technology to deliver
                results that actually matter. As a{" "}
                <strong>startup-friendly agency</strong>, we understand tight
                budgets and big ambitions — and we build solutions that grow
                with you.
              </p>
              <p>
                Based in Gurgaon, India, we serve clients across Delhi NCR,
                Mumbai, Bangalore, and internationally — including the US, UK, and
                UAE. Our <strong>international digital agency</strong> experience
                means we understand diverse markets and build solutions that work
                worldwide.
              </p>
            </div>
          </FadeIn>

          {/* What We Do */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Everything Your Brand Needs, Under One Roof
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl mb-6">
              We offer end-to-end digital solutions tailored to your goals. As a
              leading <strong>digital marketing agency</strong> and{" "}
              <strong>branding agency</strong>, our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-surface-alt p-5"
                >
                  <item.Icon
                    className="mb-3 text-accent"
                    size={24}
                    stroke={1.5}
                  />
                  <h3 className="text-sm font-semibold text-text font-display mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Why Choose Us */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Why Businesses Trust Optimaxstudio
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-3xl mb-6">
              We know you have options — and we don't take your trust lightly.
              Here's what makes Optimaxstudio different:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-card"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text font-display mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <WhyOptimax />

          <HowItWorks />

          {/* Our Mission */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Mission
            </h2>
            <div className="rounded-2xl border border-border bg-surface-alt p-6 md:p-8">
              <p className="text-lg text-text font-display font-medium leading-relaxed mb-4">
                To help businesses of every size show up powerfully online — with
                design that inspires, technology that performs, and strategy that
                grows.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Whether you need a <strong>branding agency</strong> to redefine
                your identity, a <strong>digital marketing agency</strong> to
                scale your reach, or a team for{" "}
                <strong>web design and development</strong> that converts —
                Optimaxstudio is built to deliver.
              </p>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Vision
            </h2>
            <div className="space-y-4 text-base text-muted leading-relaxed max-w-3xl">
              <p>
                We envision a world where every business — no matter how big or
                small — has access to world-class digital tools and expertise to
                compete, connect, and thrive.
              </p>
              <p>
                From <strong>e-commerce solutions</strong> for growing brands to{" "}
                <strong>SEO services</strong> that level the playing field against
                bigger competitors, we believe technology should be a force
                multiplier for every entrepreneur.
              </p>
            </div>
          </FadeIn>

          {/* Office */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Office
            </h2>
            <div className="rounded-2xl border border-border overflow-hidden mb-6">
              <iframe
                title="Optimax Studio Office Location"
                src="https://maps.google.com/maps?q=F104+Crown+Avenue+Sector+93+Gurgaon+122505&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface-alt p-5">
                <h3 className="text-sm font-semibold text-text font-display mb-1">
                  Address
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  F104, Crown Avenue, Sector 93, Gurgaon — 122505
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface-alt p-5">
                <h3 className="text-sm font-semibold text-text font-display mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+918957079052"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  +91 89570 79052
                </a>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn className="mb-16">
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-card text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-base text-muted leading-relaxed max-w-2xl mx-auto mb-6">
                Let's talk about your project. Whether you have a detailed brief
                or just a rough idea, we'd love to hear from you. Our team is
                friendly, responsive, and ready to help you take the next step.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
                >
                  Get a Free Consultation
                  <Rocket className="h-5 w-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-alt px-8 py-4 text-base font-semibold text-text transition-all hover:bg-white hover:shadow-card"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}
