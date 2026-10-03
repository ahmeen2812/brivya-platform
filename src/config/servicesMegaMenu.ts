/**
 * BRIVYA SOLUTIONS — SERVICES MEGA-MENU MASTER MANIFEST
 * Complete configuration for 5 core technological pillars and 33 sub-services.
 * Strictly typed with indexing, routes, telemetry, and descriptive copy.
 */

export interface SubServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly badge?: string;
}

export interface ServiceCategory {
  readonly id: string;
  readonly code: string;
  readonly index: string;
  readonly title: string;
  readonly subtitle: string;
  readonly shortDescription: string;
  readonly href: string;
  readonly iconType: "code" | "google" | "meta" | "ai" | "cloud";
  readonly subServices: readonly SubServiceItem[];
}

export interface MegaMenuFeaturedCardConfig {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly buttonText: string;
  readonly buttonHref: string;
  readonly metricHighlight: string;
  readonly metricLabel: string;
}

export const SERVICES_CATEGORIES: readonly ServiceCategory[] = [
  {
    id: "web-dev",
    code: "SYS.01",
    index: "01",
    title: "Web Development & Custom Software",
    subtitle: "Digital Infrastructure",
    shortDescription: "Building scalable digital platforms that help businesses grow.",
    href: "/services/web-development",
    iconType: "code",
    subServices: [
      {
        id: "custom-web",
        title: "Custom Website Development",
        description: "High-performance digital flagship websites with zero bloat.",
        href: "/services/web-development/custom-websites",
      },
      {
        id: "full-stack",
        title: "Full-Stack Web Applications",
        description: "Bespoke web applications built with Next.js, React, and Node.",
        href: "/services/web-development/web-applications",
      },
      {
        id: "saas-dev",
        title: "SaaS Product Development",
        description: "Multi-tenant software architectures engineered for enterprise scale.",
        href: "/services/web-development/saas-products",
      },
      {
        id: "ecommerce-dev",
        title: "E-commerce Development",
        description: "High-throughput Shopify Plus and headless commerce architectures.",
        href: "/services/web-development/ecommerce",
      },
      {
        id: "api-integration",
        title: "API Development & Integration",
        description: "Robust REST & GraphQL middleware connecting complex ecosystems.",
        href: "/services/web-development/api-integration",
      },
      {
        id: "backend-systems",
        title: "Database & Backend Systems",
        description: "PostgreSQL, Supabase, and distributed edge database architecture.",
        href: "/services/web-development/database-systems",
      },
      {
        id: "performance-optimization",
        title: "Website Performance Optimization",
        description: "Refactoring legacy bottlenecks to guarantee 99+ Core Web Vitals.",
        href: "/services/web-development/performance-optimization",
        badge: "99+ Vitals",
      },
    ],
  },
  {
    id: "google-ads",
    code: "SYS.02",
    index: "02",
    title: "Google Ads & Performance Marketing",
    subtitle: "Customer Acquisition",
    shortDescription: "Driving qualified intent-driven traffic and measurable business growth.",
    href: "/services/google-ads",
    iconType: "google",
    subServices: [
      {
        id: "search-ads",
        title: "Google Search Ads",
        description: "High-intent keyword bidding captures active commercial demand.",
        href: "/services/google-ads/search",
      },
      {
        id: "display-ads",
        title: "Google Display Ads",
        description: "Contextual visual placement across premium global networks.",
        href: "/services/google-ads/display",
      },
      {
        id: "youtube-ads",
        title: "YouTube Ads",
        description: "Direct-response video campaigns targeting high-affinity audiences.",
        href: "/services/google-ads/youtube",
      },
      {
        id: "conversion-tracking-setup",
        title: "Conversion Tracking Setup",
        description: "Server-side GTM, enhanced conversions, and attribution pipelines.",
        href: "/services/google-ads/conversion-tracking",
        badge: "First-Party",
      },
      {
        id: "landing-page-optimization",
        title: "Landing Page Optimization",
        description: "Iterative split-testing to maximize conversion efficiency per dollar.",
        href: "/services/google-ads/landing-pages",
      },
      {
        id: "campaign-management",
        title: "Campaign Management",
        description: "Continuous automated negative bidding and budget allocation.",
        href: "/services/google-ads/management",
      },
      {
        id: "roi-optimization",
        title: "ROI Optimization",
        description: "Algorithmic ROAS scaling prioritizing real gross revenue.",
        href: "/services/google-ads/roi-optimization",
      },
    ],
  },
  {
    id: "meta-ads",
    code: "SYS.03",
    index: "03",
    title: "Meta Ads & Social Growth",
    subtitle: "Direct Response Scale",
    shortDescription: "Helping brands acquire customers through Facebook and Instagram.",
    href: "/services/meta-ads",
    iconType: "meta",
    subServices: [
      {
        id: "facebook-ads",
        title: "Facebook Ads",
        description: "Advantage+ shopping and structured audience acquisition funnels.",
        href: "/services/meta-ads/facebook",
      },
      {
        id: "instagram-ads",
        title: "Instagram Ads",
        description: "High-engagement visual storytelling designed for instant conversion.",
        href: "/services/meta-ads/instagram",
      },
      {
        id: "lead-gen-campaigns",
        title: "Lead Generation Campaigns",
        description: "Qualified B2B and enterprise inquiry capture with instant CRM sync.",
        href: "/services/meta-ads/lead-generation",
      },
      {
        id: "ecommerce-sales-campaigns",
        title: "E-commerce Sales Campaigns",
        description: "Dynamic product catalog campaigns optimized for repeat purchases.",
        href: "/services/meta-ads/ecommerce-sales",
      },
      {
        id: "retargeting-strategies",
        title: "Retargeting Strategies",
        description: "Multi-touchpoint behavioral retargeting using First-Party CAPI.",
        href: "/services/meta-ads/retargeting",
      },
      {
        id: "creative-ad-strategy",
        title: "Creative Ad Strategy",
        description: "Data-driven creative testing matrices and video direct response.",
        href: "/services/meta-ads/creative-strategy",
      },
      {
        id: "audience-optimization",
        title: "Audience Optimization",
        description: "Predictive lookalikes and custom customer segment modeling.",
        href: "/services/meta-ads/audience-optimization",
      },
    ],
  },
  {
    id: "ai-automation",
    code: "SYS.04",
    index: "04",
    title: "AI & Business Automation",
    subtitle: "Intelligent Workflows",
    shortDescription: "Automating repetitive tasks and creating intelligent business workflows.",
    href: "/services/ai-automation",
    iconType: "ai",
    subServices: [
      {
        id: "ai-chatbots",
        title: "AI Chatbots & AI Assistants",
        description: "Retrieval-augmented conversational agents trained on company data.",
        href: "/services/ai-automation/chatbots",
      },
      {
        id: "ai-agents",
        title: "AI Agent Development",
        description: "Autonomous multi-step execution agents handling business tasks.",
        href: "/services/ai-automation/agents",
        badge: "Autonomous",
      },
      {
        id: "business-process-automation",
        title: "Business Process Automation",
        description: "Eliminating manual data transfer across operations and ERP systems.",
        href: "/services/ai-automation/process-automation",
      },
      {
        id: "crm-automation",
        title: "CRM Automation",
        description: "Automated deal pipelines, automated task alerts, and lead enrichment.",
        href: "/services/ai-automation/crm-automation",
      },
      {
        id: "whatsapp-email-automation",
        title: "WhatsApp & Email Automation",
        description: "Automated client communication sequences with high delivery rates.",
        href: "/services/ai-automation/whatsapp-email",
      },
      {
        id: "workflow-integration",
        title: "Workflow Integration",
        description: "Secure webhook and ETL middleware connecting internal systems.",
        href: "/services/ai-automation/workflow-integration",
      },
      {
        id: "custom-ai-solutions",
        title: "Custom AI Solutions",
        description: "Proprietary machine learning pipelines and internal automation tools.",
        href: "/services/ai-automation/custom-solutions",
      },
    ],
  },
  {
    id: "cloud-technology",
    code: "SYS.05",
    index: "05",
    title: "Cloud & Technology Solutions",
    subtitle: "Enterprise Reliability",
    shortDescription: "Reliable infrastructure for modern digital products.",
    href: "/services/cloud-technology",
    iconType: "cloud",
    subServices: [
      {
        id: "cloud-deployment",
        title: "Cloud Deployment",
        description: "Edge networks, CDN optimization, and serverless compute clusters.",
        href: "/services/cloud-technology/cloud-deployment",
      },
      {
        id: "server-setup",
        title: "Server Setup & Management",
        description: "Automated zero-downtime CI/CD deployment pipelines on AWS/Cloudflare.",
        href: "/services/cloud-technology/server-management",
      },
      {
        id: "database-solutions",
        title: "Database Solutions",
        description: "High-availability clustering, automated backups, and encryption at rest.",
        href: "/services/cloud-technology/database-solutions",
      },
      {
        id: "security-optimization",
        title: "Security & Performance Optimization",
        description: "DDoS mitigation, web application firewalls (WAF), and CSP hardening.",
        href: "/services/cloud-technology/security-optimization",
        badge: "Enterprise",
      },
      {
        id: "app-deployment",
        title: "Application Deployment",
        description: "Containerized Docker and Kubernetes deployments for microservices.",
        href: "/services/cloud-technology/application-deployment",
      },
    ],
  },
] as const;

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