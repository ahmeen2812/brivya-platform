/**
 * BRIVYA SOLUTIONS — PNG ILLUSTRATION BOTTOM-RISING REVEAL
 * Anchors the illustration below the card floor inside a clipped boundary,
 * raising it upward with subtle spatial scaling to give the physical
 * illusion of rising from within the card substrate.
 */

import gsap from "gsap";
import {
  INQUIRY_MOTION,
  checkIsMobile,
  checkPrefersReducedMotion,
} from "./animationConfig";

/**
 * Builds the PNG illustration bottom-rising reveal timeline
 */
export function buildImageRiseTimeline(
  imageContainer: HTMLElement | null,
  masterTimeline: gsap.core.Timeline,
  positionOffset: number = 0.32
): void {
  if (!imageContainer) return;

  // Accessibility bypass for reduced motion
  if (checkPrefersReducedMotion()) {
    gsap.set(imageContainer, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
    });
    return;
  }

  const isMobile = checkIsMobile();
  const imageYDistance = isMobile
    ? INQUIRY_MOTION.travel.mobileImageRiseY
    : INQUIRY_MOTION.travel.desktopImageRiseY;

  // Ascends from beneath the card floor clipping boundary into resting placement
  masterTimeline.fromTo(
    imageContainer,
    {
      autoAlpha: 0,
      y: imageYDistance,
      scale: 0.94,
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: INQUIRY_MOTION.durations.imageRise,
      ease: INQUIRY_MOTION.easings.executiveDecel,
    },
    positionOffset
  );
}