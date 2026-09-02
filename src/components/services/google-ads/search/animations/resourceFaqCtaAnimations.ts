import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GOOGLE_SEARCH_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initResourcesAnimation(
  container: HTMLElement | null,
  header: HTMLElement | null,
  cards: readonly (HTMLElement | null)[],
  badges: readonly (HTMLElement | null)[]
): gsap.Context | null {
  if (!container) return null;

  const validCards = cards.filter(Boolean) as HTMLElement[];
  const validBadges = badges.filter(Boolean) as HTMLElement[];
  const elements = [header, ...validCards, ...validBadges].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileResourcesY : GOOGLE_SEARCH_MOTION.travel.desktopResourcesY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 82%",
        toggleActions: GOOGLE_SEARCH_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (header) {
      tl.fromTo(header, { autoAlpha: 0, y: -15 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: GOOGLE_SEARCH_MOTION.easings.powerOut }, 0);
    }

    if (validCards.length > 0) {
      tl.fromTo(
        validCards,
        { autoAlpha: 0, y: yTravel },
        {
          autoAlpha: 1,
          y: 0,
          duration: GOOGLE_SEARCH_MOTION.durations.resourceCard,
          stagger: GOOGLE_SEARCH_MOTION.stagger.resources,
          ease: GOOGLE_SEARCH_MOTION.easings.executiveDecel,
        },
        0.12
      );
    }

    // Coordinated scale and reveal for the 4 floating feature badges
    if (validBadges.length > 0) {
      tl.fromTo(
        validBadges,
        { autoAlpha: 0, scale: GOOGLE_SEARCH_MOTION.scale.resourceBadgeInitial, y: 15 },
        {
          autoAlpha: 1,
          scale: 1.0,
          y: 0,
          duration: GOOGLE_SEARCH_MOTION.durations.resourceBadge,
          stagger: GOOGLE_SEARCH_MOTION.stagger.badges,
          ease: GOOGLE_SEARCH_MOTION.easings.powerOut,
        },
        0.25
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
    const yTravel = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileFaqY : GOOGLE_SEARCH_MOTION.travel.desktopFaqY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 82%",
        toggleActions: GOOGLE_SEARCH_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([heading, ...validItems].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: 0.45, ease: GOOGLE_SEARCH_MOTION.easings.powerOut }, 0);
    }

    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { autoAlpha: 0, y: yTravel },
        {
          autoAlpha: 1,
          y: 0,
          duration: GOOGLE_SEARCH_MOTION.durations.faqItem,
          stagger: GOOGLE_SEARCH_MOTION.stagger.faqItems,
          ease: GOOGLE_SEARCH_MOTION.easings.powerOut,
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
    const yTravel = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileCtaY : GOOGLE_SEARCH_MOTION.travel.desktopCtaY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 86%",
        toggleActions: GOOGLE_SEARCH_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    tl.fromTo(container, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: GOOGLE_SEARCH_MOTION.durations.ctaBlock, ease: GOOGLE_SEARCH_MOTION.easings.executiveDecel }, 0);

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: GOOGLE_SEARCH_MOTION.easings.powerOut }, 0.18);
    }
    if (description) {
      tl.fromTo(description, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: GOOGLE_SEARCH_MOTION.easings.powerOut }, 0.28);
    }
    if (buttons) {
      tl.fromTo(buttons, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: GOOGLE_SEARCH_MOTION.easings.powerOut }, 0.38);
    }
  }, container);
}