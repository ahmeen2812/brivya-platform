/**
 * BRIVYA SOLUTIONS — MEGA-MENU KINETIC ANIMATION ENGINE
 * Complete production-grade animation controllers:
 * - Synchronized Zero-Flash Reveal: Container and elements emerge simultaneously.
 * - Exact Symmetrical Inverse Exit: Last item (07) exits first down to 01 (LIFO order).
 * - Smooth Sub-Services Cascade: Natural, staggered entrance for rows, header, and CTA.
 * - Progressive Width Morphing: 370px <-> 940px without layout jitter.
 */

import gsap from "gsap";

export interface MegaMenuAnimationTargets {
  container: HTMLElement | null;
  backdrop: HTMLElement | null;
  leftRail?: HTMLElement | null;
  subPanel?: HTMLElement | null;
}

/**
 * 1. SYNCHRONIZED REVEAL (Zero Empty-Box Flash)
 * Container and first pillars emerge simultaneously at time 0.
 */
export function animateMegaMenuReveal(
  targets: MegaMenuAnimationTargets,
  initialWidth: number = 370,
): gsap.core.Timeline {
  const { container, backdrop, leftRail } = targets;

  gsap.killTweensOf([container, backdrop, leftRail]);

  const tl = gsap.timeline({
    defaults: { ease: "power4.out" },
  });

  // Soft backdrop fade-in
  if (backdrop) {
    tl.fromTo(
      backdrop,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.22, ease: "power2.out" },
      0,
    );
  }

  // Container drops 6px with hydraulic easing
  if (container) {
    tl.fromTo(
      container,
      {
        autoAlpha: 0,
        y: -6,
        scale: 0.985,
        width: initialWidth,
        transformOrigin: "top center",
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        width: initialWidth,
        duration: 0.26,
        ease: "power3.out",
      },
      0,
    );
  }

  // 7 Pillars cascade in starting immediately at 0.01s (No delay/flash)
  if (leftRail && leftRail.children && leftRail.children.length > 0) {
    tl.fromTo(
      Array.from(leftRail.children),
      {
        autoAlpha: 0,
        x: -8,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.22,
        stagger: 0.02,
        ease: "power2.out",
      },
      0.01,
    );
  }

  return tl;
}

/**
 * 2. EXACT SYMMETRICAL INVERSE DISAPPEARING SEQUENCE
 * Executes true Last-In, First-Out (LIFO) reversal:
 * - Sub-panel retracts first
 * - Left rail items disappear in reverse: Item 07 exits first, down to Item 01
 * - Container pulls up 6px and folds away cleanly
 * - Backdrop dissolves simultaneously
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

  // Step 1: Sub-services bay retracts right-and-out
  if (subPanel) {
    tl.to(
      subPanel,
      {
        autoAlpha: 0,
        x: 8,
        duration: 0.12,
        ease: "power2.in",
      },
      0,
    );
  }

  // Step 2: LIFO Reversal — Item 07 disappears first, down to Item 01
  if (leftRail && leftRail.children && leftRail.children.length > 0) {
    const reversedChildren = Array.from(leftRail.children).reverse();
    tl.to(
      reversedChildren,
      {
        autoAlpha: 0,
        x: -6,
        duration: 0.12,
        stagger: 0.016, // Reverse stagger: 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1
        ease: "power2.in",
      },
      0.02,
    );
  }

  // Step 3: Container pulls upward by 6px and folds
  if (container) {
    tl.to(
      container,
      {
        autoAlpha: 0,
        y: -6,
        scale: 0.985,
        duration: 0.16,
        ease: "power3.in",
      },
      0.08,
    );
  }

  // Step 4: Backdrop dissolves simultaneously
  if (backdrop) {
    tl.to(
      backdrop,
      {
        autoAlpha: 0,
        duration: 0.16,
      },
      0.08,
    );
  }

  return tl;
}

// Backward-compatible alias
export const animateMegaMenuFold = animateMegaMenuDisappear;

/**
 * 3. Progressive Width Morph: Transitions container width
 * from compact (370px) to expanded (940px) with hydraulic deceleration
 */
export function animateContainerWidthMorph(
  container: HTMLElement | null,
  targetWidth: number,
): void {
  if (!container) return;

  gsap.killTweensOf(container);
  gsap.to(container, {
    width: targetWidth,
    duration: 0.32,
    ease: "expo.out",
  });
}

/**
 * 4. POLISHED SUB-SERVICES STAGGERED REVEAL
 * Plays a natural, choreographed entrance sequence every time a pillar is selected:
 * - Header glides down subtly
 * - Sub-service cards cascade in with physical inertia
 * - Contextual CTA card glides up into place
 */
export function animateSubPanelEntrance(panelElement: HTMLElement | null): void {
  if (!panelElement) return;

  // Kill existing tweens on panel and its children to prevent collision
  gsap.killTweensOf(panelElement);
  const items = panelElement.querySelectorAll(".sub-service-item");
  const header = panelElement.querySelector(".sub-panel-header");
  const cta = panelElement.querySelector(".sub-panel-cta");

  if (items.length > 0) {
    gsap.killTweensOf(Array.from(items));
  }
  if (header) gsap.killTweensOf(header);
  if (cta) gsap.killTweensOf(cta);

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  // Base panel fade-in
  tl.fromTo(
    panelElement,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.2, ease: "power1.out" },
    0,
  );

  // 1. Header slides in gently from top
  if (header) {
    tl.fromTo(
      header,
      { autoAlpha: 0, y: -4 },
      { autoAlpha: 1, y: 0, duration: 0.22, ease: "power2.out" },
      0.02,
    );
  }

  // 2. Sub-services cascade in with clear, natural stagger
  if (items.length > 0) {
    tl.fromTo(
      Array.from(items),
      {
        autoAlpha: 0,
        y: 8,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.26,
        stagger: 0.024, // 24ms stagger provides clean, fluid readability
        ease: "power2.out",
      },
      0.04,
    );
  }

  // 3. Contextual CTA card slides in from bottom
  if (cta) {
    tl.fromTo(
      cta,
      { autoAlpha: 0, y: 6 },
      { autoAlpha: 1, y: 0, duration: 0.24, ease: "power2.out" },
      0.12,
    );
  }
}