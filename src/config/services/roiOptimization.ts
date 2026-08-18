/**
 * BRIVYA SOLUTIONS — GOOGLE ADS ROI OPTIMIZATION CONTENT MANIFEST
 * Fully defined authoritative interface logic.
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

export interface RoiOptimizationConfig {
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

export const ROI_OPTIMIZATION_CONTENT: RoiOptimizationConfig = {
  seo: {
    title: "Google Ads ROI Optimization | Brivya Solutions",
    description:
      "Make more informed decisions with Google Ads ROI optimization. We analyze performance, track conversion value, and build high-efficiency pipelines.",
  },
  hero: {
    serviceTitle: "ROI Optimization",
    heading: "Make More Informed Decisions With Google Ads ROI Optimization",
    description:
      "Get a clearer understanding of how your advertising investment contributes to business results. We analyze campaign performance, conversion value, advertising costs, and customer actions to identify opportunities for improving returns. Our approach focuses on making better use of your Google Ads budget while keeping your advertising strategy aligned with revenue, profitability, and growth objectives.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/google-ads/roi-hero-illustration.png",
    imageAlt: "ROI dashboard telemetry and revenue performance illustration",
  },
  mainFeaturedCard: {
    tag: "Optimization Directive",
    heading: "ROI Optimization Focused on What Your Business Earns",
    paragraphs: [
      "Advertising success goes beyond generating clicks, impressions, or even conversions. What matters is whether those results create enough value to justify your investment.",
      "We bring performance analysis, conversion measurement, bidding strategy, and budget evaluation together to understand where your advertising delivers value and where improvements may be needed.",
      "By examining campaign costs alongside conversion quality and available business revenue data, we develop optimization strategies that support more informed spending decisions and sustainable advertising performance.",
    ],
  },
  supportingCards: {
    heading: "Evaluating Business Value Across Dimensions",
    subtitle: "Precision engineering applied directly toward the metrics impacting actual growth limits.",
    card2IllustrationPath: "/images/services/google-ads/roi-analysis-illustration.png",
    card2IllustrationAlt: "Account performance diagnostic interface",
    card3IllustrationPath: "/images/services/google-ads/bidding-budget-illustration.png",
    card3IllustrationAlt: "Value based ROAS adjustment structure layout",
    items: [
      {
        index: "01",
        title: "ROI Analysis & Performance Evaluation",
        description:
          "Understand the relationship between your advertising costs and business outcomes. We review campaign spending, conversion data, acquisition costs, and available revenue information to assess performance. This helps identify which campaigns contribute meaningful value and where adjustments may improve advertising efficiency.",
      },
      {
        index: "02",
        title: "Conversion Value & Revenue Tracking",
        description:
          "Measure more than the number of conversions your ads generate. We assess conversion tracking and the values assigned to customer actions, including purchases, inquiries, and qualified leads where data is available. Accurate conversion measurement helps distinguish valuable outcomes from interactions that may not contribute to your business goals.",
      },
      {
        index: "03",
        title: "Bidding & Budget Optimization",
        description:
          "Align your advertising budget with measurable campaign priorities. We evaluate bidding strategies, campaign spending, conversion costs, and return on ad spend to identify suitable optimization opportunities. Where eligible, value-based bidding approaches can help prioritize conversions that contribute greater business value.",
      },
      {
        index: "04",
        title: "Campaign Efficiency & Continuous Improvement",
        description:
          "Improve advertising performance through informed, ongoing adjustments. We analyze relevant search terms, targeting settings, ad performance, and conversion trends to identify opportunities for reducing inefficient spending. Regular performance reviews help guide campaign changes while balancing advertising efficiency with potential customer reach.",
      },
    ],
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google's ROI Measurement & Optimization Tools",
    description:
      "Access official Google Ads documentation covering return on investment, conversion values, automated bidding, and search-term performance analysis.",
    items: [
      {
        id: "res-roi",
        title: "Understanding Return on Investment (ROI)",
        description:
          "Learn how Google defines advertising ROI, why profitability matters, and how conversion measurement helps businesses assess the financial results of their campaigns.",
        url: "https://support.google.com/google-ads/answer/1722066",
        iconType: "objectives",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/roi-resource-badge-01.png",
        badgeImageAlt: "Google Return On Investment Guidelines Badge",
      },
      {
        id: "res-conversion-value",
        title: "Google Ads Conversion Value Measurement",
        description:
          "Explore how assigning values to conversions helps advertisers measure business outcomes, compare campaign performance, and inform value-based optimization.",
        url: "https://support.google.com/google-ads/answer/13064207",
        iconType: "conversion-measurement",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/roi-resource-badge-02.png",
        badgeImageAlt: "Google Value Optimization Framework Link Reference",
      },
      {
        id: "res-target-roas",
        title: "Target ROAS Bidding Strategies",
        description:
          "Understand how Google's Target ROAS bidding strategy uses conversion values and auction-time signals to adjust bids toward an average return-on-ad-spend target.",
        url: "https://support.google.com/google-ads/answer/6268637",
        iconType: "bidding",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/google-ads/roi-resource-badge-03.png",
        badgeImageAlt: "Target ROAS Automated Algorithmic Strategy Icon",
      },
      {
        id: "res-search-terms",
        title: "Search Terms Report & Performance Analysis",
        description:
          "Learn how the search terms report provides insights into eligible searches that triggered ads, helping advertisers evaluate relevance, refine keywords, and identify opportunities to reduce irrelevant exposure.",
        url: "https://support.google.com/google-ads/answer/2472708",
        iconType: "search-terms",
        badgePosition: "top",
        badgeImagePath: "/images/services/google-ads/roi-resource-badge-04.png",
        badgeImageAlt: "Diagnostic Ad Query Term Structure Telemetry Panel Box",
      },
    ],
  },
  faq: {
    heading: "Common Questions About Google Ads ROI Optimization",
    items: [
      {
        id: "faq-1",
        question: "What is ROI optimization in Google Ads?",
        answer:
          "ROI optimization is the process of evaluating and improving how advertising spending contributes to business value. It involves analyzing campaign costs, conversion performance, revenue, and relevant business expenses to identify opportunities for more profitable advertising decisions.",
      },
      {
        id: "faq-2",
        question: "What is the difference between ROI and ROAS?",
        answer:
          "ROI measures profit relative to the costs of an investment, while ROAS compares the conversion value or revenue attributed to advertising with advertising spend. A campaign can achieve a strong ROAS without necessarily generating a strong profit, particularly when product costs, operating expenses, and other business costs are considered.",
      },
      {
        id: "faq-3",
        question: "Can ROI optimization help reduce wasted advertising spend?",
        answer:
          "ROI optimization can help identify inefficient spending through campaign performance reviews, search-term analysis, targeting adjustments, and budget evaluation. These activities can reduce certain sources of unnecessary spending, although they cannot guarantee that every advertising interaction will result in a profitable customer action.",
      },
      {
        id: "faq-4",
        question: "How do you measure ROI for lead generation campaigns?",
        answer:
          "Lead generation ROI can be assessed by connecting advertising costs with the value of leads that become customers. Relevant information includes cost per lead, lead quality, conversion-to-customer rates, and revenue generated from acquired customers. Accurate measurement may require combining Google Ads data with sales or customer relationship management records.",
      },
      {
        id: "faq-5",
        question: "Does a higher ROAS always mean better campaign performance?",
        answer:
          "Not necessarily. A higher ROAS indicates more reported conversion value relative to advertising spend, but it does not automatically mean greater total profit. Profit margins, conversion volume, customer acquisition costs, and other business expenses also influence whether a campaign is financially successful.",
      },
      {
        id: "faq-6",
        question: "How long does Google Ads ROI optimization take?",
        answer:
          "ROI optimization is an ongoing process rather than a one-time adjustment. The time needed to assess meaningful changes depends on campaign history, conversion volume, sales cycles, tracking accuracy, and bidding strategy. Automated bidding strategies may also need time to learn from new data before their performance can be evaluated reliably.",
      },
    ],
  },
  cta: {
    heading: "Make Your Advertising Investment Work Toward Better Business Outcomes",
    description:
      "Understand where your Google Ads budget creates value and where improvements can make a difference. From conversion analysis and budget evaluation to bidding strategy and ongoing campaign optimization, let's develop an approach that supports your profitability goals and long-term business growth.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;