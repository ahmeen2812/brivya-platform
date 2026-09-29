/**
 * BRIVYA SOLUTIONS — PRECISION SECTION KINETIC ENGINE
 * Centralized GSAP timeline definitions for the 5-stage reveal:
 * - Stage 1 (0-38%): Visual plate outer boundary unmasking
 * - Stage 2 (38-55%): Schematic plate transition into live UI
 * - Stage 3 (55-73%): Editorial headline & thesis reveal
 * - Stage 4 (73-93%): Telemetry metrics & deployment ledger stagger
 * - Stage 5 (93-100%): Kinetic lock & natural document release
 */

import gsap from "gsap";
import { PrecisionAnimationTargets } from "./types";

/**
 * Builds and initializes the complete 5-stage kinetic sequence.
 */
export function initPrecisionSectionTimeline(
  targets: PrecisionAnimationTargets,
): gsap.core.Timeline | null {
  const {
    sectionContainer,
    headerBlock,
    visualPlate,
    liveHtmlOverlay,
    metricsGrid,
    ledgerContainer,
  } = targets;

  if (!sectionContainer) return null;

  // Accessibility check: Render 100% visible immediately if reduced motion is preferred
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    if (headerBlock) gsap.set(headerBlock, { autoAlpha: 1 });
    if (visualPlate) gsap.set(visualPlate, { autoAlpha: 1 });
    if (liveHtmlOverlay) gsap.set(liveHtmlOverlay, { autoAlpha: 1 });
    if (metricsGrid) gsap.set(metricsGrid, { autoAlpha: 1 });
    if (ledgerContainer) gsap.set(ledgerContainer, { autoAlpha: 1 });
    return null;
  }

  // Pre-paint initial states: prevent unstyled content flash
  if (headerBlock) gsap.set(headerBlock, { autoAlpha: 0, y: 20 });
  if (visualPlate) gsap.set(visualPlate, { autoAlpha: 0, scale: 0.98, y: 16 });
  if (liveHtmlOverlay) gsap.set(liveHtmlOverlay, { autoAlpha: 0 });
  if (metricsGrid) gsap.set(metricsGrid, { autoAlpha: 0, y: 16 });
  if (ledgerContainer) gsap.set(ledgerContainer, { autoAlpha: 0, y: 16 });

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: "power3.out" },
  });

  // Stage 1 & 2 (0% - 55%): Visual plate unmasks and transitions into live inspection overlay
  if (visualPlate) {
    tl.to(
      visualPlate,
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      0,
    );
  }

  if (liveHtmlOverlay) {
    tl.to(
      liveHtmlOverlay,
      {
        autoAlpha: 1,
        duration: 0.35,
        ease: "power2.out",
      },
      0.2,
    );
  }

  // Stage 3 (55% - 73%): Editorial headline and thesis glide upward through overflow mask
  if (headerBlock) {
    tl.to(
      headerBlock,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      },
      0.15,
    );
  }

  // Stage 4 (73% - 93%): Telemetry metrics grid and deployment ledger stagger in
  if (metricsGrid) {
    tl.to(
      metricsGrid,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.38,
        ease: "power3.out",
      },
      0.3,
    );
  }

  if (ledgerContainer) {
    tl.to(
      ledgerContainer,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.38,
        ease: "power3.out",
      },
      0.38,
    );
  }

  // Stage 5 (93% - 100%): Native document settling
  return tl;
}