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
      "A strong foundation for everything your product needs to do. High-availability database schemas, custom backend architectures, and secure data access.",
  },
  hero: {
    heading: "Database & Backend Systems",
    tagline: "A Strong Foundation for Everything Your Product Needs to Do.",
    description:
      "A product can look great on the surface, but what happens behind the scenes matters just as much. We design and develop database structures and backend systems that manage your data, handle your application's logic, and support the features your business depends on. Whether you're building something new or improving an existing product, we focus on getting the foundation right.",
    imagePath: "/images/services/web-development/database-hero-illustration.png",
    imageAlt: "Brivya Solutions Database & Backend Systems Infrastructure Illustration",
  },
  servicesIntro: {
    heading: "The Infrastructure Behind a Better Product",
    paragraph:
      "Good backend development isn't about adding complexity. It's about building the right structure for your product, solving the problems you have today, and making future changes easier to manage.",
    featuredCard: {
      tag: "Featured Service — Core Infrastructure",
      heading: "Backend Systems Development",
      paragraphs: [
        "Every application has work to do behind the scenes: processing requests, applying business rules, managing user permissions, and handling data correctly.",
        "We build custom backend systems around those requirements, with clear application logic and a structure that's easier to test, maintain, and extend as your product evolves.",
      ],
      illustrationPath: "/images/services/web-development/backend-systems-illustration.png",
      illustrationAlt: "Custom Backend Systems Logic & Architecture Illustration",
    },
  },
  cards: {
    card2: {
      index: "02",
      title: "Database Design & Architecture",
      heading: "Structured for Reliability and Growth",
      paragraphs: [
        "A poorly structured database can make even simple features difficult to maintain. We design database schemas, relationships, and data models around how your application actually stores, retrieves, and updates information.",
        "From choosing the right database technology to planning for future changes, every decision starts with your data and your application's needs.",
      ],
      highlight: "Normalized schemas, strict data integrity, and scalable models.",
    },
    card3: {
      index: "03",
      title: "Database Performance Optimization",
      heading: "Eliminate Query Lag Before Adding Infrastructure",
      paragraphs: [
        "Slow queries, inefficient data retrieval, and unnecessary database operations can affect the entire application. We examine query patterns, indexes, and backend processing to identify where performance is being lost.",
        "The goal is to improve what's already there before recommending more infrastructure than your application needs.",
      ],
      highlight: "Execution plan auditing, indexing strategy, and connection pooling.",
      illustrationPath: "/images/services/web-development/database-architecture-illustration.png",
      illustrationAlt: "Query Execution Optimization and Database Telemetry Illustration",
    },
    card4: {
      index: "04",
      title: "Data Security, Backups & Recovery",
      heading: "Safeguard the Information Your Business Depends On",
      paragraphs: [
        "Your database holds more than records. It holds information your product needs to operate.",
        "We help implement appropriate database permissions, secure data access, backup strategies, and recovery procedures. We also consider how changes are deployed and how important information can be restored if something goes wrong.",
      ],
      highlight: "Role-based access, automated snapshots, and verifiable disaster recovery.",
    },
  },
  faq: {
    heading: "Before We Build, Let's Clear a Few Things Up.",
    items: [
      {
        id: "faq-1",
        question: "01. Can you improve our existing backend without rebuilding everything?",
        answer:
          "Yes. We can review your current architecture, database structure, and application behavior to identify what needs improvement. Sometimes targeted changes are enough; a larger rebuild is only worth considering when the existing structure genuinely limits your requirements.",
      },
      {
        id: "faq-2",
        question: "02. Which database is right for our application?",
        answer:
          "That depends on the kind of data you manage, how your application accesses it, and the consistency and performance requirements involved. Relational databases such as PostgreSQL and MySQL suit many structured workloads, while document databases such as MongoDB can fit different data models. We recommend a database based on the use case, not simply its popularity.",
      },
      {
        id: "faq-3",
        question: "03. Why is our application becoming slower as our data grows?",
        answer:
          "There can be several reasons, including inefficient queries, missing or unsuitable indexes, growing workloads, and poorly planned data relationships. We investigate the actual bottleneck before deciding which changes are likely to help.",
      },
      {
        id: "faq-4",
        question: "04. How do you keep our database secure?",
        answer:
          "We consider access permissions, input validation, safe query handling, credential management, and the separation of development and production environments. The appropriate controls depend on your application, its data, and its deployment.",
      },
      {
        id: "faq-5",
        question: "05. Can you migrate our existing database to a new structure or technology?",
        answer:
          "Yes, depending on the source and target systems. We assess the existing data, plan the migration, validate the results, and consider how to minimize disruption. The approach depends on data volume, application dependencies, and acceptable downtime.",
      },
      {
        id: "faq-6",
        question: "06. What happens if our database fails or data is accidentally lost?",
        answer:
          "Recovery depends on the backup strategy, the type of failure, and how recently the data was captured. We can help plan backups and recovery procedures, including restore testing where included in the project scope. A backup is only useful if the data can actually be recovered.",
      },
      {
        id: "faq-7",
        question: "07. Can the backend support more users as our business grows?",
        answer:
          "It can be designed with growth in mind, but the right approach depends on how the application is used. We consider database performance, application workload, resource limits, and likely growth before deciding whether optimization, additional capacity, or architectural changes are needed.",
      },
    ],
  },
  cta: {
    heading: "Build on a Foundation You Won't Have to Fight Later.",
    paragraphs: [
      "Whether you're starting a new product or dealing with a backend that's becoming harder to maintain, the first step is understanding what's happening behind the scenes.",
      "Tell us what you're building, what's slowing you down, or what you need your system to handle next. We'll help you work out a practical approach that fits your product and your priorities.",
    ],
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;