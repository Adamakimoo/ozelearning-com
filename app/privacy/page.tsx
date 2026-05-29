import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "OZE Learning's privacy policy — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.ozelearning.com/privacy",
  },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#0A3A2F] pt-36 pb-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/60">Last updated: 1 June 2026</p>
          </div>
        </section>

        <section className="bg-[#F7F9F8] py-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              OZE Learning Pty Ltd (&ldquo;OZE Learning&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your
              personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the
              Australian Privacy Principles (APPs).
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Information We Collect</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              We may collect personal information you provide when you contact us via our website
              form, including your name, work email address, organisation name, and the nature of
              your enquiry. We also collect standard website analytics data (pages visited, session
              duration, referral source) in aggregate, anonymous form.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">How We Use Your Information</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              We use your information solely to respond to your enquiry and, where you have consented,
              to send relevant updates about OZE Learning&apos;s services. We do not sell, rent, or
              share your personal information with third parties for marketing purposes.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Data Storage & Security</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              Your information is stored securely on servers located in Australia and/or other
              jurisdictions with equivalent privacy protections. We take reasonable technical and
              organisational measures to protect your data from unauthorised access, disclosure,
              alteration, or destruction.
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Access & Correction</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              You have the right to access and correct the personal information we hold about you.
              To make a request, please contact us at{" "}
              <a href="mailto:hello@ozelearning.com" className="text-[#0A3A2F] underline">
                hello@ozelearning.com
              </a>
              .
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Complaints</h2>
            <p className="text-[#3D5A50] leading-relaxed mb-6">
              If you believe we have breached the APPs, you may lodge a complaint with us directly
              or with the Office of the Australian Information Commissioner (OAIC) at{" "}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#0A3A2F] underline">
                www.oaic.gov.au
              </a>
              .
            </p>

            <h2 className="font-heading font-bold text-xl text-[#0A3A2F] mt-10 mb-4">Updates to This Policy</h2>
            <p className="text-[#3D5A50] leading-relaxed">
              We may update this policy from time to time. The most current version will always be
              available at this URL. Continued use of our website after any update constitutes
              acceptance of the revised policy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
