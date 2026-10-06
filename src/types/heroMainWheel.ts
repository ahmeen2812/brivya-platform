/**
 * BRIVYA SOLUTIONS — HERO MAIN WHEEL TYPE SYSTEM
 * Strict type contracts for the continuous 15-node stream,
 * 144-degree mathematical arc, and phased vector morphing.
 */

export type MainWheelPhaseId = "development" | "cloud" | "ai";

export type MainWheelIconKey =
  // Web Development Phase (5 Nodes)
  | "nextjs"
  | "react"
  | "typescript"
  | "shopify"
  | "postgresql"
  // Cloud Infrastructure Phase (5 Nodes)
  | "cloudflare"
  | "aws"
  | "docker"
  | "kubernetes"
  | "supabase"
  // AI & Automation Phase (5 Nodes)
  | "openai"
  | "python"
  | "pytorch"
  | "langchain"
  | "zapier";

export interface MainWheelNode {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly description: string; // One concise, professional sentence for rich tooltip
  readonly categoryId: MainWheelPhaseId;
  readonly iconKey: MainWheelIconKey;
}

export interface MainWheelPhaseConfig {
  readonly id: MainWheelPhaseId;
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