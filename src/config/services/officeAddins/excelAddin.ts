import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const EXCEL_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Excel Add-in Development | Custom Functions & Automation | Brivya Solutions",
    description: "Extend Microsoft Excel with custom add-in development. Automate calculations, workbook data pipelines, custom worksheet functions, and ERP/CRM integrations.",
  },
  hero: {
    serviceTitle: "Office Add-in Development",
    heading: "Extend Microsoft Excel With Custom Add-in Development",
    description: "Improve spreadsheet workflows and expand Microsoft Excel functionality with custom add-ins designed around your business requirements. We develop Excel add-ins that automate calculations, manage workbook data, connect external applications, and introduce specialized tools directly into the Excel interface. From custom worksheet functions to data processing and reporting automation, our solutions make spreadsheet operations more efficient.",
    imagePath: "/images/services/office-addins/excel-hero-illustration.png",
    imageAlt: "Microsoft Excel Add-in Interface and Calculation Engine Illustration",
  },
  heroDirective: {
    tag: "Spreadsheet Directive",
    heading: "Custom Excel Add-ins Built Around Your Data & Business Workflows",
    paragraph: "Businesses rely on Microsoft Excel for financial reporting, data analysis, calculations, and everyday operations. However, repetitive spreadsheet tasks, complex calculations, and disconnected data sources can make these workflows difficult to manage. We develop custom Excel add-ins using Office JavaScript APIs and modern web technologies to extend spreadsheet functionality and connect workbooks with external applications. From automating data processing and creating custom worksheet functions to integrating business systems and developing interactive Excel tools, our solutions are designed around your specific requirements. We focus on practical functionality, accurate data handling, user-friendly interfaces, and compatibility with supported Excel environments."
  },
  verticalSplitSection: {
    tag: "Task Pane & Custom Functions",
    heading: "Interactive Task Panes & Custom Worksheet Calculations",
    description: "Extend spreadsheet capabilities with custom interfaces and high-performance calculation functions embedded directly into Excel.",
    keyFeatures: [
      {
        title: "Custom Excel Task Pane Add-ins",
        description: "Extend Excel with interactive task panes that provide additional functionality directly inside the application. We develop custom interfaces for data management, reporting, calculations, information retrieval, and other spreadsheet-related business operations."
      },
      {
        title: "Custom Excel Functions & Calculations",
        description: "Expand Excel's built-in calculation capabilities with custom worksheet functions. We develop JavaScript-based functions that users can call directly from spreadsheet cells to perform specialized calculations, retrieve external information, and process business data."
      }
    ],
    imagePath: "/images/services/office-addins/excel-taskpane-mockup.png",
    imageAlt: "Excel Custom Functions and Task Pane Interface Mockup",
  },
  fullWidthBanner: {
    tag: "Excel.js Engine",
    heading: "Modern Web-Based Calculation & Workbook Automation",
    description: "Leverage modern JavaScript and TypeScript APIs to interact with workbook objects, ranges, tables, and charts across Windows, Mac, iPad, and Excel on the web."
  },
  fourPartMosaic: {
    block1: {
      title: "Spreadsheet Automation & Data Processing",
      description: "Simplify repetitive spreadsheet operations through custom automation features. We develop add-ins that read and update workbook data, organize worksheets, manage tables, apply formatting, and automate defined data processing tasks."
    },
    icon1: {
      imagePath: "/images/services/office-addins/excel-automation-icon.png",
      imageAlt: "Spreadsheet Automation Icon"
    },
    block2: {
      title: "Excel API & Business System Integration",
      description: "Connect Excel workbooks with external applications and business data sources. We integrate supported APIs, databases, CRM platforms, and other services to retrieve information, synchronize records, and support connected spreadsheet workflows."
    },
    icon2: {
      imagePath: "/images/services/office-addins/excel-api-icon.png",
      imageAlt: "Excel API Integration Icon"
    }
  },
  panoramicShowcase: {
    tag: "Enterprise Deployment",
    heading: "Standardized Financial & Operational Workbooks Across Platforms",
    description: "Centralized deployment across organizations with secure manifest distribution through Microsoft 365 Admin Center.",
    imagePath: "/images/services/office-addins/excel-panoramic-showcase.png",
    imageAlt: "Excel Add-in running across Windows desktop, Mac, and Excel Online",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Custom Ribbon Commands & Reporting Tools",
      description: "Add custom buttons and commands to the Excel ribbon for easier access to frequently used features. We develop interactive tools for generating reports, processing spreadsheet data, performing calculations, and managing workbook operations."
    },
    {
      index: "02",
      title: "Excel Add-in Testing & Deployment",
      description: "Prepare Excel add-ins for reliable use across supported environments. We handle functionality testing, API compatibility checks, manifest configuration, permission settings, and deployment through supported Microsoft 365 distribution methods."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Microsoft Excel Add-in Development Documentation",
    description: "Official developer guides, API specifications, and custom function documentation from Microsoft.",
    items: [
      {
        id: "res-excel-docs",
        title: "Microsoft Excel Add-ins Documentation",
        description: "Explore Excel add-in development, automation, testing, and deployment.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/excel/",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/excel-badge-01.png",
        badgeImageAlt: "Microsoft Excel Add-ins Documentation Badge"
      },
      {
        id: "res-excel-api",
        title: "Excel JavaScript API Reference",
        description: "Learn how to interact with workbooks, worksheets, ranges, tables, and charts.",
        url: "https://learn.microsoft.com/en-us/javascript/api/excel?view=excel-js-preview",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/excel-badge-02.png",
        badgeImageAlt: "Excel JavaScript API Reference Badge"
      },
      {
        id: "res-excel-custom-func",
        title: "Excel Custom Functions",
        description: "Understand how to create custom worksheet functions using JavaScript.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/excel/custom-functions-overview",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/excel-badge-03.png",
        badgeImageAlt: "Excel Custom Functions Overview Badge"
      },
      {
        id: "res-office-platform",
        title: "Office Add-ins Platform Overview",
        description: "Explore task panes, ribbon commands, and web-based add-in architecture.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/excel-badge-04.png",
        badgeImageAlt: "Office Add-ins Platform Architecture Badge"
      },
      {
        id: "res-office-deployment",
        title: "Office Add-in Deployment",
        description: "Learn about publishing and centrally deploying Office add-ins.",
        url: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-deployment-of-add-ins",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/excel-badge-05.png",
        badgeImageAlt: "Microsoft 365 Centralized Deployment Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Excel Add-in Development",
    items: [
      {
        id: "faq-e-1",
        question: "What is Excel add-in development?",
        answer: "Excel add-in development involves creating custom extensions that expand Microsoft Excel functionality. These add-ins can provide interactive task panes, custom worksheet functions, ribbon commands, spreadsheet automation, and integrations with external applications using web technologies and Office JavaScript APIs."
      },
      {
        id: "faq-e-2",
        question: "What can a custom Excel add-in do?",
        answer: "A custom Excel add-in can automate spreadsheet operations, perform specialized calculations, process workbook data, generate reports, retrieve external information, and provide interactive tools within Excel. Its functionality depends on the available APIs and implementation requirements."
      },
      {
        id: "faq-e-3",
        question: "Can Excel add-ins automate spreadsheet calculations?",
        answer: "Yes. Excel add-ins can introduce custom worksheet functions that users can call directly from spreadsheet cells. They can also automate supported workbook operations, including data processing, formatting, and updates to worksheets and tables."
      },
      {
        id: "faq-e-4",
        question: "Can Excel add-ins connect with external applications and APIs?",
        answer: "Yes. Excel add-ins can connect with external services through supported APIs and authentication methods. This allows them to retrieve business information, synchronize data, and support workflows involving CRM platforms, databases, and other applications."
      },
      {
        id: "faq-e-5",
        question: "Can Excel add-ins work with large datasets?",
        answer: "Excel add-ins can process workbook data and interact with external data sources. Handling large datasets efficiently requires appropriate data processing, API usage, and performance optimization. Actual capabilities also depend on Excel platform limits and the add-in architecture."
      },
      {
        id: "faq-e-6",
        question: "Are custom Excel add-ins compatible with Windows, Mac, and Excel Online?",
        answer: "Excel add-ins support Excel on Windows, Mac, and the web, with additional support on iPad. However, API availability and functionality can vary between platforms and Excel versions, so compatibility testing is important."
      },
      {
        id: "faq-e-7",
        question: "Can Excel add-ins be deployed across an organization?",
        answer: "Yes. Organizations can distribute supported add-ins through Microsoft 365 centralized deployment, Microsoft Marketplace, or other supported publishing methods. Deployment requirements depend on the organization's Microsoft 365 environment and administration settings."
      },
      {
        id: "faq-e-8",
        question: "How do you ensure Excel add-ins are secure and reliable?",
        answer: "We use appropriate permission configurations, secure API integrations, HTTPS hosting, and functionality testing. We also consider workbook access requirements, authentication, platform compatibility, error handling, and performance during development and deployment."
      }
    ]
  },
  cta: {
    heading: "Make Microsoft Excel Work Smarter for Your Business",
    description: "Extend Microsoft Excel with custom functionality designed around your spreadsheet workflows and business operations. From spreadsheet automation and custom calculations to interactive task panes, reporting tools, and external system integrations, let's develop an Excel add-in that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};