import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import TrustBand from "@/components/TrustBand";
import AnalyticsStrip from "@/components/AnalyticsStrip";
import ContactSection from "@/components/ContactSection";
import OzeWidget from "@/components/OzeWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
