/**
 * BRIVYA SOLUTIONS — HERO ADS WHEEL CONFIGURATION MANIFEST
 * Authoritative data for the 10-node continuous conveyor stream
 * (5 Google Ads -> 5 Meta Ads) with rich hover tooltips and exact geometry.
 */

import {
  AdsWheelDimensions,
  AdsWheelPhaseConfig,
  AdsWheelNode,
} from "@/types/heroAdsWheel";

// Exact Measurable Targets: 126px hub, 108px orbit radius, 45px clearance
export const ADS_WHEEL_DIMENSIONS: AdsWheelDimensions = {
  viewBoxSize: 360,
  cx: 170,
  cy: 170,
  hubRadius: 63, // 126px diameter center circle
  orbitRadius: 108, // Compact 45px gap from hub edge
  arcStartDeg: -80, // 280° (-80°)
  arcSpanDeg: 144, // Exactly 144° right-facing arc (40% of circle, ends at +64°)
} as const;

export const ADS_WHEEL_PHASES: readonly AdsWheelPhaseConfig[] = [
  {
    id: "google-ads",
    title: "Google Ads",
    subtitle: "Search, shopping & intent media",
    centerIcon: "google-ads",
    accentColor: "#4285F4",
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    subtitle: "Algorithmic scale & social acquisition",
    centerIcon: "meta",
    accentColor: "#0064E0",
  },
] as const;

// 10-Node Continuous Conveyor Stream (5 Google Ads -> 5 Meta Ads)
// Spaced by exactly 36° around a seamless 360° circle (10 x 36° = 360°)
export const ADS_NODE_STREAM: readonly AdsWheelNode[] = [
  // 1. Google Ads Sequence (Nodes 0 - 4)
  {
    id: "node-g-search",
    name: "Search Ads",
    role: "Intent Capture",
    description: "We capture active commercial demand with structured keyword bidding matrices.",
    categoryId: "google-ads",
    iconKey: "google-search",
  },
  {
    id: "node-g-shopping",
    name: "Shopping & PMax",
    role: "Merchant Engine",
    description: "We optimize product data feeds to maximize Performance Max gross revenue.",
    categoryId: "google-ads",
    iconKey: "google-shopping",
  },
  {
    id: "node-g-youtube",
    name: "YouTube Ads",
    role: "Video Performance",
    description: "We deploy direct-response video campaigns targeting high-affinity demographics.",
    categoryId: "google-ads",
    iconKey: "youtube",
  },
  {
    id: "node-g-gtm",
    name: "Tag Manager",
    role: "Server Tracking",
    description: "We implement server-side GTM containers for resilient first-party data collection.",
    categoryId: "google-ads",
    iconKey: "gtm",
  },
  {
    id: "node-g-ga4",
    name: "Google Analytics 4",
    role: "Attribution Modeling",
    description: "We analyze multi-channel conversion paths and customer lifetime acquisition value.",
    categoryId: "google-ads",
    iconKey: "ga4",
  },

  // 2. Meta Ads Sequence (Nodes 5 - 9)
  {
    id: "node-m-instagram",
    name: "Instagram Ads",
    role: "Visual Direct Response",
    description: "We engineer high-converting visual creative funnels for Stories, Reels, and Feed.",
    categoryId: "meta-ads",
    iconKey: "instagram",
  },
  {
    id: "node-m-facebook",
    name: "Facebook Ads",
    role: "Audience Scaling",
    description: "We scale broad-targeting campaigns using data-driven creative testing frameworks.",
    categoryId: "meta-ads",
    iconKey: "facebook",
  },
  {
    id: "node-m-capi",
    name: "Meta CAPI",
    role: "Conversion API",
    description: "We bypass browser tracking loss with direct server-to-server event matching.",
    categoryId: "meta-ads",
    iconKey: "meta-capi",
  },
  {
    id: "node-m-advantage",
    name: "Advantage+ AI",
    role: "Machine Learning",
    description: "We leverage Meta's algorithmic bidding for automated product catalog delivery.",
    categoryId: "meta-ads",
    iconKey: "meta-advantage",
  },
  {
    id: "node-m-whatsapp",
    name: "Click-to-WhatsApp",
    role: "Chat Funnels",
    description: "We route high-intent social traffic into conversational closing pipelines.",
    categoryId: "meta-ads",
    iconKey: "whatsapp",
  },
] as const;