/**
 * BRIVYA SOLUTIONS — FOOTER KINEMATIC SCROLL REVEAL ENGINE
 * Coordinated cross-directional entrances (Brand/Services from Right, Company/Resources from Left),
 * internal element staggers, and bidirectional ScrollTrigger scrub.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface FooterAnimationTargets {
  readonly footer: HTMLElement | null;
  readonly brandCol: HTMLElement | null;
  readonly servicesCol: HTMLElement | null;
  readonly companyCol: HTMLElement | null;
  readonly resourcesCol: HTMLElement | null;
  readonly bottomBar: HTMLElement | null;
  // Internal targets
  readonly brandLogo: HTMLElement | null;
  readonly brandDesc: HTMLElement | null;
  readonly socialIcons: readonly (HTMLElement | null)[];
  readonly servicesHeader: HTMLElement | null;
  readonly servicesLinks: readonly (HTMLElement | null)[];
  readonly companyHeader: HTMLElement | null;
  readonly companyLinks: readonly (HTMLElement | null)[];
  readonly resourcesHeader: HTMLElement | null;
  readonly resourcesLinks: readonly (HTMLElement | null)[];
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initFooterScrollSequence(
  targets: FooterAnimationTargets
): gsap.Context | null {
  const {
    footer,
    brandCol,
    servicesCol,
    companyCol,
    resourcesCol,
    bottomBar,
    brandLogo,
    brandDesc,
    socialIcons,
    servicesHeader,
    servicesLinks,
    companyHeader,
    companyLinks,
    resourcesHeader,
    resourcesLinks,
  } = targets;

  if (!footer) return null;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const majorColumns = [brandCol, servicesCol, companyCol, resourcesCol, bottomBar].filter(
    Boolean
  ) as HTMLElement[];

  // Fallback for reduced motion
  if (prefersReduced) {
    gsap.set(majorColumns, { autoAlpha: 1, x: 0, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const mm = gsap.matchMedia();

    // -------------------------------------------------------------------------
    // DESKTOP & TABLET (>= 768px): Cross-Directional Opposing Entrances
    // -------------------------------------------------------------------------
    mm.add("(min-width: 768px)", () => {
      const travelDistance = 85; // 85px controlled travel

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 92%", // Engages as the footer enters viewport
          end: "top 45%",   // Fully settled into position
          scrub: 1.2,       // Bidirectional scrub tied to scroll velocity
        },
      });

      // 1. Brand enters from RIGHT toward left position
      if (brandCol) {
        tl.fromTo(
          brandCol,
          { autoAlpha: 0, x: travelDistance },
          { autoAlpha: 1, x: 0, duration: 0.85, ease: "power3.out" },
          0
        );
      }

      // 2. Services enters from RIGHT toward position
      if (servicesCol) {
        tl.fromTo(
          servicesCol,
          { autoAlpha: 0, x: travelDistance },
          { autoAlpha: 1, x: 0, duration: 0.85, ease: "power3.out" },
          0.06
        );
      }

      // 3. Company enters from LEFT toward position
      if (companyCol) {
        tl.fromTo(
          companyCol,
          { autoAlpha: 0, x: -travelDistance },
          { autoAlpha: 1, x: 0, duration: 0.85, ease: "power3.out" },
          0.06
        );
      }

      // 4. Resources enters from LEFT toward position
      if (resourcesCol) {
        tl.fromTo(
          resourcesCol,
          { autoAlpha: 0, x: -travelDistance },
          { autoAlpha: 1, x: 0, duration: 0.85, ease: "power3.out" },
          0
        );
      }

      // Internal Staggers within Columns
      if (brandLogo) {
        tl.fromTo(brandLogo, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.15);
      }
      if (brandDesc) {
        tl.fromTo(brandDesc, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.22);
      }
      const validSocials = socialIcons.filter(Boolean) as HTMLElement[];
      if (validSocials.length > 0) {
        tl.fromTo(
          validSocials,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: "back.out(1.4)" },
          0.28
        );
      }

      // Headers and Links Stagger
      if (servicesHeader) {
        tl.fromTo(servicesHeader, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.18);
      }
      const validServicesLinks = servicesLinks.filter(Boolean) as HTMLElement[];
      if (validServicesLinks.length > 0) {
        tl.fromTo(
          validServicesLinks,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.025 },
          0.24
        );
      }

      if (companyHeader) {
        tl.fromTo(companyHeader, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.18);
      }
      const validCompanyLinks = companyLinks.filter(Boolean) as HTMLElement[];
      if (validCompanyLinks.length > 0) {
        tl.fromTo(
          validCompanyLinks,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.025 },
          0.24
        );
      }

      if (resourcesHeader) {
        tl.fromTo(resourcesHeader, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.18);
      }
      const validResourcesLinks = resourcesLinks.filter(Boolean) as HTMLElement[];
      if (validResourcesLinks.length > 0) {
        tl.fromTo(
          validResourcesLinks,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.025 },
          0.24
        );
      }

      // Bottom Legal Row
      if (bottomBar) {
        tl.fromTo(bottomBar, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.35);
      }
    });

    // -------------------------------------------------------------------------
    // MOBILE (< 768px): Vertical Dampened Motion (No Horizontal Scrollbars)
    // -------------------------------------------------------------------------
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          end: "top 55%",
          scrub: 1.0,
        },
      });

      if (brandCol) {
        tl.fromTo(brandCol, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0);
      }
      if (bottomBar) {
        tl.fromTo(bottomBar, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.25);
      }
    });
  }, footer);
}