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
  registerItemRef?: (index: number, el: HTMLLIElement | null) => void;
  registerNumberRef?: (index: number, el: HTMLSpanElement | null) => void;
  registerDividerRef?: (index: number, el: HTMLDivElement | null) => void;
  onTriggerBorderPulse?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  className,
  onItemClick,
  registerItemRef,
  registerNumberRef,
  registerDividerRef,
  onTriggerBorderPulse,
}) => {
  const pathname = usePathname();
  const navContainerRef = React.useRef<HTMLUListElement | null>(null);
  const gliderRef = React.useRef<HTMLSpanElement | null>(null);
  const itemElementsMap = React.useRef<Map<string, HTMLElement>>(new Map());

  // Explicitly annotate `item: NavItemConfig` to prevent implicit any
  const getInitialActiveId = () => {
    const matched = NAV_ITEMS.find((item: NavItemConfig) =>
      item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href),
    );
    return matched ? matched.id : "home";
  };

  const [activeId, setActiveId] = React.useState<string>(getInitialActiveId);

  React.useEffect(() => {
    const matched = getInitialActiveId();
    setActiveId(matched);

    const activeEl = itemElementsMap.current.get(matched);
    if (activeEl && gliderRef.current && navContainerRef.current) {
      animateMagneticGlider(gliderRef.current, activeEl, navContainerRef.current);
    }
  }, [pathname]);

  const handleItemHover = (el: HTMLElement) => {
    if (gliderRef.current && navContainerRef.current) {
      animateMagneticGlider(gliderRef.current, el, navContainerRef.current);
    }
  };

  const handleNavMouseLeave = () => {
    const activeEl = itemElementsMap.current.get(activeId);
    if (activeEl && gliderRef.current && navContainerRef.current) {
      animateMagneticGlider(gliderRef.current, activeEl, navContainerRef.current);
    }
  };

  const handleItemSelect = (id: string, el: HTMLElement) => {
    setActiveId(id);
    if (gliderRef.current && navContainerRef.current) {
      animateMagneticGlider(gliderRef.current, el, navContainerRef.current);
    }
    if (onItemClick) onItemClick();
  };

  return (
    <ul
      ref={navContainerRef}
      onMouseLeave={handleNavMouseLeave}
      role="menubar"
      aria-label="Primary Navigation"
      className={`relative flex items-center m-0 p-0 ${className || ""}`}
    >
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
              if (registerItemRef) registerItemRef(idx, el);
            }}
            numberRef={(el) => {
              if (registerNumberRef) registerNumberRef(idx, el);
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