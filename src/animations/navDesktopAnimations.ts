import gsap from "gsap";

export interface DesktopAnimationElements {
  container: HTMLDivElement | null;
  border: HTMLDivElement | null;
  centerLine: HTMLDivElement | null;
  logoWrapper: HTMLDivElement | null;
  logoDivider: HTMLDivElement | null;
  ctaDivider: HTMLDivElement | null;
  ctaButton: HTMLDivElement | null;
  navLinksWrapper: HTMLElement | null;
  dividers: (HTMLDivElement | null)[];
}

/**
 * Orchestrates the Master Kinetic Caliper Reveal Sequence
 * (Animates structural containers without destroying child text node opacities)
 */
export function initDesktopNavbarTimeline(
  elements: DesktopAnimationElements,
): gsap.core.Timeline | null {
  const {
    container,
    border,
    centerLine,
    logoWrapper,
    logoDivider,
    ctaDivider,
    ctaButton,
    navLinksWrapper,
    dividers,
  } = elements;

  if (!container || !border || !centerLine) return null;

  const validDividers = dividers.filter(Boolean);

  // Set initial states
  gsap.set(centerLine, {
    opacity: 0,
    y: -30,
    scaleY: 0.2,
    transformOrigin: "top center",
  });

  gsap.set(container, {
    opacity: 0,
    width: "60px",
    scale: 0.96,
    transformOrigin: "center center",
  });

  gsap.set(border, {
    opacity: 1,
  });

  if (logoWrapper) {
    gsap.set(logoWrapper, { opacity: 0, x: -16, clipPath: "inset(0% 100% 0% 0%)" });
  }

  if (logoDivider) gsap.set(logoDivider, { opacity: 0, scaleY: 0 });
  if (ctaDivider) gsap.set(ctaDivider, { opacity: 0, scaleY: 0 });
  if (ctaButton) gsap.set(ctaButton, { opacity: 0, scale: 0.88, x: 14 });

  if (navLinksWrapper) {
    gsap.set(navLinksWrapper, { opacity: 0, y: -12 });
  }

  if (validDividers.length > 0) {
    gsap.set(validDividers, { opacity: 0, scaleY: 0 });
  }

  const tl = gsap.timeline({
    defaults: { ease: "power4.out" },
  });

  // Stage 1: Plumb line drop (0.0s - 0.35s)
  tl.to(centerLine, {
    opacity: 1,
    y: 0,
    scaleY: 1,
    duration: 0.35,
    ease: "power2.out",
  })
    // Stage 2: Dynamic Island pill expansion (0.35s - 1.05s)
    .to(
      container,
      {
        opacity: 1,
        width: "100%",
        scale: 1,
        duration: 0.75,
        ease: "expo.out",
      },
      "-=0.1",
    )
    .to(
      centerLine,
      {
        opacity: 0,
        scaleY: 0.4,
        duration: 0.25,
        ease: "power2.in",
      },
      "-=0.6",
    )
    // Stage 3: Logo and Outer Dividers unmask
    .to(
      logoWrapper,
      {
        opacity: 1,
        x: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.45",
    )
    .to(
      [logoDivider, ctaDivider],
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.35,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .to(
      ctaButton,
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.45,
        ease: "back.out(1.4)",
      },
      "-=0.35",
    )
    // Stage 4: Smooth descent of the entire navigation links channel
    .to(
      navLinksWrapper,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      "-=0.3",
    )
    .to(
      validDividers,
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.out",
      },
      "-=0.35",
    )
    // Stage 5: The 2.0s Perimeter Border Hold & Smooth Dissolve
    .to(border, {
      opacity: 0,
      duration: 0.85,
      ease: "power2.out",
      delay: 1.8,
    });

  return tl;
}

/**
 * Triggers interactive perimeter border illumination on hover or click
 */
export function triggerInteractiveBorderPulse(borderElement: HTMLElement | null): void {
  if (!borderElement) return;

  gsap.killTweensOf(borderElement);
  gsap.timeline()
    .to(borderElement, {
      opacity: 0.8,
      duration: 0.2,
      ease: "power2.out",
    })
    .to(borderElement, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      delay: 0.1,
    });
}