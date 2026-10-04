/**
 * BRIVYA SOLUTIONS — MEGA-MENU TYPE SYSTEM
 * Comprehensive type definitions for the 7 technological pillars,
 * sub-services, icon models, and inverse kinetic animation targets.
 */

export type ServiceIconType =
  | "code"
  | "google"
  | "meta"
  | "ai"
  | "cloud"
  | "microsoft"
  | "workspace";

// Extended to inherit ServiceIconType so any pillar icon is valid on sub-services
export type SubServiceIconType =
  | ServiceIconType
  | "word"
  | "excel"
  | "powerpoint"
  | "outlook"
  | "teams"
  | "sheets"
  | "docs"
  | "gmail"
  | "forms"
  | "slides"
  | "drive"
  | "google-ads"
  | "meta-ads"
  | "ai-chip"
  | "cloud-server"
  | "default";

export interface SubServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly badge?: string;
  readonly iconType?: SubServiceIconType;
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