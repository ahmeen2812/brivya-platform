/**
 * BRIVYA SOLUTIONS — HERO CONFIGURATION MANIFEST
 * Authoritative editorial content and orbital constellation sequences.
 */

import { HeroEditorialCopy, ConstellationOrbitSystem } from "@/types/hero";

export const HERO_EDITORIAL_COPY: HeroEditorialCopy = {
  kicker: "DIGITAL AGENCY + PRODUCT STUDIO",
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
    rotationSpeed: 38, // 38s per 360-degree rotation
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
      {
        id: "ai-agents",
        title: "AI Agents",
        subtitle: "Autonomous task execution workflows",
        glyphType: "ai",
        nodes: [
          { id: "node-openai", name: "OpenAI", role: "LLM Intelligence", iconType: "openai", telemetrySpec: "GPT-4o API" },
          { id: "node-python-ai", name: "Python", role: "Agent Runtime", iconType: "python", telemetrySpec: "LangChain / Tools" },
          { id: "node-supabase-vec", name: "Supabase", role: "Vector Store", iconType: "supabase", telemetrySpec: "pgvector Indexing" },
          { id: "node-zapier", name: "Zapier", role: "Workflow Triggers", iconType: "zapier", telemetrySpec: "Automated ETL" },
          { id: "node-hubspot", name: "HubSpot", role: "CRM Synchronization", iconType: "hubspot", telemetrySpec: "Bidirectional Sync" },
          { id: "node-whatsapp", name: "WhatsApp", role: "Client Routing", iconType: "whatsapp", telemetrySpec: "Cloud Messaging" },
        ],
      },
      {
        id: "cloud-infrastructure",
        title: "Cloud Infrastructure",
        subtitle: "High-availability edge networks",
        glyphType: "cloud",
        nodes: [
          { id: "node-cloudflare", name: "Cloudflare", role: "Edge Network & WAF", iconType: "cloudflare", telemetrySpec: "DDoS Mitigation" },
          { id: "node-aws-infra", name: "AWS Cloud", role: "Compute Cluster", iconType: "aws", telemetrySpec: "ECS / Auto-scaling" },
          { id: "node-docker", name: "Docker", role: "Containerization", iconType: "docker", telemetrySpec: "Zero Downtime" },
          { id: "node-lighthouse", name: "Lighthouse", role: "Performance Vitals", iconType: "lighthouse", telemetrySpec: "100/100 Target" },
          { id: "node-postgres-ha", name: "Postgres HA", role: "Database Replication", iconType: "postgresql", telemetrySpec: "Encrypted Storage" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. SATELLITE ORBIT (Top Right) — ACQUISITION & MEDIA
  // ---------------------------------------------------------------------------
  {
    id: "acquire",
    systemDesignation: "SYSTEM.02 // ACQUIRE",
    diameter: 280,
    rotationSpeed: 28,
    sequences: [
      {
        id: "google-ads",
        title: "Google Ads",
        subtitle: "High-intent customer acquisition",
        glyphType: "google-ads",
        nodes: [
          { id: "node-g-search", name: "Search Ads", role: "Commercial Intent", iconType: "google-search", telemetrySpec: "Negative Keyword Matrix" },
          { id: "node-youtube", name: "YouTube Ads", role: "Direct Response", iconType: "youtube", telemetrySpec: "Video Action Campaigns" },
          { id: "node-gtm", name: "GTM Server-Side", role: "First-Party Tracking", iconType: "gtm", telemetrySpec: "Data Loss Prevention" },
          { id: "node-ga4", name: "GA4 Analytics", role: "Predictive Audience", iconType: "ga4", telemetrySpec: "Conversion Modeling" },
        ],
      },
      {
        id: "meta-ads",
        title: "Meta Ads",
        subtitle: "Data-driven campaigns at scale",
        glyphType: "meta",
        nodes: [
          { id: "node-facebook", name: "Facebook Ads", role: "Advantage+ Scaling", iconType: "facebook", telemetrySpec: "Dynamic Catalog" },
          { id: "node-instagram", name: "Instagram Ads", role: "Visual Acquisition", iconType: "instagram", telemetrySpec: "Story & Reel Funnels" },
          { id: "node-meta-capi", name: "Meta CAPI", role: "Server Tracking Loop", iconType: "meta-ads", telemetrySpec: "Direct Event Match" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. SATELLITE ORBIT (Bottom Right) — EXTEND & PRODUCTIVITY
  // ---------------------------------------------------------------------------
  {
    id: "extend",
    systemDesignation: "SYSTEM.03 // EXTEND",
    diameter: 280,
    rotationSpeed: 32,
    sequences: [
      {
        id: "office-addins",
        title: "Office Add-ins",
        subtitle: "Microsoft 365 enterprise tools",
        glyphType: "microsoft",
        nodes: [
          { id: "node-word", name: "Word Add-in", role: "Document Automation", iconType: "word", telemetrySpec: "Office.js API" },
          { id: "node-excel", name: "Excel Add-in", role: "Financial Ribbon Tools", iconType: "excel", telemetrySpec: "Custom Functions" },
          { id: "node-outlook", name: "Outlook Add-in", role: "CRM Mail Sidebar", iconType: "outlook", telemetrySpec: "REST Event Sync" },
          { id: "node-teams", name: "Teams Apps", role: "Collaborative Bots", iconType: "teams", telemetrySpec: "Adaptive Cards" },
        ],
      },
      {
        id: "google-addons",
        title: "Google Add-ons",
        subtitle: "Workspace ecosystem extensions",
        glyphType: "workspace",
        nodes: [
          { id: "node-sheets", name: "Sheets Add-on", role: "Custom Business Models", iconType: "sheets", telemetrySpec: "SpreadsheetApp" },
          { id: "node-docs", name: "Docs Add-on", role: "Automated Merging", iconType: "docs", telemetrySpec: "DocumentApp Engine" },
          { id: "node-gmail", name: "Gmail Add-on", role: "Actionable Message Cards", iconType: "gmail", telemetrySpec: "Contextual Triggers" },
          { id: "node-forms", name: "Forms Add-on", role: "Intelligent Workflows", iconType: "forms", telemetrySpec: "Event Triggers" },
        ],
      },
    ],
  },
] as const;