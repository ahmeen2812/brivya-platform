import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const SHEETS_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Google Sheets Add-on Development | Apps Script & APIs | Brivya Solutions",
    description: "Extend Google Sheets with custom add-on development. Automate spreadsheet workflows, custom formulas, interactive sidebars, and external API integrations.",
  },
  hero: {
    serviceTitle: "Google Add-ons Development",
    heading: "Extend Google Sheets With Custom Add-on Development",
    description: "Improve spreadsheet workflows with custom Google Sheets add-ons designed around your business requirements. We develop add-ons that automate data processing, introduce custom functions, connect external applications, and provide interactive tools directly within Google Sheets. From spreadsheet automation and reporting to API integrations and custom data management, our solutions make everyday spreadsheet operations more efficient.",
    imagePath: "/images/services/google-addons/sheets-hero-illustration.png",
    imageAlt: "Google Sheets Custom Add-on Interface and Calculation Engine Illustration",
  },
  heroDirective: {
    tag: "Spreadsheet Automation Directive",
    heading: "Custom Google Sheets Add-ons Built Around Your Data Workflows",
    paragraph: "Businesses use Google Sheets to manage records, analyze information, prepare reports, and organize daily operations. We develop custom add-ons using Google Apps Script and Google Sheets APIs to extend spreadsheet functionality and connect workbooks with external services. From custom formulas and automated data processing to interactive sidebars and business application integrations, our solutions are designed around your specific requirements, with a focus on usability, reliable data handling, and efficient workflows."
  },
  verticalSplitSection: {
    tag: "Custom Interface & Functions",
    heading: "Interactive Sidebars & Custom Spreadsheet Formulas",
    description: "Extend spreadsheet capabilities with custom menus, dialogs, and Apps Script calculation functions embedded directly into Google Sheets.",
    keyFeatures: [
      {
        title: "Custom Sidebar & Menu Development",
        description: "Extend Google Sheets with interactive sidebars, custom menus, and dialog interfaces. We develop tools for data management, reporting, information retrieval, and spreadsheet operations that users can access directly within their workbooks."
      },
      {
        title: "Custom Functions & Spreadsheet Formulas",
        description: "Expand built-in spreadsheet functionality with custom formulas developed using Google Apps Script. We create specialized functions for calculations, data transformation, information processing, and other business-specific requirements."
      }
    ],
    imagePath: "/images/services/google-addons/sheets-sidebar-mockup.png",
    imageAlt: "Google Sheets Custom Task Pane and Sidebar Functions Mockup",
  },
  fullWidthBanner: {
    tag: "Google Workspace Ecosystem",
    heading: "Cloud-Native Spreadsheet Automation & Real-Time Collaboration",
    description: "Harness Google Apps Script and Google Sheets API to automate data pipelines, connect enterprise backends, and synchronize records across collaborative workbooks."
  },
  fourPartMosaic: {
    block1: {
      title: "Spreadsheet Automation & Data Processing",
      description: "Automate repetitive spreadsheet activities through custom scripts and event-based workflows. We develop solutions for organizing records, updating cells, applying formatting, managing data validation, and processing spreadsheet information."
    },
    icon1: {
      imagePath: "/images/services/google-addons/sheets-automation-icon.png",
      imageAlt: "Spreadsheet Data Automation Icon"
    },
    block2: {
      title: "API & Third-Party Application Integration",
      description: "Connect Google Sheets with external services and business applications through supported APIs. We integrate CRM platforms, databases, marketing tools, and other systems to retrieve information, synchronize records, and support automated data exchange."
    },
    icon2: {
      imagePath: "/images/services/google-addons/sheets-api-icon.png",
      imageAlt: "Sheets Cloud API Integration Icon"
    }
  },
  panoramicShowcase: {
    tag: "Enterprise Workspace Integration",
    heading: "Connected Cloud Worksheets Across the Enterprise",
    description: "Deploy automated reporting and synchronized data sheets across your entire organization via Google Workspace Marketplace.",
    imagePath: "/images/services/google-addons/sheets-panoramic-showcase.png",
    imageAlt: "Google Sheets Add-on running in browser interface with automated data feeds",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Reporting & Data Management Tools",
      description: "Simplify how your business organizes and presents spreadsheet information. We develop custom tools for generating reports, managing tables, preparing summaries, organizing datasets, and creating structured data outputs."
    },
    {
      index: "02",
      title: "Add-on Testing, Publishing & Maintenance",
      description: "Prepare Google Sheets add-ons for reliable use and distribution. We handle functionality testing, OAuth permissions, deployment configuration, Google Workspace Marketplace publishing requirements, and ongoing improvements."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google Sheets Development Documentation",
    description: "Official developer guides, API specifications, and custom formula documentation from Google.",
    items: [
      {
        id: "res-sheets-dev",
        title: "Google Sheets Add-on Development",
        description: "Explore custom menus, sidebars, functions, and spreadsheet automation.",
        url: "https://developers.google.com/workspace/add-ons/editors/sheets",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/sheets-badge-01.png",
        badgeImageAlt: "Google Sheets Add-on Development Guide Badge"
      },
      {
        id: "res-apps-script-sheets",
        title: "Google Apps Script for Sheets",
        description: "Learn how to automate spreadsheet operations and manage workbook data.",
        url: "https://developers.google.com/apps-script/guides/sheets",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/sheets-badge-02.png",
        badgeImageAlt: "Google Apps Script for Sheets Documentation Badge"
      },
      {
        id: "res-sheets-api",
        title: "Google Sheets API",
        description: "Explore programmatic spreadsheet access, updates, formatting, and data management.",
        url: "https://developers.google.com/workspace/sheets/api",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/sheets-badge-03.png",
        badgeImageAlt: "Google Sheets REST API Reference Badge"
      },
      {
        id: "res-sheets-functions",
        title: "Custom Functions in Google Sheets",
        description: "Learn how to create custom spreadsheet formulas using Apps Script.",
        url: "https://developers.google.com/apps-script/guides/sheets/functions",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/sheets-badge-04.png",
        badgeImageAlt: "Custom Functions in Sheets Reference Badge"
      },
      {
        id: "res-marketplace-publish",
        title: "Google Workspace Marketplace Publishing",
        description: "Explore add-on distribution, publishing requirements, and marketplace configuration.",
        url: "https://developers.google.com/workspace/marketplace/how-to-publish",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/sheets-badge-05.png",
        badgeImageAlt: "Google Workspace Marketplace Publishing Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Google Sheets Add-on Development",
    items: [
      {
        id: "faq-gs-1",
        question: "What is Google Sheets add-on development?",
        answer: "Google Sheets add-on development involves creating custom extensions that expand spreadsheet functionality. These add-ons can provide interactive sidebars, custom menus, spreadsheet formulas, automated workflows, and integrations with external applications."
      },
      {
        id: "faq-gs-2",
        question: "What can a custom Google Sheets add-on do?",
        answer: "A custom add-on can automate data processing, create custom formulas, generate reports, manage spreadsheet content, retrieve external information, and provide interactive tools within Google Sheets. Its capabilities depend on the selected architecture and implementation requirements."
      },
      {
        id: "faq-gs-3",
        question: "Can Google Sheets add-ons connect with external applications and APIs?",
        answer: "Yes. Add-ons can connect with external services through APIs and supported authorization methods. This allows businesses to retrieve information, synchronize spreadsheet records, and integrate Google Sheets with CRM platforms, databases, and other applications."
      },
      {
        id: "faq-gs-4",
        question: "Can you create custom formulas for Google Sheets?",
        answer: "Yes. Google Apps Script supports custom functions that users can call directly from spreadsheet cells. These functions can perform specialized calculations and data transformations within the limits of supported Apps Script services and execution requirements."
      },
      {
        id: "faq-gs-5",
        question: "Can a Google Sheets add-on automate repetitive spreadsheet tasks?",
        answer: "Yes. Add-ons can automate activities such as updating records, processing data, applying formatting, generating reports, and responding to supported spreadsheet events through Apps Script triggers and workflows."
      },
      {
        id: "faq-gs-6",
        question: "Can Google Sheets add-ons manage large datasets?",
        answer: "Yes, within the limitations of Google Sheets and Apps Script. Performance can be improved through batch processing, efficient data operations, and suitable caching. For very large datasets or high-frequency workloads, integrating a dedicated database or BigQuery may be more appropriate."
      },
      {
        id: "faq-gs-7",
        question: "Can Google Sheets add-ons be published for other users?",
        answer: "Yes. Add-ons can be distributed privately within an organization or published through the Google Workspace Marketplace, subject to Google's publishing and verification requirements. OAuth scopes and user authorization must be configured appropriately."
      },
      {
        id: "faq-gs-8",
        question: "Do Google Sheets add-ons work on mobile devices?",
        answer: "Google Sheets Editor add-ons built with Apps Script are supported in desktop clients rather than Android and iOS applications. If mobile access is essential, the solution architecture should be evaluated before development."
      }
    ]
  },
  cta: {
    heading: "Make Google Sheets Work Smarter for Your Business",
    description: "Extend Google Sheets with custom functionality designed around your spreadsheet workflows and business operations. From data automation and custom formulas to interactive tools, reporting solutions, and external application integrations, let's develop a Google Sheets add-on that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};