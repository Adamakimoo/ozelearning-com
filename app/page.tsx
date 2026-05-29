import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import TrustBand from "@/components/TrustBand";
import AnalyticsStrip from "@/components/AnalyticsStrip";
import ContactSection from "@/components/ContactSection";
import OzeWidget from "@/components/OzeWidget";
import Footer from "@/components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OZE Learning",
  url: "https://www.ozelearning.com",
  logo: "https://www.ozelearning.com/ozelearning.svg",
  description:
    "Australian EdTech agency architecting digital learning experiences for the modern workforce — fusing human storytelling with cutting-edge learning technology.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@ozelearning.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.youtube.com/channel/UCFEJYOj_N1hljkX1KYqqiSw",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <PhilosophySection />
        <CapabilitiesGrid />
        <TrustBand />
        <AnalyticsStrip />
        <ContactSection />
      </main>
      <Footer />
      <OzeWidget />
    </>
  );
}
