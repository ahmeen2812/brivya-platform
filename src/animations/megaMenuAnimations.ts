/**
 * BRIVYA SOLUTIONS — SERVICES MEGA-MENU ANIMATION ENGINE
 * Handles GSAP transitions for opening/closing the floating console,
 * cross-fading the dynamic sub-services matrix, and kinetic arrow loops.
 */

import gsap from "gsap";

export interface MegaMenuAnimationElements {
  container: HTMLDivElement | null;
  backdrop: HTMLDivElement | null;
  leftRail: HTMLDivElement | null;
  subServicesBay: HTMLDivElement | null;
  featuredCard: HTMLDivElement | null;
}

/**
 * Animates the Desktop Mega-Menu Opening
 */
export function animateMegaMenuOpen(elements: MegaMenuAnimationElements): gsap.core.Timeline {
  const { container, backdrop, leftRail, subServicesBay, featuredCard } = elements;

  gsap.killTweensOf([container, backdrop, leftRail, subServicesBay, featuredCard]);

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  if (backdrop) {
    tl.fromTo(
      backdrop,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" },
      0,
    );
  }

  if (container) {
    tl.fromTo(
      container,
      {
        opacity: 0,
        y: -12,
        scale: 0.985,
        transformOrigin: "top center",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
      },
      0,
    );
  }

  if (leftRail) {
    tl.fromTo(
      leftRail.children,
      { opacity: 0, x: -8 },
      { opacity: 1, x: 0, duration: 0.28, stagger: 0.03, ease: "power2.out" },
      0.08,
    );
  }

  if (subServicesBay) {
    tl.fromTo(
      subServicesBay,
      { opacity: 0, y: 6 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      0.12,
    );
  }

  if (featuredCard) {
    tl.fromTo(
      featuredCard,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.32, ease: "back.out(1.2)" },
      0.14,
    );
  }

  return tl;
}

/**
 * Animates the Desktop Mega-Menu Closing
 */
export function animateMegaMenuClose(
  elements: MegaMenuAnimationElements,
  onComplete: () => void,
): gsap.core.Timeline {
  const { container, backdrop } = elements;

  gsap.killTweensOf([container, backdrop]);

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete,
  });

  if (container) {
    tl.to(
      container,
      {
        opacity: 0,
        y: -8,
        scale: 0.99,
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
        duration: 0.2,
      },
      0,
    );
  }

  return tl;
}

/**
 * Smoothly cross-fades the inspection bay when switching between categories
 */
export function animateCategoryCrossFade(bayElement: HTMLElement | null): void {
  if (!bayElement) return;

  gsap.killTweensOf(bayElement);
  gsap.fromTo(
    bayElement,
    { opacity: 0.3, y: 4 },
    { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" },
  );
}

/**
 * Interactive hover micro-displacement for sub-service list arrows
 */
export function animateSubServiceArrow(arrowElement: Element | null, isHovered: boolean): void {
  if (!arrowElement) return;

  gsap.killTweensOf(arrowElement);
  gsap.to(arrowElement, {
    x: isHovered ? 3 : 0,
    opacity: isHovered ? 1 : 0.6,
    duration: 0.2,
    ease: "power2.out",
  });
}