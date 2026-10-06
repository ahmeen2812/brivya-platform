/**
 * BRIVYA SOLUTIONS — HERO MAIN WHEEL TYPE SYSTEM
 * Strict type contracts for 30-node continuous conveyor stream,
 * 144-degree mathematical arc, and deterministic phase transitions.
 */

export type MainWheelPhaseId = "development" | "cloud" | "ai";

export type MainWheelIconKey =
  // Web Development Phase (10 Nodes)
  | "nextjs"
  | "react"
  | "typescript"
  | "shopify"
  | "nodejs"
  | "graphql"
  | "tailwind"
  | "postgresql"
  | "python"
  | "lighthouse"
  // Cloud Infrastructure Phase (10 Nodes)
  | "cloudflare"
  | "aws"
  | "docker"
  | "kubernetes"
  | "terraform"
  | "gcp"
  | "azure"
  | "supabase"
  | "redis"
  | "githubactions"
  // AI & Automation Phase (10 Nodes)
  | "openai"
  | "python-ai"
  | "pytorch"
  | "langchain"
  | "anthropic"
  | "huggingface"
  | "pinecone"
  | "tensorflow"
  | "zapier"
  | "hubspot";

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