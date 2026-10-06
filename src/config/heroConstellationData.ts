/**
 * BRIVYA SOLUTIONS — 3-ORBIT CONSTELLATION DATA MANIFEST
 * Authoritative data for the 3 phased orbit systems:
 * 1. Main Orbit: Web Development -> Cloud -> AI
 * 2. Top-Right Orbit: Google Ads <-> Meta Ads
 * 3. Bottom-Right Orbit: Office Add-ins <-> Google Add-ons
 */

import { OrbitTrackConfig } from "@/types/heroConstellation";

export const CONSTELLATION_CONFIG: readonly OrbitTrackConfig[] = [
  // ===========================================================================
  // 1. MAIN CENTER ORBIT: DEVELOPMENT -> CLOUD -> AI (144° Arc: 288° -> 72°)
  // ===========================================================================
  {
    id: "main-orbit",
    cx: 175,
    cy: 280,
    hubRadius: 85, // 170px diameter
    orbitRadius: 155, // Compact 70px gap from hub
    startAngleDeg: 288, // -72°
    arcSpanDeg: 144, // Exactly 144° (40% of circle)
    speed: 0.038,
    gradientId: "mainOrbitGradient",
    phases: [
      {
        id: "phase-dev",
        title: "Web Development",
        subtitle: "Advanced websites & digital systems",
        centerIcon: "code",
        centerIconType: "code",
        nodes: [
          { id: "node-next", name: "Next.js", iconType: "nextjs" },
          { id: "node-react", name: "React", iconType: "react" },
          { id: "node-ts", name: "TypeScript", iconType: "typescript" },
          { id: "node-shopify", name: "Shopify Plus", iconType: "shopify" },
          { id: "node-python", name: "Python", iconType: "python" },
          { id: "node-postgres", name: "PostgreSQL", iconType: "postgresql" },
          { id: "node-aws", name: "AWS Cloud", iconType: "aws" },
        ],
      },
      {
        id: "phase-cloud",
        title: "Cloud Infrastructure",
        subtitle: "High-availability edge networks",
        centerIcon: "cloud",
        centerIconType: "cloud",
        nodes: [
          { id: "node-cloudflare", name: "Cloudflare", iconType: "cloudflare" },
          { id: "node-aws-c", name: "AWS Compute", iconType: "aws" },
          { id: "node-docker", name: "Docker", iconType: "docker" },
          { id: "node-supabase-c", name: "Supabase", iconType: "supabase" },
          { id: "node-postgres-c", name: "PostgreSQL", iconType: "postgresql" },
          { id: "node-lighthouse", name: "Lighthouse", iconType: "lighthouse" },
        ],
      },
      {
        id: "phase-ai",
        title: "AI & Automation",
        subtitle: "Autonomous task execution workflows",
        centerIcon: "ai",
        centerIconType: "ai",
        nodes: [
          { id: "node-openai", name: "OpenAI", iconType: "openai" },
          { id: "node-python-ai", name: "Python", iconType: "python" },
          { id: "node-zapier", name: "Zapier", iconType: "zapier" },
          { id: "node-hubspot", name: "HubSpot", iconType: "hubspot" },
          { id: "node-whatsapp", name: "WhatsApp", iconType: "whatsapp" },
        ],
      },
    ],
  },

  // ===========================================================================
  // 2. TOP-RIGHT ORBIT: GOOGLE ADS <-> META ADS (144° Arc: 280° -> 64°)
  // ===========================================================================
  {
    id: "top-right-orbit",
    cx: 440,
    cy: 145,
    hubRadius: 62.5, // 125px diameter
    orbitRadius: 110, // Compact track
    startAngleDeg: 280, // -80°
    arcSpanDeg: 144, // Exactly 144°
    speed: 0.046,
    gradientId: "topRightOrbitGradient",
    phases: [
      {
        id: "phase-google-ads",
        title: "Google Ads",
        subtitle: "High-intent acquisition",
        centerIcon: "google-ads",
        centerIconType: "google-ads",
        nodes: [
          { id: "node-g-search", name: "Search Ads", iconType: "google-search" },
          { id: "node-youtube", name: "YouTube Ads", iconType: "youtube" },
          { id: "node-gtm", name: "Tag Manager", iconType: "gtm" },
          { id: "node-ga4", name: "Analytics 4", iconType: "ga4" },
        ],
      },
      {
        id: "phase-meta-ads",
        title: "Meta Ads",
        subtitle: "Data-driven scaling",
        centerIcon: "meta",
        centerIconType: "meta",
        nodes: [
          { id: "node-facebook", name: "Facebook Ads", iconType: "facebook" },
          { id: "node-instagram", name: "Instagram Ads", iconType: "instagram" },
          { id: "node-meta-capi", name: "Meta CAPI", iconType: "meta-capi" },
        ],
      },
    ],
  },

  // ===========================================================================
  // 3. BOTTOM-RIGHT ORBIT: OFFICE ADD-INS <-> GOOGLE ADD-ONS (144° Arc: 296° -> 80°)
  // ===========================================================================
  {
    id: "bottom-right-orbit",
    cx: 440,
    cy: 415,
    hubRadius: 62.5, // 125px diameter
    orbitRadius: 110, // Compact track
    startAngleDeg: 296, // -64°
    arcSpanDeg: 144, // Exactly 144°
    speed: 0.042,
    gradientId: "bottomRightOrbitGradient",
    phases: [
      {
        id: "phase-office",
        title: "Office Add-ins",
        subtitle: "Microsoft 365 tools",
        centerIcon: "microsoft",
        centerIconType: "microsoft",
        nodes: [
          { id: "node-word", name: "Word Add-in", iconType: "word" },
          { id: "node-excel", name: "Excel Add-in", iconType: "excel" },
          { id: "node-powerpoint", name: "PowerPoint", iconType: "powerpoint" },
          { id: "node-outlook", name: "Outlook", iconType: "outlook" },
          { id: "node-teams", name: "Teams App", iconType: "teams" },
        ],
      },
      {
        id: "phase-google-addons",
        title: "Google Add-ons",
        subtitle: "Workspace extensions",
        centerIcon: "workspace",
        centerIconType: "workspace",
        nodes: [
          { id: "node-sheets", name: "Sheets Add-on", iconType: "sheets" },
          { id: "node-docs", name: "Docs Add-on", iconType: "docs" },
          { id: "node-gmail", name: "Gmail Add-on", iconType: "gmail" },
          { id: "node-forms", name: "Forms Add-on", iconType: "forms" },
          { id: "node-drive", name: "Drive Tools", iconType: "drive" },
        ],
      },
    ],
  },
] as const;