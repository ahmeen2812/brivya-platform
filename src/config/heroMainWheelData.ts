/**
 * BRIVYA SOLUTIONS — HERO MAIN WHEEL CONFIGURATION MANIFEST
 * Authoritative data for the 30-node continuous conveyor stream
 * (10 Web -> 10 Cloud -> 10 AI) with rich hover tooltips and exact geometry.
 */

import {
  MainWheelDimensions,
  MainWheelPhaseConfig,
  MainWheelNode,
} from "@/types/heroMainWheel";

// Exact Measurable Targets: 196px hub, 145px orbit radius, 49px clearance
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

// 30-Node Continuous Conveyor Stream (10 Web -> 10 Cloud -> 10 AI)
// Spaced by exactly 40° along a continuous 1200° conveyor (30 x 40° = 1200°)
// Yields exactly 3-4 visible icons on the 144° arc with 48px clearance
export const CONTINUOUS_NODE_STREAM: readonly MainWheelNode[] = [
  // ===========================================================================
  // 1. WEB DEVELOPMENT SEQUENCE (Nodes 0 - 9)
  // ===========================================================================
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
  {
    id: "node-shopify",
    name: "Shopify Plus",
    role: "Commerce Engine",
    description: "We develop high-throughput custom checkouts and headless commerce storefronts.",
    categoryId: "development",
    iconKey: "shopify",
  },
  {
    id: "node-node",
    name: "Node.js",
    role: "Backend Runtime",
    description: "We design event-driven microservice backends built for high concurrency.",
    categoryId: "development",
    iconKey: "nodejs",
  },
  {
    id: "node-graphql",
    name: "GraphQL",
    role: "Data Layer",
    description: "We architect flexible API schemas that eliminate over-fetching and speed up client data delivery.",
    categoryId: "development",
    iconKey: "graphql",
  },
  {
    id: "node-tailwind",
    name: "Tailwind CSS",
    role: "Design Systems",
    description: "We establish scalable, maintainable utility design tokens and UI components.",
    categoryId: "development",
    iconKey: "tailwind",
  },
  {
    id: "node-postgres",
    name: "PostgreSQL",
    role: "Relational Database",
    description: "We configure ACID-compliant relational databases optimized for complex business transactions.",
    categoryId: "development",
    iconKey: "postgresql",
  },
  {
    id: "node-python-web",
    name: "Python",
    role: "Compute Services",
    description: "We develop high-speed asynchronous data processing and mathematical backend services.",
    categoryId: "development",
    iconKey: "python",
  },
  {
    id: "node-lighthouse",
    name: "Lighthouse",
    role: "Performance Vitals",
    description: "We refactor frontend bottlenecks to guarantee 99+ Core Web Vitals on all devices.",
    categoryId: "development",
    iconKey: "lighthouse",
  },

  // ===========================================================================
  // 2. CLOUD INFRASTRUCTURE SEQUENCE (Nodes 10 - 19)
  // ===========================================================================
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
    description: "We architect resilient serverless backends and elastic cloud computing clusters.",
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
    id: "node-terraform",
    name: "Terraform",
    role: "Infrastructure as Code",
    description: "We automate reproducible multi-cloud infrastructure deployments using IaC protocols.",
    categoryId: "cloud",
    iconKey: "terraform",
  },
  {
    id: "node-gcp",
    name: "Google Cloud",
    role: "Cloud Platform",
    description: "We leverage BigQuery and GCP enterprise infrastructure for heavy analytical workloads.",
    categoryId: "cloud",
    iconKey: "gcp",
  },
  {
    id: "node-azure",
    name: "Azure Cloud",
    role: "Enterprise Cloud",
    description: "We deploy Microsoft enterprise infrastructure and Azure AD identity solutions.",
    categoryId: "cloud",
    iconKey: "azure",
  },
  {
    id: "node-supabase",
    name: "Supabase",
    role: "Realtime Database",
    description: "We build modern backend architectures with real-time sync and edge compute.",
    categoryId: "cloud",
    iconKey: "supabase",
  },
  {
    id: "node-redis",
    name: "Redis",
    role: "In-Memory Caching",
    description: "We configure microsecond in-memory data stores for session caching and rate-limiting.",
    categoryId: "cloud",
    iconKey: "redis",
  },
  {
    id: "node-actions",
    name: "GitHub Actions",
    role: "Automated CI/CD",
    description: "We build automated test, build, and deploy pipelines with zero manual release friction.",
    categoryId: "cloud",
    iconKey: "githubactions",
  },

  // ===========================================================================
  // 3. AI & AUTOMATION SEQUENCE (Nodes 20 - 29)
  // ===========================================================================
  {
    id: "node-openai",
    name: "OpenAI",
    role: "LLM Intelligence",
    description: "We integrate custom retrieval-augmented models and autonomous decision agents.",
    categoryId: "ai",
    iconKey: "openai",
  },
  {
    id: "node-python-ai",
    name: "Python AI",
    role: "Model Runtime",
    description: "We develop high-speed asynchronous data pipelines and custom algorithm services.",
    categoryId: "ai",
    iconKey: "python-ai",
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
    id: "node-anthropic",
    name: "Claude AI",
    role: "Advanced Reasoning",
    description: "We deploy Anthropic Claude models for deep contextual analysis and multi-turn workflows.",
    categoryId: "ai",
    iconKey: "anthropic",
  },
  {
    id: "node-huggingface",
    name: "Hugging Face",
    role: "Open Models",
    description: "We fine-tune and self-host open-source transformer models on private infrastructure.",
    categoryId: "ai",
    iconKey: "huggingface",
  },
  {
    id: "node-pinecone",
    name: "Pinecone",
    role: "Vector Database",
    description: "We manage high-dimension vector embeddings for ultra-fast semantic search and RAG.",
    categoryId: "ai",
    iconKey: "pinecone",
  },
  {
    id: "node-tensorflow",
    name: "TensorFlow",
    role: "Production ML",
    description: "We deploy enterprise machine learning pipelines for automated predictive scoring.",
    categoryId: "ai",
    iconKey: "tensorflow",
  },
  {
    id: "node-zapier",
    name: "Zapier",
    role: "Workflow Automation",
    description: "We eliminate manual operational drag by connecting disparate software platforms.",
    categoryId: "ai",
    iconKey: "zapier",
  },
  {
    id: "node-hubspot",
    name: "HubSpot AI",
    role: "CRM Intelligence",
    description: "We automate lead enrichment, deal progression, and client interaction workflows.",
    categoryId: "ai",
    iconKey: "hubspot",
  },
] as const;