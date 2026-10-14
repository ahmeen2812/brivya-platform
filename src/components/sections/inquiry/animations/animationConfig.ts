/**
 * BRIVYA SOLUTIONS — INQUIRY MOTION TOKENS & CONFIGURATION
 * Single source of truth for motion curves, spatial travel vectors,
 * responsive thresholds, and bidirectional ScrollTrigger orchestration tokens.
 */

export const INQUIRY_MOTION = {
  easings: {
    // Executive deceleration curve for spatial container reveals
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power3.out",
    powerInOut: "power3.inOut",
    // Synchronized with navbar kinetic arrow physics
    arrowExit: "power2.in",
    arrowEnter: "power2.out",
    arrowLoop: "power2.inOut",
  },
  durations: {
    cardSettle: 1.15,
    headingMask: 0.75,
    textReveal: 0.6,
    imageRise: 1.05,
    fieldStagger: 0.5,
    panelSlide: 1.05,
    panelContent: 0.45,
    arrowExit: 0.16,
    arrowEnter: 0.26,
    hoverSettle: 0.35,
  },
  travel: {
    // Desktop coordinates
    desktopCardY: 42,
    desktopPanelX: 110,
    desktopImageRiseY: 130, // Calibrated to conceal entire PNG below the card floor
    desktopFieldY: 20,
    // Mobile responsive coordinates (dampened to prevent viewport overflow)
    mobileCardY: 24,
    mobilePanelX: 0,
    mobilePanelY: 32,
    mobileImageRiseY: 85,
    mobileFieldY: 14,
  },
  depth: {
    initialScaleCard: 0.985,
    initialScalePanel: 0.97,
    initialBlur: "blur(6px)",
    clearedBlur: "blur(0px)",
  },
  stagger: {
    fields: 0.08,
    paragraphs: 0.1,
    panelContent: 0.06,
  },
  scrollTrigger: {
    // Directional protocol: plays on downward scroll into view, stays visible when scrolling past to footer, reverses on upward scroll exit
    toggleActions: "play none none reverse",
    scrubSmoothness: 1.2,
  },
} as const;

/**
 * Responsive viewport verification helpers
 */
export function checkIsMobile(): boolean {
  return typeof window !== "undefined" && window.innerWidth < 768;
}

export function checkIsTablet(): boolean {
  return (
    typeof window !== "undefined" &&
    window.innerWidth >= 768 &&
    window.innerWidth < 1024
  );
}

export function checkPrefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}