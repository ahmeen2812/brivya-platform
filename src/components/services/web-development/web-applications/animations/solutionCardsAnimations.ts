import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  WEB_APPS_MOTION,
  checkIsMobile,
  checkPrefersReducedMotion,
} from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initIntroCardAnimation(
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
    const yTravel = isMobile ? WEB_APPS_MOTION.travel.mobileIntroY : WEB_APPS_MOTION.travel.desktopIntroY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: "top 86%",
        toggleActions: WEB_APPS_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([cardElement, headingElement, paragraphElement].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    tl.fromTo(
      cardElement,
      { autoAlpha: 0, y: yTravel, scale: WEB_APPS_MOTION.scale.cardIntroInitial },
      { autoAlpha: 1, y: 0, scale: 1.0, duration: WEB_APPS_MOTION.durations.cardIntro, ease: WEB_APPS_MOTION.easings.executiveDecel },
      0
    );

    if (headingElement) {
      tl.fromTo(headingElement, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: WEB_APPS_MOTION.easings.powerOut }, 0.18);
    }
    if (paragraphElement) {
      tl.fromTo(paragraphElement, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: WEB_APPS_MOTION.easings.powerOut }, 0.28);
    }
  }, cardElement);
}

export interface SolutionCardsAnimationTargets {
  readonly card1: HTMLElement | null;
  readonly card2: HTMLElement | null;
  readonly card2Container: HTMLElement | null;
  readonly dashboardIllustration: HTMLElement | null;
  readonly card3: HTMLElement | null;
}

export function initSolutionCardsAnimation(
  targets: SolutionCardsAnimationTargets,
  sectionContainer: HTMLElement | null
): gsap.Context | null {
  const { card1, card2, card2Container, dashboardIllustration, card3 } = targets;
  if (!sectionContainer) return null;

  const elements = [card1, card2, dashboardIllustration, card3].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const lateralDistance = isMobile ? 0 : WEB_APPS_MOTION.travel.desktopCardLateralX;
    const verticalFallback = isMobile ? WEB_APPS_MOTION.travel.mobileCardY : 0;

    if (card1) {
      gsap.fromTo(
        card1,
        { autoAlpha: 0, x: lateralDistance, y: verticalFallback },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: WEB_APPS_MOTION.durations.solutionCard,
          ease: WEB_APPS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card1, start: "top 84%", toggleActions: WEB_APPS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card1, { clearProps: "transform,opacity" }),
        }
      );
    }

    if (card2) {
      const card2Trigger = card2Container || card2;
      gsap.fromTo(
        card2,
        { autoAlpha: 0, x: -lateralDistance, y: verticalFallback },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: WEB_APPS_MOTION.durations.solutionCard,
          ease: WEB_APPS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card2Trigger, start: "top 84%", toggleActions: WEB_APPS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card2, { clearProps: "transform,opacity" }),
        }
      );

      if (dashboardIllustration) {
        gsap.fromTo(
          dashboardIllustration,
          { autoAlpha: 0, y: WEB_APPS_MOTION.travel.desktopDashboardY, scale: WEB_APPS_MOTION.scale.dashboardImageInitial },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.0,
            duration: WEB_APPS_MOTION.durations.dashboardImage,
            ease: WEB_APPS_MOTION.easings.executiveDecel,
            scrollTrigger: { trigger: card2Trigger, start: "top 82%", toggleActions: WEB_APPS_MOTION.scrollTrigger.toggleActions },
            onComplete: () => gsap.set(dashboardIllustration, { clearProps: "transform,opacity" }),
          }
        );
      }
    }

    if (card3) {
      gsap.fromTo(
        card3,
        { autoAlpha: 0, x: lateralDistance, y: verticalFallback },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: WEB_APPS_MOTION.durations.solutionCard,
          ease: WEB_APPS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: card3, start: "top 84%", toggleActions: WEB_APPS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(card3, { clearProps: "transform,opacity" }),
        }
      );
    }
  }, sectionContainer);
}