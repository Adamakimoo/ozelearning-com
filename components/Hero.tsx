"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleCanvas from "./ParticleCanvas";

const ease = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  };
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0A3A2F] overflow-hidden"
      aria-label="Hero"
    >
      {/* Particle network */}
      <ParticleCanvas />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(10,58,47,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 pb-24">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#A2E8CE]/30 bg-[#A2E8CE]/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#A2E8CE] animate-pulse" aria-hidden="true" />
          <span className="text-[#A2E8CE] text-xs font-semibold tracking-[0.12em] uppercase">
            Australian EdTech Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
        >
          Learning That
          <br />
          <span className="text-[#A2E8CE]">Actually Sticks.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.2)}
          className="max-w-2xl mx-auto text-[#A2E8CE]/70 text-lg md:text-xl leading-relaxed mb-4"
        >
          Ancient Narrative. Tomorrow&apos;s EdTech.
        </motion.p>
        <motion.p
          {...fadeUp(0.28)}
          className="max-w-2xl mx-auto text-white/60 text-base md:text-lg leading-relaxed mb-12"
        >
          We architect digital learning experiences for the modern workforce —
          fusing the timeless power of human storytelling with cutting-edge
          learning technology. Built proudly in Australia, deployed globally.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.38)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#solutions"
            className="px-8 py-4 rounded-full bg-[#A2E8CE] text-[#0A3A2F] font-semibold text-base hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Our Solutions
          </Link>
          <Link
            href="#work"
            className="px-8 py-4 rounded-full border border-[#A2E8CE]/40 text-[#A2E8CE] font-semibold text-base hover:border-[#A2E8CE] hover:bg-[#A2E8CE]/10 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2E8CE]"
          >
            View Case Studies
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-20 flex justify-center"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 opacity-40">
            <span className="text-[#A2E8CE] text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#A2E8CE] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
