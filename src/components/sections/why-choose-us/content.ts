/**
 * BRIVYA SOLUTIONS — "WHY CHOOSE US" CONTENT MANIFEST
 * Clean, authoritative text payload for the editorial structure and premium cards.
 */

import { ConnectedTexture, EngineeringTexture, CommunicationTexture } from "./textures/TextureAssets";

export const WHY_US_CONTENT = {
  header: {
    kicker: "Why Work With Brivya",
    headingPrimary: "Different disciplines.",
    headingSecondary: "One standard of work.",
    thesis:
      "A website, an advertising campaign, and an internal business tool may serve different purposes. We bring the same care to each: understand the problem, choose the right approach, and make the details count.",
  },
  cards: [
    {
      id: "opt-connect",
      title: "01 — Connected Thinking",
      desc: "We consider how websites, digital advertising, and internal systems work together, rather than treating each as an isolated project.",
      theme: "quality",
      vectorId: "network",
    },
    {
      id: "opt-practical",
      title: "02 — Practical Engineering",
      desc: "From cloud infrastructure and databases to AI automation and custom add-ons, we focus on technology that's useful, dependable, and straightforward to maintain.",
      theme: "speed",
      vectorId: "infrastructure",
    },
    {
      id: "opt-clear",
      title: "03 — Clear Communication",
      desc: "We believe good partnerships depend on honest conversations, well-defined expectations, and decisions that make sense to the people paying for the work.",
      theme: "value",
      vectorId: "discussion",
    },
  ]
} as const;

export type WhyUsCardData = typeof WHY_US_CONTENT.cards[0];