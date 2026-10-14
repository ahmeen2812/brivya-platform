/**
 * BRIVYA SOLUTIONS — CUSTOM WEBSITES MOTION TOKENS
 * Single source of truth for easing curves, travel distances,
 * and bidirectional ScrollTrigger orchestration protocols.
 */

export const CUSTOM_WEBSITES_MOTION = {
  easings: {
    executiveDecel: "cubic-bezier(0.16, 1, 0.3, 1)",
    powerOut: "power3.out",
    powerInOut: "power2.inOut",
    smoothMechanical: "power4.out",
  },
  durations: {
    heroHeading: 0.85,
    heroTagline: 0.75,
    heroDescription: 0.8,
    heroImage: 0.95,
    cardIntro: 0.85,
    serviceCard: 0.9,
    seoImage: 0.85,
    faqItem: 0.45,
    ctaBlock: 0.75,
  },
  travel: {
    // Desktop travel vectors
    desktopHeadingX: -75,
    desktopTaglineX: 65,
    desktopDescX: -90,
    desktopHeroImageX: 80,
    desktopIntroY: -45,
    desktopCardLateralX: 130,
    desktopSeoImageY: 45,
    desktopFaqY: 22,
    desktopCtaY: 35,

    // Mobile travel vectors (dampened to prevent horizontal overflow)
    mobileHeadingX: -30,
    mobileTaglineX: 30,
    mobileDescX: -40,
    mobileHeroImageY: 30,
    mobileIntroY: -25,
    mobileCardY: 30,
    mobileSeoImageY: 30,
    mobileFaqY: 16,
    mobileCtaY: 20,
  },
  scale: {
    heroImageInitial: 1.07,
    seoImageInitial: 0.93,
    cardIntroInitial: 0.985,
  },
  stagger: {
    faqItems: 0.075,
    ctaElements: 0.1,
  },
  scrollTrigger: {
    // Plays forward on scroll down, stays completed when scrolling past, reverses when scrolling upward out of view, replays on re-entry
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