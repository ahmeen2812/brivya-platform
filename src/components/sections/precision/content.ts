import { PrecisionSectionContent } from "./types";

export const PRECISION_CONTENT: PrecisionSectionContent = {
  eyebrow: "AUDITED ENGINEERING PRACTICE",
  indexCode: "SPEC: BRV-VERIFIED-V3",
  headline: {
    line1: "Code that performs.",
    line2Accent: "Data that accounts.",
    line3: "Systems that scale.",
  },
  thesis:
    "We do not build speculative templates or deploy unmonitored advertising campaigns. Every digital product is engineered with strict type contracts, edge delivery standards, and first-party attribution pipelines.",

  metrics: [
    {
      id: "metric-latency",
      index: "01",
      value: "< 80ms",
      unit: "TTFB",
      label: "Edge Response Standard",
      benchmarkStandard: "Global CDN delivery on Cloudflare & AWS edge networks",
      verificationBadge: "Audited SLA",
    },
    {
      id: "metric-types",
      index: "02",
      value: "100%",
      unit: "STRICT",
      label: "Type Contract Integrity",
      benchmarkStandard: "Zero implicit-any TypeScript across production codebases",
      verificationBadge: "Type-Safe Core",
    },
    {
      id: "metric-attribution",
      index: "03",
      value: "First-Party",
      unit: "CAPI",
      label: "Conversion Attribution",
      benchmarkStandard: "Server-side event matching bypassing browser tracking loss",
      verificationBadge: "CAPI Protocol",
    },
    {
      id: "metric-uptime",
      index: "04",
      value: "99.95%",
      unit: "SLA",
      label: "Platform Availability",
      benchmarkStandard: "Multi-region failover with automated self-healing",
      verificationBadge: "SLA Standard",
    },
  ],

  ledgerEntries: [
    {
      id: "ledger-01",
      code: "DEP-094",
      clientSector: "Enterprise Commerce Ecosystem",
      deliverable: "Headless Storefront & Checkout Architecture",
      technicalArchitecture: "Next.js 15 · Shopify Plus · Edge Caching",
      verifiedOutcome: "Sub-second product hydration & 99+ Core Vitals",
      timestamp: "Q1 // 2026",
    },
  ],

  plateNodes: [
    {
      id: "pin-01",
      label: "EDGE_RUNTIME",
      specification: "Sub-80ms Global Handshake",
      coordinatePercent: { x: 18, y: 26 },
      status: "verified",
    },
    {
      id: "pin-02",
      label: "TYPE_SAFETY",
      specification: "Strict Schema Contract",
      coordinatePercent: { x: 76, y: 30 },
      status: "compiled",
    },
  ],
} as const;