import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  CheckCircle2,
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  Zap,
  Users,
  Code2,
} from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://optimaxstudio.com";

export const metadata: Metadata = {
  title: "Website Development Company in India",
  description:
    "Looking for a reliable website development company? Optimax Studio builds custom, SEO-ready websites for businesses across India. Get a free consultation.",
  alternates: {
    canonical: `${SITE_URL}/services/web-design-development`,
  },
  openGraph: {
    title: "Website Development Company in India | Optimax Studio",
    description:
      "Looking for a reliable website development company? Optimax Studio builds custom, SEO-ready websites for businesses across India. Get a free consultation.",
    type: "website",
    url: `${SITE_URL}/services/web-design-development`,
    siteName: "Optimax Studio",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/og/web-design.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in India | Optimax Studio",
    description:
      "Looking for a reliable website development company? Optimax Studio builds custom, SEO-ready websites for businesses across India. Get a free consultation.",
    images: [`${SITE_URL}/og/web-design.jpg`],
  },
};

/* ── JSON-LD schemas ── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Company",
  description:
    "Optimax Studio is a professional website development company offering custom website design and development services for startups, e-commerce brands, and businesses across India.",
  provider: {
    "@type": "Organization",
    name: "Optimax Studio",
    url: SITE_URL,
    telephone: "+91-89570-79052",
    email: "hello@optimaxstudio.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F104, Crown Avenue, Sector 93",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122505",
      addressCountry: "IN",
    },
  },
  areaServed: "India",
  serviceType: "Web Design and Development",
  offers: [
    { "@type": "Offer", name: "Starter Website", priceCurrency: "INR", price: "25000" },
    { "@type": "Offer", name: "Business Website", priceCurrency: "INR", price: "50000" },
    { "@type": "Offer", name: "Ecommerce Website", priceCurrency: "INR", price: "80000" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Optimax Studio the best website development company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optimax Studio combines modern design, clean code, and SEO best practices to deliver websites that look great and rank on Google. We've built 40+ websites for businesses across India and internationally.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ecommerce website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a full-service ecommerce website development company. We build on Next.js, Shopify, and WooCommerce depending on your business needs.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our website development packages start at Rs. 25,000 for a starter site. Custom and ecommerce websites are priced based on scope. Book a free call to get an exact quote.",
      },
    },
    {
      "@type": "Question",
      name: "Are your websites mobile-friendly and SEO-ready?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every website we build is fully responsive and optimized for search engines from day one — fast loading, clean code, and proper meta tags.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide website development services near me in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are based in Gurgaon, Haryana, and serve clients locally across Delhi NCR as well as remotely across India and internationally.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Web Design & Development",
    },
  ],
};

/* ── page data ── */
const services = [
  {
    icon: Code2,
    title: "Custom Website Development Services",
    description:
      "Built from scratch around your brand and goals. No templates, no shortcuts — purpose-written code for maximum performance and conversion.",
  },
  {
    icon: Smartphone,
    title: "Responsive UI/UX Design",
    description:
      "Mobile-first design ensures your site performs flawlessly on every device. Pixel-perfect across all major browsers and screen sizes.",
  },
  {
    icon: Zap,
    title: "Performance & Core Web Vitals Optimization",
    description:
      "Performance-optimized builds with fast load times, clean semantic code, and an SEO-ready architecture baked in from day one.",
  },
  {
    icon: Globe,
    title: "CMS Integration (Sanity, WordPress, Custom)",
    description:
      "Update your content without touching code. We set up, migrate, and train your team on the CMS that fits your workflow.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Website Development",
    description:
      "Shopify, WooCommerce, or Next.js stores with conversion-optimized checkout, inventory management, and payment gateway integration.",
  },
  {
    icon: Users,
    title: "Website Redesign & Migration",
    description:
      "Audit, redesign, and migrate your existing site with zero downtime — delivering a faster, scalable, higher-converting result.",
  },
];

