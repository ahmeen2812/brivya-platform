/**
 * BRIVYA SOLUTIONS — ASYMMETRICAL CONTACT PANELS KINEMATICS
 * Orchestrates multi-phase lateral panel emergence:
 * 1. Architectural surface emerges from behind canvas (depth scale, blur dissipation, lateral glide).
 * 2. Internal content (heading, contact channels, telemetry note) follows sequentially.
 * 3. Directional ScrollTrigger replay: plays on scroll down, reverses on scroll up, replays on re-entry.
 * 4. Post-animation cleanup: explicitly strips CSS filter to prevent rasterized GPU blur caching.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  INQUIRY_MOTION,
  checkIsMobile,
  checkPrefersReducedMotion,
} from "./animationConfig";

export interface ContactPanelsAnimationTargets {
  readonly container: HTMLElement | null;
  readonly rightPanel: HTMLElement | null;
  readonly leftPanel: HTMLElement | null;
  readonly rightHeading: HTMLElement | null;
  readonly leftHeading: HTMLElement | null;
  readonly rightChannels: readonly (HTMLElement | null)[];
  readonly leftChannels: readonly (HTMLElement | null)[];
  readonly rightNote: HTMLElement | null;
  readonly leftNote: HTMLElement | null;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initializes the lateral emergence and directional replay sequence for the lower contact cards
 */
export function initAsymmetricalPanelsAnimation(
  targets: ContactPanelsAnimationTargets
): gsap.Context | null {
  const {
    container,
    rightPanel,
    leftPanel,
    rightHeading,
    leftHeading,
    rightChannels,
    leftChannels,
    rightNote,
    leftNote,
  } = targets;

  if (!container || !rightPanel || !leftPanel) return null;

  const allElements = [
    rightPanel,
    leftPanel,
    rightHeading,
    leftHeading,
    ...rightChannels,
    ...leftChannels,
    rightNote,
    leftNote,
  ].filter(Boolean) as HTMLElement[];

  // Accessibility bypass for reduced motion
  if (checkPrefersReducedMotion()) {
    gsap.set(allElements, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "none",
    });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const xTravel = isMobile ? INQUIRY_MOTION.travel.mobilePanelX : INQUIRY_MOTION.travel.desktopPanelX;
    const yTravel = isMobile ? INQUIRY_MOTION.travel.mobilePanelY : 0;

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: INQUIRY_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        // Complete filter removal to guarantee 0% blur rasterization in Chromium/WebKit
        gsap.set([rightPanel, leftPanel], {
          filter: "none",
          clearProps: "filter",
          autoAlpha: 1,
        });
      },
    });

    // =========================================================================
    // 1. PANEL 1 (RIGHT) — Emerges from RIGHT edge with spatial depth
    // =========================================================================
    masterTl.fromTo(
      rightPanel,
      {
        autoAlpha: 0,
        x: xTravel,
        y: yTravel,
        scale: INQUIRY_MOTION.depth.initialScalePanel,
        filter: INQUIRY_MOTION.depth.initialBlur,
      },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: INQUIRY_MOTION.depth.clearedBlur,
        duration: INQUIRY_MOTION.durations.panelSlide,
        ease: INQUIRY_MOTION.easings.executiveDecel,
      },
      0
    );

    // Right Panel Content Sequence
    if (rightHeading) {
      masterTl.fromTo(
        rightHeading,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.42, ease: INQUIRY_MOTION.easings.powerOut },
        0.22
      );
    }

    const validRightChannels = rightChannels.filter(Boolean) as HTMLElement[];
    if (validRightChannels.length > 0) {
      masterTl.fromTo(
        validRightChannels,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.44,
          stagger: INQUIRY_MOTION.stagger.panelContent,
          ease: INQUIRY_MOTION.easings.powerOut,
        },
        0.3
      );
    }

    if (rightNote) {
      masterTl.fromTo(
        rightNote,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.36, ease: INQUIRY_MOTION.easings.powerOut },
        0.42
      );
    }

    // =========================================================================
    // 2. PANEL 2 (LEFT) — Emerges from LEFT edge with spatial depth
    // =========================================================================
    masterTl.fromTo(
      leftPanel,
      {
        autoAlpha: 0,
        x: -xTravel,
        y: yTravel,
        scale: INQUIRY_MOTION.depth.initialScalePanel,
        filter: INQUIRY_MOTION.depth.initialBlur,
      },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: INQUIRY_MOTION.depth.clearedBlur,
        duration: INQUIRY_MOTION.durations.panelSlide,
        ease: INQUIRY_MOTION.easings.executiveDecel,
      },
      0.16
    );

    // Left Panel Content Sequence
    if (leftHeading) {
      masterTl.fromTo(
        leftHeading,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.42, ease: INQUIRY_MOTION.easings.powerOut },
        0.38
      );
    }

    const validLeftChannels = leftChannels.filter(Boolean) as HTMLElement[];
    if (validLeftChannels.length > 0) {
      masterTl.fromTo(
        validLeftChannels,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.44,
          stagger: INQUIRY_MOTION.stagger.panelContent,
          ease: INQUIRY_MOTION.easings.powerOut,
        },
        0.46
      );
    }

    if (leftNote) {
      masterTl.fromTo(
        leftNote,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.36, ease: INQUIRY_MOTION.easings.powerOut },
        0.58
      );
    }
  }, container);
}