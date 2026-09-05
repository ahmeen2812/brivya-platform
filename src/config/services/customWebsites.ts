/**
 * BRIVYA SOLUTIONS — CUSTOM WEBSITE DEVELOPMENT CONTENT MANIFEST
 * Single source of truth for editorial copy, structured FAQs, and metadata.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface ServiceCardData {
  readonly index: string;
  readonly title: string;
  readonly subtitle: string;
  readonly paragraphs: readonly string[];
  readonly alignment: "right" | "left";
}

export interface CustomWebsitesContentConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly heading: string;
    readonly tagline: string;
    readonly description: string;
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly introduction: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
  };
  readonly serviceCards: readonly ServiceCardData[];
  readonly faq: {
    readonly heading: string;
    readonly items: readonly FaqItem[];
  };
  readonly cta: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
  };
}

export const CUSTOM_WEBSITES_CONTENT: CustomWebsitesContentConfig = {
  seo: {
    title: "Custom Website Development | Brivya Solutions",
    description:
      "A website built around your business, not a template. Bespoke digital flagships designed and engineered with purpose.",
  },
  hero: {
    heading: "Custom Website Development",
    tagline: "A website built around your business, not a template.",
    description:
      "At Brivya, we design and develop custom websites with your business, your audience, and your goals in mind. From the way visitors move between pages to the features they use, every decision has a purpose.",
    imagePath: "/images/services/web-development/custom-website-illustration.png",
    imageAlt: "Brivya Solutions Custom Website Development Engineering Illustration",
  },
  introduction: {
    heading: "What Is Custom Website Development?",
    paragraphs: [
      "Not every business needs the same kind of website. A consulting company may need detailed service pages and an easy way for clients to arrange meetings. A growing business may need a website that connects with its existing systems, while an established company may need something more flexible than its current platform.",
      "Custom website development starts by understanding those differences.",
      "Rather than forcing your content and requirements into a predetermined layout, we plan the website around what you actually need. That includes its structure, appearance, functionality, and the way people interact with it.",
      "It doesn't mean making everything complicated or building features you won't use. It means making thoughtful choices about what belongs on your website and how it should work.",
      "The result should feel natural to your visitors and practical for the people managing it.",
    ],
  },
  serviceCards: [
    {
      index: "01",
      title: "Custom Design & Development",
      subtitle: "Made to look and work like your business.",
      alignment: "right",
      paragraphs: [
        "Your website should reflect the identity of your company, not the limitations of a ready-made layout.",
        "We bring together thoughtful design, clear page structures, and the functionality your business requires. Whether that's a professional company website, detailed service pages, booking features, or connections to other tools, the approach begins with what makes sense for your project.",
        "Every feature should have a reason to be there.",
      ],
    },
    {
      index: "02",
      title: "Search Engine Optimization (SEO)",
      subtitle: "Help the right people find your website.",
      alignment: "left",
      paragraphs: [
        "A well-designed website also needs to be understandable to search engines.",
        "We consider SEO from the planning stage, including how pages are organized, how headings describe their content, and how visitors move between related information. Clear URLs, relevant page titles, readable content, and properly prepared images all contribute to a stronger foundation for search visibility.",
        "Good SEO starts with making your website useful and easy to understand. It isn't about filling pages with keywords or promising overnight rankings.",
      ],
    },
    {
      index: "03",
      title: "Responsive Design & Website Performance",
      subtitle: "A better experience on every screen.",
      alignment: "right",
      paragraphs: [
        "People may discover your business on their phone and return later from a laptop. Your website should feel comfortable to use in both situations.",
        "We focus on adaptable layouts, readable text, straightforward navigation, and pages that load without unnecessary delays. Buttons should be easy to use, forms should be simple to complete, and visitors should be able to reach important information without frustration.",
        "These details might not attract attention individually, but together they make a noticeable difference to the experience.",
      ],
    },
  ],
  faq: {
    heading: "Questions Clients Often Ask",
    items: [
      {
        id: "faq-1",
        question: "What's the difference between a custom website and a template website?",
        answer:
          "A template provides an existing design and structure that can be adapted with your content and branding. Custom development gives you greater control over how pages are organized, how the website looks, and what it can do. Templates can be a practical choice for straightforward requirements. Custom development becomes more useful when the website needs a particular design, workflow, or functionality.",
      },
      {
        id: "faq-2",
        question: "Will my website be optimized for search engines?",
        answer:
          "SEO can be built into the website's foundations through clear page structures, appropriate headings, descriptive URLs, relevant content, and other technical considerations. These practices help search engines discover and understand your pages, but search rankings also depend on competition, content quality, and many factors outside the development process.",
      },
      {
        id: "faq-3",
        question: "Will my website work on mobile phones and tablets?",
        answer:
          "Responsive design is part of the proposed development approach. This means planning layouts and interactions for different screen sizes, rather than treating the mobile version as a smaller copy of the desktop website.",
      },
      {
        id: "faq-4",
        question: "Can I update my website after it's launched?",
        answer:
          "Yes, content editing can be included through a suitable content management system. The editing options will depend on the platform and the features agreed upon for your project.",
      },
      {
        id: "faq-5",
        question: "How long does a custom website take to develop?",
        answer:
          "That depends on the number of pages, design requirements, content readiness, and functionality involved. A straightforward business website has different requirements from a website with multiple integrations or complex user interactions. A clearer timeline can be established once the project scope has been discussed.",
      },
      {
        id: "faq-6",
        question: "Can an existing website be redesigned or improved?",
        answer:
          "Yes. If your current website has useful content or functionality worth keeping, the project can begin with a review of what works, what needs improvement, and what should be rebuilt.",
      },
    ],
  },
  cta: {
    heading: "Let's Build Something That Fits",
    paragraphs: [
      "Whether you're starting a new business, replacing an outdated website, or planning something with more specific requirements, we'd like to understand what you have in mind.",
      "Tell us what you need your website to do. We'll help you work out a practical direction for the project.",
    ],
    primaryButtonText: "Contact Us",
    secondaryButtonText: "Book a Consultation",
  },
} as const;