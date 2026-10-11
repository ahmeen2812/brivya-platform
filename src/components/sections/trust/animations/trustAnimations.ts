/**
 * BRIVYA SOLUTIONS — TRUST SECTION REVEAL KINEMATICS
 * Subdued entrance timeline connected cleanly to viewport scroll lifecycle.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface TrustAnimationTargets {
  readonly container: HTMLElement | null;
  readonly googleBlock?: HTMLElement | null;
  readonly trustpilotBlock?: HTMLElement | null;
  readonly statement?: HTMLElement | null;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initTrustReveal(targets: TrustAnimationTargets): gsap.core.Timeline | null {
  const { container, googleBlock, trustpilotBlock, statement } = targets;

  if (!container) return null;

  const elements = [googleBlock, trustpilotBlock, statement].filter(Boolean) as HTMLElement[];

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
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  });

  tl.fromTo(
    container,
    { autoAlpha: 0, y: 12 },
    { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" },
    0
  );

  if (elements.length > 0) {
    tl.fromTo(
      elements,
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power2.out" },
      0.1
    );
  }

  return tl;
}