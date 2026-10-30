import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const LEAD_GENERATION_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "Lead Generation Ad Campaigns | B2B & B2C Social Lead Gen | Brivya Solutions",
    description: "Connect with high-intent prospects through targeted lead generation campaigns. Structured capture funnels that turn interest into qualified sales opportunities.",
  },
  hero: {
    serviceTitle: "Lead Generation Campaigns",
    heading: "Connect With Potential Customers Through Targeted Lead Generation Campaigns",
    description: "Reach people who have a genuine need for your services and provide a seamless way to connect. We build lead generation campaigns that combine audience intelligence, clear messaging, and high-converting capture paths to drive qualified sales conversations.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/meta-ads/lead-generation-hero.png",
    imageAlt: "Lead Generation Funnel Architecture Illustration",
  },
  mainFeaturedCard: {
    tag: "Targeted Growth Blueprint",
    heading: "Lead Generation Strategies Built Around Real Customer Interest",
    paragraphs: [
      "From encouraging quote requests and consultation bookings to capturing qualified customer details, we plan each stage around commercial intent. Our approach considers how buyers discover your services, what information they need before contacting you, and how their inquiries can be evaluated for genuine quality."
    ]
  },
  supportingCards: {
    heading: "Systemized Conversion Orchestration Paths",
    subtitle: "Structured engineering applying audience research, frictionless capture forms, and CRM integration.",
    card2IllustrationPath: "/images/services/meta-ads/lead-generation-forms.png",
    card2IllustrationAlt: "Lead Capture Form Optimization Illustration",
    card3IllustrationPath: "/images/services/meta-ads/lead-crm-flow.png",
    card3IllustrationAlt: "CRM Integration and Lead Qualification Workflow",
    items: [
      {
        index: "01",
        title: "Audience Research & Campaign Targeting",
        description: "Reach people whose needs are relevant to your business. We analyze customer characteristics, service locations, search intent, and available advertising targeting options to develop suitable campaign strategies.",
      },
      {
        index: "02",
        title: "Lead Capture Forms & Landing Pages",
        description: "Make it easier for interested customers to take the next step. We plan lead capture experiences using suitable website forms, dedicated landing pages, and eligible in-ad lead forms with clear calls to action.",
      },
      {
        index: "03",
        title: "Lead Qualification & Follow-Up Planning",
        description: "Focus on inquiries that have a meaningful chance of becoming customers. We evaluate lead qualification methods and connect CRM workflows to support timely follow-up by your sales team.",
      },
      {
        index: "04",
        title: "Lead Tracking & Campaign Optimization",
        description: "Understand which advertising activities generate valuable customer opportunities. We review cost per lead, conversion rates, and lead quality metrics to guide continuous campaign adjustments.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google & Meta's Lead Generation Tools",
    description: "Access official Google Ads and Meta Blueprint documentation covering lead generation strategy, customer inquiries, lead qualification, and conversion measurement.",
    items: [
      {
        id: "lead-gads",
        title: "Google Ads Lead Generation Best Practices",
        description: "Explore Google's recommendations for generating high-quality leads, selecting relevant conversion goals, connecting customer data, and improving campaign performance based on business outcomes.",
        url: "https://support.google.com/google-ads/answer/13489421",
        iconType: "guide",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/lead-badge-01.png",
        badgeImageAlt: "Google Ads Lead Generation Guide Badge"
      },
      {
        id: "lead-meta",
        title: "Generate Leads Across Meta Technologies",
        description: "Learn how Meta's lead generation advertising options help businesses reach and encourage potential customers through instant forms, messaging conversations, and phone calls.",
        url: "https://www.facebookblueprint.com/student/path/253057-lead-gen-course",
        iconType: "creative",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/lead-badge-02.png",
        badgeImageAlt: "Meta Lead Generation Course Badge"
      },
      {
        id: "lead-enh",
        title: "Enhanced Conversions for Leads",
        description: "Understand how Google Ads uses first-party customer information and imported offline conversion data to improve measurement of leads that progress toward becoming customers.",
        url: "https://support.google.com/google-ads/answer/15713840",
        iconType: "metrics",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/lead-badge-03.png",
        badgeImageAlt: "Enhanced Conversions for Leads Documentation Badge"
      },
      {
        id: "lead-highq",
        title: "Generating High-Quality Leads With Meta",
        description: "Review Meta's professional training on improving lead quality, using Conversions API for CRM, and developing lead generation campaigns around more valuable customer actions.",
        url: "https://www.facebookblueprint.com/student/activity/673383",
        iconType: "audience",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/lead-badge-04.png",
        badgeImageAlt: "Meta Lead Quality Training Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About Lead Generation Campaigns",
    items: [
      {
        id: "faq-lg-1",
        question: "What is a lead generation campaign?",
        answer: "A lead generation campaign is an advertising strategy designed to encourage potential customers to express interest in a business. Depending on platform settings, customers may submit an inquiry form, request a quote, book an appointment, or call directly."
      },
      {
        id: "faq-lg-2",
        question: "How can lead generation campaigns help my business find potential customers?",
        answer: "Lead generation campaigns connect your services with relevant audiences and provide clear ways for interested people to contact you through search ads, social placements, and dedicated capture experiences."
      },
      {
        id: "faq-lg-3",
        question: "What is the difference between a lead and a qualified lead?",
        answer: "A lead has expressed general interest. A qualified lead has been evaluated against relevant criteria—such as budget, project scope, and purchase intent—making them a much stronger sales opportunity."
      },
      {
        id: "faq-lg-4",
        question: "Do I need a website to run lead generation campaigns?",
        answer: "Not necessarily. In-platform lead forms on Google and Meta allow users to submit details directly within the ad. However, a dedicated landing page typically supports deeper qualification and customer trust."
      },
      {
        id: "faq-lg-5",
        question: "How much does a lead generation campaign cost?",
        answer: "Costs vary depending on industry competition, target location, and bidding strategy. We evaluate cost per lead alongside lead-to-customer conversion rates to ensure your customer acquisition remains profitable."
      },
      {
        id: "faq-lg-6",
        question: "How do you measure the success of a lead generation campaign?",
        answer: "We assess metrics including qualified leads, cost per qualified inquiry, form conversion rates, and revenue generated from converted clients rather than raw click volume."
      }
    ]
  },
  cta: {
    heading: "Build a Stronger Connection Between Advertising and New Customers",
    description: "Develop a targeted lead generation strategy focused on reaching qualified buyers and measuring pipeline revenue. Let's design an advertising approach tailored to your business acquisition goals.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};