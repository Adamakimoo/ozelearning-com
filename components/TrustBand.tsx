"use client";

import AnimateIn from "./AnimateIn";

const sectors = [
  "Financial Services",
  "Healthcare & Aged Care",
  "Resources & Mining",
  "Government & Public Sector",
  "Retail & FMCG",
  "Professional Services",
];

const caseStudy = {
  quote:
    "OZE transformed our legacy compliance program into an immersive digital experience. Completion rates jumped from 61% to 96% in the first quarter — and for the first time, our people actually asked when the next module was coming.",
  author: "Head of People & Culture",
  sector: "ASX-listed Financial Services",
  stats: [{ label: "Completion rate", value: "96%" }, { label: "Time-to-build", value: "6 wks" }, { label: "Users", value: "4,200+" }],
};

export default function TrustBand() {
  return (
    <section
      id="work"
      className="bg-[#EEF2F0] py-24 lg:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Sector band */}
        <AnimateIn className="mb-4">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0D4D3D]">
            Trusted Across Sectors
          </p>
        </AnimateIn>
        <AnimateIn delay={0.05} className="mb-12">
          <h2
            id="trust-heading"
            className="font-heading text-4xl lg:text-5xl font-bold text-[#0A3A2F] leading-tight"
          >
            Built for Australia&apos;s{" "}
            <span className="text-[#0D4D3D]">most complex workforces.</span>
          </h2>
        </AnimateIn>

        {/* Sector pills */}
        <AnimateIn delay={0.1} className="mb-20">
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-white border border-[#A2E8CE]/30 text-[#0A3A2F] text-sm font-medium shadow-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </AnimateIn>

        {/* Case study card */}
        <AnimateIn delay={0.15}>
          <div className="relative bg-[#0A3A2F] rounded-3xl p-10 lg:p-14 overflow-hidden">
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #A2E8CE, transparent)", transform: "translate(30%, -30%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid lg:grid-cols-5 gap-10 items-start">
              {/* Quote */}
              <div className="lg:col-span-3">
                <svg viewBox="0 0 40 32" className="w-8 h-8 text-[#A2E8CE] mb-6 opacity-60" fill="currentColor" aria-hidden="true">
                  <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 4.267C13.6 5.6 10.667 8.4 9.6 12.8H16V32H0zm24 0V19.2C24 8.533 29.333 2.133 40 0l2.4 4.267C37.6 5.6 34.667 8.4 33.6 12.8H40V32H24z" />
                </svg>
                <blockquote className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 italic">
                  {caseStudy.quote}
                </blockquote>
                <div>
                  <p className="text-[#A2E8CE] font-semibold text-sm">{caseStudy.author}</p>
                  <p className="text-white/50 text-sm">{caseStudy.sector}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
                {caseStudy.stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-[#A2E8CE]/30 pl-5">
                    <p className="font-heading font-extrabold text-3xl lg:text-4xl text-[#A2E8CE]">
                      {s.value}
                    </p>
                    <p className="text-white/50 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
