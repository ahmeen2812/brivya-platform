/**
 * BRIVYA SOLUTIONS — HERO MAIN WHEEL CONFIGURATION MANIFEST
 * Authoritative data for the 9-node continuous conveyor stream
 * with 40° angular spacing (38°-44° target), and rich hover tooltips.
 */

import {
  MainWheelDimensions,
  MainWheelPhaseConfig,
  MainWheelNode,
} from "@/types/heroMainWheel";

// Exact Measurable Targets: 196px hub, 145px orbit radius, 48px clearance
export const MAIN_WHEEL_DIMENSIONS: MainWheelDimensions = {
  viewBoxSize: 520,
  cx: 260,
  cy: 260,
  hubRadius: 98, // 196px diameter center circle (prevents text overflow)
  orbitRadius: 145, // Compact 47px gap from hub edge
  arcStartDeg: -72, // -72° (288°)
  arcSpanDeg: 144, // Exactly 144° right-facing arc (40% of circle)
} as const;

export const MAIN_WHEEL_PHASES: readonly MainWheelPhaseConfig[] = [
  {
    id: "development",
    title: "Web Development",
    subtitle: "High-performance scalable platforms",
    morphType: "code",
    accentColor: "#0A5FD7",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    subtitle: "Edge networks & distributed cloud",
    morphType: "cloud",
    accentColor: "#D97706",
  },
  {
    id: "ai",
    title: "AI & Automation",
    subtitle: "Autonomous enterprise workflows",
    morphType: "ai",
    accentColor: "#7C3AED",
  },
] as const;

// 9-Node Continuous Conveyor Stream (3 Web -> 3 Cloud -> 3 AI)
// Spaced by exactly 40° around a seamless 360° circle (9 x 40° = 360°)
// Yields exactly 3-4 visible icons on the 144° arc with 45-50px clearance
export const CONTINUOUS_NODE_STREAM: readonly MainWheelNode[] = [
  // 1. Web Development Sequence (Nodes 0 - 2)
  {
    id: "node-next",
    name: "Next.js",
    role: "Full-Stack Core",
    description: "We engineer low-latency, scalable web applications with server-side rendering.",
    categoryId: "development",
    iconKey: "nextjs",
  },
  {
    id: "node-react",
    name: "React",
    role: "UI Architecture",
    description: "We build reactive, component-driven user interfaces with fluid state management.",
    categoryId: "development",
    iconKey: "react",
  },
  {
    id: "node-ts",
    name: "TypeScript",
    role: "Type Safety",
    description: "We implement strict type contracts ensuring zero-defect enterprise codebases.",
    categoryId: "development",
    iconKey: "typescript",
  },

  // 2. Cloud Infrastructure Sequence (Nodes 3 - 5)
  {
    id: "node-cloudflare",
    name: "Cloudflare",
    role: "Edge WAF & CDN",
    description: "We configure sub-second edge routing, DDoS shielding, and global caching layers.",
    categoryId: "cloud",
    iconKey: "cloudflare",
  },
  {
    id: "node-aws",
    name: "AWS Cloud",
    role: "Cloud Compute",
    description: "We architect scalable serverless backends and elastic cloud computing clusters.",
    categoryId: "cloud",
    iconKey: "aws",
  },
  {
    id: "node-docker",
    name: "Docker",
    role: "Containerization",
    description: "We deploy containerized microservices ensuring zero-downtime CI/CD workflows.",
    categoryId: "cloud",
    iconKey: "docker",
  },

  // 3. AI & Automation Sequence (Nodes 6 - 8)
  {
    id: "node-openai",
    name: "OpenAI",
    role: "LLM Intelligence",
    description: "We integrate custom retrieval-augmented models and autonomous decision agents.",
    categoryId: "ai",
    iconKey: "openai",
  },
  {
    id: "node-python",
    name: "Python",
    role: "Data & Compute",
    description: "We develop high-speed asynchronous data pipelines and custom algorithm services.",
    categoryId: "ai",
    iconKey: "python",
  },
  {
    id: "node-pytorch",
    name: "PyTorch",
    role: "Deep Learning",
    description: "We train specialized predictive neural models tailored to enterprise datasets.",
    categoryId: "ai",
    iconKey: "pytorch",
  },
] as const;