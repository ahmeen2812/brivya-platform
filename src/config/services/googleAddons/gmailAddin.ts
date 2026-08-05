import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const GMAIL_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Gmail Add-on Development | Inbox Workflows & CRM | Brivya Solutions",
    description: "Extend Gmail with custom add-on development. Automate email drafts, contextual message sidebars, CRM synchronization, and communication workflows.",
  },
  hero: {
    serviceTitle: "Google Add-ons Development",
    heading: "Extend Gmail With Custom Add-on Development",
    description: "Improve email workflows with custom Gmail add-ons designed around your business requirements. We develop add-ons that automate email-related tasks, manage message information, simplify email composition, and connect Gmail with external applications. From interactive email tools and custom compose actions to business integrations and communication automation, our solutions make everyday Gmail operations more efficient.",
    imagePath: "/images/services/google-addons/gmail-hero-illustration.png",
    imageAlt: "Gmail Custom Add-on Interface and Email Automation Illustration",
  },
  heroDirective: {
    tag: "Email Automation Directive",
    heading: "Custom Gmail Add-ons Built Around Your Communication Workflows",
    paragraph: "Businesses rely on Gmail to manage customer communication, organize conversations, and handle daily email activities. We develop custom Gmail add-ons using Google Apps Script and Google Workspace APIs to extend email functionality and connect communication workflows with external services. From retrieving message information and generating email drafts to automating follow-ups and integrating business applications, our solutions are designed around your specific requirements, with a focus on usability, secure access, and efficient email management."
  },
  verticalSplitSection: {
    tag: "Contextual Cards & Drafting",
    heading: "Contextual Message Sidebars & Automated Compose Actions",
    description: "Transform your inbox into a command center with contextual customer lookups, automated email replies, and CRM record logging.",
    keyFeatures: [
      {
        title: "Custom Gmail Sidebar & Interface Development",
        description: "Extend Gmail with interactive add-on interfaces that appear alongside email conversations. We develop custom cards, menus, and widgets for customer information lookup, email management, communication tools, and other business-specific workflows."
      },
      {
        title: "Email Composition & Draft Automation",
        description: "Simplify email creation through custom compose actions and automated draft generation. We develop add-ons that prepare message content, populate recipients and subjects, insert predefined information, and support structured email composition workflows."
      }
    ],
    imagePath: "/images/services/google-addons/gmail-sidebar-mockup.png",
    imageAlt: "Gmail Contextual Sidebar and Compose Extension Mockup",
  },
  fullWidthBanner: {
    tag: "Event-Based Triggers",
    heading: "Contextual Activation Across Desktop & Mobile",
    description: "Activate business logic automatically when opening threads or composing messages with card-based interfaces that run natively in Gmail on desktop and mobile."
  },
  fourPartMosaic: {
    block1: {
      title: "Email Management & Message Processing",
      description: "Make email-related information easier to organize and process. We develop solutions that retrieve supported message details, analyze email content, identify relevant information, and connect message-related activities with your business workflows."
    },
    icon1: {
      imagePath: "/images/services/google-addons/gmail-message-icon.png",
      imageAlt: "Email Thread Parsing and Message Processing Icon"
    },
    block2: {
      title: "Gmail API & Third-Party Integration",
      description: "Connect Gmail with external applications and business data sources through supported APIs. We integrate CRM platforms, databases, customer management systems, and other services to retrieve information, synchronize records, and support connected email workflows."
    },
    icon2: {
      imagePath: "/images/services/google-addons/gmail-api-icon.png",
      imageAlt: "Gmail API and CRM Connectivity Icon"
    }
  },
  panoramicShowcase: {
    tag: "Inbox CRM Connectivity",
    heading: "Seamless Synchronization Between Inbox & Business Systems",
    description: "Eliminate manual data entry by logging incoming customer inquiries, updating deal stages, and attaching tickets directly from Gmail.",
    imagePath: "/images/services/google-addons/gmail-panoramic-showcase.png",
    imageAlt: "Gmail Add-on running across desktop and mobile interfaces with CRM synchronization",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "Automated Email Workflows & Notifications",
      description: "Simplify repetitive communication tasks through event-based actions and connected automation workflows. We develop solutions for email notifications, follow-up processes, draft preparation, and communication triggers based on supported Gmail events and business conditions."
    },
    {
      index: "02",
      title: "Gmail Add-on Testing, Publishing & Maintenance",
      description: "Prepare Gmail add-ons for reliable use and distribution. We handle functionality testing, OAuth permissions, manifest configuration, deployment, Google Workspace Marketplace publishing requirements, and ongoing improvements."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google Gmail Add-on Development Documentation",
    description: "Official developer guides, compose UI extensions, and Gmail API references from Google.",
    items: [
      {
        id: "res-gmail-addons",
        title: "Google Workspace Gmail Add-ons",
        description: "Explore Gmail add-on development, message interfaces, and contextual functionality.",
        url: "https://developers.google.com/workspace/add-ons/gmail",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/gmail-badge-01.png",
        badgeImageAlt: "Google Workspace Gmail Add-ons Guide Badge"
      },
      {
        id: "res-gmail-compose",
        title: "Gmail Compose Actions",
        description: "Learn how to build custom compose interfaces and automate email drafts.",
        url: "https://developers.google.com/workspace/add-ons/gmail/extending-compose-ui",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/gmail-badge-02.png",
        badgeImageAlt: "Gmail Extending Compose UI Badge"
      },
      {
        id: "res-gmail-api",
        title: "Gmail API Documentation",
        description: "Explore programmatic email access, message management, labels, and mailbox operations.",
        url: "https://developers.google.com/workspace/gmail/api/guides",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/gmail-badge-03.png",
        badgeImageAlt: "Gmail API Developer Documentation Badge"
      },
      {
        id: "res-workspace-triggers",
        title: "Gmail Add-on Triggers",
        description: "Understand event-based functionality when users open messages or compose emails.",
        url: "https://developers.google.com/workspace/add-ons/concepts/workspace-triggers",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/gmail-badge-04.png",
        badgeImageAlt: "Workspace Triggers and Events Badge"
      },
      {
        id: "res-marketplace-publish",
        title: "Google Workspace Marketplace Publishing",
        description: "Explore add-on distribution, authorization, testing, and publishing requirements.",
        url: "https://developers.google.com/workspace/marketplace/how-to-publish",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/gmail-badge-05.png",
        badgeImageAlt: "Marketplace Publishing Documentation Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Gmail Add-on Development",
    items: [
      {
        id: "faq-gm-1",
        question: "What is Gmail add-on development?",
        answer: "Gmail add-on development involves creating custom extensions that expand Gmail functionality. These add-ons can provide interactive email interfaces, contextual message tools, compose actions, automated draft creation, and integrations with external applications using Google Apps Script and Google Workspace APIs."
      },
      {
        id: "faq-gm-2",
        question: "What can a custom Gmail add-on do?",
        answer: "A custom add-on can display additional information alongside emails, retrieve supported message details, generate email drafts, connect external services, and provide interactive tools within Gmail. Its capabilities depend on available APIs, permissions, and implementation requirements."
      },
      {
        id: "faq-gm-3",
        question: "Can Gmail add-ons automatically generate email drafts?",
        answer: "Yes. Gmail add-ons support compose actions that can create new email drafts or replies with predefined subjects, recipients, and message content. The available functionality depends on the configured permissions and supported compose APIs."
      },
      {
        id: "faq-gm-4",
        question: "Can Gmail add-ons integrate with CRM and other business applications?",
        answer: "Yes. Gmail add-ons can connect with external applications through APIs and supported authentication methods. This allows businesses to retrieve customer information, associate email activities with CRM records, and support connected communication workflows."
      },
      {
        id: "faq-gm-5",
        question: "Can Gmail add-ons analyze incoming emails?",
        answer: "Yes. With appropriate permissions and supported Gmail interfaces, add-ons can retrieve message information and process relevant content. They can also connect with external AI services to support classification, summarization, information extraction, and other email-related tasks."
      },
      {
        id: "faq-gm-6",
        question: "Can Gmail add-ons automate email follow-ups and notifications?",
        answer: "Gmail add-ons can support compose actions, draft preparation, and workflows triggered by supported events. More extensive scheduled follow-ups and automated mailbox operations may require additional Apps Script triggers, Gmail API integrations, or external automation services."
      },
      {
        id: "faq-gm-7",
        question: "Do Gmail add-ons work on mobile devices?",
        answer: "Yes. Google documents Gmail add-on support on desktop and mobile clients for supported experiences. However, functionality varies by interface and context. For example, contextual message experiences are supported in Gmail mobile, while non-contextual homepage availability has limitations."
      },
      {
        id: "faq-gm-8",
        question: "How do you ensure Gmail add-ons are secure?",
        answer: "We configure appropriate OAuth scopes, authentication methods, and access permissions. We also consider secure API communication, data handling, authorization requirements, and Google's publishing and verification guidelines during development and deployment."
      }
    ]
  },
  cta: {
    heading: "Make Gmail Work Smarter for Your Business",
    description: "Extend Gmail with custom functionality designed around your communication workflows and business operations. From email automation and draft generation to interactive message tools, CRM integrations, and external application connectivity, let's develop a Gmail add-on that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};