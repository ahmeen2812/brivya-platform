/**
 * BRIVYA SOLUTIONS — CAROUSEL KINEMATIC ANIMATIONS
 * Smooth right-to-left sliding transitions and readable quote reveals via GSAP.
 */

import gsap from "gsap";
import { CarouselDirection } from "../types";

export interface SlideTransitionParams {
  readonly stageContainer: HTMLElement | null;
  readonly direction: CarouselDirection;
  readonly onComplete?: () => void;
}

export function animateCardEntrance(cardElement: HTMLElement | null): gsap.core.Timeline | null {
  if (!cardElement) return null;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    gsap.set(cardElement, { autoAlpha: 1, y: 0 });
    return null;
  }

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.fromTo(
    cardElement,
    { autoAlpha: 0.6, y: 8 },
    { autoAlpha: 1, y: 0, duration: 0.45 }
  );

  return tl;
}