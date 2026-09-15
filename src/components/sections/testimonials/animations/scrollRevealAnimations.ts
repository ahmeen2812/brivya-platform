/**
 * BRIVYA SOLUTIONS — TESTIMONIALS SCROLL REVEAL ENGINE
 * Coordinated forward and reverse scroll reveals using ScrollTrigger and gsap.matchMedia.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ScrollRevealElements {
  readonly section: HTMLElement | null;
  readonly trustHeader: HTMLElement | null;
  readonly introHeader: HTMLElement | null;
  readonly stage: HTMLElement | null;
  readonly controls: HTMLElement | null;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initTestimonialsScrollReveal(
  elements: ScrollRevealElements
): gsap.Context | null {
  const { section, trustHeader, introHeader, stage, controls } = elements;
  if (!section) return null;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const validTargets = [trustHeader, introHeader, stage, controls].filter(Boolean) as HTMLElement[];

  if (prefersReduced) {
    gsap.set(validTargets, { autoAlpha: 1, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const mm = gsap.matchMedia();

    // Desktop & Tablet (min-width: 768px)
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          end: "top 35%",
          scrub: 1.2, // Bidirectional scrub during entrance window
        },
      });

      if (trustHeader) {
        tl.fromTo(trustHeader, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0);
      }
      if (introHeader) {
        tl.fromTo(introHeader, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.1);
      }
      if (stage) {
        tl.fromTo(stage, { autoAlpha: 0, y: 30, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8 }, 0.2);
      }
      if (controls) {
        tl.fromTo(controls, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.35);
      }
    });

    // Mobile (< 768px): Subdued translation to avoid overflow
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 45%",
          scrub: 1.0,
        },
      });

      if (trustHeader) {
        tl.fromTo(trustHeader, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0);
      }
      if (introHeader) {
        tl.fromTo(introHeader, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.1);
      }
      if (stage) {
        tl.fromTo(stage, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.2);
      }
      if (controls) {
        tl.fromTo(controls, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.3);
      }
    });
  }, section);
}