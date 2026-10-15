import gsap from "gsap";
import { SEARCH_ADS_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

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
    const headingX = isMobile ? 0 : SEARCH_ADS_MOTION.travel.desktopHeadingX;
    const headingY = isMobile ? SEARCH_ADS_MOTION.travel.mobileHeadingY : 0;
    const taglineX = isMobile ? 0 : SEARCH_ADS_MOTION.travel.desktopTaglineX;
    const taglineY = isMobile ? SEARCH_ADS_MOTION.travel.mobileTaglineY : 0;
    const descX = isMobile ? 0 : SEARCH_ADS_MOTION.travel.desktopDescX;
    const descY = isMobile ? SEARCH_ADS_MOTION.travel.mobileDescY : 0;
    const imgX = isMobile ? 0 : SEARCH_ADS_MOTION.travel.desktopHeroImageX;
    const imgY = isMobile ? SEARCH_ADS_MOTION.travel.mobileHeroImageY : 0;

    const tl = gsap.timeline({
      defaults: { ease: SEARCH_ADS_MOTION.easings.executiveDecel },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, x: headingX, y: headingY }, { autoAlpha: 1, x: 0, y: 0, duration: SEARCH_ADS_MOTION.durations.heroHeading }, 0);
    }
    if (tagline) {
      tl.fromTo(tagline, { autoAlpha: 0, x: taglineX, y: taglineY }, { autoAlpha: 1, x: 0, y: 0, duration: SEARCH_ADS_MOTION.durations.heroTagline }, 0.1);
    }
    if (descriptionText) {
      tl.fromTo(descriptionText, { autoAlpha: 0, x: descX, y: descY }, { autoAlpha: 1, x: 0, y: 0, duration: SEARCH_ADS_MOTION.durations.heroDescription }, 0.2);
    }
    // Glides authoritatively from 180px near the container border with smooth zoom settle
    if (illustration) {
      tl.fromTo(
        illustration,
        { autoAlpha: 0, x: imgX, y: imgY, scale: SEARCH_ADS_MOTION.scale.heroImageInitial },
        { autoAlpha: 1, x: 0, y: 0, scale: 1.0, duration: SEARCH_ADS_MOTION.durations.heroImage },
        0.08
      );
    }
  }, container);
}