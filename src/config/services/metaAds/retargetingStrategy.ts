import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const RETARGETING_STRATEGY_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Ad Retargeting Strategy | Cart Abandonment Campaigns | Brivya Solutions",
    description: "Reconnect with interested customers through smarter retargeting strategies. Deploy advanced audience tracking, dynamic ads, and behavioral follow-up.",
  },
  hero: {
    serviceTitle: "Retargeting Strategy",
    heading: "Reconnect With Interested Customers Through Smarter Retargeting",
    description: "Bring your business back into consideration when potential customers are ready to buy. We develop retargeting strategies that reconnect with website visitors and past shoppers using relevant, personalized reminders.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/meta-ads/retargeting-hero.png",
    imageAlt: "Omnichannel Customer Retargeting Workflow Illustration",
  },
  mainFeaturedCard: {
    tag: "Customer Recapture Workflow",
    heading: "Retargeting Strategies Built Around Customer Interest",
    paragraphs: [
      "Not every potential customer converts on their first visit. We tailor campaign approaches to buyer behavior—re-engaging cart abandoners, previous visitors, and warm leads with tailored reminders that encourage next steps without causing ad fatigue."
    ]
  },
  supportingCards: {
    heading: "Re-Engagement Mechanisms Deployed Sensibly",
    subtitle: "Orchestrated paths turning transient site activity back into converting customers.",
    card2IllustrationPath: "/images/services/meta-ads/abandoned-cart.png",
    card2IllustrationAlt: "Abandoned Cart Recovery Workflow Illustration",
    card3IllustrationPath: "/images/services/meta-ads/retargeting-pixels.png",
    card3IllustrationAlt: "First-Party Data and Pixel Implementation Architecture",
    items: [
      {
        index: "01",
        title: "Audience Segmentation & Retargeting",
        description: "Segment audiences based on specific website visits, product views, and engagement recency to ensure advertising remains timely and relevant.",
      },
      {
        index: "02",
        title: "Abandoned Cart & Product Retargeting",
        description: "Re-engage shoppers who added items to their cart with dynamic ads that display the exact products they viewed alongside clear return links.",
      },
      {
        index: "03",
        title: "Personalized Ads & Creative Messaging",
        description: "Address buyer hesitations by delivering tailored messages, customer reviews, and relevant incentives that encourage final purchase decisions.",
      },
      {
        index: "04",
        title: "Conversion Tracking & Campaign Optimization",
        description: "Analyze frequency rates, return visits, and conversion value to continuously balance ad exposure with maximum budget efficiency.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google & Meta's Retargeting Tools",
    description: "Access official Google Ads and Meta Blueprint documentation covering audience segmentation, dynamic remarketing, customer data, and advertising measurement.",
    items: [
      {
        id: "rtg-google-data",
        title: "Google Ads Remarketing & Your Data Segments",
        description: "Learn how Google Ads uses eligible first-party audience data to reconnect with past website visitors and app users across Google network channels.",
        url: "https://support.google.com/google-ads/answer/10569356",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/rtg-badge-01.png",
        badgeImageAlt: "Google Remarketing Documentation Badge"
      },
      {
        id: "rtg-dynamic",
        title: "Google Ads Dynamic Remarketing",
        description: "Explore how dynamic remarketing displays customized product advertisements to previous visitors based on items they browsed.",
        url: "https://support.google.com/google-ads/answer/3124536",
        iconType: "objectives",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/rtg-badge-02.png",
        badgeImageAlt: "Dynamic Remarketing Feature Guide Badge"
      },
      {
        id: "rtg-meta-custom",
        title: "Meta Custom Audiences & Audience Targeting",
        description: "Understand how Meta Ads Manager supports Custom Audience creation from website activity, customer lists, and engagement data.",
        url: "https://www.facebookblueprint.com/student/path/219694-define-audiences",
        iconType: "audience",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/rtg-badge-03.png",
        badgeImageAlt: "Meta Custom Audiences Course Badge"
      },
      {
        id: "rtg-capi",
        title: "Meta Website Data & Conversion Tracking",
        description: "Learn how Meta's Conversions API helps businesses connect website activity with advertising measurement to support reliable retargeting.",
        url: "https://www.facebookblueprint.com/student/collection/576574/path/562943",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/rtg-badge-04.png",
        badgeImageAlt: "Meta Conversions API Tracking Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Retargeting Advertising",
    items: [
      {
        id: "faq-rtg-1",
        question: "What is a retargeting strategy?",
        answer: "Retargeting reaches people who previously interacted with your brand (such as visiting your website or viewing a product) with ads that encourage them to complete an inquiry or purchase."
      },
      {
        id: "faq-rtg-2",
        question: "How is retargeting different from regular advertising?",
        answer: "Regular ads focus on introducing your brand to new prospects. Retargeting focuses on warm audiences who already know your business, delivering higher conversion efficiency."
      },
      {
        id: "faq-rtg-3",
        question: "Can retargeting help recover abandoned shopping carts?",
        answer: "Yes. Dynamic cart recovery campaigns remind shoppers of the items they left behind, often recovering a significant percentage of abandoned checkouts."
      },
      {
        id: "faq-rtg-4",
        question: "Can I retarget people who visited my website but didn't contact me?",
        answer: "Yes, provided standard pixel or Conversions API tracking is active. You can create audiences of specific page visitors and exclude those who already converted."
      },
      {
        id: "faq-rtg-5",
        question: "Will retargeting ads keep appearing too frequently?",
        answer: "We establish strict frequency caps and recency windows to ensure ads remain helpful rather than intrusive or annoying to your audience."
      },
      {
        id: "faq-rtg-6",
        question: "How do you measure the success of a retargeting campaign?",
        answer: "We evaluate return visits, assisted conversions, cost per conversion, and total revenue recovered relative to advertising costs."
      }
    ]
  },
  cta: {
    heading: "Give Interested Customers Another Reason to Choose Your Business",
    description: "A missed inquiry or unfinished purchase doesn't mean a customer has lost interest. Let's design a retargeting strategy that reconnects with warm prospects and drives them across the finish line.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};