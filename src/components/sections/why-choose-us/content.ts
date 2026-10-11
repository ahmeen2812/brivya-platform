/**
 * BRIVYA SOLUTIONS — "WHY WORK WITH BRIVYA" CONTENT MANIFEST
 * Authoritative editorial copy and canonical TypeScript data contracts.
 */

export interface WhyUsCardData {
  readonly id: string;
  readonly title: string;
  readonly desc: string;
  readonly theme: "blue" | "green" | "purple";
  readonly vectorId: "network" | "engineering" | "communication";
}

export interface WhyUsHeaderData {
  readonly eyebrow: string;
  readonly kicker: string;
  readonly headingPrimary: string;
  readonly headingSecondary: string;
  readonly thesis: string;
}

export interface WhyUsContent {
  readonly header: WhyUsHeaderData;
  readonly cards: readonly WhyUsCardData[];
}

export const WHY_US_CONTENT: WhyUsContent = {
  header: {
    eyebrow: "WHY WORK WITH BRIVYA",
    kicker: "WHY WORK WITH BRIVYA",
    headingPrimary: "Different disciplines.",
    headingSecondary: "One standard of work.",
    thesis:
      "A website, an advertising campaign, and an internal business tool may serve different purposes. We bring the same care to each: understand the problem, choose the right approach, and make the details count.",
  },
  cards: [
    {
      id: "card-connected-thinking",
      title: "01 — Connected Thinking",
      desc: "We consider how websites, digital advertising, and internal systems work together, rather than treating each as an isolated project.",
      theme: "blue",
      vectorId: "network",
    },
    {
      id: "card-practical-engineering",
      title: "02 — Practical Engineering",
      desc: "From cloud infrastructure and databases to AI automation and custom add-ons, we focus on technology that's useful, dependable, and straightforward to maintain.",
      theme: "green",
      vectorId: "engineering",
    },
    {
      id: "card-clear-communication",
      title: "03 — Clear Communication",
      desc: "We believe good partnerships depend on honest conversations, well-defined expectations, and decisions that make sense to the people paying for the work.",
      theme: "purple",
      vectorId: "communication",
    },
  ],
} as const;