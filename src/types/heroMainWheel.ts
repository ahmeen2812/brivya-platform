/**
 * BRIVYA SOLUTIONS — HERO MAIN WHEEL TYPE SYSTEM
 * Strict type contracts for the primary 3-phase engine:
 * Web Development -> Cloud Infrastructure -> AI & Automation
 */

export type MainWheelPhaseId = "development" | "cloud" | "ai";

export type MainWheelIconKey =
  // Web Development Phase
  | "nextjs"
  | "react"
  | "typescript"
  | "shopify"
  // Cloud Infrastructure Phase
  | "cloudflare"
  | "docker"
  | "kubernetes"
  | "supabase"
  // AI & Automation Phase
  | "openai"
  | "python"
  | "pytorch"
  | "zapier";

export interface MainWheelNode {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly categoryId: MainWheelPhaseId;
  readonly iconKey: MainWheelIconKey;
}

export interface MainWheelPhaseConfig {
  readonly id: MainWheelPhaseId;
  readonly index: string;
  readonly title: string;
  readonly subtitle: string;
  readonly morphType: "code" | "cloud" | "ai";
  readonly accentColor: string;
}

export interface MainWheelDimensions {
  readonly viewBoxSize: number;
  readonly cx: number;
  readonly cy: number;
  readonly hubRadius: number;
  readonly orbitRadius: number;
  readonly arcStartDeg: number;
  readonly arcSpanDeg: number;
}