/**
 * BRIVYA SOLUTIONS — MAIN CARD & EDITORIAL REVEAL ENGINE
 * Orchestrates spatial card emergence (scale, blur dissipation, upward settle),
 * masked heading unmasking, and delayed staggered editorial paragraphs.
 */

import gsap from "gsap";
import {
  INQUIRY_MOTION,
  checkIsMobile,
  checkPrefersReducedMotion,
} from "./animationConfig";

export interface HeroIntroAnimationTargets {
  readonly cardContainer: HTMLElement | null;
  readonly headingText: HTMLElement | null;
  readonly paragraph1: HTMLElement | null;
  readonly paragraph2: HTMLElement | null;
}

/**
 * Builds the Main Card and Left Editorial bay entrance timeline
 */
export function buildHeroIntroTimeline(
  targets: HeroIntroAnimationTargets,
  masterTimeline: gsap.core.Timeline,
  positionOffset: number = 0
): void {
  const { cardContainer, headingText, paragraph1, paragraph2 } = targets;
  if (!cardContainer) return;

  // Accessibility bypass for reduced motion
  if (checkPrefersReducedMotion()) {
    gsap.set([cardContainer, headingText, paragraph1, paragraph2].filter(Boolean), {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: "none",
    });
    return;
  }

  const isMobile = checkIsMobile();
  const cardYTravel = isMobile
    ? INQUIRY_MOTION.travel.mobileCardY
    : INQUIRY_MOTION.travel.desktopCardY;

  // 1. Main Card Spatial Emergence from the Canvas Substrate
  masterTimeline.fromTo(
    cardContainer,
    {
      autoAlpha: 0,
      y: cardYTravel,
      scale: INQUIRY_MOTION.depth.initialScaleCard,
      filter: INQUIRY_MOTION.depth.initialBlur,
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: INQUIRY_MOTION.depth.clearedBlur,
      duration: INQUIRY_MOTION.durations.cardSettle,
      ease: INQUIRY_MOTION.easings.executiveDecel,
      onComplete: () => {
        gsap.set(cardContainer, { filter: "none", clearProps: "filter" });
      },
    },
    positionOffset
  );

  // 2. Headline Architectural Mask Reveal (Emerges from within the masked overflow boundary)
  if (headingText) {
    masterTimeline.fromTo(
      headingText,
      {
        autoAlpha: 0,
        yPercent: 110,
        y: 12,
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        y: 0,
        duration: INQUIRY_MOTION.durations.headingMask,
        ease: INQUIRY_MOTION.easings.executiveDecel,
      },
      positionOffset + 0.18
    );
  }

  // 3. Editorial Description Paragraphs (Delayed, staggered fade-in)
  const paragraphs = [paragraph1, paragraph2].filter(Boolean) as HTMLElement[];
  if (paragraphs.length > 0) {
    masterTimeline.fromTo(
      paragraphs,
      {
        autoAlpha: 0,
        y: 18,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: INQUIRY_MOTION.durations.textReveal,
        stagger: INQUIRY_MOTION.stagger.paragraphs,
        ease: INQUIRY_MOTION.easings.powerOut,
      },
      positionOffset + 0.38
    );
  }
}