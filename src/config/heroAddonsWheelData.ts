/**
 * BRIVYA SOLUTIONS — HERO ADDONS WHEEL CONFIGURATION MANIFEST
 * Authoritative data for the 10-node continuous conveyor stream
 * (5 Google Add-ons -> 5 Office Add-ins) with rich hover tooltips.
 */

import {
  AddonsWheelDimensions,
  AddonsWheelPhaseConfig,
  AddonsWheelNode,
} from "@/types/heroAddonsWheel";

// Exact Measurable Targets: 126px hub, 108px orbit radius, 45px clearance
export const ADDONS_WHEEL_DIMENSIONS: AddonsWheelDimensions = {
  viewBoxSize: 360,
  cx: 170,
  cy: 170,
  hubRadius: 63, // 126px diameter center circle
  orbitRadius: 108, // Compact 45px gap from hub edge
  arcStartDeg: -64, // 296° (-64°)
  arcSpanDeg: 144, // Exactly 144° right-facing arc (ends at +80°)
} as const;

export const ADDONS_WHEEL_PHASES: readonly AddonsWheelPhaseConfig[] = [
  {
    id: "google-addons",
    title: "Google Add-ons",
    subtitle: "Workspace ecosystem extensions",
    centerIcon: "workspace",
    accentColor: "#4285F4",
  },
  {
    id: "office-addins",
    title: "Office Add-ins",
    subtitle: "Microsoft 365 custom solutions",
    centerIcon: "microsoft",
    accentColor: "#0078D4",
  },
] as const;

// 10-Node Continuous Conveyor Stream (5 Google Add-ons -> 5 Office Add-ins)
// Spaced by exactly 36° around a seamless 360° circle (10 x 36° = 360°)
export const ADDONS_NODE_STREAM: readonly AddonsWheelNode[] = [
  // 1. Google Workspace Add-ons Sequence (Nodes 0 - 4)
  {
    id: "node-sheets",
    name: "Google Sheets Add-on",
    role: "Financial & Data Models",
    description: "We build custom formula ribbons, automated external API feeds, and financial modeling tools.",
    categoryId: "google-addons",
    iconKey: "sheets",
  },
  {
    id: "node-docs",
    name: "Google Docs Add-on",
    role: "Document Automation",
    description: "We develop dynamic template merges, legal contract generators, and collaborative publishing sidebars.",
    categoryId: "google-addons",
    iconKey: "docs",
  },
  {
    id: "node-gmail",
    name: "Gmail Add-on",
    role: "CRM & Mail Automation",
    description: "We deploy contextual email action cards, customer support sidebars, and automated ticket logging.",
    categoryId: "google-addons",
    iconKey: "gmail",
  },
  {
    id: "node-forms",
    name: "Google Forms Add-on",
    role: "Workflow Validation",
    description: "We configure automated response validation, custom webhook triggers, and enterprise notification routes.",
    categoryId: "google-addons",
    iconKey: "forms",
  },
  {
    id: "node-apps-script",
    name: "Apps Script & APIs",
    role: "Serverless GCP Engines",
    description: "We integrate Google Cloud endpoints, OAuth2 permissions, and scheduled enterprise automation scripts.",
    categoryId: "google-addons",
    iconKey: "apps-script",
  },

  // 2. Microsoft Office 365 Add-ins Sequence (Nodes 5 - 9)
  {
    id: "node-excel",
    name: "Excel Web Add-in",
    role: "Calculation Engines",
    description: "We engineer custom ribbon actions, complex calculation models, and real-time ERP data connectors.",
    categoryId: "office-addins",
    iconKey: "excel",
  },
  {
    id: "node-word",
    name: "Word Web Add-in",
    role: "Contract & Doc Systems",
    description: "We architect automated drafting wizards, compliant document builders, and clause library sidebars.",
    categoryId: "office-addins",
    iconKey: "word",
  },
  {
    id: "node-outlook",
    name: "Outlook Add-in",
    role: "Mail & Calendar Sync",
    description: "We create secure email tracking sidebars, CRM auto-filing tools, and meeting booking interfaces.",
    categoryId: "office-addins",
    iconKey: "outlook",
  },
  {
    id: "node-teams",
    name: "Teams Collaborative Apps",
    role: "Enterprise Messaging",
    description: "We build interactive bot extensions, project dashboard tabs, and adaptive card notification meshes.",
    categoryId: "office-addins",
    iconKey: "teams",
  },
  {
    id: "node-vsto",
    name: "VSTO to Web Migration",
    role: "Modernization Protocol",
    description: "We modernize legacy COM/VSTO desktop plugins into modern cross-platform web add-ins.",
    categoryId: "office-addins",
    iconKey: "vsto",
  },
] as const;