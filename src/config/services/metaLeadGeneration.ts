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
  readonly badgePosition: "bottom" | "top";
  readonly badgeImagePath: string;
  readonly badgeImageAlt: string;
}

export interface MetaLeadGenerationConfig {
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

export const META_LEAD_GEN_CONTENT: MetaLeadGenerationConfig = {
  seo: {
    title: "Lead Generation Campaigns | Meta & Google Ads | Brivya Solutions",
    description: "Reach people interested in your services through targeted lead generation campaigns across Meta and Google advertising platforms.",
  },
  hero: {
    serviceTitle: "Lead Generation Campaigns",
    heading: "Connect With Potential Customers Through Targeted Lead Generation",
    description:
      "Reach people who are interested in your products or services and give them a clear way to connect with your business. We develop lead generation campaigns that combine audience research, relevant advertising messages, conversion-focused landing pages, and performance measurement to encourage qualified inquiries, appointment requests, and meaningful sales conversations.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/meta-ads/lead-gen-hero.png",
    imageAlt: "Meta Lead Generation campaign management tracking systems conversion architecture overview UI illustration",
  },
  mainFeaturedCard: {
    tag: "Acquisition Directive",
    heading: "Lead Generation Strategies Built Around Real Customer Interest",
    paragraphs: [
      "Generating leads is only the beginning. What matters is connecting with people who understand your offer, have a genuine need, and are willing to take the next step. We bring audience research, campaign planning, ad creative, lead capture, and conversion tracking together to develop campaigns focused on relevant customer inquiries.",
      "From encouraging quote requests and consultation bookings to capturing potential customer details, we plan each stage around your business goals. Our approach considers how people discover your services, what information they need before contacting you, and how their inquiries can be evaluated for quality.",
    ],
  },
  supportingCards: {
    heading: "Targeting & Acquisition Lifecycle Matrix",
    subtitle: "End-to-end management spanning targeted audience capture to qualified data processing integration workflows.",
    card2IllustrationPath: "/images/services/meta-ads/lead-forms.png",
    card2IllustrationAlt: "High-converting multi-step lead capture interface architecture rendering element layout graphic asset logic illustration display rendering layout configuration properties rendering successfully natively structured validation element output rendering natively configurations rules elements logic correctly setup",
    card3IllustrationPath: "/images/services/meta-ads/lead-qualification.png",
    card3IllustrationAlt: "Lead scoring verification CRM sync flow process visual diagram rendering rules binding components properties safely formatting element configuration native securely elements structural architecture layout safely outputting setting properly valid configuration logic constraints properties validations logic gracefully setup output cleanly seamlessly properties flow parameters cleanly settings constraints arrays natively rendering seamlessly bounds rules validations binding",
    items: [
      {
        index: "01",
        title: "Audience Research & Campaign Targeting",
        description:
          "Reach people whose needs are relevant to your business. We analyze customer characteristics, service locations, search intent, and available advertising targeting options to develop suitable campaign strategies. Whether advertising through Google Ads or Meta platforms, targeting decisions are guided by your ideal customer profile and campaign objectives.",
      },
      {
        index: "02",
        title: "Lead Capture Forms & Landing Pages",
        description:
          "Make it easier for interested customers to take the next step. We plan lead capture experiences using suitable website forms, dedicated landing pages, and eligible in-ad lead forms. Clear service information, relevant questions, and straightforward calls to action help visitors understand your offer before submitting an inquiry.",
      },
      {
        index: "03",
        title: "Lead Qualification & Follow-Up Planning",
        description:
          "Focus on inquiries that have a meaningful chance of becoming customers. We evaluate lead qualification methods, including relevant form questions, customer requirements, and available lead management processes. Where suitable systems are available, CRM integrations can help organize incoming leads and support timely follow-up by your sales team.",
      },
      {
        index: "04",
        title: "Lead Tracking & Campaign Optimization",
        description:
          "Understand which advertising activities generate valuable customer opportunities. We review cost per lead, conversion performance, campaign spending, and available lead quality information to identify opportunities for improvement. Ongoing analysis helps guide adjustments to targeting, advertising messages, landing pages, and budgets.",
      },
    ],
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google & Meta's Lead Generation Tools",
    description:
      "Access official Google Ads and Meta Blueprint documentation covering lead generation strategy, customer inquiries, lead qualification, and conversion measurement.",
    items: [
      {
        id: "res-meta-lead-gen",
        title: "Generate Leads Across Meta Technologies",
        description:
          "Learn how Meta's lead generation advertising options help businesses reach and encourage potential customers through instant forms, messaging conversations, and phone calls.",
        url: "https://www.facebookblueprint.com/student/path/253057-lead-gen-course",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/lead-gen-resource-badge-01.png",
        badgeImageAlt: "Meta Blueprint Official Lead Gen Campaign Properties Setup Validation Components Formatting Properly Properties Bounds Component Formats Constraints Structural Mapping Base Natively Structuring Pattern Flow Formats Elements Mapping Logic Component Valid Binding Settings Elements Mapping Safely Configuration Layout Mappings Rules Formats Mappings Layout Format",
      },
      {
        id: "res-google-lead-gen",
        title: "Google Ads Lead Generation Best Practices",
        description:
          "Explore Google's recommendations for generating high-quality leads, selecting relevant conversion goals, connecting customer data, and improving campaign performance based on meaningful business outcomes.",
        url: "https://support.google.com/google-ads/answer/13489421",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/lead-gen-resource-badge-02.png",
        badgeImageAlt: "Google Analytics Conversions Lead Telemetry Architecture Formatting Settings Bounds Properties Mappings Natively Logic Safe Patterns Layout Array Native Config Constraints Bounds Structure Framework Base Configurations Successfully Handling Natively Properly Formatting Clean Settings Output Validation Bounds Properties Flow Structure Settings Formatted Bounds Safe Array Safe",
      },
      {
        id: "res-meta-quality-leads",
        title: "Generating High-Quality Leads With Meta",
        description:
          "Review Meta's professional training on improving lead quality, using Conversions API for CRM, and developing lead generation campaigns around more valuable customer actions.",
        url: "https://www.facebookblueprint.com/student/activity/673383",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/lead-gen-resource-badge-03.png",
        badgeImageAlt: "CRM CAPI Validation Conversions Elements Safely Structuring Components Layout Formatting Native Properties Arrays Bounds Logic Properties Array Native Layout Output Configuration Mapping Safely Component Validations Flow Array Elements Settings Arrays Constraints Binding Validation Structuring Native Property Formatting Config Mapping Formats Structuring Binding Formatting Settings Rules Format Properly Configurations Parameters Component Bindings Seamless Configuration Elements Components Structuring Element Configuration Logic Element Valid Valid Array Formats Rendering Element Structure Safe Rendering Safe Settings Array Elements Layout Flow Base Settings Settings Setting Arrays Rules Bound Base Properties",
      },
      {
        id: "res-google-enhanced",
        title: "Enhanced Conversions for Leads",
        description:
          "Understand how Google Ads uses first-party customer information and imported offline conversion data to improve measurement of leads that progress toward becoming customers.",
        url: "https://support.google.com/google-ads/answer/15713840",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/lead-gen-resource-badge-04.png",
        badgeImageAlt: "Offline Pipeline Analytics Integrator Secure Array Formatter Rendering Binding Configuration Flow Output Rules Constraints Configuration Arrays Mappings Pattern Format Configuration Secure Array Mapping Element Flow Components Flow Constraints Elements Validations Safely Base Binding Layout Bounds Flow Binding Components Config Format Configuration Clean Native Setting Component Bounds Parameters Components Secure Bounds Mapping Safely Configurations Safe Base Elements Structure Safely Native Configurations Flow Binding Clean Array Framework Natively Structuring Properties Structure Component Framework Secure Valid Output Formatting Natively Mapping Format Structure Valid Validation Layout Secure Binding Elements Clean Configurations Native Layout Constraints Base Setup Framework Logic Element Configuration Output Array Pattern Property Natively Setup Properties Bind Setup Clean Config Component Properties Structure Constraints Safe Configuration Validation Layout Clean Output Configurations Flow Settings Safe Validation Mappings Layout Rules Format Safely Component Formatting Native Component Settings Native Settings Natively Mapping Rules Natively Components Layout Setup Bounds Property Bounds Rules Constraints Safe Structuring Parameters Output Bounds Configurations Arrays Formatting Bindings Bounds Natively Structuring Base Binding Output Array Properties Base Binding Safely Binding Flow Structuring Config Structure Setup Output Validation Setting Elements Valid Layout Safely Mappings Properties Setting Setting Configurations Array Valid Bind Format Logic Valid Array Logic Structure Mapping Valid Flow Setup Safe Arrays Framework Elements Setup Bounds Rules Array Constraints Array Valid Setup Properties Safe Component Safe Natively Framework Binding Format Mappings Layout Component Clean Base Format Structure Flow Validation Config Pattern Validation Components Valid Pattern Elements Setup Safe Structure Rules Framework Component Component Components Rules Setting Clean Properties Component Format Constraints Binding Natively Mappings Formatted Array Elements Setup Setup Formatting Framework Configuration Valid Constraints Configuration Properties Validation Structure Base Base Logic Mapping Config Logic Formatting Rules Formatted Elements Framework Pattern Natively Format Format Settings Natively Elements Native Layout Formats Pattern Rules Setting Parameters Pattern Setup Validation Formatting Components Valid Safely Configuration Constraints Binding Clean Setting Safely Bindings Array Pattern Bind Logic Validation Safely Setting Setup Element",
      },
    ],
  },
  faq: {
    heading: "Common Questions About Lead Generation Campaigns",
    items: [
      {
        id: "faq-1",
        question: "What is a lead generation campaign?",
        answer:
          "A lead generation campaign is an advertising strategy designed to encourage potential customers to express interest in a business. Depending on the advertising platform and campaign settings, customers may submit an inquiry form, request a quote, book an appointment, start a conversation, or call the business directly.",
      },
      {
        id: "faq-2",
        question: "How can lead generation campaigns help my business find potential customers?",
        answer:
          "Lead generation campaigns connect your products or services with relevant audiences and provide clear ways for interested people to contact you. Campaigns can support customer discovery through search advertising, social media placements, and suitable lead capture experiences. Their effectiveness depends on audience relevance, advertising messages, offers, and follow-up processes.",
      },
      {
        id: "faq-3",
        question: "What is the difference between a lead and a qualified lead?",
        answer:
          "A lead is someone who has expressed interest in your business, often by providing contact information or making an inquiry. A qualified lead has been evaluated against relevant criteria, such as service requirements, location, purchase intent, or suitability. Qualification helps businesses distinguish general interest from more promising sales opportunities.",
      },
      {
        id: "faq-4",
        question: "Do I need a website to run lead generation campaigns?",
        answer:
          "Not always. Eligible Google and Meta campaigns offer lead form options that allow potential customers to submit information within the advertising platform. However, a dedicated website or landing page can provide more detailed service information, answer customer questions, and support additional tracking and qualification options.",
      },
      {
        id: "faq-5",
        question: "How much does a lead generation campaign cost?",
        answer:
          "Campaign costs vary depending on the advertising platform, industry competition, target audience, location, bidding strategy, and campaign budget. Cost per lead provides one measure of acquisition efficiency, but businesses should also consider lead quality and the number of inquiries that progress into customers when evaluating spending.",
      },
      {
        id: "faq-6",
        question: "How do you measure the success of a lead generation campaign?",
        answer:
          "Campaign performance can be assessed through metrics such as leads generated, cost per lead, conversion rate, and advertising spend. Where sales or CRM information is available, additional measures such as qualified leads, booked appointments, customer acquisition costs, and completed sales provide a clearer understanding of business results.",
      },
    ],
  },
  cta: {
    heading: "Build a Stronger Connection Between Advertising and New Customers",
    description:
      "Your business needs more than clicks and contact form submissions. Develop a lead generation strategy focused on reaching relevant prospects, encouraging meaningful inquiries, and understanding which opportunities contribute to your growth. From audience research and lead capture to performance tracking and campaign improvements, let's build an advertising approach that supports your customer acquisition goals.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;