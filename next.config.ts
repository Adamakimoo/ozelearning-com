import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses for better Core Web Vitals
  compress: true,

  // Security and SEO headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Cache static assets aggressively
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
        ],
      },
      {
        // Long-cache static assets
        source: "/(.*)\\.(svg|png|jpg|jpeg|gif|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Canonical redirect: non-www → www
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ozelearning.com" }],
        destination: "https://www.ozelearning.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
