import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const AUDIENCE_OPTIMIZATION_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Ad Audience Optimization Strategy | Intent Targeting | Brivya Solutions",
    description: "Reach more relevant customers with smarter audience optimization. Refine demographic intent, expansion networks, and programmatic delivery rules.",
  },
  hero: {
    serviceTitle: "Audience Optimization",
    heading: "Reach More Relevant Customers With Smarter Audience Optimization",
    description: "Make your advertising budget work smarter by focusing strictly on the people who matter to your business. We combine customer research, behavioral targeting, and performance analysis to improve audience relevance and eliminate wasted spend.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/meta-ads/audience-hero.png",
    imageAlt: "Audience Segmentation and Targeting Architecture Illustration",
  },
  mainFeaturedCard: {
    tag: "Delivery Precision Engineering",
    heading: "Audience Strategies Built Around Your Ideal Customers",
    paragraphs: [
      "Reaching a broad audience is easy; reaching qualified buyers requires strategy. We refine demographic signals, custom audience lists, and algorithmic reach across Google Ads and Meta platforms to balance relevance with maximum acquisition efficiency."
    ]
  },
  supportingCards: {
    heading: "Granular Audience Distribution Matrix",
    subtitle: "Precision filtration components extracting valid opportunities out of raw network activity.",
    card2IllustrationPath: "/images/services/meta-ads/audience-segments.png",
    card2IllustrationAlt: "Audience Segmentation Mapping Illustration",
    card3IllustrationPath: "/images/services/meta-ads/reach-expansion.png",
    card3IllustrationAlt: "Advantage+ and Optimized Targeting Expansion Diagram",
    items: [
      {
        index: "01",
        title: "Customer Research & Audience Insights",
        description: "Analyze customer demographics, geographic intent, and behavioral data to identify your most profitable market segments.",
      },
      {
        index: "02",
        title: "Audience Segmentation & Targeting",
        description: "Structure campaigns by customer intent—prospecting new lookalike audiences while segmenting warm buyers for targeted messaging.",
      },
      {
        index: "03",
        title: "Audience Expansion & Reach Optimization",
        description: "Leverage automated capabilities such as Google Optimized Targeting and Meta Advantage+ to discover converting users beyond manual parameters.",
      },
      {
        index: "04",
        title: "Audience Performance & Continuous Refinement",
        description: "Track acquisition cost per segment, remove underperforming audience groups, and shift spend toward top-converting customer profiles.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google & Meta's Audience Targeting Tools",
    description: "Access official Google Ads and Meta Blueprint documentation covering audience targeting, automated audience optimization, customer segmentation, and campaign audience management.",
    items: [
      {
        id: "aud-google-targ",
        title: "Google Ads Audience Targeting",
        description: "Learn how Google Ads reaches potential customers using audience characteristics, research behavior, and past business interactions.",
        url: "https://support.google.com/google-ads/answer/1704368",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/audience-badge-01.png",
        badgeImageAlt: "Google Ads Audience Targeting Guide Badge"
      },
      {
        id: "aud-google-opt",
        title: "Google Ads Optimized Targeting",
        description: "Understand how Google's optimized targeting uses audience signals and performance data to explore conversion opportunities beyond manual inputs.",
        url: "https://support.google.com/google-ads/answer/10538014",
        iconType: "bidding",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/audience-badge-02.png",
        badgeImageAlt: "Google Optimized Targeting Feature Badge"
      },
      {
        id: "aud-meta-adv",
        title: "Meta Advantage+ Audience & Campaign Planning",
        description: "Explore Meta's guidance on using automated Advantage+ audience features to support scalable campaign delivery.",
        url: "https://www.facebookblueprint.com/student/path/253166-advantage-plus-audiences",
        iconType: "creative",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/audience-badge-03.png",
        badgeImageAlt: "Meta Advantage+ Audience Course Badge"
      },
      {
        id: "aud-meta-custom",
        title: "Meta Custom Audiences & Audience Segmentation",
        description: "Learn how Meta Ads Manager supports Custom Audiences, detailed targeting, and lookalikes to help reach intended customer segments.",
        url: "https://www.facebookblueprint.com/student/path/219694-define-audiences",
        iconType: "audience",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/audience-badge-04.png",
        badgeImageAlt: "Meta Custom Audiences Definition Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Audience Optimization",
    items: [
      {
        id: "faq-aud-1",
        question: "What is audience optimization in digital advertising?",
        answer: "It is the process of testing, refining, and focusing your targeting on the customer segments that deliver the highest conversion rates and lowest acquisition costs."
      },
      {
        id: "faq-aud-2",
        question: "How can audience optimization reduce wasted ad spend?",
        answer: "By continuously auditing negative audience exclusions and underperforming demographics, we stop spending money on clicks unlikely to convert."
      },
      {
        id: "faq-aud-3",
        question: "What is the difference between broad and detailed targeting?",
        answer: "Detailed targeting limits delivery to specific interests or demographics. Broad targeting gives machine-learning algorithms flexibility to find buyers based on conversion signals."
      },
      {
        id: "faq-aud-4",
        question: "Can I target previous customers and new prospects separately?",
        answer: "Yes. We create separate prospecting and remarketing campaign structures with strict audience exclusions to prevent overlapping spend."
      },
      {
        id: "faq-aud-5",
        question: "What are Lookalike and Similar Audiences?",
        answer: "They are algorithmic segments created by identifying new people whose online behavior and profile characteristics closely mirror your best existing customers."
      },
      {
        id: "faq-aud-6",
        question: "How do you measure audience performance?",
        answer: "We evaluate cost per lead, customer acquisition cost, conversion rate, and return on ad spend across individual audience groups."
      }
    ]
  },
  cta: {
    heading: "Make Every Audience Connection More Relevant",
    description: "Focus your advertising investment on high-value customers who have a real reason to choose your business. Let's optimize your targeting strategy for maximum performance.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};