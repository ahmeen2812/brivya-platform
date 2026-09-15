/**
 * BRIVYA SOLUTIONS — REVIEWS DATA MANIFEST
 * Authoritative data store containing 12 reviews, carousel timing, and trust header copy.
 */

import { ReviewItem } from "./types";

export const TESTIMONIALS_DATA = {
  trustHeader: {
    statement: "Trusted by 650+ clients worldwide.",
    showStars: true,
  },
  header: {
    eyebrow: "CLIENT EXPERIENCES",
    title: "In their words.",
    subtitle:
      "Direct feedback from founders and engineering leaders on digital products built, customer acquisition scaled, and systems automated.",
  },
  carouselConfig: {
    autoPlayDurationSec: 6.5, // 6.5s reading duration
    transitionDurationSec: 0.65, // 650ms physical 3D transition
  },
  reviews: [
    {
      id: "rev-01",
      name: "Alexander Wright",
      quote:
        "Brivya engineered our headless Shopify platform with sub-80ms response times. Their team understands the intersection of high-performance frontend architecture and commercial conversion rates.",
      initials: "AW",
    },
    {
      id: "rev-02",
      name: "Elena Rostova",
      quote:
        "Our Google Ads and Meta campaigns were restructured from the ground up with server-side CAPI tracking. Within 90 days, our customer acquisition cost dropped by 38% while scaling ad spend profitably.",
      initials: "ER",
    },
    {
      id: "rev-03",
      name: "Marcus Sterling",
      quote:
        "The custom Microsoft Office Add-in and AI document automation pipeline they built eliminated dozens of manual processing hours every week. Dependable engineering with zero operational surprises.",
      initials: "MS",
    },
    {
      id: "rev-04",
      name: "Devon Chen",
      quote:
        "Working with Brivya is different from traditional agencies. They treat the entire technical stack, conversion tracking, and advertising as one connected machine. Transparent communication throughout.",
      initials: "DC",
    },
    {
      id: "rev-05",
      name: "Sophia Martinez",
      quote:
        "From our initial wireframes to production deployment on Next.js, Brivya delivered with precision. The platform feels like a custom digital operating system rather than an agency template.",
      initials: "SM",
    },
    {
      id: "rev-06",
      name: "Julian Vance",
      quote:
        "Their team integrated custom AI workflows into our internal ERP that automatically classify and route incoming client inquiries. The latency and accuracy have been remarkable.",
      initials: "JV",
    },
    {
      id: "rev-07",
      name: "Amara Patel",
      quote:
        "Our previous agency struggled with attribution after iOS privacy updates. Brivya deployed first-party server-side tagging that restored deterministic measurement across all paid channels.",
      initials: "AP",
    },
    {
      id: "rev-08",
      name: "Harrison Forde",
      quote:
        "The Google Workspace add-on engineered by Brivya streamlined our financial reporting models in Google Sheets. It works seamlessly across our entire global operations team.",
      initials: "HF",
    },
    {
      id: "rev-09",
      name: "Claire Beauchamp",
      quote:
        "Technical competence combined with commercial awareness. They optimized our web vitals to 99+ while simultaneously improving checkout flow throughput.",
      initials: "CB",
    },
    {
      id: "rev-10",
      name: "Liam O'Connor",
      quote:
        "Brivya took over a legacy code repository full of technical debt, refactored it into clean TypeScript, and deployed it on edge infrastructure with zero customer downtime.",
      initials: "LO",
    },
    {
      id: "rev-11",
      name: "Naomi Takahashi",
      quote:
        "Their creative testing framework on Meta Ads consistently finds winning ad variations. We have expanded our ad spend fourfold with predictable return on investment.",
      initials: "NT",
    },
    {
      id: "rev-12",
      name: "Gabriel Dupont",
      quote:
        "Professional partners who meet deadlines and communicate clearly. The software infrastructure they established will support our product roadmap for years to come.",
      initials: "GD",
    },
  ] as readonly ReviewItem[],
} as const;