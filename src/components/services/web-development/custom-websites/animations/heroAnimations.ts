/**
 * BRIVYA SOLUTIONS — HERO SECTION KINEMATICS
 * Coordinated 4-element sequence:
 * - Heading: Left -> Right
 * - Subtitle: Right -> Left
 * - Description: Emerges from behind fixed vertical accent line via overflow clip
 * - Illustration: Right -> Left with subtle scale reduction to 1.0
 */

import gsap from "gsap";
import {
  CUSTOM_WEBSITES_MOTION,
  checkIsMobile,
  checkPrefersReducedMotion,
} from "./motionTokens";

export interface HeroAnimationTargets {
  readonly heading: HTMLElement | null;
  readonly tagline: HTMLElement | null;
  readonly descriptionText: HTMLElement | null;
  readonly illustration: HTMLElement | null;
}

export function initHeroAnimation(
  targets: HeroAnimationTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { heading, tagline, descriptionText, illustration } = targets;
  if (!container) return null;

  const elements = [heading, tagline, descriptionText, illustration].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const headingX = isMobile
      ? CUSTOM_WEBSITES_MOTION.travel.mobileHeadingX
      : CUSTOM_WEBSITES_MOTION.travel.desktopHeadingX;
    const taglineX = isMobile
      ? CUSTOM_WEBSITES_MOTION.travel.mobileTaglineX
      : CUSTOM_WEBSITES_MOTION.travel.desktopTaglineX;
    const descX = isMobile
      ? CUSTOM_WEBSITES_MOTION.travel.mobileDescX
      : CUSTOM_WEBSITES_MOTION.travel.desktopDescX;
    const imgX = isMobile ? 0 : CUSTOM_WEBSITES_MOTION.travel.desktopHeroImageX;
    const imgY = isMobile ? CUSTOM_WEBSITES_MOTION.travel.mobileHeroImageY : 0;

    const tl = gsap.timeline({
      defaults: { ease: CUSTOM_WEBSITES_MOTION.easings.executiveDecel },
      onComplete: () => {
        gsap.set(elements, { clearProps: "transform,opacity" });
      },
    });

    // 1. Main Heading: Left -> Right
    if (heading) {
      tl.fromTo(
        heading,
        { autoAlpha: 0, x: headingX },
        { autoAlpha: 1, x: 0, duration: CUSTOM_WEBSITES_MOTION.durations.heroHeading },
        0
      );
    }

    // 2. Subtitle: Right -> Left
    if (tagline) {
      tl.fromTo(
        tagline,
        { autoAlpha: 0, x: taglineX },
        { autoAlpha: 1, x: 0, duration: CUSTOM_WEBSITES_MOTION.durations.heroTagline },
        0.12
      );
    }

    // 3. Description: Reveal from behind the fixed vertical line
    if (descriptionText) {
      tl.fromTo(
        descriptionText,
        { autoAlpha: 0, x: descX },
        { autoAlpha: 1, x: 0, duration: CUSTOM_WEBSITES_MOTION.durations.heroDescription },
        0.24
      );
    }

    // 4. Hero Illustration: Right -> Left with subtle zoom settle
    if (illustration) {
      tl.fromTo(
        illustration,
        {
          autoAlpha: 0,
          x: imgX,
          y: imgY,
          scale: CUSTOM_WEBSITES_MOTION.scale.heroImageInitial,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1.0,
          duration: CUSTOM_WEBSITES_MOTION.durations.heroImage,
        },
        0.18
      );
    }
  }, container);
}