"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemConfig } from "@/config/navigation";

interface NavItemProps {
  item: NavItemConfig;
  onClick?: () => void;
  itemRef?: (el: HTMLLIElement | null) => void;
  numberRef?: (el: HTMLSpanElement | null) => void;
  activeLineRef?: React.RefObject<HTMLSpanElement | null>;
  onTriggerBorderPulse?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  item,
  onClick,
  itemRef,
  numberRef,
  activeLineRef,
  onTriggerBorderPulse,
}) => {
  const pathname = usePathname();
  const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

  const handleClick = () => {
    if (onTriggerBorderPulse) onTriggerBorderPulse();
    if (onClick) onClick();
  };

  return (
    <li
      ref={itemRef}
      className="list-none flex items-center"
      style={{ willChange: "transform, opacity" }}
    >
      <Link
        href={item.href}
        onClick={handleClick}
        aria-current={isActive ? "page" : undefined}
        className="group relative flex flex-col items-center justify-center px-2.5 sm:px-3.5 lg:px-5 py-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] rounded-sm"
      >
        {/* Number Coordinate (Ticks from 00 up to target) */}
        <span
          ref={numberRef}
          className={`font-mono text-[10px] sm:text-[11px] font-semibold tracking-tight transition-colors duration-200 select-none ${
            isActive ? "text-[#8998AD]" : "text-[#8998AD]/85 group-hover:text-[#06162C]"
          }`}
        >
          {item.index}
        </span>

        {/* Route Label */}
        <span
          className={`font-sans text-[12px] sm:text-[13.5px] lg:text-[14px] font-semibold tracking-[-0.01em] transition-colors duration-200 whitespace-nowrap ${
            isActive ? "text-[#06162C]" : "text-[#06162C]/80 group-hover:text-[#06162C]"
          }`}
        >
          {item.label}
        </span>

        {/* Laser Active Underline on Home */}
        {isActive ? (
          <span
            ref={activeLineRef}
            aria-hidden="true"
            className="absolute -bottom-1 h-[2.5px] w-6 sm:w-7 rounded-full bg-[#1675F8] origin-center"
            style={{ willChange: "transform, opacity" }}
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute -bottom-1 h-[2.5px] w-0 rounded-full bg-[#1675F8] transition-all duration-200 group-hover:w-4 opacity-0 group-hover:opacity-100"
          />
        )}
      </Link>
    </li>
  );
};