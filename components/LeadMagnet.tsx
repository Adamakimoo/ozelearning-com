"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/placeholder-leadmagnet";

const resources = [
  {
    id: "brief-template",
    title: "eLearning Project Brief Template",
    description:
      "The exact brief template we use with enterprise clients. Covers scope, audience, tech stack, budget, and success metrics.",
    tag: "Free Template",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "roi-calculator",
    title: "Training ROI Calculator",
    description:
      "A spreadsheet model to calculate the business case for your next eLearning investment — including time-to-competency and turnover savings.",
    tag: "Free Calculator",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "compliance-checklist",
    title: "Compliance Training Audit Checklist",
    description:
      "25-point checklist to assess whether your current compliance training meets Australian WHS and regulatory standards.",
    tag: "Free Checklist",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function LeadMagnet() {
  const [selectedResource, setSelectedResource] = useState(resources[0].id);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("resource", selectedResource);
    data.append("_subject", `Resource Download: ${selectedResource}`);
    data.append("source", "lead-magnet");
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
    // GA event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "lead_magnet_download", {
        event_category: "Lead Generation",
        event_label: selectedResource,
      });
    }
  };

  return (
    <section
      id="resources"
      className="bg-[#0A3A2F] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="resources-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #A2E8CE 0%, transparent 50%), radial-gradient(circle at 80% 20%, #A2E8CE 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <AnimateIn className="mb-4">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#A2E8CE]">
                Free Resources
              </p>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <h2
                id="resources-heading"
                className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              >
                Tools to help you
                <br />
                <span className="text-[#A2E8CE]">build better learning.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Download the same templates and tools we use with our enterprise
                clients — free, no strings attached.
              </p>
            </AnimateIn>

            {/* Resource selector */}
            <AnimateIn delay={0.15}>
              <div className="space-y-3">
                {resources.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedResource(r.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      selectedResource === r.id
                        ? "border-[#A2E8CE] bg-[#A2E8CE]/10"
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 flex-shrink-0 ${
                          selectedResource === r.id
                            ? "text-[#A2E8CE]"
                            : "text-white/40"
                        }`}
                      >
                        {r.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                              selectedResource === r.id
                                ? "bg-[#A2E8CE]/20 text-[#A2E8CE]"
                                : "bg-white/10 text-white/50"
                            }`}
                          >
                            {r.tag}
                          </span>
                        </div>
                        <p
                          className={`font-semibold text-sm mb-1 ${
                            selectedResource === r.id
                              ? "text-white"
                              : "text-white/70"
                          }`}
                        >
                          {r.title}
                        </p>
                        <p className="text-white/40 text-xs leading-relaxed">
                          {r.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — form */}
          <AnimateIn delay={0.1} direction="right">
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#A2E8CE]/20 flex items-center justify-center mx-auto mb-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-8 h-8 text-[#0A3A2F]"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#0A3A2F] mb-3">
                    On its way!
                  </h3>
                  <p className="text-[#3D5A50] text-sm">
                    Check your inbox — your resource is heading there now. We
                    may also send you occasional insights on eLearning and EdTech.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-heading font-bold text-2xl text-[#0A3A2F] mb-2">
                      Get instant access
                    </h3>
                    <p className="text-[#3D5A50] text-sm">
                      Enter your work email and we&apos;ll send the resource
                      directly to your inbox.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                      <label
                        htmlFor="lm-name"
                        className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2"
                      >
                        Your Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="lm-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] focus:border-[#A2E8CE] transition"
                        placeholder="Alex Chen"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lm-email"
                        className="block text-xs font-semibold text-[#0A3A2F] uppercase tracking-wider mb-2"
                      >
                        Work Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="lm-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] focus:border-[#A2E8CE] transition"
                        placeholder="alex@company.com.au"
                      />
                    </div>

                    {/* Selected resource display */}
                    <div className="p-3 rounded-xl bg-[#F7F9F8] border border-[#EEF2F0]">
                      <p className="text-xs text-[#3D5A50] font-medium">
                        You&apos;re downloading:
                      </p>
                      <p className="text-sm font-semibold text-[#0A3A2F] mt-0.5">
                        {resources.find((r) => r.id === selectedResource)?.title}
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-[#0A3A2F] text-[#A2E8CE] font-semibold text-sm hover:bg-[#0D4D3D] disabled:opacity-60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2E8CE]"
                    >
                      {loading ? "Sending…" : "Send Me the Resource →"}
                    </button>

                    <p className="text-xs text-[#3D5A50]/60 text-center">
                      No spam. Unsubscribe anytime. We respect your privacy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
