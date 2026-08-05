import { OfficeTemplateConfig } from "@/components/services/office-template/types/OfficeTemplateSchema";

export const FORMS_ADDIN_CONTENT: OfficeTemplateConfig = {
  seo: {
    title: "Google Forms Add-on Development | Response Automation | Brivya Solutions",
    description: "Extend Google Forms with custom add-on development. Automate form creation, question logic, response processing, and external database workflows.",
  },
  hero: {
    serviceTitle: "Google Add-ons Development",
    heading: "Extend Google Forms With Custom Add-on Development",
    description: "Improve form creation and data collection workflows with custom Google Forms add-ons designed around your business requirements. We develop add-ons that automate form creation, manage questions, organize responses, and connect Google Forms with external applications. From custom form-building tools and reusable templates to response processing and API integrations, our solutions make form management more efficient.",
    imagePath: "/images/services/google-addons/forms-hero-illustration.png",
    imageAlt: "Google Forms Custom Add-on and Response Automation Illustration",
  },
  heroDirective: {
    tag: "Data Collection Directive",
    heading: "Custom Google Forms Add-ons Built Around Your Form Workflows",
    paragraph: "Businesses use Google Forms to collect information, conduct surveys, manage registrations, and gather customer feedback. We develop custom add-ons using Google Apps Script and Google Forms APIs to extend form editor functionality and connect collected data with external services. From automated form creation and question management to reusable templates, response processing, and business application integrations, our solutions are designed around your specific requirements, with a focus on usability, data accuracy, and efficient form management."
  },
  verticalSplitSection: {
    tag: "Editor Extensions & Automation",
    heading: "Interactive Form Builder Sidebars & Automated Questions",
    description: "Supercharge the Google Forms editor with automated question generation, dynamic dropdown population, and standardized templates.",
    keyFeatures: [
      {
        title: "Custom Form Editor & Sidebar Development",
        description: "Extend the Google Forms editor with custom menus, dialogs, and interactive sidebars. We develop tools that help users manage form content, access business information, configure form settings, and perform repetitive form-building operations."
      },
      {
        title: "Form Creation & Question Automation",
        description: "Simplify form creation through custom automation tools. We develop solutions that create forms, insert questions, configure response options, manage sections, and organize form structures using Google Apps Script and supported Forms API methods."
      }
    ],
    imagePath: "/images/services/google-addons/forms-sidebar-mockup.png",
    imageAlt: "Google Forms Custom Editor Sidebar Interface Mockup",
  },
  fullWidthBanner: {
    tag: "Event-Driven Architecture",
    heading: "Automated Triggers on Form Submission",
    description: "Instantly process responses, validate submitted data, send automated email confirmations, and route leads to external CRMs upon form submission."
  },
  fourPartMosaic: {
    block1: {
      title: "Custom Form Templates & Management",
      description: "Make recurring form creation easier with reusable templates and predefined question structures. We develop tools that help businesses create standardized surveys, registration forms, feedback forms, and questionnaires according to their requirements."
    },
    icon1: {
      imagePath: "/images/services/google-addons/forms-automation-icon.png",
      imageAlt: "Form Question Templates and Structure Icon"
    },
    block2: {
      title: "Form Response Processing & Automation",
      description: "Organize collected responses through automated data processing workflows. We develop solutions that retrieve submissions, validate information, update connected spreadsheets, and trigger follow-up actions using supported Apps Script triggers and Google Forms API capabilities."
    },
    icon2: {
      imagePath: "/images/services/google-addons/forms-api-icon.png",
      imageAlt: "Response Processing and Webhook Icon"
    }
  },
  panoramicShowcase: {
    tag: "Enterprise Data Pipelines",
    heading: "End-to-End Survey & Registration Processing Systems",
    description: "Connect form responses directly with Google Sheets, cloud databases, ERP systems, and internal analytics tools in real time.",
    imagePath: "/images/services/google-addons/forms-panoramic-showcase.png",
    imageAlt: "Google Forms Add-on response routing and data processing pipeline showcase",
  },
  additionalCapabilities: [
    {
      index: "01",
      title: "API & Third-Party Application Integration",
      description: "Connect Google Forms with external applications and business data sources. We integrate CRM platforms, databases, Google Sheets, email services, and other systems to synchronize information and support automated data collection workflows."
    },
    {
      index: "02",
      title: "Add-on Testing, Publishing & Maintenance",
      description: "Prepare Google Forms add-ons for reliable use and distribution. We handle functionality testing, OAuth permissions, manifest configuration, deployment, Google Workspace Marketplace publishing requirements, and ongoing improvements."
    }
  ],
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google Forms Development Documentation",
    description: "Official developer guides, Forms API references, and event trigger documentation from Google.",
    items: [
      {
        id: "res-forms-dev",
        title: "Google Forms Add-on Development",
        description: "Explore custom editor interfaces, form management, and add-on functionality.",
        url: "https://developers.google.com/workspace/add-ons/editors/forms",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/forms-badge-01.png",
        badgeImageAlt: "Google Forms Add-on Development Guide Badge"
      },
      {
        id: "res-apps-script-forms",
        title: "Google Apps Script Forms Service",
        description: "Learn how to create, access, modify, and manage Google Forms.",
        url: "https://developers.google.com/apps-script/reference/forms",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/forms-badge-02.png",
        badgeImageAlt: "Apps Script Forms Service Reference Badge"
      },
      {
        id: "res-forms-api",
        title: "Google Forms API",
        description: "Explore form creation, question management, response retrieval, and API integrations.",
        url: "https://developers.google.com/workspace/forms/api/guides",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/forms-badge-03.png",
        badgeImageAlt: "Google Forms API Documentation Badge"
      },
      {
        id: "res-forms-triggers",
        title: "Google Apps Script Triggers",
        description: "Understand automated workflows triggered by form submissions and other supported events.",
        url: "https://developers.google.com/apps-script/guides/triggers",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-addons/forms-badge-04.png",
        badgeImageAlt: "Apps Script Event Triggers Badge"
      },
      {
        id: "res-marketplace-publish",
        title: "Google Workspace Marketplace Publishing",
        description: "Explore add-on distribution, authorization, and publishing requirements.",
        url: "https://developers.google.com/workspace/marketplace/how-to-publish",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-addons/forms-badge-05.png",
        badgeImageAlt: "Marketplace Publishing Documentation Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Google Forms Add-on Development",
    items: [
      {
        id: "faq-gf-1",
        question: "What is Google Forms add-on development?",
        answer: "Google Forms add-on development involves creating custom extensions that expand the functionality of the Google Forms editor. These add-ons can provide custom menus, sidebars, form-building tools, reusable templates, and integrations with external applications."
      },
      {
        id: "faq-gf-2",
        question: "What can a custom Google Forms add-on do?",
        answer: "A custom add-on can help create forms, manage questions, organize form structures, configure supported settings, and connect form data with external services. Its capabilities depend on Google's available APIs and add-on functionality."
      },
      {
        id: "faq-gf-3",
        question: "Can Google Forms add-ons automate form creation?",
        answer: "Yes. Using Google Apps Script and the Forms API, developers can create forms, insert questions, configure question types, manage sections, and automate other supported form-building operations."
      },
      {
        id: "faq-gf-4",
        question: "Can Google Forms add-ons customize the form respondents see?",
        answer: "Google Forms editor add-ons extend the form-building interface, not the respondent-facing form itself. Respondent-facing functionality must use features supported by Google Forms or a separate custom application integrated with Google Forms data."
      },
      {
        id: "faq-gf-5",
        question: "Can Google Forms responses be processed automatically?",
        answer: "Yes. Apps Script submission triggers and the Google Forms API can support automated response processing, data validation, notifications, spreadsheet updates, and connected business workflows."
      },
      {
        id: "faq-gf-6",
        question: "Can Google Forms integrate with CRM and other business applications?",
        answer: "Yes. Google Forms can connect with external services through APIs and supported authorization methods. This allows businesses to transfer collected information into CRM platforms, databases, email systems, and other applications."
      },
      {
        id: "faq-gf-7",
        question: "Can Google Forms add-ons work with large numbers of responses?",
        answer: "Yes, within the limitations of Google Forms, Apps Script, and API quotas. Efficient data retrieval, batch processing, and suitable database integrations can help manage larger response volumes and processing requirements."
      },
      {
        id: "faq-gf-8",
        question: "Can custom Google Forms add-ons be published for other users?",
        answer: "Yes. Add-ons can be distributed privately within an organization or published through the Google Workspace Marketplace, subject to Google's authorization, verification, and publishing requirements."
      }
    ]
  },
  cta: {
    heading: "Make Google Forms Work Smarter for Your Business",
    description: "Extend Google Forms with custom functionality designed around your data collection and business workflows. From automated form creation and reusable templates to response processing, custom editor tools, and external application integrations, let's develop a Google Forms add-on that makes your work more efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};