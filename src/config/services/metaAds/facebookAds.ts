import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const FACEBOOK_ADS_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Facebook Ads Advertising Services | Brivya Solutions",
    description: "Connect your business with potential customers through targeted Facebook advertising. Expert audience research, creative strategy, and ROI-focused optimization.",
  },
  hero: {
    serviceTitle: "Facebook Ads",
    heading: "Reach the Right Customers With Facebook Advertising",
    description: "Connect your business with potential customers through targeted Facebook advertising. We build campaigns combining audience intelligence, compelling creative, and ongoing optimization to drive measurable business growth.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/meta-ads/facebook-hero-illustration.png",
    imageAlt: "Targeted Facebook Ad Campaign Metrics Illustration",
  },
  mainFeaturedCard: {
    tag: "Platform Strategy",
    heading: "Facebook Ad Campaigns Built Around Your Business Goals",
    paragraphs: [
      "Whether your goal is to introduce your brand, generate customer inquiries, or increase online sales, we bring campaign planning, audience selection, creative testing, and conversion tracking together to deliver advertising approaches aligned with your revenue objectives."
    ]
  },
  supportingCards: {
    heading: "Structured for Intent and Commercial Return",
    subtitle: "Orchestrating audience delivery, creative execution, and accurate telemetry integration.",
    card2IllustrationPath: "/images/services/meta-ads/facebook-supporting-formats.png",
    card2IllustrationAlt: "Facebook Campaign Formats and Placements Optimization",
    card3IllustrationPath: "/images/services/meta-ads/facebook-creative-messaging.png",
    card3IllustrationAlt: "Advertising Visual Messaging Content Strategy",
    items: [
      {
        index: "01",
        title: "Audience Research & Targeting",
        description: "Connect with audiences who may be interested in your products or services. We develop targeting strategies using available demographic, interest, Custom Audience, and lookalike options.",
      },
      {
        index: "02",
        title: "Ad Formats & Placements",
        description: "Present your business through advertising formats suited to your audience. We plan campaigns across image, video, carousel, Stories, and Reels placements across Facebook and Meta networks.",
      },
      {
        index: "03",
        title: "Ad Creative & Messaging",
        description: "Give potential customers a clear reason to learn more. We develop persuasive copy, strong hooks, and clear calls to action, supported by ongoing creative testing.",
      },
      {
        index: "04",
        title: "Campaign Tracking & Optimization",
        description: "Review campaign spending, reach, engagement, and conversion data to guide continuous adjustments to creative, audience settings, budgets, and bid strategies.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Meta's Advertising Tools & Resources",
    description: "Access official Meta Blueprint resources covering Facebook advertising objectives, audience targeting, creative formats, and conversion measurement.",
    items: [
      {
        id: "fb-obj",
        title: "Facebook Ad Campaign Objectives",
        description: "Learn how Meta Ads Manager connects advertising objectives with business goals, helping advertisers plan campaigns for relevant customer actions.",
        url: "https://metaspark.facebookblueprint.com/student/path/211544-campaign-objectives-ads-manager",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/meta-badge-objectives.png",
        badgeImageAlt: "Facebook Campaign Objectives Asset Badge"
      },
      {
        id: "fb-audiences",
        title: "Meta Ads Audience Targeting",
        description: "Explore the different audience options available in Meta Ads Manager to build campaigns based on precise marketing goals.",
        url: "https://www.facebookblueprint.com/student/collection/255063/path/231052",
        iconType: "audience",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/meta-badge-audience.png",
        badgeImageAlt: "Meta Custom Audiences Segment Tool Icon"
      },
      {
        id: "fb-formats",
        title: "Facebook Ad Formats & Creative Guidelines",
        description: "Review Meta's guidance on advertising formats, creative components, ad copy, visuals, and placement considerations when preparing campaigns.",
        url: "https://www.facebookblueprint.com/student/path/211553-ads-manager-visual-ads-course",
        iconType: "creative",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/meta-badge-creative.png",
        badgeImageAlt: "Facebook Ad Placement Preview Tool Icon"
      },
      {
        id: "fb-tracking",
        title: "Meta Pixel & Conversions API",
        description: "Understand how the Meta Pixel and Conversions API help businesses measure customer actions and optimize ad delivery.",
        url: "https://www.facebookblueprint.com/student/path/211547-meta-pixel-conversions-api-course",
        iconType: "metrics",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/meta-badge-tracking.png",
        badgeImageAlt: "Meta Pixel And CAPI Installation Architecture Icon"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Facebook Advertising",
    items: [
      {
        id: "faq-fb-1",
        question: "What are Facebook Ads, and how do they work?",
        answer: "Facebook Ads are paid advertisements managed through Meta Ads Manager. Advertisers define objectives, target audiences, budget rules, and creative assets, which Meta delivers via auction-based delivery."
      },
      {
        id: "faq-fb-2",
        question: "Can Facebook Ads help my business generate leads and sales?",
        answer: "Yes. By configuring conversion objectives and optimized destination pages or lead forms, businesses can drive qualified inquiries, website purchases, and direct customer interactions."
      },
      {
        id: "faq-fb-3",
        question: "Can I advertise to customers in specific locations?",
        answer: "Yes. Meta Ads Manager provides geographic targeting options allowing you to focus on selected countries, regions, cities, or custom radius boundaries."
      },
      {
        id: "faq-fb-4",
        question: "Can my Facebook Ads also appear on Instagram?",
        answer: "Yes. Campaigns can deliver across both platforms simultaneously, either through manual placement selections or automated Advantage+ distribution."
      },
      {
        id: "faq-fb-5",
        question: "How much does Facebook advertising cost?",
        answer: "Costs depend on audience competition, bidding targets, and your selected budget. Meta Ads Manager supports both daily and lifetime budget settings."
      },
      {
        id: "faq-fb-6",
        question: "How do you measure Facebook Ads performance?",
        answer: "We track reach, link clicks, cost per result, and verified conversions using Meta Pixel and Conversions API data to understand the true business return on ad spend."
      }
    ]
  },
  cta: {
    heading: "Connect With More Potential Customers Through Facebook Ads",
    description: "Build a Facebook advertising strategy focused on reaching relevant audiences and driving measurable commercial actions. Let's create an approach tailored to your business goals.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};