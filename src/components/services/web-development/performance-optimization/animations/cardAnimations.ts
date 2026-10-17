import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PERFORMANCE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

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
    const yTravel = isMobile ? PERFORMANCE_MOTION.travel.mobileFeaturedY : PERFORMANCE_MOTION.travel.desktopFeaturedY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        // Threshold calibrated to 96% so cards peeking at the bottom of the viewport reveal on initial reload
        start: isMobile ? "top 92%" : "top 96%",
        toggleActions: PERFORMANCE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([cardElement, headerElement, bodyElement].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    tl.fromTo(
      cardElement,
      { autoAlpha: 0, y: yTravel, scale: PERFORMANCE_MOTION.scale.featuredCardInitial },
      { autoAlpha: 1, y: 0, scale: 1.0, duration: PERFORMANCE_MOTION.durations.featuredCard, ease: PERFORMANCE_MOTION.easings.executiveDecel },
      0
    );

    if (headerElement) {
      tl.fromTo(headerElement, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: PERFORMANCE_MOTION.easings.powerOut }, 0.18);
    }
    if (bodyElement) {
      tl.fromTo(bodyElement, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: PERFORMANCE_MOTION.easings.powerOut }, 0.28);
    }
  }, cardElement);
}

export interface PerformanceCardsAnimationTargets {
  readonly card2: HTMLElement | null;
  readonly card3: HTMLElement | null;
  readonly card3Container: HTMLElement | null;
  readonly deliveryIllustration: HTMLElement | null;
  readonly card4: HTMLElement | null;
}

export function initPerformanceCardsAnimation(
  targets: PerformanceCardsAnimationTargets,
  sectionContainer: HTMLElement | null
): gsap.Context | null {
  const { card2, card3, card3Container, deliveryIllustration, card4 } = targets;
  if (!sectionContainer) return null;

  const elements = [card2, card3, deliveryIllustration, card4].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const lateralDistance = isMobile ? 0 : PERFORMANCE_MOTION.travel.desktopCardLateralX;
    const verticalDistance = isMobile ? PERFORMANCE_MOTION.travel.mobileCardY : 0;
    const startThreshold = isMobile ? "top 90%" : "top 88%";

    // Card 02: Enters RIGHT -> LEFT (Desktop) / Vertical Emergence (Mobile)
    if (card2) {
      gsap.fromTo(
        card2,
        { autoAlpha: 0, x: lateralDistance, y: verticalDistance },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: PERFORMANCE_MOTION.durations.serviceCard,
          ease: PERFORMANCE_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card2, start: startThreshold, toggleActions: PERFORMANCE_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card2, { clearProps: "transform,opacity" }),
        }
      );
    }

    // Card 03: Enters LEFT -> RIGHT (Desktop) + Delivery Illustration (Image 03)
    if (card3) {
      const card3Trigger = card3Container || card3;
      gsap.fromTo(
        card3,
        { autoAlpha: 0, x: -lateralDistance, y: verticalDistance },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: PERFORMANCE_MOTION.durations.serviceCard,
          ease: PERFORMANCE_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card3Trigger, start: startThreshold, toggleActions: PERFORMANCE_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card3, { clearProps: "transform,opacity" }),
        }
      );

      if (deliveryIllustration) {
        gsap.fromTo(
          deliveryIllustration,
          { autoAlpha: 0, y: isMobile ? PERFORMANCE_MOTION.travel.mobileDeliveryY : PERFORMANCE_MOTION.travel.desktopDeliveryY, scale: PERFORMANCE_MOTION.scale.deliveryImageInitial },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.0,
            duration: PERFORMANCE_MOTION.durations.deliveryImage,
            ease: PERFORMANCE_MOTION.easings.executiveDecel,
            scrollTrigger: { trigger: card3Trigger, start: isMobile ? "top 92%" : "top 86%", toggleActions: PERFORMANCE_MOTION.scrollTrigger.toggleActions },
            onComplete: () => gsap.set(deliveryIllustration, { clearProps: "transform,opacity" }),
          }
        );
      }
    }

    // Card 04: Enters RIGHT -> LEFT (Desktop) / Vertical Emergence (Mobile)
    if (card4) {
      gsap.fromTo(
        card4,
        { autoAlpha: 0, x: lateralDistance, y: verticalDistance },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: PERFORMANCE_MOTION.durations.serviceCard,
          ease: PERFORMANCE_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card4, start: startThreshold, toggleActions: PERFORMANCE_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card4, { clearProps: "transform,opacity" }),
        }
      );
    }
  }, sectionContainer);
}