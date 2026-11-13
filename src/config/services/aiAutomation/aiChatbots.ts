import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const AI_CHATBOTS_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "AI Chatbots & Virtual Assistants Development | Brivya Solutions",
    description: "Build smarter conversational AI chatbots and knowledge assistants that automate customer support, qualify leads, and connect to internal workflows.",
  },
  hero: {
    serviceTitle: "AI Chatbots & AI Assistants",
    heading: "Build Smarter AI Chatbots & AI Assistants for Your Business",
    description: "Improve customer interactions and simplify everyday business tasks with AI-powered chatbots and assistants. We develop conversational AI solutions that answer customer questions, provide business information, qualify leads, and support automated workflows. Each solution is designed around your business needs, available data, and existing systems.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/ai-automation/chatbots-hero-illustration.png",
    imageAlt: "AI Chatbots and Virtual Assistants Interface Illustration",
  },
  mainFeaturedCard: {
    tag: "Conversational Architecture",
    heading: "AI Assistants Built Around Your Business Needs",
    paragraphs: [
      "Modern customers expect quick answers, relevant information, and convenient ways to complete tasks. We develop AI chatbots and assistants that combine conversational AI, business knowledge, and system integrations to support these expectations. From answering product questions and qualifying leads to retrieving information and automating defined workflows, our solutions are designed around practical business requirements. We focus on useful functionality, accurate information retrieval, controlled integrations, and clear options for human assistance when needed."
    ]
  },
  supportingCards: {
    heading: "Intelligent Conversational Capabilities",
    subtitle: "Enterprise conversational systems built around approved business data and secure system integrations.",
    card2IllustrationPath: "/images/services/ai-automation/chatbots-knowledge-assistant.png",
    card2IllustrationAlt: "Knowledge Retrieval and Enterprise RAG Assistant Architecture",
    card3IllustrationPath: "/images/services/ai-automation/chatbots-multichannel-assistant.png",
    card3IllustrationAlt: "Multichannel Conversational Deployment Across Web and Messaging",
    items: [
      {
        index: "01",
        title: "AI Customer Support Chatbots",
        description: "Provide customers with answers to common questions about your products, services, and policies. We develop AI chatbots that use your approved business information to respond to inquiries, guide support requests, and direct unresolved issues to the appropriate team.",
      },
      {
        index: "02",
        title: "Knowledge-Based AI Assistants",
        description: "Make your business information easier to access through AI-powered knowledge assistants. We connect relevant documents, FAQs, product information, and internal resources so assistants can retrieve relevant content and provide responses based on your available business knowledge.",
      },
      {
        index: "03",
        title: "AI Sales & Lead Qualification Assistants",
        description: "Support your sales process by engaging potential customers and understanding their requirements. AI assistants can ask qualifying questions, collect contact information, answer service inquiries, and connect with supported CRM systems to help organize incoming leads.",
      },
      {
        index: "04",
        title: "AI Workflow & Task Automation Assistants",
        description: "Connect conversational AI with your existing business applications to support repetitive tasks. Depending on available integrations, assistants can retrieve information, create support tickets, update approved records, generate summaries, and trigger defined business workflows.",
      },
      {
        index: "05",
        title: "AI Voice & Multichannel Assistants",
        description: "Extend AI-powered conversations across supported communication channels. We develop voice and messaging assistants that can process customer inquiries, provide business information, and guide users through relevant interactions using suitable AI and communication technologies.",
      },
      {
        index: "06",
        title: "AI Integration, Testing & Optimization",
        description: "Make sure your AI assistant works reliably within your business environment. We configure knowledge sources, connect approved tools, test common and complex questions, evaluate response quality, and refine assistant behavior based on performance and user feedback.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore AI Chatbot & Assistant Development Platforms",
    description: "Official developer platforms, API documentation, and technical frameworks for building reliable conversational AI agents.",
    items: [
      {
        id: "res-openai-agents",
        title: "OpenAI Building Agents",
        description: "Explore AI agent development, tool integration, and workflow automation.",
        url: "https://developers.openai.com/tracks/building-agents",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/openai-badge-01.png",
        badgeImageAlt: "OpenAI Agents Documentation Badge"
      },
      {
        id: "res-openai-functions",
        title: "OpenAI Function Calling",
        description: "Learn how AI models connect with external applications and execute defined functions.",
        url: "https://developers.openai.com/api/docs/guides/function-calling",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/openai-badge-02.png",
        badgeImageAlt: "OpenAI Function Calling Feature Badge"
      },
      {
        id: "res-openai-filesearch",
        title: "OpenAI File Search",
        description: "Understand how AI assistants retrieve relevant information from connected documents and knowledge bases.",
        url: "https://developers.openai.com/api/docs/guides/tools-file-search",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/openai-badge-03.png",
        badgeImageAlt: "OpenAI File Search Retrieval Badge"
      },
      {
        id: "res-dialogflow",
        title: "Google Cloud Dialogflow CX",
        description: "Explore conversational AI development for text-based and voice-based virtual agents.",
        url: "https://docs.cloud.google.com/dialogflow/cx/docs",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/dialogflow-badge.png",
        badgeImageAlt: "Dialogflow CX Virtual Agents Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About AI Chatbots & AI Assistants",
    items: [
      {
        id: "faq-cb-1",
        question: "What is the difference between an AI chatbot and an AI assistant?",
        answer: "An AI chatbot is primarily designed to communicate with users through a conversational interface. It can answer questions, provide information, and guide users through conversations. An AI assistant can offer broader capabilities by using connected tools, retrieving business information, and completing defined tasks through integrations."
      },
      {
        id: "faq-cb-2",
        question: "Can an AI chatbot answer questions using my company's information?",
        answer: "Yes. An AI chatbot can be connected to relevant business information, including website content, product documentation, FAQs, help-center articles, and internal knowledge resources. Retrieval-based systems can identify relevant information and use it to generate responses. Answer quality depends on the accuracy and maintenance of the connected information."
      },
      {
        id: "faq-cb-3",
        question: "Can an AI assistant integrate with my website, CRM, or business applications?",
        answer: "Yes, provided the relevant platforms support suitable integrations or APIs. An AI assistant can connect with CRM systems, customer databases, booking applications, e-commerce platforms, and internal business tools to retrieve information or execute approved actions."
      },
      {
        id: "faq-cb-4",
        question: "Can AI chatbots generate leads and qualify potential customers?",
        answer: "Yes. AI chatbots can collect information about customer needs, ask qualifying questions, explain available services, and capture contact details through configured workflows. With suitable CRM or scheduling integrations, they can also create lead records and support appointment booking."
      },
      {
        id: "faq-cb-5",
        question: "Can AI assistants automate repetitive business tasks?",
        answer: "AI assistants can support repetitive tasks when connected to suitable tools, APIs, and workflows. Examples include retrieving order information, creating support tickets, organizing inquiries, generating summaries, and updating approved records. Sensitive operations should include appropriate authorization and validation."
      },
      {
        id: "faq-cb-6",
        question: "Can AI chatbots replace human customer support agents?",
        answer: "AI chatbots can handle suitable routine interactions, but they should not be treated as complete replacements for human support. Complex complaints, sensitive issues, and situations requiring judgment may need human assistance. A clear escalation process helps customers reach the appropriate support team."
      },
      {
        id: "faq-cb-7",
        question: "How do you improve the accuracy of AI chatbot responses?",
        answer: "Accuracy can be improved through reliable knowledge sources, clear instructions, relevant information retrieval, controlled tool access, and structured testing. We evaluate responses against representative questions and configure appropriate fallback behavior when information is unavailable."
      },
      {
        id: "faq-cb-8",
        question: "How do you measure the performance of an AI chatbot or assistant?",
        answer: "Performance can be evaluated using successful resolution rates, answer accuracy, task completion rates, lead qualification results, human escalation frequency, response times, and customer feedback. The most relevant metrics depend on the assistant's intended business function."
      }
    ]
  },
  cta: {
    heading: "Turn Everyday Conversations Into Smarter Business Experiences",
    description: "Build AI chatbots and assistants that provide useful information, support customer interactions, and simplify repetitive business processes. From customer support and lead qualification to knowledge retrieval and workflow automation, let's develop an AI solution that fits your business requirements.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};