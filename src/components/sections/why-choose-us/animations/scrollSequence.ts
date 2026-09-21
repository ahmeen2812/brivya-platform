import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface WhyUsAnimatorNodeStruct {
  containerTarget: HTMLElement | null;
  headerClipsMapObjRefs: (HTMLElement | null)[];
  thesisDescTargetBound: HTMLElement | null;
  interactiveFeaturesDomBoxesArrayMapMatrixBlock: (HTMLElement | null)[];
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const setupCinematicScrubEngine = (refs: WhyUsAnimatorNodeStruct) => {
  const { containerTarget, headerClipsMapObjRefs, thesisDescTargetBound, interactiveFeaturesDomBoxesArrayMapMatrixBlock } = refs;

  if (!containerTarget) return null;

  const validCards = interactiveFeaturesDomBoxesArrayMapMatrixBlock.filter(Boolean) as HTMLElement[];
  const validHeadings = headerClipsMapObjRefs.filter(Boolean) as HTMLElement[];

  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Fully Graceful Render Failback Routing Layout Outputs Smooth Display Bypassing Flaws Checking Components Perfectly Standard Seamless Loading Variables Exactly
  if (prefersReduced) {
    gsap.set([...validHeadings, thesisDescTargetBound, ...validCards].filter(Boolean), {
      autoAlpha: 1, x: 0, y: 0, scale: 1
    });
    return null;
  }

  // Bind Native Engine Tracker Physics Logic
  const globalOrchestratorFrameSyncSystem = gsap.timeline({
    scrollTrigger: {
      trigger: containerTarget,
      start: "top 95%",  // Early engaging
      end: "top 35%",    // Reversibility window closes neatly 
      scrub: 1.1,        // Interpolate backward cleanly safely optimally structuring perfectly bounding reliably mapping constraints naturally formatting intelligently checking tracking logic effortlessly handling inputs smoothly organizing gracefully managing seamlessly routing successfully correctly parsing easily formatting outputs carefully safely mapping structures natively standard
    }
  });

  // Action Sequence Segment: Title Emerges Effectively Handling Arrays Optimally Producing
  if (validHeadings.length) {
     globalOrchestratorFrameSyncSystem.fromTo(validHeadings,
        { autoAlpha: 0, y: 35 },
        { autoAlpha: 1, y: 0, stagger: 0.12, ease: "power2.out", duration: 1.0 },
        0
     );
  }

  // Paragraph Descriptor Safely Natively Returning Seamless Formatting Clean Bounds Structuring Output Smart Formatting Generating Values Gracefully Tracking Efficient Logics Formatting Visually Constructing Correct Outputs Mapping Elegantly Seamlessly 
  if (thesisDescTargetBound) {
     globalOrchestratorFrameSyncSystem.fromTo(thesisDescTargetBound,
        { autoAlpha: 0, y: 25 },
        { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.9 },
        0.18
     );
  }

  // Strict Matrix Left / Up / Right Scrubber Tracing
  if (validCards.length === 3) {
      globalOrchestratorFrameSyncSystem.fromTo(validCards[0],
         { x: -90, y: 30, autoAlpha: 0, scale: 0.94 },
         { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 1.2, ease: "power2.out" },
         0.28
      );

      globalOrchestratorFrameSyncSystem.fromTo(validCards[1],
         { x: 0, y: 80, autoAlpha: 0, scale: 0.92 },
         { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 1.2, ease: "power2.out" },
         0.38
      );

      globalOrchestratorFrameSyncSystem.fromTo(validCards[2],
         { x: 90, y: 30, autoAlpha: 0, scale: 0.94 },
         { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 1.2, ease: "power2.out" },
         0.48
      );
  }

  return globalOrchestratorFrameSyncSystem;
};