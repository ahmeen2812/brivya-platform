import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PERFORMANCE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
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
    const yTravel = isMobile ? PERFORMANCE_MOTION.travel.mobileFaqY : PERFORMANCE_MOTION.travel.desktopFaqY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 82%",
        toggleActions: PERFORMANCE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([heading, ...validItems].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: 0.45, ease: PERFORMANCE_MOTION.easings.powerOut }, 0);
    }

    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { autoAlpha: 0, y: yTravel },
        {
          autoAlpha: 1,
          y: 0,
          duration: PERFORMANCE_MOTION.durations.faqItem,
          stagger: PERFORMANCE_MOTION.stagger.faqItems,
          ease: PERFORMANCE_MOTION.easings.powerOut,
        },
        0.14
      );
    }
  }, container);
}

export interface CtaAnimationTargets {
  readonly container: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly descriptionParagraphs: readonly (HTMLElement | null)[];
  readonly buttons: HTMLElement | null;
}

export function initCtaAnimation(targets: CtaAnimationTargets): gsap.Context | null {
  const { container, heading, descriptionParagraphs, buttons } = targets;
  if (!container) return null;

  const validParas = descriptionParagraphs.filter(Boolean) as HTMLElement[];
  const elements = [container, heading, ...validParas, buttons].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? PERFORMANCE_MOTION.travel.mobileCtaY : PERFORMANCE_MOTION.travel.desktopCtaY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 86%",
        toggleActions: PERFORMANCE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    tl.fromTo(container, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: PERFORMANCE_MOTION.durations.ctaBlock, ease: PERFORMANCE_MOTION.easings.executiveDecel }, 0);

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: PERFORMANCE_MOTION.easings.powerOut }, 0.18);
    }
    if (validParas.length > 0) {
      tl.fromTo(validParas, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08, ease: PERFORMANCE_MOTION.easings.powerOut }, 0.26);
    }
    if (buttons) {
      tl.fromTo(buttons, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: PERFORMANCE_MOTION.easings.powerOut }, 0.38);
    }
  }, container);
}