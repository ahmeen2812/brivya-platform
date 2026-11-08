import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const FACEBOOK_ADS_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Facebook Ads Advertising Services | Brivya Solutions",
    description: "Connect your business with potential customers through targeted Facebook advertising. Expert audience research, creative strategy, and ROI-focused optimization.",
  },
  hero: {
    serviceTitle: "Facebook Ads",
    heading: "Reach the Right Customers With Facebook Advertising",
    description: "Connect your business with potential customers through targeted Facebook advertising. We develop campaigns that combine audience research, engaging ad creative, strategic placements, and ongoing performance management to build brand awareness, encourage customer inquiries, and support measurable business growth.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/meta-ads/facebook-hero-illustration.png",
    imageAlt: "Targeted Facebook Ad Campaign Metrics Illustration",
  },
  mainFeaturedCard: {
    tag: "Platform Strategy",
    heading: "Facebook Ad Campaigns Built Around Your Business Goals",
    paragraphs: [
      "Effective Facebook advertising starts with understanding your customers and what motivates them to take action. Reaching people is only part of the process. Your ads also need relevant messaging, clear offers, and a suitable destination for potential customers.",
      "We bring campaign planning, audience selection, creative strategy, budget management, and performance measurement together to develop advertising approaches aligned with your business objectives.",
      "Whether your goal is to introduce your brand, generate customer inquiries, or increase online sales, we focus on creating relevant advertising experiences and making informed improvements based on campaign results."
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
        description: "Connect with audiences who may be interested in your products or services. We develop targeting strategies using available location, demographic, interest, and audience options. Where eligible, Custom Audiences and lookalike audiences can help support customer engagement and discovery while accounting for Meta's automated audience delivery features.",
      },
      {
        index: "02",
        title: "Ad Formats & Placements",
        description: "Present your business through advertising formats suited to your message and audience. We plan campaigns using eligible image, video, carousel, Stories, and Reels placements across Facebook and other selected Meta platforms. Format and placement decisions consider campaign objectives, creative requirements, and audience behavior.",
      },
      {
        index: "03",
        title: "Ad Creative & Messaging",
        description: "Give potential customers a clear reason to learn more about your business. We develop advertising messages, headlines, visual concepts, and calls to action that communicate your products, services, and offers. Creative testing helps identify which messages and formats encourage meaningful customer engagement.",
      },
      {
        index: "04",
        title: "Campaign Tracking & Optimization",
        description: "Understand how your Facebook advertising performs and where improvements may be needed. We review campaign spending, reach, engagement, costs, and tracked customer actions to evaluate performance. Ongoing analysis helps guide adjustments to creative, audience settings, budgets, and campaign delivery.",
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
        description: "Learn how Meta Ads Manager connects advertising objectives with business goals, helping advertisers plan campaigns for relevant customer actions and measure campaign success.",
        url: "https://metaspark.facebookblueprint.com/student/path/211544-campaign-objectives-ads-manager",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/meta-badge-objectives.png",
        badgeImageAlt: "Facebook Campaign Objectives Asset Badge"
      },
      {
        id: "fb-audiences",
        title: "Meta Ads Audience Targeting",
        description: "Explore the different audience options available in Meta Ads Manager and learn how advertisers create audiences for campaigns based on their marketing objectives.",
        url: "https://www.facebookblueprint.com/student/collection/255063/path/231052",
        iconType: "audience",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/meta-badge-audience.png",
        badgeImageAlt: "Meta Custom Audiences Segment Tool Icon"
      },
      {
        id: "fb-formats",
        title: "Facebook Ad Formats & Creative Guidelines",
        description: "Review Meta's guidance on advertising formats, creative components, ad copy, visuals, and placement considerations when preparing advertising campaigns.",
        url: "https://www.facebookblueprint.com/student/path/211553-ads-manager-visual-ads-course",
        iconType: "creative",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/meta-badge-creative.png",
        badgeImageAlt: "Facebook Ad Placement Preview Tool Icon"
      },
      {
        id: "fb-tracking",
        title: "Meta Pixel & Conversions API",
        description: "Understand how the Meta Pixel and Conversions API can help businesses measure website customer actions and use conversion information to support advertising optimization.",
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
        answer: "Facebook Ads are paid advertisements businesses can create and manage through Meta Ads Manager. Advertisers select a campaign objective, define eligible audience and placement settings, set a budget, and provide advertising creative. Meta's advertising system then delivers ads through its auction and delivery processes."
      },
      {
        id: "faq-fb-2",
        question: "Can Facebook Ads help my business generate leads and sales?",
        answer: "Facebook Ads can support lead generation and online sales through suitable campaign objectives and conversion locations. Depending on campaign settings, businesses can encourage people to complete lead forms, visit websites, send messages, or make purchases. Actual results depend on factors such as audience relevance, advertising creative, offers, and customer experience."
      },
      {
        id: "faq-fb-3",
        question: "Can I advertise to customers in specific locations?",
        answer: "Yes. Meta Ads Manager provides location targeting options that help businesses advertise in selected geographic areas. Other eligible audience settings may include age, interests, and custom audience options. Available controls can vary by campaign configuration, region, and applicable advertising restrictions."
      },
      {
        id: "faq-fb-4",
        question: "Can my Facebook Ads also appear on Instagram?",
        answer: "Yes. Eligible Meta advertising campaigns can deliver ads across Facebook and Instagram, along with other supported placements. Advertisers can review available placement controls, while Meta Advantage+ placements can automatically distribute ads across eligible placements based on campaign settings."
      },
      {
        id: "faq-fb-5",
        question: "How much does Facebook advertising cost?",
        answer: "Facebook advertising costs vary depending on factors such as your budget, audience, campaign objective, competition, and ad delivery. Meta Ads Manager allows advertisers to configure daily or lifetime budgets. Advertising spend and any professional campaign management fees are separate considerations."
      },
      {
        id: "faq-fb-6",
        question: "How do you measure Facebook Ads performance?",
        answer: "Campaign performance can be evaluated through metrics such as reach, impressions, link clicks, click-through rate, cost per result, and tracked conversions. Where properly configured, the Meta Pixel and Conversions API can provide additional website event data. Businesses can also review lead quality, completed sales, and revenue information to better understand advertising outcomes."
      }
    ]
  },
  cta: {
    heading: "Connect With More Potential Customers Through Facebook Ads",
    description: "Build a Facebook advertising strategy focused on reaching relevant audiences and encouraging meaningful customer actions. From campaign planning and creative development to performance tracking and ongoing optimization, let's create an approach that supports your business goals and advertising budget.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};