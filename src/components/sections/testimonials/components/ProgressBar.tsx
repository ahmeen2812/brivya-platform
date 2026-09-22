"use client";

import React from "react";

export interface ProgressBarProps {
  readonly progress: number; // 0 to 100
  readonly isPlaying: boolean;
  readonly className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  isPlaying,
  className = "",
}) => {
  return (
    <div
      role="progressbar"
      aria-label="Testimonial auto-slide timer"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative h-[3px] w-full max-w-[200px] sm:max-w-[260px] rounded-full bg-slate-200/90 overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-[#0A5FD7] transition-[width] ease-linear rounded-full"
        style={{
          width: `${Math.min(100, Math.max(0, progress))}%`,
          transitionDuration: isPlaying ? "80ms" : "0ms",
        }}
      />
    </div>
  );
};