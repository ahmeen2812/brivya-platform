export const SEARCH_ADS_MOTION = {
  easings: {
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power2.out",
  },
  durations: {
    heroHeading: 0.7,
    heroTagline: 0.65,
    heroDescription: 0.7,
    // Fast, immediate image reveal without lag
    heroImage: 0.5,
    featuredCard: 0.75,
    serviceCard: 0.8,
    relevanceImage: 0.5,
    faqItem: 0.4,
    ctaBlock: 0.7,
  },
  travel: {
    desktopHeadingX: -60,
    desktopTaglineX: 50,
    desktopDescX: -70,
    desktopHeroImageX: 45,
    desktopFeaturedY: -35,
    desktopCardLateralX: 110,
    desktopRelevanceY: 35,
    desktopFaqY: 20,
    desktopCtaY: 30,

    mobileHeadingY: 20,
    mobileTaglineY: 16,
    mobileDescY: 16,
    mobileHeroImageY: 20,
    mobileFeaturedY: 24,
    mobileCardY: 24,
    mobileRelevanceY: 24,
    mobileFaqY: 16,
    mobileCtaY: 18,
  },
  scale: {
    heroImageInitial: 1.04,
    relevanceImageInitial: 0.95,
    featuredCardInitial: 0.985,
  },
  stagger: {
    faqItems: 0.06,
  },
  scrollTrigger: {
    toggleActions: "play none none reverse",
  },
} as const;

export function checkIsMobile(): boolean {
  return typeof window !== "undefined" && window.innerWidth < 1024;
}

export function checkPrefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}