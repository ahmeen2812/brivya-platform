/**
 * BRIVYA SOLUTIONS — KINETIC SCRUB ENGINE
 * Bi-directional scrolling layout. Provides cinematic, smooth entering and exiting.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface CinematicCardMatrixProps {
  containerTarget: HTMLElement | null;
  textElementHeaders: (HTMLElement | null)[];
  textElementBody: HTMLElement | null;
  cardsMatrixArray: (HTMLElement | null)[];
  trustBannerTarget: HTMLElement | null; 
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Correct matching Export target specifically identified.
export const setupCinematicScrubEngine = (refs: CinematicCardMatrixProps) => {
  const { containerTarget, textElementHeaders, textElementBody, cardsMatrixArray, trustBannerTarget } = refs;

  if (!containerTarget) return null;

  const preReducedSafetyCheck = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const vHeaders = textElementHeaders.filter(Boolean) as HTMLElement[];
  const vCards = cardsMatrixArray.filter(Boolean) as HTMLElement[];

  if (preReducedSafetyCheck) {
    gsap.set([...vHeaders, textElementBody, ...vCards, trustBannerTarget].filter(Boolean), {
      autoAlpha: 1, x: 0, y: 0, scale: 1
    });
    return null;
  }

  const engineTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: containerTarget,
      start: "top 80%",  
      end: "top 35%",    
      scrub: 1.5,
    }
  });

  if (vHeaders.length > 0) {
    engineTimeline.fromTo(vHeaders,
      { y: 35, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, stagger: 0.12, ease: "power2.out", duration: 0.8 },
      0
    );
  }

  if (textElementBody) {
    engineTimeline.fromTo(textElementBody,
      { y: 25, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: "power2.out", duration: 0.6 },
      0.22 
    );
  }

  if (vCards.length === 3) {
    engineTimeline.fromTo(vCards[0],
      { x: -75, y: 30, autoAlpha: 0, scale: 0.94 },
      { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 1.0, ease: "power2.out" },
      0.35
    );
    engineTimeline.fromTo(vCards[1],
      { y: 65, autoAlpha: 0, scale: 0.94 },
      { y: 0, autoAlpha: 1, scale: 1, duration: 1.0, ease: "power2.out" },
      0.42
    );
    engineTimeline.fromTo(vCards[2],
      { x: 75, y: 30, autoAlpha: 0, scale: 0.94 },
      { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 1.0, ease: "power2.out" },
      0.50
    );
  }

  if (trustBannerTarget) {
     engineTimeline.fromTo(trustBannerTarget,
       { y: 30, autoAlpha: 0, scale: 0.97 },
       { y: 0, autoAlpha: 1, scale: 1, duration: 0.8, ease: "power2.out" },
       0.60
     );
  }

  return engineTimeline;
};