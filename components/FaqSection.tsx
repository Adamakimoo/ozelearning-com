"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    question: "What does an eLearning agency do?",
    answer:
      "An eLearning agency designs, develops, and deploys digital learning experiences for organisations. This includes custom SCORM/xAPI modules, compliance training, employee onboarding programs, immersive simulations, and LMS/LXP implementation. OZE Learning builds end-to-end digital learning solutions for enterprise workforces across Australia and globally.",
  },
  {
    question: "How much does custom eLearning development cost in Australia?",
    answer:
      "Custom eLearning development in Australia typically ranges from $15,000 to $150,000+ depending on complexity, interactivity, and duration. A single compliance module with branching scenarios might cost $20,000–$40,000, while a full learning ecosystem with LMS integration and multiple programs can exceed $100,000. OZE Learning provides transparent scoping and fixed-price proposals.",
  },
  {
    question: "What is the difference between SCORM and xAPI?",
    answer:
      "SCORM is the traditional eLearning standard that tracks completions and scores within an LMS. xAPI (Tin Can API) is the modern standard that tracks any learning activity — including simulations, mobile apps, and on-the-job performance — and stores data in a Learning Record Store (LRS). xAPI provides far richer analytics and works outside the LMS environment.",
  },
  {
    question: "How long does it take to build an eLearning course?",
    answer:
      "A standard eLearning module typically takes 4–8 weeks from brief to delivery. Complex simulations or multi-module programs take 8–16 weeks. OZE Learning's average time-to-build is 6 weeks for a full compliance or onboarding program, using an agile production process with client review checkpoints at each stage.",
  },
  {
    question: "What industries does OZE Learning work with?",
    answer:
      "OZE Learning builds digital learning solutions for Financial Services, Healthcare & Aged Care, Resources & Mining, Government & Public Sector, Retail & FMCG, and Professional Services. Our programs are designed for Australia's most complex regulatory and workforce environments, including WHS compliance, clinical training, and enterprise onboarding at scale.",
  },
  {
    question: "Can you integrate eLearning with our existing LMS?",
    answer:
      "Yes. OZE Learning builds SCORM 1.2, SCORM 2004, xAPI, and cmi5-compliant content that integrates with all major LMS platforms including Cornerstone, SAP SuccessFactors, Moodle, TalentLMS, Docebo, and custom LMS environments. We also provide LMS migration, upgrade, and LXP implementation services.",
  },
  {
    question: "What makes OZE Learning different from other eLearning agencies?",
    answer:
      "OZE Learning combines human-centric storytelling with advanced EdTech infrastructure. Every program starts with narrative design — the kind that drives genuine engagement — then wraps it in AI-driven adaptive pathways, xAPI analytics, and immersive simulations. Our enterprise compliance programs average a 94% engagement completion rate, not because they're mandatory, but because they're designed around real situations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0D4D3D] mb-4">
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className="font-heading text-4xl lg:text-5xl font-bold text-[#0A3A2F] leading-tight"
          >
            Everything you need to know
          </h2>
          <p className="mt-4 text-[#3D5A50] text-lg max-w-2xl mx-auto">
            Answers to the questions L&amp;D leaders ask us most.
          </p>
        </AnimateIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={i * 0.04}>
              <div className="border border-[#EEF2F0] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#F7F9F8] hover:bg-[#EEF2F0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A2E8CE]"
                >
                  <span className="font-semibold text-[#0A3A2F] text-base pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#A2E8CE]/20 flex items-center justify-center transition-transform duration-200 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      className="w-3 h-3 text-[#0A3A2F]"
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 py-5 bg-white">
                    <p className="text-[#3D5A50] leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
