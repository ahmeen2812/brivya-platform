/**
 * BRIVYA SOLUTIONS — MEGA-MENU TYPE SYSTEM
 * Comprehensive type definitions for all 7 technological pillars,
 * sub-services, and authentic brand icon mappings.
 */

export type ServiceIconType =
  | "code"
  | "google"
  | "meta"
  | "ai"
  | "cloud"
  | "microsoft"
  | "workspace";

// Official brand icon types mapped 1:1 across all pillars and sub-services
export type SubServiceIconType =
  | ServiceIconType
  // Microsoft Office Suite
  | "word"
  | "excel"
  | "powerpoint"
  | "outlook"
  | "teams"
  | "azure"
  // Google Workspace Suite
  | "sheets"
  | "docs"
  | "gmail"
  | "forms"
  | "slides"
  | "drive"
  | "apps-script"
  // Web Development & Stack
  | "nextjs"
  | "typescript"
  | "react"
  | "shopify"
  | "graphql"
  | "supabase"
  | "lighthouse"
  // Google Media & Tracking
  | "google-search"
  | "google-display"
  | "youtube"
  | "gtm"
  | "ga4"
  | "google-bidding"
  | "google-roi"
  // Meta Media & Social
  | "facebook"
  | "instagram"
  | "meta-leads"
  | "meta-catalog"
  | "meta-capi"
  | "meta-creative"
  | "meta-audience"
  // AI, Automation & Integrations
  | "openai"
  | "python"
  | "zapier"
  | "hubspot"
  | "whatsapp"
  | "webhooks"
  | "pytorch"
  // Cloud & Infrastructure
  | "cloudflare"
  | "aws"
  | "postgresql"
  | "security-waf"
  | "docker"
  | "default";

export interface SubServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly badge?: string;
  readonly iconType: SubServiceIconType;
}

export interface PillarCtaConfig {
  readonly headline: string;
  readonly actionText: string;
  readonly href: string;
  readonly turnaroundTag: string;
}

export interface ServicePillar {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly href: string;
  readonly iconType: ServiceIconType;
  readonly subServices: readonly SubServiceItem[];
  readonly contextualCta: PillarCtaConfig;
}

export interface MegaMenuState {
  readonly isOpen: boolean;
  readonly isPinned: boolean;
  readonly activePillarId: string | null;
}

export interface MegaMenuDimensions {
  readonly collapsedWidth: number;
  readonly expandedWidth: number;
  readonly minHeight: number;
}