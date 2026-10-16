import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEARCH_ADS_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

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
    const yTravel = isMobile ? SEARCH_ADS_MOTION.travel.mobileFeaturedY : SEARCH_ADS_MOTION.travel.desktopFeaturedY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: isMobile ? "top 92%" : "top 96%",
        toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([cardElement, headerElement, bodyElement].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    tl.fromTo(
      cardElement,
      { autoAlpha: 0, y: yTravel, scale: SEARCH_ADS_MOTION.scale.featuredCardInitial },
      { autoAlpha: 1, y: 0, scale: 1.0, duration: SEARCH_ADS_MOTION.durations.featuredCard, ease: SEARCH_ADS_MOTION.easings.executiveDecel },
      0
    );

    if (headerElement) {
      tl.fromTo(headerElement, { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: SEARCH_ADS_MOTION.easings.powerOut }, 0.12);
    }
    if (bodyElement) {
      tl.fromTo(bodyElement, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: SEARCH_ADS_MOTION.easings.powerOut }, 0.2);
    }
  }, cardElement);
}

export interface SearchCardsAnimationTargets {
  readonly card2: HTMLElement | null;
  readonly card3: HTMLElement | null;
  readonly card3Container: HTMLElement | null;
  readonly relevanceIllustration: HTMLElement | null;
  readonly card4: HTMLElement | null;
}

export function initSearchCardsAnimation(
  targets: SearchCardsAnimationTargets,
  sectionContainer: HTMLElement | null
): gsap.Context | null {
  const { card2, card3, card3Container, relevanceIllustration, card4 } = targets;
  if (!sectionContainer) return null;

  const elements = [card2, card3, relevanceIllustration, card4].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const lateralDistance = isMobile ? 0 : SEARCH_ADS_MOTION.travel.desktopCardLateralX;
    const verticalDistance = isMobile ? SEARCH_ADS_MOTION.travel.mobileCardY : 0;
    const startThreshold = isMobile ? "top 90%" : "top 88%";

    // Card 02: Enters RIGHT -> LEFT (Desktop) / Vertical (Mobile)
    if (card2) {
      gsap.fromTo(
        card2,
        { autoAlpha: 0, x: lateralDistance, y: verticalDistance },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: SEARCH_ADS_MOTION.durations.serviceCard,
          ease: SEARCH_ADS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card2, start: startThreshold, toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card2, { clearProps: "transform,opacity" }),
        }
      );
    }

    // Card 03: Enters LEFT -> RIGHT (Desktop) + Ad Relevance Image 03
    if (card3) {
      const card3Trigger = card3Container || card3;
      gsap.fromTo(
        card3,
        { autoAlpha: 0, x: -lateralDistance, y: verticalDistance },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: SEARCH_ADS_MOTION.durations.serviceCard,
          ease: SEARCH_ADS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card3Trigger, start: startThreshold, toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card3, { clearProps: "transform,opacity" }),
        }
      );

      if (relevanceIllustration) {
        gsap.fromTo(
          relevanceIllustration,
          { autoAlpha: 0, y: isMobile ? SEARCH_ADS_MOTION.travel.mobileRelevanceY : SEARCH_ADS_MOTION.travel.desktopRelevanceY, scale: SEARCH_ADS_MOTION.scale.relevanceImageInitial },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.0,
            duration: SEARCH_ADS_MOTION.durations.relevanceImage,
            ease: SEARCH_ADS_MOTION.easings.executiveDecel,
            scrollTrigger: { trigger: card3Trigger, start: isMobile ? "top 92%" : "top 86%", toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
            onComplete: () => gsap.set(relevanceIllustration, { clearProps: "transform,opacity" }),
          }
        );
      }
    }

    // Card 04: Enters RIGHT -> LEFT (Desktop) / Vertical (Mobile)
    if (card4) {
      gsap.fromTo(
        card4,
        { autoAlpha: 0, x: lateralDistance, y: verticalDistance },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: SEARCH_ADS_MOTION.durations.serviceCard,
          ease: SEARCH_ADS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card4, start: startThreshold, toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card4, { clearProps: "transform,opacity" }),
        }
      );
    }
  }, sectionContainer);
}