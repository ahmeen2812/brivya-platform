"use client";

import * as React from "react";
import Link from "next/link";
import { NavItemConfig } from "@/config/navigation";
import { animateItemMicroZoom } from "@/animations/navHoverAnimations";

interface NavItemProps {
  item: NavItemConfig;
  isActive: boolean;
  onItemSelect: (id: string, el: HTMLElement) => void;
  onItemHover: (el: HTMLElement) => void;
  itemRef?: (el: HTMLLIElement | null) => void;
  numberRef?: (el: HTMLSpanElement | null) => void;
  onTriggerBorderPulse?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  onItemSelect,
  onItemHover,
  itemRef,
  numberRef,
  onTriggerBorderPulse,
}) => {
  const containerRef = React.useRef<HTMLLIElement | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    onItemHover(e.currentTarget);
    animateItemMicroZoom(e.currentTarget, true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    animateItemMicroZoom(e.currentTarget, false);
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
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="list-none flex items-center cursor-pointer"
      style={{ willChange: "transform, opacity" }}
    >
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className="group relative flex flex-col items-center justify-center px-2.5 sm:px-3.5 lg:px-5 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] rounded-sm select-none"
      >
        {/* Engineered Coordinate Capsule */}
        <span
          className={`font-mono text-[9.5px] sm:text-[10px] font-semibold tracking-tight px-1.5 py-0.5 rounded-[3px] border transition-colors duration-200 select-none ${
            isActive
              ? "bg-[#1675F8]/10 text-[#1675F8] border-[#1675F8]/30"
              : "bg-slate-100 text-[#8998AD] border-slate-200/60 group-hover:bg-[#1675F8]/10 group-hover:text-[#1675F8] group-hover:border-[#1675F8]/30"
          }`}
        >
          <span ref={numberRef}>{item.index}</span>
        </span>

        {/* Section Label */}
        <span
          className={`font-sans text-[12px] sm:text-[13.5px] lg:text-[14px] font-semibold tracking-[-0.01em] transition-colors duration-200 whitespace-nowrap mt-0.5 ${
            isActive
              ? "text-[#06162C]"
              : "text-[#06162C]/75 group-hover:text-[#06162C]"
          }`}
        >
          {item.label}
        </span>
      </Link>
    </li>
  );
};