/**
 * BRIVYA SOLUTIONS — SAAS PRODUCT DEVELOPMENT CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface LifecyclePhase {
  readonly phase: string;
  readonly title: string;
  readonly description: string;
}

export interface SaasProductsContentConfig {
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
  readonly challengesIntro: {
    readonly heading: string;
    readonly paragraph: string;
  };
  readonly challenges: {
    readonly challenge1: {
      readonly index: string;
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
    };
    readonly challenge2: {
      readonly index: string;
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly challenge3: {
      readonly index: string;
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
    };
  };
  readonly lifecycle: {
    readonly heading: string;
    readonly subtitle: string;
    readonly phases: readonly LifecyclePhase[];
  };
  readonly faq: {
    readonly heading: string;
    readonly items: readonly FaqItem[];
  };
  readonly cta: {
    readonly heading: string;
    readonly description: string;
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
  };
}

export const SAAS_PRODUCTS_CONTENT: SaasProductsContentConfig = {
  seo: {
    title: "SaaS Product Development | Brivia Solutions",
    description:
      "From your first product idea to a platform ready for paying customers. MVP development, user management, and scalable cloud architectures.",
  },
  hero: {
    heading: "SaaS Product Development",
    tagline: "From your first product idea to a platform ready for paying customers.",
    description:
      "Building a SaaS product takes more than getting the features right. You need a clear starting point, a smooth experience for new customers, and a system that can evolve as your business grows. At Brivia Solutions, we help founders and businesses develop SaaS products with the essentials in place—from user onboarding and subscription management to product administration and long-term growth.",
    imagePath: "/images/services/web-development/saas-product-illustration.png",
    imageAlt: "Brivia Solutions SaaS Product Development Architecture Illustration",
  },
  challengesIntro: {
    heading: "Building a SaaS Product Comes With Real Challenges",
    paragraph:
      "Transforming a software concept into a profitable business requires strategic engineering. From scoping an actionable MVP to managing recurring subscriptions and data isolation, we help you overcome the friction points that stall digital products.",
  },
  challenges: {
    challenge1: {
      index: "01",
      heading: "Too Many Features, No Clear Starting Point",
      description:
        "You have a product idea, but deciding what to build first can be difficult. We help identify the features your first version actually needs, so you can get your product in front of users without spending months building things they may never use.",
      highlight: "Disciplined MVP scoping focused on core market validation.",
    },
    challenge2: {
      index: "02",
      heading: "Managing Users, Plans & Payments",
      description:
        "As customers sign up, managing subscriptions, permissions, and account access becomes more complicated. We build these essential systems into your product, making it easier for customers to get started and for you to manage your business.",
      highlight: "Automated billing pipelines and role-based access control.",
      illustrationPath: "/images/services/web-development/saas-metrics-illustration.png",
      illustrationAlt: "SaaS Subscription Management & User Telemetry Architecture",
    },
    challenge3: {
      index: "03",
      heading: "Building for Tomorrow, Not Just Launch Day",
      description:
        "A product that works for your first customers should not become an obstacle as more people join. We plan for growth from the beginning, making it easier to expand features, manage customer accounts, and support increasing demand.",
      highlight: "Extensible multi-tenant architecture built for scale.",
    },
  },
  lifecycle: {
    heading: "How We Bring Your SaaS Product to Life",
    subtitle: "A proven, three-phase engineering framework from concept to market expansion.",
    phases: [
      {
        phase: "Phase 01",
        title: "Plan the Right First Version",
        description:
          "We start with your product idea, target audience, and business model. Together, we define the features that matter most and establish a clear development plan.",
      },
      {
        phase: "Phase 02",
        title: "Build & Prepare for Launch",
        description:
          "From customer accounts and subscriptions to the product's main features, we develop and test the essentials needed for a functional, reliable launch.",
      },
      {
        phase: "Phase 03",
        title: "Improve as You Grow",
        description:
          "Once your product reaches real users, their feedback helps shape what comes next. We can refine existing features, improve the experience, and develop new capabilities as your business evolves.",
      },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "faq-1",
        question: "I have a SaaS idea but no technical background. Can you help?",
        answer:
          "Yes. You don't need a technical specification to get started. Tell us what problem your product solves and who it's for. We'll help turn that idea into a practical development plan.",
      },
      {
        id: "faq-2",
        question: "Can we start with an MVP instead of building everything at once?",
        answer:
          "Absolutely. Starting with a minimum viable product lets you focus on the most important features, introduce the product to real users, and make informed decisions about future development.",
      },
      {
        id: "faq-3",
        question: "Can my SaaS product support monthly and yearly subscriptions?",
        answer:
          "Yes. We can integrate subscription billing with options such as monthly plans, annual plans, free trials, and upgrades, depending on your business model and payment provider.",
      },
      {
        id: "faq-4",
        question: "Can you improve an existing SaaS product?",
        answer:
          "Yes. If your product is already live, we can review its current structure, address limitations, and help develop new features without automatically recommending a complete rebuild.",
      },
    ],
  },
  cta: {
    heading: "Let's Build a SaaS Product Worth Bringing to Market",
    description:
      "Whether you're starting with an idea or improving an existing platform, we'll help you plan the next stage and understand what it takes to bring your product to life.",
    primaryButtonText: "Contact Us",
    secondaryButtonText: "Book a Consultation",
  },
} as const;