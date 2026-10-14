export const SAAS_MOTION = {
  easings: {
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power3.out",
  },
  durations: {
    heroHeading: 0.85,
    heroTagline: 0.75,
    heroDescription: 0.8,
    heroImage: 0.95,
    introCard: 0.85,
    challengeCard: 0.9,
    metricsImage: 0.85,
    lifecycleCard: 0.65,
    faqItem: 0.45,
    ctaBlock: 0.75,
  },
  travel: {
    desktopHeadingX: -75,
    desktopTaglineX: 65,
    desktopDescX: -90,
    desktopHeroImageX: 80,
    desktopIntroY: -45,
    desktopCardLateralX: 130,
    desktopMetricsY: 45,
    desktopLifecycleY: 35,
    desktopFaqY: 22,
    desktopCtaY: 35,

    mobileHeadingX: -30,
    mobileTaglineX: 30,
    mobileDescX: -40,
    mobileHeroImageY: 30,
    mobileIntroY: -25,
    mobileCardY: 30,
    mobileMetricsY: 30,
    mobileLifecycleY: 25,
    mobileFaqY: 16,
    mobileCtaY: 20,
  },
  scale: {
    heroImageInitial: 1.07,
    metricsImageInitial: 0.93,
    introCardInitial: 0.985,
  },
  stagger: {
    lifecycle: 0.12,
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