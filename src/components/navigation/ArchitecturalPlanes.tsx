"use client";

import * as React from "react";
import Link from "next/link";
import { ARCHITECTURAL_PLANES } from "@/config/navigation";
import { NavigationPlaneId } from "@/types/navigation";

interface ArchitecturalPlanesProps {
  activePlane: NavigationPlaneId;
  onPlaneSelect: (planeId: NavigationPlaneId) => void;
  onNavigate: () => void;
}

export const ArchitecturalPlanes: React.FC<ArchitecturalPlanesProps> = ({
  activePlane,
  onPlaneSelect,
  onNavigate,
}) => {
  return (
    <div className="grid h-full w-full grid-cols-1 border-b border-[rgba(137,152,173,0.15)] lg:grid-cols-3 lg:border-b-0 lg:border-r">
      {ARCHITECTURAL_PLANES.map((plane) => {
        const isSelected = activePlane === plane.id;

        return (
          <div
            key={plane.id}
            onMouseEnter={() => onPlaneSelect(plane.id)}
            className={`group relative flex flex-col justify-between border-b border-[rgba(137,152,173,0.15)] p-6 transition-all duration-300 lg:border-b-0 lg:border-r lg:p-8 ${
              isSelected
                ? "bg-[#07366D]/20 lg:bg-[#07366D]/30"
                : "bg-transparent hover:bg-[#07366D]/10"
            }`}
          >
            {/* Plane Header Telemetry */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#8998AD]">
                  {plane.index}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-widest ${
                    isSelected ? "text-[#C7A76B]" : "text-[#8998AD]"
                  }`}
                >
                  {plane.telemetry.latencyTarget}
                </span>
              </div>

              <div>
                <h3 className="font-mono text-xl font-bold tracking-tight text-[#F4F7FC]">
                  {plane.designation}
                </h3>
                <p className="mt-1 text-xs text-[#8998AD]">{plane.title}</p>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-[#8998AD]/80">
                {plane.thesis}
              </p>
            </div>

            {/* Subsystem Pipelines */}
            <div className="my-6 flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#C7A76B]">
                // ACTIVE PIPELINES
              </span>
              <div className="flex flex-col gap-2">
                {plane.subsystems.map((sub) => (
                  <Link
                    key={sub.id}
                    href={sub.href}
                    onClick={onNavigate}
                    className="group/item flex flex-col border border-[rgba(137,152,173,0.12)] bg-[#06162C]/60 p-3 transition-all duration-200 hover:border-[#1675F8]/60 hover:bg-[#0A1D36]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#1675F8]">
                        {sub.code}
                      </span>
                      <span className="font-mono text-[9px] text-[#8998AD] transition-transform duration-200 group-hover/item:translate-x-0.5">
                        ↗
                      </span>
                    </div>
                    <span className="mt-1 font-sans text-xs font-semibold text-[#F4F7FC]">
                      {sub.title}
                    </span>
                    <span className="mt-0.5 text-[11px] leading-snug text-[#8998AD]">
                      {sub.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Plane Telemetry Footer */}
            <div className="flex items-center justify-between border-t border-[rgba(137,152,173,0.15)] pt-3 font-mono text-[10px] text-[#8998AD]">
              <span>CORE: {plane.telemetry.stackFocus}</span>
              <span className="text-[#C7A76B]">{plane.telemetry.metricLead}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};