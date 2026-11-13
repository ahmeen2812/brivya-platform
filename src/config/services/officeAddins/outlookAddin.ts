import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const OUTLOOK_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Outlook Add-in Development | Email & Calendar Automation | Brivya Solutions",
    description: "Extend Microsoft Outlook with custom add-in development. Automate email workflows, meeting scheduling, attachment handling, and CRM integrations.",
  },
  hero: {
    serviceTitle: "Office Add-in Development",
    heading: "Extend Microsoft Outlook With Custom Add-in Development",
    description: "Improve email and calendar workflows with custom add-ins designed around your business requirements. We develop Outlook add-ins that automate email-related tasks, manage message information, streamline meeting workflows, and connect Outlook with external applications. From email processing and task automation to calendar integrations and custom productivity tools, our solutions make everyday Outlook operations more efficient.",
    imagePath: "/images/services/office-addins/outlook-hero-illustration.png",
    imageAlt: "Microsoft Outlook Add-in Interface and Email Automation Illustration",
  },
  heroDirective: {
    tag: "Communication Directive",
    heading: "Custom Outlook Add-ins Built Around Your Communication Workflows",
    paragraph: "We develop custom Microsoft Outlook add-ins to streamline email management, automate repetitive tasks, simplify meeting scheduling, and improve business communication. Using Office JavaScript APIs and modern web technologies, we build solutions that retrieve email information, manage appointment details, automate email-related actions, and integrate Outlook with external business applications. Our add-ins are designed to meet specific business requirements while ensuring secure permissions, user-friendly interfaces, improved productivity, and compatibility with supported Outlook environments."
  },
  verticalSplitSection: {
    tag: "Task Pane & Email Automation",
    heading: "Interactive Sidebar Tools & Automated Email Processing",
    description: "Extend message read and compose windows with specialized toolbars, customer contact cards, and event-based automated actions.",
    keyFeatures: [
      {
        title: "Custom Outlook Task Pane Add-ins",
        description: "Extend Outlook with interactive task panes that provide additional tools directly inside the application. We develop custom interfaces for email management, customer information retrieval, contact lookup, message processing, and other communication-related business operations."
      },
      {
        title: "Email Management & Automation",
        description: "Simplify repetitive email tasks through custom automation features. We develop add-ins that process message information, organize email-related workflows, support message composition, and perform defined actions using supported Outlook events and APIs."
      }
    ],
    imagePath: "/images/services/office-addins/outlook-taskpane-mockup.png",
    imageAlt: "Outlook Custom Task Pane and Email Integration Mockup",
  },
  fullWidthBanner: {
    tag: "Event-Based Activation",
    heading: "Automated Triggers on Message Read & Compose",
    description: "Activate custom business logic automatically when opening messages, scheduling meetings, or sending emails across Windows, Mac, and Outlook on the web."
  },
  fourPartMosaic: {
    block1: {
      title: "Calendar & Meeting Management",
      description: "Connect Outlook add-ins with appointment and meeting workflows. We develop functionality that accesses supported appointment information, assists with meeting coordination, retrieves relevant details, and connects calendar activities with external business systems."
    },
    icon1: {
      imagePath: "/images/services/office-addins/outlook-calendar-icon.png",
      imageAlt: "Calendar and Scheduling Workflows Icon"
    },
    block2: {
      title: "Custom Ribbon Commands & Email Tools",
      description: "Add custom buttons and commands to the Outlook ribbon for easier access to frequently used features. We develop interactive tools for processing messages, retrieving information, launching task panes, and performing specific email-related operations."
    },
    icon2: {
      imagePath: "/images/services/office-addins/outlook-ribbon-icon.png",
      imageAlt: "Outlook Ribbon Actions Icon"
    }
  },
  panoramicShowcase: {
    tag: "CRM & ERP Connectivity",
    heading: "Seamless Mailbox Integration With Enterprise Platforms",
    description: "Automatically log incoming customer communications, file tickets, and sync contacts directly from Outlook to Salesforce, HubSpot, or internal databases.",
    imagePath: "/images/services/office-addins/outlook-panoramic-showcase.png",
    imageAlt: "Outlook Add-in running across Windows desktop, Mac, and Web browser interfaces",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Outlook API & Business System Integration",
      description: "Connect Outlook with external applications and business data sources. We integrate supported APIs and services to retrieve customer information, synchronize relevant records, and support workflows involving CRM platforms, databases, and other business applications."
    },
    {
      index: "02",
      title: "Outlook Add-in Testing & Deployment",
      description: "Prepare Outlook add-ins for reliable use across supported environments. We handle functionality testing, API compatibility checks, manifest configuration, permission settings, and deployment through supported Microsoft 365 distribution methods."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Microsoft Outlook Add-in Development Documentation",
    description: "Official developer guides, Mailbox API specifications, and event-based activation references from Microsoft.",
    items: [
      {
        id: "res-outlook-docs",
        title: "Microsoft Outlook Add-ins Documentation",
        description: "Explore Outlook add-in development, email automation, testing, and deployment.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/outlook-badge-01.png",
        badgeImageAlt: "Microsoft Outlook Add-ins Documentation Badge"
      },
      {
        id: "res-outlook-api",
        title: "Outlook JavaScript API Reference",
        description: "Learn how to interact with messages, appointments, attachments, and mailbox items.",
        url: "https://learn.microsoft.com/en-us/javascript/api/outlook?view=outlook-js-preview",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/outlook-badge-02.png",
        badgeImageAlt: "Outlook JavaScript API Reference Badge"
      },
      {
        id: "res-outlook-events",
        title: "Outlook Event-Based Activation",
        description: "Understand how add-ins respond to specific Outlook events and automate supported tasks.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/develop/event-based-activation",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/outlook-badge-03.png",
        badgeImageAlt: "Outlook Event-Based Activation Documentation Badge"
      },
      {
        id: "res-outlook-commands",
        title: "Outlook Add-in Commands",
        description: "Explore custom ribbon buttons, commands, and task pane activation.",
        url: "https://learn.microsoft.com/en-us/office/dev/add-ins/design/add-in-commands",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/outlook-badge-04.png",
        badgeImageAlt: "Outlook Add-in Commands and Ribbon Buttons Badge"
      },
      {
        id: "res-office-deployment",
        title: "Office Add-in Deployment",
        description: "Learn about publishing and centrally deploying Outlook add-ins through Microsoft 365.",
        url: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-deployment-of-add-ins",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/outlook-badge-05.png",
        badgeImageAlt: "Microsoft 365 Centralized Deployment Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Outlook Add-in Development",
    items: [
      {
        id: "faq-o-1",
        question: "What is Outlook add-in development?",
        answer: "Outlook add-in development involves creating custom extensions that expand Microsoft Outlook functionality. These add-ins can provide interactive task panes, custom ribbon commands, email-related automation, appointment workflows, and integrations with external applications using web technologies and Office JavaScript APIs."
      },
      {
        id: "faq-o-2",
        question: "What can a custom Outlook add-in do?",
        answer: "A custom Outlook add-in can retrieve message information, process supported email content, manage appointment details, access attachments, provide interactive tools, and connect Outlook with external services. Its capabilities depend on available APIs, permissions, and implementation requirements."
      },
      {
        id: "faq-o-3",
        question: "Can Outlook add-ins automate email-related tasks?",
        answer: "Yes. Outlook add-ins can respond to supported events and perform defined actions, such as validating outgoing messages, processing message information, or supporting email workflows. Available automation depends on the event, Outlook client, and supported API requirements."
      },
      {
        id: "faq-o-4",
        question: "Can Outlook add-ins integrate with CRM and other business applications?",
        answer: "Yes. Outlook add-ins can connect with external services through supported APIs and authentication methods. This allows users to retrieve customer information, connect emails with CRM records, and support workflows involving databases and other business applications."
      },
      {
        id: "faq-o-5",
        question: "Can Outlook add-ins work with calendar appointments and meetings?",
        answer: "Yes. Supported Outlook APIs allow add-ins to access and work with appointment information. Depending on the implementation, they can retrieve meeting details, assist with scheduling-related workflows, and connect calendar information with external systems."
      },
      {
        id: "faq-o-6",
        question: "Can an Outlook add-in access email attachments?",
        answer: "Yes. Supported Outlook APIs provide methods for accessing attachment information and retrieving attachment content in supported read and compose scenarios. Availability depends on the Outlook client, API requirement set, and applicable permissions."
      },
      {
        id: "faq-o-7",
        question: "Are custom Outlook add-ins compatible with Windows, Mac, and Outlook Online?",
        answer: "Modern Outlook web add-ins support multiple environments, including Outlook on Windows, Mac, and the web. Mobile support is also available for supported scenarios. However, API functionality and event availability can vary by platform and Outlook version, so compatibility testing is important."
      },
      {
        id: "faq-o-8",
        question: "Can Outlook add-ins be deployed across an organization?",
        answer: "Yes. Organizations can distribute supported add-ins through Microsoft 365 centralized deployment and other supported publishing methods. Deployment requirements depend on the organization's Microsoft 365 subscription, Exchange Online environment, and administrative configuration."
      }
    ]
  },
  cta: {
    heading: "Make Microsoft Outlook Work Smarter for Your Business",
    description: "Extend Microsoft Outlook with custom functionality designed around your email, calendar, and communication workflows. From email automation and appointment management to interactive task panes, custom ribbon commands, and external system integrations, let's develop an Outlook add-in that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};