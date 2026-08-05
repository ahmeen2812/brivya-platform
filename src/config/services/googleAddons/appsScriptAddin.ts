import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const APPS_SCRIPT_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Google Apps Script Development & Enterprise APIs | Brivya Solutions",
    description: "Connect business systems with custom Google Apps Script solutions and enterprise REST API integrations. OAuth 2.0 authentication, webhooks, and automated workflows.",
  },
  hero: {
    serviceTitle: "Google Add-ons Development",
    heading: "Build Powerful Business Automations With Apps Script & Enterprise APIs",
    description: "Simplify business operations and connect your applications with custom Google Apps Script solutions and enterprise API integrations. We develop automated workflows, custom scripts, and API connections that help businesses exchange information, manage data, and streamline repetitive operations. From Google Workspace automation to enterprise application connectivity, our solutions are designed around your technical and operational requirements.",
    imagePath: "/images/services/google-addons/apps-script-hero-illustration.png",
    imageAlt: "Google Apps Script Development and Enterprise API Mesh Illustration",
  },
  heroDirective: {
    tag: "Enterprise Automation Directive",
    heading: "Apps Script & API Solutions Built Around Your Business Workflows",
    paragraph: "Businesses often need customized automation and reliable connections between different applications. We develop Google Apps Script solutions and enterprise API integrations that automate processes, connect business systems, and simplify data exchange. From Google Workspace automation and custom scripts to REST API integrations, authentication, and application connectivity, our solutions are designed around your business requirements, with a focus on secure access, reliable execution, and maintainable workflows."
  },
  verticalSplitSection: {
    tag: "Custom Scripting & Integration",
    heading: "Custom Apps Script Solutions & Workspace API Mesh",
    description: "Bridge Google Workspace applications with enterprise platforms, databases, and custom REST API endpoints.",
    keyFeatures: [
      {
        title: "Custom Google Apps Script Development",
        description: "Automate repetitive business activities with custom JavaScript-based Google Apps Script solutions. We develop scripts for Google Sheets, Docs, Drive, Gmail, and other supported Workspace services to manage data, generate documents, send notifications, and streamline daily operations."
      },
      {
        title: "Google Workspace API Integration",
        description: "Connect Google Workspace applications through their official APIs and supported services. We integrate Gmail, Google Drive, Sheets, Docs, Calendar, and other Workspace applications to exchange information and coordinate business workflows."
      }
    ],
    imagePath: "/images/services/google-addons/apps-script-sidebar-mockup.png",
    imageAlt: "Google Apps Script Code Execution and API Integration Mockup",
  },
  fullWidthBanner: {
    tag: "Enterprise REST Integration",
    heading: "Secure OAuth 2.0 & Cloud Service Account Architecture",
    description: "Implement industry-standard authentication, token caching, permission scopes, and enterprise API gateways to safeguard corporate data pipelines."
  },
  fourPartMosaic: {
    block1: {
      title: "Enterprise REST API Integration",
      description: "Connect your business applications with external platforms through REST APIs and HTTP-based integrations. We develop solutions that retrieve data, send requests, synchronize records, and connect enterprise systems using suitable API endpoints and authentication methods."
    },
    icon1: {
      imagePath: "/images/services/google-addons/apps-script-api-icon.png",
      imageAlt: "Enterprise REST API Connectivity Icon"
    },
    block2: {
      title: "API Authentication & Access Management",
      description: "Protect application connections through appropriate authentication and authorization configurations. We implement OAuth 2.0, API credentials, service accounts, and permission scopes according to the integration requirements and data access policies."
    },
    icon2: {
      imagePath: "/images/services/google-addons/apps-script-auth-icon.png",
      imageAlt: "OAuth 2.0 Security and Identity Scopes Icon"
    }
  },
  panoramicShowcase: {
    tag: "Automated Execution Engines",
    heading: "Cross-Platform Workflow Orchestration Across Cloud Ecosystems",
    description: "Coordinate complex multi-step business logic across CRM platforms, ERP backends, Google Cloud Project gateways, and Workspace tools.",
    imagePath: "/images/services/google-addons/apps-script-panoramic-showcase.png",
    imageAlt: "Apps Script and Enterprise API workflow execution showcase across cloud architectures",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Automated API Workflows & Execution",
      description: "Coordinate multiple API operations through custom scripts and automated workflows. We develop solutions that process incoming data, trigger application actions, execute remote functions, and manage information transfers across connected systems."
    },
    {
      index: "02",
      title: "Enterprise API Deployment & Maintenance",
      description: "Prepare integrations for reliable operation within your business environment. We handle API configuration, deployment, execution monitoring, error handling, quota considerations, and ongoing improvements to support consistent integration performance."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google Apps Script & Enterprise API Documentation",
    description: "Official developer guides, API gateway references, and authentication standards from Google.",
    items: [
      {
        id: "res-apps-script-home",
        title: "Google Apps Script Documentation",
        description: "Explore custom scripts, Workspace automation, triggers, and application development.",
        url: "https://developers.google.com/apps-script",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/apps-script-badge-01.png",
        badgeImageAlt: "Google Apps Script Documentation Badge"
      },
      {
        id: "res-workspace-apis",
        title: "Google Workspace APIs",
        description: "Discover APIs for Gmail, Drive, Sheets, Calendar, Docs, and other Google services.",
        url: "https://developers.google.com/workspace",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/apps-script-badge-02.png",
        badgeImageAlt: "Google Workspace APIs Overview Badge"
      },
      {
        id: "res-advanced-services",
        title: "Apps Script Advanced Services",
        description: "Learn how to connect Apps Script projects with additional Google APIs.",
        url: "https://developers.google.com/apps-script/guides/services/advanced",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/apps-script-badge-03.png",
        badgeImageAlt: "Apps Script Advanced Services Documentation Badge"
      },
      {
        id: "res-auth-overview",
        title: "Google Workspace Authentication & Authorization",
        description: "Understand OAuth 2.0, access tokens, authentication, and permission scopes.",
        url: "https://developers.google.com/workspace/guides/auth-overview",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/apps-script-badge-04.png",
        badgeImageAlt: "Workspace OAuth Authentication Overview Badge"
      },
      {
        id: "res-api-gateway",
        title: "Google Cloud API Gateway",
        description: "Learn about managing, securing, and monitoring APIs for backend services.",
        url: "https://cloud.google.com/api-gateway/docs",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/apps-script-badge-05.png",
        badgeImageAlt: "Google Cloud API Gateway Documentation Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Apps Script & Enterprise APIs",
    items: [
      {
        id: "faq-as-1",
        question: "What is Google Apps Script development?",
        answer: "Google Apps Script is a cloud-based JavaScript development platform that allows developers to automate Google Workspace applications and connect external services. It supports custom scripts, scheduled triggers, document processing, spreadsheet automation, email workflows, and other business operations."
      },
      {
        id: "faq-as-2",
        question: "What types of business processes can Apps Script automate?",
        answer: "Apps Script can automate spreadsheet updates, document generation, email notifications, file management, calendar events, form responses, and other repetitive activities. The available capabilities depend on the integrated services and execution limits."
      },
      {
        id: "faq-as-3",
        question: "What are enterprise APIs?",
        answer: "Enterprise APIs are application interfaces that allow business systems to exchange information and perform operations through defined requests and responses. They help connect CRM platforms, databases, internal applications, cloud services, and other business systems."
      },
      {
        id: "faq-as-4",
        question: "Can Google Apps Script connect with external APIs?",
        answer: "Yes. Apps Script supports HTTP and HTTPS requests through its UrlFetch service, allowing scripts to communicate with external REST APIs and other web services. Authentication, request handling, and data processing depend on the connected API."
      },
      {
        id: "faq-as-5",
        question: "What is the difference between Apps Script services and advanced services?",
        answer: "Built-in Apps Script services provide direct access to common Google Workspace functionality. Advanced services expose additional Google APIs through Apps Script and must be enabled in the project before use. Direct HTTP requests can also be used when additional API functionality is required."
      },
      {
        id: "faq-as-6",
        question: "Can Apps Script integrate with enterprise CRM and ERP systems?",
        answer: "Yes, provided those systems expose suitable APIs or other supported integration methods. Apps Script can exchange information with CRM platforms, ERP software, databases, and internal business applications using appropriate authentication and connectivity."
      },
      {
        id: "faq-as-7",
        question: "How do you secure enterprise API integrations?",
        answer: "We configure suitable authentication methods, OAuth permissions, service accounts, and access scopes. We also consider credential storage, HTTPS communication, authorization policies, and data access restrictions according to the security requirements of each integration."
      },
      {
        id: "faq-as-8",
        question: "Are there execution limits for Google Apps Script?",
        answer: "Yes. Google Apps Script has execution-time limits, daily service quotas, and other resource restrictions that vary by account type and service. We consider these limitations during development and use suitable batching, caching, error handling, and alternative architectures where necessary."
      }
    ]
  },
  cta: {
    heading: "Connect Your Business Systems With Intelligent Automation & APIs",
    description: "Simplify business operations through custom Apps Script development and reliable enterprise API integrations. From Google Workspace automation and REST API connectivity to authentication, data synchronization, and automated workflows, let's develop a solution that connects your applications and supports your business requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};