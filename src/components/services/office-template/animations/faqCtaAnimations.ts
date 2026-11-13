import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OFFICE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initOfficeFaqAnimation(
  heading: HTMLElement | null,
  items: readonly (HTMLElement | null)[],
  container: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  const validItems = items.filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set([heading, ...validItems].filter(Boolean), { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? 16 : 22;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 82%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set([heading, ...validItems].filter(Boolean), { clearProps: "transform,opacity" }),
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0);
    }

    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { autoAlpha: 0, y: yTravel },
        { autoAlpha: 1, y: 0, duration: OFFICE_MOTION.durations.faqItem, stagger: OFFICE_MOTION.stagger.faqItems, ease: OFFICE_MOTION.easings.powerOut },
        0.14
      );
    }
  }, container);
}

export function initOfficeCtaAnimation(
  container: HTMLElement | null,
  heading: HTMLElement | null,
  description: HTMLElement | null,
  buttons: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  const elements = [container, heading, description, buttons].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? 20 : 35;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 86%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    tl.fromTo(container, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: OFFICE_MOTION.durations.ctaBlock, ease: OFFICE_MOTION.easings.executiveDecel }, 0);

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0.18);
    }
    if (description) {
      tl.fromTo(description, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0.28);
    }
    if (buttons) {
      tl.fromTo(buttons, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0.38);
    }
  }, container);
}