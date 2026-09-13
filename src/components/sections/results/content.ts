/**
 * BRIVYA SOLUTIONS — RESULTS DATA MANIFEST
 * Authoritative editorial copy and delivery statistics.
 */

import { ResultsSectionContent } from "./types";

export const RESULTS_CONTENT: ResultsSectionContent = {
  eyebrow: "BRIVYA / DELIVERY RECORD",
  headingPrimary: "Work delivered.",
  headingAccent: "Still moving forward.",
  description:
    "From websites and web applications to Google and Meta advertising, cloud infrastructure, AI automation, and productivity add-ins — we turn ideas into real-world results.",
  metrics: [
    {
      id: "metric-completed",
      iconKey: "completed",
      numericValue: 800, // Reflects the 800–900 delivered range across repeat engagements
      suffix: "+",
      label: "PROJECTS DELIVERED",
      description: "Estimated 800–900 deliveries across repeat client engagements.",
      animationDirection: "left",
    },
    {
      id: "metric-ongoing",
      iconKey: "ongoing",
      numericValue: 8, // Formatted as "08"
      suffix: "",
      label: "ONGOING PROJECTS",
      description: "Active engagements currently in progress.",
      animationDirection: "bottom",
    },
    {
      id: "metric-clients",
      iconKey: "clients",
      numericValue: 650, // Confirmed client count claim
      suffix: "+",
      label: "CLIENTS SERVED",
      description: "Long-term partnerships built on trust and dependable delivery.",
      animationDirection: "right",
    },
  ],
} as const;

