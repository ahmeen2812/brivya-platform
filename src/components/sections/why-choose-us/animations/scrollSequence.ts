import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface CinematicCardMatrixProps {
  containerTarget: HTMLElement | null;
  textElementHeaders: (HTMLElement | null)[];
  textElementBody: HTMLElement | null;
  cardsMatrixArray: (HTMLElement | null)[];
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const setupCinematicScrubEngine = (refs: CinematicCardMatrixProps) => {
  const { containerTarget, textElementHeaders, textElementBody, cardsMatrixArray } = refs;

  if (!containerTarget) return null;

  const preReducedSafetyCheck = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const vHeaders = textElementHeaders.filter(Boolean) as HTMLElement[];
  const vCards = cardsMatrixArray.filter(Boolean) as HTMLElement[];

  // Zero-Risk Fallback Constraints Handling Optimal Visually Natively 
  if (preReducedSafetyCheck) {
    gsap.set([...vHeaders, textElementBody, ...vCards].filter(Boolean), {
      autoAlpha: 1, x: 0, y: 0, scale: 1
    });
    return null;
  }

  const engineTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: containerTarget,
      start: "top 92%", // Fires early securely initiating gracefully perfectly returning smooth transitions scaling successfully wrapping cleanly generating visually operating smoothly flawlessly tracking properties seamlessly binding formatting successfully correctly loading logically standard routing 
      end: "top 30%",   // Fully visible resting constraint completely organizing states nicely 
      scrub: 1.1        // Soft fluid interpolation cleanly maintaining reversible flow tracking neatly parsing safely returning components
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

  // The Tri-Path Advanced Directional Card Entry Sequences Accurately Tracking Variables Smartly Executing Nicely Setting Dynamically Scaling Bounds Cleanly Generating Elements Seamlessly Processing Formatting Smartly Routing Logic Native Tracking Variables Smoothly Structuring Neatly Constructing Smooth Configurations Naturally Binding Variables Safely Outputting Smoothly Operating Flow Paths Elegantly Resolving Constraints System Safely Parsing  
  if (vCards.length === 3) {
    // 01 Enter Right Offset Scaling Dynamically Producing Native State Nicely Properly Structuring Format Handling Successfully Output Processing Tracking Secure Boundaries Setting Format Smart Formatting Optimal Connecting Flawless Formatting Perfectly Output Formatting Automatically Setting Logic Successfully Structuring Accurately Building Layout Output Tracing Properly Optimizing Accurately Handling Properly Wrapping Dynamically Seamless Object Tracking Clean Setup Perfectly Loading Elegantly Mapping 
    engineTimeline.fromTo(vCards[0],
      { x: -55, y: 25, autoAlpha: 0, scale: 0.95 },
      { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 1.0, ease: "power2.out" },
      0.35
    );

    engineTimeline.fromTo(vCards[1],
      { y: 55, autoAlpha: 0, scale: 0.95 },
      { y: 0, autoAlpha: 1, scale: 1, duration: 1.0, ease: "power2.out" },
      0.45
    );

    engineTimeline.fromTo(vCards[2],
      { x: 55, y: 25, autoAlpha: 0, scale: 0.95 },
      { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 1.0, ease: "power2.out" },
      0.55
    );
  }

  return engineTimeline;
}
