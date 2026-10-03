"use client";

import * as React from "react";
import { NAV_ITEMS } from "@/config/navigation";
import { NavItem } from "./NavItem";
import { NavDivider } from "./NavDivider";

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
  registerItemRef?: (index: number, el: HTMLLIElement | null) => void;
  registerNumberRef?: (index: number, el: HTMLSpanElement | null) => void;
  registerDividerRef?: (index: number, el: HTMLDivElement | null) => void;
  activeLineRef?: React.RefObject<HTMLSpanElement | null>;
  onTriggerBorderPulse?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  className,
  onItemClick,
  registerItemRef,
  registerNumberRef,
  registerDividerRef,
  activeLineRef,
  onTriggerBorderPulse,
}) => {
  return (
    <ul
      role="menubar"
      aria-label="Primary Navigation"
      className={`flex items-center m-0 p-0 ${className || ""}`}
    >
      {NAV_ITEMS.map((item, idx) => (
        <React.Fragment key={item.id}>
          <NavItem
            item={item}
            onClick={onItemClick}
            itemRef={(el) => {
              if (registerItemRef) registerItemRef(idx, el);
            }}
            numberRef={(el) => {
              if (registerNumberRef) registerNumberRef(idx, el);
            }}
            activeLineRef={item.id === "home" ? activeLineRef : undefined}
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