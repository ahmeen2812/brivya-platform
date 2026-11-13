import gsap from "gsap";
import { OFFICE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

export interface OfficeHeroTargets {
  readonly serviceTitle: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly accentLine: HTMLElement | null;
  readonly descriptionText: HTMLElement | null;
  readonly illustration: HTMLElement | null;
}

export function initOfficeHeroAnimation(
  targets: OfficeHeroTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { serviceTitle, heading, accentLine, descriptionText, illustration } = targets;
  if (!container) return null;

  const elements = [serviceTitle, heading, accentLine, descriptionText, illustration].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const titleX = isMobile ? 0 : OFFICE_MOTION.travel.leftSlideX * 0.7;
    const headingX = isMobile ? 0 : OFFICE_MOTION.travel.leftSlideX;
    const descX = isMobile ? 0 : OFFICE_MOTION.travel.leftSlideX * 0.85;
    const imgY = isMobile ? OFFICE_MOTION.travel.mobileTopDropY : OFFICE_MOTION.travel.topDropY;

    const tl = gsap.timeline({
      defaults: { ease: OFFICE_MOTION.easings.executiveDecel },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (illustration) {
      tl.fromTo(
        illustration,
        { autoAlpha: 0, y: imgY, scale: OFFICE_MOTION.scale.heroImageInitial },
        { autoAlpha: 1, y: 0, scale: 1.0, duration: OFFICE_MOTION.durations.heroImageDrop },
        0
      );
    }

    if (serviceTitle) {
      tl.fromTo(serviceTitle, { autoAlpha: 0, x: titleX }, { autoAlpha: 1, x: 0, duration: 0.6 }, 0.1);
    }

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, x: headingX }, { autoAlpha: 1, x: 0, duration: OFFICE_MOTION.durations.heroTextSlide }, 0.15);
    }

    if (accentLine) {
      tl.fromTo(accentLine, { autoAlpha: 0, scaleY: 0, transformOrigin: "top center" }, { autoAlpha: 1, scaleY: 1, duration: 0.5 }, 0.22);
    }

    if (descriptionText) {
      tl.fromTo(descriptionText, { autoAlpha: 0, x: descX }, { autoAlpha: 1, x: 0, duration: OFFICE_MOTION.durations.heroTextSlide }, 0.26);
    }
  }, container);
}

export function initDirectiveBannerAnimation(
  container: HTMLElement | null,
  leftColumn: HTMLElement | null,
  rightColumn: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  if (checkPrefersReducedMotion()) {
    gsap.set([leftColumn, rightColumn].filter(Boolean), { autoAlpha: 1, x: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const xDist = isMobile ? 0 : OFFICE_MOTION.travel.convergeX;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 92%" : "top 95%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set([leftColumn, rightColumn].filter(Boolean), { clearProps: "transform,opacity" }),
    });

    if (leftColumn) {
      tl.fromTo(leftColumn, { autoAlpha: 0, x: -xDist }, { autoAlpha: 1, x: 0, duration: OFFICE_MOTION.durations.directiveConverge, ease: OFFICE_MOTION.easings.executiveDecel }, 0);
    }

    if (rightColumn) {
      tl.fromTo(rightColumn, { autoAlpha: 0, x: xDist }, { autoAlpha: 1, x: 0, duration: OFFICE_MOTION.durations.directiveConverge, ease: OFFICE_MOTION.easings.executiveDecel }, 0.08);
    }
  }, container);
}