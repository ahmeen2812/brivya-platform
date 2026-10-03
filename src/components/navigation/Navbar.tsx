"use client";

import * as React from "react";
import gsap from "gsap";
import { NavContainer } from "./NavContainer";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavDivider } from "./NavDivider";
import { NavCtaButton } from "./NavCtaButton";
import { NAV_ITEMS } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  // Animation Node References
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const borderRef = React.useRef<HTMLDivElement | null>(null);
  const centerLineRef = React.useRef<HTMLDivElement | null>(null);
  const logoWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const logoDividerRef = React.useRef<HTMLDivElement | null>(null);
  const ctaDividerRef = React.useRef<HTMLDivElement | null>(null);
  const ctaButtonRef = React.useRef<HTMLDivElement | null>(null);
  const activeLineRef = React.useRef<HTMLSpanElement | null>(null);

  // Arrays of refs for staggered items and internal dividers
  const itemsRefList = React.useRef<(HTMLLIElement | null)[]>([]);
  const dividersRefList = React.useRef<(HTMLDivElement | null)[]>([]);

  const registerItemRef = React.useCallback(
    (index: number, el: HTMLLIElement | null) => {
      itemsRefList.current[index] = el;
    },
    [],
  );

  const registerDividerRef = React.useCallback(
    (index: number, el: HTMLDivElement | null) => {
      dividersRefList.current[index] = el;
    },
    [],
  );

  // Synchronized GSAP Master Reveal Sequence
  React.useEffect(() => {
    // Accessibility check: Skip animation if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (borderRef.current) borderRef.current.style.opacity = "0";
      return;
    }

    const container = containerRef.current;
    const border = borderRef.current;
    const centerLine = centerLineRef.current;
    const logoWrapper = logoWrapperRef.current;
    const logoDivider = logoDividerRef.current;
    const ctaDivider = ctaDividerRef.current;
    const ctaBtn = ctaButtonRef.current;
    const activeLine = activeLineRef.current;

    if (!container || !border || !centerLine) return;

    // Filter valid element arrays
    const validItems = itemsRefList.current.filter(Boolean);
    const validDividers = dividersRefList.current.filter(Boolean);

    // Initial State Pre-Configuration
    gsap.set(centerLine, {
      opacity: 0,
      y: -30,
      scaleY: 0.2,
      transformOrigin: "top center",
    });

    gsap.set(container, {
      opacity: 0,
      width: "56px",
      scale: 0.95,
      transformOrigin: "center center",
    });

    gsap.set(border, {
      opacity: 1,
    });

    if (logoWrapper) {
      gsap.set(logoWrapper, { opacity: 0, x: -16, clipPath: "inset(0% 100% 0% 0%)" });
    }

    if (logoDivider) {
      gsap.set(logoDivider, { opacity: 0, scaleY: 0 });
    }

    if (ctaDivider) {
      gsap.set(ctaDivider, { opacity: 0, scaleY: 0 });
    }

    if (ctaBtn) {
      gsap.set(ctaBtn, { opacity: 0, scale: 0.88, x: 12 });
    }

    if (validItems.length > 0) {
      gsap.set(validItems, { opacity: 0, y: -14 });
    }

    if (validDividers.length > 0) {
      gsap.set(validDividers, { opacity: 0, scaleY: 0 });
    }

    if (activeLine) {
      gsap.set(activeLine, { scaleX: 0, opacity: 0, transformOrigin: "center center" });
    }

    // Build Master Timeline
    const masterTl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    // Stage 1: The Plumb Line Drop (0.0s - 0.35s)
    masterTl
      .to(centerLine, {
        opacity: 1,
        y: 0,
        scaleY: 1,
        duration: 0.35,
        ease: "power2.out",
      })

      // Stage 2: Pill Capsule Expands Outward (Dynamic Island 0.35s - 1.05s)
      .to(
        container,
        {
          opacity: 1,
          width: "100%",
          scale: 1,
          duration: 0.7,
          ease: "expo.out",
        },
        "-=0.1",
      )

      // Center Line dissolves as pill takes over
      .to(
        centerLine,
        {
          opacity: 0,
          scaleY: 0.5,
          duration: 0.25,
          ease: "power2.in",
        },
        "-=0.6",
      )

      // Stage 3: Logo and Outer Dividers Unmask (0.85s - 1.35s)
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
        ctaBtn,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.45,
          ease: "back.out(1.4)",
        },
        "-=0.35",
      )

      // Stage 4: Cascading Drop of Nav Items & Central Dividers (1.05s - 1.55s)
      .to(
        validItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.035,
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

      // Stage 5: Active State Laser Underline on Home (1.45s - 1.75s)
      .to(
        activeLine,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.15",
      )

      // Stage 6: The 2.0-Second Perimeter Border Hold & Smooth Dissolve
      .to(
        border,
        {
          opacity: 0,
          duration: 0.85,
          ease: "power2.out",
          delay: 1.8, // Holds for ~2 seconds after all elements land
        },
      );

    return () => {
      masterTl.kill();
    };
  }, []);

  // Close mobile drawer on route navigation
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <NavContainer
        containerRef={containerRef}
        borderRef={borderRef}
        centerLineRef={centerLineRef}
      >
        {/* Left Section: Logo */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 shrink-0">
          <NavLogo wrapperRef={logoWrapperRef} onClick={closeMobileMenu} />
          {/* Vertical Divider after Logo */}
          <NavDivider customRef={(el) => { logoDividerRef.current = el; }} className="hidden md:block" />
        </div>

        {/* Center Section: Desktop / Tablet Navigation Items */}
        <nav
          aria-label="Desktop Navigation"
          className="hidden md:flex items-center justify-center flex-1 px-1 sm:px-2"
        >
          <NavLinks
            registerItemRef={registerItemRef}
            registerDividerRef={registerDividerRef}
            activeLineRef={activeLineRef}
          />
        </nav>

        {/* Right Section: CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          {/* Vertical Divider before CTA */}
          <NavDivider customRef={(el) => { ctaDividerRef.current = el; }} className="hidden md:block" />

          {/* Pill CTA Button */}
          <NavCtaButton buttonRef={ctaButtonRef} className="hidden sm:inline-flex" />

          {/* Mobile/Tablet Drawer Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex md:hidden h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 text-[#06162C] transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8]"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </NavContainer>

      {/* Mobile Drawer (Responsive Behavior for Viewports < 768px) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#06162C]/75 backdrop-blur-md md:hidden pt-24 px-4 pb-8 flex flex-col justify-between"
        >
          <div className="rounded-3xl bg-white p-6 shadow-2xl flex flex-col gap-4 max-h-[calc(100vh-140px)] overflow-y-auto">
            <div className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8998AD] pb-2 border-b border-slate-100">
              Navigation Menu
            </div>

            <ul className="flex flex-col divide-y divide-slate-100 m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

                return (
                  <li key={item.id} className="list-none">
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-xs font-semibold text-[#8998AD]">
                          {item.index}
                        </span>
                        <span className="font-sans text-base font-semibold text-[#06162C]">
                          {item.label}
                        </span>
                      </div>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#1675F8]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-slate-100 sm:hidden">
              <NavCtaButton onClick={closeMobileMenu} className="w-full text-center" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};