/**
 * BRIVYA SOLUTIONS — 3D CAROUSEL KINEMATIC TRANSITIONS
 * Master GSAP 3D slot animations coordinating simultaneous physical depth and translation.
 */

import gsap from "gsap";
import { SlideDirection } from "../types";

export interface StageSlotElements {
  readonly farLeft: HTMLElement | null;
  readonly left: HTMLElement | null;
  readonly center: HTMLElement | null;
  readonly right: HTMLElement | null;
  readonly farRight: HTMLElement | null;
}

export function animate3DCardTransition(
  slots: StageSlotElements,
  direction: SlideDirection,
  durationSec: number = 0.65,
  onComplete?: () => void
): gsap.core.Timeline | null {
  const { farLeft, left, center, right, farRight } = slots;
  if (!center || !left || !right || !farLeft || !farRight) return null;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isTablet = typeof window !== "undefined" && window.innerWidth >= 768 && window.innerWidth < 1024;

  const xOffset = isMobile ? 320 : isTablet ? 370 : 420;
  const xExit = xOffset * 1.6;

  const tl = gsap.timeline({
    defaults: { ease: "power3.inOut", duration: durationSec },
    onComplete,
  });

  if (direction === "shift-left") {
    // -------------------------------------------------------------------------
    // LEFT ARROW CLICK (All cards shift LEFT):
    // Center -> Left (shrinks, moves back)
    // Right  -> Center (grows, moves forward)
    // Left   -> Far-Left (exits left)
    // Far-Right -> Right (enters right)
    // -------------------------------------------------------------------------
    tl.to(center, { x: -xOffset, scale: 0.86, autoAlpha: isMobile ? 0 : 0.45, zIndex: 10 }, 0)
      .to(right, { x: 0, scale: 1.0, autoAlpha: 1.0, zIndex: 30 }, 0)
      .to(left, { x: -xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 }, 0)
      .fromTo(
        farRight,
        { x: xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 },
        { x: xOffset, scale: 0.86, autoAlpha: isMobile ? 0 : 0.45, zIndex: 10 },
        0
      );
  } else {
    // -------------------------------------------------------------------------
    // RIGHT ARROW CLICK (All cards shift RIGHT):
    // Center -> Right (shrinks, moves back)
    // Left   -> Center (grows, moves forward)
    // Right  -> Far-Right (exits right)
    // Far-Left -> Left (enters left)
    // -------------------------------------------------------------------------
    tl.to(center, { x: xOffset, scale: 0.86, autoAlpha: isMobile ? 0 : 0.45, zIndex: 10 }, 0)
      .to(left, { x: 0, scale: 1.0, autoAlpha: 1.0, zIndex: 30 }, 0)
      .to(right, { x: xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 }, 0)
      .fromTo(
        farLeft,
        { x: -xExit, scale: 0.72, autoAlpha: 0, zIndex: 0 },
        { x: -xOffset, scale: 0.86, autoAlpha: isMobile ? 0 : 0.45, zIndex: 10 },
        0
      );
  }

  return tl;
}