export const colors = {
  emeraldDeep:    "#0A3A2F",
  emeraldMid:     "#0D4D3D",
  emeraldLight:   "#155E4A",
  mint:           "#A2E8CE",
  mintDim:        "#6DD4B0",
  purpleEucalypt: "#C3B1E1",
  canvas:         "#F7F9F8",
  canvasDark:     "#EEF2F0",
  ink:            "#0D1A16",
  inkMuted:       "#3D5A50",
} as const;

export const stats = [
  { value: 94, suffix: "%", label: "Engagement Completion Rate", note: "Across enterprise deployments 2023–24" },
  { value: 3.5, suffix: "x", label: "Faster Time-to-Competency", note: "vs. traditional classroom delivery" },
  { value: 100, suffix: "%", label: "xAPI Ready", note: "Full data tracking & LRS integration" },
] as const;

export const capabilities = [
  {
    title: "Bespoke Digital Learning",
    outcome: "Purpose-built modules your workforce actually completes.",
    description:
      "Tailored compliance, onboarding, and leadership programs designed from scratch around your people, not a template.",
    deliveredVia: ["SCORM / xAPI", "Mobile-First Web App", "Articulate Storyline 360"],
    accent: "mint",
  },
  {
    title: "Immersive Simulations",
    outcome: "Let people fail safely — and master complex skills faster.",
    description:
      "Scenario-based learning environments that replicate real-world pressure, using AI branching and interactive video.",
    deliveredVia: ["Generative AI Prompts", "Interactive Video", "Branching Logic"],
    accent: "purple",
  },
  {
    title: "Learning Ecosystem Architecture",
    outcome: "Transform your legacy LMS into a learning hub people seek out.",
    description:
      "We upgrade ageing infrastructure into modern, engaging platforms backed by analytics that prove ROI.",
    deliveredVia: ["Next-Gen LXP Integration", "Analytics Dashboards", "Custom UI"],
    accent: "mint",
  },
] as const;
