"use client";

import * as React from "react";
import { NAV_ITEMS } from "@/config/navigation";
import { NavItem } from "./NavItem";
import { NavDivider } from "./NavDivider";

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ className, onItemClick }) => {
  return (
    <ul
      role="menubar"
      aria-label="Primary Navigation"
      className={`flex items-center m-0 p-0 ${className || ""}`}
    >
      {NAV_ITEMS.map((item) => (
        <React.Fragment key={item.id}>
          <NavItem item={item} onClick={onItemClick} />
          {item.hasDividerAfter && (
            <NavDivider className="mx-1 hidden md:block" />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};