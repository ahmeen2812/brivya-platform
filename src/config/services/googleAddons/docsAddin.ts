import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const DOCS_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Google Docs Add-on Development | Document Automation | Brivya Solutions",
    description: "Extend Google Docs with custom add-on development. Automate document generation, formatting, template management, and enterprise API integrations.",
  },
  hero: {
    serviceTitle: "Google Add-ons Development",
    heading: "Extend Google Docs With Custom Add-on Development",
    description: "Improve document workflows with custom Google Docs add-ons designed around your business requirements. We develop add-ons that automate document creation, manage content, simplify formatting, and connect external applications with Google Docs. From interactive editing tools and document templates to custom workflows and API integrations, our solutions make everyday document operations more efficient.",
    imagePath: "/images/services/google-addons/docs-hero-illustration.png",
    imageAlt: "Google Docs Custom Add-on Interface and Document Automation Illustration",
  },
  heroDirective: {
    tag: "Document Automation Directive",
    heading: "Custom Google Docs Add-ons Built Around Your Document Workflows",
    paragraph: "Businesses use Google Docs to prepare reports, create documents, manage content, and collaborate on business information. We develop custom add-ons using Google Apps Script and Google Docs APIs to extend document functionality and connect workflows with external services. From automating document editing and formatting to managing templates, retrieving information, and integrating business applications, our solutions are designed around your specific requirements, with a focus on usability, reliable document handling, and efficient workflows."
  },
  verticalSplitSection: {
    tag: "Sidebars & Document Creation",
    heading: "Interactive Sidebars & Automated Document Generation",
    description: "Streamline reporting, contract drafting, and structured documentation directly inside Google Docs.",
    keyFeatures: [
      {
        title: "Custom Sidebar & Menu Development",
        description: "Extend Google Docs with interactive sidebars, custom menus, and dialog interfaces. We develop tools for document management, content generation, formatting, information retrieval, and other document-related business operations."
      },
      {
        title: "Document Creation & Automation",
        description: "Simplify repetitive document creation through custom automation workflows. We develop solutions that generate documents, insert predefined content, replace text, populate document fields, and organize information using business-specific templates."
      }
    ],
    imagePath: "/images/services/google-addons/docs-sidebar-mockup.png",
    imageAlt: "Google Docs Sidebar and Document Creation Interface Mockup",
  },
  fullWidthBanner: {
    tag: "Docs API Engine",
    heading: "Programmatic Formatting & Enterprise Content Assembly",
    description: "Leverage Google Docs APIs and batch update requests to manipulate paragraphs, tables, images, and text styles with zero manual formatting overhead."
  },
  fourPartMosaic: {
    block1: {
      title: "Document Editing & Formatting Automation",
      description: "Automate document editing and formatting tasks using Google Docs functionality. We develop tools that manage paragraphs, tables, headings, images, text styles, and other supported document elements to maintain consistent document structures."
    },
    icon1: {
      imagePath: "/images/services/google-addons/docs-formatting-icon.png",
      imageAlt: "Document Styling and Formatting Automation Icon"
    },
    block2: {
      title: "API & Third-Party Application Integration",
      description: "Connect Google Docs with external applications and business data sources through supported APIs. We integrate CRM platforms, databases, Google Workspace services, and other systems to retrieve information and support connected document workflows."
    },
    icon2: {
      imagePath: "/images/services/google-addons/docs-api-icon.png",
      imageAlt: "Google Docs API Integration Icon"
    }
  },
  panoramicShowcase: {
    tag: "Template Governance",
    heading: "Standardized Corporate Document Libraries Across Organizations",
    description: "Distribute approved document templates, dynamic boilerplate text, and automated contract tools seamlessly across your organization.",
    imagePath: "/images/services/google-addons/docs-panoramic-showcase.png",
    imageAlt: "Google Docs Add-on Document Management Architecture Showcase",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Document Templates & Content Management",
      description: "Make reusable business documents easier to create and manage. We develop add-ons that work with predefined templates, insert approved content, populate document information, and support standardized reports, proposals, and business documents."
    },
    {
      index: "02",
      title: "Add-on Testing, Publishing & Maintenance",
      description: "Prepare Google Docs add-ons for reliable use and distribution. We handle functionality testing, OAuth permissions, deployment configuration, Google Workspace Marketplace publishing requirements, and ongoing improvements."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google Docs Development Documentation",
    description: "Official developer resources, document manipulation APIs, and user interface guides from Google.",
    items: [
      {
        id: "res-docs-dev",
        title: "Google Docs Add-on Development",
        description: "Explore document editing, custom interfaces, and add-on functionality.",
        url: "https://developers.google.com/workspace/add-ons/editors/docs",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/docs-badge-01.png",
        badgeImageAlt: "Google Docs Add-on Documentation Badge"
      },
      {
        id: "res-apps-script-docs",
        title: "Google Apps Script for Google Docs",
        description: "Learn how to create, modify, and automate Google Docs documents.",
        url: "https://developers.google.com/apps-script/guides/docs",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/docs-badge-02.png",
        badgeImageAlt: "Google Apps Script for Docs Guide Badge"
      },
      {
        id: "res-docs-api",
        title: "Google Docs API",
        description: "Explore programmatic document creation, editing, formatting, and content management.",
        url: "https://developers.google.com/workspace/docs/api",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/docs-badge-03.png",
        badgeImageAlt: "Google Docs API Documentation Badge"
      },
      {
        id: "res-custom-dialogs",
        title: "Custom Dialogs & Sidebars",
        description: "Understand interactive interfaces and custom document tools.",
        url: "https://developers.google.com/apps-script/guides/dialogs",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/docs-badge-04.png",
        badgeImageAlt: "Custom Dialogs and Sidebars Badge"
      },
      {
        id: "res-marketplace-publish",
        title: "Google Workspace Marketplace Publishing",
        description: "Explore add-on distribution, authorization, and publishing requirements.",
        url: "https://developers.google.com/workspace/marketplace/how-to-publish",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/docs-badge-05.png",
        badgeImageAlt: "Marketplace Publishing Documentation Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Google Docs Add-on Development",
    items: [
      {
        id: "faq-gd-1",
        question: "What is Google Docs add-on development?",
        answer: "Google Docs add-on development involves creating custom extensions that expand document functionality. These add-ons can provide interactive sidebars, custom menus, document automation, formatting tools, and integrations with external applications using Google Apps Script and Google Workspace APIs."
      },
      {
        id: "faq-gd-2",
        question: "What can a custom Google Docs add-on do?",
        answer: "A custom add-on can automate document creation, insert predefined content, manage formatting, replace text, organize document elements, retrieve external information, and provide interactive tools within Google Docs. Its capabilities depend on the selected architecture and implementation requirements."
      },
      {
        id: "faq-gd-3",
        question: "Can Google Docs add-ons automate document creation?",
        answer: "Yes. Add-ons can create and modify documents, populate templates, insert text, manage tables, and apply formatting through supported Apps Script services and Google Docs APIs."
      },
      {
        id: "faq-gd-4",
        question: "Can Google Docs add-ons connect with external applications and APIs?",
        answer: "Yes. Add-ons can connect with external services through APIs and supported authorization methods. This allows businesses to retrieve information, populate documents, and integrate Google Docs with CRM platforms, databases, and other applications."
      },
      {
        id: "faq-gd-5",
        question: "Can you create custom document templates and formatting tools?",
        answer: "Yes. Custom solutions can work with predefined templates, insert approved content, populate document fields, and apply consistent formatting. These features can support recurring reports, proposals, contracts, and other business documents."
      },
      {
        id: "faq-gd-6",
        question: "Can Google Docs add-ons work with large documents?",
        answer: "Yes, within the limitations of Google Docs and the selected Apps Script or API architecture. Performance depends on document complexity, the number of operations, execution quotas, and API usage. Efficient document processing and batch updates can help manage larger workloads."
      },
      {
        id: "faq-gd-7",
        question: "Can Google Docs add-ons be published for other users?",
        answer: "Yes. Add-ons can be distributed privately within an organization or published through the Google Workspace Marketplace, subject to Google's publishing, authorization, and verification requirements."
      },
      {
        id: "faq-gd-8",
        question: "Do Google Docs add-ons work on mobile devices?",
        answer: "Google Docs Editor add-ons built with Apps Script are supported in desktop clients rather than Android and iOS applications. If mobile access is important, the application architecture and alternative integration options should be evaluated before development."
      }
    ]
  },
  cta: {
    heading: "Make Google Docs Work Smarter for Your Business",
    description: "Extend Google Docs with custom functionality designed around your document workflows and business operations. From document automation and formatting tools to interactive sidebars, reusable templates, and external application integrations, let's develop a Google Docs add-on that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};