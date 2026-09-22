/**
 * BRIVYA SOLUTIONS — CAROUSEL KINEMATIC ANIMATIONS
 * Smooth right-to-left sliding transitions and readable quote reveals via GSAP.
 */

import gsap from "gsap";
import { CarouselDirection } from "../types";

export interface SlideTransitionParams {
  readonly outgoingCard: HTMLElement | null;
  readonly incomingCard: HTMLElement | null;
  readonly direction: CarouselDirection;
  readonly onComplete?: () => void;
}

export function animateSlideTransition({
  outgoingCard,
  incomingCard,
  direction,
  onComplete,
}: SlideTransitionParams): gsap.core.Timeline | null {
  if (!incomingCard) return null;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    if (outgoingCard) gsap.set(outgoingCard, { autoAlpha: 0.4, scale: 0.93, x: 0 });
    gsap.set(incomingCard, { autoAlpha: 1, scale: 1, x: 0 });
    if (onComplete) onComplete();
    return null;
  }

  const offset = direction === "next" ? 60 : -60;
  const exitOffset = direction === "next" ? -60 : 60;

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete,
  });

  // 1. Outgoing card gracefully shifts to neighbor emphasis
  if (outgoingCard) {
    tl.to(
      outgoingCard,
      {
        x: exitOffset,
        scale: 0.93,
        autoAlpha: 0.45,
        duration: 0.55,
      },
      0
    );
  }

  // 2. Incoming card enters from right (for next) or left (for prev) and settles
  tl.fromTo(
    incomingCard,
    {
      x: offset,
      scale: 0.94,
      autoAlpha: 0.3,
    },
    {
      x: 0,
      scale: 1,
      autoAlpha: 1,
      duration: 0.6,
      ease: "power3.out",
    },
    0.05
  );

  return tl;
}