import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  transpilePackages: ["simple-icons"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*.css",
        headers: [
          { key: "Content-Type", value: "text/css; charset=utf-8" },
          { key: "Cache-Control", value: process.env.NODE_ENV === "production" ? "public, max-age=31536000, immutable" : "no-store, must-revalidate" },
        ],
      },
      {
        source: "/_next/static/:path*.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
          { key: "Cache-Control", value: process.env.NODE_ENV === "production" ? "public, max-age=31536000, immutable" : "no-store, must-revalidate" },
        ],
      },
      {
        source: "/((?!studio).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://cal.com https://checkout.razorpay.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "frame-src https://cal.com https://www.google.com https://checkout.razorpay.com",
              "connect-src 'self' https://api.razorpay.com https://*.sanity.io",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
      // Studio: allow framing from Sanity origins
      {
        source: "/studio",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://sanity.io https://*.sanity.io",
          },
        ],
      },
      {
        source: "/studio/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://sanity.io https://*.sanity.io",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
