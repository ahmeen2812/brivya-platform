import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ECOMMERCE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initStoreNeedsIntroAnimation(
  cardElement: HTMLElement | null,
  headingElement: HTMLElement | null,
  paragraphElement: HTMLElement | null
): gsap.Context | null {
  if (!cardElement) return null;

  if (checkPrefersReducedMotion()) {
    gsap.set([cardElement, headingElement, paragraphElement].filter(Boolean), { autoAlpha: 1, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? ECOMMERCE_MOTION.travel.mobileIntroY : ECOMMERCE_MOTION.travel.desktopIntroY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: "top 86%",
        toggleActions: ECOMMERCE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([cardElement, headingElement, paragraphElement].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    tl.fromTo(
      cardElement,
      { autoAlpha: 0, y: yTravel, scale: ECOMMERCE_MOTION.scale.introCardInitial },
      { autoAlpha: 1, y: 0, scale: 1.0, duration: ECOMMERCE_MOTION.durations.introCard, ease: ECOMMERCE_MOTION.easings.executiveDecel },
      0
    );

    if (headingElement) {
      tl.fromTo(headingElement, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: ECOMMERCE_MOTION.easings.powerOut }, 0.18);
    }
    if (paragraphElement) {
      tl.fromTo(paragraphElement, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: ECOMMERCE_MOTION.easings.powerOut }, 0.28);
    }
  }, cardElement);
}

export interface EcommerceCardsAnimationTargets {
  readonly card1: HTMLElement | null;
  readonly card2: HTMLElement | null;
  readonly card2Container: HTMLElement | null;
  readonly supportingIllustration: HTMLElement | null;
  readonly card3: HTMLElement | null;
}

export function initEcommerceCardsAnimation(
  targets: EcommerceCardsAnimationTargets,
  sectionContainer: HTMLElement | null
): gsap.Context | null {
  const { card1, card2, card2Container, supportingIllustration, card3 } = targets;
  if (!sectionContainer) return null;

  const elements = [card1, card2, supportingIllustration, card3].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const lateralDistance = isMobile ? 0 : ECOMMERCE_MOTION.travel.desktopCardLateralX;
    const verticalFallback = isMobile ? ECOMMERCE_MOTION.travel.mobileCardY : 0;

    // Card 01: Enters RIGHT -> LEFT
    if (card1) {
      gsap.fromTo(
        card1,
        { autoAlpha: 0, x: lateralDistance, y: verticalFallback },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: ECOMMERCE_MOTION.durations.serviceCard,
          ease: ECOMMERCE_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card1, start: "top 84%", toggleActions: ECOMMERCE_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card1, { clearProps: "transform,opacity" }),
        }
      );
    }

    // Card 02: Enters LEFT -> RIGHT + Supporting Image (Image 02)
    if (card2) {
      const card2Trigger = card2Container || card2;
      gsap.fromTo(
        card2,
        { autoAlpha: 0, x: -lateralDistance, y: verticalFallback },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: ECOMMERCE_MOTION.durations.serviceCard,
          ease: ECOMMERCE_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card2Trigger, start: "top 84%", toggleActions: ECOMMERCE_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card2, { clearProps: "transform,opacity" }),
        }
      );

      if (supportingIllustration) {
        gsap.fromTo(
          supportingIllustration,
          { autoAlpha: 0, y: ECOMMERCE_MOTION.travel.desktopSupportingY, scale: ECOMMERCE_MOTION.scale.supportingImageInitial },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.0,
            duration: ECOMMERCE_MOTION.durations.supportingImage,
            ease: ECOMMERCE_MOTION.easings.executiveDecel,
            scrollTrigger: { trigger: card2Trigger, start: "top 82%", toggleActions: ECOMMERCE_MOTION.scrollTrigger.toggleActions },
            onComplete: () => gsap.set(supportingIllustration, { clearProps: "transform,opacity" }),
          }
        );
      }
    }

    // Card 03: Enters RIGHT -> LEFT
    if (card3) {
      gsap.fromTo(
        card3,
        { autoAlpha: 0, x: lateralDistance, y: verticalFallback },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: ECOMMERCE_MOTION.durations.serviceCard,
          ease: ECOMMERCE_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card3, start: "top 84%", toggleActions: ECOMMERCE_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card3, { clearProps: "transform,opacity" }),
        }
      );
    }
  }, sectionContainer);
}