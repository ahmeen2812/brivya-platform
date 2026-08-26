import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LANDING_PAGES_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initFeaturedCardAnimation(
  cardElement: HTMLElement | null,
  headerElement: HTMLElement | null,
  bodyElement: HTMLElement | null
): gsap.Context | null {
  if (!cardElement) return null;

  if (checkPrefersReducedMotion()) {
    gsap.set([cardElement, headerElement, bodyElement].filter(Boolean), { autoAlpha: 1, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? LANDING_PAGES_MOTION.travel.mobileFeaturedY : LANDING_PAGES_MOTION.travel.desktopFeaturedY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: isMobile ? "top 92%" : "top 96%",
        toggleActions: LANDING_PAGES_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([cardElement, headerElement, bodyElement].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    tl.fromTo(
      cardElement,
      { autoAlpha: 0, y: yTravel, scale: LANDING_PAGES_MOTION.scale.featuredCardInitial },
      { autoAlpha: 1, y: 0, scale: 1.0, duration: LANDING_PAGES_MOTION.durations.featuredCard, ease: LANDING_PAGES_MOTION.easings.executiveDecel },
      0
    );

    if (headerElement) {
      tl.fromTo(headerElement, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: LANDING_PAGES_MOTION.easings.powerOut }, 0.15);
    }
    if (bodyElement) {
      tl.fromTo(bodyElement, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: LANDING_PAGES_MOTION.easings.powerOut }, 0.25);
    }
  }, cardElement);
}

export interface SupportingCardsAnimationTargets {
  readonly card1: HTMLElement | null;
  readonly card1Container: HTMLElement | null;
  readonly card1Illustration: HTMLElement | null;
  readonly card2Container: HTMLElement | null;
  readonly card2: HTMLElement | null;
  readonly card2Illustration: HTMLElement | null;
}

export function initSupportingCardsAnimation(
  targets: SupportingCardsAnimationTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { card1, card1Container, card1Illustration, card2Container, card2, card2Illustration } = targets;
  if (!container) return null;

  const elements = [card1, card1Illustration, card2, card2Illustration].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const lateralDistance = isMobile ? 0 : LANDING_PAGES_MOTION.travel.desktopCardLateralX;
    const verticalDistance = isMobile ? LANDING_PAGES_MOTION.travel.mobileCardY : 0;
    const startThreshold = isMobile ? "top 90%" : "top 85%";

    // Card 01: Enters LEFT -> RIGHT + Supporting Image on Right
    if (card1) {
      const trigger = card1Container || card1;
      gsap.fromTo(
        card1,
        { autoAlpha: 0, x: -lateralDistance, y: verticalDistance },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: LANDING_PAGES_MOTION.durations.supportingCard,
          ease: LANDING_PAGES_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger, start: startThreshold, toggleActions: LANDING_PAGES_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card1, { clearProps: "transform,opacity" }),
        }
      );

      if (card1Illustration) {
        gsap.fromTo(
          card1Illustration,
          { autoAlpha: 0, y: isMobile ? LANDING_PAGES_MOTION.travel.mobileSupportingY : LANDING_PAGES_MOTION.travel.desktopSupportingY, scale: LANDING_PAGES_MOTION.scale.supportingImageInitial },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.0,
            duration: LANDING_PAGES_MOTION.durations.supportingImage,
            ease: LANDING_PAGES_MOTION.easings.executiveDecel,
            scrollTrigger: { trigger, start: isMobile ? "top 92%" : "top 86%", toggleActions: LANDING_PAGES_MOTION.scrollTrigger.toggleActions },
            onComplete: () => gsap.set(card1Illustration, { clearProps: "transform,opacity" }),
          }
        );
      }
    }

    // Card 02: Enters RIGHT -> LEFT + Speed/Mobile Image on Left
    if (card2) {
      const trigger = card2Container || card2;
      gsap.fromTo(
        card2,
        { autoAlpha: 0, x: lateralDistance, y: verticalDistance },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: LANDING_PAGES_MOTION.durations.supportingCard,
          ease: LANDING_PAGES_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger, start: startThreshold, toggleActions: LANDING_PAGES_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card2, { clearProps: "transform,opacity" }),
        }
      );

      if (card2Illustration) {
        gsap.fromTo(
          card2Illustration,
          { autoAlpha: 0, y: isMobile ? LANDING_PAGES_MOTION.travel.mobileSupportingY : LANDING_PAGES_MOTION.travel.desktopSupportingY, scale: LANDING_PAGES_MOTION.scale.supportingImageInitial },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.0,
            duration: LANDING_PAGES_MOTION.durations.supportingImage,
            ease: LANDING_PAGES_MOTION.easings.executiveDecel,
            scrollTrigger: { trigger, start: isMobile ? "top 92%" : "top 86%", toggleActions: LANDING_PAGES_MOTION.scrollTrigger.toggleActions },
            onComplete: () => gsap.set(card2Illustration, { clearProps: "transform,opacity" }),
          }
        );
      }
    }
  }, container);
}