import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { API_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

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
    const yTravel = isMobile ? API_MOTION.travel.mobileFaqY : API_MOTION.travel.desktopFaqY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 82%",
        toggleActions: API_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([heading, ...validItems].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: 0.45, ease: API_MOTION.easings.powerOut }, 0);
    }

    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { autoAlpha: 0, y: yTravel },
        {
          autoAlpha: 1,
          y: 0,
          duration: API_MOTION.durations.faqItem,
          stagger: API_MOTION.stagger.faqItems,
          ease: API_MOTION.easings.powerOut,
        },
        0.14
      );
    }
  }, container);
}

export interface CtaAnimationTargets {
  readonly container: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly descriptionLead: HTMLElement | null;
  readonly descriptionBody: HTMLElement | null;
  readonly buttons: HTMLElement | null;
}

export function initCtaAnimation(targets: CtaAnimationTargets): gsap.Context | null {
  const { container, heading, descriptionLead, descriptionBody, buttons } = targets;
  if (!container) return null;

  const elements = [container, heading, descriptionLead, descriptionBody, buttons].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? API_MOTION.travel.mobileCtaY : API_MOTION.travel.desktopCtaY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 86%",
        toggleActions: API_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    tl.fromTo(container, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: API_MOTION.durations.ctaBlock, ease: API_MOTION.easings.executiveDecel }, 0);

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: API_MOTION.easings.powerOut }, 0.18);
    }
    if (descriptionLead) {
      tl.fromTo(descriptionLead, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: API_MOTION.easings.powerOut }, 0.28);
    }
    if (descriptionBody) {
      tl.fromTo(descriptionBody, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: API_MOTION.easings.powerOut }, 0.34);
    }
    if (buttons) {
      tl.fromTo(buttons, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: API_MOTION.easings.powerOut }, 0.42);
    }
  }, container);
}