/**
 * BRIVYA SOLUTIONS — MEGA-MENU KINETIC ANIMATION ENGINE
 * Powers the mechanical spring reveal, the exact inverse disappearing fold,
 * progressive width morphing (360px -> 920px), and pillar cross-fades.
 */

import gsap from "gsap";

export interface MegaMenuAnimationTargets {
  container: HTMLElement | null;
  backdrop: HTMLElement | null;
  leftRail?: HTMLElement | null;
  subPanel?: HTMLElement | null;
}

/**
 * 1. THE REVEAL SEQUENCE (Entrance)
 * - Container drops with physical hydraulic deceleration
 * - Left pillars cascade in with a rapid 25ms stagger
 * - Sub-panel unmasks smoothly
 */
export function animateMegaMenuReveal(
  targets: MegaMenuAnimationTargets,
  initialWidth: number = 360,
): gsap.core.Timeline {
  const { container, backdrop, leftRail } = targets;

  gsap.killTweensOf([container, backdrop, leftRail]);

  const tl = gsap.timeline({
    defaults: { ease: "power4.out" },
  });

  // Soft backdrop illumination
  if (backdrop) {
    tl.fromTo(
      backdrop,
      { opacity: 0 },
      { opacity: 1, duration: 0.24, ease: "power2.out" },
      0,
    );
  }

  // Floating chassis drops 8px with mechanical settle
  if (container) {
    tl.fromTo(
      container,
      {
        opacity: 0,
        y: -8,
        scale: 0.985,
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

  // 7 Pillars cascade down from left
  if (leftRail && leftRail.children) {
    tl.fromTo(
      leftRail.children,
      { opacity: 0, x: -8 },
      {
        opacity: 1,
        x: 0,
        duration: 0.26,
        stagger: 0.025,
        ease: "power2.out",
      },
      0.06,
    );
  }

  return tl;
}

/**
 * 2. THE DISAPPEARING SEQUENCE (Exact Symmetrical Inverse Exit)
 * - Sub-panel elements retract first
 * - Left pillars cascade out in reverse
 * - Container pulls up into the navbar and folds with high-velocity snap
 */
export function animateMegaMenuDisappear(
  targets: MegaMenuAnimationTargets,
  onComplete: () => void,
): gsap.core.Timeline {
  const { container, backdrop, leftRail, subPanel } = targets;

  gsap.killTweensOf([container, backdrop, leftRail, subPanel]);

  const tl = gsap.timeline({
    defaults: { ease: "power3.in" },
    onComplete,
  });

  // Sub-services bay retracts right-and-out
  if (subPanel) {
    tl.to(
      subPanel,
      {
        opacity: 0,
        x: 8,
        duration: 0.14,
        ease: "power2.in",
      },
      0,
    );
  }

  // 7 Pillars retract to the left in reverse order
  if (leftRail && leftRail.children) {
    tl.to(
      Array.from(leftRail.children).reverse(),
      {
        opacity: 0,
        x: -6,
        duration: 0.14,
        stagger: 0.015,
        ease: "power2.in",
      },
      0.02,
    );
  }

  // Container pulls up 8px and folds away cleanly
  if (container) {
    tl.to(
      container,
      {
        opacity: 0,
        y: -8,
        scale: 0.98,
        duration: 0.18,
        ease: "power3.in",
      },
      0.04,
    );
  }

  // Backdrop dissolves simultaneously
  if (backdrop) {
    tl.to(
      backdrop,
      {
        opacity: 0,
        duration: 0.16,
      },
      0.06,
    );
  }

  return tl;
}

/**
 * 3. Progressive Width Morph: Dynamically transitions container width
 * from compact (360px) to expanded (920px) with hydraulic easing
 */
export function animateContainerWidthMorph(
  container: HTMLElement | null,
  targetWidth: number,
): void {
  if (!container) return;

  gsap.to(container, {
    width: targetWidth,
    duration: 0.34,
    ease: "expo.out",
  });
}

/**
 * 4. Staggered Slide Reveal for Sub-Services Panel
 */
export function animateSubPanelEntrance(panelElement: HTMLElement | null): void {
  if (!panelElement) return;

  gsap.killTweensOf(panelElement);
  gsap.fromTo(
    panelElement,
    { opacity: 0, x: 10 },
    { opacity: 1, x: 0, duration: 0.26, ease: "power3.out" },
  );
}