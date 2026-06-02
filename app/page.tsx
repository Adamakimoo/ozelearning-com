import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import TrustBand from "@/components/TrustBand";
import AnalyticsStrip from "@/components/AnalyticsStrip";
import ContactSection from "@/components/ContactSection";
import OzeWidget from "@/components/OzeWidget";
import Footer from "@/components/Footer";
import LeadMagnet from "@/components/LeadMagnet";
import FaqSection from "@/components/FaqSection";

// ── Structured Data ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.ozelearning.com/#organization",
  name: "OZE Learning",
  legalName: "OZE Learning",
  url: "https://www.ozelearning.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.ozelearning.com/ozelearning.svg",
    width: 360,
    height: 104,
  },
  image: "https://www.ozelearning.com/OG-image.png",
  description:
    "OZE Learning is an Australian EdTech agency specialising in bespoke eLearning development, compliance training, immersive simulations, and LMS/LXP implementation for enterprise workforces.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "AU",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
    addressRegion: "Australia",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hello@ozelearning.com",
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: ["AU", "NZ", "GB", "US", "SG"],
    },
    {
      "@type": "ContactPoint",
      email: "hello@ozelearning.com",
      contactType: "sales",
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://www.youtube.com/channel/UCFEJYOj_N1hljkX1KYqqiSw",
  ],
  knowsAbout: [
    "eLearning Development",
    "Instructional Design",
    "SCORM",
    "xAPI",
    "cmi5",
    "Compliance Training",
    "Microlearning",
    "Learning Management Systems",
    "Articulate Storyline",
    "Immersive Simulations",
    "Employee Onboarding",
    "Corporate Training",
    "Learning Experience Design",
    "EdTech",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "eLearning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bespoke Digital Learning",
          description:
            "Custom eLearning modules including compliance training, onboarding, and leadership programs built with SCORM/xAPI and Articulate Storyline 360.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Immersive Simulations",
          description:
            "Scenario-based learning environments using AI branching, interactive video, and generative AI prompts for complex skills training.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Learning Ecosystem Architecture",
          description:
            "LMS and LXP implementation, upgrade, and integration with analytics dashboards and custom UI for enterprise learning infrastructure.",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.ozelearning.com/#website",
  url: "https://www.ozelearning.com",
  name: "OZE Learning",
  description:
    "Australian EdTech agency building bespoke eLearning, compliance training, and immersive simulations for enterprise workforces.",
  publisher: {
    "@id": "https://www.ozelearning.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.ozelearning.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-AU",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.ozelearning.com/#webpage",
  url: "https://www.ozelearning.com",
  name: "OZE Learning — eLearning & EdTech Agency Australia",
  description:
    "OZE Learning builds bespoke eLearning, compliance training, immersive simulations, and LMS solutions for Australia's most complex workforces.",
  isPartOf: { "@id": "https://www.ozelearning.com/#website" },
  about: { "@id": "https://www.ozelearning.com/#organization" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable"],
  },
  inLanguage: "en-AU",
};

export default function Home() {
  const schemas = [organizationSchema, websiteSchema, webPageSchema];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <Nav />
      <main>
        <Hero />
        <PhilosophySection />
        <CapabilitiesGrid />
        <TrustBand />
        <AnalyticsStrip />
        {/* Lead Magnet — free resource download for prospecting */}
        <LeadMagnet />
        {/* FAQ Section — AI SEO + featured snippet targeting */}
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <OzeWidget />
    </>
  );
}
