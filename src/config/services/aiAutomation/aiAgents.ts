import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const AI_AGENTS_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Autonomous AI Agent Development | Multi-Agent Systems | Brivya Solutions",
    description: "Develop intelligent autonomous AI agents that understand instructions, execute multi-step tool calls, and automate complex business operations.",
  },
  hero: {
    serviceTitle: "AI Agent Development",
    heading: "Develop Intelligent AI Agents That Automate Your Business Workflows",
    description: "Build custom AI agents that can understand instructions, use connected tools, and complete defined business tasks. We develop intelligent agent systems that combine AI models, APIs, business data, and workflow automation to help businesses manage operations, reduce repetitive work, and improve how tasks are handled.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/ai-automation/agents-hero-illustration.png",
    imageAlt: "Autonomous AI Agent Orchestration Architecture Illustration",
  },
  mainFeaturedCard: {
    tag: "Agentic Engineering",
    heading: "Custom AI Agents Designed Around Your Business Operations",
    paragraphs: [
      "Modern businesses need more than AI systems that simply generate responses. They need intelligent solutions that can process requests, retrieve information, interact with business applications, and perform defined tasks. We develop custom AI agents that combine language models, tool integrations, workflow orchestration, and business-specific instructions. From automating internal processes and managing data to coordinating multiple tasks across connected systems, our solutions are designed around your operational requirements, with appropriate permissions, validation, and human approval where needed."
    ]
  },
  supportingCards: {
    heading: "Autonomous Capabilities & Tool Integration",
    subtitle: "Orchestrating agent decision-making, state memory, and human-in-the-loop checkpoints.",
    card2IllustrationPath: "/images/services/ai-automation/agents-workflow-automation.png",
    card2IllustrationAlt: "Multi-Step Agent Workflow and API Decision Trees",
    card3IllustrationPath: "/images/services/ai-automation/agents-multi-orchestration.png",
    card3IllustrationAlt: "Multi-Agent System Orchestration and Task Delegation",
    items: [
      {
        index: "01",
        title: "Custom AI Agent Development",
        description: "Build AI agents designed specifically for your business requirements and operational goals. We configure models, instructions, tools, and decision-making workflows to help agents handle defined tasks, process information, and interact with connected applications.",
      },
      {
        index: "02",
        title: "AI Agent Workflow Automation",
        description: "Automate repetitive and multi-step business processes using intelligent agents. We develop workflows that can process requests, retrieve information, perform defined actions, and move tasks between connected systems according to your business rules.",
      },
      {
        index: "03",
        title: "AI Agent API & System Integration",
        description: "Connect AI agents with your existing business applications and databases through supported APIs and integrations. Depending on your systems, agents can retrieve customer information, update approved records, access business tools, and execute authorized operations.",
      },
      {
        index: "04",
        title: "Multi-Agent Systems & Orchestration",
        description: "Develop multiple specialized AI agents that collaborate to complete complex workflows. We design agent coordination, task delegation, sequential processing, and communication between specialized agents to support operations that require multiple capabilities.",
      },
      {
        index: "05",
        title: "AI Agent Memory & Knowledge Management",
        description: "Help AI agents maintain relevant context and access business information during their workflows. We implement suitable memory mechanisms, conversation state management, and knowledge retrieval to support context-aware interactions and more consistent task execution.",
      },
      {
        index: "06",
        title: "AI Agent Security, Testing & Monitoring",
        description: "Build agents with appropriate access controls, validation, and operational oversight. We test agent behavior, evaluate tool usage, monitor workflow execution, and configure human approval checkpoints for sensitive actions and business-critical operations.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore AI Agent Development Frameworks & Documentation",
    description: "Access official developer documentation from leading AI labs on autonomous agent architectures, function calling, and multi-agent systems.",
    items: [
      {
        id: "res-openai-building-agents",
        title: "OpenAI — Building Agents",
        description: "Explore agent architecture, tools, orchestration, and guardrails.",
        url: "https://developers.openai.com/tracks/building-agents",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/openai-badge-01.png",
        badgeImageAlt: "OpenAI Building Agents Architecture Badge"
      },
      {
        id: "res-google-adk",
        title: "Google — Agent Development Kit (ADK)",
        description: "Learn to build, evaluate, and deploy single-agent and multi-agent systems.",
        url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/adk",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/google-adk-badge.png",
        badgeImageAlt: "Google Cloud Agent Development Kit Badge"
      },
      {
        id: "res-ms-agent-framework",
        title: "Microsoft — Agent Framework",
        description: "Explore agent development, memory, integrations, workflows, and human approval.",
        url: "https://learn.microsoft.com/en-us/agent-framework/",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/ms-agent-framework-badge.png",
        badgeImageAlt: "Microsoft Agent Framework Architecture Badge"
      },
      {
        id: "res-anthropic-agents",
        title: "Anthropic — Building Effective AI Agents",
        description: "Explore practical agent architectures and multi-agent design patterns.",
        url: "https://resources.anthropic.com/building-effective-ai-agents",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/anthropic-badge.png",
        badgeImageAlt: "Anthropic Building Effective AI Agents Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About AI Agent Development",
    items: [
      {
        id: "faq-ag-1",
        question: "What is AI agent development?",
        answer: "AI agent development involves creating intelligent software systems that can understand instructions, use available tools, retrieve information, and perform defined tasks. These systems combine AI models with application logic, integrations, and workflows to support specific business operations."
      },
      {
        id: "faq-ag-2",
        question: "What is the difference between an AI agent and an AI chatbot?",
        answer: "An AI chatbot primarily focuses on conversational interactions, such as answering questions and providing information. An AI agent can go further by using connected tools, accessing business systems, making decisions within defined boundaries, and executing multi-step tasks."
      },
      {
        id: "faq-ag-3",
        question: "Can AI agents automate my existing business processes?",
        answer: "Yes. AI agents can support business processes that involve structured information, repeatable decisions, and suitable application integrations. Examples include processing inquiries, organizing records, generating reports, retrieving information, and coordinating internal workflows."
      },
      {
        id: "faq-ag-4",
        question: "Can AI agents integrate with my existing software and applications?",
        answer: "Yes, where suitable APIs, connectors, or integration methods are available. AI agents can connect with CRM platforms, databases, business applications, project management tools, and other systems to retrieve information and perform authorized actions."
      },
      {
        id: "faq-ag-5",
        question: "What is a multi-agent AI system?",
        answer: "A multi-agent system uses multiple specialized AI agents that collaborate or delegate tasks to complete a larger objective. For example, one agent can gather information, another can analyze it, and a third can prepare a structured result. The workflow depends on the chosen architecture and task requirements."
      },
      {
        id: "faq-ag-6",
        question: "Are AI agents secure for business use?",
        answer: "AI agents can be developed with access controls, authentication, tool restrictions, validation, and human approval mechanisms. Security also depends on the underlying applications, data permissions, deployment environment, and ongoing monitoring. Sensitive operations require appropriate safeguards."
      },
      {
        id: "faq-ag-7",
        question: "Can AI agents work without human supervision?",
        answer: "AI agents can perform certain defined tasks automatically, depending on their configuration and risk level. However, sensitive decisions, financial operations, and consequential changes may require human review or explicit authorization. The appropriate autonomy level should be determined for each workflow."
      },
      {
        id: "faq-ag-8",
        question: "How do you measure AI agent performance?",
        answer: "Performance can be evaluated through task completion rates, workflow success, response accuracy, tool execution reliability, processing time, error frequency, and operating costs. Testing against representative business scenarios helps identify failures and opportunities for improvement."
      }
    ]
  },
  cta: {
    heading: "Transform Your Business Processes With Intelligent AI Agents",
    description: "Make your business workflows more efficient with AI agents designed to perform meaningful tasks and work with your existing systems. From custom agent development and API integrations to multi-agent orchestration and workflow automation, let's build an intelligent solution around your business objectives.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};