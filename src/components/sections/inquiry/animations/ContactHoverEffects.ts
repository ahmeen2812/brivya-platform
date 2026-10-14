/**
 * BRIVYA SOLUTIONS — INQUIRY INTERACTIVE HOVER & FOCUS PHYSICS
 * 1. Synchronized continuous kinetic arrow loops (matching navbar button motion).
 * 2. Isolated panel hover physics (only hovered panel elevates; sibling panels remain stationary).
 */

import gsap from "gsap";
import { INQUIRY_MOTION, checkPrefersReducedMotion } from "./animationConfig";

/**
 * Horizontal Kinetic Arrow Loop for Primary CTA (Send Project Inquiry →)
 * Matches NavCtaButton.tsx velocity and boundary unmasking.
 */
export function animateKineticArrowHorizontal(arrowElement: Element | null): void {
  if (!arrowElement || checkPrefersReducedMotion()) return;

  gsap.killTweensOf(arrowElement);
  const tl = gsap.timeline({ defaults: { ease: INQUIRY_MOTION.easings.arrowLoop } });

  tl.to(arrowElement, {
    x: 16,
    opacity: 0,
    duration: INQUIRY_MOTION.durations.arrowExit,
    ease: INQUIRY_MOTION.easings.arrowExit,
  })
    .set(arrowElement, { x: -16, opacity: 0 })
    .to(arrowElement, {
      x: 0,
      opacity: 1,
      duration: INQUIRY_MOTION.durations.arrowEnter,
      ease: INQUIRY_MOTION.easings.arrowEnter,
    });
}

/**
 * 45-Degree Diagonal Kinetic Arrow Loop for Secondary CTA (Book a Call ↗)
 * Matches horizontal cadence while maintaining precise angular vector trajectory.
 */
export function animateKineticArrowDiagonal(arrowElement: Element | null): void {
  if (!arrowElement || checkPrefersReducedMotion()) return;

  gsap.killTweensOf(arrowElement);
  const tl = gsap.timeline({ defaults: { ease: INQUIRY_MOTION.easings.arrowLoop } });

  tl.to(arrowElement, {
    x: 14,
    y: -14,
    opacity: 0,
    duration: INQUIRY_MOTION.durations.arrowExit,
    ease: INQUIRY_MOTION.easings.arrowExit,
  })
    .set(arrowElement, { x: -14, y: 14, opacity: 0 })
    .to(arrowElement, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: INQUIRY_MOTION.durations.arrowEnter,
      ease: INQUIRY_MOTION.easings.arrowEnter,
    });
}

/**
 * Isolated Panel Hover Elevation and Icon Micro-Interaction
 * Strict Rule: Hovering Panel A must NEVER affect the scale or elevation of Panel B.
 */
export function animatePanelHover(
  panel: HTMLElement | null,
  icon: HTMLElement | null,
  isHovered: boolean
): void {
  if (!panel || checkPrefersReducedMotion()) return;

  gsap.killTweensOf([panel, icon].filter(Boolean));

  if (isHovered) {
    gsap.to(panel, {
      y: -6,
      duration: INQUIRY_MOTION.durations.hoverSettle,
      ease: INQUIRY_MOTION.easings.powerOut,
    });
    if (icon) {
      gsap.to(icon, {
        scale: 1.08,
        duration: INQUIRY_MOTION.durations.hoverSettle,
        ease: INQUIRY_MOTION.easings.powerOut,
      });
    }
  } else {
    gsap.to(panel, {
      y: 0,
      duration: INQUIRY_MOTION.durations.hoverSettle,
      ease: INQUIRY_MOTION.easings.powerOut,
    });
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        duration: INQUIRY_MOTION.durations.hoverSettle,
        ease: INQUIRY_MOTION.easings.powerOut,
      });
    }
  }
}