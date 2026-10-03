"use client";

import * as React from "react";
import Link from "next/link";
import { NavItemConfig } from "@/config/navigation";

interface NavItemProps {
  item: NavItemConfig;
  isActive: boolean;
  onItemSelect: (id: string, el: HTMLElement) => void;
  onItemHover: (el: HTMLElement) => void;
  itemRef?: (el: HTMLLIElement | null) => void;
  onTriggerBorderPulse?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  onItemSelect,
  onItemHover,
  itemRef,
  onTriggerBorderPulse,
}) => {
  const containerRef = React.useRef<HTMLLIElement | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    onItemHover(e.currentTarget);
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onItemSelect(item.id, e.currentTarget);
    if (onTriggerBorderPulse) onTriggerBorderPulse();
  };

  return (
    <li
      ref={(el) => {
        containerRef.current = el;
        if (itemRef) itemRef(el);
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className="list-none flex items-center cursor-pointer select-none"
    >
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={`group relative flex items-center justify-center px-3 sm:px-4 lg:px-5 py-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] rounded-full ${
          isActive ? "scale-[1.04]" : "scale-100 hover:scale-[1.02]"
        }`}
      >
        {/* Active Signal Blue Beacon Diode (Fades & pulses exclusively on the active page) */}
        {isActive && (
          <span
            aria-hidden="true"
            className="mr-2 flex h-1.5 w-1.5 shrink-0 items-center justify-center transition-all duration-300"
          >
            <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-[#1675F8] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1675F8]" />
          </span>
        )}

        {/* Crisp Section Label (Guaranteed permanent opacity) */}
        <span
          className={`font-sans tracking-[-0.01em] transition-colors duration-200 whitespace-nowrap ${
            isActive
              ? "text-[14.5px] sm:text-[15px] font-bold text-[#06162C]"
              : "text-[13.5px] sm:text-[14px] font-semibold text-[#8998AD] group-hover:text-[#06162C]"
          }`}
        >
          {item.label}
        </span>
      </Link>
    </li>
  );
};