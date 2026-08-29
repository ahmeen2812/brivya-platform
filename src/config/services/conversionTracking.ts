/**
 * BRIVYA SOLUTIONS — CONVERSION TRACKING SETUP CONTENT MANIFEST
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

export interface OfficialMeasurementResource {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
}

export interface ConversionTrackingConfig {
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
    readonly items: readonly OfficialMeasurementResource[];
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

export const CONVERSION_TRACKING_CONTENT: ConversionTrackingConfig = {
  seo: {
    title: "Conversion Tracking Setup | Brivya Solutions",
    description:
      "Know what happens after every click. Google Ads conversion tracking, Google Tag Manager, GA4 key events, and enhanced conversion verification.",
  },
  hero: {
    serviceTitle: "Conversion Tracking Setup",
    heading: "Know What Happens After Every Click",
    description:
      "Understand which marketing activities generate meaningful results for your business. We set up conversion tracking across your website and advertising platforms to measure enquiries, purchases, and other valuable customer actions, giving you clearer insights into campaign performance.",
    imagePath: "/images/services/google-ads/conversion-hero-illustration.png",
    imageAlt: "Conversion tracking, telemetry, and analytics dashboard illustration",
  },
  mainFeaturedCard: {
    heading: "Reliable Tracking Starts With the Right Configuration",
    paragraphs: [
      "Conversion tracking is only useful when the underlying data is correctly collected and configured. We establish meaningful conversion actions, connect the appropriate measurement tools, and check how events are recorded across your website and advertising accounts.",
      "From Google Ads and Google Analytics 4 to Google Tag Manager, we build measurement setups that help distinguish everyday interactions from valuable business outcomes.",
    ],
  },
  supportingCards: {
    card2IllustrationPath: "/images/services/google-ads/gtm-ga4-illustration.png",
    card2IllustrationAlt: "Google Tag Manager and GA4 Tag Integration Architecture",
    card3IllustrationPath: "/images/services/google-ads/tag-verification-illustration.png",
    card3IllustrationAlt: "Tag Assistant Verification and Data Quality Diagnostics",
    items: [
      {
        index: "01",
        title: "Conversion Events & Goal Mapping",
        description:
          "Identify the actions that matter to your business. We configure tracking for eligible form submissions, purchases, sign-ups, and other important interactions, with conversion settings aligned to your marketing objectives.",
      },
      {
        index: "02",
        title: "Google Tag Manager & GA4 Integration",
        description:
          "Connect your measurement tools through carefully configured tags, triggers, and events. We implement relevant Google Tag Manager and Google Analytics 4 configurations to support consistent data collection and clearer reporting.",
      },
      {
        index: "03",
        title: "Tracking Verification & Data Quality",
        description:
          "Make sure your tracking works as intended. We test event firing, investigate duplicate or missing conversions, review measurement settings, and use Google's diagnostic tools to identify implementation issues.",
      },
    ],
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google's Conversion Tracking Tools",
    description:
      "Access official Google documentation covering website conversions, tag implementation, enhanced measurement, and tracking verification.",
    items: [
      {
        id: "res-web-conversions",
        title: "Google Ads — Set Up Web Conversions",
        description:
          "Learn how Google Ads measures valuable website actions and how conversion actions are configured for campaign reporting.",
        url: "https://support.google.com/google-ads/answer/16560108",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/conversion-resource-badge-01.png",
        badgeImageAlt: "Google Ads Set Up Web Conversions Badge",
      },
      {
        id: "res-gtm-conversions",
        title: "Google Tag Manager — Google Ads Conversions",
        description:
          "Explore Google's official guidance for configuring conversion tracking tags, triggers, conversion IDs, and labels through Google Tag Manager.",
        url: "https://support.google.com/tagmanager/answer/6105160",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/conversion-resource-badge-02.png",
        badgeImageAlt: "Google Tag Manager Conversion Tagging Badge",
      },
      {
        id: "res-enhanced-conversions",
        title: "Google Ads — Enhanced Conversions for Web",
        description:
          "Understand how eligible, securely hashed first-party customer data can improve conversion measurement and support campaign optimization.",
        url: "https://support.google.com/google-ads/answer/15712870",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/conversion-resource-badge-03.png",
        badgeImageAlt: "Google Ads Enhanced Conversions for Web Badge",
      },
      {
        id: "res-tag-assistant",
        title: "Google Ads — Verify Tracking With Tag Assistant",
        description:
          "Review Google's official methods for testing conversion tags and troubleshooting unverified or inactive conversion actions.",
        url: "https://support.google.com/google-ads/answer/10989978",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/conversion-resource-badge-04.png",
        badgeImageAlt: "Google Tag Assistant Verification Diagnostics Badge",
      },
    ],
  },
  faq: {
    heading: "Common Questions About Conversion Tracking",
    items: [
      {
        id: "faq-1",
        question: "What is conversion tracking?",
        answer:
          "Conversion tracking measures valuable customer actions after interactions with your advertising. These actions can include completed purchases, enquiry submissions, sign-ups, and eligible phone calls. It helps you understand how advertising contributes to business outcomes.",
      },
      {
        id: "faq-2",
        question: "What actions can be tracked on my website?",
        answer:
          "Depending on your website and tracking configuration, you can measure purchases, form submissions, registrations, button interactions, and other relevant events. Each conversion should be selected according to its actual value to your business.",
      },
      {
        id: "faq-3",
        question: "Do I need Google Tag Manager for conversion tracking?",
        answer:
          "Not necessarily. Conversion tracking can be implemented using the Google tag directly, Google Tag Manager, or supported integrations. Google Tag Manager is especially useful when your website requires multiple tags, custom triggers, or more flexible tracking management.",
      },
      {
        id: "faq-4",
        question: "Can Google Analytics 4 conversions be used in Google Ads?",
        answer:
          "Yes. Eligible Google Analytics 4 key events can be created as conversions in Google Ads when the accounts and required settings are properly configured. Careful setup helps avoid unnecessary duplicate measurement.",
      },
      {
        id: "faq-5",
        question: "Why are my Google Ads and Google Analytics conversion numbers different?",
        answer:
          "Differences can result from attribution methods, reporting dates, conversion settings, consent choices, and how each platform processes data. Reviewing these settings can help explain reporting discrepancies.",
      },
      {
        id: "faq-6",
        question: "How do you know whether conversion tracking is working?",
        answer:
          "We test relevant customer actions, inspect tag behavior, and review available diagnostics in Google Tag Manager, Tag Assistant, Google Analytics, and Google Ads. Verification helps identify missing events, duplicate tracking, and incorrect configurations.",
      },
    ],
  },
  cta: {
    heading: "Get a Clearer Picture of Your Marketing Performance",
    description:
      "Make decisions with conversion data you can understand and evaluate. Whether you're setting up tracking for the first time or correcting an existing implementation, we'll help establish measurement that reflects your business goals.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;