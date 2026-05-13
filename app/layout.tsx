import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://optimax.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Optimax Studio — Digital Agency",
    template: "%s — Optimax Studio",
  },
  description:
    "We build digital machines that generate revenue. Web design, development, marketing, and custom CRM solutions.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-touch-icon", url: "/android-touch-icon.png" },
      { rel: "manifest-icon-192", url: "/web-app-manifest-192x192.png" },
      { rel: "manifest-icon-512", url: "/web-app-manifest-512x512.png" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Optimax Studio",
    title: "Optimax Studio — Digital Agency",
    description:
      "We build digital machines that generate revenue. Web design, development, marketing, and custom CRM solutions.",
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimax Studio — Digital Agency",
    description:
      "We build digital machines that generate revenue. Web design, development, marketing, and custom CRM solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-background text-text"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
