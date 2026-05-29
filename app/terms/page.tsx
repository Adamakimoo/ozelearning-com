import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "OZE Learning's terms of service governing use of our website and services.",
  alternates: {
    canonical: "https://www.ozelearning.com/terms",
  },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#0A3A2F] pt-36 pb-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
            <p className="text-white/60">Last updated: 1 June 2026</p>
          </div>
        </section>

        <section className="bg-[#F7F9F8] py-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              By accessing or using the OZE Learning website at{" "}
              <a href="https://www.ozelearning.com" className="text-[#0A3A2F] underline">
                www.ozelearning.com
              </a>{" "}
              (&ldquo;Site&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please
              do not use the Site.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Use of the Site</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              You may use this Site for lawful purposes only. You must not use the Site in any way
              that breaches applicable laws or regulations, is fraudulent or harmful, or infringes
              the intellectual property rights of OZE Learning or any third party.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Intellectual Property</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              All content on this Site — including text, graphics, logos, and images — is the
              property of OZE Learning Pty Ltd and is protected by Australian and international
              copyright laws. You may not reproduce, distribute, or create derivative works from
              any content without our prior written consent.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Disclaimer</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              The information on this Site is provided for general informational purposes only. OZE
              Learning makes no warranties, express or implied, regarding the accuracy, completeness,
              or suitability of the information. To the maximum extent permitted by law, we exclude
              all liability for any loss or damage arising from your use of the Site.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Third-Party Links</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              This Site may contain links to third-party websites. These links are provided for
              convenience only. OZE Learning has no control over the content of those sites and
              accepts no responsibility for them or for any loss or damage that may arise from your
              use of them.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Governing Law</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              These Terms are governed by the laws of New South Wales, Australia. Any disputes
              arising in connection with these Terms will be subject to the exclusive jurisdiction
              of the courts of New South Wales.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Contact</h2>
            <p className="text-[#3D5A50] leading-relaxed">
              For any questions about these Terms, please contact us at{" "}
              <a href="mailto:hello@ozelearning.com" className="text-[#0A3A2F] underline">
                hello@ozelearning.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
