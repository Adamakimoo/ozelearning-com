"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { capabilities } from "@/lib/tokens";

const icons = {
  mint: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  purple: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const accentStyles = {
  mint: {
    icon: "bg-[#A2E8CE]/15 text-[#0A3A2F]",
    border: "border-[#A2E8CE]",
    chip: "bg-[#A2E8CE]/10 text-[#0A3A2F]",
  },
  purple: {
    icon: "bg-[#C3B1E1]/15 text-[#3D2D6B]",
    border: "border-[#C3B1E1]",
    chip: "bg-[#C3B1E1]/15 text-[#3D2D6B]",
  },
};

export default function CapabilitiesGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="solutions"
      className="bg-[#F7F9F8] py-24 lg:py-32"
      aria-labelledby="capabilities-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn className="mb-4">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0D4D3D]">
            Core Capabilities
          </p>
        </AnimateIn>
        <AnimateIn delay={0.05} className="mb-16">
          <h2
            id="capabilities-heading"
            className="font-heading text-4xl lg:text-5xl font-bold text-[#0A3A2F] leading-tight max-w-2xl"
          >
            What we build —{" "}
            <span className="text-[#0D4D3D]">and why it works.</span>
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const accent = accentStyles[cap.accent as keyof typeof accentStyles];
            const isHovered = hovered === i;
            return (
              <AnimateIn key={cap.title} delay={0.1 + i * 0.1}>
                <article
                  className={`group relative h-full bg-white rounded-2xl p-8 border transition-all duration-300 cursor-default
                    ${isHovered ? `${accent.border} shadow-xl shadow-black/5` : "border-[#EEF2F0] shadow-sm"}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                >
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl mb-6 transition-colors ${accent.icon}`}>
                    {icons[cap.accent as keyof typeof icons]}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-[#0A3A2F] mb-3">
                    {cap.title}
                  </h3>

                  {/* Outcome — the hook */}
                  <p className="font-semibold text-[#0D4D3D] text-sm mb-4 leading-snug">
                    {cap.outcome}
                  </p>

                  {/* Description */}
                  <p className="text-[#3D5A50] text-sm leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Tech chips */}
                  <div>
                    <p className="text-[#3D5A50] text-xs uppercase tracking-widest mb-3 font-medium">
                      Delivered via
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.deliveredVia.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1 rounded-full font-medium ${accent.chip}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div className={`mt-6 flex items-center gap-2 text-xs font-semibold transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}
                    style={{ color: cap.accent === "mint" ? "#0A3A2F" : "#3D2D6B" }}
                  >
                    Learn more
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
