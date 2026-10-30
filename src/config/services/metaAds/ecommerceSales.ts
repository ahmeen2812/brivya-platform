import { UnifiedServiceConfig } from "@/components/services/template/types/ServiceTemplateSchema";

export const ECOMMERCE_SALES_CONTENT: UnifiedServiceConfig = {
  seo: {
    title: "E-Commerce Sales Ad Campaigns | Brivya Solutions",
    description: "Reach ready-to-buy shoppers with targeted e-commerce campaigns across Google, Facebook, and Instagram to accelerate online sales and optimize ROAS.",
  },
  hero: {
    serviceTitle: "E-commerce Sales Campaigns",
    heading: "Reach Ready-to-Buy Shoppers With E-commerce Sales Campaigns",
    description: "Get your products in front of potential customers when they are actively shopping. We develop targeted campaigns across Google, Facebook, and Instagram designed to attract relevant shoppers and drive consistent sales volume.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
    imagePath: "/images/services/meta-ads/ecommerce-hero.png",
    imageAlt: "Omnichannel E-commerce Sales Campaign Illustration",
  },
  mainFeaturedCard: {
    tag: "Commercial Directive",
    heading: "E-commerce Campaigns Built Around Products, Customers & Sales",
    paragraphs: [
      "Driving store visitors is only valuable when shoppers feel confident completing a purchase. We align catalog feeds, dynamic shopping formats, and checkout optimization to maximize order value and return on advertising spend."
    ]
  },
  supportingCards: {
    heading: "Shopping Performance Engine Infrastructure",
    subtitle: "Precision product discovery algorithms matched seamlessly to commercial purchase intent.",
    card2IllustrationPath: "/images/services/meta-ads/ecommerce-catalog-feed.png",
    card2IllustrationAlt: "Dynamic E-commerce Catalog Feed Illustration",
    card3IllustrationPath: "/images/services/meta-ads/ecommerce-sales-tracking.png",
    card3IllustrationAlt: "E-commerce Revenue Measurement Dashboard",
    items: [
      {
        index: "01",
        title: "Product Campaign Strategy & Targeting",
        description: "Connect products with shoppers whose search behavior and purchase history match what you sell via Google Shopping, Performance Max, and Meta Advantage+ catalogs.",
      },
      {
        index: "02",
        title: "Product Catalog & Shopping Ads",
        description: "Help customers discover items with real-time catalog feeds, accurate pricing, high-resolution imagery, and availability information.",
      },
      {
        index: "03",
        title: "Ad Creative & Shopping Journey",
        description: "Highlight product benefits and promotions with creative formats that transition shoppers smoothly from the initial ad into a friction-free checkout.",
      },
      {
        index: "04",
        title: "Sales Tracking & Budget Optimization",
        description: "Monitor purchase conversions, cost per acquisition, and ROAS across campaigns to allocate spend where profit margins are strongest.",
      },
    ]
  },
  officialResources: {
    tag: "Official Ecosystem",
    heading: "Explore Google & Meta's Online Sales Advertising Tools",
    description: "Access official documentation covering shopping campaigns, product catalogs, automated sales advertising, and conversion value measurement.",
    items: [
      {
        id: "ecom-shopping",
        title: "Google Shopping Ads & Retail Campaigns",
        description: "Learn how Google Shopping ads use Merchant Center product information to display relevant products across eligible Google search and shopping placements.",
        url: "https://support.google.com/google-ads/answer/2454022",
        iconType: "search-terms",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/ecom-badge-01.png",
        badgeImageAlt: "Google Shopping Retail Guide Badge"
      },
      {
        id: "ecom-catalog",
        title: "Meta Product Catalogs & Commerce Manager",
        description: "Explore Meta's training on setting up product catalogs, updating inventory details, and launching dynamic catalog advertisements.",
        url: "https://www.facebookblueprint.com/student/path/219728-get-started-with-product-catalogs-on-meta-technologies",
        iconType: "guide",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/ecom-badge-02.png",
        badgeImageAlt: "Meta Commerce Manager Catalog Badge"
      },
      {
        id: "ecom-advplus",
        title: "Meta Advantage+ Sales Campaigns",
        description: "Understand how Meta's automated sales campaigns leverage machine learning to optimize ad delivery and drive online purchases.",
        url: "https://www.facebookblueprint.com/student/path/253126-advantage-plus-sales-course",
        iconType: "audience",
        badgePosition: "bottom",
        badgeImagePath: "/images/services/meta-ads/ecom-badge-03.png",
        badgeImageAlt: "Meta Advantage+ Sales Course Badge"
      },
      {
        id: "ecom-roas",
        title: "Google Ads Conversion Value & ROAS Measurement",
        description: "Learn how conversion values help advertisers evaluate sales revenue and use value-based bidding to maximize campaign profit.",
        url: "https://support.google.com/google-ads/answer/13064207",
        iconType: "bidding",
        badgePosition: "top",
        badgeImagePath: "/images/services/meta-ads/ecom-badge-04.png",
        badgeImageAlt: "Google Conversion Value ROAS Badge"
      }
    ]
  },
  faq: {
    heading: "Common Questions About E-commerce Sales Campaigns",
    items: [
      {
        id: "faq-ecom-1",
        question: "What is an e-commerce sales campaign?",
        answer: "It is an advertising campaign structured specifically to drive online store purchases using product catalogs, shopping placements, and conversion tracking."
      },
      {
        id: "faq-ecom-2",
        question: "Which advertising platforms are best for my online store?",
        answer: "Google Shopping captures high-intent product searches, while Meta ads drive discovery and remarketing. Combining both typically yields the best acquisition results."
      },
      {
        id: "faq-ecom-3",
        question: "Do I need a product catalog to run e-commerce ads?",
        answer: "Catalogs are required for Google Shopping and Meta dynamic product ads. However, you can also promote key items using standard video and image formats."
      },
      {
        id: "faq-ecom-4",
        question: "Why am I getting website traffic but not enough sales?",
        answer: "Traffic without sales usually points to checkout friction, unexpected shipping fees, mismatched landing pages, or lack of product trust signals."
      },
      {
        id: "faq-ecom-5",
        question: "How much should I spend on e-commerce advertising?",
        answer: "Budgets are planned against your average order value and profit margins to establish an acceptable customer acquisition cost (CAC)."
      },
      {
        id: "faq-ecom-6",
        question: "How do you measure the success of an e-commerce sales campaign?",
        answer: "We assess return on ad spend (ROAS), cost per acquisition, total revenue generated, and customer lifetime value."
      }
    ]
  },
  cta: {
    heading: "Make Every Shopping Opportunity Count",
    description: "Scale your online store with e-commerce campaigns designed around buyer demand and measurable purchase activity. Let's build a profitable advertising strategy for your catalog.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  }
};