export const API_MOTION = {
  easings: {
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power3.out",
  },
  durations: {
    heroHeading: 0.85,
    heroTagline: 0.75,
    heroDescription: 0.8,
    heroImage: 0.95,
    featuredCard: 0.85,
    serviceCard: 0.9,
    syncImage: 0.85,
    faqItem: 0.45,
    ctaBlock: 0.75,
  },
  travel: {
    desktopHeadingX: -75,
    desktopTaglineX: 65,
    desktopDescX: -90,
    desktopHeroImageX: 80,
    desktopFeaturedY: -45,
    desktopCardLateralX: 130,
    desktopSyncY: 45,
    desktopFaqY: 22,
    desktopCtaY: 35,

    // Real, noticeable mobile vertical travel vectors
    mobileHeadingY: 25,
    mobileTaglineY: 20,
    mobileDescY: 20,
    mobileHeroImageY: 30,
    mobileFeaturedY: 28,
    mobileCardY: 28,
    mobileSyncY: 28,
    mobileFaqY: 18,
    mobileCtaY: 20,
  },
  scale: {
    heroImageInitial: 1.07,
    syncImageInitial: 0.93,
    featuredCardInitial: 0.985,
  },
  stagger: {
    faqItems: 0.08,
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