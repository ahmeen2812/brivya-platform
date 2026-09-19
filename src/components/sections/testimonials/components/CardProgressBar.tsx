"use client";

import React from "react";

export interface CardProgressBarProps {
  readonly progress: number; // 0 to 100
  readonly isPaused?: boolean;
  readonly className?: string;
}

export const CardProgressBar: React.FC<CardProgressBarProps> = ({
  progress,
  isPaused = false,
  className = "",
}) => {
  return (
    <div
      role="progressbar"
      aria-label="Active testimonial reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      /* Centered, occupying 88% of card width near the bottom edge */
      className={`w-[88%] mx-auto h-[3px] rounded-full bg-slate-200/70 overflow-hidden select-none ${className}`}
    >
      <div
        className="h-full bg-[#0A5FD7] rounded-full transition-[width] ease-linear"
        style={{
          width: `${Math.min(100, Math.max(0, progress))}%`,
          transitionDuration: isPaused ? "0ms" : "60ms",
        }}
      />
    </div>
  );
};