import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

const services = [
  { label: "Web Design & Development", href: "/services/web-design-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "CRM & Custom Portals", href: "/services/crm-custom-portals" },
  { label: "Search Engine Optimization", href: "/services/seo" },
];

const products = [
  { label: "School Management System", href: "/products/school-management-system" },
  { label: "Hospital Management System", href: "/products/hospital-management-system" },
  { label: "Gym Management System", href: "/products/gym-management-system" },
  { label: "Real Estate CRM", href: "/products/real-estate-crm" },
  { label: "Interior Design CRM", href: "/products/interior-design-crm" },
];

const socials = [
  {
    label: "X (Twitter)",
    href: "https://x.com/optimaxstudio",
    svg: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/optimaxstudio/",
    svg: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/optimaxstudioin/",
    svg: (
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/OptimaxStudio.IN",
    svg: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-alt border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 border-b border-border-light">
          {/* Brand */}
          <div className="space-y-5 max-w-md">
            <Link href="/" className="inline-flex items-center gap-1.5">
              <span className="text-2xl font-bold tracking-tight font-display text-text">
                Optimax
              </span>
              <span className="text-accent text-2xl font-bold tracking-tight font-display">
                .
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-text-secondary">
              We build digital machines that generate revenue. From stunning
              websites to powerful CRMs — we deliver results.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white border border-border p-2.5 text-muted transition-all hover:bg-accent hover:text-white hover:border-accent hover:shadow-sm"
                  aria-label={s.label}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    {s.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:text-right lg:max-w-md lg:ml-auto">
            <h3 className="text-lg font-semibold text-text font-display mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Get weekly insights on digital growth, CRM tips, and industry trends.
            </p>
            <form
              action="https://optimaxstudio.us21.list-manage.com/subscribe/post?u=placeholder"
              method="post"
              target="_blank"
              className="flex items-center gap-2"
            >
              <input
                type="email"
                name="EMAIL"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle section: Links + Contact */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 py-12">
          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text font-display">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {service.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text font-display">
              Products
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.href}>
                  <Link
                    href={product.href}
                    className="group inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {product.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text font-display">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text font-display">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <a
                  href="mailto:hello@optimaxstudio.com"
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  hello@optimaxstudio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <a
                  href="tel:+918957079052"
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  +91 89570 79052
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <span className="text-sm text-text-secondary leading-relaxed">
                  Unit No — F104, Crown Avenue,<br />
                  Sector 92, Gurgaon — 122505
                </span>
              </li>
            </ul>
            <a
              href="https://wa.me/918957079052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm font-medium text-green-700 transition-all hover:bg-green-100"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-light pt-8">
          <p className="text-sm text-muted">
            &copy; {currentYear} Optimax Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted transition-colors hover:text-text"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted transition-colors hover:text-text"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
