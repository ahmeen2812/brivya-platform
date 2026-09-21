/**
 * BRIVYA SOLUTIONS — 3D CAROUSEL KINEMATICS
 * Coordinates real physical depth, scale, and synchronized 3-slot translations.
 */

import gsap from "gsap";
import { SlideDirection } from "../types";

export interface CardSlotRefs {
  readonly centerCard: HTMLElement | null;
  readonly leftCard: HTMLElement | null;
  readonly rightCard: HTMLElement | null;
  readonly incomingCard: HTMLElement | null;
}

export function animate3DSlotShift(
  refs: CardSlotRefs,
  direction: SlideDirection,
  durationSec: number = 0.65,
  onComplete?: () => void
): gsap.core.Timeline | null {
  const { centerCard, leftCard, rightCard, incomingCard } = refs;
  if (!centerCard || !leftCard || !rightCard) return null;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const xOffset = isMobile ? (window.innerWidth < 480 ? 280 : 340) : 410;
  const xExit = xOffset * 1.6;

  const tl = gsap.timeline({
    defaults: { ease: "power3.inOut", duration: durationSec },
    onComplete,
  });

  if (direction === "shift-left") {
    // -------------------------------------------------------------------------
    // LEFT ARROW CLICK (Cards move LEFT):
    // 1. Center card moves LEFT, shrinks, recedes backward
    // 2. Right card moves LEFT into CENTER, scales up, brightens, comes forward
    // 3. Left card exits toward the left off-screen
    // 4. Incoming card enters from right into the right slot
    // -------------------------------------------------------------------------
    tl.to(
      centerCard,
      { x: -xOffset, scale: 0.86, autoAlpha: 0.45, zIndex: 10 },
      0
    )
      .to(
        rightCard,
        { x: 0, scale: 1.0, autoAlpha: 1.0, zIndex: 30 },
        0
      )
      .to(
        leftCard,
        { x: -xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 },
        0
      );

    if (incomingCard) {
      tl.fromTo(
        incomingCard,
        { x: xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 },
        { x: xOffset, scale: 0.86, autoAlpha: 0.45, zIndex: 10 },
        0
      );
    }
  } else {
    // -------------------------------------------------------------------------
    // RIGHT ARROW CLICK (Cards move RIGHT):
    // 1. Center card moves RIGHT, shrinks, recedes backward
    // 2. Left card moves RIGHT into CENTER, scales up, brightens, comes forward
    // 3. Right card exits toward the right off-screen
    // 4. Incoming card enters from left into the left slot
    // -------------------------------------------------------------------------
    tl.to(
      centerCard,
      { x: xOffset, scale: 0.86, autoAlpha: 0.45, zIndex: 10 },
      0
    )
      .to(
        leftCard,
        { x: 0, scale: 1.0, autoAlpha: 1.0, zIndex: 30 },
        0
      )
      .to(
        rightCard,
        { x: xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 },
        0
      );

    if (incomingCard) {
      tl.fromTo(
        incomingCard,
        { x: -xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 },
        { x: -xOffset, scale: 0.86, autoAlpha: 0.45, zIndex: 10 },
        0
      );
    }
  }

  return tl;
}