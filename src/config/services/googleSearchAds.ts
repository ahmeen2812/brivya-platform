/**
 * BRIVYA SOLUTIONS — GOOGLE SEARCH ADS CONTENT MANIFEST
 * Minimal, high-impact agency copy structured for maximum scannability.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface SearchDeliverable {
  readonly label: string;
  readonly detail: string;
}

export interface GoogleSearchAdsConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly heading: string;
    readonly tagline: string;
    readonly description: string;
    readonly badges: readonly string[];
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly intro: {
    readonly heading: string;
    readonly subheading: string;
  };
  readonly bento: {
    readonly featured: {
      readonly badge: string;
      readonly heading: string;
      readonly summary: string;
      readonly capabilities: readonly string[];
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly targeting: {
      readonly badge: string;
      readonly heading: string;
      readonly summary: string;
      readonly capabilities: readonly string[];
    };
    readonly relevance: {
      readonly badge: string;
      readonly heading: string;
      readonly summary: string;
      readonly capabilities: readonly string[];
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly attribution: {
      readonly badge: string;
      readonly heading: string;
      readonly summary: string;
      readonly capabilities: readonly string[];
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

export const GOOGLE_SEARCH_ADS_CONTENT: GoogleSearchAdsConfig = {
  seo: {
    title: "Google Search Ads Management | Brivya Solutions",
    description:
      "Turn commercial search intent into qualified revenue. Intent-focused campaign architecture, negative match shields, and verified conversion tracking.",
  },
  hero: {
    heading: "Google Search Ads Management",
    tagline: "Turn the Right Searches Into Real Business Opportunities.",
    description:
      "We design and manage search campaigns focused strictly on commercial intent. From keyword filtration and ad resonance to conversion tracking, we eliminate budget waste and capture customers actively looking for your services.",
    badges: [
      "Commercial Intent Mapping",
      "Negative Match Shields",
      "Verified Conversion Tracking",
    ],
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book an Audit",
    imagePath: "/images/services/google-ads/search-hero-illustration.png",
    imageAlt: "Brivya Solutions Google Search Ads Management and Intent Telemetry Illustration",
  },
  intro: {
    heading: "Every Click Has a Cost. Make Your Budget Count.",
    subheading:
      "Search advertising engineered around active commercial demand, verified pipeline value, and disciplined budget governance.",
  },
  bento: {
    featured: {
      badge: "Campaign Governance",
      heading: "Search Campaign Architecture & Bidding Strategy",
      summary:
        "We structure Google Ads accounts into single-intent ad groups. Bidding algorithms are calibrated to target CPA and commercial return, ensuring budget is directed only toward active buyers.",
      capabilities: [
        "Single-Intent Ad Group Architecture",
        "Target CPA & ROAS Calibration",
        "Search Query Mining & Budget Protection",
      ],
      illustrationPath: "/images/services/google-ads/campaign-structure-illustration.png",
      illustrationAlt: "Google Ads Account Topology and Bidding Strategy Illustration",
    },
    targeting: {
      badge: "Intent Precision",
      heading: "Intent Research & Negative Match Shields",
      summary:
        "Not all searches represent customers. We isolate high-intent buyer keywords and deploy proactive negative keyword lists to shield your budget from unqualified clicks.",
      capabilities: [
        "Commercial Query Isolation",
        "Proactive Negative Filtration",
        "Disciplined Exact & Phrase Matching",
      ],
    },
    relevance: {
      badge: "Conversion Resonance",
      heading: "Ad Copy Resonance & Landing Page Alignment",
      summary:
        "Responsive search ads written around your core advantages and aligned directly with landing page messaging to ensure zero conversion friction.",
      capabilities: [
        "High-Relevance Ad Copywriting",
        "Ad-to-Page Message Matching",
        "Quality Score & Friction Diagnostics",
      ],
      illustrationPath: "/images/services/google-ads/ad-relevance-illustration.png",
      illustrationAlt: "Ad Relevance, Quality Score, and Landing Page Resonance Illustration",
    },
    attribution: {
      badge: "Revenue Intelligence",
      heading: "Verified Conversion Tracking & Lead Attribution",
      summary:
        "Clicks mean nothing without pipeline value. We connect search activity directly to phone calls, qualified form leads, and revenue data.",
      capabilities: [
        "First-Party Conversion Verification",
        "Lead-to-Revenue Attribution",
        "Action-Driven Spend Optimization",
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
          "We structure targeting around relevant commercial searches, apply strict negative keyword matrices, monitor actual search terms, and review performance regularly to eliminate non-converting spend.",
      },
      {
        id: "faq-2",
        question: "Why are our Google Ads getting clicks but not generating leads?",
        answer:
          "The cause is usually irrelevant search intent, a disconnect between the ad copy and the landing page, or unverified conversion tracking. We audit the drop-off points before recommending structural adjustments.",
      },
      {
        id: "faq-3",
        question: "Can you manage or improve our existing Google Ads account?",
        answer:
          "Yes. We review current campaign structures, search terms, bidding strategies, and tracking setups to identify what to keep, optimize, or pause rather than starting from scratch.",
      },
      {
        id: "faq-4",
        question: "How do you measure whether a campaign is successful?",
        answer:
          "We measure real business outcomes: qualified inquiries, booked consultations, phone calls, and revenue generated against total advertising spend.",
      },
      {
        id: "faq-5",
        question: "How much should we spend on Google Search Ads?",
        answer:
          "Budget depends on industry competition, target geography, and average click costs. We calculate a realistic initial budget based on your goals and commercial conversion metrics.",
      },
      {
        id: "faq-6",
        question: "How soon can we expect results?",
        answer:
          "Impressions and clicks start shortly after launch. Meaningful conversion trends typically take 2–4 weeks as bidding algorithms calibrate and search term data is refined.",
      },
      {
        id: "faq-7",
        question: "Do you guarantee first-page placement or a specific number of leads?",
        answer:
          "No ethical agency guarantees positions or lead volume. We guarantee disciplined targeting, transparent data tracking, and continuous campaign optimization based on verifiable return on spend.",
      },
    ],
  },
  cta: {
    heading: "Your Next Campaign Deserves More Than Guesswork.",
    description:
      "Tell us what you offer and what you need your advertising to achieve. We will audit your market demand, identify key considerations, and help you establish a clear strategy before you spend your budget.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book an Audit",
  },
} as const;