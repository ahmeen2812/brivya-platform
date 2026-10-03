"use client";

import * as React from "react";
import { NavContainer } from "./NavContainer";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavDivider } from "./NavDivider";
import { NavCtaButton } from "./NavCtaButton";
import { NavMobileToggle } from "./NavMobileToggle";
import { NavMobileMenu } from "./NavMobileMenu";
import { ServicesMegaMenu } from "./mega-menu/ServicesMegaMenu";
import {
  initDesktopNavbarTimeline,
  triggerInteractiveBorderPulse,
} from "@/animations/navDesktopAnimations";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const [megaMenuOpen, setMegaMenuOpen] = React.useState<boolean>(false);
  const [megaMenuPinned, setMegaMenuPinned] = React.useState<boolean>(false);
  const pathname = usePathname();

  // Hover timeout debounce ref
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Animation Node References
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const borderRef = React.useRef<HTMLDivElement | null>(null);
  const centerLineRef = React.useRef<HTMLDivElement | null>(null);
  const logoWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const logoDividerRef = React.useRef<HTMLDivElement | null>(null);
  const ctaDividerRef = React.useRef<HTMLDivElement | null>(null);
  const ctaButtonRef = React.useRef<HTMLDivElement | null>(null);
  const navLinksRef = React.useRef<HTMLUListElement | null>(null);

  const dividersRefList = React.useRef<(HTMLDivElement | null)[]>([]);

  const registerDividerRef = React.useCallback((index: number, el: HTMLDivElement | null) => {
    dividersRefList.current[index] = el;
  }, []);

  // Run Master Desktop Sequence on Mount
  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (borderRef.current) borderRef.current.style.opacity = "0";
      return;
    }

    const tl = initDesktopNavbarTimeline({
      container: containerRef.current,
      border: borderRef.current,
      centerLine: centerLineRef.current,
      logoWrapper: logoWrapperRef.current,
      logoDivider: logoDividerRef.current,
      ctaDivider: ctaDividerRef.current,
      ctaButton: ctaButtonRef.current,
      navLinksWrapper: navLinksRef.current,
      dividers: dividersRefList.current,
    });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  // Auto-close menus on route transition
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setMegaMenuPinned(false);
  }, [pathname]);

  // Lock body scroll on mobile drawer
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Click vs Hover Handlers
  const handleOpenMegaMenu = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleCloseMegaMenuWithDelay = () => {
    // If pinned by click, do NOT close on hover leave!
    if (megaMenuPinned) return;

    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  };

  const handleCloseMegaMenuImmediate = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setMegaMenuOpen(false);
    setMegaMenuPinned(false);
  };

  const handleToggleMegaMenuPin = () => {
    if (megaMenuPinned) {
      setMegaMenuPinned(false);
      setMegaMenuOpen(false);
    } else {
      setMegaMenuPinned(true);
      setMegaMenuOpen(true);
    }
  };

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handlePulseBorder = () => {
    triggerInteractiveBorderPulse(borderRef.current);
  };

  return (
    <>
      <NavContainer
        containerRef={containerRef}
        borderRef={borderRef}
        centerLineRef={centerLineRef}
      >
        {/* Left Section: Logo with Prismatic Sheen */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 shrink-0">
          <NavLogo wrapperRef={logoWrapperRef} onClick={closeMobileMenu} />
          <NavDivider
            customRef={(el) => {
              logoDividerRef.current = el;
            }}
            className="hidden md:block"
          />
        </div>

        {/* Center Section: Desktop Navigation Items */}
        <nav
          aria-label="Desktop Navigation"
          className="hidden md:flex items-center justify-center flex-1 px-1 sm:px-2"
        >
          <NavLinks
            navLinksRef={navLinksRef}
            registerDividerRef={registerDividerRef}
            onTriggerBorderPulse={handlePulseBorder}
            isMegaMenuOpen={megaMenuOpen}
            isMegaMenuPinned={megaMenuPinned}
            onOpenMegaMenu={handleOpenMegaMenu}
            onCloseMegaMenu={handleCloseMegaMenuImmediate}
            onToggleMegaMenuPin={handleToggleMegaMenuPin}
          />
        </nav>

        {/* Right Section: CTA Button & Animated Mobile Morph Toggle */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          <NavDivider
            customRef={(el) => {
              ctaDividerRef.current = el;
            }}
            className="hidden md:block"
          />

          <div
            className={`transition-all duration-300 ${
              mobileMenuOpen
                ? "opacity-0 scale-90 pointer-events-none"
                : "opacity-100 scale-100"
            }`}
          >
            <NavCtaButton buttonRef={ctaButtonRef} className="hidden sm:inline-flex" />
          </div>

          <NavMobileToggle isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
        </div>
      </NavContainer>

      {/* Floating Desktop Services Console with 4px Air Gap and Pinning */}
      <ServicesMegaMenu
        isOpen={megaMenuOpen}
        isPinned={megaMenuPinned}
        onClose={handleCloseMegaMenuImmediate}
        onMouseEnter={handleOpenMegaMenu}
        onMouseLeave={handleCloseMegaMenuWithDelay}
      />

      {/* Dedicated Animated Mobile Drawer */}
      <NavMobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};