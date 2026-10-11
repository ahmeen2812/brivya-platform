/**
 * BRIVYA SOLUTIONS — TRUST SECTION REVEAL KINEMATICS
 * Subdued entrance timeline connected cleanly to viewport scroll lifecycle.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface TrustAnimationTargets {
  readonly container: HTMLElement | null;
  readonly googlePill?: HTMLElement | null;
  readonly trustpilotPill?: HTMLElement | null;
  readonly statement?: HTMLElement | null;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initTrustReveal(targets: TrustAnimationTargets): gsap.core.Timeline | null {
  const { container, googlePill, trustpilotPill, statement } = targets;

  if (!container) return null;

  const elements = [googlePill, trustpilotPill, statement].filter(Boolean) as HTMLElement[];

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    gsap.set([container, ...elements], { autoAlpha: 1, y: 0 });
    return null;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 92%", // Subtle early engagement
      toggleActions: "play none none reverse", // Reverses naturally on scroll up
    },
  });

  tl.fromTo(
    container,
    { autoAlpha: 0, y: 14 },
    { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
    0
  );

  if (elements.length > 0) {
    tl.fromTo(
      elements,
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
      0.15
    );
  }

  return tl;
}