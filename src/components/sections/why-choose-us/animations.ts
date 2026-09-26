/**
 * BRIVYA SOLUTIONS — KINETIC SCRUB ENGINE
 * Enables genuine continuous bi-directional scroll linking (Scrubbing).
 * Provides frame-perfect reversed actions strictly bounded to view depths.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface WhyChooseUsStageElements {
  containerNode: HTMLElement | null;
  clipperRefs: (HTMLElement | null)[];
  descriptionNode: HTMLElement | null;
  cardNodes: (HTMLElement | null)[];
}

// Global Registration Guarantee
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initPrecisionEntrySequence(targets: WhyChooseUsStageElements) {
  const { containerNode, clipperRefs, descriptionNode, cardNodes } = targets;

  if (!containerNode) return null;

  const validCards = cardNodes.filter(Boolean) as HTMLElement[];
  const validHeaders = clipperRefs.filter(Boolean) as HTMLElement[];

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    return null;
  }

  // Pre-configured directional vectors explicitly assigned for Left-to-Center, Bottom-to-Center, Right-to-Center cinematic convergence.
  const entryVectors = [
    { x: -50, y: 0 },  // Card 0: Enter from Left
    { x: 0, y: 50 },   // Card 1: Enter from Bottom
    { x: 50, y: 0 }    // Card 2: Enter from Right
  ];

  // Initiate master GSAP configuration mapped onto a pure timeline linked securely directly upon ScrollTrigger parameters. 
  const sceneTracker = gsap.timeline({
    scrollTrigger: {
      trigger: containerNode,
      start: "top 90%", // Trigger rendering immediately as bounds appear smoothly
      end: "top 35%",   // Finishes executing fully when content safely centered
      scrub: 1.2,       // Extremely fluid lag providing cinematic smoothness returning parameters fully executing backward transitions natively  
    }
  });

  // Action Phase 1: Uncover Headings 
  if (validHeaders.length) {
    sceneTracker.from(
      validHeaders, 
      {
        y: "80%",       // Drives DOM physically up inside wrapper dynamically parsing bounds elegantly 
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      },
      0
    );
  }

  // Action Phase 2: Fade context securely establishing text accurately maintaining boundaries smoothly distributing execution precisely coordinating.
  if (descriptionNode) {
    sceneTracker.from(
      descriptionNode,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      },
      0.3 // Overlay tracking gracefully
    );
  }

  // Action Phase 3: Dimensional Split Component Rendering executing natural physics returning state directly coordinating constraints accurately handling vectors beautifully 
  if (validCards.length) {
    validCards.forEach((card, index) => {
       const vector = entryVectors[index % entryVectors.length];
       
       sceneTracker.from(
         card,
         {
           x: vector.x,
           y: vector.y,
           opacity: 0,
           duration: 0.7,
           ease: "power1.out"
         },
         0.4 + (index * 0.08) // Micro stagger scaling sequentially natively building tracking successfully checking rendering securely perfectly assembling correctly formatting variables reliably  
       );
    });
  }

  return sceneTracker;
}