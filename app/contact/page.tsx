"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const servicesList = [
  "Web Design & Development",
  "Digital Marketing",
  "Social Media Management",
  "CRM & Custom Portals",
  "SEO",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send. Please try again.");
    }
  };

  return (
    <>
      <LocalBusinessSchema />
      <PageHero
        label="Contact"
        title="Let Us Build Something Great Together"
        subtitle="Book a free strategy call or drop us a message. We respond within 24 hours."
        green
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="inner-page pt-12 md:pt-16 pb-24 lg:pb-32 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-surface-alt p-6 sm:p-8"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    {servicesList.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === "success" && (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600">
                    Thanks for reaching out! We will get back to you within 24 hours.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.15}>
              <div className="space-y-8">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold text-text font-display mb-4">
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <a href="mailto:hello@optimaxstudio.com" className="text-sm text-muted hover:text-text transition-colors">
                        hello@optimaxstudio.com
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <a href="tel:+918957079052" className="text-sm text-muted hover:text-text transition-colors">
                        +91 89570 79052
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <span className="text-sm text-muted">
                        104, GLS Crown Avenue, Wazirpur Road, Gurugram — 122505
                      </span>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918957079052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-6 transition-all hover:bg-green-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-green-700">
                      Chat on WhatsApp
                    </div>
                    <div className="text-sm text-green-600">
                      Usually replies within minutes
                    </div>
                  </div>
                </a>

                {/* Cal.com embed */}
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold text-text font-display mb-3">
                    Book a Free Strategy Call
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    Pick a 30-minute slot that works for you. No strings attached.
                  </p>
                  <a
                    href="https://cal.com/optimax-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-glow"
                  >
                    Schedule on Cal.com
                    <Send className="h-4 w-4" />
                  </a>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Google Maps — full width */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface overflow-hidden mt-12">
              <iframe
                title="Optimax Studio Office Location"
                src="https://maps.google.com/maps?q=F104+Crown+Avenue+Sector+92+Gurgaon+122505&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
