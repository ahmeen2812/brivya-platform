/**
 * BRIVYA SOLUTIONS — API DEVELOPMENT & INTEGRATION CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface ApiContentConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly heading: string;
    readonly tagline: string;
    readonly description: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly whatWeDoIntro: {
    readonly heading: string;
    readonly paragraph: string;
    readonly featuredCard: {
      readonly tag: string;
      readonly heading: string;
      readonly question: string;
      readonly paragraph: string;
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
  };
  readonly cards: {
    readonly card2: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraph: string;
      readonly highlight: string;
    };
    readonly card3: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraph: string;
      readonly highlight: string;
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly card4: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraph: string;
      readonly highlight: string;
    };
  };
  readonly faq: {
    readonly heading: string;
    readonly items: readonly FaqItem[];
  };
  readonly cta: {
    readonly heading: string;
    readonly descriptionLead: string;
    readonly descriptionBody: string;
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
  };
}

export const API_INTEGRATION_CONTENT: ApiContentConfig = {
  seo: {
    title: "API Development & Integration | Brivya Solutions",
    description:
      "Not just connected. Working as they should. Custom REST and GraphQL API development, third-party integrations, and automated data synchronization.",
  },
  hero: {
    heading: "API Development & Integration",
    tagline: "Not Just Connected. Working as They Should.",
    description:
      "When your systems don't share information properly, even simple tasks become complicated. We develop custom APIs and integrate third-party services to help your systems exchange accurate data, communicate reliably, and work together the way your business needs them to.",
    imagePath: "/images/services/web-development/api-hero-illustration.png",
    imageAlt: "Brivya Solutions API Architecture & Gateway Illustration",
  },
  whatWeDoIntro: {
    heading: "The Right API. The Right Connection.",
    paragraph:
      "From developing new APIs to fixing unreliable integrations, we focus on connections that solve real problems and remain manageable as your needs change.",
    featuredCard: {
      tag: "Featured Capability — Custom API Development",
      heading: "Build an API Your Business Can Rely On",
      question: "Need to give another application, internal system, or business partner access to your data?",
      paragraph:
        "We design and develop custom APIs with well-defined endpoints, secure authentication, consistent responses, and clear documentation. Every API is planned around how it will actually be used, so your team can build on it without unnecessary complications.",
      illustrationPath: "/images/services/web-development/custom-api-illustration.png",
      illustrationAlt: "Custom API Endpoint Architecture Illustration",
    },
  },
  cards: {
    card2: {
      index: "0",
      title: "Third-Party API Integration",
      heading: "Make Your Existing Platforms Work Together",
      paragraph:
        "Connect your CRM, ERP, payment provider, or other third-party services through carefully planned integrations. We work with each platform's API requirements to keep important information moving between the systems you depend on.",
      highlight: "Seamless data exchange across disparate tools.",
    },
    card3: {
      index: "03",
      title: "API Data Synchronization",
      heading: "Keep Your Data Consistent Across Systems",
      paragraph:
        "Two connected platforms don't always show the same information. We design API-based data synchronization that defines how records are matched, updated, and validated, helping reduce duplicate entries and conflicting information.",
      highlight: "Deterministic data matching and automated synchronization.",
      illustrationPath: "/images/services/web-development/api-sync-illustration.png",
      illustrationAlt: "Real-Time API Data Synchronization & Webhooks Illustration",
    },
    card4: {
      index: "04",
      title: "API Testing & Reliability",
      heading: "Connections Shouldn't Fail Without an Explanation",
      paragraph:
        "An API may work perfectly during testing and still encounter problems in everyday use. We address error handling, request limits, failed events, and compatibility issues to make integrations easier to troubleshoot and maintain.",
      highlight: "Resilient error boundaries, retry loops, and rate-limit handling.",
    },
  },
  faq: {
    heading: "Questions Worth Asking Before You Connect Anything",
    items: [
      {
        id: "faq-1",
        question: "01. Can you integrate our existing software with another platform?",
        answer:
          "Yes, provided the systems offer suitable integration methods and the required access is available. We first review their APIs, technical limitations, and the information you need to exchange before recommending how to connect them.",
      },
      {
        id: "faq-2",
        question: "02. Can you work with an API that's already been developed?",
        answer:
          "Yes. An existing API doesn't necessarily need to be rebuilt. We can review its structure, documentation, and current behavior to identify whether it needs additional endpoints, improvements, or a new integration.",
      },
      {
        id: "faq-3",
        question: "03. Can information update automatically between two systems?",
        answer:
          "Yes, depending on what each platform supports. Some APIs provide event-based updates through webhooks, while others require scheduled synchronization. We'll identify the most suitable method and explain any limitations on update speed.",
      },
      {
        id: "faq-4",
        question: "04. What happens if a third-party API stops working?",
        answer:
          "Temporary outages, request limits, and API changes are real possibilities. Depending on the integration, we can implement logging, controlled retries, and error handling to help identify problems and recover from interruptions.",
      },
      {
        id: "faq-5",
        question: "05. How do you prevent duplicate or incorrect data?",
        answer:
          "We begin by defining which system owns each piece of information and how records should be matched. We then apply appropriate validation, data mapping, and duplicate-handling measures. Existing data issues may need separate cleanup.",
      },
      {
        id: "faq-6",
        question: "06. Will we receive documentation for our API?",
        answer:
          "We can include endpoint references, authentication details, request and response examples, and integration instructions in the project deliverables. The documentation scope is agreed upon before development so your team knows exactly what it will receive.",
      },
    ],
  },
  cta: {
    heading: "Tell Us What Needs to Connect. We'll Help You Work Out the Rest.",
    descriptionLead: "You don't need a complete technical specification to start the conversation.",
    descriptionBody:
      "Tell us which systems you're working with, what data needs to move, or where your current integration is falling short. We'll discuss what's possible, what needs attention, and how to approach the connection properly.",
    primaryButtonText: "Contact Us",
    secondaryButtonText: "Book a Consultation",
  },
} as const;