import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OFFICE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initVerticalSplitAnimation(
  container: HTMLElement | null,
  leftContent: HTMLElement | null,
  verticalImage: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  if (checkPrefersReducedMotion()) {
    gsap.set([leftContent, verticalImage].filter(Boolean), { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const leftX = isMobile ? 0 : OFFICE_MOTION.travel.leftSlideX;
    const imgY = isMobile ? OFFICE_MOTION.travel.mobileTopDropY : OFFICE_MOTION.travel.topDropY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 90%" : "top 85%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set([leftContent, verticalImage].filter(Boolean), { clearProps: "transform,opacity" }),
    });

    if (leftContent) {
      tl.fromTo(leftContent, { autoAlpha: 0, x: leftX }, { autoAlpha: 1, x: 0, duration: 0.85, ease: OFFICE_MOTION.easings.executiveDecel }, 0);
    }

    if (verticalImage) {
      tl.fromTo(
        verticalImage,
        { autoAlpha: 0, y: imgY, scale: OFFICE_MOTION.scale.verticalImageInitial },
        { autoAlpha: 1, y: 0, scale: 1.0, duration: OFFICE_MOTION.durations.verticalImageDrop, ease: OFFICE_MOTION.easings.executiveDecel },
        0.15
      );
    }
  }, container);
}

export function initFullWidthBannerAnimation(
  container: HTMLElement | null,
  content: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  if (checkPrefersReducedMotion()) {
    gsap.set(content, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yRise = isMobile ? OFFICE_MOTION.travel.mobileBottomRiseY : OFFICE_MOTION.travel.bottomRiseY;

    gsap.fromTo(
      content,
      { autoAlpha: 0, y: yRise },
      {
        autoAlpha: 1,
        y: 0,
        duration: OFFICE_MOTION.durations.fullWidthBannerRise,
        ease: OFFICE_MOTION.easings.executiveDecel,
        scrollTrigger: {
          trigger: container,
          start: isMobile ? "top 90%" : "top 85%",
          toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
        },
        onComplete: () => gsap.set(content, { clearProps: "transform,opacity" }),
      }
    );
  }, container);
}

export interface FourPartMosaicTargets {
  readonly block1: HTMLElement | null;
  readonly icon1: HTMLElement | null;
  readonly centerDivider: HTMLElement | null;
  readonly block2: HTMLElement | null;
  readonly icon2: HTMLElement | null;
}

export function initFourPartMosaicAnimation(
  targets: FourPartMosaicTargets,
  container: HTMLElement | null
): gsap.Context | null {
  const { block1, icon1, centerDivider, block2, icon2 } = targets;
  if (!container) return null;

  const elements = [block1, icon1, centerDivider, block2, icon2].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const leftX = isMobile ? 0 : OFFICE_MOTION.travel.leftSlideX;
    const rightX = isMobile ? 0 : OFFICE_MOTION.travel.rightSlideX;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 90%" : "top 84%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (block1) {
      tl.fromTo(block1, { autoAlpha: 0, x: leftX }, { autoAlpha: 1, x: 0, duration: OFFICE_MOTION.durations.mosaicBlockSlide, ease: OFFICE_MOTION.easings.executiveDecel }, 0);
    }

    if (icon1) {
      tl.fromTo(icon1, { autoAlpha: 0, scale: OFFICE_MOTION.scale.mosaicIconInitial }, { autoAlpha: 1, scale: 1.0, duration: OFFICE_MOTION.durations.mosaicIconPop, ease: OFFICE_MOTION.easings.powerOut }, 0.12);
    }

    if (centerDivider) {
      tl.fromTo(centerDivider, { autoAlpha: 0, scaleY: 0, transformOrigin: "center center" }, { autoAlpha: 1, scaleY: 1, duration: 0.7, ease: OFFICE_MOTION.easings.smoothMechanical }, 0.18);
    }

    if (block2) {
      tl.fromTo(block2, { autoAlpha: 0, x: rightX }, { autoAlpha: 1, x: 0, duration: OFFICE_MOTION.durations.mosaicBlockSlide, ease: OFFICE_MOTION.easings.executiveDecel }, 0.22);
    }

    if (icon2) {
      tl.fromTo(icon2, { autoAlpha: 0, scale: OFFICE_MOTION.scale.mosaicIconInitial }, { autoAlpha: 1, scale: 1.0, duration: OFFICE_MOTION.durations.mosaicIconPop, ease: OFFICE_MOTION.easings.powerOut }, 0.3);
    }
  }, container);
}

export function initPanoramicShowcaseAnimation(
  container: HTMLElement | null,
  imageWrapper: HTMLElement | null
): gsap.Context | null {
  if (!container || !imageWrapper) return null;

  if (checkPrefersReducedMotion()) {
    gsap.set(imageWrapper, { autoAlpha: 1, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yRise = isMobile ? OFFICE_MOTION.travel.mobileBottomRiseY : OFFICE_MOTION.travel.bottomRiseY;

    gsap.fromTo(
      imageWrapper,
      { autoAlpha: 0, y: yRise, scale: OFFICE_MOTION.scale.panoramicInitial },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1.0,
        duration: OFFICE_MOTION.durations.panoramicRise,
        ease: OFFICE_MOTION.easings.executiveDecel,
        scrollTrigger: {
          trigger: container,
          start: isMobile ? "top 92%" : "top 86%",
          toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
        },
        onComplete: () => gsap.set(imageWrapper, { clearProps: "transform,opacity" }),
      }
    );
  }, container);
}

export function initAdditionalCapabilitiesAnimation(
  container: HTMLElement | null,
  cards: readonly (HTMLElement | null)[]
): gsap.Context | null {
  if (!container) return null;
  const validCards = cards.filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(validCards, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yDist = isMobile ? 22 : 32;

    gsap.fromTo(
      validCards,
      { autoAlpha: 0, y: yDist },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: OFFICE_MOTION.easings.executiveDecel,
        scrollTrigger: {
          trigger: container,
          start: isMobile ? "top 90%" : "top 85%",
          toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
        },
        onComplete: () => gsap.set(validCards, { clearProps: "transform,opacity" }),
      }
    );
  }, container);
}