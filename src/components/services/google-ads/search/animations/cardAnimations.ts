import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEARCH_ADS_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initBentoIntroAnimation(
  container: HTMLElement | null,
  heading: HTMLElement | null,
  subheading: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  if (checkPrefersReducedMotion()) {
    gsap.set([container, heading, subheading].filter(Boolean), { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? SEARCH_ADS_MOTION.travel.mobileBentoY : 35;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 92%" : "top 94%",
        toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => {
        gsap.set([heading, subheading].filter(Boolean), { clearProps: "transform,opacity" });
      },
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: -yTravel }, { autoAlpha: 1, y: 0, duration: 0.6, ease: SEARCH_ADS_MOTION.easings.executiveDecel }, 0);
    }
    if (subheading) {
      tl.fromTo(subheading, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: 0.6, ease: SEARCH_ADS_MOTION.easings.executiveDecel }, 0.12);
    }
  }, container);
}

export interface BentoCardsTargets {
  readonly featuredCard: HTMLElement | null;
  readonly targetingCard: HTMLElement | null;
  readonly relevanceCard: HTMLElement | null;
  readonly relevanceImage: HTMLElement | null;
  readonly attributionCard: HTMLElement | null;
}

export function initBentoGridAnimation(
  targets: BentoCardsTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { featuredCard, targetingCard, relevanceCard, relevanceImage, attributionCard } = targets;
  if (!container) return null;

  const elements = [featuredCard, targetingCard, relevanceCard, relevanceImage, attributionCard].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const lateralDistance = isMobile ? 0 : SEARCH_ADS_MOTION.travel.desktopBentoLateralX;
    const verticalDistance = isMobile ? SEARCH_ADS_MOTION.travel.mobileBentoY : 45;
    const triggerStart = isMobile ? "top 90%" : "top 86%";

    // 1. Featured Cell: Subtle scale + upward emergence
    if (featuredCard) {
      gsap.fromTo(
        featuredCard,
        { autoAlpha: 0, y: verticalDistance, scale: SEARCH_ADS_MOTION.scale.bentoFeaturedInitial },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1.0,
          duration: SEARCH_ADS_MOTION.durations.bentoFeatured,
          ease: SEARCH_ADS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: featuredCard, start: isMobile ? "top 92%" : "top 88%", toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(featuredCard, { clearProps: "transform,opacity" }),
        }
      );
    }

    // 2. Targeting Card: Enters from Left
    if (targetingCard) {
      gsap.fromTo(
        targetingCard,
        { autoAlpha: 0, x: -lateralDistance, y: isMobile ? verticalDistance : 0 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: SEARCH_ADS_MOTION.durations.bentoCell,
          ease: SEARCH_ADS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: targetingCard, start: triggerStart, toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(targetingCard, { clearProps: "transform,opacity" }),
        }
      );
    }

    // 3. Relevance Card: Enters from Right + External Illustration
    if (relevanceCard) {
      gsap.fromTo(
        relevanceCard,
        { autoAlpha: 0, x: lateralDistance, y: isMobile ? verticalDistance : 0 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: SEARCH_ADS_MOTION.durations.bentoCell,
          ease: SEARCH_ADS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: relevanceCard, start: triggerStart, toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(relevanceCard, { clearProps: "transform,opacity" }),
        }
      );

      if (relevanceImage) {
        gsap.fromTo(
          relevanceImage,
          { autoAlpha: 0, y: 40, scale: SEARCH_ADS_MOTION.scale.relevanceImageInitial },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1.0,
            duration: SEARCH_ADS_MOTION.durations.relevanceImage,
            ease: SEARCH_ADS_MOTION.easings.executiveDecel,
            scrollTrigger: { trigger: relevanceCard, start: isMobile ? "top 92%" : "top 84%", toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
            onComplete: () => gsap.set(relevanceImage, { clearProps: "transform,opacity" }),
          }
        );
      }
    }

    // 4. Attribution Card: Enters Upward
    if (attributionCard) {
      gsap.fromTo(
        attributionCard,
        { autoAlpha: 0, y: verticalDistance },
        {
          autoAlpha: 1,
          y: 0,
          duration: SEARCH_ADS_MOTION.durations.bentoCell,
          ease: SEARCH_ADS_MOTION.easings.executiveDecel,
          scrollTrigger: { trigger: attributionCard, start: triggerStart, toggleActions: SEARCH_ADS_MOTION.scrollTrigger.toggleActions },
          onComplete: () => gsap.set(attributionCard, { clearProps: "transform,opacity" }),
        }
      );
    }
  }, container);
}