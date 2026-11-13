import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const PROCESS_AUTOMATION_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Business Process Automation (BPA & RPA) | Brivya Solutions",
    description: "Streamline enterprise operations with intelligent process automation, robotic process automation (RPA), automated approvals, and API workflows.",
  },
  hero: {
    serviceTitle: "Business Process Automation",
    heading: "Streamline Your Business Operations With Intelligent Process Automation",
    description: "Simplify repetitive tasks and improve operational efficiency with automated business workflows. We develop automation solutions that connect your business applications, streamline information processing, and manage routine operations. From data entry and document processing to approvals and system integrations, our solutions are designed around your existing business processes.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/ai-automation/process-hero-illustration.png",
    imageAlt: "Intelligent Process Automation and Digital Workflow Illustration",
  },
  mainFeaturedCard: {
    tag: "Operational Automation",
    heading: "Business Automation Solutions Built Around Your Operational Needs",
    paragraphs: [
      "Manual processes, disconnected applications, and repetitive administrative tasks can slow down business operations and create unnecessary workloads. We develop business process automation solutions that connect systems, organize workflows, and automate defined tasks according to your operational requirements. Using workflow automation, robotic process automation (RPA), API integrations, and AI-powered tools where appropriate, we help businesses streamline activities such as data processing, document management, employee approvals, and customer information handling. Our approach focuses on understanding existing processes, identifying suitable automation opportunities, and building reliable workflows with appropriate validation and exception handling."
    ]
  },
  supportingCards: {
    heading: "End-to-End Operational Workflows",
    subtitle: "Automating structured repetitive tasks across your software stack with validation and exception handling.",
    card2IllustrationPath: "/images/services/ai-automation/process-document-data.png",
    card2IllustrationAlt: "Automated Document Processing and Data Extraction Flow",
    card3IllustrationPath: "/images/services/ai-automation/process-approval-admin.png",
    card3IllustrationAlt: "Automated Administrative and Approval Workflow Systems",
    items: [
      {
        index: "01",
        title: "Workflow Automation & Management",
        description: "Simplify business operations by connecting individual tasks into structured automated workflows. We develop processes that manage task assignments, notifications, approvals, data transfers, and follow-up actions across your business applications according to defined rules.",
      },
      {
        index: "02",
        title: "Robotic Process Automation (RPA)",
        description: "Automate repetitive computer-based tasks using software robots that interact with applications and user interfaces. We develop RPA solutions for activities such as data entry, information extraction, record updates, and transferring information between systems where suitable integrations are unavailable.",
      },
      {
        index: "03",
        title: "Document & Data Processing Automation",
        description: "Reduce manual work involved in handling business documents and information. We develop automation workflows for document classification, data extraction, information validation, and transferring structured data into relevant business systems using suitable OCR and AI technologies.",
      },
      {
        index: "04",
        title: "Business Application & API Integration",
        description: "Connect your existing software and business applications to improve information flow between systems. We integrate suitable CRM platforms, accounting applications, databases, e-commerce systems, and other business tools through available APIs and connectors.",
      },
      {
        index: "05",
        title: "Approval & Administrative Automation",
        description: "Simplify internal administrative processes through automated approval workflows and task management. We develop solutions for expense approvals, employee requests, purchase orders, leave applications, and internal notifications based on your organization's defined authorization rules.",
      },
      {
        index: "06",
        title: "Process Monitoring & Optimization",
        description: "Understand how automated workflows perform and identify opportunities for improvement. We review execution records, processing times, failed tasks, exception patterns, and workflow performance to help maintain automation reliability and support ongoing process refinement.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Leading Business Process Automation Platforms",
    description: "Official technical documentation for leading enterprise automation platforms, cloud workflows, and process mining tools.",
    items: [
      {
        id: "res-power-automate",
        title: "Microsoft Power Automate",
        description: "Explore cloud workflows, desktop automation, approvals, and application integrations.",
        url: "https://learn.microsoft.com/en-us/power-automate/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/power-automate-badge.png",
        badgeImageAlt: "Microsoft Power Automate Platform Badge"
      },
      {
        id: "res-uipath-docs",
        title: "UiPath Automation Documentation",
        description: "Learn about robotic process automation, process mining, and enterprise automation.",
        url: "https://docs.uipath.com/",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/uipath-badge.png",
        badgeImageAlt: "UiPath Enterprise Automation Documentation Badge"
      },
      {
        id: "res-zapier-guide",
        title: "Zapier Automation Guide",
        description: "Understand triggers, actions, and automated workflows between connected applications.",
        url: "https://help.zapier.com/hc/en-us/articles/8496309697421-What-is-a-Zap",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/zapier-badge.png",
        badgeImageAlt: "Zapier Connected Workflows Guide Badge"
      },
      {
        id: "res-power-desktop",
        title: "Microsoft Power Automate Desktop",
        description: "Explore desktop-based automation for repetitive tasks across applications.",
        url: "https://learn.microsoft.com/en-us/power-automate/desktop-flows/introduction",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/power-automate-desktop-badge.png",
        badgeImageAlt: "Power Automate Desktop Flows Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About Business Process Automation",
    items: [
      {
        id: "faq-bpa-1",
        question: "What is business process automation?",
        answer: "Business process automation (BPA) uses technology to perform repetitive business activities and manage workflows with minimal manual intervention. It can involve automated data processing, task assignments, document handling, approvals, and communication between business applications."
      },
      {
        id: "faq-bpa-2",
        question: "Which business processes can be automated?",
        answer: "Many structured and repetitive activities can be automated, including data entry, invoice processing, employee onboarding, customer information management, reporting, approval requests, and order processing. Suitability depends on process consistency, available data, business rules, and integration requirements."
      },
      {
        id: "faq-bpa-3",
        question: "What is the difference between BPA and RPA?",
        answer: "Business process automation focuses on automating broader business workflows, which may involve multiple systems and departments. Robotic process automation focuses on using software robots to perform repetitive tasks through application interfaces. RPA can therefore be one component of a broader BPA solution."
      },
      {
        id: "faq-bpa-4",
        question: "Can business automation integrate with my existing software?",
        answer: "Yes. Business automation solutions can connect with existing software through supported APIs, connectors, and other integration methods. The available integration options depend on your applications, authentication requirements, and technical environment."
      },
      {
        id: "faq-bpa-5",
        question: "Can automation reduce manual errors in business operations?",
        answer: "Automation can reduce certain manual errors by applying consistent rules, validation checks, and structured data processing. However, inaccurate source information, incorrect workflow configurations, and integration failures can still produce errors. Testing and monitoring remain important."
      },
      {
        id: "faq-bpa-6",
        question: "Is business process automation suitable for small businesses?",
        answer: "Yes. Small businesses can automate suitable activities such as lead management, customer notifications, appointment scheduling, invoice handling, and administrative workflows. Automation scope can be tailored to available resources, operational complexity, and business requirements."
      },
      {
        id: "faq-bpa-7",
        question: "How do you identify which business processes should be automated?",
        answer: "We evaluate repetitive tasks, processing frequency, time requirements, existing workflows, exception rates, and integration possibilities. Processes with clear rules and consistent inputs are often suitable starting points. We also consider business impact, implementation complexity, and ongoing maintenance requirements."
      },
      {
        id: "faq-bpa-8",
        question: "How do you measure the success of business process automation?",
        answer: "Performance can be measured through processing time, task completion rates, error frequency, manual intervention, workflow failures, and operational costs. Comparing these measures before and after implementation helps assess whether automation is delivering the intended business improvements."
      }
    ]
  },
  cta: {
    heading: "Make Your Business Processes More Efficient With Automation",
    description: "Reduce repetitive work and simplify daily operations with automation solutions designed around your business requirements. From workflow management and RPA to document processing and application integrations, let's identify the right opportunities to streamline your operations and improve how your business works.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};