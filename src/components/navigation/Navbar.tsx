"use client";

import * as React from "react";
import gsap from "gsap";
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
  const [isIdle, setIsIdle] = React.useState<boolean>(false);
  const pathname = usePathname();

  // Guard flag to guarantee idle transitions NEVER kill the entrance animation on mount
  const isEntranceCompleteRef = React.useRef<boolean>(false);

  // Debounce and timer references
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const idleTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const isHoveringNavbarRef = React.useRef<boolean>(false);
  const lastMousePosRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });

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

  // 1. Master Desktop Entrance Sequence (Runs reliably on mount)
  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (borderRef.current) borderRef.current.style.opacity = "0";
      isEntranceCompleteRef.current = true;
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

    if (tl) {
      tl.eventCallback("onComplete", () => {
        // Unlock the idle detection system ONLY after the entrance animation has fully finished
        isEntranceCompleteRef.current = true;
      });
    } else {
      isEntranceCompleteRef.current = true;
    }

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  // 2. Idle State Transition Animation (Dynamic Island Morph)
  React.useEffect(() => {
    // Strictly do nothing until the entrance animation is complete
    if (!isEntranceCompleteRef.current || !containerRef.current) return;

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

    if (isDesktop) {
      // Desktop / Tablet: Morph width between full (1360px) and compact Conversion Capsule (340px)
      gsap.killTweensOf([containerRef.current, navLinksRef.current, dividersRefList.current]);

      if (isIdle) {
        // Entering Idle: Center links and dividers slide up 4px and fade out
        if (navLinksRef.current) {
          gsap.to(navLinksRef.current, {
            autoAlpha: 0,
            y: -4,
            duration: 0.2,
            ease: "power2.in",
          });
        }

        dividersRefList.current.forEach((divider) => {
          if (divider) gsap.to(divider, { autoAlpha: 0, duration: 0.16 });
        });

        // Shrink container to compact capsule
        gsap.to(containerRef.current, {
          maxWidth: 340,
          duration: 0.38,
          ease: "power3.inOut",
        });
      } else {
        // Waking Up: Restore full width and reveal center links
        gsap.to(containerRef.current, {
          maxWidth: 1360,
          duration: 0.32,
          ease: "expo.out",
        });

        if (navLinksRef.current) {
          gsap.fromTo(
            navLinksRef.current,
            { autoAlpha: 0, y: -4 },
            { autoAlpha: 1, y: 0, duration: 0.24, ease: "power2.out", delay: 0.08 },
          );
        }

        dividersRefList.current.forEach((divider) => {
          if (divider) gsap.to(divider, { autoAlpha: 1, duration: 0.22, delay: 0.08 });
        });
      }
    } else {
      // Mobile (< 768px): Maintain full width, softly relax ambient opacity to 0.85
      gsap.to(containerRef.current, {
        opacity: isIdle ? 0.85 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isIdle]);

  // 3. User Inactivity & Wake-Up Event Engine (5.0s Threshold)
  React.useEffect(() => {
    const IDLE_DELAY_MS = 5000; // 5.0 seconds of inactivity

    const resetIdleTimer = () => {
      setIsIdle(false);

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      // Do NOT start countdown if entrance is still playing, user is hovering, or menus are open/pinned
      if (
        !isEntranceCompleteRef.current ||
        isHoveringNavbarRef.current ||
        megaMenuOpen ||
        megaMenuPinned ||
        mobileMenuOpen
      ) {
        return;
      }

      idleTimerRef.current = setTimeout(() => {
        if (
          isEntranceCompleteRef.current &&
          !isHoveringNavbarRef.current &&
          !megaMenuOpen &&
          !megaMenuPinned &&
          !mobileMenuOpen
        ) {
          setIsIdle(true);
        }
      }, IDLE_DELAY_MS);
    };

    // Filter mouse movement to avoid sensor micro-jitters (< 5px)
    const handleMouseMove = (e: MouseEvent) => {
      const dx = Math.abs(e.clientX - lastMousePosRef.current.x);
      const dy = Math.abs(e.clientY - lastMousePosRef.current.y);

      if (dx > 5 || dy > 5) {
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
        resetIdleTimer();
      }
    };

    const handleUserActivity = () => {
      resetIdleTimer();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleUserActivity, { passive: true });
    window.addEventListener("keydown", handleUserActivity, { passive: true });
    window.addEventListener("touchstart", handleUserActivity, { passive: true });
    window.addEventListener("wheel", handleUserActivity, { passive: true });
    window.addEventListener("mousedown", handleUserActivity, { passive: true });

    // Initialize timer
    resetIdleTimer();

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("touchstart", handleUserActivity);
      window.removeEventListener("wheel", handleUserActivity);
      window.removeEventListener("mousedown", handleUserActivity);
    };
  }, [megaMenuOpen, megaMenuPinned, mobileMenuOpen]);

  // 4. Auto-close menus on route transition
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setMegaMenuPinned(false);
    setIsIdle(false);
  }, [pathname]);

  // 5. Lock body scroll on mobile drawer
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Mega-Menu Hover Bridge & Interaction Handlers
  const handleOpenMegaMenu = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleCloseMegaMenuWithDelay = () => {
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

  // Direct container hover handlers
  const handleNavbarMouseEnter = () => {
    isHoveringNavbarRef.current = true;
    setIsIdle(false); // Immediately expand if user hovers the compact capsule
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
  };

  const handleNavbarMouseLeave = () => {
    isHoveringNavbarRef.current = false;
  };

  return (
    <>
      <NavContainer
        containerRef={containerRef}
        borderRef={borderRef}
        centerLineRef={centerLineRef}
        onMouseEnter={handleNavbarMouseEnter}
        onMouseLeave={handleNavbarMouseLeave}
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
          className="hidden md:flex items-center justify-center flex-1 px-1 sm:px-2 overflow-hidden"
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