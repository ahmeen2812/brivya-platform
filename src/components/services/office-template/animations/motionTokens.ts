/**
 * BRIVYA SOLUTIONS — OFFICE TEMPLATE MOTION TOKENS
 * Directional vectors calibrated specifically to wireframe motion arrows.
 */
export const OFFICE_MOTION = {
  easings: {
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power3.out",
    smoothMechanical: "power4.out",
  },
  durations: {
    heroImageDrop: 1.15,
    heroTextSlide: 0.85,
    directiveConverge: 0.9,
    verticalImageDrop: 1.1,
    fullWidthBannerRise: 0.85,
    mosaicBlockSlide: 0.85,
    mosaicIconPop: 0.7,
    panoramicRise: 1.1,
    resourceCard: 0.75,
    resourceBadge: 0.65,
    faqItem: 0.45,
    ctaBlock: 0.8,
  },
  travel: {
    // Desktop directional vectors (mapped to wireframe red arrows)
    topDropY: -110,          // Downward arrow: Hero visual & Vertical image enter from above
    bottomRiseY: 75,         // Upward arrow: Full-width banner & panoramic visual rise from below
    leftSlideX: -85,         // Right-pointing arrow: Headings, body copy, Mosaic Block 1 enter from left
    rightSlideX: 85,         // Left-pointing arrow: Mosaic Block 2 enters from right
    convergeX: 60,           // Converging arrows: Directive banner columns slide inward toward center
    
    // Mobile responsive dampening (prevents horizontal blowout on small screens)
    mobileTopDropY: -40,
    mobileBottomRiseY: 35,
    mobileLeftSlideX: -30,
    mobileRightSlideX: 30,
  },
  scale: {
    heroImageInitial: 1.05,
    verticalImageInitial: 1.04,
    mosaicIconInitial: 0.88,
    panoramicInitial: 1.03,
    resourceBadgeInitial: 0.82,
  },
  stagger: {
    features: 0.08,
    mosaic: 0.12,
    resources: 0.08,
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