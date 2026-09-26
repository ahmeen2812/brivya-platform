/**
 * BRIVYA SOLUTIONS — "WHY CHOOSE US" CONTENT MANIFEST
 * Authoritative editorial content and contextual benefit configurations.
 */

export const WHY_US_CONTENT = {
  header: {
    eyebrow: "WHY WORK WITH BRIVYA",
    title: "Different disciplines. One standard of work.",
    description:
      "A website, an advertising campaign, and an internal business tool may serve different purposes. We bring the same care to each: understand the problem, choose the right approach, and make the details count.",
  },
  cards: [
    {
      id: "benefit-systems",
      theme: "quality",
      iconType: "network", 
      title: "01 — Connected Thinking",
      description:
        "We consider how websites, digital advertising, and internal systems work together, rather than treating each as an isolated project.",
    },
    {
      id: "benefit-practical",
      theme: "speed",
      iconType: "engineering",
      title: "02 — Practical Engineering",
      description:
        "From cloud infrastructure and databases to AI automation and custom add-ons, we focus on technology that's useful, dependable, and straightforward to maintain.",
    },
    {
      id: "benefit-communication",
      theme: "value",
      iconType: "communication",
      title: "03 — Clear Communication",
      description:
        "We believe good partnerships depend on honest conversations, well-defined expectations, and decisions that make sense to the people paying for the work.",
    },
  ],
} as const;