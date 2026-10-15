export const SEARCH_ADS_MOTION = {
  easings: {
    // Executive deceleration curve with authentic physical inertia
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power3.out",
  },
  durations: {
    heroHeading: 0.95,
    heroTagline: 0.85,
    heroDescription: 0.85,
    // Significant, authoritative travel time
    heroImage: 1.15,
    bentoFeatured: 0.9,
    bentoCell: 0.85,
    relevanceImage: 0.95,
    faqItem: 0.45,
    ctaBlock: 0.8,
  },
  travel: {
    // Substantial desktop travel (glides across from near the screen border)
    desktopHeadingX: -110,
    desktopTaglineX: 85,
    desktopDescX: -100,
    desktopHeroImageX: 180, // Substantial glide from the right edge
    desktopBentoY: 50,
    desktopBentoLateralX: 130,
    desktopFaqY: 22,
    desktopCtaY: 35,

    // Responsive mobile vertical emergence
    mobileHeadingY: 26,
    mobileTaglineY: 20,
    mobileDescY: 20,
    mobileHeroImageY: 36,
    mobileBentoY: 28,
    mobileFaqY: 18,
    mobileCtaY: 22,
  },
  scale: {
    heroImageInitial: 1.08,
    relevanceImageInitial: 0.92,
    bentoFeaturedInitial: 0.985,
  },
  stagger: {
    capabilities: 0.08,
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