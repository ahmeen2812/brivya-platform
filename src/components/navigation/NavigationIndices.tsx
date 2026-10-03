"use client";

import * as React from "react";
import Link from "next/link";
import { PRIMARY_NAVIGATION_INDICES } from "@/config/navigation";
import { NavigationPlaneId, PrimaryIndexItem } from "@/types/navigation";

interface NavigationIndicesProps {
  onPlaneHover?: (planeId: NavigationPlaneId) => void;
  onNavigate: () => void;
}

export const NavigationIndices: React.FC<NavigationIndicesProps> = ({
  onPlaneHover,
  onNavigate,
}) => {
  return (
    <nav
      aria-label="Operating Indices"
      className="flex h-full w-full flex-col justify-between p-6 sm:p-8 lg:p-12"
    >
      <div className="flex flex-col">
        {/* Header Telemetry */}
        <div className="flex items-center justify-between border-b border-[rgba(137,152,173,0.15)] pb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8998AD]">
            DIRECTORY // 07 SECTORS
          </span>
          <span className="font-mono text-[10px] tracking-wider text-[#C7A76B]">
            SYSTEM INDEX
          </span>
        </div>

        {/* Numbered Sectors List */}
        <ul className="mt-4 flex flex-col divide-y divide-[rgba(137,152,173,0.1)]">
          {PRIMARY_NAVIGATION_INDICES.map((item: PrimaryIndexItem) => (
            <li key={item.index} className="relative">
              <Link
                href={item.href}
                onClick={onNavigate}
                onMouseEnter={() => {
                  if (item.planeTarget && onPlaneHover) {
                    onPlaneHover(item.planeTarget);
                  }
                }}
                className={`group flex items-center justify-between py-3.5 transition-colors duration-200 ${
                  item.isAction
                    ? "text-[#C7A76B]"
                    : "text-[#F4F7FC] hover:text-[#1675F8]"
                }`}
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#8998AD] transition-colors duration-200 group-hover:text-[#1675F8]">
                    {item.index}
                  </span>
                  <span className="font-sans text-lg font-bold tracking-tight sm:text-2xl">
                    {item.label}
                  </span>
                </div>

                <div className="hidden font-mono text-[10px] uppercase tracking-wider text-[#8998AD] md:block">
                  {item.telemetry}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Directory Terminal Footer */}
      <div className="mt-8 border-t border-[rgba(137,152,173,0.15)] pt-4 font-mono text-[10px] text-[#8998AD]">
        <div className="flex items-center justify-between">
          <span>BRIVYA ARCHITECTURE RUNTIME</span>
          <span>EST. 2026 // ENTERPRISE DEPLOYED</span>
        </div>
      </div>
    </nav>
  );
};