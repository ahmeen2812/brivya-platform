/**
 * BRIVYA SOLUTIONS — "WHY CHOOSE US" CONTENT MANIFEST
 * Authoritative editorial content based on competitive technical differentiators.
 */

export const WHY_US_CONTENT = {
  header: {
    eyebrow: "Why work with us",
    title: "Why Choose Us",
    description:
      "A successful project requires more than standard engineering. It demands careful decisions, strategic expertise, and meticulous attention to execution. That is the operational standard we bring to every engagement.",
  },
  cards: [
    {
      id: "benefit-quality",
      theme: "quality",
      iconType: "shield",
      title: "Uncompromising Quality",
      description:
        "Senior engineers on every project, with code reviews and rigorous technical audits before deployment. We build infrastructure that is highly reliable, easily maintainable, and engineered to peak global standards.",
    },
    {
      id: "benefit-speed",
      theme: "speed",
      iconType: "zap",
      title: "Rapid Execution",
      description:
        "Our modular architecture systems and proprietary testing tooling transition your idea from scoping phase to production scale at remarkable speed. Experience operational velocity without technical debt.",
    },
    {
      id: "benefit-value",
      theme: "value",
      iconType: "wallet",
      title: "Competitive Viability",
      description:
        "By structuring our agency entirely via focused technology specialists and direct-response operational pods, we drastically outpace traditional agency economics. Zero unpredictable invoices—transparent structural pricing.",
    },
  ],
} as const;