"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
import Image from "next/image";

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
  const pathname = usePathname();
  const isInnerPage = pathname !== "/";
  const isLight = isInnerPage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
          scrolled ? "border-b border-border shadow-sm" : ""
        }`}
        style={{ background: scrolled ? "#f0ede6" : "transparent" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Optimax Studio"
                width={140}
                height={40}
                className={`h-9 lg:h-10 w-auto object-contain transition-all duration-300 ${isLight ? "brightness-0 invert" : ""}`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className={`group relative text-sm font-medium transition-colors ${
                  isLight ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text"
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${isLight ? "bg-white" : "bg-accent"}`} />
              </Link>

              <NavDropdown
                label="Services"
                href="/services"
                items={serviceItems}
                light={isLight}
              />
              <NavDropdown
                label="Products"
                href="/products"
                items={productItems}
                light={isLight}
              />
              <NavDropdown
                label="Industries"
                href="/industries"
                items={industryItems}
                columns={2}
                light={isLight}
              />

              {plainLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors ${
                    isLight ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${isLight ? "bg-white" : "bg-accent"}`} />
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  isLight
                    ? "bg-white text-[#1a4a3a] hover:bg-white/90"
                    : scrolled
                    ? "bg-[#1e5040] text-white hover:bg-[#1a4a3a]"
                    : "bg-accent text-white hover:bg-accent-hover hover:shadow-glow"
                }`}
              >
                Book Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden inline-flex items-center justify-center rounded-lg p-2 transition-colors ${
                  isLight ? "text-white hover:bg-white/10" : "text-text hover:bg-surface-alt"
                }`}
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto lg:hidden"
            style={{ background: "#2e5b4c" }}
          >
            {/* Top bar: logo + close button */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4">
              <Link href="/" onClick={closeMenu} className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Optimax Studio"
                  width={160}
                  height={46}
                  className="h-10 w-auto object-contain brightness-0 invert"
                  priority
                />
              </Link>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                style={{
                  width: 40,
                  height: 40,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <X className="h-5 w-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col px-6 pb-12">
              {/* Top divider */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

              {/* Home */}
              <Link
                href="/"
                onClick={closeMenu}
                className="font-semibold font-display transition-opacity hover:opacity-70"
                style={{ fontSize: 28, color: "#f5f0e8", padding: "22px 0" }}
              >
                Home
              </Link>

              {/* Services accordion */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "services" ? null : "services")
                  }
                  className="flex w-full items-center justify-between font-semibold font-display transition-opacity hover:opacity-70"
                  style={{ fontSize: 28, color: "#f5f0e8", padding: "22px 0" }}
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      mobileSubmenu === "services" ? "rotate-180" : ""
                    }`}
                    style={{ color: "#a8b8a8" }}
                  />
                </button>
                <AnimatePresence>
                  {mobileSubmenu === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pb-5" style={{ gap: 14 }}>
                        {serviceItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="transition-colors hover:text-white"
                            style={{
                              fontSize: 16,
                              color: "#a8b8a8",
                              letterSpacing: "0.5px",
                              lineHeight: 1.5,
                            }}
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
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "products" ? null : "products")
                  }
                  className="flex w-full items-center justify-between font-semibold font-display transition-opacity hover:opacity-70"
                  style={{ fontSize: 28, color: "#f5f0e8", padding: "22px 0" }}
                >
                  Products
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      mobileSubmenu === "products" ? "rotate-180" : ""
                    }`}
                    style={{ color: "#a8b8a8" }}
                  />
                </button>
                <AnimatePresence>
                  {mobileSubmenu === "products" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pb-5" style={{ gap: 14 }}>
                        {productItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="transition-colors hover:text-white"
                            style={{
                              fontSize: 16,
                              color: "#a8b8a8",
                              letterSpacing: "0.5px",
                              lineHeight: 1.5,
                            }}
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
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <button
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "industries" ? null : "industries")
                  }
                  className="flex w-full items-center justify-between font-semibold font-display transition-opacity hover:opacity-70"
                  style={{ fontSize: 28, color: "#f5f0e8", padding: "22px 0" }}
                >
                  Industries
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      mobileSubmenu === "industries" ? "rotate-180" : ""
                    }`}
                    style={{ color: "#a8b8a8" }}
                  />
                </button>
                <AnimatePresence>
                  {mobileSubmenu === "industries" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pb-5" style={{ gap: 14 }}>
                        {industryItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="transition-colors hover:text-white"
                            style={{
                              fontSize: 16,
                              color: "#a8b8a8",
                              letterSpacing: "0.5px",
                              lineHeight: 1.5,
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Plain links: Case Studies, Blog, Contact */}
              {plainLinks.slice(1).map((link) => (
                <div key={link.href} style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block font-semibold font-display transition-opacity hover:opacity-70"
                    style={{ fontSize: 28, color: "#f5f0e8", padding: "22px 0" }}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}

              {/* Bottom divider */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

              {/* Gold CTA */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c 0%, #e8c96a 100%)",
                    color: "#1a2e1a",
                    boxShadow: "0 4px 24px rgba(201, 168, 76, 0.38)",
                  }}
                >
                  Book Free Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
