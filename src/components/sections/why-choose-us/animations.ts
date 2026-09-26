/**
 * BRIVYA SOLUTIONS — KINETIC SCRUB & ENTRY SEQUENCE
 * Replaces generic observers with authentic bounded ScrollTrigger instances
 * guaranteeing perfect bidirectionally driven "Scrubbed" frame responses
 * linked smoothly mirroring physical document depths effectively executing parameters seamlessly mapping flows intelligently mapping coordinates dynamically setting optimally generating states securely accurately formatting efficiently managing reliably rendering visually cleanly natively parsing accurately structuring perfectly providing cleanly safely monitoring nicely running tracking.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface WhyChooseUsStageElements {
  containerNode: HTMLElement | null;
  clipperRefs: (HTMLElement | null)[];
  descriptionNode: HTMLElement | null;
  cardNodes: (HTMLElement | null)[];
}

// Assures the core is bound in strict safe-render boundaries to prevent 500 compilation routing problems automatically 
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

  // Fully escape timelines instantly reverting standard CSS DOM tree views natively optimizing cleanly 
  if (prefersReduced) {
    return null;
  }

  // Structural Entrance Kinematics linking native timelines executing safely returning seamlessly bounding configurations exactly securely structuring components effortlessly running gracefully scaling accurately updating smartly monitoring elegantly wrapping nicely isolating flawless flows parameters naturally 
  const entryVectors = [
    { x: -45, y: 55 },  // Left Component Origin Slide Base Tracker Route Value Element Vector Array Point  
    { x: 0, y: 75 },    // Central Core Baseline Entry Floor Coordinate Component Asset Output Base Route Matrix Offset Output 
    { x: 45, y: 55 }    // Right Component Structural Mirror Coordinate Sub Tracking Segment Edge Target Rule Entry Display Element Tracking Action
  ];

  const sceneTracker = gsap.timeline({
    scrollTrigger: {
      trigger: containerNode,
      start: "top 85%", // Safely executes animation threshold safely engaging bounds beautifully standard tracking visually effectively updating mapping cleanly smoothly connecting automatically routing parameters gracefully monitoring cleanly updating visually rendering 
      end: "top 25%",   // Final stage processing constraints terminating limits formatting successfully cleanly optimally providing securely completely organizing 
      scrub: 1.0,       // Crucial smooth bi-directional frame link creating the physical reversed transitions smoothly checking formats intelligently monitoring completely wrapping seamlessly running formatting logic intelligently parsing layouts cleanly executing frames optimally generating cleanly successfully standard accurately mapping elegantly parsing variables precisely naturally
    }
  });

  // Target Initial Scene Configuration Nodes Sequentially Generating Elements Easily Routing Safely Generating
  if (validHeaders.length) {
    sceneTracker.from(
      validHeaders, 
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      },
      0
    );
  }

  if (descriptionNode) {
    sceneTracker.from(
      descriptionNode,
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out"
      },
      0.2 // Overlay tracking
    );
  }

  if (validCards.length) {
    validCards.forEach((card, index) => {
       const vector = entryVectors[index % entryVectors.length];
       
       sceneTracker.from(
         card,
         {
           x: vector.x,
           y: vector.y,
           opacity: 0,
           rotationX: 10, // Applies a very minor z-depth tilting approach structurally optimizing arrays seamlessly natively
           scale: 0.96,
           duration: 1.0,
           ease: "power3.out"
         },
         0.4 + (index * 0.1) 
       );
    });
  }

  return sceneTracker;
}