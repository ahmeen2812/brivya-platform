"use client";

import * as React from "react";
import { MAIN_WHEEL_DIMENSIONS } from "@/config/heroMainWheelData";

export const MainWheelOrbitPath: React.FC = () => {
  const { cx, cy, orbitRadius, arcStartDeg, arcSpanDeg } = MAIN_WHEEL_DIMENSIONS;

  // Exact 144° trigonometric arc math (-72° to +72°)
  const degToRad = (deg: number) => (deg * Math.PI) / 180;
  const startRad = degToRad(arcStartDeg);
  const endRad = degToRad(arcStartDeg + arcSpanDeg);

  const startX = cx + orbitRadius * Math.cos(startRad);
  const startY = cy + orbitRadius * Math.sin(startRad);
  const endX = cx + orbitRadius * Math.cos(endRad);
  const endY = cy + orbitRadius * Math.sin(endRad);

  // SVG Arc command: 144° < 180°, so large-arc-flag is 0, sweep-flag is 1
  const mainArcD = `M ${startX} ${startY} A ${orbitRadius} ${orbitRadius} 0 0 1 ${endX} ${endY}`;

  // Inner concentric guide line at radius - 14px
  const innerR = orbitRadius - 14;
  const innerArcD = `M ${cx + innerR * Math.cos(startRad)} ${cy + innerR * Math.sin(startRad)} A ${innerR} ${innerR} 0 0 1 ${cx + innerR * Math.cos(endRad)} ${cy + innerR * Math.sin(endRad)}`;

  return (
    <g className="pointer-events-none">
      <defs>
        {/* Soft fading gradient: 0% opacity at ends, 95% opacity at apex */}
        <linearGradient id="mainWheel144Grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
          <stop offset="14%" stopColor="#CBD5E1" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#64748B" stopOpacity="0.95" />
          <stop offset="86%" stopColor="#CBD5E1" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. Primary 144° Visible Orbit Track */}
      <path
        d={mainArcD}
        stroke="url(#mainWheel144Grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 2. Concentric Dashed Inner Guide Track */}
      <path
        d={innerArcD}
        stroke="url(#mainWheel144Grad)"
        strokeWidth="0.8"
        strokeDasharray="3 5"
        opacity="0.4"
      />

      {/* 3. Astronomical Coordinate Tick at Apex (0° / 360°) */}
      <line
        x1={cx + orbitRadius - 4}
        y1={cy}
        x2={cx + orbitRadius + 4}
        y2={cy}
        stroke="#94A3B8"
        strokeWidth="1.2"
        opacity="0.8"
      />
    </g>
  );
};