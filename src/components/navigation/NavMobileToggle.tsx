"use client";

import * as React from "react";

interface NavMobileToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NavMobileToggle: React.FC<NavMobileToggleProps> = ({
  isOpen,
  onToggle,
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="relative flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100/90 text-[#06162C] transition-colors duration-200 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8]"
    >
      <div className="relative flex h-4 w-4.5 flex-col justify-between items-center">
        {/* Top Bar: Translates down and rotates 45deg */}
        <span
          className={`h-[2px] w-full rounded-full bg-[#06162C] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0"
          }`}
        />

        {/* Middle Bar: Collapses scale to 0 and fades out */}
        <span
          className={`h-[2px] w-full rounded-full bg-[#06162C] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
          }`}
        />

        {/* Bottom Bar: Translates up and rotates -45deg */}
        <span
          className={`h-[2px] w-full rounded-full bg-[#06162C] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-0 rotate-0"
          }`}
        />
      </div>
    </button>
  );
};