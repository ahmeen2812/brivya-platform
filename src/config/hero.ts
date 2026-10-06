/**
 * BRIVYA SOLUTIONS — HERO CONFIGURATION MANIFEST
 * Authoritative editorial content and orbital constellation sequences.
 */

import { HeroEditorialCopy, ConstellationOrbitSystem } from "@/types/hero";

export const HERO_EDITORIAL_COPY: HeroEditorialCopy = {
  kicker: "AI & DIGITAL PRODUCT AGENCY",
  headlineLine1: "Build digital products.",
  headlineLine2: "Acquire customers.",
  headlineLine3: "Scale with systems.",
  description:
    "We combine design, technology, and performance marketing to build scalable business systems that create real growth.",
  primaryCtaText: "Start a Project",
  primaryCtaHref: "/start-project",
  showreelCtaText: "View Showreel",
} as const;

export const CONSTELLATION_SYSTEMS: readonly ConstellationOrbitSystem[] = [
  // ---------------------------------------------------------------------------
  // 1. PRIMARY ORBIT (Large Anchor) — BUILD & ENGINEERING
  // ---------------------------------------------------------------------------
  {
    id: "build",
    systemDesignation: "SYSTEM.01 // BUILD",
    diameter: 460,
    rotationSpeed: 38,
    sequences: [
      {
        id: "web-development",
        title: "Web Development",
        subtitle: "Advanced websites & digital systems",
        glyphType: "code",
        nodes: [
          { id: "node-next", name: "Next.js", role: "Full-Stack Core", iconType: "nextjs", telemetrySpec: "App Router / SSR" },
          { id: "node-react", name: "React", role: "UI Engine", iconType: "react", telemetrySpec: "Server Components" },
          { id: "node-ts", name: "TypeScript", role: "Type Safety", iconType: "typescript", telemetrySpec: "Strict Mode" },
          { id: "node-shopify", name: "Shopify Plus", role: "Commerce Architecture", iconType: "shopify", telemetrySpec: "Storefront API" },
          { id: "node-python", name: "Python", role: "Backend Compute", iconType: "python", telemetrySpec: "FastAPI / Async" },
          { id: "node-postgres", name: "PostgreSQL", role: "Relational DB", iconType: "postgresql", telemetrySpec: "ACID Compliant" },
          { id: "node-aws", name: "AWS", role: "Cloud Infrastructure", iconType: "aws", telemetrySpec: "Serverless Edge" },
        ],
      },
    ],
  },
] as const;