import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const CUSTOM_AI_SOLUTIONS_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Custom AI Solutions & Enterprise RAG Development | Brivya Solutions",
    description: "Develop custom AI applications, retrieval-augmented generation (RAG), predictive machine learning models, and intelligent document processing systems.",
  },
  hero: {
    serviceTitle: "Custom AI Solutions",
    heading: "Build Custom AI Solutions Around Your Unique Business Needs",
    description: "Transform the way your business works with AI solutions designed around your specific requirements. We develop customized AI applications that combine intelligent models, business data, and software integrations to solve practical business challenges. From intelligent data processing and predictive analytics to document automation and custom AI-powered applications, our solutions focus on your operational needs and business objectives.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/ai-automation/custom-ai-hero-illustration.png",
    imageAlt: "Custom Enterprise AI Architecture and Model Integration Illustration",
  },
  mainFeaturedCard: {
    tag: "Bespoke Intelligence",
    heading: "Custom AI Development Built Around Your Business Challenges",
    paragraphs: [
      "Every business has different operational requirements, data sources, and technical challenges. Standard AI tools may not always provide the functionality or integration needed for specialized business processes. We develop custom AI solutions that combine suitable AI models, knowledge retrieval, data processing, and application integrations to address these requirements. From developing intelligent applications and analyzing business data to automating specialized tasks and building AI-powered features, we focus on selecting the right technologies for each use case. Our approach considers business objectives, technical feasibility, data requirements, system compatibility, and ongoing performance."
    ]
  },
  supportingCards: {
    heading: "Tailored Artificial Intelligence Capabilities",
    subtitle: "Custom model orchestration, proprietary data retrieval, and secure deployment across business infrastructure.",
    card2IllustrationPath: "/images/services/ai-automation/custom-ai-rag-knowledge.png",
    card2IllustrationAlt: "Retrieval-Augmented Generation (RAG) and Internal Knowledge Integration",
    card3IllustrationPath: "/images/services/ai-automation/custom-ai-document-processing.png",
    card3IllustrationAlt: "Intelligent Document Classification and AI Data Extraction Flow",
    items: [
      {
        index: "01",
        title: "Custom AI Application Development",
        description: "Develop AI-powered applications designed around your business requirements. We build solutions that incorporate language models, intelligent processing, and application-specific functionality to support specialized business operations and customer experiences.",
      },
      {
        index: "02",
        title: "Business Knowledge & RAG Solutions",
        description: "Connect AI applications with your internal business information through retrieval-augmented generation (RAG). We configure knowledge sources, document retrieval, and contextual responses to help AI systems provide information based on relevant company data.",
      },
      {
        index: "03",
        title: "Machine Learning & Predictive Analytics",
        description: "Use machine learning models to analyze business data and identify meaningful patterns. We develop suitable solutions for forecasting, classification, customer analysis, and prediction based on available datasets and clearly defined business objectives.",
      },
      {
        index: "04",
        title: "Intelligent Document & Data Processing",
        description: "Simplify the handling of business documents and unstructured information through AI-powered processing. We develop solutions for document classification, information extraction, text analysis, and structured data conversion using suitable AI and OCR technologies.",
      },
      {
        index: "05",
        title: "Custom AI Integration & Deployment",
        description: "Connect custom AI applications with your existing business systems and software. We implement suitable APIs, databases, cloud services, and application integrations to support information exchange, workflow execution, and practical deployment.",
      },
      {
        index: "06",
        title: "AI Evaluation, Security & Optimization",
        description: "Build AI solutions with appropriate testing and operational controls. We evaluate output quality, test real-world scenarios, review data handling, configure access controls, and monitor performance to identify opportunities for improvement.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Custom AI Development Technologies",
    description: "Official developer guides and enterprise documentation on foundation models, RAG pipelines, and AI governance frameworks.",
    items: [
      {
        id: "res-openai-filesearch-custom",
        title: "OpenAI File Search",
        description: "Explore knowledge retrieval from business documents and connected files.",
        url: "https://developers.openai.com/api/docs/guides/tools-file-search",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/openai-badge-03.png",
        badgeImageAlt: "OpenAI File Search RAG Documentation Badge"
      },
      {
        id: "res-openai-functions-custom",
        title: "OpenAI Function Calling",
        description: "Learn how AI applications interact with external tools and business systems.",
        url: "https://developers.openai.com/api/docs/guides/function-calling",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/openai-badge-02.png",
        badgeImageAlt: "OpenAI Function Calling and Tool Integration Badge"
      },
      {
        id: "res-google-genai",
        title: "Google Cloud Generative AI Development",
        description: "Explore AI application development, model customization, and evaluation.",
        url: "https://docs.cloud.google.com/docs/ai-ml/generative-ai/develop-generative-ai-application",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/ai-automation/google-genai-badge.png",
        badgeImageAlt: "Google Cloud Generative AI Development Badge"
      },
      {
        id: "res-google-vertex",
        title: "Google Cloud Vertex AI",
        description: "Explore machine learning, generative AI, model deployment, and data integration.",
        url: "https://cloud.google.com/vertex-ai/docs",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/ai-automation/vertex-ai-badge.png",
        badgeImageAlt: "Google Cloud Vertex AI Platform Badge"
      },
    ]
  },
  faq: {
    heading: "Common Questions About Custom AI Solutions",
    items: [
      {
        id: "faq-cai-1",
        question: "What are custom AI solutions?",
        answer: "Custom AI solutions are applications and systems developed or configured to address specific business requirements. They can combine existing AI models, machine learning, business data, integrations, and custom software functionality to support specialized tasks and workflows."
      },
      {
        id: "faq-cai-2",
        question: "What types of custom AI solutions can you develop?",
        answer: "Depending on business requirements, solutions can include intelligent applications, knowledge-based systems, predictive analytics, document processing, data analysis, recommendation systems, and AI-powered workflow automation. The appropriate technology depends on the intended use case and available data."
      },
      {
        id: "faq-cai-3",
        question: "Do I need a custom-trained AI model for my business?",
        answer: "Not necessarily. Many business requirements can be addressed using existing AI models combined with custom instructions, retrieval systems, and application integrations. Model fine-tuning or specialized machine learning development may be appropriate when testing demonstrates that existing approaches do not meet the required performance."
      },
      {
        id: "faq-cai-4",
        question: "Can custom AI solutions use my company's internal data?",
        answer: "Yes. AI applications can connect with approved business documents, databases, product information, and other internal knowledge sources. Technologies such as retrieval-augmented generation allow applications to retrieve relevant information and use it when generating responses."
      },
      {
        id: "faq-cai-5",
        question: "Can custom AI applications integrate with my existing software?",
        answer: "Yes, where suitable APIs, connectors, or integration methods are available. Custom AI applications can connect with CRM platforms, databases, websites, business applications, and internal systems to retrieve information and perform authorized operations."
      },
      {
        id: "faq-cai-6",
        question: "How secure are custom AI solutions?",
        answer: "Security depends on the application architecture, selected AI providers, data handling practices, deployment environment, and access controls. Appropriate safeguards can include authentication, permission management, encryption, data protection controls, and monitoring based on business requirements."
      },
      {
        id: "faq-cai-7",
        question: "How long does it take to develop a custom AI solution?",
        answer: "Development time depends on the complexity of the application, data preparation requirements, integration scope, model selection, and testing needs. A focused AI application may require considerably less development work than a specialized enterprise system with multiple integrations."
      },
      {
        id: "faq-cai-8",
        question: "How do you measure the performance of custom AI solutions?",
        answer: "Performance is evaluated using metrics relevant to the application, including output accuracy, prediction quality, task completion, processing time, error rates, and operating costs. Testing against representative business data and real-world scenarios helps determine whether the solution meets its intended objectives."
      }
    ]
  },
  cta: {
    heading: "Turn Your Business Challenges Into Custom AI Solutions",
    description: "Build intelligent applications designed to address your actual business requirements. From custom AI development and knowledge-based systems to predictive analytics, document processing, and system integrations, let's identify the right AI approach for your business.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};