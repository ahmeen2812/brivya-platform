/**
 * BRIVYA SOLUTIONS — CUSTOM WEBSITE DEVELOPMENT CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
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
    readonly paragraph: string;
  };
  readonly cards: {
    readonly card1: {
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
    };
    readonly card2: {
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly card3: {
      readonly heading: string;
      readonly description: string;
      readonly highlight: string;
    };
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
    paragraph:
      "Custom website development starts by understanding your operational requirements rather than forcing your business into a ready-made layout. Whether you need bespoke service funnels, automated client booking workflows, or direct integration with internal databases, we build your site around what you actually need. Every feature has a clear reason to exist—resulting in a seamless journey for your clients and a practical, maintainable system for your team.",
  },
  cards: {
    card1: {
      heading: "Made to look and work like your business.",
      description:
        "Your website should reflect the unique identity and operational standards of your company, not the limitations of a pre-built theme. We combine deliberate layout hierarchies with the exact functional integrations your business requires.",
      highlight: "Every feature has a reason to be there.",
    },
    card2: {
      heading: "Help the right people find your website.",
      description:
        "A high-performing website is built for search visibility from day one. Through clean semantic markup, optimized heading structures, descriptive URL hierarchies, and sub-80ms asset loading, we establish an organic foundation search engines understand.",
      highlight: "Useful architecture over empty keyword stuffing.",
      illustrationPath: "/images/services/web-development/seo-card-illustration.png",
      illustrationAlt: "Technical Search Engine Optimization Architecture Illustration",
    },
    card3: {
      heading: "A better experience on every screen.",
      description:
        "Whether visitors arrive from a mobile device or a desktop monitor, your website adapts with fluid precision. We prioritize rapid page load times, intuitive touch targets, and friction-free navigation so clients reach important information immediately.",
      highlight: "Responsive performance that eliminates client friction.",
    },
  },
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
    description:
      "Whether you're starting a new venture, upgrading an outdated website, or planning a platform with custom integrations, we're ready to help you plan a clear and practical direction.",
    primaryButtonText: "Contact Us",
    secondaryButtonText: "Book a Consultation",
  },
} as const;