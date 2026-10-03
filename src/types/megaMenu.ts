/**
 * BRIVYA SOLUTIONS — MEGA-MENU TYPE SYSTEM
 * Comprehensive type definitions for progressive disclosure,
 * pillar models, sub-services, and pinning states.
 */

export type ServiceIconType = "code" | "google" | "meta" | "ai" | "cloud";

export interface SubServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly badge?: string;
}

export interface PillarCtaConfig {
  readonly headline: string;
  readonly actionText: string;
  readonly href: string;
  readonly turnaroundTag: string;
}

export interface ServicePillar {
  readonly id: string;
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