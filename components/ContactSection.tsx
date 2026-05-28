"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const budgets = [
  "Under $20k",
  "$20k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
    } catch {}
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
                className="font-heading text-4xl lg:text-5xl font-bold text-[#0A3A2F] leading-tight mb-8"
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
                  <p className="text-[#3D5A50]">We&apos;ll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
