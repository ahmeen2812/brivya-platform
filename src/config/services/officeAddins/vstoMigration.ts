import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const VSTO_MIGRATION_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "VSTO to Web Add-in Migration | Modernize Office Plugins | Brivya Solutions",
    description: "Modernize legacy VSTO and COM add-ins to cross-platform Office Web Add-ins using JavaScript, TypeScript, and Office.js across Windows, Mac, and Web.",
  },
  hero: {
    serviceTitle: "Office Add-in Development",
    heading: "Modernize Your Office Add-ins With VSTO to Web Add-in Migration",
    description: "Move your traditional Office add-ins to modern web-based solutions built with JavaScript, TypeScript, and Office.js. We help businesses migrate existing VSTO and COM add-ins to modern Office Web Add-ins while preserving essential functionality and improving compatibility across supported Microsoft Office platforms. From code assessment and API migration to interface redevelopment and deployment, our solutions are designed around your existing add-in architecture.",
    imagePath: "/images/services/office-addins/vsto-hero-illustration.png",
    imageAlt: "Legacy VSTO to Modern Office.js Migration Architecture Illustration",
  },
  heroDirective: {
    tag: "Modernization Directive",
    heading: "Modern Office Add-in Migration Built Around Your Existing Functionality",
    paragraph: "Traditional VSTO and COM add-ins are designed primarily for Windows-based Office applications, limiting their availability across other platforms. We help modernize these solutions by migrating existing functionality to web-based Office add-ins using JavaScript, TypeScript, and Office.js. Our approach focuses on analyzing legacy code, identifying reusable business logic, replacing unsupported APIs, and rebuilding interfaces around modern Office capabilities. We aim to preserve essential workflows while preparing your add-ins for supported Office environments, including Windows, Mac, and the web."
  },
  verticalSplitSection: {
    tag: "Legacy Code Assessment",
    heading: "Architecture Audit & API Compatibility Mapping",
    description: "Evaluate your existing .NET codebases, replace desktop COM dependencies with modern web APIs, and preserve mission-critical business logic.",
    keyFeatures: [
      {
        title: "VSTO & COM Add-in Assessment",
        description: "Analyze your existing Office add-in architecture before starting migration. We review source code, dependencies, custom features, Office object model usage, and third-party components to identify migration requirements and potential compatibility limitations."
      },
      {
        title: "Office.js API Migration",
        description: "Replace legacy Office automation and document interaction functionality with supported Office JavaScript APIs. We migrate suitable operations involving documents, worksheets, presentations, and Outlook items according to the target application's API capabilities."
      }
    ],
    imagePath: "/images/services/office-addins/vsto-taskpane-mockup.png",
    imageAlt: "VSTO to Web Add-in Code Modernization and Interface Mockup",
  },
  fullWidthBanner: {
    tag: "Cross-Platform Execution",
    heading: "Break Free From Windows-Only Office Dependencies",
    description: "Modern Office Web Add-ins eliminate registry installations and local runtime dependencies, running seamlessly in Office on Windows, macOS, iPad, and the web."
  },
  fourPartMosaic: {
    block1: {
      title: "User Interface & Ribbon Modernization",
      description: "Transform Windows-based add-in interfaces into modern web-based experiences. We rebuild supported custom ribbon commands, task panes, dialogs, and interactive components using HTML, CSS, JavaScript, and modern frontend technologies."
    },
    icon1: {
      imagePath: "/images/services/office-addins/vsto-ui-icon.png",
      imageAlt: "Web-Based Add-in UI Interface Icon"
    },
    block2: {
      title: "Business Logic & Code Reuse",
      description: "Identify existing business logic and reusable components that can be preserved during migration. Where technically suitable, we adapt shared libraries or expose existing functionality through backend APIs to reduce unnecessary redevelopment."
    },
    icon2: {
      imagePath: "/images/services/office-addins/vsto-api-icon.png",
      imageAlt: "Backend API and Shared Logic Icon"
    }
  },
  panoramicShowcase: {
    tag: "Coexistence & Phased Rollout",
    heading: "Side-by-Side Coexistence for Zero-Downtime Migration",
    description: "Deploy modern web add-ins alongside existing COM plugins to allow smooth employee transitions without disrupting daily operations.",
    imagePath: "/images/services/office-addins/vsto-panoramic-showcase.png",
    imageAlt: "VSTO and Web Add-in Coexistence Architecture Showcase",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Cross-Platform Compatibility & Testing",
      description: "Prepare migrated add-ins for supported Office environments across Windows, Mac, and the web. We test application functionality, API compatibility, authentication, document interactions, and platform-specific behavior to identify migration issues."
    },
    {
      index: "02",
      title: "Deployment & Migration Support",
      description: "Prepare modernized add-ins for organizational distribution and production use. We handle manifest configuration, hosting, permission settings, deployment procedures, and transition planning for existing users and Office environments."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Microsoft Office Add-in Migration Documentation",
    description: "Official migration roadmaps, architectural guides, and COM coexistence documentation from Microsoft.",
    items: [
      {
        id: "res-vsto-guide",
        title: "VSTO Add-in Developer's Migration Guide",
        description: "Follow Microsoft's guidance for transitioning existing VSTO solutions to modern Office add-ins.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/overview/learning-path-transition",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/vsto-badge-01.png",
        badgeImageAlt: "VSTO Migration Learning Path Guide Badge"
      },
      {
        id: "res-vsto-shared-lib",
        title: "Migrate VSTO Add-ins With Shared Libraries",
        description: "Learn how to preserve reusable business logic while modernizing add-in functionality.",
        url: "https://learn.microsoft.com/en-us/samples/officedev/office-add-in-samples/vsto-shared-library-excel/",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/vsto-badge-02.png",
        badgeImageAlt: "VSTO Shared Library Architecture Sample Badge"
      },
      {
        id: "res-office-platform",
        title: "Office Add-ins Platform Overview",
        description: "Understand modern Office add-in architecture, web technologies, and cross-platform support.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/vsto-badge-03.png",
        badgeImageAlt: "Modern Office Add-in Architecture Overview Badge"
      },
      {
        id: "res-vsto-com-coexist",
        title: "Make Office Add-ins Compatible With Existing COM Add-ins",
        description: "Explore how legacy Windows add-ins and modern web add-ins can coexist during migration.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/develop/make-office-add-in-compatible-with-existing-com-add-in",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/vsto-badge-04.png",
        badgeImageAlt: "COM and Web Add-in Coexistence Configuration Badge"
      },
      {
        id: "res-office-publishing",
        title: "Microsoft Office Add-in Publishing",
        description: "Explore testing, publishing, and distributing modern Office add-ins.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/publish/publish",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/vsto-badge-05.png",
        badgeImageAlt: "Microsoft Office Add-in Publishing Documentation Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About VSTO to Web Add-in Migration",
    items: [
      {
        id: "faq-v-1",
        question: "What is VSTO to Web Add-in migration?",
        answer: "VSTO to Web Add-in migration involves transitioning traditional .NET-based Office add-ins to modern web-based Office add-ins. The process replaces suitable legacy functionality with Office JavaScript APIs and web technologies such as HTML, CSS, and JavaScript."
      },
      {
        id: "faq-v-2",
        question: "Why should I migrate my VSTO add-in to a modern Office Web Add-in?",
        answer: "Traditional VSTO add-ins run in Office on Windows, while modern Office Web Add-ins support additional environments, including Office on Mac and the web. Migration can also simplify organizational distribution and introduce modern web-based interfaces."
      },
      {
        id: "faq-v-3",
        question: "Can all existing VSTO functionality be migrated to Office.js?",
        answer: "Not necessarily. Many common document and application interactions have corresponding Office.js capabilities, but some Windows-specific features, COM dependencies, and specialized APIs may not have direct equivalents. Each feature should be assessed before migration."
      },
      {
        id: "faq-v-4",
        question: "Can I reuse my existing C# and .NET code?",
        answer: "Some existing business logic can be preserved, depending on its dependencies and architecture. Microsoft documents approaches for sharing business logic through libraries and backend APIs. However, user interface code and Office document interaction code generally require redevelopment using web technologies and Office.js."
      },
      {
        id: "faq-v-5",
        question: "Which Microsoft Office applications support modern Web Add-ins?",
        answer: "Modern Office add-ins support Word, Excel, PowerPoint, Outlook, and other supported Microsoft Office applications. Individual application features and API capabilities vary according to platform and Office version."
      },
      {
        id: "faq-v-6",
        question: "Will my migrated add-in work on Windows, Mac, and Office Online?",
        answer: "It can, provided the required APIs and features are supported in the target environments. Compatibility depends on the add-in's functionality, API requirement sets, authentication methods, and platform-specific limitations."
      },
      {
        id: "faq-v-7",
        question: "Can my existing VSTO add-in continue working during migration?",
        answer: "Yes. In supported Windows environments, an existing VSTO or COM add-in can coexist with a functionally equivalent web add-in using Microsoft's compatibility mechanisms. This can help organizations plan a gradual transition. The appropriate approach depends on the Office application and deployment requirements."
      },
      {
        id: "faq-v-8",
        question: "How do you ensure a successful add-in migration?",
        answer: "We begin with a technical assessment, map existing features to available Office.js APIs, identify reusable code, and rebuild unsupported interfaces. We then conduct functionality and compatibility testing before preparing the modern add-in for deployment."
      }
    ]
  },
  cta: {
    heading: "Modernize Your Office Add-ins for the Future",
    description: "Move beyond traditional Windows-dependent add-in architecture with modern Office Web Add-ins. From VSTO assessment and Office.js migration to interface redevelopment, cross-platform testing, and deployment, let's modernize your existing solution while preserving the functionality your business depends on.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};