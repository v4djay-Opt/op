import type { NextConfig } from "next";

const wordpressHost = new URL(process.env.WORDPRESS_URL || "https://blog.optimaxstudio.com").hostname;

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  transpilePackages: ["simple-icons"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: wordpressHost,
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.optimaxstudio.com" }],
        destination: "https://optimaxstudio.com/:path*",
        permanent: true,
      },
      {
        source: "/services/seo",
        destination: "/services/search-engine-optimization",
        permanent: true,
      },
      {
        source: "/studio/:path*",
        destination: "/",
        permanent: true,
      },
    ];
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
        source: "/:path*",
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
              "connect-src 'self' https://api.razorpay.com",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
