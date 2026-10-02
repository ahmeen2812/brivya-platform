"use client";

import * as React from "react";
import Link from "next/link";
import { LogoTrigger } from "./LogoTrigger";

interface NavigationSpineProps {
  isOpen: boolean;
  onToggle: () => void;
  activePlane: string;
}

export const NavigationSpine: React.FC<NavigationSpineProps> = ({
  isOpen,
  onToggle,
  activePlane,
}) => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[rgba(137,152,173,0.15)] bg-[#06162C]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1780px] items-center justify-between px-4 sm:px-8 md:px-12">
        {/* Core Monogram Engine Trigger */}
        <div className="flex items-center gap-6">
          <LogoTrigger
            isOpen={isOpen}
            onToggle={onToggle}
            ariaControls="brivya-architectural-overlay"
          />
          <div className="hidden h-6 w-[1px] bg-[#8998AD]/20 lg:block" />
          <div className="hidden font-mono text-[11px] tracking-wider text-[#8998AD] lg:block">
            <span className="text-[#C7A76B]">NODE:</span> PROD-DXB-01 // LATENCY: 24ms
          </div>
        </div>

        {/* System Coordinates & Quick Sector Selectors */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden items-center gap-2 font-mono text-[11px] tracking-widest text-[#8998AD] md:flex">
            <span className="text-[#1675F8]">ACTIVE SECTOR:</span>
            <span className="font-semibold text-[#F4F7FC]">
              {isOpen ? `[ PLANE // ${activePlane.toUpperCase()} ]` : "[ RUNTIME ]"}
            </span>
          </div>

          {/* Direct CTA Pipeline */}
          <Link
            href="/start-project"
            className="group relative inline-flex h-10 items-center justify-center border border-[#1675F8]/40 bg-[#0A5FD7] px-4 font-mono text-xs font-medium uppercase tracking-wider text-[#F4F7FC] transition-all duration-200 hover:border-[#1675F8] hover:bg-[#1675F8] active:translate-y-[1px] chamfer-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>START PROJECT</span>
              <span className="text-[#F4F7FC] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};