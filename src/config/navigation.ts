import {
  ArchitecturalPlane,
  PrimaryIndexItem,
  NavItemConfig,
  NavBrandConfig,
} from "@/types/navigation";

/**
 * -----------------------------------------------------------------------------
 * 1. FLOATING REFERENCE NAVBAR CONFIGURATION (01 Home ... 06 Contact)
 * -----------------------------------------------------------------------------
 */
export const NAV_ITEMS: readonly NavItemConfig[] = [
  {
    id: "home",
    index: "01",
    label: "Home",
    href: "/",
    hasDividerAfter: true, // Divider between 01 Home and 02 Services
  },
  {
    id: "services",
    index: "02",
    label: "Services",
    href: "/services",
    hasDividerAfter: true, // Divider between 02 Services and 03 Work
  },
  {
    id: "work",
    index: "03",
    label: "Work",
    href: "/work",
    hasDividerAfter: true, // Divider between 03 Work and 04 Products
  },
  {
    id: "products",
    index: "04",
    label: "Products",
    href: "/products",
    hasDividerAfter: true, // Divider between 04 Products and 05 About
  },
  {
    id: "about",
    index: "05",
    label: "About",
    href: "/about",
    hasDividerAfter: true, // Divider between 05 About and 06 Contact
  },
  {
    id: "contact",
    index: "06",
    label: "Contact",
    href: "/contact",
    hasDividerAfter: false,
  },
] as const;

export const NAV_BRAND_CONFIG: NavBrandConfig = {
  logoAlt: "Brivya Solutions",
  logoSrc: "/images/logo.png",
  ctaText: "Start a Project",
  ctaHref: "/start-project",
} as const;

/**
 * -----------------------------------------------------------------------------
 * 2. PRIMARY NAVIGATION INDICES (01 Work ... 07 Start Project)
 * Bound strictly to PrimaryIndexItem[] to ensure planeTarget and isAction
 * are recognized on all members.
 * -----------------------------------------------------------------------------
 */
export const PRIMARY_NAVIGATION_INDICES: readonly PrimaryIndexItem[] = [
  {
    index: "01",
    label: "Work",
    href: "/work",
    telemetry: "PROVEN DEPLOYMENTS",
    planeTarget: undefined,
    isAction: false,
  },
  {
    index: "02",
    label: "Services",
    href: "/services",
    telemetry: "SYSTEM CORE CAPABILITIES",
    planeTarget: "build",
    isAction: false,
  },
  {
    index: "03",
    label: "Capabilities",
    href: "/capabilities",
    telemetry: "INTELLIGENCE & AI R&D",
    planeTarget: "expand",
    isAction: false,
  },
  {
    index: "04",
    label: "Products",
    href: "/products",
    telemetry: "PROPRIETARY STUDIO TOOLS",
    planeTarget: undefined,
    isAction: false,
  },
  {
    index: "05",
    label: "Team",
    href: "/team",
    telemetry: "ENGINEERING TOPOLOGY",
    planeTarget: undefined,
    isAction: false,
  },
  {
    index: "06",
    label: "Insights",
    href: "/insights",
    telemetry: "SYSTEM ARCHITECTURE LOGS",
    planeTarget: undefined,
    isAction: false,
  },
  {
    index: "07",
    label: "Start Project",
    href: "/start-project",
    telemetry: "DEPLOY GROWTH SYSTEM",
    planeTarget: undefined,
    isAction: true,
  },
];

/**
 * -----------------------------------------------------------------------------
 * 3. ARCHITECTURAL TRI-PLANE SPECIFICATION (BUILD | ACQUIRE | EXPAND)
 * -----------------------------------------------------------------------------
 */
