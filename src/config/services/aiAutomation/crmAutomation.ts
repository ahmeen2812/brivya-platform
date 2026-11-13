import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const CRM_AUTOMATION_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Smart CRM Automation & Pipeline Workflows | Brivya Solutions",
    description: "Automate sales pipeline management, lead assignments, customer follow-ups, and data synchronization across Salesforce, HubSpot, and custom CRMs.",
  },
  hero: {
    serviceTitle: "CRM Automation",
    heading: "Streamline Customer Relationships With Smart CRM Automation",
    description: "Manage customer information, simplify sales activities, and improve team productivity with automated CRM workflows. We develop CRM automation solutions that handle lead assignments, customer follow-ups, data updates, sales pipeline activities, and communication between connected business applications. Our approach focuses on making customer relationship management more organized and efficient.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/ai-automation/crm-hero-illustration.png",
    imageAlt: "Intelligent CRM Automation and Sales Pipeline Illustration",
  },
  mainFeaturedCard: {
    tag: "Pipeline Operations",
    heading: "CRM Automation Solutions Built Around Your Sales & Customer Management Needs",
    paragraphs: [
      "Managing customer relationships involves more than storing contact information. Businesses need organized customer records, timely follow-ups, consistent sales processes, and reliable communication between teams. We develop CRM automation solutions that simplify these activities through workflow automation, lead management, data synchronization, and application integrations. From capturing new inquiries and assigning leads to updating customer records and managing sales pipeline activities, our solutions are designed around your existing CRM platform and business processes. We focus on reducing repetitive administrative work, improving information accuracy, and helping teams manage customer interactions more effectively."
    ]
  },
  supportingCards: {
    heading: "Automated Customer Lifecycle Operations",
    subtitle: "Eliminating manual data entry and driving consistent sales follow-ups through connected CRM workflows.",
    card2IllustrationPath: "/images/services/ai-automation/crm-pipeline-deal.png",
    card2IllustrationAlt: "Automated Deal Creation and Pipeline Progression Workflows",
    card3IllustrationPath: "/images/services/ai-automation/crm-integration-workflow.png",
    card3IllustrationAlt: "Cross-System Customer Data Synchronization and Validation",
    items: [
      {
        index: "01",
        title: "Lead Management & Automated Assignment",
        description: "Organize incoming leads and ensure they reach the appropriate sales representatives. We configure automated lead capture, assignment rules, qualification workflows, and lead status updates based on your sales requirements and customer information.",
      },
      {
        index: "02",
        title: "Automated Customer Follow-Ups",
        description: "Maintain consistent communication with potential and existing customers through scheduled follow-ups and automated reminders. We develop CRM workflows that trigger emails, notifications, and sales tasks based on customer activity, lead status, and defined business conditions.",
      },
      {
        index: "03",
        title: "Sales Pipeline & Deal Automation",
        description: "Simplify how your sales team manages opportunities throughout the sales cycle. We automate deal creation, pipeline stage updates, task assignments, and sales notifications to help teams maintain organized records and monitor opportunity progress.",
      },
      {
        index: "04",
        title: "CRM Data Management & Synchronization",
        description: "Keep customer information organized and consistent across connected business applications. We develop workflows for contact updates, duplicate detection, field synchronization, data validation, and information transfers between supported systems.",
      },
      {
        index: "05",
        title: "CRM Integration & Workflow Automation",
        description: "Connect your CRM with other business tools to streamline customer-related operations. We integrate suitable email platforms, websites, marketing applications, customer support systems, and business software through available APIs and automation connectors.",
      },
      {
        index: "06",
        title: "CRM Reporting & Performance Automation",
        description: "Make customer and sales information easier to monitor through automated reporting and data updates. We configure reporting workflows and dashboards that help teams review lead activity, deal progress, conversion metrics, follow-up performance, and sales pipeline information.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Leading CRM Automation Platforms",
    description: "Official guides and technical documentation from enterprise CRM platforms on workflow rules, data flows, and automated sales operations.",
    items: [
      {
        id: "res-salesforce-flow",
        title: "Salesforce Flow",
        description: "Explore CRM workflows, automated record updates, and business process automation.",
        url: "https://help.salesforce.com/s/articleView?id=platform.flow.htm&type=5",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/salesforce-flow-badge.png",
        badgeImageAlt: "Salesforce Flow Automation Badge"
      },
      {
        id: "res-hubspot-workflows",
        title: "HubSpot Workflow Automation",
        description: "Learn about automated lead assignment, customer records, follow-ups, and CRM workflows.",
        url: "https://knowledge.hubspot.com/workflows/create-workflows",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/hubspot-workflows-badge.png",
        badgeImageAlt: "HubSpot Workflow Automation Guide Badge"
      },
      {
        id: "res-dynamics-sales",
        title: "Microsoft Dynamics 365 Sales",
        description: "Explore lead management, opportunity tracking, sales processes, and CRM integrations.",
        url: "https://learn.microsoft.com/en-us/dynamics365/sales/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/dynamics-365-badge.png",
        badgeImageAlt: "Microsoft Dynamics 365 Sales Platform Badge"
      },
      {
        id: "res-hubspot-crm-auto",
        title: "HubSpot CRM Automation",
        description: "Understand how CRM automation supports customer management and sales activities.",
        url: "https://www.hubspot.com/glossary/crm-automation",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/hubspot-crm-auto-badge.png",
        badgeImageAlt: "HubSpot CRM Automation Fundamentals Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About CRM Automation",
    items: [
      {
        id: "faq-crm-1",
        question: "What is CRM automation?",
        answer: "CRM automation uses software workflows and predefined rules to manage repetitive customer relationship activities. It can automate lead assignments, customer follow-ups, contact updates, sales tasks, notifications, and other processes within a CRM system."
      },
      {
        id: "faq-crm-2",
        question: "Which CRM processes can be automated?",
        answer: "Businesses can automate lead capture, lead assignment, customer communication, sales pipeline updates, meeting reminders, contact management, task creation, and reporting. Available automation depends on the CRM platform and your business requirements."
      },
      {
        id: "faq-crm-3",
        question: "Can CRM automation improve lead management?",
        answer: "Yes. CRM automation can help organize incoming leads, assign them to suitable sales representatives, apply qualification criteria, and trigger timely follow-ups. This helps teams manage inquiries more consistently and maintain better visibility into their sales pipeline."
      },
      {
        id: "faq-crm-4",
        question: "Can CRM automation integrate with my website and other applications?",
        answer: "Yes. CRM systems can integrate with websites, email platforms, marketing tools, customer support applications, and other business software through supported APIs and connectors. Integration capabilities depend on the selected CRM and connected applications."
      },
      {
        id: "faq-crm-5",
        question: "Can CRM automation send automatic emails and follow-up reminders?",
        answer: "Yes. CRM workflows can trigger email notifications, reminders, and follow-up tasks based on predefined conditions, customer activity, and sales pipeline stages. The available features depend on the platform and its subscription level."
      },
      {
        id: "faq-crm-6",
        question: "Can CRM automation reduce duplicate and inaccurate customer records?",
        answer: "CRM automation can support data validation, duplicate detection, standardized fields, and record synchronization. However, it cannot guarantee completely accurate data without appropriate configuration, reliable information sources, and regular data maintenance."
      },
      {
        id: "faq-crm-7",
        question: "Which CRM platforms can you automate?",
        answer: "CRM automation can be developed around platforms such as Salesforce, HubSpot, and Microsoft Dynamics 365, depending on your requirements. Other CRM systems may also support automation through their available APIs, integrations, and workflow features."
      },
      {
        id: "faq-crm-8",
        question: "How do you measure CRM automation performance?",
        answer: "Performance can be evaluated through lead response times, follow-up completion rates, data accuracy, duplicate records, sales activity, pipeline progression, and workflow execution results. The most useful metrics depend on your CRM objectives and existing sales processes."
      }
    ]
  },
  cta: {
    heading: "Make Customer Management Easier With CRM Automation",
    description: "Simplify customer management and organize your sales operations with automation designed around your business needs. From lead assignment and automated follow-ups to CRM integrations, data synchronization, and pipeline management, let's build workflows that help your team work more efficiently.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};