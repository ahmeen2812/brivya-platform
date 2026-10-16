import gsap from "gsap";
import { ECOMMERCE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

export interface HeroAnimationTargets {
  readonly heading: HTMLElement | null;
  readonly tagline: HTMLElement | null;
  readonly descriptionText: HTMLElement | null;
  readonly buttons?: HTMLElement | null;
  readonly illustration: HTMLElement | null;
}

export function initHeroAnimation(
  targets: HeroAnimationTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { heading, tagline, descriptionText, buttons, illustration } = targets;
  if (!container) return null;

  const elements = [heading, tagline, descriptionText, buttons, illustration].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const headingX = isMobile ? ECOMMERCE_MOTION.travel.mobileHeadingX : ECOMMERCE_MOTION.travel.desktopHeadingX;
    const taglineX = isMobile ? ECOMMERCE_MOTION.travel.mobileTaglineX : ECOMMERCE_MOTION.travel.desktopTaglineX;
    const descX = isMobile ? ECOMMERCE_MOTION.travel.mobileDescX : ECOMMERCE_MOTION.travel.desktopDescX;
    const imgX = isMobile ? 0 : ECOMMERCE_MOTION.travel.desktopHeroImageX;
    const imgY = isMobile ? ECOMMERCE_MOTION.travel.mobileHeroImageY : 0;

    const tl = gsap.timeline({
      defaults: { ease: ECOMMERCE_MOTION.easings.executiveDecel },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, x: headingX }, { autoAlpha: 1, x: 0, duration: ECOMMERCE_MOTION.durations.heroHeading }, 0);
    }
    if (tagline) {
      tl.fromTo(tagline, { autoAlpha: 0, x: taglineX }, { autoAlpha: 1, x: 0, duration: ECOMMERCE_MOTION.durations.heroTagline }, 0.12);
    }
    if (descriptionText) {
      tl.fromTo(descriptionText, { autoAlpha: 0, x: descX }, { autoAlpha: 1, x: 0, duration: ECOMMERCE_MOTION.durations.heroDescription }, 0.22);
    }
    if (buttons) {
      tl.fromTo(buttons, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: ECOMMERCE_MOTION.easings.powerOut }, 0.32);
    }
    if (illustration) {
      tl.fromTo(
        illustration,
        { autoAlpha: 0, x: imgX, y: imgY, scale: ECOMMERCE_MOTION.scale.heroImageInitial },
        { autoAlpha: 1, x: 0, y: 0, scale: 1.0, duration: ECOMMERCE_MOTION.durations.heroImage },
        0.18
      );
    }
  }, container);
}