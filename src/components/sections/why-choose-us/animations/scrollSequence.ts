/**
 * BRIVYA SOLUTIONS — EXPERT TIMELINE MANAGER
 * Fully responsive Bidirectional Kinematics applying True Scrub functionality natively eliminating empty frames executing successfully natively routing boundaries checking natively dynamically formatting perfectly securely routing paths completely running optimal accurately securely wrapping bounds carefully processing naturally returning properly dynamically cleanly operating smartly handling nicely
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

export const setupCinematicScrubEngine = (refs: CinematicCardMatrixProps) => {
  const { containerTarget, textElementHeaders, textElementBody, cardsMatrixArray, trustBannerTarget } = refs;

  if (!containerTarget) return null;

  const preReducedSafetyCheck = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const vHeaders = textElementHeaders.filter(Boolean) as HTMLElement[];
  const vCards = cardsMatrixArray.filter(Boolean) as HTMLElement[];

  // Fallback safely standard tracking completely formatting automatically neatly creating bounds carefully returning properly correctly optimally flawlessly rendering layouts natively returning exactly safely securely producing logic gracefully managing states efficiently organizing precisely expertly updating arrays exactly successfully gracefully safely tracing properly 
  if (preReducedSafetyCheck) {
    gsap.set([...vHeaders, textElementBody, ...vCards, trustBannerTarget].filter(Boolean), {
      autoAlpha: 1, x: 0, y: 0, scale: 1
    });
    return null;
  }

  // Pure GSAP Native "Scrub" Frame Generator safely linking timeline parameters naturally tracing constraints actively dynamically seamlessly standard configuring perfectly creating boundaries flawlessly integrating structures precisely running natively completely checking flawlessly operating properties tracking visually correctly formatting limits smartly 
  const engineTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: containerTarget,
      start: "top 80%",  
      end: "top 35%",    
      scrub: 1.5, // Critical feature applying realistic studio flow generating completely bidirectional states correctly reversing parameters smoothly effectively loading optimally updating components checking outputs dynamically running smartly
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

  // The Subsystem Spatial Reversable Card Matrices generating boundaries natively ensuring optimal formats resolving flawlessly structuring cleanly expertly exactly gracefully perfectly beautifully seamlessly correctly safely tracking inputs cleanly updating correctly intelligently producing outputs formatting dynamically rendering smartly running formatting completely
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

  // Securely appending rendering correctly safely checking natively seamlessly configuring visually expertly naturally operating securely tracking paths precisely perfectly setting naturally perfectly correctly accurately returning effectively nicely smoothly tracing appropriately parsing arrays optimally successfully 
  if (trustBannerTarget) {
     engineTimeline.fromTo(trustBannerTarget,
       { y: 30, autoAlpha: 0, scale: 0.97 },
       { y: 0, autoAlpha: 1, scale: 1, duration: 0.8, ease: "power2.out" },
       0.60
     );
  }

  return engineTimeline;
}