"use client";

import * as React from "react";

interface LogoTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
  ariaControls: string;
}

export const LogoTrigger: React.FC<LogoTriggerProps> = ({
  isOpen,
  onToggle,
  ariaControls,
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={ariaControls}
      aria-label={isOpen ? "Collapse Brivya Fold Navigation" : "Unfold Brivya Navigation Architecture"}
      className="group relative flex items-center gap-3.5 bg-transparent p-2 text-left focus-visible:outline-none"
    >
      {/* Precision Angular B Monogram Glyph */}
      <div className="relative flex h-10 w-10 items-center justify-center border border-[#8998AD]/30 bg-[#07366D]/30 transition-all duration-300 group-hover:border-[#1675F8] group-hover:bg-[#07366D]/60 chamfer-sm">
        <svg
          viewBox="0 0 40 40"
          className="h-6 w-6 transition-transform duration-500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Monogram Spine */}
          <path
            d="M8 6H22C26.4183 6 30 9.58172 30 14C30 16.7118 28.6508 19.108 26.581 20.5303C29.176 22.0321 31 24.8093 31 28C31 32.4183 27.4183 36 23 36H8V6Z"
            className="stroke-[#F4F7FC] transition-colors duration-300 group-hover:stroke-[#1675F8]"
            strokeWidth="2.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Inner Architectural Struts */}
          <path
            d="M8 20H23C25.2091 20 27 18.2091 27 16C27 13.7909 25.2091 12 23 12H15"
            className={`stroke-[#8998AD] transition-all duration-300 ${
              isOpen ? "stroke-[#C7A76B]" : "group-hover:stroke-[#F4F7FC]"
            }`}
            strokeWidth="1.8"
          />
          <path
            d="M8 28H23.5C25.9853 28 28 25.9853 28 23.5"
            className={`stroke-[#8998AD] transition-all duration-300 ${
              isOpen ? "stroke-[#1675F8]" : "group-hover:stroke-[#F4F7FC]"
            }`}
            strokeWidth="1.8"
          />
        </svg>

        {/* Tactical status diode */}
        <span
          className={`absolute -right-1 -top-1 h-2 w-2 border border-[#06162C] transition-colors duration-300 ${
            isOpen ? "bg-[#C7A76B]" : "bg-[#1675F8] group-hover:bg-[#F4F7FC]"
          }`}
        />
      </div>

      {/* Brand Nomenclature & State Telemetry */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold tracking-[0.12em] text-[#F4F7FC]">
            BRIVYA
          </span>
          <span className="font-mono text-[10px] text-[#8998AD]">OS</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-[#8998AD]">
          <span
            className={`h-1.5 w-1.5 transition-colors duration-200 ${
              isOpen ? "bg-[#C7A76B]" : "bg-[#10B981]"
            }`}
          />
          <span>{isOpen ? "PLANE: UNFOLDED" : "SYSTEM: ACTIVE"}</span>
        </div>
      </div>
    </button>
  );
};