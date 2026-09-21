"use client";

import React from "react";
import { ProgressBar } from "./ProgressBar";

export interface CarouselControlsProps {
  readonly onPrev: () => void;
  readonly onNext: () => void;
  readonly onTogglePlay: () => void;
  readonly isPlaying: boolean;
  readonly progress: number;
  readonly currentIndex: number;
  readonly totalCount: number;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrev,
  onNext,
  onTogglePlay,
  isPlaying,
  progress,
  currentIndex,
  totalCount,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-[540px] sm:max-w-[580px] md:max-w-[620px] mx-auto mt-7 sm:mt-8 select-none">
      {/* Left Pod: Progress Track and Telemetry Counter */}
      <div className="flex items-center gap-3.5 w-full sm:w-auto justify-center sm:justify-start">
        <ProgressBar progress={progress} isPlaying={isPlaying} />
        <span className="font-mono text-[11px] font-bold tracking-wider text-[#64748B] whitespace-nowrap shrink-0">
          0{currentIndex + 1} <span className="text-slate-300">/</span> 0{totalCount}
        </span>
      </div>

      {/* Right Pod: Circular Navigation Controls & Play/Pause */}
      <div className="flex items-center gap-2.5 shrink-0">
        {/* Play / Pause Toggle Button */}
        <button
          type="button"
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200/90 text-[#475569] shadow-2xs transition-all duration-200 hover:border-[#0A5FD7] hover:text-[#0A5FD7] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
        >
          {isPlaying ? (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        {/* Previous Button */}
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white border border-slate-200/90 text-[#06162C] shadow-2xs transition-all duration-200 hover:border-[#0A5FD7] hover:bg-[#0A5FD7] hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          aria-label="Next testimonial"
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white border border-slate-200/90 text-[#06162C] shadow-2xs transition-all duration-200 hover:border-[#0A5FD7] hover:bg-[#0A5FD7] hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};