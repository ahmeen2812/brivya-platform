"use client";

import * as React from "react";
import Link from "next/link";
import { NavItemConfig } from "@/config/navigation";

interface NavItemProps {
  item: NavItemConfig;
  isActive: boolean;
  isMenuOpen?: boolean;
  onItemSelect: (id: string, el: HTMLElement) => void;
  onItemHover: (el: HTMLElement) => void;
  itemRef?: (el: HTMLLIElement | null) => void;
  textRef?: (el: HTMLSpanElement | null) => void;
  onTriggerBorderPulse?: () => void;
  onToggleMegaMenu?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  isMenuOpen = false,
  onItemSelect,
  onItemHover,
  itemRef,
  textRef,
  onTriggerBorderPulse,
  onToggleMegaMenu,
}) => {
  const containerRef = React.useRef<HTMLLIElement | null>(null);
  const isServices = item.id === "services";

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    onItemHover(e.currentTarget);
    if (isServices && onToggleMegaMenu && !isMenuOpen) {
      onToggleMegaMenu();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (isServices && onToggleMegaMenu) {
      onToggleMegaMenu();
    } else {
      onItemSelect(item.id, e.currentTarget);
    }
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
        onClick={(e) => {
          if (isServices) {
            e.preventDefault(); // Prevent navigating directly so mega-menu can be inspected
          }
        }}
        aria-current={isActive ? "page" : undefined}
        aria-expanded={isServices ? isMenuOpen : undefined}
        className={`group relative flex items-center justify-center px-3 sm:px-4 lg:px-5 py-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] rounded-full ${
          isActive ? "scale-[1.04]" : "scale-100 hover:scale-[1.02]"
        }`}
      >
        {/* Crisp Section Label (Zero Blinking Dot; Pure Confident Typography) */}
        <span
          ref={textRef}
          className={`font-sans tracking-[-0.01em] transition-colors duration-200 whitespace-nowrap inline-flex items-center gap-1.5 ${
            isActive
              ? "text-[14.5px] sm:text-[15px] font-bold text-[#06162C]"
              : "text-[13.5px] sm:text-[14px] font-semibold text-[#8998AD] group-hover:text-[#06162C]"
          }`}
        >
          {item.label}

          {/* Micro Chevron Down Arrow for Services */}
          {isServices && (
            <svg
              className={`h-3 w-3 text-[#8998AD] transition-transform duration-300 ${
                isMenuOpen ? "rotate-180 text-[#1675F8]" : "group-hover:text-[#06162C]"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </Link>
    </li>
  );
};