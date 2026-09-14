/**
 * BRIVYA SOLUTIONS — 3D CAROUSEL KINEMATIC TRANSITIONS
 * Coordinated 12-card relative coordinate engine.
 * Eliminates DOM node content swapping to prevent text flickering.
 */

import gsap from "gsap";
import { SlideDirection } from "../types";

export interface CardSlotConfig {
  readonly xOffset: number;
  readonly isMobile: boolean;
}

/**
 * Calculates responsive horizontal offsets based on viewport width.
 */
export function getResponsiveCardOffsets(): CardSlotConfig {
  if (typeof window === "undefined") {
    return { xOffset: 420, isMobile: false };
  }
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const xOffset = isMobile ? (window.innerWidth < 480 ? 310 : 340) : isTablet ? 370 : 420;
  return { xOffset, isMobile };
}

/**
 * Computes the normalized relative difference from the center card (-6 to +6)
 * to ensure smooth continuous wrap-around looping across all 12 reviews.
 */
export function getRelativeCardSlot(cardIndex: number, centerIndex: number, totalCards: number): number {
  let diff = (cardIndex - centerIndex) % totalCards;
  if (diff > totalCards / 2) diff -= totalCards;
  if (diff < -totalCards / 2) diff += totalCards;
  return diff;
}

/**
 * Immediately sets the static physical coordinates for a card based on its relative slot.
 */
export function setCardSlotPosition(
  element: HTMLElement | null,
  diff: number,
  config: CardSlotConfig
): void {
  if (!element) return;
  const { xOffset, isMobile } = config;
  const xExit = xOffset * 1.6;

  if (diff === 0) {
    // Center Active Card
    gsap.set(element, {
      x: 0,
      scale: 1.0,
      autoAlpha: 1.0,
      zIndex: 30,
      pointerEvents: "auto",
    });
  } else if (diff === -1) {
    // Left Visible Card
    gsap.set(element, {
      x: -xOffset,
      scale: 0.86,
      autoAlpha: isMobile ? 0 : 0.45,
      zIndex: 10,
      pointerEvents: "none",
    });
  } else if (diff === 1) {
    // Right Visible Card
    gsap.set(element, {
      x: xOffset,
      scale: 0.86,
      autoAlpha: isMobile ? 0 : 0.45,
      zIndex: 10,
      pointerEvents: "none",
    });
  } else if (diff < -1) {
    // Off-screen Left Buffer
    gsap.set(element, {
      x: -xExit,
      scale: 0.72,
      autoAlpha: 0,
      zIndex: 0,
      pointerEvents: "none",
    });
  } else {
    // Off-screen Right Buffer
    gsap.set(element, {
      x: xExit,
      scale: 0.72,
      autoAlpha: 0,
      zIndex: 0,
      pointerEvents: "none",
    });
  }
}

/**
 * Master GSAP 3D Transition Timeline:
 * Animates all cards simultaneously between positions without changing DOM inner text.
 */
export function animateCardCarouselShift(
  cardElements: readonly (HTMLElement | null)[],
  currentCenter: number,
  targetCenter: number,
  totalCards: number,
  direction: SlideDirection,
  durationSec: number = 0.65,
  onComplete?: () => void
): gsap.core.Timeline {
  const config = getResponsiveCardOffsets();
  const { xOffset, isMobile } = config;
  const xExit = xOffset * 1.6;

  const tl = gsap.timeline({
    defaults: { ease: "power3.inOut", duration: durationSec },
    onComplete,
  });

  cardElements.forEach((el, index) => {
    if (!el) return;

    const oldDiff = getRelativeCardSlot(index, currentCenter, totalCards);
    const newDiff = getRelativeCardSlot(index, targetCenter, totalCards);

    // Only animate cards actively involved in the visible 3D window
    const wasVisible = Math.abs(oldDiff) <= 1;
    const willBeVisible = Math.abs(newDiff) <= 1;

    if (!wasVisible && !willBeVisible) {
      // Keep inactive cards stationary off-screen
      setCardSlotPosition(el, newDiff, config);
      return;
    }

    if (newDiff === 0) {
      // Incoming card to Center: Scales up, brightens, glides into center
      tl.to(
        el,
        {
          x: 0,
          scale: 1.0,
          autoAlpha: 1.0,
          zIndex: 30,
        },
        0
      );
    } else if (newDiff === -1) {
      // Card settling in Left slot
      tl.to(
        el,
        {
          x: -xOffset,
          scale: 0.86,
          autoAlpha: isMobile ? 0 : 0.45,
          zIndex: 10,
        },
        0
      );
    } else if (newDiff === 1) {
      // Card settling in Right slot
      tl.to(
        el,
        {
          x: xOffset,
          scale: 0.86,
          autoAlpha: isMobile ? 0 : 0.45,
          zIndex: 10,
        },
        0
      );
    } else if (newDiff < -1) {
      // Exiting off-screen Left
      tl.to(
        el,
        {
          x: -xExit,
          scale: 0.72,
          autoAlpha: 0,
          zIndex: 0,
        },
        0
      );
    } else {
      // Exiting off-screen Right
      tl.to(
        el,
        {
          x: xExit,
          scale: 0.72,
          autoAlpha: 0,
          zIndex: 0,
        },
        0
      );
    }
  });

  return tl;
}