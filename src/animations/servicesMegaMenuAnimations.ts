/**
 * BRIVYA SOLUTIONS — MEGA-MENU KINETIC ANIMATION ENGINE
 * Powers the mechanical spring reveal, the progressive width morphing
 * (360px -> 880px), and the high-velocity folding exit.
 */

import gsap from "gsap";

export interface MegaMenuAnimationTargets {
  container: HTMLElement | null;
  backdrop: HTMLElement | null;
}

/**
 * Mechanical Reveal Timeline: Expands the dropdown with spring inertia
 */
export function animateMegaMenuReveal(
  targets: MegaMenuAnimationTargets,
  initialWidth: number = 360,
): gsap.core.Timeline {
  const { container, backdrop } = targets;

  gsap.killTweensOf([container, backdrop]);

  const tl = gsap.timeline({
    defaults: { ease: "power4.out" },
  });

  if (backdrop) {
    tl.fromTo(
      backdrop,
      { opacity: 0 },
      { opacity: 1, duration: 0.22, ease: "power2.out" },
      0,
    );
  }

  if (container) {
    tl.fromTo(
      container,
      {
        opacity: 0,
        y: -8,
        scale: 0.98,
        width: initialWidth,
        transformOrigin: "top center",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        width: initialWidth,
        duration: 0.32,
        ease: "power3.out",
      },
      0,
    );
  }

  return tl;
}

/**
 * High-Velocity Retract Fold: Smoothly collapses the menu upwards
 */
export function animateMegaMenuFold(
  targets: MegaMenuAnimationTargets,
  onComplete: () => void,
): gsap.core.Timeline {
  const { container, backdrop } = targets;

  gsap.killTweensOf([container, backdrop]);

  const tl = gsap.timeline({
    defaults: { ease: "power3.in" },
    onComplete,
  });

  if (container) {
    tl.to(
      container,
      {
        opacity: 0,
        y: -10,
        scale: 0.97,
        duration: 0.2,
      },
      0,
    );
  }

  if (backdrop) {
    tl.to(
      backdrop,
      {
        opacity: 0,
        duration: 0.18,
      },
      0.02,
    );
  }

  return tl;
}

/**
 * Progressive Width Morph: Dynamically transitions container width
 * from compact (360px) to expanded (880px) without layout flicker
 */
export function animateContainerWidthMorph(
  container: HTMLElement | null,
  targetWidth: number,
): void {
  if (!container) return;

  gsap.to(container, {
    width: targetWidth,
    duration: 0.35,
    ease: "expo.out",
  });
}

/**
 * Staggered Slide Reveal for Sub-Services Panel
 */
export function animateSubPanelEntrance(panelElement: HTMLElement | null): void {
  if (!panelElement) return;

  gsap.killTweensOf(panelElement);
  gsap.fromTo(
    panelElement,
    { opacity: 0, x: 12 },
    { opacity: 1, x: 0, duration: 0.28, ease: "power3.out" },
  );
}