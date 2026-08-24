/**
 * BRIVYA SOLUTIONS — GOOGLE ADS CAMPAIGN MANAGEMENT CONTENT MANIFEST
 * Authoritative content mapping for desktop and mobile component rendering arrays.
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
  readonly iconType: "objectives" | "search-terms" | "bidding" | "conversion-measurement";
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
}

export interface CampaignManagementConfig {
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
    readonly tag: string;
    readonly heading: string;
    readonly paragraphs: readonly string[];
  };
  readonly supportingCards: {
    readonly heading: string;
    readonly subtitle: string;
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

export const CAMPAIGN_MANAGEMENT_CONTENT: CampaignManagementConfig = {
  seo: {
    title: "Google Ads Campaign Management | Brivya Solutions",
    description:
      "Make your advertising budget work toward the results that matter to your business. We plan, manage, and optimize Google Ads campaigns for growth.",
  },
  hero: {
    serviceTitle: "Campaign Management",
    heading: "Google Ads Campaign Management Focused on Your Business Goals",
    description:
      "Make your advertising budget work toward the results that matter to your business. We plan, manage, and optimize Google Ads campaigns with a focus on relevant audiences, efficient spending, and measurable customer actions. From campaign setup to ongoing performance improvements, we help keep your advertising aligned with your business objectives.",
    imagePath: "/images/services/google-ads/management-hero-illustration.png",
    imageAlt: "Google Ads dashboard performance optimization strategies",
  },
  mainFeaturedCard: {
    tag: "Management Directive",
    heading: "Campaign Management Built Around Your Advertising Goals",
    paragraphs: [
      "Effective advertising requires more than launching campaigns and generating clicks. It takes clear objectives, relevant targeting, thoughtful budget allocation, and ongoing performance analysis to understand what your advertising is achieving.",
      "We bring campaign strategy, account management, bidding decisions, ad optimization, and conversion measurement together to support your marketing goals. Whether you want to generate leads, increase online sales, or improve existing campaigns, our approach focuses on making informed decisions using campaign performance data.",
    ],
  },
  supportingCards: {
    heading: "Capabilities Structured for Conversion Focus",
    subtitle: "Orchestrating audience research, keyword targeting, bid efficiency, and analytics tracking.",
    card2IllustrationPath: "/images/services/google-ads/management-supporting-01.png",
    card2IllustrationAlt: "Brivya specific performance campaign structuring flow illustration",
    card3IllustrationPath: "/images/services/google-ads/management-supporting-02.png",
    card3IllustrationAlt: "ROAS monitoring telemetry implementation display",
    items: [
      {
        index: "01",
        title: "Campaign Planning & Strategy",
        description:
          "Build campaigns around clear business objectives and customer needs. We assess your products or services, target market, advertising goals, and available budget to develop a suitable campaign structure. Each strategy considers the most relevant campaign types, targeting methods, and performance indicators.",
      },
      {
        index: "02",
        title: "Audience & Keyword Management",
        description:
          "Connect your advertising with people searching for or showing interest in relevant products and services. We review keywords, audience settings, locations, and available search-term data to improve campaign relevance. Where appropriate, negative keywords help reduce exposure to searches that are unlikely to match your business offering.",
      },
      {
        index: "03",
        title: "Budget & Bid Optimization",
        description:
          "Keep campaign spending aligned with your advertising priorities. We review budgets, bidding strategies, competition, and performance trends to identify opportunities for more efficient allocation. Adjustments are guided by campaign objectives and available data rather than unnecessary changes or spending increases.",
      },
      {
        index: "04",
        title: "Conversion Tracking & Performance Reporting",
        description:
          "Understand what happens after someone interacts with your ads. We assess conversion measurement for meaningful actions such as purchases, inquiries, form submissions, and eligible phone calls. Campaign reports help evaluate advertising costs, conversions, and performance trends, providing a clearer basis for future decisions.",
      },
    ],
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google's Campaign Management Tools",
    description:
      "Access official Google Ads documentation covering campaign planning, keyword optimization, bidding strategies, and conversion measurement.",
    items: [
      {
        id: "res-campaign-objectives",
        title: "Google Ads Campaign Objectives",
        description:
          "Learn how Google Ads campaign objectives help advertisers select suitable campaign types and settings for goals such as sales, leads, website traffic, and brand awareness.",
        url: "https://support.google.com/google-ads/answer/7450050",
        iconType: "objectives",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/management-resource-badge-01.png",
        badgeImageAlt: "Google Ads Goals Optimization Tool Guide Resource Asset",
      },
      {
        id: "res-search-terms",
        title: "Search Terms Report & Keyword Optimization",
        description:
          "Understand how the search terms report helps identify eligible searches that triggered ads, evaluate search relevance, and inform keyword and negative keyword decisions.",
        url: "https://support.google.com/google-ads/answer/2472708",
        iconType: "search-terms",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/management-resource-badge-02.png",
        badgeImageAlt: "Keyword Query Insights Telemetry Interface Guide Feature Badge",
      },
      {
        id: "res-bidding",
        title: "Google Ads Bidding Strategies",
        description:
          "Explore Google's bidding approaches for different advertising objectives, including website traffic, conversions, visibility, and video engagement.",
        url: "https://support.google.com/google-ads/answer/12929373",
        iconType: "bidding",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/management-resource-badge-03.png",
        badgeImageAlt: "Live CPC & Target ROAS Algorithms Adjustment Strategies Resource Item",
      },
      {
        id: "res-conversion-measurement",
        title: "Google Ads Conversion Measurement",
        description:
          "Learn how conversion measurement helps advertisers evaluate valuable customer actions, compare campaign performance, and make informed advertising decisions.",
        url: "https://support.google.com/google-ads/answer/1722022",
        iconType: "conversion-measurement",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/management-resource-badge-04.png",
        badgeImageAlt: "First-party pipeline event capture tools manual",
      },
    ],
  },
  faq: {
    heading: "Common Questions About Google Ads Campaign Management",
    items: [
      {
        id: "faq-1",
        question: "What does Google Ads campaign management include?",
        answer:
          "Google Ads campaign management involves planning, setting up, monitoring, and improving advertising campaigns. Depending on the service scope, this can include campaign strategy, keyword research, audience targeting, budget management, bidding adjustments, ad performance reviews, conversion tracking, and reporting.",
      },
      {
        id: "faq-2",
        question: "Can you manage my existing Google Ads campaigns?",
        answer:
          "Yes. Existing campaigns can be reviewed to identify potential issues with targeting, campaign structure, bidding strategies, advertising costs, and conversion tracking. Recommendations can then be developed based on your business goals and available account performance data.",
      },
      {
        id: "faq-3",
        question: "Which types of Google Ads campaigns can be managed?",
        answer:
          "Google Ads supports several campaign types, including Search, Display, Shopping, Video, and Performance Max. Each offers different advertising capabilities and placements. The appropriate campaign type depends on your products or services, target customers, marketing objectives, and available resources.",
      },
      {
        id: "faq-4",
        question: "How can campaign management help reduce wasted advertising spend?",
        answer:
          "Campaign management can identify opportunities to improve spending efficiency by reviewing search terms, targeting settings, budgets, bids, and campaign performance. Negative keywords and other eligible targeting controls can help limit irrelevant exposure, although they cannot eliminate every unproductive click or guarantee conversions.",
      },
      {
        id: "faq-5",
        question: "How do you measure Google Ads campaign performance?",
        answer:
          "Performance is evaluated using metrics relevant to the campaign objective, including impressions, clicks, click-through rate, advertising costs, conversions, cost per conversion, and conversion value where available. Properly configured conversion tracking provides additional insight into how advertising contributes to customer actions.",
      },
      {
        id: "faq-6",
        question: "How much does Google Ads campaign management cost?",
        answer:
          "The total cost depends on your advertising budget and the management services required. Google Ads spending is influenced by factors such as campaign type, bidding strategy, targeting, and competition. Professional management fees depend on the number of campaigns, account complexity, and scope of ongoing work.",
      },
    ],
  },
  cta: {
    heading: "Give Your Google Ads Campaigns a Clearer Direction",
    description:
      "Make informed advertising decisions with campaign management focused on your business priorities. From improving targeting and reviewing budgets to measuring meaningful customer actions, let's build a practical approach to managing your Google Ads campaigns.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;