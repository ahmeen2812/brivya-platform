import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const DRIVE_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Google Drive Workflow Extensions | Cloud File Automation | Brivya Solutions",
    description: "Improve file management and automate document workflows with custom Google Drive extensions. Folder automation, permission audits, and enterprise API integrations.",
  },
  hero: {
    serviceTitle: "Google Add-ons Development",
    heading: "Extend Google Drive With Custom Workflow Extensions",
    description: "Improve file management and streamline document workflows with custom Google Drive extensions designed around your business requirements. We develop solutions that automate file organization, manage folder structures, control document access, and connect Drive with external applications. From file processing and sharing workflows to custom interfaces and API integrations, our solutions make everyday Drive operations more efficient.",
    imagePath: "/images/services/google-addons/drive-hero-illustration.png",
    imageAlt: "Google Drive Workflow Extensions and File Management Illustration",
  },
  heroDirective: {
    tag: "File Lifecycle Directive",
    heading: "Custom Google Drive Extensions Built Around Your File Management Workflows",
    paragraph: "Businesses use Google Drive to store documents, organize files, collaborate with teams, and manage business information. We develop custom Drive extensions using Google Apps Script and Google Drive APIs to automate file operations and connect workflows with external services. From managing folders and sharing permissions to processing documents, monitoring file changes, and integrating business applications, our solutions are designed around your specific requirements, with a focus on organized file management, secure access, and efficient workflows."
  },
  verticalSplitSection: {
    tag: "Contextual Drive Tools",
    heading: "Custom Drive Add-ons & Automated File Lifecycle Management",
    description: "Automate repetitive folder creation, batch file organization, and document processing directly inside Google Drive.",
    keyFeatures: [
      {
        title: "Custom Google Drive Add-on Development",
        description: "Extend Google Drive with contextual interfaces and custom tools that work within the Drive environment. We develop add-ons that provide file-related information, automate selected operations, and connect users with external business services through supported interfaces."
      },
      {
        title: "File & Folder Management Automation",
        description: "Simplify repetitive file organization tasks through custom automation workflows. We develop solutions for creating folders, moving files, renaming documents, organizing folder structures, and managing file information using supported Google Drive services."
      }
    ],
    imagePath: "/images/services/google-addons/drive-sidebar-mockup.png",
    imageAlt: "Google Drive Contextual Interface and File Automation Mockup",
  },
  fullWidthBanner: {
    tag: "Push Notifications & Webhooks",
    heading: "Automated Triggers on File Uploads & Document Changes",
    description: "Monitor monitored folders and file changes in real time through Google Drive API push notifications and automated HTTPS webhooks."
  },
  fourPartMosaic: {
    block1: {
      title: "File Sharing & Permission Management",
      description: "Manage document access through automated sharing and permission workflows. We develop tools that configure supported access roles, manage sharing permissions, and coordinate file access according to your organization's requirements and authorization rules."
    },
    icon1: {
      imagePath: "/images/services/google-addons/drive-sharing-icon.png",
      imageAlt: "Access Control and Permission Management Icon"
    },
    block2: {
      title: "Document Processing & Workflow Automation",
      description: "Automate activities involving documents stored in Google Drive. We develop workflows that process uploaded files, organize document information, generate related records, and trigger follow-up actions through connected applications and supported automation mechanisms."
    },
    icon2: {
      imagePath: "/images/services/google-addons/drive-api-icon.png",
      imageAlt: "Document Processing and External Automation Icon"
    }
  },
  panoramicShowcase: {
    tag: "Shared Drive Architecture",
    heading: "Enterprise Shared Drive Governance & Audit Solutions",
    description: "Centralize organizational file storage with automated permission audits, folder structure enforcement, and cloud storage compliance.",
    imagePath: "/images/services/google-addons/drive-panoramic-showcase.png",
    imageAlt: "Google Drive Add-on enterprise file lifecycle and shared drive governance showcase",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Drive API & Third-Party Application Integration",
      description: "Connect Google Drive with external business applications and data sources. We integrate CRM platforms, databases, Google Workspace services, and other systems to retrieve files, upload documents, synchronize information, and support connected workflows."
    },
    {
      index: "02",
      title: "File Monitoring, Search & Activity Automation",
      description: "Make file management more organized through automated search and change monitoring. We develop solutions that locate files using metadata, monitor supported file changes through API notifications, and trigger defined workflows when relevant updates occur."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google Drive Extension & API Documentation",
    description: "Official developer guides, Drive REST API references, and push notification guides from Google.",
    items: [
      {
        id: "res-drive-dev",
        title: "Google Drive Add-on Development",
        description: "Explore contextual interfaces, custom cards, and Drive add-on development.",
        url: "https://developers.google.com/workspace/add-ons/drive",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/drive-badge-01.png",
        badgeImageAlt: "Google Drive Add-on Development Guide Badge"
      },
      {
        id: "res-drive-api",
        title: "Google Drive API",
        description: "Understand file management, sharing, integrations, and application connectivity.",
        url: "https://developers.google.com/workspace/drive/api/guides/about-sdk",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/drive-badge-02.png",
        badgeImageAlt: "Google Drive API Documentation Badge"
      },
      {
        id: "res-apps-script-drive",
        title: "Google Apps Script Drive Service",
        description: "Learn how to create, search, organize, and manage Drive files and folders.",
        url: "https://developers.google.com/apps-script/reference/drive",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/drive-badge-03.png",
        badgeImageAlt: "Apps Script Drive Service Reference Badge"
      },
      {
        id: "res-drive-ui",
        title: "Google Drive UI Integration",
        description: "Explore custom application integration through Drive's New and Open with options.",
        url: "https://developers.google.com/workspace/drive/api/guides/about-apps",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/drive-badge-04.png",
        badgeImageAlt: "Drive UI Integration Guide Badge"
      },
      {
        id: "res-drive-push",
        title: "Google Drive Push Notifications",
        description: "Understand file change notifications and webhook-based workflow triggers.",
        url: "https://developers.google.com/workspace/drive/api/guides/push",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/drive-badge-05.png",
        badgeImageAlt: "Drive Push Notifications Webhook Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Google Drive Workflow Extensions",
    items: [
      {
        id: "faq-gdr-1",
        question: "What are Google Drive workflow extensions?",
        answer: "Google Drive workflow extensions are custom applications and add-ons that expand Drive functionality and automate file-related operations. They can provide contextual interfaces, manage files and folders, configure sharing permissions, and connect Drive with external business applications."
      },
      {
        id: "faq-gdr-2",
        question: "What can a custom Google Drive extension do?",
        answer: "A custom extension can organize files, create folders, manage document permissions, search file information, process documents, and automate selected workflows. Its capabilities depend on the chosen Google Drive APIs, add-on architecture, and required permissions."
      },
      {
        id: "faq-gdr-3",
        question: "Can Google Drive extensions automatically organize files and folders?",
        answer: "Yes. Google Drive APIs and Apps Script support file creation, folder management, file updates, searching, and other operations. Custom workflows can organize documents according to predefined rules, metadata, and business requirements."
      },
      {
        id: "faq-gdr-4",
        question: "Can Google Drive extensions automate file sharing and permissions?",
        answer: "Yes. Supported APIs allow applications to manage file permissions and sharing settings. Access rules can be configured around users, groups, roles, and organizational requirements, subject to the relevant authorization permissions."
      },
      {
        id: "faq-gdr-5",
        question: "Can Google Drive integrate with CRM and other business applications?",
        answer: "Yes. Google Drive can connect with external applications through supported APIs and authentication methods. This allows businesses to retrieve documents, upload files, synchronize information, and connect document workflows with CRM platforms and databases."
      },
      {
        id: "faq-gdr-6",
        question: "Can workflows be triggered when files are uploaded or modified?",
        answer: "Yes. Google Drive API push notifications can inform applications about changes to monitored resources through HTTPS webhooks. These notifications can support workflows that respond to file or change events, with appropriate event handling and authorization."
      },
      {
        id: "faq-gdr-7",
        question: "Can Google Drive extensions work with Shared Drives?",
        answer: "Yes. The advanced Drive service and Google Drive API support Shared Drive operations, subject to the user's access permissions and appropriate configuration."
      },
      {
        id: "faq-gdr-8",
        question: "Do Google Drive add-ons work on mobile devices?",
        answer: "Google Workspace add-ons that extend the Google Drive interface are currently not supported on Drive mobile clients. If mobile access is required, a separate application or alternative integration architecture may be more suitable."
      }
    ]
  },
  cta: {
    heading: "Make Google Drive Work Smarter for Your Business",
    description: "Improve file management and connect your business operations with custom Google Drive workflow extensions. From file organization and permission management to document automation, API integrations, and file monitoring, let's develop a solution that makes your Drive environment more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};