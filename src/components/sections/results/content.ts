/**
 * BRIVYA SOLUTIONS — RESULTS DATA MANIFEST
 * Editorial copy and configurable project delivery metrics.
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
      numericValue: 240, // Configurable target number (animates from 0 to 240)
      suffix: "+",
      label: "PROJECTS COMPLETED",
      description: "Across web, advertising, and custom business solutions.",
      animationDirection: "left",
    },
    {
      id: "metric-ongoing",
      iconKey: "ongoing",
      numericValue: 8, // Configurable active engagements count (animates from 0 to 8)
      suffix: "",
      label: "ONGOING PROJECTS",
      description: "Active engagements currently in progress.",
      animationDirection: "bottom",
    },
    {
      id: "metric-clients",
      iconKey: "clients",
      numericValue: 650, // Confirmed client count (animates from 0 to 650)
      suffix: "+",
      label: "CLIENTS SERVED",
      description: "Long-term partnerships built on trust and dependable delivery.",
      animationDirection: "right",
    },
  ],
} as const;