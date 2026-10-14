/**
 * BRIVYA SOLUTIONS — FAQ & CTA KINEMATICS
 * - FAQ Section: Heading reveals, followed by sequential cascade of question rows.
 * - Final CTA: Clean container entrance with heading, description, and button stagger.
 * - All interactive bindings (accordion clicks, modal triggers) completely preserved.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CUSTOM_WEBSITES_MOTION,
  checkIsMobile,
  checkPrefersReducedMotion,
} from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FaqAnimationTargets {
  readonly heading: HTMLElement | null;
  readonly items: readonly (HTMLElement | null)[];
}

/**
 * Initializes the sequential question cascade for the FAQ section
 */
export function initFaqAnimation(
  targets: FaqAnimationTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { heading, items } = targets;
  if (!container) return null;

  const validItems = items.filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set([heading, ...validItems].filter(Boolean), {
      autoAlpha: 1,
      y: 0,
    });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile
      ? CUSTOM_WEBSITES_MOTION.travel.mobileFaqY
      : CUSTOM_WEBSITES_MOTION.travel.desktopFaqY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 82%",
        toggleActions: CUSTOM_WEBSITES_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([heading, ...validItems].filter(Boolean), {
          clearProps: "transform,opacity",
        });
      },
    });

    if (heading) {
      tl.fromTo(
        heading,
        { autoAlpha: 0, y: yTravel },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: CUSTOM_WEBSITES_MOTION.easings.powerOut },
        0
      );
    }

    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { autoAlpha: 0, y: yTravel },
        {
          autoAlpha: 1,
          y: 0,
          duration: CUSTOM_WEBSITES_MOTION.durations.faqItem,
          stagger: CUSTOM_WEBSITES_MOTION.stagger.faqItems,
          ease: CUSTOM_WEBSITES_MOTION.easings.powerOut,
        },
        0.14
      );
    }
  }, container);
}

export interface CtaAnimationTargets {
  readonly container: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly description: HTMLElement | null;
  readonly buttons: HTMLElement | null;
}

/**
 * Initializes the smooth entrance for the unfilled CTA section
 */
export function initCtaAnimation(targets: CtaAnimationTargets): gsap.Context | null {
  const { container, heading, description, buttons } = targets;
  if (!container) return null;

  const elements = [container, heading, description, buttons].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile
      ? CUSTOM_WEBSITES_MOTION.travel.mobileCtaY
      : CUSTOM_WEBSITES_MOTION.travel.desktopCtaY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 86%",
        toggleActions: CUSTOM_WEBSITES_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set(elements, { clearProps: "transform,opacity" });
      },
    });

    // 1. Container settles into place
    tl.fromTo(
      container,
      { autoAlpha: 0, y: yTravel },
      {
        autoAlpha: 1,
        y: 0,
        duration: CUSTOM_WEBSITES_MOTION.durations.ctaBlock,
        ease: CUSTOM_WEBSITES_MOTION.easings.executiveDecel,
      },
      0
    );

    // 2. Heading reveals
    if (heading) {
      tl.fromTo(
        heading,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: CUSTOM_WEBSITES_MOTION.easings.powerOut },
        0.18
      );
    }

    // 3. Description follows
    if (description) {
      tl.fromTo(
        description,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: CUSTOM_WEBSITES_MOTION.easings.powerOut },
        0.28
      );
    }

    // 4. Buttons emerge
    if (buttons) {
      tl.fromTo(
        buttons,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: CUSTOM_WEBSITES_MOTION.easings.powerOut },
        0.38
      );
    }
  }, container);
}





