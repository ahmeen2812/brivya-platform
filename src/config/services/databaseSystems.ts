/**
 * BRIVYA SOLUTIONS — DATABASE & BACKEND SYSTEMS CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface DatabaseContentConfig {
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
  readonly servicesIntro: {
    readonly heading: string;
    readonly paragraph: string;
    readonly featuredCard: {
      readonly tag: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
  };
  readonly cards: {
    readonly card2: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly highlight: string;
    };
    readonly card3: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly highlight: string;
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly card4: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly highlight: string;
    };
  };
  readonly faq: {
    readonly heading: string;
    readonly items: readonly FaqItem[];
  };
  readonly cta: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
  };
}

export const DATABASE_SYSTEMS_CONTENT: DatabaseContentConfig = {
  seo: {
    title: "Database & Backend Systems | Brivya Solutions",
    description:
      "A reliable backend starts with the right decisions. Dependable application logic, structured database architectures, and performance optimization.",
  },
  hero: {
    heading: "Database & Backend Systems",
    tagline: "A Reliable Backend Starts With the Right Decisions.",
    description:
      "Behind every reliable application is a system that manages its data, processes requests, and keeps important features working as expected. We build and improve backend systems and databases that help your product run reliably, handle information correctly, and remain easier to maintain as your business evolves. Whether you're developing a new application or dealing with problems in an existing system, we help you build the right technical foundation for your next stage of growth.",
    imagePath: "/images/services/web-development/database-hero-illustration.png",
    imageAlt: "Brivya Solutions Database & Backend Systems Infrastructure Illustration",
  },
  servicesIntro: {
    heading: "Backend Development Built Around Your Product.",
    paragraph:
      "Your backend should support the way your business operates—not make every new feature harder to build. We focus on practical architecture, well-structured data, dependable application logic, and performance improvements that address the actual needs of your product.",
    featuredCard: {
      tag: "Featured Service — Core Infrastructure",
      heading: "Backend Systems Development",
      paragraphs: [
        "Build a Backend That Works as Hard as Your Business.",
        "Your application's most important operations happen behind the scenes. User accounts, business rules, transactions, permissions, and data processing all depend on backend systems working together correctly.",
        "We develop custom backend solutions around your product's requirements, with clearly organized application logic, reliable request handling, and a structure designed to support future development. If you already have a backend, we can also help extend or improve it without automatically replacing everything.",
      ],
      illustrationPath: "/images/services/web-development/backend-systems-illustration.png",
      illustrationAlt: "Custom Backend Systems Logic & Architecture Illustration",
    },
  },
  cards: {
    card2: {
      index: "02",
      title: "Database Design & Architecture",
      heading: "Give Your Data a Structure You Can Build On.",
      paragraphs: [
        "Poorly planned data structures can lead to duplicated records, inconsistent information, and complicated changes as an application grows.",
        "We design database schemas, relationships, constraints, and data models around how your application actually uses information. We also help select appropriate database technologies based on your data, access patterns, consistency requirements, and expected workload.",
        "The result is a database structure that makes your application easier to develop, maintain, and extend.",
      ],
      highlight: "Logical data models, strict relationships, and schema consistency.",
    },
    card3: {
      index: "03",
      title: "Database Performance Optimization",
      heading: "Solve the Bottlenecks Behind Slow Applications.",
      paragraphs: [
        "When dashboards take too long to load or data-heavy features become sluggish, adding more server resources isn't always the right answer.",
        "We investigate database queries, indexing, execution plans, and other performance bottlenecks to understand where time is being lost. Then we implement targeted improvements based on the findings, helping your application retrieve and process information more efficiently.",
      ],
      highlight: "Query tuning, indexing strategies, and execution plan auditing.",
      illustrationPath: "/images/services/web-development/database-architecture-illustration.png",
      illustrationAlt: "Database Query Optimization and Architecture Illustration",
    },
    card4: {
      index: "04",
      title: "Database Security, Backups & Recovery",
      heading: "Protect Your Data. Prepare for the Unexpected.",
      paragraphs: [
        "Your business needs more than a database that works today. It needs appropriate controls to protect information and a realistic plan for recovering it if something goes wrong.",
        "We help implement database access restrictions, secure query handling, backup strategies, and recovery procedures appropriate to your system. Where included in the project scope, we also test recovery processes to verify that backed-up data can actually be restored.",
      ],
      highlight: "Access permissions, reliable backup routines, and tested recovery plans.",
    },
  },
  faq: {
    heading: "What You Should Know Before Starting Your Project.",
    items: [
      {
        id: "faq-1",
        question: "Can you improve our existing backend without rebuilding it?",
        answer:
          "Yes. We can assess your current backend, identify structural or performance issues, and recommend targeted improvements. If the existing architecture can support your requirements with a few changes, there may be no reason to start from scratch.",
      },
      {
        id: "faq-2",
        question: "How do you decide which database is right for our application?",
        answer:
          "We consider the type of information you're storing, how the application reads and updates it, the consistency requirements, and the expected workload. We then recommend a suitable database technology based on those needs rather than choosing one simply because it's popular.",
      },
      {
        id: "faq-3",
        question: "Our application is becoming slower as our data grows. Can you help?",
        answer:
          "Yes. We investigate query performance, indexes, database access patterns, and the way the backend processes requests. The objective is to identify the actual cause of the slowdown and address it before recommending more complex infrastructure.",
      },
      {
        id: "faq-4",
        question: "Can you migrate our existing database to a new structure or platform?",
        answer:
          "Yes. We can plan database migrations around your existing data, application dependencies, and downtime requirements. The process can include data mapping, migration scripts, validation, and rollback planning to reduce the risk of disruption or data loss.",
      },
      {
        id: "faq-5",
        question: "How do you protect our database from unauthorized access?",
        answer:
          "We apply appropriate security measures based on the system, including restricted database permissions, safe query handling, input validation, and secure configuration. Access should be limited to what each application component and user actually needs.",
      },
      {
        id: "faq-6",
        question: "Do you provide backup and disaster recovery solutions?",
        answer:
          "We can help design and implement backup and recovery procedures appropriate to your application's requirements. The plan considers how frequently data should be backed up, how much data loss is acceptable, and how quickly the system needs to recover. Recovery testing can also be included in the agreed scope.",
      },
      {
        id: "faq-7",
        question: "Can you build a backend that supports future growth?",
        answer:
          "Yes. We consider expected workloads, data access patterns, maintainability, and likely changes to your product when making architectural decisions. We aim to provide room for growth without introducing unnecessary complexity or infrastructure costs before they are justified.",
      },
    ],
  },
  cta: {
    heading: "Let's Build a Backend You Can Move Forward With.",
    paragraphs: [
      "Whether you're launching a new application, improving an existing database, or trying to solve problems that keep returning, the right next step starts with understanding your system.",
      "Tell us what you're building, what's not working as it should, or what your backend needs to handle next. We'll help you define the requirements, identify the right approach, and establish a clear scope for your project.",
    ],
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;