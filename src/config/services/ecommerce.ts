/**
 * BRIVYA SOLUTIONS — E-COMMERCE DEVELOPMENT CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface EcommercePillar {
  readonly title: string;
  readonly description: string;
}

export interface EcommerceContentConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly heading: string;
    readonly tagline: string;
    readonly paragraphs: readonly string[];
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly storeNeedsIntro: {
    readonly heading: string;
    readonly paragraph: string;
  };
  readonly cards: {
    readonly card1: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
    };
    readonly card2: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly card3: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
    };
  };
  readonly features: {
    readonly heading: string;
    readonly illustrationPath: string;
    readonly illustrationAlt: string;
    readonly items: readonly EcommercePillar[];
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

export const ECOMMERCE_CONTENT: EcommerceContentConfig = {
  seo: {
    title: "E-Commerce Development | Brivya Solutions",
    description:
      "An online store that makes shopping easier and running your business simpler. High-throughput custom storefronts and seamless checkout integrations.",
  },
  hero: {
    heading: "E-Commerce Development",
    tagline: "An online store that makes shopping easier and running your business simpler.",
    paragraphs: [
      "Your customers should be able to find what they want, understand what they're buying, and place an order without unnecessary steps.",
      "At Brivya, we build e-commerce websites around the way your business sells. From product collections and payment options to inventory management and checkout, we focus on creating a shopping experience that's convenient for your customers and practical for your team.",
      "Whether you're opening your first online store or improving an existing one, we'll help you build something that fits your products, your brand, and your plans for growth.",
    ],
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/web-development/ecommerce-hero-illustration.png",
    imageAlt: "Brivya Solutions E-Commerce Storefront Architecture Illustration",
  },
  storeNeedsIntro: {
    heading: "Everything Your Online Store Needs",
    paragraph:
      "Running an online business involves more than displaying products. The right store should make buying straightforward for customers while giving you better control over daily operations.",
  },
  cards: {
    card1: {
      index: "01",
      title: "Storefront Design & Product Experience",
      heading: "Make every product easy to discover.",
      paragraphs: [
        "Customers shouldn't have to work hard to find what they're looking for. We create organized product collections, useful search and filtering options, and clear product pages that help shoppers compare options and make informed decisions.",
        "From product images to size selections and availability, the details are designed to make browsing feel natural.",
      ],
    },
    card2: {
      index: "02",
      title: "Checkout & Payment Integration",
      heading: "Less friction between the cart and the order.",
      paragraphs: [
        "A complicated checkout can turn an interested shopper away. We focus on clear pricing, straightforward forms, suitable payment options, and an ordering process that works comfortably on mobile and desktop.",
        "The goal is to make completing a purchase as simple as choosing a product.",
      ],
      illustrationPath: "/images/services/web-development/ecommerce-supporting-illustration.png",
      illustrationAlt: "Frictionless Checkout & Payment Gateway Architecture",
    },
    card3: {
      index: "03",
      title: "Store Management & Integrations",
      heading: "Keep the business side organized.",
      paragraphs: [
        "Your store should be manageable even as your product range expands. We build or configure tools for handling products, orders, stock levels, and customer information.",
        "Where needed, we can also plan integrations for shipping, payments, and other business systems, helping you spend less time on repetitive tasks.",
      ],
    },
  },
  features: {
    heading: "Built for Customers. Practical for Business.",
    illustrationPath: "/images/services/web-development/ecommerce-feature-illustration.png",
    illustrationAlt: "Mobile Commerce & Technical Store Infrastructure Illustration",
    items: [
      {
        title: "Search-Friendly Store Structure",
        description:
          "A logical product and category structure helps customers browse your store and gives search engines a clearer understanding of what you sell. We consider product URLs, page titles, descriptions, and technical SEO during development.",
      },
      {
        title: "Mobile Shopping Experience",
        description:
          "Your customers should be able to browse products, select options, and complete purchases comfortably from their phones, without awkward layouts or unnecessary delays.",
      },
      {
        title: "Flexible Store Features",
        description:
          "Discount codes, product variations, customer accounts, delivery options, and other features can be included based on how your business operates. You get the functionality you need without making the store unnecessarily complicated.",
      },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "faq-1",
        question: "Can you redesign my existing online store?",
        answer:
          "Yes. We can review your current store, identify areas that need improvement, and recommend changes to its design, navigation, functionality, or checkout experience.",
      },
      {
        id: "faq-2",
        question: "Can I manage products and orders myself?",
        answer:
          "We can include an appropriate store management system so your team can update products, manage stock, and review orders without relying on a developer for routine changes.",
      },
      {
        id: "faq-3",
        question: "Will my online store be SEO-friendly?",
        answer:
          "We consider SEO during development, including product page structure, mobile usability, descriptive URLs, and search-friendly content organization. Search visibility develops over time, so specific rankings cannot be guaranteed.",
      },
      {
        id: "faq-4",
        question: "Which e-commerce platform should I choose?",
        answer:
          "It depends on your catalog, budget, existing systems, and the features you need. We'll help you evaluate whether an established e-commerce platform or a more customized solution makes sense.",
      },
    ],
  },
  cta: {
    heading: "Ready to Take Your Business Online?",
    description:
      "Whether you have a store in mind or an existing one that needs improvement, let's talk about what you're selling and what you need your website to do.",
    primaryButtonText: "Contact Us",
    secondaryButtonText: "Book a Consultation",
  },
} as const;