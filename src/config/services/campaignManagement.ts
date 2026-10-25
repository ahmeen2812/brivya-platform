// src/config/services/campaignManagement.ts

export interface CampaignManagementData {
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  featuredCard: {
    tag: string;
    headline: string;
    description: string;
  };
  supportingCards: {
    card01: {
      tag: string;
      title: string;
      description: string;
      metrics: { label: string; value: string }[];
    };
    card02: {
      tag: string;
      title: string;
      description: string;
      metrics: { label: string; value: string }[];
      companionImage: string;
      companionAlt: string;
    };
    card03: {
      tag: string;
      title: string;
      description: string;
      metrics: { label: string; value: string }[];
      companionImage: string;
      companionAlt: string;
    };
    card04: {
      tag: string;
      title: string;
      description: string;
      metrics: { label: string; value: string }[];
    };
  };
  officialResources: {
    tag: string;
    heading: string;
    subheading: string;
    items: {
      title: string;
      description: string;
      url: string;
      badgeImage: string;
      badgeAlt: string;
      badgePosition: 'down' | 'up';
    }[];
  };
  faqs: {
    tag: string;
    heading: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    primaryButtonText: string;
    primaryButtonUrl: string;
    secondaryButtonText: string;
  };
}

export const CAMPAIGN_MANAGEMENT_CONFIG: CampaignManagementData = {
  meta: {
    title: 'Google Ads Campaign Management & Performance Governance | Brivya Solutions',
    description:
      'We manage Google Ads campaigns with careful budget oversight, algorithmic bid strategies, and continuous performance testing to align ad spend with revenue growth.',
    canonical: 'https://brivya.com/services/google-ads/campaign-management',
  },
  hero: {
    badge: 'Campaign Governance & Optimization',
    headline: 'Keep Your Campaigns Focused on What Matters',
    subtitle: 'Disciplined budget allocation, algorithmic bid control, and continuous account governance.',
    description:
      'Successful advertising requires more than launching campaigns. We manage your Google Ads campaigns with careful budget oversight, strategic adjustments, and continuous performance evaluation, helping your advertising stay aligned with your business goals as markets and customer behavior change.',
    image: '/images/services/google-ads/hero-03-connected-measurement-system.png',
    imageAlt: 'Brivya Google Ads Campaign Governance System',
  },
  featuredCard: {
    tag: 'MANAGEMENT DIRECTIVE // GOV_01',
    headline: 'From Campaign Planning to Continuous Improvement',
    description:
      'Every campaign needs clear objectives, the right configuration, and informed decisions as performance data develops. We oversee campaign settings, advertising budgets, bidding strategies, and delivery performance to identify opportunities for improvement. Whether managing existing campaigns or organizing new ones, our approach combines structured account reviews, practical optimization, and measurable goals to keep your advertising activity purposeful and accountable.',
  },
  supportingCards: {
    card01: {
      tag: 'CAPITAL ALLOCATION',
      title: 'Budget Planning & Bid Management',
      description:
        'Make more informed decisions about your advertising spend. We review campaign budgets, bidding strategies, and performance objectives to help allocate resources appropriately and identify potential spending inefficiencies.',
      metrics: [
        { label: 'Budget Efficiency', value: 'Loss Prevention' },
        { label: 'Bidding Model', value: 'Value-Based Smart Bidding' },
        { label: 'Targeting Control', value: 'Zero Cannibalization' },
      ],
    },
    card02: {
      tag: 'ACTIVE MONITORING',
      title: 'Campaign Monitoring & Refinement',
      description:
        'Keep your campaigns relevant as performance changes. We examine campaign delivery, targeting, search terms where applicable, and advertising assets to identify issues and make considered adjustments based on available data.',
      metrics: [
        { label: 'Query Filtering', value: 'Continuous Negative Lists' },
        { label: 'Asset Relevance', value: 'Automated Diagnostic' },
        { label: 'Signal Quality', value: 'Daily Verification' },
      ],
      companionImage: '/images/services/google-ads/hero-02-purchase-conversion-phone.png',
      companionAlt: 'Mobile Conversion Diagnostics',
    },
    card03: {
      tag: 'EVALUATION & ITERATION',
      title: 'Performance Reporting & Testing',
      description:
        'Understand what is working and what needs attention. We evaluate campaign results against defined objectives and use appropriate testing methods to assess changes before making broader decisions.',
      metrics: [
        { label: 'Testing Method', value: 'Statistical Split-Testing' },
        { label: 'Data Integrity', value: 'First-Party Tracking' },
        { label: 'Reporting Cadence', value: 'Transparent Dashboards' },
      ],
      companionImage: '/images/services/google-ads/hero-03-behavior-heatmap.png',
      companionAlt: 'Telemetry & Behavioral Heatmap Evaluation',
    },
    card04: {
      tag: 'ACCOUNT SCALING',
      title: 'Strategic Growth & Structural Integrity',
      description:
        'Protect capital while scaling proven commercial intent. We deploy systematic expansion protocols—gradually uncapping budgets on high-converting clusters, refining audience signals, and preventing match-type overlap across search, display, and video campaigns.',
      metrics: [
        { label: 'Scaling Protocol', value: 'Margin-Protected' },
        { label: 'Channel Synergy', value: 'Full-Funnel Harmony' },
        { label: 'Audit Rigor', value: 'Continuous Account Hygiene' },
      ],
    },
  },
  officialResources: {
    tag: 'OFFICIAL ECOSYSTEM',
    heading: "Explore Google's Campaign Management Tools",
    subheading:
      'Access official Google documentation covering advertising budgets, bidding decisions, performance testing, and campaign reporting.',
    items: [
      {
        title: 'Google Ads Performance Planner',
        description:
          'Explore how Google’s Performance Planner forecasts potential outcomes and helps assess advertising budget decisions for eligible campaign types.',
        url: 'https://support.google.com/google-ads/answer/9230124',
        badgeImage: '/images/services/google-ads/search-resource-badge-01.png',
        badgeAlt: 'Google Ads Performance Planner Official Emblem',
        badgePosition: 'down',
      },
      {
        title: 'Google Ads — Choose the Right Bid Strategy',
        description:
          'Understand how Google’s bidding strategies support different advertising objectives, including website visits, conversions, conversion value, and visibility.',
        url: 'https://support.google.com/google-ads/answer/6167148',
        badgeImage: '/images/services/google-ads/search-resource-badge-02.png',
        badgeAlt: 'Google Ads Smart Bidding Strategy Icon',
        badgePosition: 'up',
      },
      {
        title: 'Google Ads — Set Up Custom Experiments',
        description:
          'Learn how advertisers can test campaign changes, compare results against an existing campaign, and evaluate different optimization approaches systematically.',
        url: 'https://support.google.com/google-ads/answer/6318732',
        badgeImage: '/images/services/google-ads/search-resource-badge-03.png',
        badgeAlt: 'Google Ads Experiments Badge',
        badgePosition: 'down',
      },
      {
        title: 'Google Ads — Understand Performance Reports',
        description:
          'Explore campaign reports, performance comparisons, search term analysis, and reporting features used to evaluate advertising results with precision.',
        url: 'https://support.google.com/google-ads/answer/12929875',
        badgeImage: '/images/services/google-ads/search-resource-badge-04.png',
        badgeAlt: 'Google Ads Performance Reports Documentation Badge',
        badgePosition: 'up',
      },
    ],
  },
  faqs: {
    tag: 'FREQUENTLY ASKED QUESTIONS',
    heading: 'Common Questions About Campaign Management',
    items: [
      {
        question: 'What does Google Ads campaign management include?',
        answer:
          'Campaign management involves overseeing advertising settings, budgets, bidding strategies, targeting, ad assets, and performance data. It also includes identifying issues, reviewing results, and making adjustments that support your advertising objectives.',
      },
      {
        question: 'Can you manage campaigns in my existing Google Ads account?',
        answer:
          'Yes. Existing Google Ads accounts can be connected to an agency’s manager account through Google’s account-linking process. This allows campaigns to be managed without requiring a completely new advertising account.',
      },
      {
        question: 'How often should advertising campaigns be optimized?',
        answer:
          'Optimization frequency depends on campaign activity, advertising spend, data volume, and bidding strategy. While regular monitoring is important, unnecessary or frequent changes can disrupt automated bidding and make performance harder to evaluate.',
      },
      {
        question: 'How do you decide which campaigns need a larger budget?',
        answer:
          'Budget decisions should consider campaign objectives, conversion performance, available opportunities, and expected returns. Google’s planning tools can also provide forecasts for eligible campaigns, but actual results may differ.',
      },
      {
        question: 'How do you measure campaign management performance?',
        answer:
          'We assess performance using metrics relevant to your business goals, such as conversions, cost per conversion, conversion value, return on ad spend, and campaign delivery. Reporting focuses on meaningful outcomes rather than clicks alone.',
      },
      {
        question: 'Can campaign management guarantee better results?',
        answer:
          'No responsible agency can guarantee specific advertising results. Campaign outcomes depend on factors including market competition, customer demand, budget, landing-page experience, and conversion quality. Professional management provides a structured process for evaluating performance and improving decisions.',
      },
    ],
  },
  cta: {
    badge: 'Account Review & Engagement',
    heading: 'Give Your Advertising a Clearer Direction',
    description:
      "Make more informed decisions about your campaigns, budgets, and performance. Whether you need ongoing management or a fresh perspective on your existing Google Ads account, let's develop an approach that supports your business priorities.",
    primaryButtonText: 'Start a Project',
    primaryButtonUrl: '/start-project',
    secondaryButtonText: 'Book a Consultation',
  },
};