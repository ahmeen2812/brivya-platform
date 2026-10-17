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
      "Your visitors shouldn't have to wait for your website to catch up. Targeted improvements to loading speed, Core Web Vitals, responsiveness, and stability.",
  },
  hero: {
    heading: "Website Performance Optimization",
    tagline: "Your Visitors Shouldn't Have to Wait for Your Website to Catch Up.",
    paragraphs: [
      "A slow website can turn a simple visit into a frustrating experience. Pages take too long to appear, buttons feel unresponsive, and important content shifts while people are trying to read.",
      "We identify what's slowing your website down and make targeted improvements to loading speed, responsiveness, and stability—without compromising the experience your website was built to deliver.",
    ],
    imagePath: "/images/services/web-development/performance-hero-illustration.png",
    imageAlt: "Brivya Solutions Website Performance Optimization & Telemetry Illustration",
  },
  servicesIntro: {
    heading: "Better Performance Starts With Understanding What's Wrong.",
    paragraph:
      "Every slow website has a different cause. We measure how your pages perform, identify the issues that matter most, and prioritize practical improvements based on their impact on real users.",
    featuredCard: {
      tag: "Featured Service — Technical Diagnostics",
      heading: "Website Performance Audit & Optimization",
      subheading: "Find the Problems. Fix What Matters.",
      paragraphs: [
        "Before making changes, we need to understand what's happening.",
        "We assess your website using performance testing tools and technical diagnostics to identify bottlenecks, from inefficient resource loading to unnecessary scripts and rendering delays. You get a clearer picture of what's holding your website back and a focused plan for improving it.",
      ],
      illustrationPath: "/images/services/web-development/performance-audit-illustration.png",
      illustrationAlt: "Performance Diagnostics and Lighthouse Auditing Illustration",
    },
  },
  cards: {
    card2: {
      index: "02",
      title: "Core Web Vitals Optimization",
      heading: "Make Your Website Feel Faster, More Responsive, and Stable.",
      paragraphs: [
        "A page can finish loading and still feel slow when someone tries to use it. We focus on Google's Core Web Vitals to improve how quickly your main content appears, how promptly your website responds to interactions, and how stable the layout remains while loading.",
      ],
      highlight: "LCP under 2.5s, INP under 200ms, and zero Cumulative Layout Shift.",
    },
    card3: {
      index: "03",
      title: "Image, JavaScript & Front-End Optimization",
      heading: "Deliver the Experience Without the Unnecessary Weight.",
      paragraphs: [
        "Large images, excessive JavaScript, and resources that block rendering can add unnecessary delays. We optimize media, reduce unnecessary code where possible, and improve how critical and non-critical resources are loaded—helping your website do more with less.",
      ],
      highlight: "Modern format encoding, script tree-shaking, and critical CSS inlining.",
      illustrationPath: "/images/services/web-development/caching-delivery-illustration.png",
      illustrationAlt: "Asset Compression and Edge Caching Architecture Illustration",
    },
    card4: {
      index: "04",
      title: "Caching & Page Delivery Optimization",
      heading: "Get Important Content to Visitors More Efficiently.",
      paragraphs: [
        "Your website shouldn't have to repeat unnecessary work on every visit. We review browser caching, resource compression, and content delivery options to reduce avoidable loading delays and improve performance across devices and network conditions.",
      ],
      highlight: "Edge caching rules, Brotli compression, and distributed CDN delivery.",
    },
  },
  faq: {
    heading: "Practical Answers Before We Get Started.",
    items: [
      {
        id: "faq-1",
        question: "Can you optimize my existing website without redesigning it?",
        answer:
          "Yes. Performance optimization often starts with improving the existing code, assets, and loading behavior rather than changing the design. If a deeper structural change is needed, we'll explain why before recommending it.",
      },
      {
        id: "faq-2",
        question: "How do you measure website performance?",
        answer:
          "We use tools such as Google PageSpeed Insights and Lighthouse to examine loading behavior and identify technical issues. Where sufficient real-user data is available, we also consider field metrics from the Chrome User Experience Report and Google Search Console.",
      },
      {
        id: "faq-3",
        question: "What are Core Web Vitals, and why do they matter?",
        answer:
          "Core Web Vitals measure three important parts of the user experience: loading performance, responsiveness, and visual stability. Google's recommended targets are a Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, assessed at the 75th percentile of page visits.",
      },
      {
        id: "faq-4",
        question: "Will a faster website improve my Google rankings?",
        answer:
          "Good Core Web Vitals contribute to a better page experience and are used by Google's ranking systems. However, they are not the only ranking consideration, and improving performance does not guarantee a higher position in search results. Our focus is on measurable performance improvements that benefit your visitors as well.",
      },
      {
        id: "faq-5",
        question: "Can you improve mobile performance specifically?",
        answer:
          "Yes. We assess mobile performance separately because processing power, network conditions, and resource loading can affect the experience differently from desktop. We prioritize improvements according to the issues identified on your actual pages.",
      },
      {
        id: "faq-6",
        question: "Will optimization affect my website's design or functionality?",
        answer:
          "Our goal is to improve performance while preserving the design and features your visitors rely on. We test relevant pages and interactions after changes, and discuss any necessary trade-offs before proceeding.",
      },
      {
        id: "faq-7",
        question: "How long does website performance optimization take?",
        answer:
          "The timeline depends on your website's technology, the number of affected pages, and the complexity of the problems. After reviewing the current performance and scope, we can recommend priorities and provide a realistic project timeline.",
      },
      {
        id: "faq-8",
        question: "Can you guarantee a perfect PageSpeed score?",
        answer:
          "We don't promise a particular score before examining your website. Test results can vary with testing conditions, third-party services, and the site's functionality. We focus on addressing genuine bottlenecks and improving relevant performance metrics rather than chasing a number at the expense of the user experience.",
      },
    ],
  },
  cta: {
    heading: "A Better Website Starts With Knowing What's Slowing It Down.",
    paragraphs: [
      "If your pages take too long to load, interactions feel sluggish, or performance reports keep highlighting the same problems, there's a reason worth investigating.",
      "Share your website with us and tell us what you've been noticing. We'll help you understand where the delays may be coming from and which improvements make the most sense for your website.",
    ],
    primaryButtonText: "Start a Project",
    secondaryButtonText: "Book a Consultation",
  },
} as const;