"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const prompts = [
  {
    text: "Want to see how we built a custom onboarding experience for 10,000+ users?",
    cta: "View Case Study",
    href: "#work",
  },
  {
    text: "Curious what AI-driven branching looks like in a real compliance module?",
    cta: "Explore Simulations",
    href: "#solutions",
  },
  {
    text: "Need to upgrade your LMS into something people actually use?",
    cta: "Let's Talk",
    href: "#contact",
  },
];

export default function OzeWidget() {
  const [open, setOpen] = useState(false);
  const [promptIndex] = useState(() => Math.floor(Math.random() * prompts.length));
  const prompt = prompts[promptIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat bubble */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Oze"
          aria-modal="false"
          className="w-72 bg-white rounded-2xl shadow-2xl border border-[#EEF2F0] p-5 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#A2E8CE] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold text-[#3D5A50] uppercase tracking-wider">Oze · Chief Learning Guide</span>
          </div>
          <p className="text-[#0A3A2F] text-sm leading-relaxed mb-4">
            Hi! I&apos;m Oze. {prompt.text}
          </p>
          <div className="flex gap-2">
            <Link
              href={prompt.href}
              onClick={() => setOpen(false)}
              className="flex-1 text-center px-4 py-2.5 rounded-full bg-[#0A3A2F] text-[#A2E8CE] text-xs font-semibold hover:bg-[#0D4D3D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A3A2F]"
            >
              {prompt.cta}
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-full border border-[#EEF2F0] text-[#3D5A50] text-xs hover:bg-[#F7F9F8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D5A50]"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Oze button — 56px tap target */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Oze chat" : "Chat with Oze, Chief Learning Guide"}
        aria-expanded={open}
        className="group relative w-14 h-14 rounded-full bg-[#0A3A2F] shadow-xl shadow-black/20 flex items-center justify-center hover:bg-[#0D4D3D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2E8CE]"
      >
        {/* Pulse ring — idle animation */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full border border-[#A2E8CE]/40 animate-ping" aria-hidden="true" />
            <span className="absolute inset-0 rounded-full border border-[#A2E8CE]/20 animate-ping [animation-delay:0.4s]" aria-hidden="true" />
          </>
        )}
        <Image
          src="/koalalogo.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
