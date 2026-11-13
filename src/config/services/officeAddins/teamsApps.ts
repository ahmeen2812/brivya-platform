import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const TEAMS_APPS_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Microsoft Teams App Development | Custom Tabs & Bots | Brivya Solutions",
    description: "Build custom Microsoft Teams apps for workplace collaboration. Conversational bots, interactive tabs, message extensions, and Microsoft 365 integrations.",
  },
  hero: {
    serviceTitle: "Office Add-in Development",
    heading: "Build Custom Microsoft Teams Apps for Better Workplace Collaboration",
    description: "Improve team collaboration and streamline business operations with custom Microsoft Teams applications. We develop Teams apps that bring business tools, interactive features, automated workflows, and external services directly into Microsoft Teams. From conversational bots and custom tabs to meeting applications and business integrations, our solutions are designed around your organization's requirements.",
    imagePath: "/images/services/office-addins/teams-hero-illustration.png",
    imageAlt: "Microsoft Teams Custom App and Bot Interface Illustration",
  },
  heroDirective: {
    tag: "Collaboration Directive",
    heading: "Custom Microsoft Teams Apps Built Around Your Business Workflows",
    paragraph: "Businesses use Microsoft Teams to communicate, collaborate, and manage everyday work. We develop custom Teams applications that extend its functionality through interactive interfaces, conversational agents, and business system integrations. Our solutions support task management, automated notifications, information sharing, meeting workflows, and connected business applications, helping teams access relevant tools without constantly switching between platforms."
  },
  verticalSplitSection: {
    tag: "Teams Apps & Bots",
    heading: "Custom Workplace Applications & Conversational AI Agents",
    description: "Bring custom dashboards, internal tools, and intelligent conversational bots directly inside Teams channels, chats, and meetings.",
    keyFeatures: [
      {
        title: "Custom Microsoft Teams App Development",
        description: "Build applications that bring your business tools and services directly into Microsoft Teams. We develop custom Teams apps with interactive interfaces, organizational features, and application-specific functionality to support your internal workflows."
      },
      {
        title: "Teams Bots & AI Agents",
        description: "Develop conversational bots and AI-powered agents that interact with users through chats, channels, and supported meeting experiences. We configure automated responses, information retrieval, task assistance, and integrations with external business systems."
      }
    ],
    imagePath: "/images/services/office-addins/teams-taskpane-mockup.png",
    imageAlt: "Microsoft Teams Custom Tab and Bot UI Mockup",
  },
  fullWidthBanner: {
    tag: "Microsoft Graph Platform",
    heading: "Secure Unified Workplace Systems Integration",
    description: "Connect your custom Teams apps with Microsoft Graph, SharePoint, and Microsoft 365 services with enterprise-grade authorization and Azure AD authentication."
  },
  fourPartMosaic: {
    block1: {
      title: "Custom Teams Tabs & Interactive Interfaces",
      description: "Extend Teams with custom tab applications that display business tools and web-based experiences within the Teams interface. We develop interactive dashboards, project management interfaces, reporting tools, and other application experiences."
    },
    icon1: {
      imagePath: "/images/services/office-addins/teams-tabs-icon.png",
      imageAlt: "Custom Teams Tabs Application Icon"
    },
    block2: {
      title: "Message Extensions & Workflow Actions",
      description: "Make business information and actions accessible directly from Teams conversations. We develop message extensions that support contextual searches, information sharing, action commands, and interactive workflows through the message composition interface."
    },
    icon2: {
      imagePath: "/images/services/office-addins/teams-message-icon.png",
      imageAlt: "Teams Message Extensions and Action Commands Icon"
    }
  },
  panoramicShowcase: {
    tag: "Meeting Extensions",
    heading: "Interactive Meeting Apps & Collaborative Real-Time Workspaces",
    description: "Enhance Teams meetings with real-time shared stages, participant panels, live polls, and interactive notes synchronized across participants.",
    imagePath: "/images/services/office-addins/teams-panoramic-showcase.png",
    imageAlt: "Microsoft Teams Custom Meeting Apps and Channel Workspaces Showcase",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Meeting Apps & Collaboration Tools",
      description: "Enhance online meetings with custom applications and interactive features. We develop meeting extensions for supported scenarios, including shared content, meeting information, participant interactions, notes, and collaboration workflows."
    },
    {
      index: "02",
      title: "Microsoft 365 Integration & Deployment",
      description: "Connect Teams applications with Microsoft Graph, SharePoint, Microsoft 365 services, and other supported business systems. We handle authentication, permissions, app configuration, testing, and deployment through appropriate organizational distribution methods."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Microsoft Teams Development Documentation",
    description: "Official developer resources, Teams SDK guides, and bot development documentation from Microsoft.",
    items: [
      {
        id: "res-teams-docs",
        title: "Microsoft Teams Developer Documentation",
        description: "Explore Teams app development, capabilities, SDKs, and deployment.",
        url: "https://learn.microsoft.com/en-us/microsoftteams/platform/",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/teams-badge-01.png",
        badgeImageAlt: "Microsoft Teams Developer Documentation Badge"
      },
      {
        id: "res-teams-sdk",
        title: "Microsoft Teams SDK",
        description: "Learn how to build conversational agents and interactive Teams applications.",
        url: "https://learn.microsoft.com/en-us/microsoftteams/platform/teams-sdk/",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/teams-badge-02.png",
        badgeImageAlt: "Microsoft Teams SDK Reference Badge"
      },
      {
        id: "res-teams-tabs",
        title: "Teams Tabs Development",
        description: "Understand how to integrate web-based applications within Teams.",
        url: "https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/what-are-tabs",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/teams-badge-03.png",
        badgeImageAlt: "Teams Tabs Development Guide Badge"
      },
      {
        id: "res-teams-extensions",
        title: "Teams Message Extensions",
        description: "Explore search commands, action commands, and contextual messaging tools.",
        url: "https://learn.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions",
        badgePosition: "top",
        badgeImagePath: "/images/services/office-addins/teams-badge-04.png",
        badgeImageAlt: "Teams Message Extensions Documentation Badge"
      },
      {
        id: "res-teams-permissions",
        title: "Teams App Permissions",
        description: "Understand application permissions, data access, and administrative consent.",
        url: "https://learn.microsoft.com/en-us/microsoftteams/app-permissions",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/office-addins/teams-badge-05.png",
        badgeImageAlt: "Teams App Permissions and Security Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Microsoft Teams App Development",
    items: [
      {
        id: "faq-t-1",
        question: "What is Microsoft Teams app development?",
        answer: "Microsoft Teams app development involves creating custom applications that extend Teams functionality. These applications can include conversational bots, interactive tabs, message extensions, meeting apps, and integrations with external business systems."
      },
      {
        id: "faq-t-2",
        question: "What types of applications can you develop for Microsoft Teams?",
        answer: "Teams supports several application capabilities, including tabs, bots and AI agents, message extensions, and meeting applications. The right combination depends on your business requirements and intended user experience."
      },
      {
        id: "faq-t-3",
        question: "Can Microsoft Teams apps integrate with existing business systems?",
        answer: "Yes. Teams applications can connect with external services, CRM platforms, databases, SharePoint, and Microsoft 365 through supported APIs and integrations. Microsoft Graph can also provide access to authorized Microsoft 365 data."
      },
      {
        id: "faq-t-4",
        question: "Can you develop AI-powered bots for Microsoft Teams?",
        answer: "Yes. Teams supports conversational bots and AI-powered agents that can answer questions, retrieve information, interact with users, and perform defined tasks through connected tools and services."
      },
      {
        id: "faq-t-5",
        question: "Can custom Teams apps automate business workflows?",
        answer: "Yes. Teams applications can support automated notifications, approval processes, task management, information retrieval, and other business workflows through suitable APIs, bots, and automation integrations."
      },
      {
        id: "faq-t-6",
        question: "Can Teams apps work within meetings and channels?",
        answer: "Yes. Teams supports applications designed for chats, channels, and meetings. Available functionality depends on the application's capabilities, permissions, and supported Teams environments."
      },
      {
        id: "faq-t-7",
        question: "Can custom Teams apps be deployed across an organization?",
        answer: "Yes. Organizations can distribute applications through the Teams admin center and organizational app catalog. Public distribution through the Microsoft Teams Store is also available subject to Microsoft's validation requirements."
      },
      {
        id: "faq-t-8",
        question: "How do you ensure Teams applications are secure?",
        answer: "We configure appropriate authentication, application permissions, and access controls. We also consider Microsoft Graph permissions, resource-specific consent, secure API communication, and organizational deployment requirements."
      }
    ]
  },
  cta: {
    heading: "Extend Microsoft Teams With Custom Business Applications",
    description: "Bring your business tools, workflows, and collaboration features together with custom Microsoft Teams applications. From conversational agents and interactive tabs to meeting apps, message extensions, and Microsoft 365 integrations, let's develop a solution that makes your team's work more connected and efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};