/**
 * BRIVYA SOLUTIONS — WHY CHOOSE US GSAP KINETICS
 * Smooth intersecting viewbox controller executing coordinated staggering
 * entry logic preventing unstyled load glitches.
 */

import gsap from "gsap";

export interface WhyUsAnimationTargets {
  container: HTMLElement | null;
  eyebrow: HTMLElement | null;
  title: HTMLElement | null;
  description: HTMLElement | null;
  cardsRefList: (HTMLElement | null)[];
}

export function initWhyUsScrollSequence(targets: WhyUsAnimationTargets) {
  const { container, eyebrow, title, description, cardsRefList } = targets;
  
  if (!container) return null;

  const validCards = cardsRefList.filter(Boolean) as HTMLElement[];

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reduced motion abort rendering visually correct defaults immediately
  if (prefersReducedMotion) {
    gsap.set([eyebrow, title, description, ...validCards], { autoAlpha: 1, y: 0, scale: 1 });
    return null;
  }

  // Preset starting coordinate boundaries safely ensuring no flash artifact rendering
  if (eyebrow) gsap.set(eyebrow, { autoAlpha: 0, y: 12 });
  if (title) gsap.set(title, { autoAlpha: 0, y: 24 });
  if (description) gsap.set(description, { autoAlpha: 0, y: 16 });
  if (validCards.length > 0) gsap.set(validCards, { autoAlpha: 0, y: 36, scale: 0.975 });

  const timeline = gsap.timeline({
    paused: true,
    defaults: { ease: "power2.out" }
  });

  // Stage 1: Subtle floating upstroke of capsule identity flag
  if (eyebrow) {
    timeline.to(eyebrow, {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
    }, 0);
  }

  // Stage 2: Deep authoritative typography anchor entry 
  if (title) {
    timeline.to(title, {
      autoAlpha: 1,
      y: 0,
      duration: 0.65,
    }, 0.1); // ~ 0.10s lag specified
  }

  // Stage 3: Smooth secondary context sublabel glide
  if (description) {
    timeline.to(description, {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
    }, 0.18);
  }

  // Stage 4: Gentle volumetric 3-axis reveal mapping individual nodes into 3d spatial layouts
  if (validCards.length > 0) {
    timeline.to(validCards, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.70,
      stagger: 0.12, 
      ease: "power2.out" // Restrained curve mapping prevents spring oscillation (strictly avoiding bounds overshoots)
    }, 0.24);
  }

  return timeline;
}

