import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const SLIDES_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Google Slides Add-on Development | Slide Automation | Brivya Solutions",
    description: "Extend Google Slides with custom add-on development. Automate slide deck creation, formatting, template asset libraries, and external API integrations.",
  },
  hero: {
    serviceTitle: "Google Add-ons Development",
    heading: "Extend Google Slides With Custom Add-on Development",
    description: "Improve presentation workflows with custom Google Slides add-ons designed around your business requirements. We develop add-ons that automate slide creation, manage presentation content, simplify formatting, and connect external applications. From interactive presentation tools and reusable templates to content automation and API integrations, our solutions make presentation management more efficient.",
    imagePath: "/images/services/google-addons/slides-hero-illustration.png",
    imageAlt: "Google Slides Custom Add-on Interface and Presentation Automation Illustration",
  },
  heroDirective: {
    tag: "Presentation Workflow Directive",
    heading: "Custom Google Slides Add-ons Built Around Your Presentation Workflows",
    paragraph: "Businesses use Google Slides to create presentations, prepare reports, and communicate important information. We develop custom add-ons using Google Apps Script and Google Slides APIs to extend presentation functionality and connect workflows with external services. From automated slide creation and formatting to reusable content libraries, data integration, and presentation management, our solutions are designed around your specific requirements, with a focus on usability, consistent formatting, and efficient workflows."
  },
  verticalSplitSection: {
    tag: "Sidebars & Slide Automation",
    heading: "Interactive Presentation Sidebars & Automated Slide Decks",
    description: "Automate recurring slide deck generation, insert dynamic data charts, and manage corporate brand templates directly inside Google Slides.",
    keyFeatures: [
      {
        title: "Custom Sidebar & Menu Development",
        description: "Extend Google Slides with interactive sidebars, custom menus, and dialog interfaces. We develop tools for presentation management, content retrieval, slide editing, and other presentation-related business operations."
      },
      {
        title: "Slide Creation & Presentation Automation",
        description: "Simplify repetitive presentation tasks through custom automation tools. We develop solutions that create slides, insert text and images, populate presentation content, and organize slide elements using predefined structures and templates."
      }
    ],
    imagePath: "/images/services/google-addons/slides-sidebar-mockup.png",
    imageAlt: "Google Slides Custom Sidebar and Automation Interface Mockup",
  },
  fullWidthBanner: {
    tag: "Slides API Architecture",
    heading: "Programmatic Slide Formatting & Cloud Layout Engine",
    description: "Manage shapes, text styles, tables, and positioning across presentations with reliable Google Slides API batch operations and Apps Script triggers."
  },
  fourPartMosaic: {
    block1: {
      title: "Slide Formatting & Design Automation",
      description: "Maintain consistent presentation formatting through custom design and editing tools. We develop functionality for managing text styles, shapes, images, tables, layouts, and other supported slide elements according to your presentation requirements."
    },
    icon1: {
      imagePath: "/images/services/google-addons/slides-design-icon.png",
      imageAlt: "Slide Formatting and Layout Automation Icon"
    },
    block2: {
      title: "API & Third-Party Application Integration",
      description: "Connect Google Slides with external applications and business data sources through supported APIs. We integrate Google Sheets, Google Drive, CRM platforms, databases, and other services to retrieve information and support automated presentation workflows."
    },
    icon2: {
      imagePath: "/images/services/google-addons/slides-api-icon.png",
      imageAlt: "Slides Data Connectivity and API Icon"
    }
  },
  panoramicShowcase: {
    tag: "Corporate Slide Libraries",
    heading: "Centralized Slide Template Governance Across Teams",
    description: "Ensure presentation consistency across marketing, sales, and executive teams with centralized slide libraries and automated brand sync.",
    imagePath: "/images/services/google-addons/slides-panoramic-showcase.png",
    imageAlt: "Google Slides Add-on corporate asset management and slide generation showcase",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Presentation Templates & Content Libraries",
      description: "Make reusable presentation content easier to manage across your organization. We develop tools that help users access approved slide layouts, insert predefined content, reuse presentation elements, and maintain consistent branding across business presentations."
    },
    {
      index: "02",
      title: "Add-on Testing, Publishing & Maintenance",
      description: "Prepare Google Slides add-ons for reliable use and distribution. We handle functionality testing, OAuth permissions, manifest configuration, deployment, Google Workspace Marketplace publishing requirements, and ongoing improvements."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google Slides Development Documentation",
    description: "Official developer guides, Slides service references, and REST API documentation from Google.",
    items: [
      {
        id: "res-slides-dev",
        title: "Google Slides Add-on Development",
        description: "Explore custom menus, sidebars, presentation editing, and add-on functionality.",
        url: "https://developers.google.com/workspace/add-ons/editors/slides",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/slides-badge-01.png",
        badgeImageAlt: "Google Slides Add-on Development Guide Badge"
      },
      {
        id: "res-apps-script-slides",
        title: "Google Apps Script for Google Slides",
        description: "Learn how to automate slide creation, editing, formatting, and presentation management.",
        url: "https://developers.google.com/apps-script/guides/slides",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/slides-badge-02.png",
        badgeImageAlt: "Apps Script Slides Guide Badge"
      },
      {
        id: "res-slides-service",
        title: "Google Slides Service Reference",
        description: "Explore methods for managing slides, shapes, images, tables, and presentation elements.",
        url: "https://developers.google.com/apps-script/reference/slides",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/slides-badge-03.png",
        badgeImageAlt: "Google Slides Service Reference Badge"
      },
      {
        id: "res-slides-api",
        title: "Google Slides API",
        description: "Understand programmatic presentation creation, content updates, and API integrations.",
        url: "https://developers.google.com/workspace/slides/api/guides/overview",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/slides-badge-04.png",
        badgeImageAlt: "Google Slides REST API Overview Badge"
      },
      {
        id: "res-marketplace-publish",
        title: "Google Workspace Marketplace Publishing",
        description: "Explore add-on distribution, authorization, and publishing requirements.",
        url: "https://developers.google.com/workspace/marketplace/how-to-publish",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/slides-badge-05.png",
        badgeImageAlt: "Marketplace Publishing Documentation Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Google Slides Add-on Development",
    items: [
      {
        id: "faq-gsl-1",
        question: "What is Google Slides add-on development?",
        answer: "Google Slides add-on development involves creating custom extensions that expand presentation functionality. These add-ons can provide interactive sidebars, custom menus, slide automation, formatting tools, reusable content libraries, and integrations with external applications."
      },
      {
        id: "faq-gsl-2",
        question: "What can a custom Google Slides add-on do?",
        answer: "A custom add-on can automate slide creation, insert text and images, manage presentation elements, apply formatting, retrieve external information, and provide interactive tools within Google Slides. Its capabilities depend on the available APIs and implementation requirements."
      },
      {
        id: "faq-gsl-3",
        question: "Can Google Slides add-ons automatically create presentations?",
        answer: "Yes. Google Apps Script and the Google Slides API support presentation creation, slide insertion, content population, and formatting operations. These capabilities can be combined with predefined templates and external business data to generate presentations automatically."
      },
      {
        id: "faq-gsl-4",
        question: "Can Google Slides add-ons integrate with external applications?",
        answer: "Yes. Add-ons can connect with external services through APIs and supported authorization methods. This allows businesses to retrieve information from Google Sheets, databases, CRM platforms, and other applications to populate presentation content."
      },
      {
        id: "faq-gsl-5",
        question: "Can Google Slides add-ons automate slide formatting?",
        answer: "Yes. Supported APIs allow add-ons to modify text styles, shapes, images, tables, positioning, and other presentation elements. This helps businesses maintain consistent layouts and formatting across recurring presentations."
      },
      {
        id: "faq-gsl-6",
        question: "Can Google Slides add-ons work with existing presentation templates?",
        answer: "Yes. Custom solutions can use existing presentations and predefined layouts to create new slides, reuse content, and populate presentation elements. This is useful for business reports, sales presentations, proposals, and recurring reporting workflows."
      },
      {
        id: "faq-gsl-7",
        question: "Can Google Slides add-ons work on mobile devices?",
        answer: "Google Slides Editor add-ons built with Apps Script are supported in desktop clients rather than Android and iOS applications. If mobile functionality is essential, the application architecture should be evaluated before development."
      },
      {
        id: "faq-gsl-8",
        question: "Can custom Google Slides add-ons be published for other users?",
        answer: "Yes. Add-ons can be distributed privately within an organization or published through the Google Workspace Marketplace, subject to Google's authorization, verification, and publishing requirements."
      }
    ]
  },
  cta: {
    heading: "Make Google Slides Work Smarter for Your Business",
    description: "Extend Google Slides with custom functionality designed around your presentation workflows and business operations. From slide automation and formatting tools to reusable templates, interactive interfaces, and external application integrations, let's develop a Google Slides add-on that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};