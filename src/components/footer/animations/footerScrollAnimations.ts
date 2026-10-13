/**
 * BRIVYA SOLUTIONS — FOOTER KINEMATIC SCROLL REVEAL ENGINE
 * Coordinated 4-way choreography:
 * - Brand & Services: Synchronized cross-directional horizontal entrance (~340px)
 * - Company: Masked downward emergence from beneath heading
 * - Resources: Smooth upward entrance from below
 * - Bidirectional ScrollTrigger scrub with mobile safety
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
  readonly companyLinksContainer: HTMLElement | null;
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

  if (prefersReduced) {
    gsap.set(majorColumns, { autoAlpha: 1, x: 0, y: 0 });
    return null;
  }

  return gsap.context(() => {
    const mm = gsap.matchMedia();

    // -------------------------------------------------------------------------
    // DESKTOP & TABLET (>= 768px): Exact 4-Group Directional Choreography
    // -------------------------------------------------------------------------
    mm.add("(min-width: 768px)", () => {
      // Calculate cross-horizontal distance between Brand and Services column centers
      const crossDistance = 340;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 88%", // Engages smoothly as footer enters viewport
          end: "top 32%",   // Completely settled
          scrub: 1.2,       // Bidirectional scrub tied to scroll velocity
        },
      });

      // =======================================================================
      // 1. BRAND SECTION: Starts from the Services position (RIGHT) -> Moves LEFT
      // =======================================================================
      if (brandCol) {
        tl.fromTo(
          brandCol,
          { autoAlpha: 0, x: crossDistance },
          { autoAlpha: 1, x: 0, duration: 1.0, ease: "power3.out" },
          0
        );
      }
      if (brandLogo) {
        tl.fromTo(brandLogo, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.15);
      }
      if (brandDesc) {
        tl.fromTo(brandDesc, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.22);
      }
      const validSocials = socialIcons.filter(Boolean) as HTMLElement[];
      if (validSocials.length > 0) {
        tl.fromTo(
          validSocials,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.035, ease: "back.out(1.4)" },
          0.28
        );
      }

      // =======================================================================
      // 2. SERVICES SECTION: Starts from the Brand position (LEFT) -> Moves RIGHT
      // =======================================================================
      if (servicesCol) {
        tl.fromTo(
          servicesCol,
          { autoAlpha: 0, x: -crossDistance },
          { autoAlpha: 1, x: 0, duration: 1.0, ease: "power3.out" },
          0
        );
      }
      if (servicesHeader) {
        tl.fromTo(servicesHeader, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.15);
      }
      const validServicesLinks = servicesLinks.filter(Boolean) as HTMLElement[];
      if (validServicesLinks.length > 0) {
        tl.fromTo(
          validServicesLinks,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.025 },
          0.22
        );
      }

      // =======================================================================
      // 3. COMPANY SECTION: Links Emerge DOWNWARD from beneath heading
      // =======================================================================
      if (companyHeader) {
        tl.fromTo(
          companyHeader,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.4 },
          0.1
        );
      }
      const validCompanyLinks = companyLinks.filter(Boolean) as HTMLElement[];
      if (validCompanyLinks.length > 0) {
        tl.fromTo(
          validCompanyLinks,
          { autoAlpha: 0, y: -50 }, // Starts hidden behind the heading area
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.035,
            ease: "power2.out",
          },
          0.2
        );
      }

      // =======================================================================
      // 4. RESOURCES SECTION: Enters smoothly from BELOW (BOTTOM)
      // =======================================================================
      if (resourcesCol) {
        tl.fromTo(
          resourcesCol,
          { autoAlpha: 0, y: 75 }, // Starts below position
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
          0.08
        );
      }
      if (resourcesHeader) {
        tl.fromTo(resourcesHeader, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.2);
      }
      const validResourcesLinks = resourcesLinks.filter(Boolean) as HTMLElement[];
      if (validResourcesLinks.length > 0) {
        tl.fromTo(
          validResourcesLinks,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.03 },
          0.26
        );
      }

      // Bottom Legal Row
      if (bottomBar) {
        tl.fromTo(bottomBar, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.32);
      }
    });

    // -------------------------------------------------------------------------
    // MOBILE (< 768px): Safe Vertical-Only Motion (Zero Horizontal Overflow)
    // -------------------------------------------------------------------------
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 88%",
          end: "top 45%",
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