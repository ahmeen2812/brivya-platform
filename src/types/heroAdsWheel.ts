/**
 * BRIVYA SOLUTIONS — HERO ADS WHEEL TYPE SYSTEM
 * Strict type contracts for the Google Ads <-> Meta Ads satellite wheel,
 * 144-degree mathematical arc, and direct DOM node references.
 */

export type AdsWheelPhaseId = "google-ads" | "meta-ads";

export type AdsWheelIconKey =
  // Google Ads Suite
  | "google-ads"
  | "google-search"
  | "google-shopping"
  | "youtube"
  | "gtm"
  | "ga4"
  // Meta Ads Suite
  | "meta"
  | "instagram"
  | "facebook"
  | "meta-capi"
  | "meta-advantage"
  | "whatsapp";

export interface AdsWheelNode {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly categoryId: AdsWheelPhaseId;
  readonly iconKey: AdsWheelIconKey;
}

export interface AdsWheelPhaseConfig {
  readonly id: AdsWheelPhaseId;
  readonly title: string;
  readonly subtitle: string;
  readonly centerIcon: "google-ads" | "meta";
  readonly accentColor: string;
}

export interface AdsWheelDimensions {
  readonly viewBoxSize: number;
  readonly cx: number;
  readonly cy: number;
  readonly hubRadius: number;
  readonly orbitRadius: number;
  readonly arcStartDeg: number;
  readonly arcSpanDeg: number;
}