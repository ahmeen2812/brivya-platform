/**
 * BRIVYA SOLUTIONS — HERO MAIN WHEEL CONFIGURATION MANIFEST
 * Exact mathematical dimensions, 12-node continuous conveyor stream,
 * and 3-phase transition definitions.
 */

import {
  MainWheelDimensions,
  MainWheelPhaseConfig,
  MainWheelNode,
} from "@/types/heroMainWheel";

// Exact Measurable Targets (Desktop: 470px wheel, 190px hub, 148px orbit radius)
export const MAIN_WHEEL_DIMENSIONS: MainWheelDimensions = {
  viewBoxSize: 520,
  cx: 260,
  cy: 260,
  hubRadius: 95, // 190px diameter center circle
  orbitRadius: 148, // Compact 53px gap from hub edge
  arcStartDeg: -72, // -72° (288°)
  arcSpanDeg: 144, // Exactly 144° right-facing arc (40% of circle)
} as const;

export const MAIN_WHEEL_PHASES: readonly MainWheelPhaseConfig[] = [
  {
    id: "development",
    index: "01",
    title: "Web Development",
    subtitle: "High-performance digital platforms",
    morphType: "code",
    accentColor: "#0A5FD7",
  },
  {
    id: "cloud",
    index: "02",
    title: "Cloud Infrastructure",
    subtitle: "Edge networks & distributed systems",
    morphType: "cloud",
    accentColor: "#D97706",
  },
  {
    id: "ai",
    index: "03",
    title: "AI & Automation",
    subtitle: "Autonomous task execution workflows",
    morphType: "ai",
    accentColor: "#7C3AED",
  },
] as const;

// 12-Node Continuous Conveyor Stream (4 Web -> 4 Cloud -> 4 AI)
// Spaced by exactly 30° around a seamless 360° circle (12 x 30° = 360°)
export const CONTINUOUS_NODE_STREAM: readonly MainWheelNode[] = [
  // 1. Web Development Sequence (Nodes 0 - 3)
  { id: "node-next", name: "Next.js", role: "Full-Stack Core", categoryId: "development", iconKey: "nextjs" },
  { id: "node-react", name: "React", role: "UI Engine", categoryId: "development", iconKey: "react" },
  { id: "node-ts", name: "TypeScript", role: "Type Safety", categoryId: "development", iconKey: "typescript" },
  { id: "node-shopify", name: "Shopify Plus", role: "Commerce Architecture", categoryId: "development", iconKey: "shopify" },

  // 2. Cloud Infrastructure Sequence (Nodes 4 - 7)
  { id: "node-cloudflare", name: "Cloudflare", role: "Edge WAF & CDN", categoryId: "cloud", iconKey: "cloudflare" },
  { id: "node-docker", name: "Docker", role: "Containerization", categoryId: "cloud", iconKey: "docker" },
  { id: "node-k8s", name: "Kubernetes", role: "Cluster Orchestration", categoryId: "cloud", iconKey: "kubernetes" },
  { id: "node-supabase", name: "Supabase", role: "Database Platform", categoryId: "cloud", iconKey: "supabase" },

  // 3. AI & Automation Sequence (Nodes 8 - 11)
  { id: "node-openai", name: "OpenAI", role: "LLM Intelligence", categoryId: "ai", iconKey: "openai" },
  { id: "node-python", name: "Python", role: "Agent Runtime", categoryId: "ai", iconKey: "python" },
  { id: "node-pytorch", name: "PyTorch", role: "Deep Learning", categoryId: "ai", iconKey: "pytorch" },
  { id: "node-zapier", name: "Zapier", role: "Enterprise ETL", categoryId: "ai", iconKey: "zapier" },
] as const;