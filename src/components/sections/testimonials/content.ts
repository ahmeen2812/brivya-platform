/**
 * BRIVYA SOLUTIONS — TESTIMONIALS DATA MANIFEST
 * Editorial copy, carousel durations, and review content store.
 */

import { TestimonialsSectionConfig } from "./types";

export const TESTIMONIALS_CONFIG: TestimonialsSectionConfig = {
  header: {
    eyebrow: "CLIENT EXPERIENCES",
    title: "In their words.",
    subtitle:
      "Direct feedback from founders and engineering leaders on digital products built, customer acquisition scaled, and systems automated.",
  },
  carousel: {
    autoPlayDurationMs: 6500, // 6.5s gives ample time to read each review comfortably
    transitionDurationMs: 600, // 600ms smooth physical inertia
    pauseOnHover: true,
    pauseOnFocus: true,
  },
  reviews: [
    {
      id: "review-01",
      quote:
        "Brivya engineered our headless Shopify platform with sub-80ms response times. Their team understands the intersection of high-performance frontend architecture and commercial conversion rates.",
      authorName: "Alexander Wright",
      authorRole: "Chief Technology Officer",
      authorCompany: "Vanguard Commerce",
      initials: "AW",
      ratingStars: 5,
      categoryTag: "Headless E-commerce",
    },
    {
      id: "review-02",
      quote:
        "Our Google Ads and Meta campaigns were restructured from the ground up with server-side CAPI tracking. Within 90 days, our customer acquisition cost dropped by 38% while scaling ad spend profitably.",
      authorName: "Elena Rostova",
      authorRole: "Head of Growth & Media",
      authorCompany: "Aura Health Technologies",
      initials: "ER",
      ratingStars: 5,
      categoryTag: "Customer Acquisition",
    },
    {
      id: "review-03",
      quote:
        "The custom Microsoft Office Add-in and AI document automation pipeline they built eliminated dozens of manual processing hours every week. Dependable engineering with zero operational surprises.",
      authorName: "Marcus Sterling",
      authorRole: "Managing Director",
      authorCompany: "Sterling Capital Advisory",
      initials: "MS",
      ratingStars: 5,
      categoryTag: "Enterprise Add-in",
    },
    {
      id: "review-04",
      quote:
        "Working with Brivya is different from traditional agencies. They treat the entire technical stack, conversion tracking, and advertising as one connected machine. Transparent communication throughout.",
      authorName: "Devon Chen",
      authorRole: "Founder & CEO",
      authorCompany: "Nexus Logistics Cloud",
      initials: "DC",
      ratingStars: 5,
      categoryTag: "SaaS Platform",
    },
  ],
} as const;