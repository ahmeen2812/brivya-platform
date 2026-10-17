import gsap from "gsap";
import { PERFORMANCE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

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
    const headingX = isMobile ? 0 : PERFORMANCE_MOTION.travel.desktopHeadingX;
    const headingY = isMobile ? PERFORMANCE_MOTION.travel.mobileHeadingY : 0;
    const taglineX = isMobile ? 0 : PERFORMANCE_MOTION.travel.desktopTaglineX;
    const taglineY = isMobile ? PERFORMANCE_MOTION.travel.mobileTaglineY : 0;
    const descX = isMobile ? 0 : PERFORMANCE_MOTION.travel.desktopDescX;
    const descY = isMobile ? PERFORMANCE_MOTION.travel.mobileDescY : 0;
    const imgX = isMobile ? 0 : PERFORMANCE_MOTION.travel.desktopHeroImageX;
    const imgY = isMobile ? PERFORMANCE_MOTION.travel.mobileHeroImageY : 0;

    const tl = gsap.timeline({
      defaults: { ease: PERFORMANCE_MOTION.easings.executiveDecel },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, x: headingX, y: headingY }, { autoAlpha: 1, x: 0, y: 0, duration: PERFORMANCE_MOTION.durations.heroHeading }, 0);
    }
    if (tagline) {
      tl.fromTo(tagline, { autoAlpha: 0, x: taglineX, y: taglineY }, { autoAlpha: 1, x: 0, y: 0, duration: PERFORMANCE_MOTION.durations.heroTagline }, 0.12);
    }
    if (descriptionText) {
      tl.fromTo(descriptionText, { autoAlpha: 0, x: descX, y: descY }, { autoAlpha: 1, x: 0, y: 0, duration: PERFORMANCE_MOTION.durations.heroDescription }, 0.22);
    }
    if (illustration) {
      tl.fromTo(
        illustration,
        { autoAlpha: 0, x: imgX, y: imgY, scale: PERFORMANCE_MOTION.scale.heroImageInitial },
        { autoAlpha: 1, x: 0, y: 0, scale: 1.0, duration: PERFORMANCE_MOTION.durations.heroImage },
        0.18
      );
    }
  }, container);
}