"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, type NavItemConfig } from "@/config/navigation";
import { NavItem } from "./NavItem";
import { NavDivider } from "./NavDivider";
import { animateMagneticGlider } from "@/animations/navHoverAnimations";

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
  navLinksRef?: React.RefObject<HTMLUListElement | null>;
  registerDividerRef?: (index: number, el: HTMLDivElement | null) => void;
  onTriggerBorderPulse?: () => void;
  isMegaMenuOpen?: boolean;
  isMegaMenuPinned?: boolean;
  onOpenMegaMenu?: () => void;
  onCloseMegaMenu?: () => void;
  onToggleMegaMenuPin?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  className,
  onItemClick,
  navLinksRef,
  registerDividerRef,
  onTriggerBorderPulse,
  isMegaMenuOpen = false,
  isMegaMenuPinned = false,
  onOpenMegaMenu,
  onCloseMegaMenu,
  onToggleMegaMenuPin,
}) => {
  const pathname = usePathname();
  const internalRef = React.useRef<HTMLUListElement | null>(null);
  const containerRef = navLinksRef || internalRef;
  const gliderRef = React.useRef<HTMLSpanElement | null>(null);

  const itemElementsMap = React.useRef<Map<string, HTMLElement>>(new Map());
  const textElementsMap = React.useRef<Map<string, HTMLElement>>(new Map());

  const getInitialActiveId = () => {
    const matched = NAV_ITEMS.find((item: NavItemConfig) =>
      item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href),
    );
    return matched ? matched.id : "home";
  };

  const [activeId, setActiveId] = React.useState<string>(getInitialActiveId);

  // Position magnetic glider dynamically to cover full word length
  React.useEffect(() => {
    const matched = getInitialActiveId();
    setActiveId(matched);

    const activeEl = itemElementsMap.current.get(matched);
    const textEl = textElementsMap.current.get(matched);

    if (activeEl && gliderRef.current && containerRef.current) {
      const exactLineWidth = textEl ? textEl.offsetWidth + 4 : 36;
      animateMagneticGlider(gliderRef.current, activeEl, containerRef.current, exactLineWidth);
    }
  }, [pathname]);

  const handleItemHover = (el: HTMLElement, itemId: string) => {
    if (gliderRef.current && containerRef.current) {
      const textEl = textElementsMap.current.get(itemId);
      const exactLineWidth = textEl ? textEl.offsetWidth + 4 : 36;
      animateMagneticGlider(gliderRef.current, el, containerRef.current, exactLineWidth);
    }

    // If hovering away from services to another item, close if not pinned
    if (itemId !== "services" && !isMegaMenuPinned && onCloseMegaMenu && isMegaMenuOpen) {
      onCloseMegaMenu();
    }
  };

  const handleNavMouseLeave = () => {
    const activeEl = itemElementsMap.current.get(activeId);
    const textEl = textElementsMap.current.get(activeId);

    if (activeEl && gliderRef.current && containerRef.current) {
      const exactLineWidth = textEl ? textEl.offsetWidth + 4 : 36;
      animateMagneticGlider(gliderRef.current, activeEl, containerRef.current, exactLineWidth);
    }
  };

  const handleItemSelect = (id: string, el: HTMLElement) => {
    setActiveId(id);
    const textEl = textElementsMap.current.get(id);

    if (gliderRef.current && containerRef.current) {
      const exactLineWidth = textEl ? textEl.offsetWidth + 4 : 36;
      animateMagneticGlider(gliderRef.current, el, containerRef.current, exactLineWidth);
    }

    if (id !== "services" && onCloseMegaMenu) {
      onCloseMegaMenu();
    }

    if (onItemClick) onItemClick();
  };

  return (
    <ul
      ref={containerRef}
      onMouseLeave={handleNavMouseLeave}
      role="menubar"
      aria-label="Primary Navigation"
      className={`relative flex items-center m-0 p-0 ${className || ""}`}
    >
      {/* Dynamic Magnetic Glider Bar */}
      <span
        ref={gliderRef}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[2.5px] rounded-full bg-[#1675F8] opacity-0"
        style={{ willChange: "transform, width, opacity" }}
      />

      {NAV_ITEMS.map((item: NavItemConfig, idx: number) => (
        <React.Fragment key={item.id}>
          <NavItem
            item={item}
            isActive={activeId === item.id}
            isMenuOpen={item.id === "services" ? isMegaMenuOpen : false}
            onItemHover={(el) => handleItemHover(el, item.id)}
            onItemSelect={handleItemSelect}
            itemRef={(el) => {
              if (el) itemElementsMap.current.set(item.id, el);
            }}
            textRef={(el) => {
              if (el) textElementsMap.current.set(item.id, el);
            }}
            onTriggerBorderPulse={onTriggerBorderPulse}
            onOpenMegaMenu={item.id === "services" ? onOpenMegaMenu : undefined}
            onCloseMegaMenu={item.id === "services" ? onCloseMegaMenu : undefined}
            onToggleMegaMenuPin={item.id === "services" ? onToggleMegaMenuPin : undefined}
          />
          {item.hasDividerAfter && (
            <NavDivider
              className="mx-0.5 sm:mx-1 hidden md:block"
              customRef={(el) => {
                if (registerDividerRef) registerDividerRef(idx, el);
              }}
            />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};