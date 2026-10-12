/**
 * BRIVYA SOLUTIONS — RESULTS SECTION SCROLL KINEMATICS
 * Coordinates directional entrances (Left, Below, Right) with smooth reverse scrub.
 * Numeric counting is triggered once and excluded from the scrub timeline.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ResultsAnimationTargets {
  readonly section: HTMLElement | null;
  readonly panel: HTMLElement | null;
  readonly eyebrow: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly description: HTMLElement | null;
  readonly metric01: HTMLElement | null;
  readonly metric02: HTMLElement | null;
  readonly metric03: HTMLElement | null;
  readonly onFirstEntrance?: () => void;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initResultsScrollSequence(
  targets: ResultsAnimationTargets
): gsap.core.Timeline | null {
  const {
    section,
    panel,
    eyebrow,
    heading,
    description,
    metric01,
    metric02,
    metric03,
    onFirstEntrance,
  } = targets;

  if (!section || !panel) return null;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const allElements = [panel, eyebrow, heading, description, metric01, metric02, metric03].filter(
    Boolean
  ) as HTMLElement[];

  if (prefersReduced) {
    gsap.set(allElements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    if (onFirstEntrance) onFirstEntrance();
    return null;
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const xOffset = isMobile ? 0 : 45;
  const yOffset = isMobile ? 25 : 45;

  let hasTriggeredCount = false;

  // Master Bidirectional Scrubbing Timeline for Layout Entrances
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 84%",
      end: "top 38%",
      scrub: 1.2,
      onEnter: () => {
        if (!hasTriggeredCount && onFirstEntrance) {
          hasTriggeredCount = true;
          onFirstEntrance();
        }
      },
    },
  });

  // Stage 1: Panel Subtle Elevation (40px rise with smooth deceleration)
  tl.fromTo(
    panel,
    { autoAlpha: 0, y: 35, scale: 0.98 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
    0
  );

  // Stage 2: Left Editorial Intro Stagger
  if (eyebrow) {
    tl.fromTo(eyebrow, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.1);
  }
  if (heading) {
    tl.fromTo(heading, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.16);
  }
  if (description) {
    tl.fromTo(description, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.22);
  }

  // Stage 3: Coordinated Directional Metric Entrances
  // Metric 01: Enters from LEFT
  if (metric01) {
    tl.fromTo(
      metric01,
      { autoAlpha: 0, x: -xOffset, y: isMobile ? yOffset : 0 },
      { autoAlpha: 1, x: 0, y: 0, duration: 0.8, ease: "power2.out" },
      0.28
    );
  }

  // Metric 02: Enters from BELOW
  if (metric02) {
    tl.fromTo(
      metric02,
      { autoAlpha: 0, y: yOffset },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
      0.35
    );
  }

  // Metric 03: Enters from RIGHT
  if (metric03) {
    tl.fromTo(
      metric03,
      { autoAlpha: 0, x: xOffset, y: isMobile ? yOffset : 0 },
      { autoAlpha: 1, x: 0, y: 0, duration: 0.8, ease: "power2.out" },
      0.42
    );
  }

  return tl;
}