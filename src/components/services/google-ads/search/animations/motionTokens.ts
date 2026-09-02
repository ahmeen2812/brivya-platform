export const GOOGLE_SEARCH_MOTION = {
  easings: {
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power3.out",
  },
  durations: {
    heroHeading: 0.95,
    heroServiceTitle: 0.8,
    heroDescription: 0.9,
    heroButtons: 0.85,
    // Longer, more pronounced physical travel
    heroImage: 1.25,
    featuredCard: 0.9,
    supportingCard: 0.9,
    supportingImage: 0.95,
    resourceCard: 0.75,
    resourceBadge: 0.65,
    faqItem: 0.45,
    ctaBlock: 0.8,
  },
  travel: {
    desktopHeadingX: 85,
    desktopTitleX: -60,
    desktopDescX: 95,
    desktopHeroImageX: -160, // Long, authoritative glide from the left
    desktopFeaturedY: 45,
    desktopCardLateralX: 130,
    desktopSupportingY: 45,
    desktopResourcesY: 35,
    desktopFaqY: 22,
    desktopCtaY: 35,

    mobileHeadingY: 22,
    mobileTitleY: 18,
    mobileDescY: 18,
    mobileHeroImageY: 30,
    mobileFeaturedY: 26,
    mobileCardY: 26,
    mobileSupportingY: 26,
    mobileResourcesY: 24,
    mobileFaqY: 16,
    mobileCtaY: 20,
  },
  scale: {
    heroImageInitial: 1.08,
    supportingImageInitial: 0.93,
    featuredCardInitial: 0.985,
    resourceBadgeInitial: 0.82,
  },
  stagger: {
    resources: 0.08,
    badges: 0.1,
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