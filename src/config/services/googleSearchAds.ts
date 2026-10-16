/**
 * BRIVYA SOLUTIONS — GOOGLE SEARCH ADS CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface SearchDeliverablePoint {
  readonly title: string;
  readonly description: string;
}

export interface SearchContentConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly heading: string;
    readonly tagline: string;
    readonly paragraphs: readonly string[];
    readonly badges: readonly string[];
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly servicesIntro: {
    readonly heading: string;
    readonly paragraph: string;
    readonly featuredCard: {
      readonly tag: string;
      readonly heading: string;
      readonly subheading: string;
      readonly paragraphs: readonly string[];
      readonly deliverables: readonly SearchDeliverablePoint[];
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
  };
  readonly cards: {
    readonly card2: {
      readonly tag: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly deliverables: readonly SearchDeliverablePoint[];
    };
    readonly card3: {
      readonly tag: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly deliverables: readonly SearchDeliverablePoint[];
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly card4: {
      readonly tag: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly deliverables: readonly SearchDeliverablePoint[];
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

export const GOOGLE_SEARCH_ADS_CONTENT: SearchContentConfig = {
  seo: {
    title: "Google Search Ads Management | Brivya Solutions",
    description:
      "Turn the right searches into real business opportunities. High-intent keyword targeting, negative keyword filtration, and ROI-driven Google Search campaigns.",
  },
  hero: {
    heading: "Google Search Ads Management",
    tagline: "Turn the Right Searches Into Real Business Opportunities.",
    paragraphs: [
      "When potential customers search for a product or service you offer, your business needs to be visible for the right reasons.",
      "We plan, launch, and manage Google Search Ads campaigns around your business goals, your target customers, and the searches that matter most. From keyword selection and ad messaging to conversion tracking and ongoing optimization, we focus on helping you make better use of your advertising budget.",
      "No generic campaigns. No guessing what your clicks are worth. A clear strategy built around what you want your business to achieve.",
    ],
    badges: [
      "Intent-Driven Bidding",
      "Negative Keyword Filtration",
      "Verified Conversion Tracking",
    ],
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book an Audit",
    imagePath: "/images/services/google-ads/search-hero-illustration.png",
    imageAlt: "Brivya Solutions Google Search Ads Management and Intent Telemetry Illustration",
  },
  servicesIntro: {
    heading: "Every Click Has a Cost. Make Your Campaign Count.",
    paragraph:
      "Successful search advertising takes more than choosing keywords and setting a daily budget. It requires the right targeting, relevant messaging, accurate measurement, and regular decisions based on campaign performance.",
    featuredCard: {
      tag: "Core Management",
      heading: "Google Search Ads Campaign Management",
      subheading: "A Campaign Built Around Your Business Goals.",
      paragraphs: [
        "Your advertising strategy should reflect what you're trying to sell, who you want to reach, and what makes your business worth choosing.",
        "We manage Google Search Ads campaigns from planning and setup through launch and ongoing optimization. This includes campaign structure, keyword selection, bidding strategy, budget allocation, ad creation, and performance reviews.",
        "Whether you want more qualified enquiries, product sales, or customer bookings, we build the campaign around the actions that matter to your business—not simply the number of clicks it receives.",
      ],
      deliverables: [
        {
          title: "Structured Account Architecture",
          description: "Clean single-intent ad groups organized for maximum Quality Score and lower click costs.",
        },
        {
          title: "Bidding & Budget Allocation",
          description: "Smart bidding strategies calibrated to target CPA and return on ad spend (ROAS).",
        },
        {
          title: "Active Performance Auditing",
          description: "Continuous search term reviews, bid adjustments, and transparent performance reports.",
        },
      ],
      illustrationPath: "/images/services/google-ads/campaign-structure-illustration.png",
      illustrationAlt: "Google Ads Account Structure and Bidding Hierarchy Illustration",
    },
  },
  cards: {
    card2: {
      tag: "Intent Precision",
      title: "Keyword Research & Search Intent Targeting",
      heading: "Reach People Looking for What You Actually Offer.",
      paragraphs: [
        "Not every search represents a potential customer. Some people are researching, looking for free resources, or searching for services you don't provide.",
        "We research relevant keywords, assess search intent, organize campaigns around closely related services, and review the actual searches triggering your ads. We also use negative keywords where appropriate to exclude irrelevant searches and reduce avoidable spend.",
        "The objective is to attract more relevant traffic while giving your budget a clearer purpose.",
      ],
      deliverables: [
        {
          title: "Commercial Intent Mapping",
          description: "Targeting high-value commercial searches while avoiding vague informational queries.",
        },
        {
          title: "Negative Keyword Shields",
          description: "Proactively eliminating irrelevant search terms to prevent budget waste.",
        },
        {
          title: "Match Type Calibration",
          description: "Disciplined phrase and exact match structures to ensure query relevance.",
        },
      ],
    },
    card3: {
      tag: "Message Resonance",
      title: "Search Ad Copy & Landing Page Relevance",
      heading: "Give Potential Customers a Reason to Choose You.",
      paragraphs: [
        "Getting your ad in front of someone is only the first step. Your message also needs to communicate why your offer is relevant and what the customer should do next.",
        "We write and refine responsive search ads around your services, competitive advantages, and customer needs. We also align ad messaging with the destination page, so visitors can find the information, offer, or next step they expected when they clicked.",
        "When an ad attracts attention but the landing page fails to support the promise, we identify that gap and recommend practical improvements.",
      ],
      deliverables: [
        {
          title: "Responsive Search Ad Copy",
          description: "High-relevance headlines and descriptions tested against user search patterns.",
        },
        {
          title: "Landing Page Message Matching",
          description: "Aligning ad promises with page content to maximize conversion rates.",
        },
        {
          title: "Friction Point Diagnostics",
          description: "Pinpointing why clicks fail to convert and recommending high-impact landing page adjustments.",
        },
      ],
      illustrationPath: "/images/services/google-ads/ad-relevance-illustration.png",
      illustrationAlt: "Ad Relevance, Quality Score, and Landing Page Experience Illustration",
    },
    card4: {
      tag: "Revenue Intelligence",
      title: "Conversion Tracking & Campaign Optimization",
      heading: "Know What's Working. Know What Needs to Change.",
      paragraphs: [
        "Clicks and impressions tell only part of the story. You also need to understand which campaigns generate enquiries, calls, purchases, and other valuable actions.",
        "We help configure and validate conversion tracking, review campaign and keyword performance, and identify opportunities to improve results. Where suitable data is available, we can also help connect qualified leads or completed sales back to advertising activity.",
        "You receive performance reporting that explains what the data means, what has changed, and which actions we recommend next.",
      ],
      deliverables: [
        {
          title: "Verified Conversion Pipelines",
          description: "Accurate tracking for calls, forms, purchases, and qualified lead events.",
        },
        {
          title: "Lead-to-Revenue Attribution",
          description: "Connecting search ad clicks directly to real business pipeline value.",
        },
        {
          title: "Action-Driven Reporting",
          description: "Clear data insights detailing exactly what changed and where budget should shift next.",
        },
      ],
    },
  },
  faq: {
    heading: "Before You Invest in Google Search Ads",
    items: [
      {
        id: "faq-1",
        question: "How do you prevent our advertising budget from being wasted?",
        answer:
          "We start by understanding your services, target customers, locations, and business priorities. We then structure targeting around relevant searches, apply suitable negative keywords, monitor actual search terms, and review performance regularly. No campaign can eliminate all wasted spend, but careful management helps identify and reduce avoidable costs.",
      },
      {
        id: "faq-2",
        question: "Why are our Google Ads getting clicks but not generating leads?",
        answer:
          "The cause could be irrelevant search traffic, an offer that doesn't meet customer expectations, weak ad messaging, a poorly matched landing page, or a conversion tracking problem. We examine the available data to identify where potential customers are dropping off before recommending changes.",
      },
      {
        id: "faq-3",
        question: "Can you manage or improve our existing Google Ads account?",
        answer:
          "Yes. We can review an existing account, assess its campaign structure, keywords, search terms, bidding, conversion tracking, and landing page relevance. Based on the findings, we recommend what to retain, improve, restructure, or stop rather than rebuilding everything automatically.",
      },
      {
        id: "faq-4",
        question: "How do you measure whether a campaign is successful?",
        answer:
          "We agree on the business outcomes that matter before launch. Depending on your business, these might include qualified enquiries, phone calls, completed purchases, bookings, or cost per qualified lead. We then review the available conversion and revenue data alongside advertising costs to assess performance.",
      },
      {
        id: "faq-5",
        question: "How much should we spend on Google Search Ads?",
        answer:
          "The right budget depends on your industry, target locations, competition, average click costs, and business goals. We help establish a realistic starting budget based on your priorities and available data. Your advertising spend and management fees should be clearly understood before the campaign begins.",
      },
      {
        id: "faq-6",
        question: "How soon can we expect results?",
        answer:
          "Your ads may begin receiving impressions and clicks after approval and launch, but meaningful performance assessment takes longer. The timeline depends on search demand, competition, budget, conversion volume, and how effectively your website turns visitors into customers. We monitor early performance and make decisions based on evidence rather than promising a fixed number of leads by a specific date.",
      },
      {
        id: "faq-7",
        question: "Do you guarantee first-page placement or a specific number of leads?",
        answer:
          "No responsible agency can guarantee a particular ad position, cost per lead, or sales outcome in every market. We can build and manage a strategy designed around your goals, measure performance, and make informed adjustments. We believe clear expectations and honest reporting are more valuable than promises that depend on factors outside our control.",
      },
    ],
  },
  cta: {
    heading: "Your Next Campaign Deserves More Than Guesswork.",
    paragraphs: [
      "If you're investing in Google Ads—or preparing to start—we can help you approach it with a clearer strategy.",
      "Tell us what you offer, who you want to reach, and what you want your advertising to achieve. We'll discuss your goals, identify the key considerations for your campaign, and help you understand the next steps before you commit your budget.",
    ],
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;