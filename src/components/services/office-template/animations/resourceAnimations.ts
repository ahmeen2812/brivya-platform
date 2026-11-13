import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OFFICE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initOfficeResourcesAnimation(
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
    const yTravel = isMobile ? OFFICE_MOTION.travel.mobileResourcesY : 35;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 82%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (header) {
      tl.fromTo(header, { autoAlpha: 0, y: -15 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0);
    }

    if (validCards.length > 0) {
      tl.fromTo(
        validCards,
        { autoAlpha: 0, y: yTravel },
        { autoAlpha: 1, y: 0, duration: OFFICE_MOTION.durations.resourceCard, stagger: OFFICE_MOTION.stagger.resources, ease: OFFICE_MOTION.easings.executiveDecel },
        0.12
      );
    }

    if (validBadges.length > 0) {
      tl.fromTo(
        validBadges,
        { autoAlpha: 0, scale: OFFICE_MOTION.scale.resourceBadgeInitial, y: 15 },
        { autoAlpha: 1, scale: 1.0, y: 0, duration: OFFICE_MOTION.durations.resourceBadge, stagger: 0.08, ease: OFFICE_MOTION.easings.powerOut },
        0.24
      );
    }
  }, container);
}