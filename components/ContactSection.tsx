"use client";

import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/placeholder";

const budgets = [
  "Under $20k",
  "$20k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

const services = [
  "Bespoke eLearning Development",
  "Compliance Training",
  "Employee Onboarding",
  "Immersive Simulations",
  "LMS / LXP Implementation",
  "Learning Strategy",
  "Other",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");

  // Capture UTM parameters for lead attribution
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source") || document.referrer || "direct");
    setUtmMedium(params.get("utm_medium") || "");
    setUtmCampaign(params.get("utm_campaign") || "");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    // Append attribution data
    data.append("utm_source", utmSource);
    data.append("utm_medium", utmMedium);
    data.append("utm_campaign", utmCampaign);
    data.append("page_url", window.location.href);
    data.append("_subject", `New Proposal Request — ${data.get("name")}`);

    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
    } catch {}

    // Fire GA conversion event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "Lead Generation",
        event_label: "Contact Form",
        value: 1,
      });
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#F7F9F8] py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — copy */}
          <div>
            <AnimateIn className="mb-4">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0D4D3D]">
                Start a Project
              </p>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <h2
                id="contact-heading"
                className="font-heading text-4xl lg:text-5xl font-bold text-[#0A3A2F] leading-tight mb-8 speakable"
              >
                Let&apos;s build something
                <br />
                <span className="text-[#0D4D3D]">your people remember.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-[#3D5A50] leading-relaxed mb-10 text-lg">
                Tell us what you&apos;re working on. We&apos;ll come back within one business
                day with ideas, not a quote sheet.
              </p>
            </AnimateIn>

            {/* Contact details */}
            <AnimateIn delay={0.15}>
              <div className="space-y-5">
                {[
                  { label: "Email", value: "hello@ozelearning.com", href: "mailto:hello@ozelearning.com" },
                  { label: "Response Time", value: "Within 1 business day", href: null },
                  { label: "Location", value: "Australia — working globally", href: null },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="mt-1 w-8 h-8 rounded-full bg-[#A2E8CE]/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#0A3A2F]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#3D5A50] uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-[#0A3A2F] font-medium hover:text-[#0D4D3D] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#0A3A2F] font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Trust signals */}
            <AnimateIn delay={0.2}>
              <div className="mt-10 p-5 rounded-2xl bg-[#A2E8CE]/10 border border-[#A2E8CE]/20">
                <p className="text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-3">
                  Why teams choose OZE Learning
                </p>
                <ul className="space-y-2">
                  {[
                    "94% average engagement completion rate",
                    "6-week average time-to-build",
                    "100% xAPI-ready as standard",
                    "Australian-owned, globally deployed",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-[#3D5A50]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A3A2F] flex-shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>

          {/* Right — form */}
          <AnimateIn delay={0.1} direction="right">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-[#EEF2F0]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#A2E8CE]/20 flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#0A3A2F]" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#0A3A2F] mb-3">Message sent!</h3>
                  <p className="text-[#3D5A50]">We&apos;ll be in touch within one business day with ideas, not a quote sheet.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2">
                        Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] focus:border-[#A2E8CE] transition"
                        placeholder="Alex Chen"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2">
                        Work Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] focus:border-[#A2E8CE] transition"
                        placeholder="alex@company.com.au"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="organisation" className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2">
                        Organisation
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        autoComplete="organization"
                        className="w-full px-4 py-3 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] focus:border-[#A2E8CE] transition"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full px-4 py-3 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] focus:border-[#A2E8CE] transition"
                        placeholder="+61 4xx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2">
                      What do you need?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] focus:border-[#A2E8CE] transition"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <fieldset>
                      <legend className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2">
                        Project Budget
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <label key={b} className="cursor-pointer">
                            <input type="radio" name="budget" value={b} className="sr-only peer" />
                            <span className="block px-3 py-1.5 rounded-full border border-[#EEF2F0] text-xs font-medium text-[#3D5A50] peer-checked:border-[#A2E8CE] peer-checked:bg-[#A2E8CE]/10 peer-checked:text-[#0A3A2F] hover:border-[#A2E8CE]/50 transition-all">
                              {b}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2">
                      What are you working on? <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] focus:border-[#A2E8CE] transition resize-none"
                      placeholder="We need to rebuild our compliance training for 2,000 staff across three states…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#0A3A2F] text-[#A2E8CE] font-semibold text-sm hover:bg-[#0D4D3D] disabled:opacity-60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2E8CE]"
                  >
                    {loading ? "Sending…" : "Send Message →"}
                  </button>

                  <p className="text-xs text-[#3D5A50]/60 text-center">
                    We respond within 1 business day. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
