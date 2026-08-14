import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const POWERPOINT_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "PowerPoint Add-in Development | Slide Automation | Brivya Solutions",
    description: "Extend Microsoft PowerPoint with custom add-in development. Automate slide creation, manage slide libraries, format presentation elements, and connect external data.",
  },
  hero: {
    serviceTitle: "Office Add-in Development",
    heading: "Extend Microsoft PowerPoint With Custom Add-in Development",
    description: "Enhance presentation workflows and expand Microsoft PowerPoint functionality with custom add-ins designed around your business requirements. We develop PowerPoint add-ins that automate slide creation, manage presentation content, integrate external data, and introduce interactive tools directly into PowerPoint. From presentation formatting and content management to custom design tools, our solutions make presentation work more efficient.",
    imagePath: "/images/services/office-addins/powerpoint-hero-illustration.png",
    imageAlt: "Microsoft PowerPoint Add-in Interface and Slide Automation Illustration",
  },
  heroDirective: {
    tag: "Presentation Directive",
    heading: "Custom PowerPoint Add-ins Built Around Your Presentation Workflows",
    paragraph: "We develop custom Microsoft PowerPoint add-ins to simplify presentation creation, automate repetitive slide tasks, and improve content management. Using Office JavaScript APIs and modern web technologies, we build solutions that automate slide creation, manage presentation elements, provide custom design tools, and integrate PowerPoint with external applications and business data sources. Our add-ins are tailored to specific business requirements, focusing on practical functionality, consistent formatting, user-friendly interfaces, improved productivity, and compatibility with supported PowerPoint environments."
  },
  verticalSplitSection: {
    tag: "Task Pane & Slide Automation",
    heading: "Interactive Task Panes & Automated Slide Generation",
    description: "Extend presentation workflows with custom slide builders, asset insertion tools, and layout automation engines.",
    keyFeatures: [
      {
        title: "Custom PowerPoint Task Pane Add-ins",
        description: "Extend PowerPoint with interactive task panes that provide additional tools directly inside the application. We develop custom interfaces for presentation management, content retrieval, slide generation, design assistance, and other presentation-related workflows."
      },
      {
        title: "Slide Creation & Presentation Automation",
        description: "Simplify repetitive presentation tasks through custom automation features. We develop add-ins that insert slides, create text boxes and shapes, organize presentation content, and automate defined slide management operations."
      }
    ],
    imagePath: "/images/services/office-addins/powerpoint-taskpane-mockup.png",
    imageAlt: "PowerPoint Custom Task Pane Interface and Slide Automation Mockup",
  },
  fullWidthBanner: {
    tag: "PowerPoint.js Architecture",
    heading: "Cross-Platform Presentation Engineering",
    description: "Build on modern Office.js APIs to interact with slides, shapes, text boxes, and slide libraries across Windows, Mac, and PowerPoint on the web."
  },
  fourPartMosaic: {
    block1: {
      title: "Custom Slide Formatting & Design Tools",
      description: "Make presentation formatting easier with custom tools for managing slide elements. We develop functionality for creating, positioning, resizing, grouping, and formatting shapes, text boxes, and other supported presentation objects."
    },
    icon1: {
      imagePath: "/images/services/office-addins/powerpoint-formatting-icon.png",
      imageAlt: "Slide Formatting and Design Tools Icon"
    },
    block2: {
      title: "PowerPoint API & Business System Integration",
      description: "Connect PowerPoint with external applications and business data sources. We integrate supported APIs and services to retrieve information, populate presentation content, and support workflows involving CRM systems, databases, and other business applications."
    },
    icon2: {
      imagePath: "/images/services/office-addins/powerpoint-api-icon.png",
      imageAlt: "PowerPoint Business API Integration Icon"
    }
  },
  panoramicShowcase: {
    tag: "Slide Library Architecture",
    heading: "Centralized Slide Libraries & Corporate Branding Systems",
    description: "Allow teams across your organization to access approved slide decks, templates, and corporate assets directly inside PowerPoint.",
    imagePath: "/images/services/office-addins/powerpoint-panoramic-showcase.png",
    imageAlt: "PowerPoint Add-in running across Windows desktop, Mac, and PowerPoint Online",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Slide Libraries & Content Management",
      description: "Simplify the reuse of approved presentation content across business teams. We develop add-ins that allow users to retrieve and insert selected slides from maintained presentation libraries while managing source formatting and destination themes."
    },
    {
      index: "02",
      title: "PowerPoint Add-in Testing & Deployment",
      description: "Prepare PowerPoint add-ins for reliable use across supported environments. We handle functionality testing, API compatibility checks, manifest configuration, permission settings, and deployment through supported Microsoft 365 distribution methods."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Microsoft PowerPoint Add-in Development Documentation",
    description: "Official developer resources, presentation automation guides, and shape manipulation API references from Microsoft.",
    items: [
      {
        id: "res-ppt-docs",
        title: "Microsoft PowerPoint Add-ins",
        description: "Explore add-in development, presentation automation, testing, and deployment.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/powerpoint/",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/powerpoint-badge-01.png",
        badgeImageAlt: "Microsoft PowerPoint Add-ins Documentation Badge"
      },
      {
        id: "res-ppt-api",
        title: "PowerPoint JavaScript API Reference",
        description: "Learn how to interact with presentations, slides, shapes, and presentation elements.",
        url: "https://learn.microsoft.com/en-us/javascript/api/powerpoint?view=powerpoint-js-preview",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/powerpoint-badge-02.png",
        badgeImageAlt: "PowerPoint JavaScript API Reference Badge"
      },
      {
        id: "res-ppt-shapes",
        title: "Create & Format Shapes in PowerPoint",
        description: "Explore shape creation, positioning, resizing, grouping, and formatting.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/powerpoint/shapes",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/powerpoint-badge-03.png",
        badgeImageAlt: "PowerPoint Shapes and Elements Documentation Badge"
      },
      {
        id: "res-ppt-insert-slides",
        title: "Insert Slides Into Presentations",
        description: "Learn how to reuse slides from other PowerPoint presentations.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/powerpoint/insert-slides-into-presentation",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/powerpoint-badge-04.png",
        badgeImageAlt: "Slide Library Insertion Documentation Badge"
      },
      {
        id: "res-office-deployment",
        title: "Office Add-in Deployment",
        description: "Explore testing, publishing, and organizational distribution methods.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/publish/publish",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/powerpoint-badge-05.png",
        badgeImageAlt: "Office Add-in Deployment and Publishing Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About PowerPoint Add-in Development",
    items: [
      {
        id: "faq-p-1",
        question: "What is PowerPoint add-in development?",
        answer: "PowerPoint add-in development involves creating custom extensions that expand Microsoft PowerPoint functionality. These add-ins can provide interactive task panes, custom ribbon commands, presentation automation, slide management, and integrations with external applications using web technologies and Office JavaScript APIs."
      },
      {
        id: "faq-p-2",
        question: "What can a custom PowerPoint add-in do?",
        answer: "A custom PowerPoint add-in can automate slide creation, insert presentation content, manage shapes, format text, reuse slides, retrieve external information, and provide specialized tools within PowerPoint. Its capabilities depend on available APIs and implementation requirements."
      },
      {
        id: "faq-p-3",
        question: "Can PowerPoint add-ins automatically create slides?",
        answer: "Yes. Supported PowerPoint JavaScript APIs allow add-ins to create presentations, add slides, insert content, and manage presentation elements. More advanced automation can combine these capabilities with external data and business-specific workflows."
      },
      {
        id: "faq-p-4",
        question: "Can PowerPoint add-ins connect with external applications and APIs?",
        answer: "Yes. PowerPoint add-ins can connect with external services through supported APIs and authentication methods. This allows them to retrieve business information, populate presentation content, and support workflows involving databases, CRM platforms, and other applications."
      },
      {
        id: "faq-p-5",
        question: "Can a PowerPoint add-in reuse slides from existing presentations?",
        answer: "Yes. Supported PowerPoint APIs allow add-ins to insert selected slides from another presentation. They can also control whether inserted slides retain their original formatting or adopt the destination presentation's theme."
      },
      {
        id: "faq-p-6",
        question: "Are custom PowerPoint add-ins compatible with Windows, Mac, and PowerPoint Online?",
        answer: "PowerPoint add-ins support Windows, Mac, and the web, with availability depending on the Office version and API requirement set. Individual API features may have different platform requirements, so compatibility testing is important."
      },
      {
        id: "faq-p-7",
        question: "Can PowerPoint add-ins be deployed across an organization?",
        answer: "Yes. Organizations can distribute supported add-ins through Microsoft 365 centralized deployment, Microsoft Marketplace, and other supported publishing methods. Deployment requirements depend on the organization's Microsoft 365 environment and administration settings."
      },
      {
        id: "faq-p-8",
        question: "How do you ensure PowerPoint add-ins are secure and reliable?",
        answer: "We use appropriate permission configurations, secure API integrations, HTTPS hosting, and functionality testing. We also consider presentation access requirements, platform compatibility, error handling, and performance during development and deployment."
      }
    ]
  },
  cta: {
    heading: "Make Microsoft PowerPoint Work Smarter for Your Business",
    description: "Extend Microsoft PowerPoint with custom functionality designed around your presentation workflows and business operations. From slide automation and custom formatting tools to reusable slide libraries and external system integrations, let's develop a PowerPoint add-in that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};