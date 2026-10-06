/**
 * BRIVYA SOLUTIONS — HERO MAIN WHEEL CONFIGURATION MANIFEST
 * Authoritative data for the 15-node continuous conveyor stream
 * (5 Web -> 5 Cloud -> 5 AI) with rich hover tooltips.
 */

import {
  MainWheelDimensions,
  MainWheelPhaseConfig,
  MainWheelNode,
} from "@/types/heroMainWheel";

// Exact Measurable Targets: 190px hub, 145px orbit radius, 50px clearance
export const MAIN_WHEEL_DIMENSIONS: MainWheelDimensions = {
  viewBoxSize: 520,
  cx: 260,
  cy: 260,
  hubRadius: 95, // 190px diameter center circle
  orbitRadius: 145, // Compact 50px gap from hub edge
  arcStartDeg: -72, // -72° (288°)
  arcSpanDeg: 144, // Exactly 144° right-facing arc (40% of circle)
} as const;

export const MAIN_WHEEL_PHASES: readonly MainWheelPhaseConfig[] = [
  {
    id: "development",
    title: "Web Development",
    subtitle: "High-performance digital platforms",
    morphType: "code",
    accentColor: "#0A5FD7",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    subtitle: "Edge networks & distributed systems",
    morphType: "cloud",
    accentColor: "#D97706",
  },
  {
    id: "ai",
    title: "AI & Automation",
    subtitle: "Autonomous task execution workflows",
    morphType: "ai",
    accentColor: "#7C3AED",
  },
] as const;

// 15-Node Continuous Conveyor Stream (5 Web -> 5 Cloud -> 5 AI)
// Spaced by exactly 24° around a seamless 360° circle (15 x 24° = 360°)
export const CONTINUOUS_NODE_STREAM: readonly MainWheelNode[] = [
  // 1. Web Development Sequence (Nodes 0 - 4)
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
    role: "UI Engine",
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
  {
    id: "node-shopify",
    name: "Shopify Plus",
    role: "Commerce Engine",
    description: "We develop high-throughput custom checkouts and headless commerce storefronts.",
    categoryId: "development",
    iconKey: "shopify",
  },
  {
    id: "node-postgres",
    name: "PostgreSQL",
    role: "Relational Database",
    description: "We design ACID-compliant relational databases optimized for high-volume transactions.",
    categoryId: "development",
    iconKey: "postgresql",
  },

  // 2. Cloud Infrastructure Sequence (Nodes 5 - 9)
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
  {
    id: "node-k8s",
    name: "Kubernetes",
    role: "Cluster Orchestration",
    description: "We manage self-healing container clusters engineered for automated traffic scaling.",
    categoryId: "cloud",
    iconKey: "kubernetes",
  },
  {
    id: "node-supabase",
    name: "Supabase",
    role: "Realtime Database",
    description: "We build modern backend architectures with real-time sync and edge compute.",
    categoryId: "cloud",
    iconKey: "supabase",
  },

  // 3. AI & Automation Sequence (Nodes 10 - 14)
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
  {
    id: "node-langchain",
    name: "LangChain",
    role: "Agent Tooling",
    description: "We connect autonomous LLMs to internal company tools and databases safely.",
    categoryId: "ai",
    iconKey: "langchain",
  },
  {
    id: "node-zapier",
    name: "Zapier",
    role: "Workflow Automation",
    description: "We eliminate manual operational drag by connecting disparate software platforms.",
    categoryId: "ai",
    iconKey: "zapier",
  },
] as const;