export const ARCHITECTURAL_PLANES: readonly ArchitecturalPlane[] = [
  {
    id: "build",
    index: "SYSTEM.01",
    designation: "BUILD",
    title: "Engineering & Web Development",
    thesis:
      "Enterprise digital products, low-latency web platforms, and headless commerce engines designed for measurable market defensibility.",
    telemetry: {
      latencyTarget: "< 80ms TTFB",
      stackFocus: "Next.js / TypeScript / WebGL",
      metricLead: "99.8% Core Vitals",
    },
    subsystems: [
      {
        id: "web-apps",
        code: "SUB.01A",
        title: "Web Applications & SaaS",
        description:
          "Bespoke full-stack platforms with strict type integrity and real-time state sync.",
        href: "/services/web-applications",
        tags: ["Next.js", "React", "Node", "PostgreSQL"],
      },
      {
        id: "ecommerce",
        code: "SUB.01B",
        title: "Custom & Headless Ecommerce",
        description:
          "High-volume Shopify Plus and custom checkout architectures engineered for maximum throughput.",
        href: "/services/ecommerce",
        tags: ["Shopify Plus", "Storefront API", "Hydrogen"],
      },
      {
        id: "performance-rebuild",
        code: "SUB.01C",
        title: "Enterprise Web Re-Architecture",
        description:
          "Complete overhaul of legacy technical debt into composable, high-speed architectures.",
        href: "/services/redesign-optimization",
        tags: ["Refactoring", "Edge Caching", "Lighthouse 100"],
      },
    ],
  },
  {
    id: "acquire",
    index: "SYSTEM.02",
    designation: "ACQUIRE",
    title: "Customer Acquisition & Capital Efficiency",
    thesis:
      "Algorithmic paid media engines across Google and Meta networks, backed by first-party server-side tracking pipelines.",
    telemetry: {
      latencyTarget: "Real-time CAPI",
      stackFocus: "Google Ads / Meta Ads / CAPI",
      metricLead: "3.8x Avg ROAS",
    },
    subsystems: [
      {
        id: "google-perf",
        code: "SUB.02A",
        title: "Google Ads & Intent Capture",
        description:
          "Search, Shopping, and YouTube campaigns driven by bidding scripts and offline conversion feeds.",
        href: "/services/google-ads",
        tags: ["Search", "Shopping PMax", "Bidding Automation"],
      },
      {
        id: "meta-growth",
        code: "SUB.02B",
        title: "Meta Ads & Algorithmic Creative",
        description:
          "High-scale Facebook & Instagram acquisition setups structured with rapid creative testing matrices.",
        href: "/services/meta-ads",
        tags: ["Meta CAPI", "Direct Response", "Creative Lab"],
      },
      {
        id: "conversion-tracking",
        code: "SUB.02C",
        title: "Server-Side Conversion Infrastructure",
        description:
          "First-party data tracking, Google Tag Manager Server-side, and deterministic attribution ledgers.",
        href: "/services/conversion-tracking",
        tags: ["sGTM", "Data Loss Prevention", "Attribution"],
      },
    ],
  },
  {
    id: "expand",
    index: "SYSTEM.03",
    designation: "EXPAND",
    title: "Intelligence & Workflow Automation",
    thesis:
      "Autonomous AI task agents, custom business software, and API integration meshes that eliminate operational drag.",
    telemetry: {
      latencyTarget: "Sub-second LLM",
      stackFocus: "Python / Vector Store / APIs",
      metricLead: "82% Task Auto",
    },
    subsystems: [
      {
        id: "ai-agents",
        code: "SUB.03A",
        title: "Autonomous AI Agents",
        description:
          "Task-specific LLM systems connected to internal client databases for autonomous operations.",
        href: "/capabilities/ai-agents",
        tags: ["LLM Agents", "Retrieval Systems", "Tool Use"],
      },
      {
        id: "internal-tools",
        code: "SUB.03B",
        title: "Custom Software & APIs",
        description:
          "Proprietary internal dashboards, ERP extensions, and bidirectional middleware connectors.",
        href: "/capabilities/custom-software",
        tags: ["Custom ERP", "Microservices", "REST/GraphQL"],
      },
      {
        id: "workflow-automation",
        code: "SUB.03C",
        title: "Operational Automation Mesh",
        description:
          "Multi-point integration pipelines between CRM, billing, ads, and inventory platforms.",
        href: "/capabilities/workflow-automation",
        tags: ["Webhooks", "ETL Pipelines", "Zero-Error Sync"],
      },
    ],
  },
] as const;