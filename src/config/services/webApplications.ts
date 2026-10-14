/**
 * BRIVYA SOLUTIONS — FULL-STACK WEB APPLICATIONS CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface WebApplicationsContentConfig {
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
  readonly introduction: {
    readonly heading: string;
    readonly paragraph: string;
  };
  readonly cards: {
    readonly card1: {
      readonly index: string;
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
    };
    readonly card2: {
      readonly index: string;
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly card3: {
      readonly index: string;
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
    };
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

export const WEB_APPLICATIONS_CONTENT: WebApplicationsContentConfig = {
  seo: {
    title: "Full-Stack Web Applications | Brivya Solutions",
    description:
      "Powerful web applications built around the way your business works. Consolidate workflows, dashboards, and role-based user management.",
  },
  hero: {
    heading: "Full-Stack Web Applications",
    tagline: "Powerful applications built around the way your business works.",
    description:
      "Managing operations across spreadsheets, emails, and disconnected tools can slow everything down. We build full-stack web applications that bring your workflows, users, and business data together in one place. From the interface your team works with to the systems running behind it, every part is developed to support how your business actually operates.",
    imagePath: "/images/services/web-development/web-applications-illustration.png",
    imageAlt: "Brivya Solutions Full-Stack Web Applications Architecture Illustration",
  },
  introduction: {
    heading: "What We Help You Solve",
    paragraph:
      "When business processes outgrow generic off-the-shelf software, companies face operational bottlenecks and fragmented data. We engineer bespoke full-stack applications that replace manual workarounds with unified, cloud-native platforms tailored directly to your team's operational flow.",
  },
  cards: {
    card1: {
      index: "01",
      heading: "Disconnected Workflows",
      description:
        "When information is spread across multiple tools, even simple tasks become difficult to manage. We develop web applications that bring your daily operations into one organized system, reducing unnecessary steps and keeping work moving.",
      highlight: "Unified systems that eliminate operational drag.",
    },
    card2: {
      index: "02",
      heading: "Limited Business Visibility",
      description:
        "It's difficult to make decisions when updates and records are scattered. We build interactive dashboards that give your team a clearer view of important data, ongoing activities, and business performance.",
      highlight: "Real-time decision intelligence across all metrics.",
      illustrationPath: "/images/services/web-development/dashboard-visibility-illustration.png",
      illustrationAlt: "Interactive Data Dashboard & Performance Visibility Illustration",
    },
    card3: {
      index: "03",
      heading: "Complex User Management",
      description:
        "Your employees, managers, and customers don't all need the same information. We create secure, role-based applications where each user can access the features and data relevant to them.",
      highlight: "Strict role-based access control and tenant isolation.",
    },
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "faq-1",
        question: "Can you build an application around our existing business process?",
        answer:
          "Yes. We start by understanding how your team works, where problems occur, and what the application needs to handle. The goal is to build something that fits your operations rather than forcing you to change them.",
      },
      {
        id: "faq-2",
        question: "Can different users have separate dashboards and permissions?",
        answer:
          "Absolutely. We can create dedicated workspaces for administrators, employees, and customers, with access controlled according to their roles and responsibilities.",
      },
      {
        id: "faq-3",
        question: "Can we add more features as our business grows?",
        answer:
          "Yes. We plan the application structure with future requirements in mind, making it easier to introduce new features, user roles, and workflows without unnecessarily rebuilding the existing system.",
      },
    ],
  },
  cta: {
    heading: "Have a Process That Needs a Better System?",
    description:
      "Tell us what your team is struggling with. We'll help you work out what a practical web application should do and where to start.",
    primaryButtonText: "Contact Us",
    secondaryButtonText: "Book a Consultation",
  },
} as const;