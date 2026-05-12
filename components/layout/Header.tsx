"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Building2,
  GraduationCap,
  Heart,
  Dumbbell,
  Sofa,
  ShoppingBag,
  Briefcase,
} from "lucide-react";
import { NavDropdown } from "@/components/ui/NavDropdown";

const serviceItems = [
  { label: "Web Design & Development", href: "/services/web-design-development", description: "Custom, high-performance websites" },
  { label: "Digital Marketing", href: "/services/digital-marketing", description: "Data-driven campaigns that maximize ROI" },
  { label: "Social Media Management", href: "/services/social-media-management", description: "Build a brand people love" },
  { label: "CRM & Custom Portals", href: "/services/crm-custom-portals", description: "Software tailored to your workflow" },
  { label: "Search Engine Optimization", href: "/services/seo", description: "Rank higher, drive organic revenue" },
];

const productItems = [
  { label: "School Management System", href: "/products/school-management-system", description: "Admissions, fees, attendance & reports" },
  { label: "Hospital Management System", href: "/products/hospital-management-system", description: "Patient records, appointments & billing" },
  { label: "Gym Management System", href: "/products/gym-management-system", description: "Memberships, schedules & payments" },
  { label: "Real Estate CRM", href: "/products/real-estate-crm", description: "Track leads, properties & closings" },
  { label: "Interior Design CRM", href: "/products/interior-design-crm", description: "Manage projects, vendors & approvals" },
];

const industryItems = [
  { label: "Real Estate", href: "/industries/real-estate", description: "CRM, lead tracking, and automated follow-ups", icon: Building2 },
  { label: "Schools & Education", href: "/industries/schools-education", description: "Admissions, fees, attendance & parent communication", icon: GraduationCap },
  { label: "Healthcare", href: "/industries/healthcare", description: "Appointments, records, billing & prescriptions", icon: Heart },
  { label: "Fitness & Gym", href: "/industries/fitness-gym", description: "Memberships, schedules, payments & progress tracking", icon: Dumbbell },
  { label: "Interior Design", href: "/industries/interior-design", description: "Client approvals, vendor tracking & timelines", icon: Sofa },
  { label: "Retail & E-commerce", href: "/industries/retail-ecommerce", description: "High-converting stores with inventory sync", icon: ShoppingBag },
  { label: "Corporate", href: "/industries/corporate", description: "Internal portals, workflows & executive dashboards", icon: Briefcase },
];

const plainLinks = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-xl lg:text-2xl font-bold tracking-tight font-display text-text">
                Optimax
              </span>
              <span className="text-accent text-xl lg:text-2xl font-bold tracking-tight font-display">
                .
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="group relative text-sm font-medium text-text-secondary transition-colors hover:text-text"
              >
                Home
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>

              <NavDropdown
                label="Services"
                href="/services"
                items={serviceItems}
              />
              <NavDropdown
                label="Products"
                href="/products"
                items={productItems}
              />
              <NavDropdown
                label="Industries"
                href="/industries"
                items={industryItems}
                columns={2}
              />

              {plainLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm font-medium text-text-secondary transition-colors hover:text-text"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
              >
                Book Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-text hover:bg-surface-alt transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-20 overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-4 py-10 px-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-2xl font-semibold text-text hover:text-accent transition-colors font-display"
              >
                Home
              </Link>

              {/* Services accordion */}
              <div className="w-full max-w-xs">
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "services" ? null : "services")
                  }
                  className="flex w-full items-center justify-center gap-2 text-2xl font-semibold text-text hover:text-accent transition-colors font-display py-2"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileSubmenu === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileSubmenu === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col items-center gap-3 py-3">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="text-base text-text-secondary hover:text-text transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products accordion */}
              <div className="w-full max-w-xs">
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "products" ? null : "products")
                  }
                  className="flex w-full items-center justify-center gap-2 text-2xl font-semibold text-text hover:text-accent transition-colors font-display py-2"
                >
                  Products
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileSubmenu === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileSubmenu === "products" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col items-center gap-3 py-3">
                        {productItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="text-base text-text-secondary hover:text-text transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries accordion */}
              <div className="w-full max-w-xs">
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "industries" ? null : "industries")
                  }
                  className="flex w-full items-center justify-center gap-2 text-2xl font-semibold text-text hover:text-accent transition-colors font-display py-2"
                >
                  Industries
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileSubmenu === "industries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileSubmenu === "industries" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col items-center gap-3 py-3">
                        {industryItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="text-base text-text-secondary hover:text-text transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {plainLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl font-semibold text-text hover:text-accent transition-colors font-display"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow mt-4"
              >
                Book Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
