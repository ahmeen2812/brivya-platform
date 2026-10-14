import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SAAS_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface LifecycleAnimationTargets {
  readonly header: HTMLElement | null;
  readonly cards: readonly (HTMLElement | null)[];
}

export function initLifecycleAnimation(
  targets: LifecycleAnimationTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { header, cards } = targets;
  if (!container) return null;

  const validCards = cards.filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set([header, ...validCards].filter(Boolean), { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? SAAS_MOTION.travel.mobileLifecycleY : SAAS_MOTION.travel.desktopLifecycleY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 84%",
        toggleActions: SAAS_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([header, ...validCards].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    if (header) {
      tl.fromTo(header, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: 0.5, ease: SAAS_MOTION.easings.powerOut }, 0);
    }

    if (validCards.length > 0) {
      tl.fromTo(
        validCards,
        { autoAlpha: 0, y: yTravel },
        {
          autoAlpha: 1,
          y: 0,
          duration: SAAS_MOTION.durations.lifecycleCard,
          stagger: SAAS_MOTION.stagger.lifecycle,
          ease: SAAS_MOTION.easings.executiveDecel,
        },
        0.15
      );
    }
  }, container);
}

export interface FaqAnimationTargets {
  readonly heading: HTMLElement | null;
  readonly items: readonly (HTMLElement | null)[];
}

export function initFaqAnimation(
  targets: FaqAnimationTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { heading, items } = targets;
  if (!container) return null;

  const validItems = items.filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set([heading, ...validItems].filter(Boolean), { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? SAAS_MOTION.travel.mobileFaqY : SAAS_MOTION.travel.desktopFaqY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 82%",
        toggleActions: SAAS_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([heading, ...validItems].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: 0.45, ease: SAAS_MOTION.easings.powerOut }, 0);
    }

    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { autoAlpha: 0, y: yTravel },
        {
          autoAlpha: 1,
          y: 0,
          duration: SAAS_MOTION.durations.faqItem,
          stagger: SAAS_MOTION.stagger.faqItems,
          ease: SAAS_MOTION.easings.powerOut,
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
    const yTravel = isMobile ? SAAS_MOTION.travel.mobileCtaY : SAAS_MOTION.travel.desktopCtaY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 86%",
        toggleActions: SAAS_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set(elements, { clearProps: "transform,opacity" });
      },
    });

    tl.fromTo(container, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: SAAS_MOTION.durations.ctaBlock, ease: SAAS_MOTION.easings.executiveDecel }, 0);

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: SAAS_MOTION.easings.powerOut }, 0.18);
    }
    if (description) {
      tl.fromTo(description, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: SAAS_MOTION.easings.powerOut }, 0.28);
    }
    if (buttons) {
      tl.fromTo(buttons, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: SAAS_MOTION.easings.powerOut }, 0.38);
    }
  }, container);
}