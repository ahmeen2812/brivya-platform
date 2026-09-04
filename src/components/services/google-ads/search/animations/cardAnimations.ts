import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GOOGLE_SEARCH_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

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
    const yTravel = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileFeaturedY : GOOGLE_SEARCH_MOTION.travel.desktopFeaturedY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: isMobile ? "top 92%" : "top 95%",
        toggleActions: GOOGLE_SEARCH_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([cardElement, headerElement, bodyElement].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    tl.fromTo(
      cardElement,
      { autoAlpha: 0, y: yTravel, scale: GOOGLE_SEARCH_MOTION.scale.featuredCardInitial },
      { autoAlpha: 1, y: 0, scale: 1.0, duration: GOOGLE_SEARCH_MOTION.durations.featuredCard, ease: GOOGLE_SEARCH_MOTION.easings.executiveDecel },
      0
    );

    if (headerElement) {
      tl.fromTo(headerElement, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: GOOGLE_SEARCH_MOTION.easings.powerOut }, 0.15);
    }
    if (bodyElement) {
      tl.fromTo(bodyElement, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: GOOGLE_SEARCH_MOTION.easings.powerOut }, 0.25);
    }
  }, cardElement);
}

export function initSupportingCardsAnimation(
  container: HTMLElement | null,
  cards: readonly (HTMLElement | null)[]
): gsap.Context | null {
  if (!container) return null;

  const validCards = cards.filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(validCards, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileCardsY : GOOGLE_SEARCH_MOTION.travel.desktopCardsY;

    gsap.fromTo(
      validCards,
      { autoAlpha: 0, y: yTravel },
      {
        autoAlpha: 1,
        y: 0,
        duration: GOOGLE_SEARCH_MOTION.durations.supportingCard,
        stagger: GOOGLE_SEARCH_MOTION.stagger.supportingCards,
        ease: GOOGLE_SEARCH_MOTION.easings.executiveDecel,
        scrollTrigger: {
          trigger: container,
          start: isMobile ? "top 90%" : "top 85%",
          toggleActions: GOOGLE_SEARCH_MOTION.scrollTrigger.toggleActions,
        },
        onComplete: () => gsap.set(validCards, { clearProps: "transform,opacity" }),
      }
    );
  }, container);
}