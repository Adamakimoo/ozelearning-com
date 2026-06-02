import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All standard crawlers
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI search bots — explicit allow for AI SEO
      { userAgent: "GPTBot",          allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot",   allow: "/" },
      { userAgent: "ClaudeBot",       allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "cohere-ai",       allow: "/" },
    ],
    sitemap: "https://www.ozelearning.com/sitemap.xml",
    host: "https://www.ozelearning.com",
  };
}
