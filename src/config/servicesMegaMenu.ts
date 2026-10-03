/**
 * BRIVYA SOLUTIONS — SERVICES MEGA-MENU MASTER MANIFEST
 * Authoritative data for all 5 core systems, 33 sub-services,
 * and contextual per-pillar conversion actions.
 */

export * from "@/types/megaMenu";

import {
  ServicePillar,
  SubServiceItem,
  PillarCtaConfig,
  ServiceIconType,
} from "@/types/megaMenu";

export type ServiceCategory = ServicePillar;
export type { SubServiceItem, ServicePillar, PillarCtaConfig, ServiceIconType };

export interface MegaMenuFeaturedCardConfig {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly buttonText: string;
  readonly buttonHref: string;
  readonly metricHighlight: string;
  readonly metricLabel: string;
}

export const SERVICE_PILLARS: readonly ServicePillar[] = [
  {
    id: "web-development",
    title: "Web Development & Custom Software",
    subtitle: "Digital Platforms & Engineering",
    summary: "Engineered web applications, enterprise platforms, and scalable headless commerce.",
    href: "/services/web-development",
    iconType: "code",
    contextualCta: {
      headline: "Need bespoke web architecture or SaaS engineering?",
      actionText: "Schedule Technical Architecture Call",
      href: "/start-project?service=web-development",
      turnaroundTag: "Senior Architect Response < 24h",
    },
    subServices: [
      {
        id: "custom-websites",
        title: "Custom Website Development",
        description: "Bespoke digital flagships with zero technical debt and ultra-fast paint times.",
        href: "/services/web-development/custom-websites",
      },
      {
        id: "web-applications",
        title: "Full-Stack Web Applications",
        description: "Enterprise software platforms built on Next.js, TypeScript, and modern backends.",
        href: "/services/web-development/web-applications",
      },
      {
        id: "saas-products",
        title: "SaaS Product Development",
        description: "Multi-tenant software architectures engineered for scalability and data safety.",
        href: "/services/web-development/saas-products",
      },
      {
        id: "ecommerce-platforms",
        title: "E-commerce Development",
        description: "Custom checkout systems and headless Shopify Plus setups for high volume.",
        href: "/services/web-development/ecommerce",
      },
      {
        id: "api-integrations",
        title: "API Development & Integration",
        description: "Reliable REST and GraphQL middleware connecting internal databases.",
        href: "/services/web-development/api-integration",
      },
      {
        id: "backend-databases",
        title: "Database & Backend Systems",
        description: "PostgreSQL, Supabase, and distributed edge architectures with zero downtime.",
        href: "/services/web-development/database-systems",
      },
      {
        id: "performance-tuning",
        title: "Website Performance Optimization",
        description: "Codebase refactoring to guarantee 99+ Core Web Vitals on mobile and desktop.",
        href: "/services/web-development/performance-optimization",
        badge: "99+ Vitals",
      },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads & Performance Marketing",
    subtitle: "Intent Capture & Bidding Systems",
    summary: "High-intent search, shopping feeds, and first-party conversion tracking infrastructure.",
    href: "/services/google-ads",
    iconType: "google",
    contextualCta: {
      headline: "Want to audit your current search ad efficiency?",
      actionText: "Request Account & ROAS Audit",
      href: "/start-project?service=google-ads",
      turnaroundTag: "Live Tracking Analysis",
    },
    subServices: [
      {
        id: "search-campaigns",
        title: "Google Search Ads",
        description: "Capturing active commercial intent with disciplined negative keyword matrices.",
        href: "/services/google-ads/search",
      },
      {
        id: "display-campaigns",
        title: "Google Display Ads",
        description: "Brand defense and targeted visual placement across premium partner inventories.",
        href: "/services/google-ads/display",
      },
      {
        id: "youtube-campaigns",
        title: "YouTube Ads",
        description: "Direct-response video targeting high-value prospect segments.",
        href: "/services/google-ads/youtube",
      },
      {
        id: "conversion-infrastructure",
        title: "Conversion Tracking Setup",
        description: "Server-side GTM, enhanced conversions, and offline attribution pipelines.",
        href: "/services/google-ads/conversion-tracking",
        badge: "First-Party",
      },
      {
        id: "landing-page-testing",
        title: "Landing Page Optimization",
        description: "A/B split testing to increase visitor-to-lead conversion rates.",
        href: "/services/google-ads/landing-pages",
      },
      {
        id: "budget-management",
        title: "Campaign Management",
        description: "Algorithmic dayparting, bid adjustments, and transparent performance reports.",
        href: "/services/google-ads/management",
      },
      {
        id: "roas-scaling",
        title: "ROI Optimization",
        description: "Focusing capital on profitable customer segments rather than vanity clicks.",
        href: "/services/google-ads/roi-optimization",
      },
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads & Social Growth",
    subtitle: "Customer Acquisition & Scale",
    summary: "High-volume direct response campaigns across Facebook and Instagram networks.",
    href: "/services/meta-ads",
    iconType: "meta",
    contextualCta: {
      headline: "Scaling past current customer acquisition thresholds?",
      actionText: "Request Paid Social Growth Plan",
      href: "/start-project?service=meta-ads",
      turnaroundTag: "Creative Matrix Review",
    },
    subServices: [
      {
        id: "facebook-growth",
        title: "Facebook Ads",
        description: "Structured campaign architecture focused on consistent customer acquisition cost.",
        href: "/services/meta-ads/facebook",
      },
      {
        id: "instagram-growth",
        title: "Instagram Ads",
        description: "High-impact visual narratives designed for conversion and brand stature.",
        href: "/services/meta-ads/instagram",
      },
      {
        id: "lead-funnels",
        title: "Lead Generation Campaigns",
        description: "Pre-qualified lead capture connected directly to your internal sales pipeline.",
        href: "/services/meta-ads/lead-generation",
      },
      {
        id: "ecommerce-funnels",
        title: "E-commerce Sales Campaigns",
        description: "Dynamic product catalogs and checkout funnels for recurring purchases.",
        href: "/services/meta-ads/ecommerce-sales",
      },
      {
        id: "retargeting-mesh",
        title: "Retargeting Strategies",
        description: "First-party behavioral retargeting using Meta Conversions API (CAPI).",
        href: "/services/meta-ads/retargeting",
      },
      {
        id: "creative-laboratory",
        title: "Creative Ad Strategy",
        description: "Systematic hook, body, and CTA split-testing matrices.",
        href: "/services/meta-ads/creative-strategy",
      },
      {
        id: "audience-modeling",
        title: "Audience Optimization",
        description: "Predictive lookalikes, exclusion lists, and custom purchase intent tiers.",
        href: "/services/meta-ads/audience-optimization",
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Business Automation",
    subtitle: "Intelligent Workflow Systems",
    summary: "Autonomous agents, custom business software, and zero-error API integrations.",
    href: "/services/ai-automation",
    iconType: "ai",
    contextualCta: {
      headline: "Want to remove repetitive manual tasks from your operations?",
      actionText: "Book Workflow Automation Session",
      href: "/start-project?service=ai-automation",
      turnaroundTag: "Custom Process Review",
    },
    subServices: [
      {
        id: "ai-assistants",
        title: "AI Chatbots & AI Assistants",
        description: "Retrieval-augmented conversational bots connected directly to your internal data.",
        href: "/services/ai-automation/chatbots",
      },
      {
        id: "autonomous-agents",
        title: "AI Agent Development",
        description: "Multi-step autonomous agents executing business tasks with human oversight.",
        href: "/services/ai-automation/agents",
        badge: "Autonomous",
      },
      {
        id: "process-workflows",
        title: "Business Process Automation",
        description: "Connecting disparate software tools to remove manual human data entry.",
        href: "/services/ai-automation/process-automation",
      },
      {
        id: "crm-pipelines",
        title: "CRM Automation",
        description: "Automated deal stages, follow-up notifications, and client data enrichment.",
        href: "/services/ai-automation/crm-automation",
      },
      {
        id: "messaging-automation",
        title: "WhatsApp & Email Automation",
        description: "High-delivery transactional messaging sequences and customer service triggers.",
        href: "/services/ai-automation/whatsapp-email",
      },
      {
        id: "integration-mesh",
        title: "Workflow Integration",
        description: "Enterprise webhooks and ETL pipelines synchronizing data across platforms.",
        href: "/services/ai-automation/workflow-integration",
      },
      {
        id: "bespoke-ai",
        title: "Custom AI Solutions",
        description: "Fine-tuned models and private business automation software.",
        href: "/services/ai-automation/custom-solutions",
      },
    ],
  },
  {
    id: "cloud-technology",
    title: "Cloud & Technology Solutions",
    subtitle: "Enterprise Infrastructure",
    summary: "High-availability cloud deployments, managed security, and server configurations.",
    href: "/services/cloud-technology",
    iconType: "cloud",
    contextualCta: {
      headline: "Need reliable, enterprise-grade cloud architecture?",
      actionText: "Speak with Cloud Infrastructure Engineer",
      href: "/start-project?service=cloud-technology",
      turnaroundTag: "SLA Guaranteed",
    },
    subServices: [
      {
        id: "cloud-networks",
        title: "Cloud Deployment",
        description: "Distributed edge architectures, Cloudflare networks, and serverless compute.",
        href: "/services/cloud-technology/cloud-deployment",
      },
      {
        id: "server-operations",
        title: "Server Setup & Management",
        description: "Automated CI/CD pipelines, containerized environments, and monitoring.",
        href: "/services/cloud-technology/server-management",
      },
      {
        id: "database-clusters",
        title: "Database Solutions",
        description: "High-availability replication, automated backups, and encrypted storage.",
        href: "/services/cloud-technology/database-solutions",
      },
      {
        id: "security-hardening",
        title: "Security & Performance Optimization",
        description: "WAF deployment, DDoS mitigation, and SSL/TLS configuration.",
        href: "/services/cloud-technology/security-optimization",
        badge: "Hardened",
      },
      {
        id: "container-apps",
        title: "Application Deployment",
        description: "Docker and Kubernetes setups ensuring smooth, scalable software rollouts.",
        href: "/services/cloud-technology/application-deployment",
      },
    ],
  },
] as const;

export const SERVICES_CATEGORIES = SERVICE_PILLARS;

export const MEGA_MENU_FEATURED_CARD: MegaMenuFeaturedCardConfig = {
  tag: "GROWTH ARCHITECTURE",
  title: "Need a Custom Growth & Engineering Roadmap?",
  description:
    "We architect custom web systems, high-scale acquisition campaigns, and automated workflows tailored to your exact business metrics.",
  buttonText: "Request Architecture Call",
  buttonHref: "/start-project",
  metricHighlight: "< 24h",
  metricLabel: "Executive Response Time",
} as const;