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
}

export const NavLinks: React.FC<NavLinksProps> = ({
  className,
  onItemClick,
  navLinksRef,
  registerDividerRef,
  onTriggerBorderPulse,
}) => {
  const pathname = usePathname();
  const internalRef = React.useRef<HTMLUListElement | null>(null);
  const containerRef = navLinksRef || internalRef;
  const gliderRef = React.useRef<HTMLSpanElement | null>(null);
  const itemElementsMap = React.useRef<Map<string, HTMLElement>>(new Map());

  // Determine active item based on current route or user click latch
  const getInitialActiveId = () => {
    const matched = NAV_ITEMS.find((item: NavItemConfig) =>
      item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href),
    );
    return matched ? matched.id : "home";
  };

  const [activeId, setActiveId] = React.useState<string>(getInitialActiveId);

  // Position magnetic glider on mount and route changes
  React.useEffect(() => {
    const matched = getInitialActiveId();
    setActiveId(matched);

    const activeEl = itemElementsMap.current.get(matched);
    if (activeEl && gliderRef.current && containerRef.current) {
      animateMagneticGlider(gliderRef.current, activeEl, containerRef.current);
    }
  }, [pathname]);

  const handleItemHover = (el: HTMLElement) => {
    if (gliderRef.current && containerRef.current) {
      animateMagneticGlider(gliderRef.current, el, containerRef.current);
    }
  };

  const handleNavMouseLeave = () => {
    // Snap back magnetically to the active latched item
    const activeEl = itemElementsMap.current.get(activeId);
    if (activeEl && gliderRef.current && containerRef.current) {
      animateMagneticGlider(gliderRef.current, activeEl, containerRef.current);
    }
  };

  const handleItemSelect = (id: string, el: HTMLElement) => {
    setActiveId(id);
    if (gliderRef.current && containerRef.current) {
      animateMagneticGlider(gliderRef.current, el, containerRef.current);
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
      {/* 
        Single Shared Magnetic Glider Bar:
        Glides across all items and snaps beneath active or hovered element
      */}
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
            onItemHover={handleItemHover}
            onItemSelect={handleItemSelect}
            itemRef={(el) => {
              if (el) itemElementsMap.current.set(item.id, el);
            }}
            onTriggerBorderPulse={onTriggerBorderPulse}
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