import gsap from "gsap";
import { SAAS_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

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
    const headingX = isMobile ? SAAS_MOTION.travel.mobileHeadingX : SAAS_MOTION.travel.desktopHeadingX;
    const taglineX = isMobile ? SAAS_MOTION.travel.mobileTaglineX : SAAS_MOTION.travel.desktopTaglineX;
    const descX = isMobile ? SAAS_MOTION.travel.mobileDescX : SAAS_MOTION.travel.desktopDescX;
    const imgX = isMobile ? 0 : SAAS_MOTION.travel.desktopHeroImageX;
    const imgY = isMobile ? SAAS_MOTION.travel.mobileHeroImageY : 0;

    const tl = gsap.timeline({
      defaults: { ease: SAAS_MOTION.easings.executiveDecel },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, x: headingX }, { autoAlpha: 1, x: 0, duration: SAAS_MOTION.durations.heroHeading }, 0);
    }
    if (tagline) {
      tl.fromTo(tagline, { autoAlpha: 0, x: taglineX }, { autoAlpha: 1, x: 0, duration: SAAS_MOTION.durations.heroTagline }, 0.12);
    }
    if (descriptionText) {
      tl.fromTo(descriptionText, { autoAlpha: 0, x: descX }, { autoAlpha: 1, x: 0, duration: SAAS_MOTION.durations.heroDescription }, 0.24);
    }
    if (illustration) {
      tl.fromTo(
        illustration,
        { autoAlpha: 0, x: imgX, y: imgY, scale: SAAS_MOTION.scale.heroImageInitial },
        { autoAlpha: 1, x: 0, y: 0, scale: 1.0, duration: SAAS_MOTION.durations.heroImage },
        0.18
      );
    }
  }, container);
}