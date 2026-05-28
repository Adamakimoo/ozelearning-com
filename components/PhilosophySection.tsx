"use client";

import AnimateIn from "./AnimateIn";

function StoryCircuitGraphic() {
  return (
    <svg
      viewBox="0 0 400 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md mx-auto"
      aria-hidden="true"
    >
      {/* Background glow */}
      <ellipse cx="200" cy="170" rx="180" ry="150" fill="url(#bgGlow)" opacity="0.12" />

      {/* Flowing narrative thread */}
      <path
        d="M 30 200 Q 100 120 160 170 Q 220 220 280 150 Q 340 80 370 140"
        stroke="#A2E8CE"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="6 4"
        opacity="0.7"
      />

      {/* Digital node connections */}
      <line x1="100" y1="80"  x2="200" y2="170" stroke="#C3B1E1" strokeWidth="1" opacity="0.4" />
      <line x1="300" y1="60"  x2="200" y2="170" stroke="#C3B1E1" strokeWidth="1" opacity="0.4" />
      <line x1="350" y1="250" x2="200" y2="170" stroke="#C3B1E1" strokeWidth="1" opacity="0.4" />
      <line x1="50"  y1="260" x2="200" y2="170" stroke="#C3B1E1" strokeWidth="1" opacity="0.4" />
      <line x1="160" y1="40"  x2="200" y2="170" stroke="#A2E8CE" strokeWidth="1" opacity="0.3" />

      {/* Peripheral nodes */}
      {[
        [100, 80],  [300, 60],  [350, 250],
        [50, 260],  [160, 40],  [340, 160],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="#0A3A2F" stroke="#A2E8CE" strokeWidth="1.5" opacity="0.6" />
          <circle cx={cx} cy={cy} r="2" fill="#A2E8CE" opacity="0.8" />
        </g>
      ))}

      {/* Central node — the intersection */}
      <circle cx="200" cy="170" r="28" fill="url(#centralGrad)" />
      <circle cx="200" cy="170" r="20" fill="#0A3A2F" />
      <circle cx="200" cy="170" r="6"  fill="#A2E8CE" />

      {/* Orbit ring */}
      <circle cx="200" cy="170" r="36" stroke="#A2E8CE" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />

      {/* Labels */}
      <text x="78" y="72"  fontSize="9" fill="#A2E8CE" opacity="0.7" textAnchor="middle">story</text>
      <text x="300" y="52" fontSize="9" fill="#C3B1E1" opacity="0.7" textAnchor="middle">AI</text>
      <text x="350" y="268" fontSize="9" fill="#A2E8CE" opacity="0.7" textAnchor="middle">data</text>
      <text x="42" y="278" fontSize="9" fill="#C3B1E1" opacity="0.7" textAnchor="middle">human</text>
      <text x="160" y="30" fontSize="9" fill="#A2E8CE" opacity="0.7" textAnchor="middle">culture</text>

      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A2E8CE" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="centralGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A2E8CE" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0A3A2F" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function PhilosophySection() {
  return (
    <section
      id="about"
      className="bg-[#F7F9F8] py-24 lg:py-32"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <AnimateIn>
          <p className="text-[#A2E8CE] text-xs font-semibold tracking-[0.15em] uppercase mb-4"
             style={{ color: "#0D4D3D" }}>
            Our Philosophy
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — graphic */}
          <AnimateIn direction="left" delay={0.1}>
            <div className="relative bg-[#0A3A2F] rounded-3xl p-10 lg:p-14 aspect-square max-w-md mx-auto lg:mx-0 flex items-center justify-center overflow-hidden">
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(#A2E8CE 1px, transparent 1px), linear-gradient(90deg, #A2E8CE 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
                aria-hidden="true"
              />
              <StoryCircuitGraphic />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-[#A2E8CE]/50 text-xs tracking-widest uppercase">
                  The Storytelling Circuit
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Right — copy */}
          <div className="space-y-10">
            <AnimateIn delay={0.15}>
              <h2
                id="philosophy-heading"
                className="font-heading text-4xl lg:text-5xl font-bold text-[#0A3A2F] leading-tight"
              >
                Before the technology,
                <br />
                <span className="text-[#0D4D3D]">comes the hook.</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.22}>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#A2E8CE]/20 flex items-center justify-center">
                    <span className="text-[#0A3A2F] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[#0A3A2F] mb-2">Human-Centric Narrative</h3>
                    <p className="text-[#3D5A50] leading-relaxed">
                      Every module, simulation, and platform we build starts with foundational
                      human storytelling — the kind that drives authentic engagement and
                      retention because it mirrors how people actually process and remember.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#C3B1E1]/20 flex items-center justify-center">
                    <span className="text-[#0A3A2F] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[#0A3A2F] mb-2">Advanced EdTech Engine</h3>
                    <p className="text-[#3D5A50] leading-relaxed">
                      We then wrap that narrative in tomorrow&apos;s infrastructure — AI-driven
                      adaptive pathways, immersive simulations, and analytics-backed platforms
                      that deliver measurable organisational growth you can take to the board.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <blockquote className="border-l-2 border-[#A2E8CE] pl-5 italic text-[#3D5A50]">
                &ldquo;The best eLearning doesn&apos;t feel like eLearning. It feels like an
                experience you wanted to have.&rdquo;
              </blockquote>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
