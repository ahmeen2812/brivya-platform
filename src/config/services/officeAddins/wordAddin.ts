import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const WORD_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Word Add-in Development | Microsoft 365 Enterprise Tools | Brivya Solutions",
    description: "Extend Microsoft Word with custom add-in development. Automate document creation, contract drafting, and business integrations using Office.js and web technologies.",
  },
  // ui4.png: Hero section
  hero: {
    serviceTitle: "Office Add-in Development",
    heading: "Extend Microsoft Word With Custom Add-in Development",
    description: "Improve document workflows and expand Microsoft Word functionality with custom add-ins designed around your business requirements. We develop Word add-ins that integrate interactive features, document automation, external data sources, and custom tools directly into the Word interface. From document editing and content generation to business application integrations, our solutions help make everyday document tasks more efficient.",
    imagePath: "/images/services/office-addins/word-hero-illustration.png",
    imageAlt: "Microsoft Word Add-in Interface and Automation Illustration",
  },
  // ui4.png Bottom: Full-width converging directive statement banner
  heroDirective: {
    tag: "Workflow Directive",
    heading: "Custom Word Add-ins Built Around Your Document Workflows",
    paragraph: "We develop custom Microsoft Word add-ins to streamline document creation, automate repetitive tasks, and improve document management. Using Office JavaScript APIs and modern web technologies, we build solutions that automate document generation and formatting, manage templates, retrieve business information, and integrate Word with external applications and business systems. Our add-ins are tailored to specific business requirements, focusing on practical functionality, secure permissions, user-friendly interfaces, improved productivity, and compatibility with supported Word environments."
  },
  // ui3.png Part 1: Vertical Split Section (Task Pane & Automation + Vertical UI Mockup)
  verticalSplitSection: {
    tag: "Task Pane & Automation Engine",
    heading: "Interactive Task Panes & Automated Template Management",
    description: "Extend Word with specialized sidebars that provide custom tools directly inside the application, coupled with automated document creation engines.",
    keyFeatures: [
      {
        title: "Custom Word Task Pane Add-ins",
        description: "Extend Word with interactive task panes that provide additional tools directly inside the application. We develop custom interfaces for document management, content generation, data retrieval, and other features designed around your workflow requirements."
      },
      {
        title: "Document Automation & Template Management",
        description: "Simplify repetitive document creation using automated templates and structured content. We develop add-ins that insert predefined content, populate document fields, manage templates, and support consistent document formatting."
      }
    ],
    imagePath: "/images/services/office-addins/word-taskpane-mockup.png",
    imageAlt: "Interactive Word Task Pane UI and Template Automation Mockup",
  },
  // ui3.png Part 2: Standalone Full-Width Horizontal Section
  fullWidthBanner: {
    tag: "Office.js Architecture",
    heading: "Modern Cross-Platform Document Engineering",
    description: "Built on Microsoft's modern web add-in platform using HTML5, TypeScript, and Office JavaScript APIs. Our solutions run seamlessly across Word on Windows, Mac, and Word on the web without relying on fragile legacy COM dependencies."
  },
  // ui3.png Part 3: 4-Part Horizontal Composition [Content] [Icon] [Content] [Icon]
  fourPartMosaic: {
    block1: {
      title: "Word Document Editing & Formatting",
      description: "Create custom functionality for working with document content and formatting. Using Word JavaScript APIs, we develop features that interact with paragraphs, tables, content controls, text ranges, and other supported document elements."
    },
    icon1: {
      imagePath: "/images/services/office-addins/word-editing-icon.png",
      imageAlt: "Document Structure and Content Controls Icon"
    },
    block2: {
      title: "API & Business System Integration",
      description: "Connect Microsoft Word with external applications and business data sources. We integrate supported APIs and services to retrieve information, populate documents, and connect document workflows with CRM platforms, databases, and other business systems."
    },
    icon2: {
      imagePath: "/images/services/office-addins/word-api-integration-icon.png",
      imageAlt: "Cloud API and Database Integration Icon"
    }
  },
  // ui3.png Part 4: Wide 16:6 Panoramic Landscape Visual
  panoramicShowcase: {
    tag: "Enterprise Deployment",
    heading: "Unified Document Automation Across Enterprise Ecosystems",
    description: "Deploy custom ribbon commands and automated document pipelines across your entire organization via Microsoft 365 Centralized Deployment.",
    imagePath: "/images/services/office-addins/word-panoramic-showcase.png",
    imageAlt: "Word Add-in running across Windows desktop, Mac, and Web browser interfaces",
  },
  // Additional capabilities
  additionalCapabilities: [
    {
      index: "01",
      title: "Custom Ribbon Commands & Interactive Tools",
      description: "Add custom buttons and commands to the Word ribbon to make frequently used features easier to access. We develop interactive tools that launch task panes, perform document actions, and support specific business operations."
    },
    {
      index: "02",
      title: "Word Add-in Testing & Deployment",
      description: "Prepare Word add-ins for reliable use across supported environments. We handle functionality testing, compatibility checks, manifest configuration, permission settings, and deployment through supported Microsoft 365 distribution methods."
    }
  ],
  // Section 04: Official Resources (5 items)
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Microsoft Word Add-in Development Documentation",
    description: "Official developer guides, API specifications, and centralized deployment documentation from Microsoft.",
    items: [
      {
        id: "res-word-docs",
        title: "Microsoft Word Add-ins Documentation",
        description: "Explore Word add-in development, testing, debugging, and publishing.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/word/",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/word-badge-01.png",
        badgeImageAlt: "Microsoft Word Add-ins Documentation Badge"
      },
      {
        id: "res-word-api",
        title: "Word JavaScript API Reference",
        description: "Learn how to interact with document content, paragraphs, tables, and other Word objects.",
        url: "https://learn.microsoft.com/en-us/javascript/api/word?view=word-js-preview",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/word-badge-02.png",
        badgeImageAlt: "Word JavaScript API Reference Badge"
      },
      {
        id: "res-office-platform",
        title: "Office Add-ins Platform Overview",
        description: "Understand task panes, ribbon commands, and cross-platform add-in architecture.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/word-badge-03.png",
        badgeImageAlt: "Office Add-ins Platform Architecture Badge"
      },
      {
        id: "res-office-manifest",
        title: "Office Add-in Manifest",
        description: "Explore add-in configuration, permissions, and application integration settings.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/develop/add-in-manifests",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/word-badge-04.png",
        badgeImageAlt: "Office Add-in Manifest Configuration Badge"
      },
      {
        id: "res-office-deployment",
        title: "Office Add-in Deployment",
        description: "Learn about publishing and centrally deploying add-ins through Microsoft 365.",
        url: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-deployment-of-add-ins",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/word-badge-05.png",
        badgeImageAlt: "Microsoft 365 Centralized Deployment Badge"
      }
    ]
  },
  // Section 05: Frequently Asked Questions (8 items verbatim)
  faq: {
    heading: "Common Questions About Word Add-in Development",
    items: [
      {
        id: "faq-w-1",
        question: "What is Word add-in development?",
        answer: "Word add-in development involves creating custom extensions that add functionality to Microsoft Word. These add-ins can provide interactive task panes, custom ribbon commands, document automation, and integrations with external applications using web technologies and Office JavaScript APIs."
      },
      {
        id: "faq-w-2",
        question: "What can a custom Word add-in do?",
        answer: "A custom Word add-in can automate document creation, insert content, apply formatting, retrieve external information, manage templates, and provide specialized tools within Word. Its capabilities depend on the available Word APIs and required permissions."
      },
      {
        id: "faq-w-3",
        question: "Can a Word add-in read and modify document content?",
        answer: "Yes. With the appropriate permissions and supported APIs, Word add-ins can read and modify document elements such as paragraphs, text ranges, tables, and content controls. The specific functionality depends on the add-in's implementation and supported API requirements."
      },
      {
        id: "faq-w-4",
        question: "Can Word add-ins connect with external applications and APIs?",
        answer: "Yes. Word add-ins can connect with external services through supported APIs and authentication methods. This allows them to retrieve business information, populate documents, and support workflows involving CRM platforms, databases, and other applications."
      },
      {
        id: "faq-w-5",
        question: "Are custom Word add-ins compatible with Windows and Mac?",
        answer: "Word add-ins can support Word on Windows, Mac, the web, and iPad. However, API availability and functionality can vary between platforms and Word versions, so compatibility testing is important."
      },
      {
        id: "faq-w-6",
        question: "Can Word add-ins automate document templates and formatting?",
        answer: "Yes. Add-ins can work with document templates, insert predefined content, populate fields, and apply supported formatting operations. This is useful for standardized reports, business documents, contracts, and other recurring documentation."
      },
      {
        id: "faq-w-7",
        question: "Can custom Word add-ins be deployed across an organization?",
        answer: "Yes. Organizations can distribute supported add-ins through Microsoft 365 centralized deployment, an organizational add-in catalog, or other supported publishing methods. Deployment requirements depend on the organization's Microsoft 365 environment and administration settings."
      },
      {
        id: "faq-w-8",
        question: "How do you ensure Word add-ins are secure and reliable?",
        answer: "We follow appropriate permission configurations, secure API integrations, HTTPS hosting, and functionality testing. We also consider document access requirements, platform compatibility, error handling, and performance during development and deployment."
      }
    ]
  },
  // Section 06: Final CTA
  cta: {
    heading: "Make Microsoft Word Work Better for Your Business",
    description: "Extend Microsoft Word with custom functionality designed around your document workflows and business operations. From document automation and interactive task panes to custom ribbon commands and external system integrations, let's develop a Word add-in that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};