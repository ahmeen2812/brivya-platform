/**
 * BRIVYA SOLUTIONS — RESULTS SECTION SCROLL KINEMATICS
 * Staggered entrance:
 * - Panel container fades + rises
 * - Left content reveals with stagger (Eyebrow -> Heading -> Description)
 * - Cards enter one by one (Card 1 Left, Card 2 Bottom, Card 3 Right)
 * - Card elements reveal in sequence (Icon -> Number -> Label -> Description)
 * - Reversible on scroll back with decoupled permanent count-up
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface CardInternalTargets {
  readonly card: HTMLElement | null;
  readonly icon: HTMLElement | null;
  readonly numberWrapper: HTMLElement | null;
  readonly label: HTMLElement | null;
  readonly desc: HTMLElement | null;
}

export interface ResultsAnimationTargets {
  readonly section: HTMLElement | null;
  readonly panel: HTMLElement | null;
  readonly eyebrow: HTMLElement | null;
  readonly heading: HTMLElement | null;
  readonly description: HTMLElement | null;
  readonly cardTargets: readonly CardInternalTargets[];
  readonly onFirstEntrance?: () => void;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initResultsScrollSequence(
  targets: ResultsAnimationTargets
): gsap.core.Timeline | null {
  const {
    section,
    panel,
    eyebrow,
    heading,
    description,
    cardTargets,
    onFirstEntrance,
  } = targets;

  if (!section || !panel) return null;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const allElements = [
    panel,
    eyebrow,
    heading,
    description,
    ...cardTargets.map((c) => c.card),
  ].filter(Boolean) as HTMLElement[];

  if (prefersReduced) {
    gsap.set(allElements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
    if (onFirstEntrance) onFirstEntrance();
    return null;
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const xOffset = isMobile ? 0 : 55;
  const yOffset = isMobile ? 30 : 55;

  let hasTriggeredCount = false;

  // Master Bidirectional Scrubbing Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      end: "top 38%",
      scrub: 1.2,
      onEnter: () => {
        if (!hasTriggeredCount && onFirstEntrance) {
          hasTriggeredCount = true;
          onFirstEntrance();
        }
      },
    },
  });

  // Stage 1: Panel Fades and Rises Smoothly from Below
  tl.fromTo(
    panel,
    { autoAlpha: 0, y: 45, scale: 0.98 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" },
    0
  );

  // Stage 2: Left Content Staggered Reveal
  if (eyebrow) {
    tl.fromTo(eyebrow, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.1);
  }
  if (heading) {
    tl.fromTo(heading, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.16);
  }
  if (description) {
    tl.fromTo(description, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.22);
  }

  // Stage 3: Three Metric Cards Enter Separately (One by One)
  const card1 = cardTargets[0];
  const card2 = cardTargets[1];
  const card3 = cardTargets[2];

  // Card 1: from LEFT
  if (card1?.card) {
    tl.fromTo(
      card1.card,
      { autoAlpha: 0, x: -xOffset, y: isMobile ? yOffset : 0 },
      { autoAlpha: 1, x: 0, y: 0, duration: 0.85, ease: "power3.out" },
      0.28
    );
  }

  // Card 2: from BOTTOM
  if (card2?.card) {
    tl.fromTo(
      card2.card,
      { autoAlpha: 0, y: yOffset },
      { autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out" },
      0.36
    );
  }

  // Card 3: from RIGHT
  if (card3?.card) {
    tl.fromTo(
      card3.card,
      { autoAlpha: 0, x: xOffset, y: isMobile ? yOffset : 0 },
      { autoAlpha: 1, x: 0, y: 0, duration: 0.85, ease: "power3.out" },
      0.44
    );
  }

  // Stage 4: Staggered Internal Element Reveals (Icon -> Number -> Label -> Description)
  cardTargets.forEach((c, idx) => {
    const baseTime = 0.35 + idx * 0.08;
    if (c.icon) {
      tl.fromTo(c.icon, { autoAlpha: 0, scale: 0.88 }, { autoAlpha: 1, scale: 1, duration: 0.35 }, baseTime);
    }
    if (c.numberWrapper) {
      tl.fromTo(c.numberWrapper, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.35 }, baseTime + 0.05);
    }
    if (c.label) {
      tl.fromTo(c.label, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.3 }, baseTime + 0.1);
    }
    if (c.desc) {
      tl.fromTo(c.desc, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.3 }, baseTime + 0.14);
    }
  });

  return tl;
}