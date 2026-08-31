/**
 * BRIVYA SOLUTIONS — YOUTUBE ADS CONTENT MANIFEST
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

export interface OfficialYouTubeResource {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
}

export interface YouTubeAdsConfig {
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
    readonly items: readonly OfficialYouTubeResource[];
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

export const YOUTUBE_ADS_CONTENT: YouTubeAdsConfig = {
  seo: {
    title: "YouTube Ads Management | Brivya Solutions",
    description:
      "Reach the right viewers with YouTube advertising. In-stream, bumper, Shorts, and discovery video campaigns engineered for brand growth and measurable return.",
  },
  hero: {
    serviceTitle: "YouTube Ads",
    heading: "Reach the Right Viewers With YouTube Advertising",
    description:
      "Put your brand in front of potential customers across YouTube videos, feeds, and Shorts. We develop targeted video advertising campaigns that combine audience insights, engaging creative, and strategic campaign management to build awareness, encourage consideration, and support measurable business growth.",
    imagePath: "/images/services/google-ads/youtube-hero-illustration.png",
    imageAlt: "YouTube video advertising interface, formats, and analytics illustration",
  },
  mainFeaturedCard: {
    heading: "YouTube Campaigns Built Around Your Business Goals",
    paragraphs: [
      "Great video advertising begins with a clear strategy. We bring audience research, campaign planning, video ad formats, creative messaging, and performance measurement together to connect your business with relevant viewers.",
      "From building brand recognition to encouraging meaningful customer actions, we develop campaign approaches that reflect your objectives, advertising budget, and audience behavior.",
    ],
  },
  supportingCards: {
    card2IllustrationPath: "/images/services/google-ads/youtube-formats-illustration.png",
    card2IllustrationAlt: "YouTube In-Stream, Shorts, and Bumper Ad Formats Illustration",
    card3IllustrationPath: "/images/services/google-ads/youtube-analytics-illustration.png",
    card3IllustrationAlt: "Video Creative Engagement and Audience Analytics Illustration",
    items: [
      {
        index: "01",
        title: "Audience Targeting & Strategy",
        description:
          "Reach audiences based on relevant interests, demographics, purchase intent, and eligible previous interactions with your business. We develop targeting strategies suited to your campaign objectives while balancing audience relevance and potential reach.",
      },
      {
        index: "02",
        title: "YouTube Ad Formats & Placements",
        description:
          "Choose advertising formats that fit how people watch. We plan campaigns across eligible skippable in-stream ads, bumper ads, in-feed video ads, and YouTube Shorts, selecting suitable formats for brand awareness, engagement, and campaign reach.",
      },
      {
        index: "03",
        title: "Video Creative & Messaging",
        description:
          "Capture attention early and communicate your message clearly. We help structure video ad messaging, branding, and supporting creative assets for different screens and placements, keeping your offer consistent and recognizable.",
      },
      {
        index: "04",
        title: "Performance Tracking & Optimization",
        description:
          "Understand how audiences respond to your advertising. We review relevant metrics such as impressions, video views, engagement, costs, and tracked conversions to identify opportunities for improving campaign delivery and creative performance.",
      },
    ],
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google's Video Advertising Tools",
    description:
      "Access official Google Ads documentation covering video advertising formats, audience targeting, creative requirements, and campaign measurement.",
    items: [
      {
        id: "res-video-formats",
        title: "YouTube Video Ad Formats",
        description:
          "Explore Google's supported video advertising formats, including skippable in-stream ads, non-skippable ads, bumper ads, in-feed video ads, and YouTube Shorts.",
        url: "https://support.google.com/google-ads/answer/2375464",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/youtube-resource-badge-01.png",
        badgeImageAlt: "YouTube Video Ad Formats Guide Badge",
      },
      {
        id: "res-audience-targeting",
        title: "Video Campaign Audience Targeting",
        description:
          "Understand the audience targeting methods available in eligible Video campaigns, including demographics, interests, audience segments, and content targeting options.",
        url: "https://support.google.com/google-ads/answer/2454017",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/youtube-resource-badge-02.png",
        badgeImageAlt: "YouTube Video Audience Targeting Badge",
      },
      {
        id: "res-ad-specs",
        title: "Video Ad Specifications & Requirements",
        description:
          "Review Google's video advertising specifications, supported aspect ratios, recommended dimensions, and creative requirements for different campaign formats.",
        url: "https://support.google.com/google-ads/answer/17091270",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/youtube-resource-badge-03.png",
        badgeImageAlt: "YouTube Video Ad Specs & Dimensions Badge",
      },
      {
        id: "res-performance-analytics",
        title: "Video Performance & Analytics",
        description:
          "Learn how Google Ads provides video performance insights, including audience retention, viewer engagement, and creative performance analysis.",
        url: "https://support.google.com/google-ads/answer/6086441",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/youtube-resource-badge-04.png",
        badgeImageAlt: "YouTube Video Performance & Analytics Badge",
      },
    ],
  },
  faq: {
    heading: "Common Questions About YouTube Advertising",
    items: [
      {
        id: "faq-1",
        question: "What are YouTube Ads?",
        answer:
          "YouTube Ads are paid advertisements that allow businesses to reach audiences through video and other eligible advertising formats on YouTube. Depending on campaign settings, video advertisements can appear before or during videos, in YouTube feeds, and within Shorts.",
      },
      {
        id: "faq-2",
        question: "Which YouTube advertising format is best for my business?",
        answer:
          "The right format depends on your marketing objectives. Skippable in-stream ads can support awareness and engagement, bumper ads deliver brief brand messages, and in-feed or Shorts ads provide additional ways to reach viewers. We assess the available options against your campaign goals.",
      },
      {
        id: "faq-3",
        question: "Can YouTube Ads target a specific audience?",
        answer:
          "Yes. Eligible campaigns provide targeting options based on demographics, interests, audience segments, and other signals. Available targeting controls vary depending on the campaign type and objective.",
      },
      {
        id: "faq-4",
        question: "Do I need a video to advertise on YouTube?",
        answer:
          "Video advertising generally requires a suitable video asset. The required length, orientation, and creative elements depend on the selected advertising format. Existing videos can be assessed and adapted where appropriate.",
      },
      {
        id: "faq-5",
        question: "How much does YouTube advertising cost?",
        answer:
          "Costs depend on campaign objectives, bidding strategy, audience targeting, competition, and budget settings. Google Ads supports different bidding models, including cost-per-view and cost-per-thousand-impressions approaches for eligible campaigns.",
      },
      {
        id: "faq-6",
        question: "How is YouTube Ads performance measured?",
        answer:
          "Performance can be evaluated through impressions, TrueView views, engagement, audience retention, advertising costs, and conversions where tracking is configured. The most relevant measures depend on whether the campaign is designed for awareness, consideration, or customer action.",
      },
    ],
  },
  cta: {
    heading: "Make Your Next YouTube Campaign More Purposeful",
    description:
      "Connect your brand with relevant viewers through a carefully planned video advertising strategy. From audience selection to campaign measurement, let's develop an approach that supports your marketing priorities and makes better use of your advertising budget.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;