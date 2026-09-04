export const GOOGLE_SEARCH_MOTION = {
  easings: {
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power3.out",
  },
  durations: {
    heroHeading: 0.85,
    heroServiceTitle: 0.75,
    heroDescription: 0.8,
    heroImage: 0.95,
    featuredCard: 0.85,
    supportingCard: 0.8,
    resourceCard: 0.7,
    faqItem: 0.45,
    ctaBlock: 0.75,
  },
  travel: {
    desktopHeadingX: 75,
    desktopTitleX: -55,
    desktopDescX: 85,
    desktopHeroImageX: -120, // Authoritative entrance from the left
    desktopFeaturedY: 45,
    desktopCardsY: 35,
    desktopResourcesY: 35,
    desktopFaqY: 22,
    desktopCtaY: 35,

    mobileHeadingY: 22,
    mobileTitleY: 18,
    mobileDescY: 18,
    mobileHeroImageY: 28,
    mobileFeaturedY: 26,
    mobileCardsY: 26,
    mobileResourcesY: 24,
    mobileFaqY: 16,
    mobileCtaY: 20,
  },
  scale: {
    heroImageInitial: 1.06,
    featuredCardInitial: 0.985,
  },
  stagger: {
    supportingCards: 0.09,
    resources: 0.08,
    faqItems: 0.07,
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