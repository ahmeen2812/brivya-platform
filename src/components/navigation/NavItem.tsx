"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemConfig } from "@/config/navigation";

interface NavItemProps {
  item: NavItemConfig;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ item, onClick }) => {
  const pathname = usePathname();
  const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

  return (
    <li className="list-none flex items-center">
      <Link
        href={item.href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className="group relative flex flex-col items-center justify-center px-3.5 sm:px-4 lg:px-5 py-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] rounded-sm"
      >
        {/* Step Index (01, 02, etc.) */}
        <span
          className={`font-sans text-[11px] font-medium tracking-tight transition-colors duration-200 select-none ${
            isActive
              ? "text-[#8998AD]"
              : "text-[#8998AD]/80 group-hover:text-[#06162C]"
          }`}
        >
          {item.index}
        </span>

        {/* Label (Home, Services, etc.) */}
        <span
          className={`font-sans text-[13px] sm:text-[14px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
            isActive
              ? "text-[#06162C]"
              : "text-[#06162C]/80 group-hover:text-[#06162C]"
          }`}
        >
          {item.label}
        </span>

        {/* Exact Reference Blue Active Underline */}
        {isActive ? (
          <span
            aria-hidden="true"
            className="absolute -bottom-1 h-[2.5px] w-6 sm:w-7 rounded-full bg-[#1675F8] transition-all duration-300"
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