/**
 * BRIVYA SOLUTIONS — 7 CORE PILLARS & MEGA-MENU MASTER MANIFEST
 * Authoritative data for all 7 systems, 47 sub-services, official brand icon keys,
 * and contextual per-pillar conversion actions.
 */

export * from "@/types/megaMenu";

import {
  ServicePillar,
  SubServiceItem,
  PillarCtaConfig,
  ServiceIconType,
} from "@/types/megaMenu";

export type { ServicePillar, SubServiceItem, PillarCtaConfig, ServiceIconType };

export const SERVICE_PILLARS: readonly ServicePillar[] = [
  // ---------------------------------------------------------------------------
  // PILLAR 01: WEB DEVELOPMENT & CUSTOM SOFTWARE
  // ---------------------------------------------------------------------------
  {
    id: "web-development",
    index: "01",
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
        description: "High-performance digital flagships with zero bloat and clean aesthetics.",
        href: "/services/web-development/custom-websites",
        iconType: "nextjs",
      },
      {
        id: "web-applications",
        title: "Full-Stack Web Applications",
        description: "Bespoke web applications built on Next.js, TypeScript, and modern backends.",
        href: "/services/web-development/web-applications",
        iconType: "typescript",
      },
      {
        id: "saas-products",
        title: "SaaS Product Development",
        description: "Multi-tenant software architectures engineered for enterprise scale.",
        href: "/services/web-development/saas-products",
        iconType: "react",
      },
      {
        id: "ecommerce-platforms",
        title: "E-commerce Development",
        description: "High-throughput Shopify Plus and headless commerce architectures.",
        href: "/services/web-development/ecommerce",
        iconType: "shopify",
      },
      {
        id: "api-integrations",
        title: "API Development & Integration",
        description: "Robust REST and GraphQL middleware connecting internal databases.",
        href: "/services/web-development/api-integration",
        iconType: "graphql",
      },
      {
        id: "backend-databases",
        title: "Database & Backend Systems",
        description: "PostgreSQL, Supabase, and distributed edge architectures.",
        href: "/services/web-development/database-systems",
        iconType: "supabase",
      },
      {
        id: "performance-tuning",
        title: "Website Performance Optimization",
        description: "Codebase refactoring to guarantee 99+ Core Web Vitals.",
        href: "/services/web-development/performance-optimization",
        badge: "99+ Vitals",
        iconType: "lighthouse",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PILLAR 02: GOOGLE ADS & PERFORMANCE MARKETING
  // ---------------------------------------------------------------------------
  {
    id: "google-ads",
    index: "02",
    title: "Google Ads & Performance Marketing",
    subtitle: "Intent Capture & Bidding Systems",
    summary: "High-intent search, shopping feeds, and first-party conversion tracking infrastructure.",
    href: "/services/google-ads",
    iconType: "google-ads",
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
        iconType: "google-search",
      },
      {
        id: "display-campaigns",
        title: "Google Display Ads",
        description: "Contextual visual placement across premium global networks.",
        href: "/services/google-ads/display",
        iconType: "google-display",
      },
      {
        id: "youtube-campaigns",
        title: "YouTube Ads",
        description: "Direct-response video targeting high-value prospect segments.",
        href: "/services/google-ads/youtube",
        iconType: "youtube",
      },
      {
        id: "conversion-infrastructure",
        title: "Conversion Tracking Setup",
        description: "Server-side GTM, enhanced conversions, and offline attribution pipelines.",
        href: "/services/google-ads/conversion-tracking",
        badge: "First-Party",
        iconType: "gtm",
      },
      {
        id: "landing-page-testing",
        title: "Landing Page Optimization",
        description: "A/B split testing to increase visitor-to-lead conversion rates.",
        href: "/services/google-ads/landing-pages",
        iconType: "ga4",
      },
      {
        id: "budget-management",
        title: "Campaign Management",
        description: "Algorithmic dayparting, bid adjustments, and transparent reports.",
        href: "/services/google-ads/management",
        iconType: "google-bidding",
      },
      {
        id: "roas-scaling",
        title: "ROI Optimization",
        description: "Focusing capital on profitable customer segments rather than vanity clicks.",
        href: "/services/google-ads/roi-optimization",
        iconType: "google-roi",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PILLAR 03: META ADS & SOCIAL GROWTH
  // ---------------------------------------------------------------------------
  {
    id: "meta-ads",
    index: "03",
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
        description: "Structured campaign architecture focused on consistent customer acquisition.",
        href: "/services/meta-ads/facebook",
        iconType: "facebook",
      },
      {
        id: "instagram-growth",
        title: "Instagram Ads",
        description: "High-impact visual narratives designed for conversion and brand stature.",
        href: "/services/meta-ads/instagram",
        iconType: "instagram",
      },
      {
        id: "lead-funnels",
        title: "Lead Generation Campaigns",
        description: "Pre-qualified lead capture connected directly to your internal sales pipeline.",
        href: "/services/meta-ads/lead-generation",
        iconType: "meta-leads",
      },
      {
        id: "ecommerce-funnels",
        title: "E-commerce Sales Campaigns",
        description: "Dynamic product catalogs and checkout funnels for recurring purchases.",
        href: "/services/meta-ads/ecommerce-sales",
        iconType: "meta-catalog",
      },
      {
        id: "retargeting-mesh",
        title: "Retargeting Strategies",
        description: "First-party behavioral retargeting using Meta Conversions API (CAPI).",
        href: "/services/meta-ads/retargeting",
        iconType: "meta-capi",
      },
      {
        id: "creative-laboratory",
        title: "Creative Ad Strategy",
        description: "Systematic hook, body, and CTA split-testing matrices.",
        href: "/services/meta-ads/creative-strategy",
        iconType: "meta-creative",
      },
      {
        id: "audience-modeling",
        title: "Audience Optimization",
        description: "Predictive lookalikes, exclusion lists, and custom purchase intent tiers.",
        href: "/services/meta-ads/audience-optimization",
        iconType: "meta-audience",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PILLAR 04: AI & BUSINESS AUTOMATION
  // ---------------------------------------------------------------------------
  {
    id: "ai-automation",
    index: "04",
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
        description: "Retrieval-augmented conversational bots connected directly to your data.",
        href: "/services/ai-automation/chatbots",
        iconType: "openai",
      },
      {
        id: "autonomous-agents",
        title: "AI Agent Development",
        description: "Multi-step autonomous agents executing business tasks with human oversight.",
        href: "/services/ai-automation/agents",
        badge: "Autonomous",
        iconType: "python",
      },
      {
        id: "process-workflows",
        title: "Business Process Automation",
        description: "Connecting disparate software tools to remove manual human data entry.",
        href: "/services/ai-automation/process-automation",
        iconType: "zapier",
      },
      {
        id: "crm-pipelines",
        title: "CRM Automation",
        description: "Automated deal stages, follow-up notifications, and client data enrichment.",
        href: "/services/ai-automation/crm-automation",
        iconType: "hubspot",
      },
      {
        id: "messaging-automation",
        title: "WhatsApp & Email Automation",
        description: "High-delivery transactional messaging sequences and customer service triggers.",
        href: "/services/ai-automation/whatsapp-email",
        iconType: "whatsapp",
      },
      {
        id: "integration-mesh",
        title: "Workflow Integration",
        description: "Enterprise webhooks and ETL pipelines synchronizing data across platforms.",
        href: "/services/ai-automation/workflow-integration",
        iconType: "webhooks",
      },
      {
        id: "bespoke-ai",
        title: "Custom AI Solutions",
        description: "Fine-tuned models and private business automation software.",
        href: "/services/ai-automation/custom-solutions",
        iconType: "pytorch",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PILLAR 05: CLOUD & TECHNOLOGY SOLUTIONS
  // ---------------------------------------------------------------------------
  {
    id: "cloud-technology",
    index: "05",
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
        iconType: "cloudflare",
      },
      {
        id: "server-operations",
        title: "Server Setup & Management",
        description: "Automated CI/CD pipelines, containerized environments, and monitoring.",
        href: "/services/cloud-technology/server-management",
        iconType: "aws",
      },
      {
        id: "database-clusters",
        title: "Database Solutions",
        description: "High-availability replication, automated backups, and encrypted storage.",
        href: "/services/cloud-technology/database-solutions",
        iconType: "postgresql",
      },
      {
        id: "security-hardening",
        title: "Security & Performance Optimization",
        description: "WAF deployment, DDoS mitigation, and SSL/TLS configuration.",
        href: "/services/cloud-technology/security-optimization",
        badge: "Hardened",
        iconType: "security-waf",
      },
      {
        id: "container-apps",
        title: "Application Deployment",
        description: "Docker and Kubernetes setups ensuring smooth, scalable software rollouts.",
        href: "/services/cloud-technology/application-deployment",
        iconType: "docker",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PILLAR 06: MICROSOFT OFFICE ADD-IN DEVELOPMENT
  // ---------------------------------------------------------------------------
  {
    id: "office-addins",
    index: "06",
    title: "Office Add-in Development",
    subtitle: "Microsoft 365 Enterprise Extensions",
    summary: "Bespoke Office Web Add-ins for Word, Excel, PowerPoint, and Outlook.",
    href: "/services/office-addins",
    iconType: "microsoft",
    contextualCta: {
      headline: "Building or migrating a Microsoft Office Add-in?",
      actionText: "Discuss Office Add-in Architecture",
      href: "/start-project?service=office-addins",
      turnaroundTag: "Microsoft AppSource Certified",
    },
    subServices: [
      {
        id: "word-addin",
        title: "Word Add-in Development",
        description: "Document automation, template generation, and legal contract drafting tools.",
        href: "/services/office-addins/word",
        iconType: "word",
      },
      {
        id: "excel-addin",
        title: "Excel Add-in Development",
        description: "Custom financial calculation engines, data sync ribbons, and ERP bridge add-ins.",
        href: "/services/office-addins/excel",
        iconType: "excel",
      },
      {
        id: "powerpoint-addin",
        title: "PowerPoint Add-in Development",
        description: "Automated slide deck builders, corporate asset libraries, and chart connectors.",
        href: "/services/office-addins/powerpoint",
        iconType: "powerpoint",
      },
      {
        id: "outlook-addin",
        title: "Outlook Add-in Development",
        description: "Email tracking sidebar tools, CRM auto-filing, and secure scheduling add-ins.",
        href: "/services/office-addins/outlook",
        iconType: "outlook",
      },
      {
        id: "teams-addin",
        title: "Microsoft Teams App Development",
        description: "Interactive messaging extensions, bots, and collaborative workspace tabs.",
        href: "/services/office-addins/teams",
        iconType: "teams",
      },
      {
        id: "vsto-migration",
        title: "VSTO to Web Add-in Migration",
        description: "Modernizing legacy COM/VSTO plugins into modern cross-platform web add-ins.",
        href: "/services/office-addins/vsto-migration",
        badge: "Migration",
        iconType: "microsoft",
      },
      {
        id: "sso-azure-ad",
        title: "Single Sign-On (SSO) & Azure AD",
        description: "Enterprise identity provisioning and Microsoft Graph API integrations.",
        href: "/services/office-addins/azure-sso",
        badge: "Enterprise",
        iconType: "azure",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // PILLAR 07: GOOGLE WORKSPACE ADD-ONS DEVELOPMENT
  // ---------------------------------------------------------------------------
  {
    id: "google-addons",
    index: "07",
    title: "Google Add-ons Development",
    subtitle: "Google Workspace & Productivity Tools",
    summary: "Custom extensions for Google Sheets, Docs, Gmail, and Google Forms.",
    href: "/services/google-addons",
    iconType: "workspace",
    contextualCta: {
      headline: "Automating workflows across Google Workspace?",
      actionText: "Consult on Workspace Engineering",
      href: "/start-project?service=google-addons",
      turnaroundTag: "Google Marketplace Ready",
    },
    subServices: [
      {
        id: "google-sheets-addon",
        title: "Google Sheets Add-on Development",
        description: "Custom formulas, external API data feeds, and financial modeling sidebars.",
        href: "/services/google-addons/sheets",
        iconType: "sheets",
      },
      {
        id: "google-docs-addon",
        title: "Google Docs Add-on Development",
        description: "Automated document merge, AI content assistants, and publishing workflows.",
        href: "/services/google-addons/docs",
        iconType: "docs",
      },
      {
        id: "gmail-addon",
        title: "Gmail Add-on Development",
        description: "Contextual email action cards, customer support sidebars, and CRM logging.",
        href: "/services/google-addons/gmail",
        iconType: "gmail",
      },
      {
        id: "google-forms-addon",
        title: "Google Forms Add-on Development",
        description: "Automated response validation, notification triggers, and custom email routes.",
        href: "/services/google-addons/forms",
        iconType: "forms",
      },
      {
        id: "google-slides-addon",
        title: "Google Slides Add-on Development",
        description: "Automated dynamic chart generation and brand design system synchronizers.",
        href: "/services/google-addons/slides",
        iconType: "slides",
      },
      {
        id: "google-drive-addon",
        title: "Google Drive Workflow Extensions",
        description: "Cloud storage lifecycle automation, batch conversion, and access audits.",
        href: "/services/google-addons/drive",
        iconType: "drive",
      },
      {
        id: "apps-script-mesh",
        title: "Apps Script & Enterprise APIs",
        description: "Custom Google Cloud project integration, OAuth2, and scalable backends.",
        href: "/services/google-addons/apps-script",
        badge: "Cloud API",
        iconType: "apps-script",
      },
    ],
  },
] as const;

export const SERVICES_CATEGORIES = SERVICE_PILLARS;