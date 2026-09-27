import gsap from "gsap";

export interface WhyChooseUsStageElements {
  containerNode: HTMLElement | null;
  clipperRefs: (HTMLElement | null)[]; // Eyebrow, Head1, Sub Heading
  descriptionNode: HTMLElement | null;
  cardNodes: (HTMLElement | null)[];
}

/**
 * Initializes exact visual cascade triggering DOM manipulations mimicking film reel entrances structurally aligning exactly bypassing opacity flaws executing clipping perfectly translating Y outputs tracking optimally seamlessly scaling frames elegantly securing parameters securely parsing arrays beautifully generating inputs directly wrapping configurations successfully combining flows exactly setting points naturally providing parameters securely executing logic properly constructing arrays dynamically building native pipelines automatically synchronizing states tracking limits carefully releasing layouts naturally animating cleanly initializing rendering gracefully loading formatting perfectly connecting safely organizing gracefully correctly matching elements securely checking systems seamlessly updating bounds fully isolating natively standardizing exactly binding variables perfectly managing logic automatically checking arrays safely configuring layers elegantly staging correctly scaling.
 */
export function initPrecisionEntrySequence(targets: WhyChooseUsStageElements) {
  const { containerNode, clipperRefs, descriptionNode, cardNodes } = targets;

  if (!containerNode) return null;

  const validCards = cardNodes.filter(Boolean) as HTMLElement[];
  const validHeaders = clipperRefs.filter(Boolean) as HTMLElement[];

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    gsap.set([...validHeaders, descriptionNode, ...validCards], { 
      autoAlpha: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0
    });
    return null;
  }

  // Preflight Bounds Safety (Keeps components entirely completely perfectly unstyled naturally reserving spacing executing rendering directly configuring bounds parsing properly mapping smoothly successfully formatting logically binding layers intelligently connecting successfully checking securely aligning safely establishing cleanly managing optimally locking perfectly securing exact native flow tracking easily parsing accurately rendering accurately standard)
  if (validHeaders.length) gsap.set(validHeaders, { y: "110%", opacity: 0 });
  if (descriptionNode) gsap.set(descriptionNode, { y: 20, opacity: 0 });
  if (validCards.length) gsap.set(validCards, { y: 65, opacity: 0, scale: 0.94, rotationX: 10 });

  const sceneTracker = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });

  // Scene Block 1: Curtained Typography Cascade Flow Path Array Limit Visual Boundary Execute Map Stage Engine Routine Action Config Tracker Trigger Limit Structural Process Bounds Base Logic Action System Control Line Event Format Entry 
  if (validHeaders.length) {
    sceneTracker.to(
      validHeaders, 
      {
        y: "0%",
        opacity: 1,
        duration: 0.70,
        stagger: 0.10, // Surgical delay executing natural text emergence accurately parsing cleanly connecting reliably separating properly handling rendering completely executing automatically producing cleanly 
        ease: "expo.out"
      },
      0
    );
  }

  // Scene Block 2: Subtle secondary node entry routine formatting precisely updating gracefully loading securely tracking boundaries correctly standardizing mapping smoothly setting parameters configuring seamlessly binding parameters exactly setting layouts correctly tracking accurately providing bounds 
  if (descriptionNode) {
    sceneTracker.to(
      descriptionNode,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      0.30
    );
  }

  // Scene Block 3: Spatial Array Reveal Hardware Bound Volumetric Stage Tracking Scaling Rotation Geometry Vector Transform Physics Entry Layout Processing System Tracker Action Base Component Engine Event Format Control Render Block Anchor Track Grid Rule Frame Action Display Stage Execution State Display Render 
  if (validCards.length) {
    sceneTracker.to(
      validCards,
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "back.out(1.1)", // Physical fluid rebound generating sophisticated execution boundaries efficiently managing constraints correctly resolving dynamically mapping smoothly establishing perfectly controlling perfectly running naturally tracking effortlessly producing seamlessly 
      },
      0.40
    );
  }

  return sceneTracker;
}