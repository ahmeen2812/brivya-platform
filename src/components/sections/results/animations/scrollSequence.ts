/**
 * BRIVYA SOLUTIONS — RESULTS SECTION SCROLL KINEMATICS
 * Coordinates directional entrances (Left, Below, Right) and reversible count-up via ScrollTrigger.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createMetricCounterTween } from "./counterAnimation";

export interface ResultsAnimationTargets {
  readonly section: HTMLElement | null;
  readonly panel: HTMLElement | null;
  readonly eyebrow: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly description: HTMLElement | null;
  readonly metric01: HTMLElement | null;
  readonly metric02: HTMLElement | null;
  readonly metric03: HTMLElement | null;
  readonly num01: HTMLElement | null;
  readonly num02: HTMLElement | null;
  readonly num03: HTMLElement | null;
  readonly numValues: readonly number[];
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
    num01,
    num02,
    num03,
    numValues,
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
    if (num01) num01.textContent = `${numValues[0]}`;
    if (num02) num02.textContent = numValues[1] < 10 ? `0${numValues[1]}` : `${numValues[1]}`;
    if (num03) num03.textContent = `${numValues[2]}`;
    return null;
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const xOffset = isMobile ? 0 : 45;
  const yOffset = isMobile ? 25 : 45;

  // Master Bidirectional Scrubbing Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 82%", // Engages smoothly as section enters viewport
      end: "top 38%",   // Settles into position
      scrub: 1.2,       // 1.2s smooth physical inertia tied to scroll progress
    },
  });

  // Stage 1: Panel Elevation
  tl.fromTo(
    panel,
    { autoAlpha: 0, y: 22, scale: 0.985 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
    0
  );

  // Stage 2: Left Editorial Intro
  if (eyebrow) {
    tl.fromTo(eyebrow, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.1);
  }
  if (heading) {
    tl.fromTo(heading, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.16);
  }
  if (description) {
    tl.fromTo(description, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.22);
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

  // Stage 4: Coordinated Numeric Count-Up
  if (num01) createMetricCounterTween({ element: num01, targetNumber: numValues[0] }, tl, 0.35);
  if (num02) createMetricCounterTween({ element: num02, targetNumber: numValues[1] }, tl, 0.42);
  if (num03) createMetricCounterTween({ element: num03, targetNumber: numValues[2] }, tl, 0.48);

  return tl;
}