/**
 * BRIVYA SOLUTIONS — GOOGLE DISPLAY ADS CONTENT MANIFEST
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
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
}

export interface GoogleDisplayAdsConfig {
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
    readonly card2IllustrationPath: string;
    readonly card2IllustrationAlt: string;
    readonly card3IllustrationPath: string;
    readonly card3IllustrationAlt: string;
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

export const GOOGLE_DISPLAY_ADS_CONTENT: GoogleDisplayAdsConfig = {
  seo: {
    title: "Google Display Ads Management | Brivya Solutions",
    description:
      "Reach more customers beyond search across the Google Display Network and Demand Gen. Strategic audience targeting, visual creative development, and remarketing.",
  },
  hero: {
    serviceTitle: "Google Display Ads",
    heading: "Reach More Customers Beyond Search",
    description:
      "Put your brand in front of potential customers as they browse websites and apps across the Google Display Network. We develop targeted, visually engaging display campaigns designed to increase brand awareness, attract relevant visitors, and support measurable business growth.",
    imagePath: "/images/services/google-ads/display-hero-illustration.png",
    imageAlt: "Google Display Network and visual advertising ecosystem illustration",
  },
  mainFeaturedCard: {
    heading: "Strategic Display Advertising, From Planning to Performance",
    paragraphs: [
      "Effective display advertising requires more than attractive banners. We bring campaign strategy, audience targeting, creative development, budget management, and performance measurement together to support your advertising goals.",
      "Whether you're launching a new campaign or improving an existing one, our approach considers the latest Google Display Network capabilities, including its integration with Demand Gen.",
    ],
  },
  supportingCards: {
    card2IllustrationPath: "/images/services/google-ads/display-creative-illustration.png",
    card2IllustrationAlt: "Responsive Display Ad Creative and Format Specifications",
    card3IllustrationPath: "/images/services/google-ads/remarketing-audience-illustration.png",
    card3IllustrationAlt: "Remarketing and Audience Re-engagement Workflow",
    items: [
      {
        index: "01",
        title: "Precision Audience Targeting",
        description:
          "Reach people based on relevant interests, purchase intent, demographics, and previous interactions with your business. We develop audience strategies that balance discovery, relevance, and campaign performance.",
      },
      {
        index: "02",
        title: "Display Ad Creative & Formats",
        description:
          "Make your brand recognizable across different screens and placements. We prepare visual assets, headlines, and ad formats suited to Google's campaign requirements, with attention to image quality, consistent branding, and clear messaging.",
      },
      {
        index: "03",
        title: "Remarketing & Audience Re-engagement",
        description:
          "Reconnect with eligible visitors who have previously explored your website, products, or services. Using permitted first-party audience data, remarketing campaigns can help bring interested prospects back to your business.",
      },
      {
        index: "04",
        title: "Performance Tracking & Optimization",
        description:
          "Understand how your campaigns contribute to business objectives. We use relevant conversion metrics, campaign reporting, audience insights, and available placement controls to inform ongoing improvements.",
      },
    ],
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore the Technology Behind Display Advertising",
    description:
      "Understand Google's advertising capabilities, audience tools, creative requirements, and campaign settings through its official documentation.",
    items: [
      {
        id: "res-demand-gen-home",
        title: "Google Display Ads Have a New Home in Demand Gen",
        description:
          "Learn how Google Display advertising is transitioning to Demand Gen and what this means for existing and future campaigns.",
        url: "https://support.google.com/google-ads/answer/17051545",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/display-resource-badge-01.png",
        badgeImageAlt: "Google Demand Gen Display Transition Badge",
      },
      {
        id: "res-channel-controls",
        title: "Channel Controls in Demand Gen Campaigns",
        description:
          "Explore how advertisers can select advertising channels, including the Google Display Network, and review channel-level performance.",
        url: "https://support.google.com/google-ads/answer/15973205",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/display-resource-badge-02.png",
        badgeImageAlt: "Channel Selection and Network Controls Badge",
      },
      {
        id: "res-demand-gen-audiences",
        title: "Demand Gen Audiences Overview",
        description:
          "Learn about audience segments, customer data, targeting options, and methods for reaching potential customers.",
        url: "https://support.google.com/google-ads/answer/15594567",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/display-resource-badge-03.png",
        badgeImageAlt: "Demand Gen Audience Segments Badge",
      },
      {
        id: "res-creative-specs",
        title: "Demand Gen Creative Asset Specifications",
        description:
          "Review Google's image, logo, video, and uploaded display ad requirements for supported campaign formats.",
        url: "https://support.google.com/google-ads/answer/13704860",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/display-resource-badge-04.png",
        badgeImageAlt: "Creative Specifications and Format Requirements Badge",
      },
    ],
  },
  faq: {
    heading: "Everything You Need to Know About Google Display Ads",
    items: [
      {
        id: "faq-1",
        question: "What are Google Display Ads?",
        answer:
          "Google Display Ads are visual advertisements that can appear across websites, apps, and other eligible inventory in Google's advertising network. They help businesses build awareness, attract visitors, and reconnect with potential customers.",
      },
      {
        id: "faq-2",
        question: "How are Google Display Ads different from Search Ads?",
        answer:
          "Google Search Ads primarily reach people searching for relevant terms. Display Ads can reach audiences while they browse other online content, making them useful for building awareness and supporting customer consideration.",
      },
      {
        id: "faq-3",
        question: "Can Google Display Ads target previous website visitors?",
        answer:
          "Yes. Eligible campaigns can use first-party audience segments to reconnect with people who previously interacted with your website or business, subject to Google's audience eligibility, data, and privacy requirements.",
      },
      {
        id: "faq-4",
        question: "Can my advertisements run only on the Google Display Network?",
        answer:
          "Yes. Google supports display-only advertising through Google Display Network channel selection in Demand Gen. Available settings and formats depend on the campaign configuration.",
      },
      {
        id: "faq-5",
        question: "How much should I spend on Google Display Ads?",
        answer:
          "The appropriate budget depends on your audience, target locations, business objectives, competition, and campaign goals. A considered starting budget allows room to evaluate results before increasing investment.",
      },
      {
        id: "faq-6",
        question: "How do you measure the success of Display Ads?",
        answer:
          "Performance can be assessed using impressions, clicks, conversions, cost per conversion, and other metrics aligned with campaign objectives. Accurate conversion tracking is important for evaluating outcomes beyond ad visibility.",
      },
    ],
  },
  cta: {
    heading: "Take Your Brand Beyond the Search Results",
    description:
      "Reach new audiences, reconnect with interested customers, and bring greater clarity to your display advertising strategy. Tell us about your business goals, and let's explore the campaign approach that fits them.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;