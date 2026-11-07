import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TEMPLATE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initTemplateFeaturedCard(
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
    const yTravel = isMobile ? TEMPLATE_MOTION.travel.mobileFeaturedY : TEMPLATE_MOTION.travel.desktopFeaturedY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: isMobile ? "top 92%" : "top 95%",
        toggleActions: TEMPLATE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set([cardElement, headerElement, bodyElement].filter(Boolean), { clearProps: "transform,opacity" }),
    });

    tl.fromTo(
      cardElement,
      { autoAlpha: 0, y: yTravel, scale: TEMPLATE_MOTION.scale.featuredCardInitial },
      { autoAlpha: 1, y: 0, scale: 1.0, duration: TEMPLATE_MOTION.durations.featuredCard, ease: TEMPLATE_MOTION.easings.executiveDecel },
      0
    );

    if (headerElement) {
      tl.fromTo(headerElement, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: TEMPLATE_MOTION.easings.powerOut }, 0.15);
    }
    if (bodyElement) {
      tl.fromTo(bodyElement, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: TEMPLATE_MOTION.easings.powerOut }, 0.25);
    }
  }, cardElement);
}

export interface TemplateSupportingCardsTargets {
  readonly card1: HTMLElement | null;
  readonly card2Container: HTMLElement | null;
  readonly card2: HTMLElement | null;
  readonly card2Illustration: HTMLElement | null;
  readonly card3Container: HTMLElement | null;
  readonly card3: HTMLElement | null;
  readonly card3Illustration: HTMLElement | null;
  readonly card4: HTMLElement | null;
}

export function initTemplateSupportingCards(
  targets: TemplateSupportingCardsTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { card1, card2Container, card2, card2Illustration, card3Container, card3, card3Illustration, card4 } = targets;
  if (!container) return null;

  const elements = [card1, card2, card2Illustration, card3, card3Illustration, card4].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const lateralDistance = isMobile ? 0 : TEMPLATE_MOTION.travel.desktopCardLateralX;
    const verticalDistance = isMobile ? TEMPLATE_MOTION.travel.mobileCardY : 0;
    const startThreshold = isMobile ? "top 90%" : "top 85%";

    // 01: RIGHT -> LEFT
    if (card1) {
      gsap.fromTo(card1, { autoAlpha: 0, x: lateralDistance, y: verticalDistance }, {
        autoAlpha: 1, x: 0, y: 0, duration: TEMPLATE_MOTION.durations.supportingCard, ease: TEMPLATE_MOTION.easings.executiveDecel,
        scrollTrigger: { trigger: card1, start: startThreshold, toggleActions: TEMPLATE_MOTION.scrollTrigger.toggleActions },
        onComplete: () => gsap.set(card1, { clearProps: "transform,opacity" }),
      });
    }

    // 02: LEFT -> RIGHT
    if (card2) {
      const trigger = card2Container || card2;
      gsap.fromTo(card2, { autoAlpha: 0, x: -lateralDistance, y: verticalDistance }, {
        autoAlpha: 1, x: 0, y: 0, duration: TEMPLATE_MOTION.durations.supportingCard, ease: TEMPLATE_MOTION.easings.executiveDecel,
        scrollTrigger: { trigger, start: startThreshold, toggleActions: TEMPLATE_MOTION.scrollTrigger.toggleActions },
        onComplete: () => gsap.set(card2, { clearProps: "transform,opacity" }),
      });

      if (card2Illustration) {
        gsap.fromTo(card2Illustration, { autoAlpha: 0, y: isMobile ? TEMPLATE_MOTION.travel.mobileSupportingY : TEMPLATE_MOTION.travel.desktopSupportingY, scale: TEMPLATE_MOTION.scale.supportingImageInitial }, {
          autoAlpha: 1, y: 0, scale: 1.0, duration: TEMPLATE_MOTION.durations.supportingImage, ease: TEMPLATE_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger, start: isMobile ? "top 92%" : "top 86%", toggleActions: TEMPLATE_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card2Illustration, { clearProps: "transform,opacity" }),
        });
      }
    }

    // 03: RIGHT -> LEFT + Internal Visual on left
    if (card3) {
      const trigger = card3Container || card3;
      gsap.fromTo(card3, { autoAlpha: 0, x: lateralDistance, y: verticalDistance }, {
        autoAlpha: 1, x: 0, y: 0, duration: TEMPLATE_MOTION.durations.supportingCard, ease: TEMPLATE_MOTION.easings.executiveDecel,
        scrollTrigger: { trigger, start: startThreshold, toggleActions: TEMPLATE_MOTION.scrollTrigger.toggleActions },
        onComplete: () => gsap.set(card3, { clearProps: "transform,opacity" }),
      });

      if (card3Illustration) {
        gsap.fromTo(card3Illustration, { autoAlpha: 0, y: isMobile ? TEMPLATE_MOTION.travel.mobileSupportingY : TEMPLATE_MOTION.travel.desktopSupportingY, scale: TEMPLATE_MOTION.scale.supportingImageInitial }, {
          autoAlpha: 1, y: 0, scale: 1.0, duration: TEMPLATE_MOTION.durations.supportingImage, ease: TEMPLATE_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger, start: isMobile ? "top 92%" : "top 86%", toggleActions: TEMPLATE_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card3Illustration, { clearProps: "transform,opacity" }),
        });
      }
    }

    // 04: LEFT -> RIGHT (The fix maintaining solid alternating consistency securely formatting defaults natively setting rendering accurately properties gracefully mapping cleanly locally elements).
    if (card4) {
      gsap.fromTo(card4, { autoAlpha: 0, x: -lateralDistance, y: verticalDistance }, {
        autoAlpha: 1, x: 0, y: 0, duration: TEMPLATE_MOTION.durations.supportingCard, ease: TEMPLATE_MOTION.easings.executiveDecel,
        scrollTrigger: { trigger: card4, start: startThreshold, toggleActions: TEMPLATE_MOTION.scrollTrigger.toggleActions },
        onComplete: () => gsap.set(card4, { clearProps: "transform,opacity" }),
      });
    }
  }, container);
}