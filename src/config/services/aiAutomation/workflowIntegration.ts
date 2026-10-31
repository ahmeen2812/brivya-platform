import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const WORKFLOW_INTEGRATION_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Enterprise Workflow Integration & Webhooks | Brivya Solutions",
    description: "Connect business systems, APIs, and databases with reliable automated workflows. End-to-end integration across n8n, Make, Zapier, and custom webhooks.",
  },
  hero: {
    serviceTitle: "Workflow Integration",
    heading: "Connect Your Business Systems With Seamless Workflow Integration",
    description: "Bring your business applications, data, and processes together through connected workflows. We develop integration solutions that enable different systems to exchange information, trigger automated actions, and work together more efficiently. From CRM and marketing platforms to databases, websites, and business applications, our solutions are designed around your existing technology and operational requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/ai-automation/workflow-integration-hero.png",
    imageAlt: "Enterprise Workflow Integration and Data Pipelines Illustration",
  },
  mainFeaturedCard: {
    tag: "Connected Infrastructure",
    heading: "Workflow Integration Solutions Built Around Your Business Systems",
    paragraphs: [
      "Disconnected applications and fragmented information can make everyday business operations difficult to manage. We develop workflow integration solutions that connect your existing software, synchronize relevant data, and coordinate activities across different platforms. Using APIs, webhooks, automation platforms, and custom integration development, we establish communication between business applications and create workflows that respond to specific events and conditions. From transferring customer information and updating records to coordinating multi-step processes across systems, our focus is on reliable data exchange, secure connections, and consistent workflow execution."
    ]
  },
  supportingCards: {
    heading: "Connected Application Architecture",
    subtitle: "Orchestrating event triggers, bidirectional synchronization, and custom API connections across software ecosystems.",
    card2IllustrationPath: "/images/services/ai-automation/workflow-realtime-sync.png",
    card2IllustrationAlt: "Real-Time Bidirectional Data Synchronization Diagram",
    card3IllustrationPath: "/images/services/ai-automation/workflow-webhook-architecture.png",
    card3IllustrationAlt: "Webhook Event-Driven Integration and Processing System",
    items: [
      {
        index: "01",
        title: "API Integration & Connectivity",
        description: "Connect different applications and software systems through their available APIs. We develop integrations that enable secure data exchange, retrieve information, send requests, and execute defined actions between connected platforms using suitable authentication and API methods.",
      },
      {
        index: "02",
        title: "CRM & Business Application Integration",
        description: "Bring your CRM and other business applications together to improve information flow across departments. We connect suitable platforms for sales, marketing, customer support, finance, and operations to synchronize records and coordinate business activities.",
      },
      {
        index: "03",
        title: "Real-Time Data Synchronization",
        description: "Keep information consistent across connected applications through automated data synchronization. We configure workflows that transfer new records, update existing information, and respond to supported events while considering data mapping, duplicate handling, and synchronization rules.",
      },
      {
        index: "04",
        title: "Webhook & Event-Based Integration",
        description: "Connect applications through event-driven workflows that respond to specific activities. We configure webhooks and event triggers to initiate actions when records are created, orders are received, forms are submitted, or other supported events occur.",
      },
      {
        index: "05",
        title: "Multi-Platform Workflow Automation",
        description: "Coordinate processes that involve multiple applications and business systems. We develop integrated workflows using platforms such as n8n, Zapier, Make, and Power Automate to manage conditional actions, data transfers, notifications, and multi-step operations.",
      },
      {
        index: "06",
        title: "Custom Integration, Testing & Monitoring",
        description: "Build and maintain integrations for business requirements that need additional technical configuration. We handle data mapping, authentication, workflow testing, error handling, and execution monitoring to help maintain reliable communication between connected systems.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Leading Integration & Automation Platforms",
    description: "Official documentation and developer resources from modern integration and webhook platforms.",
    items: [
      {
        id: "res-power-automate-integration",
        title: "Microsoft Power Automate",
        description: "Explore application connectors, automated workflows, and business system integrations.",
        url: "https://learn.microsoft.com/en-us/power-automate/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/power-automate-badge.png",
        badgeImageAlt: "Microsoft Power Automate Connectors Badge"
      },
      {
        id: "res-zapier-webhooks",
        title: "Zapier Webhooks",
        description: "Learn how webhooks exchange information and trigger actions between applications.",
        url: "https://help.zapier.com/hc/en-us/articles/8496326446989-Send-webhooks-in-Zap-workflows",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/zapier-webhooks-badge.png",
        badgeImageAlt: "Zapier Webhook Triggers Badge"
      },
      {
        id: "res-n8n-webhooks",
        title: "n8n Webhook Documentation",
        description: "Explore event-driven integrations, webhook triggers, and workflow execution.",
        url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/n8n-badge.png",
        badgeImageAlt: "n8n Workflow Automation Platform Badge"
      },
      {
        id: "res-workato-connectors",
        title: "Workato Connectors",
        description: "Understand application connectors, authentication, triggers, and integration actions.",
        url: "https://docs.workato.com/en/connectors.html",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/workato-badge.png",
        badgeImageAlt: "Workato Enterprise Connectors Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About Workflow Integration",
    items: [
      {
        id: "faq-wfi-1",
        question: "What is workflow integration?",
        answer: "Workflow integration connects different software applications and business systems so they can exchange information and coordinate activities. It allows businesses to automate data transfers, trigger actions, and manage processes across connected platforms."
      },
      {
        id: "faq-wfi-2",
        question: "Which applications can be connected through workflow integration?",
        answer: "Depending on available APIs and connectors, businesses can integrate CRM systems, email platforms, websites, accounting software, databases, e-commerce platforms, project management tools, and other business applications."
      },
      {
        id: "faq-wfi-3",
        question: "What is the difference between API integration and workflow integration?",
        answer: "API integration establishes communication between software applications through defined interfaces. Workflow integration uses these connections to coordinate multiple actions and processes across different systems. API integrations are often an important component of broader workflow solutions."
      },
      {
        id: "faq-wfi-4",
        question: "Can workflow integration synchronize data between different applications?",
        answer: "Yes. Connected applications can exchange and synchronize information when supported integration methods are available. Synchronization rules can determine how records are created, updated, matched, and handled across different systems."
      },
      {
        id: "faq-wfi-5",
        question: "Can I integrate applications that do not have ready-made connectors?",
        answer: "Yes, provided the applications expose suitable APIs, webhooks, or other accessible integration methods. Custom integrations can help connect systems that do not have dedicated connectors in platforms such as Zapier or n8n."
      },
      {
        id: "faq-wfi-6",
        question: "What are webhooks in workflow integration?",
        answer: "Webhooks are event-based notifications that send information from one application to another when a specified event occurs. They can trigger workflows when activities such as form submissions, new orders, or record updates take place."
      },
      {
        id: "faq-wfi-7",
        question: "Is workflow integration secure for business data?",
        answer: "Integrations can use authentication, access permissions, encrypted communication, and controlled data access to protect information. Security requirements depend on the connected applications, integration architecture, credential management, and the sensitivity of the data being transferred."
      },
      {
        id: "faq-wfi-8",
        question: "How do you ensure integrated workflows operate reliably?",
        answer: "We test data transfers, authentication, workflow conditions, and connected application responses. We also consider error handling, retry mechanisms, execution logs, and monitoring to identify failed operations and maintain consistent integration performance."
      }
    ]
  },
  cta: {
    heading: "Bring Your Business Applications Together With Smart Integration",
    description: "Make your business systems work together through reliable workflow integrations. From API connectivity and data synchronization to webhook automation and multi-platform workflows, let's develop an integration solution that simplifies your operations and connects your existing technology.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};