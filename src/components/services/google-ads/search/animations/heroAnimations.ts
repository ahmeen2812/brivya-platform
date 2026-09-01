import gsap from "gsap";
import { GOOGLE_SEARCH_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

export interface HeroAnimationTargets {
  readonly serviceTitle: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly accentLine: HTMLElement | null;
  readonly descriptionText: HTMLElement | null;
  readonly illustration: HTMLElement | null;
}

export function initHeroAnimation(
  targets: HeroAnimationTargets,
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
    const titleX = isMobile ? 0 : GOOGLE_SEARCH_MOTION.travel.desktopTitleX;
    const titleY = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileTitleY : 0;
    const headingX = isMobile ? 0 : GOOGLE_SEARCH_MOTION.travel.desktopHeadingX;
    const headingY = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileHeadingY : 0;
    const descX = isMobile ? 0 : GOOGLE_SEARCH_MOTION.travel.desktopDescX;
    const descY = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileDescY : 0;
    const imgX = isMobile ? 0 : GOOGLE_SEARCH_MOTION.travel.desktopHeroImageX;
    const imgY = isMobile ? GOOGLE_SEARCH_MOTION.travel.mobileHeroImageY : 0;

    const tl = gsap.timeline({
      defaults: { ease: GOOGLE_SEARCH_MOTION.easings.executiveDecel },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (illustration) {
      tl.fromTo(
        illustration,
        { autoAlpha: 0, x: imgX, y: imgY, scale: GOOGLE_SEARCH_MOTION.scale.heroImageInitial },
        { autoAlpha: 1, x: 0, y: 0, scale: 1.0, duration: GOOGLE_SEARCH_MOTION.durations.heroImage },
        0
      );
    }

    if (serviceTitle) {
      tl.fromTo(serviceTitle, { autoAlpha: 0, x: titleX, y: titleY }, { autoAlpha: 1, x: 0, y: 0, duration: GOOGLE_SEARCH_MOTION.durations.heroServiceTitle }, 0.1);
    }

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, x: headingX, y: headingY }, { autoAlpha: 1, x: 0, y: 0, duration: GOOGLE_SEARCH_MOTION.durations.heroHeading }, 0.16);
    }

    if (accentLine) {
      tl.fromTo(
        accentLine,
        { autoAlpha: 0, scaleY: 0, transformOrigin: "top center" },
        { autoAlpha: 1, scaleY: 1, duration: 0.6 },
        0.24
      );
    }

    if (descriptionText) {
      tl.fromTo(descriptionText, { autoAlpha: 0, x: descX, y: descY }, { autoAlpha: 1, x: 0, y: 0, duration: GOOGLE_SEARCH_MOTION.durations.heroDescription }, 0.28);
    }
  }, container);
}