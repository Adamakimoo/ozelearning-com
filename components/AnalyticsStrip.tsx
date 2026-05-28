"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/tokens";

function AnimatedNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setDisplay(target); return; }

    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target]);

  return (
    <span>
      {display}{suffix}
    </span>
  );
}

export default function AnalyticsStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#0A3A2F] py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="analytics-heading"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #A2E8CE 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#A2E8CE]/60 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            By the Numbers
          </p>
          <h2
            id="analytics-heading"
            className="font-heading text-3xl lg:text-4xl font-bold text-white"
          >
            Creative storytelling.{" "}
            <span className="text-[#A2E8CE]">Real business results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center border border-[#A2E8CE]/10 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm"
            >
              <p
                className="font-heading font-extrabold text-6xl lg:text-7xl text-[#A2E8CE] mb-3 tabular-nums"
                aria-label={`${s.value}${s.suffix}`}
              >
                <AnimatedNumber target={s.value} suffix={s.suffix} active={inView} />
              </p>
              <p className="text-white font-semibold text-lg mb-2">{s.label}</p>
              <p className="text-white/40 text-sm">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
