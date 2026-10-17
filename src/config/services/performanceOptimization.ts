/**
 * BRIVYA SOLUTIONS — WEBSITE PERFORMANCE OPTIMIZATION CONTENT MANIFEST
 * Authoritative content manifest for both Desktop and Mobile layouts.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface PerformanceContentConfig {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly heading: string;
    readonly tagline: string;
    readonly paragraphs: readonly string[];
    readonly imagePath: string;
    readonly imageAlt: string;
  };
  readonly servicesIntro: {
    readonly heading: string;
    readonly paragraph: string;
    readonly featuredCard: {
      readonly tag: string;
      readonly heading: string;
      readonly subheading: string;
      readonly paragraphs: readonly string[];
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
  };
  readonly cards: {
    readonly card2: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly highlight: string;
    };
    readonly card3: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly highlight: string;
      readonly illustrationPath: string;
      readonly illustrationAlt: string;
    };
    readonly card4: {
      readonly index: string;
      readonly title: string;
      readonly heading: string;
      readonly paragraphs: readonly string[];
      readonly highlight: string;
    };
  };
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

export const PERFORMANCE_OPTIMIZATION_CONTENT: PerformanceContentConfig = {
  seo: {
    title: "Website Performance Optimization | Brivya Solutions",
    description:
      "Make your website faster. Give your customers a better experience. Targeted improvements to loading speed, Core Web Vitals, responsiveness, and stability.",
  },
  hero: {
    heading: "Website Performance Optimization",
    tagline: "Make Your Website Faster. Give Your Customers a Better Experience.",
    paragraphs: [
      "A slow website can cost you more than time. It can frustrate potential customers, interrupt their journey, and make it harder for them to reach out or complete a purchase.",
      "We optimize existing websites by finding the issues behind slow loading, unresponsive interactions, and poor mobile performance. Our team works on the actual causes, implements targeted improvements, and tests the results—so your website works better without an unnecessary rebuild.",
    ],
    imagePath: "/images/services/web-development/performance-hero-illustration.png",
    imageAlt: "Brivya Solutions Website Performance Optimization & Telemetry Illustration",
  },
  servicesIntro: {
    heading: "Performance Improvements Built Around Your Website",
    paragraph:
      "Every website has its own performance challenges. We focus on the issues affecting your website, your visitors, and the actions you want them to take.",
    featuredCard: {
      tag: "Featured Service — Core Speed",
      heading: "Website Speed Optimization",
      subheading: "A Faster Website, Without Unnecessary Changes",
      paragraphs: [
        "If your website takes too long to load, we investigate what's causing the delay before recommending a fix.",
        "We analyze page loading, resource requests, rendering behavior, and server response times. Then we optimize the areas that need attention, helping your important pages load more efficiently while preserving the design and functionality your business depends on.",
      ],
      illustrationPath: "/images/services/web-development/performance-audit-illustration.png",
      illustrationAlt: "Performance Diagnostics and Website Speed Auditing Illustration",
    },
  },
  cards: {
    card2: {
      index: "02",
      title: "Core Web Vitals & Mobile Performance",
      heading: "A Better Experience on Every Screen",
      paragraphs: [
        "Your website should feel responsive when customers browse products, explore services, or fill out a contact form.",
        "We address Core Web Vitals issues, improve mobile loading behavior, reduce unnecessary delays during interactions, and fix layout shifts that disrupt the browsing experience. The focus is on making your website easier to use—not simply improving a score in a testing tool.",
      ],
      highlight: "Interaction responsiveness, visual stability, and smooth mobile browsing.",
    },
    card3: {
      index: "03",
      title: "Front-End & Resource Optimization",
      heading: "Keep the Features. Reduce the Unnecessary Load.",
      paragraphs: [
        "Heavy images, excessive JavaScript, and resources that delay page rendering can make a website slower than it needs to be.",
        "We optimize image delivery, review CSS and JavaScript loading, remove unnecessary resource overhead where appropriate, and improve how critical content reaches the browser. Your website retains the features it needs without carrying avoidable performance costs.",
      ],
      highlight: "Asset compression, script reduction, and critical render path optimization.",
      illustrationPath: "/images/services/web-development/caching-delivery-illustration.png",
      illustrationAlt: "Asset Compression and Edge Caching Architecture Illustration",
    },
    card4: {
      index: "04",
      title: "Server Response, Caching & Page Delivery",
      heading: "Help Your Website Respond More Efficiently",
      paragraphs: [
        "Sometimes the problem starts before the page even begins to appear.",
        "We investigate server response delays, caching configuration, and resource delivery to identify where requests are taking too long. Where the hosting environment and website architecture allow it, we implement appropriate improvements to reduce unnecessary work and deliver content more efficiently.",
      ],
      highlight: "Server response efficiency, caching configuration, and edge delivery.",
    },
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "faq-1",
        question: "Can you speed up my existing website without redesigning it?",
        answer:
          "Yes. Our first approach is to identify and fix performance issues within your existing website. A redesign is not automatically necessary. If the underlying architecture is responsible for significant limitations, we'll explain the options before recommending larger changes.",
      },
      {
        id: "faq-2",
        question: "What exactly will you do to improve my website?",
        answer:
          "We begin by assessing your website and identifying the main performance bottlenecks. Based on the findings, we prioritize relevant fixes, implement the agreed improvements, and test the affected pages again. You'll receive a clear explanation of the work completed and the results observed.",
      },
      {
        id: "faq-3",
        question: "Can you improve my Google PageSpeed Insights score?",
        answer:
          "We can work on the technical issues identified by PageSpeed Insights and Lighthouse, including opportunities related to loading, JavaScript execution, image delivery, and Core Web Vitals. The achievable improvement depends on your website's current condition, platform, and third-party dependencies. We don't promise a particular score before reviewing the site.",
      },
      {
        id: "faq-4",
        question: "Will performance optimization affect my website's design or features?",
        answer:
          "Our aim is to improve speed while preserving your existing design, functionality, and user journey. We test relevant pages after making changes and avoid removing important features simply to improve a performance score.",
      },
      {
        id: "faq-5",
        question: "Can you optimize a website that is already live?",
        answer:
          "Yes. We can assess an existing website and plan improvements around its current setup. Implementation depends on the platform, available access, hosting environment, and any technical restrictions. We establish the scope before making changes.",
      },
      {
        id: "faq-6",
        question: "How long will the optimization process take?",
        answer:
          "The timeline depends on the number of issues, the complexity of your website, and the changes required. After assessing the work involved, we'll agree on the scope and expected timeline before implementation begins.",
      },
    ],
  },
  cta: {
    heading: "Your Website Has Potential. Let's Help It Perform Better.",
    paragraphs: [
      "If your website feels slower than it should, don't settle for repeated tests that tell you something is wrong without explaining how to fix it.",
      "Share your website with us. We'll discuss your performance concerns, understand what you want to improve, and help define the right next steps for your project.",
    ],
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;