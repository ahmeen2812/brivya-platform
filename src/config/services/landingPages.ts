/**
 * BRIVYA SOLUTIONS — LANDING PAGE OPTIMIZATION CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface SupportingServiceCard {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

export interface OfficialOptimizationResource {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
}

export interface LandingPagesConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly serviceTitle: string;
    readonly heading: string;
    readonly description: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly mainFeaturedCard: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
  };
  readonly supportingCards: {
    readonly card1IllustrationPath: string;
    readonly card1IllustrationAlt: string;
    readonly card2IllustrationPath: string;
    readonly card2IllustrationAlt: string;
    readonly items: readonly SupportingServiceCard[];
  };
  readonly officialResources: {
    readonly tag: string;
    readonly heading: string;
    readonly description: string;
    readonly items: readonly OfficialOptimizationResource[];
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

export const LANDING_PAGES_CONTENT: LandingPagesConfig = {
  seo: {
    title: "Landing Page Optimization | Brivya Solutions",
    description:
      "Make every visit an opportunity to convert. Clearer messaging, intuitive UI, faster mobile loading, and A/B split testing for Google Ads traffic.",
  },
  hero: {
    serviceTitle: "Landing Page Optimization",
    heading: "Make Every Visit an Opportunity to Convert",
    description:
      "Your landing page should do more than attract attention. It should help visitors understand your offer and take the next step with confidence. We optimize landing pages through clearer messaging, intuitive design, faster performance, and data-informed improvements that support enquiries, sign-ups, and sales.",
    imagePath: "/images/services/google-ads/landing-page-hero-illustration.png",
    imageAlt: "High-converting responsive landing page architecture illustration",
  },
  mainFeaturedCard: {
    heading: "A Better Experience From First Click to Final Action",
    paragraphs: [
      "Every unnecessary step can stand between a visitor and a conversion. We examine how users experience your landing page, from the first headline they see to the moment they submit a form, request a quote, or complete a purchase.",
      "Our optimization approach combines content relevance, interface usability, conversion-path analysis, and performance data to identify what needs improvement. Where sufficient data is available, we use controlled testing to evaluate changes rather than relying on assumptions.",
    ],
  },
  supportingCards: {
    card1IllustrationPath: "/images/services/google-ads/conversion-ux-illustration.png",
    card1IllustrationAlt: "Frictionless UI and Conversion Path Architecture Illustration",
    card2IllustrationPath: "/images/services/google-ads/mobile-speed-illustration.png",
    card2IllustrationAlt: "Mobile Loading Speed and Core Web Vitals Optimization Illustration",
    items: [
      {
        index: "01",
        title: "Clear Messaging & Frictionless Interactions",
        description:
          "Help visitors find what matters without unnecessary effort. We refine page headlines, content structure, calls to action, and form experiences so that your offer is easy to understand and the next step feels straightforward.",
      },
      {
        index: "02",
        title: "Speed & Mobile Experience",
        description:
          "Make your landing page easier to use across devices. We review mobile layouts, loading performance, responsiveness, and visual stability to address technical issues that can interrupt the customer journey.",
      },
    ],
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore the Standards Behind Better Landing Pages",
    description:
      "Learn how Google evaluates landing-page experience, measures website performance, and tracks valuable customer interactions.",
    items: [
      {
        id: "res-optimize-landing-pages",
        title: "Google Ads — Optimize Your Ads and Landing Pages",
        description:
          "Explore Google's recommendations for improving landing-page relevance, mobile usability, content clarity, and the connection between advertisements and destination pages.",
        url: "https://support.google.com/google-ads/answer/6238826",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/landing-page-badge-01.png",
        badgeImageAlt: "Google Ads Optimize Landing Pages Badge",
      },
      {
        id: "res-evaluate-performance",
        title: "Google Ads — Evaluate Landing Page Performance",
        description:
          "Learn how Google Ads helps advertisers assess the landing pages receiving paid traffic, including page-level reporting and mobile experience considerations.",
        url: "https://support.google.com/google-ads/answer/7543502",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/landing-page-badge-02.png",
        badgeImageAlt: "Google Ads Evaluate Landing Page Performance Badge",
      },
      {
        id: "res-core-web-vitals",
        title: "Google Web.dev — Core Web Vitals",
        description:
          "Understand Google's performance metrics for loading speed, responsiveness, and visual stability, including recommended measurement thresholds.",
        url: "https://web.dev/articles/vitals",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/landing-page-badge-03.png",
        badgeImageAlt: "Google Core Web Vitals Standards Badge",
      },
      {
        id: "res-key-events",
        title: "Google Analytics — Create or Modify Key Events",
        description:
          "Learn how Google Analytics 4 can measure important actions, such as successful enquiry submissions and visits to confirmation pages.",
        url: "https://support.google.com/analytics/answer/12844695",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/landing-page-badge-04.png",
        badgeImageAlt: "Google Analytics 4 Key Events Measurement Badge",
      },
    ],
  },
  faq: {
    heading: "Common Questions About Landing Page Optimization",
    items: [
      {
        id: "faq-1",
        question: "What is landing page optimization?",
        answer:
          "Landing page optimization is the process of improving a webpage to make it more relevant, usable, and effective at supporting a desired action. It can involve changes to messaging, design, forms, page speed, and the overall user experience.",
      },
      {
        id: "faq-2",
        question: "Do I need a new landing page or can you improve my existing one?",
        answer:
          "Many landing pages can be improved without a complete redesign. We review the existing layout, content, performance, and conversion path to determine whether targeted changes or broader structural improvements are appropriate.",
      },
      {
        id: "faq-3",
        question: "What makes a landing page effective for Google Ads?",
        answer:
          "An effective Google Ads landing page closely reflects the advertisement that brought visitors to it. Relevant content, clear calls to action, accessible information, and an easy-to-use mobile experience all contribute to a better landing-page experience.",
      },
      {
        id: "faq-4",
        question: "What is A/B testing in landing page optimization?",
        answer:
          "A/B testing compares different versions of a page or a specific element to evaluate how changes affect visitor behavior. Testing may involve headlines, forms, layouts, or calls to action. Reliable conclusions depend on sufficient traffic, accurate measurement, and appropriate testing methods.",
      },
      {
        id: "faq-5",
        question: "How do you measure landing page performance?",
        answer:
          "We consider relevant metrics such as conversion rate, completed enquiries, purchases, form interactions, and engagement patterns. Page performance and mobile usability are also assessed to identify issues that may affect visitors.",
      },
      {
        id: "faq-6",
        question: "Can landing page optimization improve Google Ads performance?",
        answer:
          "Improving relevance and usability can support a better landing-page experience, which is part of Google's ad-quality assessment. Results also depend on factors such as campaign targeting, bidding, competition, and the quality of incoming traffic.",
      },
    ],
  },
  cta: {
    heading: "Give Every Click a More Purposeful Destination",
    description:
      "Make it easier for potential customers to understand your offer and take action. Let's review your landing page, identify opportunities for improvement, and create a clearer path from visitor interest to meaningful business results.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;