const process = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We analyze your business, competitors, and target audience to define a results-driven strategy.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Wireframes and high-fidelity mockups crafted for conversion, with your feedback at every stage.",
  },
  {
    step: 3,
    title: "Develop",
    description:
      "Clean, scalable, performance-optimized code using Next.js or the best-fit stack for your goals.",
  },
  {
    step: 4,
    title: "Launch & Optimize",
    description:
      "Deploy, monitor Core Web Vitals, and continuously improve for growth post-launch.",
  },
];

const stats = [
  { value: "3x", label: "Average Conversion Lift" },
  { value: "2–4 Weeks", label: "Average Delivery Time" },
  { value: "40+", label: "Websites Delivered" },
];

const pricing = [
  {
    plan: "Starter",
    price: "Rs. 25,000",
    badge: null as string | null,
    description: "Perfect for startups and personal brands.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "On-page SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "2-week delivery",
    ],
    cta: "Get Started",
  },
  {
    plan: "Business",
    price: "Rs. 50,000",
    badge: "Most Popular" as string | null,
    description: "Ideal for growing SMBs and service companies.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS integration (Sanity/WordPress)",
      "Blog setup",
      "Performance optimization",
      "Google Analytics + Search Console",
      "3 rounds of revisions",
    ],
    cta: "Get Started",
  },
  {
    plan: "Ecommerce",
    price: "Rs. 80,000",
    badge: null as string | null,
    description: "Full-featured ecommerce website development.",
    features: [
      "Shopify or Next.js store",
      "Product catalogue up to 500 items",
      "Payment gateway (Razorpay/Stripe)",
      "Inventory & order management",
      "Mobile-first checkout",
      "SEO + speed optimization",
      "Post-launch support (30 days)",
    ],
    cta: "Get a Quote",
  },
];

const whoWeServe = [
  {
    label: "Startups & Founders",
    desc: "Launch fast with a conversion-ready, scalable website built for growth.",
  },
  {
    label: "E-commerce Brands",
    desc: "Sell more with a performance-optimized online store designed to convert.",
  },
  {
    label: "Service Businesses",
    desc: "Generate leads with a business website built around inquiry and trust.",
  },
  {
    label: "Enterprises & Corporates",
    desc: "End-to-end portals and web applications built to scale with your team.",
  },
];

const portfolio = [
  { name: "EduPro Academy", industry: "Education", slug: "edupro-academy" },
  { name: "FitLife Gym", industry: "Fitness", slug: "fitlife-gym" },
  { name: "Prime Realty", industry: "Real Estate", slug: "prime-realty" },
];

const faqs = [
  {
    question:
      "What makes Optimax Studio the best website development company in India?",
    answer:
      "Optimax Studio combines modern design, clean code, and SEO best practices to deliver websites that look great and rank on Google. We've built 40+ websites for businesses across India and internationally.",
  },
  {
    question: "Do you offer ecommerce website development?",
    answer:
      "Yes. We are a full-service ecommerce website development company. We build on Next.js, Shopify, and WooCommerce depending on your business needs.",
  },
  {
    question: "How much does website development cost?",
    answer:
      "Our website development packages start at Rs. 25,000 for a starter site. Custom and ecommerce websites are priced based on scope. Book a free call to get an exact quote.",
  },
  {
    question: "Are your websites mobile-friendly and SEO-ready?",
    answer:
      "Absolutely. Every website we build is fully responsive and optimized for search engines from day one — fast loading, clean code, and proper meta tags.",
  },
  {
    question: "Do you provide website development services near me in Gurgaon?",
    answer:
      "Yes. We are based in Gurgaon, Haryana, and serve clients locally across Delhi NCR as well as remotely across India and internationally.",
  },
];

