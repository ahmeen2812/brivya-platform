"use client";

import * as React from "react";
import { PRECISION_CONTENT } from "./content";
import { VisualPlateNode } from "./types";
import {
  PrecisionCrosshairIcon,
  PrecisionPulseIcon,
  PrecisionCheckmarkIcon,
  PrecisionCodeBracketIcon,
} from "./icons";

export interface PrecisionVisualPlateProps {
  plateRef?: React.RefObject<HTMLDivElement | null>;
  overlayRef?: React.RefObject<HTMLDivElement | null>;
}

export const PrecisionVisualPlate: React.FC<PrecisionVisualPlateProps> = ({
  plateRef,
  overlayRef,
}) => {
  const [activePinId, setActivePinId] = React.useState<string | null>(
    PRECISION_CONTENT.plateNodes[0].id,
  );

  const activeNode = React.useMemo(() => {
    return (
      PRECISION_CONTENT.plateNodes.find((n) => n.id === activePinId) ||
      PRECISION_CONTENT.plateNodes[0]
    );
  }, [activePinId]);

  return (
    <div
      ref={plateRef}
      className="relative w-full max-w-[1360px] mx-auto rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_24px_-4px_rgba(6,22,44,0.06)] overflow-hidden select-none"
    >
      {/* 1. Top Plate Telemetry Ruler Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-100 bg-slate-50/70 text-[10.5px] font-mono text-[#8998AD]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#06162C] font-semibold">
            <PrecisionCodeBracketIcon className="h-3.5 w-3.5 text-[#0A5FD7]" />
            <span>ARCHITECTURE // PRODUCTION_SCHEMATIC</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="hidden sm:inline">NODES: 04 VERIFIED</span>
        </div>

        <div className="flex items-center gap-2">
          <PrecisionPulseIcon className="h-1.5 w-1.5" />
          <span className="text-[#059669] font-semibold">LIVE SUBSYSTEM ACTIVE</span>
        </div>
      </div>

      {/* 2. The Architectural Blueprint Schematic Stage */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] p-6 sm:p-8 flex items-center justify-center bg-gradient-to-b from-white to-[#F8FAFC]">
        {/* Fine Architectural Concentric Hairline Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#06162C_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"
        />

        {/* Central Schematic Geometry Wireframe */}
        <div className="relative w-full max-w-[840px] h-full flex items-center justify-center">
          {/* Outer Schematic Frame Ring */}
          <div className="absolute inset-4 sm:inset-8 rounded-xl border border-dashed border-slate-200/90 pointer-events-none" />
          
          {/* Horizontal Center Communication Conduit */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none" />

          {/* Vertical Center Axis */}
          <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent pointer-events-none" />

          {/* Interactive Inspection Coordinate Pins */}
          {PRECISION_CONTENT.plateNodes.map((node: VisualPlateNode) => {
            const isSelected = activePinId === node.id;

            return (
              <div
                key={node.id}
                style={{
                  left: `${node.coordinatePercent.x}%`,
                  top: `${node.coordinatePercent.y}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                onMouseEnter={() => setActivePinId(node.id)}
                onClick={() => setActivePinId(node.id)}
              >
                <div
                  className={`group relative flex items-center gap-2 px-2.5 py-1.5 rounded-lg border transition-all duration-200 ${
                    isSelected
                      ? "bg-[#06162C] border-[#06162C] text-white shadow-md scale-105"
                      : "bg-white border-slate-200/90 text-[#475569] hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isSelected ? "bg-[#10B981]" : "bg-[#0A5FD7]"
                    }`}
                  />
                  <span className="font-mono text-[10px] font-bold tracking-tight">
                    {node.label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Live Node Telemetry Display Pod (Center Stage) */}
          <div
            ref={overlayRef}
            className="relative z-10 flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_30px_-6px_rgba(6,22,44,0.08)] text-center max-w-[340px]"
          >
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#059669] font-mono text-[9px] font-bold">
              <PrecisionCheckmarkIcon className="h-3 w-3" />
              <span>{activeNode.status.toUpperCase()} ARCHITECTURE</span>
            </div>

            <span className="mt-2.5 font-mono text-sm sm:text-base font-bold text-[#06162C] tracking-tight">
              {activeNode.label}
            </span>

            <p className="mt-1 font-sans text-xs text-[#475569] leading-snug">
              {activeNode.specification}
            </p>

            <div className="mt-3 pt-2.5 w-full border-t border-slate-100 flex items-center justify-between font-mono text-[9.5px] text-[#8998AD]">
              <span>VERIFIED PROTOCOL</span>
              <span className="text-[#0A5FD7] font-semibold">100% RELIABILITY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};