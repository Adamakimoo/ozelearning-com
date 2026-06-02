"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/placeholder-widget";

type Step = "idle" | "qualify" | "capture" | "done";

const qualifyQuestions = [
  {
    id: "need",
    question: "What are you looking to build?",
    options: [
      { label: "Compliance training", value: "compliance" },
      { label: "Employee onboarding", value: "onboarding" },
      { label: "Immersive simulations", value: "simulations" },
      { label: "LMS upgrade", value: "lms" },
      { label: "Something else", value: "other" },
    ],
  },
  {
    id: "timeline",
    question: "When do you need it?",
    options: [
      { label: "ASAP (< 4 weeks)", value: "urgent" },
      { label: "Next quarter", value: "quarter" },
      { label: "Planning stage", value: "planning" },
    ],
  },
];

const idlePrompts = [
  "Want to see how we built a custom onboarding experience for 10,000+ users?",
  "Curious what AI-driven branching looks like in a real compliance module?",
  "Need to upgrade your LMS into something people actually use?",
];

export default function OzeWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("idle");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [promptIndex] = useState(() => Math.floor(Math.random() * idlePrompts.length));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [autoOpened, setAutoOpened] = useState(false);

  // Auto-open after 45s on first visit
  useEffect(() => {
    if (autoOpened) return;
    const timer = setTimeout(() => {
      setOpen(true);
      setAutoOpened(true);
    }, 45000);
    return () => clearTimeout(timer);
  }, [autoOpened]);

  // Exit-intent detection on desktop
  useEffect(() => {
    if (autoOpened) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !open) {
        setOpen(true);
        setAutoOpened(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [open, autoOpened]);

  const handleOpen = useCallback(() => {
    setOpen((o) => !o);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "widget_open", {
        event_category: "Lead Generation",
        event_label: "Oze Widget",
      });
    }
  }, []);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    if (questionIndex < qualifyQuestions.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      setStep("capture");
    }
  };

  const handleCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("source", "oze-widget");
    Object.entries(answers).forEach(([k, v]) => data.append(k, v));
    data.append("_subject", `Widget Lead: ${answers.need || "General"} — ${name}`);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
    } catch {}
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "Lead Generation",
        event_label: "Widget Capture",
        value: 1,
      });
    }
    setLoading(false);
    setStep("done");
  };

  const currentQuestion = qualifyQuestions[questionIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Widget panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Oze"
          aria-modal="false"
          className="w-80 bg-white rounded-2xl shadow-2xl border border-[#EEF2F0] overflow-hidden"
          style={{ animation: "fadeSlideUp 0.2s ease" }}
        >
          {/* Header */}
          <div className="bg-[#0A3A2F] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#A2E8CE] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold text-[#A2E8CE] uppercase tracking-wider">
                Oze · Chief Learning Guide
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-white/40 hover:text-white transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            {step === "idle" && (
              <>
                <p className="text-[#0A3A2F] text-sm leading-relaxed mb-4">
                  Hi! I&apos;m Oze. {idlePrompts[promptIndex]}
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => { setStep("qualify"); setQuestionIndex(0); }}
                    className="w-full text-center px-4 py-2.5 rounded-full bg-[#0A3A2F] text-[#A2E8CE] text-xs font-semibold hover:bg-[#0D4D3D] transition-colors"
                  >
                    Tell me what you need →
                  </button>
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="w-full text-center px-4 py-2.5 rounded-full border border-[#EEF2F0] text-[#3D5A50] text-xs hover:bg-[#F7F9F8] transition-colors"
                  >
                    Go to contact form
                  </Link>
                </div>
              </>
            )}

            {step === "qualify" && currentQuestion && (
              <>
                <p className="text-[#0A3A2F] text-sm font-semibold mb-3">
                  {currentQuestion.question}
                </p>
                <div className="flex flex-col gap-2">
                  {currentQuestion.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                      className="w-full text-left px-4 py-2.5 rounded-xl border border-[#EEF2F0] text-sm text-[#3D5A50] hover:border-[#A2E8CE] hover:bg-[#A2E8CE]/5 transition-all"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#3D5A50]/50 mt-3 text-center">
                  Step {questionIndex + 1} of {qualifyQuestions.length}
                </p>
              </>
            )}

            {step === "capture" && (
              <>
                <p className="text-[#0A3A2F] text-sm font-semibold mb-1">
                  Great — almost there.
                </p>
                <p className="text-[#3D5A50] text-xs mb-4">
                  Drop your name and email and we&apos;ll send you ideas within one business day.
                </p>
                <form onSubmit={handleCapture} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-3 py-2.5 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] transition"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email"
                    className="w-full px-3 py-2.5 rounded-xl border border-[#EEF2F0] bg-[#F7F9F8] text-[#0A3A2F] text-sm placeholder:text-[#3D5A50]/40 focus:outline-none focus:ring-2 focus:ring-[#A2E8CE] transition"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-full bg-[#0A3A2F] text-[#A2E8CE] text-xs font-semibold hover:bg-[#0D4D3D] disabled:opacity-60 transition-colors"
                  >
                    {loading ? "Sending…" : "Get ideas from OZE →"}
                  </button>
                </form>
              </>
            )}

            {step === "done" && (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-[#A2E8CE]/20 flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#0A3A2F]" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-semibold text-[#0A3A2F] text-sm mb-1">You&apos;re on the list!</p>
                <p className="text-[#3D5A50] text-xs">
                  Expect ideas in your inbox within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Launcher button */}
      <button
        onClick={handleOpen}
        aria-label={open ? "Close Oze chat" : "Chat with Oze, Chief Learning Guide"}
        aria-expanded={open}
        className="group relative w-20 h-20 rounded-full bg-[#0A3A2F] shadow-xl shadow-black/20 flex items-center justify-center hover:bg-[#0D4D3D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2E8CE]"
      >
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full border border-[#A2E8CE]/40 animate-ping" aria-hidden="true" />
            <span className="absolute inset-0 rounded-full border border-[#A2E8CE]/20 animate-ping [animation-delay:0.4s]" aria-hidden="true" />
          </>
        )}
        <Image
          src="/koalalogo.svg"
          alt=""
          width={56}
          height={56}
          className="w-14 h-14 object-contain"
          aria-hidden="true"
        />
      </button>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