const interlinks = [
  {
    label: "Digital Marketing Services",
    href: "/services/digital-marketing",
    desc: "ROI-focused paid and organic campaigns that drive qualified leads.",
  },
  {
    label: "SEO Services in India",
    href: "/services/seo",
    desc: "Technical and content SEO to rank above your competitors on Google.",
  },
  {
    label: "Social Media Management Agency",
    href: "/services/social-media-management",
    desc: "Instagram, LinkedIn, and Facebook content, Reels, and community growth.",
  },
  {
    label: "Custom CRM Development",
    href: "/services/crm-custom-portals",
    desc: "Automate your sales, ops, and client workflows with a custom CRM.",
  },
  {
    label: "Industries We Serve",
    href: "/industries",
    desc: "Tailored digital solutions for real estate, education, healthcare, and more.",
  },
  {
    label: "Our Work",
    href: "/case-studies",
    desc: "Real results from real businesses — case studies that prove the impact.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-nature-sky/30 to-background" />
        </div>
        {/* img: alt="website development company team at Optimax Studio" */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: "Web Design & Development" },
              ]}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent font-display mb-4 mt-2">
              Service
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text font-display leading-tight">
              Website Development Company That Builds for Results
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Custom, SEO-ready websites for startups, e-commerce brands, and
              growing businesses across India.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://cal.com/optimax-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/5"
              >
                View Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">

          {/* Intro — first 100 words: website development company, web development agency, custom website development services */}
          <FadeIn>
            <p className="text-lg text-muted leading-relaxed mb-16">
              Optimax Studio is a trusted{" "}
              <strong>website development company</strong> helping startups,
              e-commerce brands, and growing businesses build powerful digital
              experiences. As a full-service{" "}
              <strong>web development agency</strong>, we design, develop, and
              launch SEO-ready, high-performance websites tailored to your goals
              — on time and within budget. Our end-to-end{" "}
              <strong>custom website development services</strong> cover
              everything from UI/UX design and responsive development to CMS
              integration, ecommerce functionality, and post-launch growth
              optimization.
            </p>
          </FadeIn>

          {/* H2: Why Choose a Professional Web Development Agency? */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Why Choose a Professional Web Development Agency?
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Not all websites are built equal. A{" "}
              <strong>professional web development agency</strong> like Optimax
              Studio delivers more than a pretty design — we build scalable,
              conversion-focused digital assets that generate real ROI. Here's
              why businesses across India call us the{" "}
              <strong>best website development company</strong> for their
              growth:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Results-Driven Design",
                  desc: "Every layout, color, and CTA is informed by conversion data — not guesswork.",
                },
                {
                  title: "Performance-Optimized Code",
                  desc: "We write clean, scalable code that scores 90+ on Google PageSpeed and passes Core Web Vitals.",
                },
                {
                  title: "SEO Built In From Day One",
                  desc: "Proper meta structure, schema markup, and sitemap setup before your first line of content.",
                },
                {
                  title: "White-Glove Delivery Process",
                  desc: "A dedicated project manager, clear milestones, and zero surprise invoices.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-text block mb-1">
                      {item.title}
                    </span>
                    <span className="text-xs text-muted leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* H2: Our Website Design and Development Services */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Our Website Design and Development Services
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Our <strong>website design and development services</strong> are
              built around your specific business goals — not a cookie-cutter
              template. Every solution is responsive, performance-optimized, and
              ready to rank.
            </p>
            {/* img: alt="custom website development services India" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-text block mb-1">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* H2: Custom Website Development for Every Business */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Custom Website Development for Every Business
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              We are a <strong>business website development company</strong>{" "}
              that serves clients across industries. Whether you're a founder
              validating an idea or a 200-person enterprise, our end-to-end
              custom website development scales with your ambitions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whoWeServe.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-accent/10 bg-accent/5 p-5"
                >
                  <h3 className="text-sm font-semibold text-text font-display mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* H2: Ecommerce Website Development Company You Can Trust */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Ecommerce Website Development Company You Can Trust
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              As a dedicated{" "}
              <strong>ecommerce website development company</strong>, we build
              online stores that convert browsers into buyers. Our ecommerce
              builds are mobile-first, performance-optimized, and designed
              around your customer's checkout journey.
            </p>
            <p className="text-base text-muted leading-relaxed">
              We are a <strong>Shopify website development company</strong> as
              well as a Next.js and WooCommerce partner — we recommend the
              platform that best fits your catalogue size, budget, and growth
              roadmap. Every store includes SEO setup, Razorpay or Stripe
              payment integration, and inventory automation built in.
            </p>
          </FadeIn>

          {/* Our Process */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Our Process
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {process.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-navy-800/40 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold font-display">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text font-display">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* img: alt="professional web development agency portfolio" */}
              <div className="rounded-2xl border border-border bg-surface-alt overflow-hidden">
                <div className="h-64 lg:h-full flex items-center justify-center">
                  <span className="text-muted text-sm font-medium">
                    Web Design Process
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stats Strip */}
          <FadeIn className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent font-display">
                    {stat.value}
                  </div>
                  <div className="text-muted mt-2 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* H2: Affordable Website Development — Transparent Pricing */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Affordable Website Development — Transparent Pricing
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              As an <strong>affordable website development company</strong>, we
              believe great websites shouldn't cost a fortune. Our packages are
              priced transparently — no hidden fees, no surprise invoices.
              Choose the plan that fits your goals or{" "}
              <Link
                href="/contact"
                className="text-accent hover:underline font-medium"
              >
                get in touch
              </Link>{" "}
              for a custom quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.map((plan) => (
                <div
                  key={plan.plan}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    plan.badge === "Most Popular"
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-white shadow-card"
                  }`}
                >
                  {plan.badge && (
                    <span className="self-start mb-3 inline-block rounded-full bg-accent text-white text-xs font-semibold px-3 py-1">
                      {plan.badge}
                    </span>
                  )}
                  <span className="text-sm font-medium text-muted">
                    {plan.plan}
                  </span>
                  <div className="mt-1 text-3xl font-bold text-text font-display">
                    {plan.price}
                  </div>
                  <p className="text-xs text-muted mt-1 mb-4">
                    {plan.description}
                  </p>
                  <ul className="mb-6 space-y-2.5 flex-1">
                    {plan.features.map((f, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://cal.com/optimax-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      plan.badge === "Most Popular"
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "border border-accent/30 text-accent hover:bg-accent/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* H2: Responsive Website Development Company in Gurgaon & Beyond */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-4">
              Responsive Website Development Company in Gurgaon & Beyond
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              As a <strong>responsive website development company</strong>{" "}
              based in Gurgaon, Haryana, we build every website to look and
              perform flawlessly on mobile, tablet, and desktop. With Google's
              mobile-first indexing, a responsive build isn't optional — it's
              the foundation of your SEO and conversion strategy.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Searching for a{" "}
              <strong>website development company near me</strong> in Gurgaon
              or Delhi NCR? We're located at Sector 93, Gurgaon and serve
              clients across Delhi NCR in person, and across India and
              internationally via remote collaboration. Same quality. Same
              process. Wherever you are.
            </p>
          </FadeIn>

          {/* Recent Work */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Recent Work
            </h2>
            {/* img: alt="web development agency Gurgaon Optimax Studio team" */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {portfolio.map((project) => (
                <div
                  key={project.slug}
                  className="group overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all hover:shadow-lg hover:-translate-y-1.5"
                >
                  <div
                    className="relative aspect-[16/10] bg-surface-alt overflow-hidden"
                    aria-label={`custom website development services India — ${project.name}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-muted text-sm font-medium">
                      {project.name}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-text font-display mb-1.5">
                      {project.name}
                    </h3>
                    <span className="inline-block rounded-full bg-accent/10 text-accent px-2.5 py-0.5 text-xs font-medium">
                      {project.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2 transition-all"
              >
                View All Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Internal Links */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text font-display mb-6">
              Explore More Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {interlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col rounded-xl border border-border bg-white p-5 shadow-card transition-all hover:border-accent/20 hover:shadow-lg"
                >
                  <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors mb-1">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted leading-relaxed flex-1">
                    {link.desc}
                  </span>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>

          {/* H2: Frequently Asked Questions */}
          <div className="mb-10">
            <FAQSection faqs={faqs} />
          </div>

          {/* Bottom CTA */}
          <BottomCTA
            title="Ready to work with a trusted website development company?"
            subtitle="Book a free consultation and let's build your next high-performance website."
            buttonText="Get a Free Consultation"
            href="https://cal.com/optimax-studio"
          />
        </div>
      </section>
    </>
  );
}
