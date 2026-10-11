/**
 * BRIVYA SOLUTIONS — "WHY CHOOSE US" KINETIC SCRUB ENGINE
 * Coordinated bidirectional ScrollTrigger scrubbing with directional card entry:
 * - Card 01: Enters from LEFT
 * - Card 02: Enters from BELOW
 * - Card 03: Enters from RIGHT
 * - Natural reversal on scroll up; zero one-shot freezing.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface WhyUsAnimationTargets {
  readonly container: HTMLElement | null;
  readonly eyebrow: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly description: HTMLElement | null;
  readonly cards: readonly (HTMLElement | null)[];
}

// Register ScrollTrigger plugin on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function setupWhyUsScrubEngine(
  targets: WhyUsAnimationTargets
): gsap.core.Timeline | null {
  const { container, eyebrow, heading, description, cards } = targets;

  if (!container) return null;

  const validCards = cards.filter(Boolean) as HTMLElement[];
  const validHeaders = [eyebrow, heading, description].filter(Boolean) as HTMLElement[];

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reduced motion safety fallback
  if (prefersReduced) {
    gsap.set([...validHeaders, ...validCards], {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
    });
    return null;
  }

  // Detect mobile viewport to dampen horizontal offsets and prevent mobile overflow
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const xOffset = isMobile ? 0 : 50;
  const yOffset = isMobile ? 30 : 50;

  // Master Bidirectional Scrubbing Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 85%", // Engages smoothly as section enters lower viewport
      end: "top 35%",   // Settles cleanly into final layout position
      scrub: 1.2,       // 1.2s smooth physical inertia tied bidirectionally to scroll
    },
  });

  // Stage 1: Eyebrow, Heading, and Thesis reveal
  if (eyebrow) {
    tl.fromTo(
      eyebrow,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
      0
    );
  }

  if (heading) {
    tl.fromTo(
      heading,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" },
      0.1
    );
  }

  if (description) {
    tl.fromTo(
      description,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" },
      0.2
    );
  }

  // Stage 2: Coordinated 3-Directional Card Entrances
  if (validCards.length === 3) {
    // Card 01 — Enters from the LEFT
    tl.fromTo(
      validCards[0],
      { autoAlpha: 0, x: -xOffset, y: isMobile ? yOffset : 20, scale: 0.96 },
      { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1.0, ease: "power2.out" },
      0.3
    );

    // Card 02 — Enters from BELOW
    tl.fromTo(
      validCards[1],
      { autoAlpha: 0, x: 0, y: yOffset, scale: 0.95 },
      { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1.0, ease: "power2.out" },
      0.38
    );

    // Card 03 — Enters from the RIGHT
    tl.fromTo(
      validCards[2],
      { autoAlpha: 0, x: xOffset, y: isMobile ? yOffset : 20, scale: 0.96 },
      { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1.0, ease: "power2.out" },
      0.46
    );
  } else if (validCards.length > 0) {
    // Fallback if cards array count varies
    tl.fromTo(
      validCards,
      { autoAlpha: 0, y: 35, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.9, ease: "power2.out" },
      0.3
    );
  }

  return tl;
}