import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OFFICE_MOTION, checkIsMobile, checkPrefersReducedMotion } from "./motionTokens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ---------------------------------------------------------------------------
// 1. HERO ANIMATIONS (ui4.png)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// 2. HERO DIRECTIVE CONVERGING BANNER (ui4.png Bottom)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// 3. VERTICAL SPLIT SECTION (ui3.png Part 1)
// ---------------------------------------------------------------------------
export function initVerticalSplitAnimation(
  container: HTMLElement | null,
  contentElement: HTMLElement | null,
  verticalImage: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  const elements = [contentElement, verticalImage].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const contentX = isMobile ? 0 : OFFICE_MOTION.travel.rightSlideX * 0.7;
    const imgY = isMobile ? OFFICE_MOTION.travel.mobileTopDropY : OFFICE_MOTION.travel.topDropY;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 90%" : "top 85%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    if (verticalImage) {
      tl.fromTo(
        verticalImage,
        { autoAlpha: 0, y: imgY, scale: OFFICE_MOTION.scale.verticalImageInitial },
        { autoAlpha: 1, y: 0, scale: 1.0, duration: OFFICE_MOTION.durations.verticalImageDrop, ease: OFFICE_MOTION.easings.executiveDecel },
        0
      );
    }

    if (contentElement) {
      tl.fromTo(contentElement, { autoAlpha: 0, x: contentX }, { autoAlpha: 1, x: 0, duration: 0.85, ease: OFFICE_MOTION.easings.executiveDecel }, 0.15);
    }
  }, container);
}

// ---------------------------------------------------------------------------
// 4. FULL-WIDTH BANNER (ui3.png Part 2)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// 5. FOUR-PART MOSAIC (ui3.png Part 3)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// 6. PANORAMIC SHOWCASE (ui3.png Part 4)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// 7. ADDITIONAL CAPABILITIES (Cards 01 & 02 with Staggered Entrance)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// 8. RESOURCES, FAQ, AND CTA INTERPOLATIONS
// ---------------------------------------------------------------------------
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

export function initOfficeFaqAnimation(
  heading: HTMLElement | null,
  items: readonly (HTMLElement | null)[],
  container: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  const validItems = items.filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set([heading, ...validItems].filter(Boolean), { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? 16 : 22;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 82%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set([heading, ...validItems].filter(Boolean), { clearProps: "transform,opacity" }),
    });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0);
    }

    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { autoAlpha: 0, y: yTravel },
        { autoAlpha: 1, y: 0, duration: OFFICE_MOTION.durations.faqItem, stagger: OFFICE_MOTION.stagger.faqItems, ease: OFFICE_MOTION.easings.powerOut },
        0.14
      );
    }
  }, container);
}

export function initOfficeCtaAnimation(
  container: HTMLElement | null,
  heading: HTMLElement | null,
  description: HTMLElement | null,
  buttons: HTMLElement | null
): gsap.Context | null {
  if (!container) return null;

  const elements = [container, heading, description, buttons].filter(Boolean) as HTMLElement[];

  if (checkPrefersReducedMotion()) {
    gsap.set(elements, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const isMobile = checkIsMobile();
    const yTravel = isMobile ? 20 : 35;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: isMobile ? "top 88%" : "top 86%",
        toggleActions: OFFICE_MOTION.scrollTrigger.toggleActions,
      },
      onComplete: () => gsap.set(elements, { clearProps: "transform,opacity" }),
    });

    tl.fromTo(container, { autoAlpha: 0, y: yTravel }, { autoAlpha: 1, y: 0, duration: OFFICE_MOTION.durations.ctaBlock, ease: OFFICE_MOTION.easings.executiveDecel }, 0);

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0.18);
    }
    if (description) {
      tl.fromTo(description, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0.28);
    }
    if (buttons) {
      tl.fromTo(buttons, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: OFFICE_MOTION.easings.powerOut }, 0.38);
    }
  }, container);
}