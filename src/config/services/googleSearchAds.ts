/**
 * BRIVYA SOLUTIONS — GOOGLE SEARCH ADS CONTENT MANIFEST
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

export interface OfficialGoogleResource {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly iconType: "keyword-planner" | "responsive-ads" | "search-terms" | "conversion-measurement";
}

export interface GoogleSearchAdsConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly serviceTitle: string;
    readonly heading: string;
    readonly description: string;
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly mainFeaturedCard: {
    readonly tag: string;
    readonly heading: string;
    readonly paragraphs: readonly string[];
  };
  readonly supportingCards: {
    readonly heading: string;
    readonly subtitle: string;
    readonly items: readonly SupportingServiceCard[];
  };
  readonly officialResources: {
    readonly tag: string;
    readonly heading: string;
    readonly description: string;
    readonly items: readonly OfficialGoogleResource[];
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

export const GOOGLE_SEARCH_ADS_CONTENT: GoogleSearchAdsConfig = {
  seo: {
    title: "Google Search Ads Management | Brivya Solutions",
    description:
      "Reach customers when they're searching for you. We create and manage Google Search campaigns that turn search interest into real business opportunities.",
  },
  hero: {
    serviceTitle: "Google Search Ads",
    heading: "Reach Customers When They're Searching for You",
    description:
      "Connect with potential customers actively searching for the products and services you offer. We create and manage Google Search campaigns that bring together relevant keywords, compelling ad messaging, and considered bidding strategies to turn search interest into meaningful business opportunities.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/google-ads/search-hero-illustration.png",
    imageAlt: "Google Search Ads sponsored results and performance interface illustration",
  },
  mainFeaturedCard: {
    tag: "Core Search Strategy",
    heading: "Search Advertising Built Around Business Goals",
    paragraphs: [
      "Successful Search campaigns start with understanding what your customers need and how they look for it. We develop campaigns around relevant search intent, carefully structured keywords, effective ad messaging, and landing pages that reflect what visitors expect to find.",
      "From initial campaign setup to ongoing optimization, our focus is on attracting relevant traffic, managing advertising costs, and measuring the actions that matter to your business.",
    ],
  },
  supportingCards: {
    heading: "Structured for Intent and Commercial Return",
    subtitle: "Four focused pillars designed to eliminate budget waste and capture qualified buyers.",
    items: [
      {
        index: "01",
        title: "Keyword Research & Search Intent",
        description:
          "Reach people searching for services like yours. We research relevant keywords, assess commercial intent, and refine keyword targeting to connect your advertisements with suitable searches while limiting irrelevant traffic.",
      },
      {
        index: "02",
        title: "Responsive Search Ad Development",
        description:
          "Present the right message for different search queries. We develop relevant headlines, descriptions, and supporting ad assets that communicate your offer clearly and give potential customers a reason to visit your website.",
      },
      {
        index: "03",
        title: "Landing Page Relevance",
        description:
          "A relevant click deserves a relevant destination. We assess how your landing pages support the promise of your advertisements, with attention to message consistency, page usability, and clear conversion opportunities.",
      },
      {
        index: "04",
        title: "Bidding & Performance Optimization",
        description:
          "Make informed decisions about where your advertising budget goes. We review search terms, bidding performance, conversion data, and campaign results to identify opportunities for refinement and more efficient spending.",
      },
    ],
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google's Search Advertising Tools",
    description:
      "Discover the official tools and technical guidance used to research keywords, create search advertisements, refine targeting, and measure campaign performance.",
    items: [
      {
        id: "res-keyword-planner",
        title: "Google Ads Keyword Planner",
        description:
          "Research relevant search terms, explore estimated search volumes, and review keyword cost forecasts when planning Search campaigns.",
        url: "https://support.google.com/google-ads/answer/7337243",
        iconType: "keyword-planner",
      },
      {
        id: "res-responsive-ads",
        title: "Responsive Search Ads",
        description:
          "Understand how Google combines available headlines and descriptions to create advertisements suited to relevant search queries.",
        url: "https://support.google.com/google-ads/answer/7684791",
        iconType: "responsive-ads",
      },
      {
        id: "res-search-terms",
        title: "Google Ads Search Terms Report",
        description:
          "Explore how advertisers review the searches that trigger their ads and use performance information to refine keyword strategies.",
        url: "https://support.google.com/google-ads/answer/2472708",
        iconType: "search-terms",
      },
      {
        id: "res-conversion-measurement",
        title: "Google Ads Conversion Measurement",
        description:
          "Learn how Google Ads measures valuable customer actions, including purchases, enquiries, and other conversion events.",
        url: "https://support.google.com/google-ads/answer/1722022",
        iconType: "conversion-measurement",
      },
    ],
  },
  faq: {
    heading: "Common Questions About Google Search Ads",
    items: [
      {
        id: "faq-1",
        question: "What are Google Search Ads?",
        answer:
          "Google Search Ads are advertisements that can appear alongside relevant search results on Google and eligible search partner sites. They help businesses connect with people looking for related products, services, or information.",
      },
      {
        id: "faq-2",
        question: "How are Google Search Ads different from SEO?",
        answer:
          "Google Search Ads use paid advertising to compete for visibility in search results, while SEO focuses on improving a website's presence in organic search. Both can support customer acquisition, but they work through different systems.",
      },
      {
        id: "faq-3",
        question: "How much does Google Search advertising cost?",
        answer:
          "Campaign costs depend on factors such as keyword competition, geographic targeting, bidding strategy, and advertising budget. We evaluate these factors alongside your business objectives to develop an appropriate campaign approach.",
      },
      {
        id: "faq-4",
        question: "Can Google Search Ads target specific locations?",
        answer:
          "Yes. Google Ads provides geographic targeting options that allow campaigns to focus on selected countries, regions, cities, or supported geographic areas. Location settings can be adjusted according to your intended audience.",
      },
      {
        id: "faq-5",
        question: "Can you guarantee the top position in Google Search?",
        answer:
          "No agency can guarantee a permanent top advertising position. Google determines ad eligibility and placement through its auction system, which considers bids, ad quality, competition, and other factors.",
      },
      {
        id: "faq-6",
        question: "How do you measure Google Search Ads performance?",
        answer:
          "We evaluate campaign results using relevant measures such as clicks, conversion volume, cost per conversion, and conversion value where available. The reporting approach depends on whether your objective is enquiries, sales, or another measurable action.",
      },
    ],
  },
  cta: {
    heading: "Make Your Search Advertising Work Toward Clearer Goals",
    description:
      "Reach people looking for what your business offers, supported by relevant ad campaigns and informed performance decisions. Let's discuss your advertising objectives and develop a Search strategy that fits your market, budget, and priorities.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;