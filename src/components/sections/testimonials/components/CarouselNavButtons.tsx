"use client";

import React from "react";

export interface CarouselNavButtonsProps {
  readonly onMoveLeft: () => void;
  readonly onMoveRight: () => void;
  readonly isAnimating: boolean;
}

export const CarouselNavButtons: React.FC<CarouselNavButtonsProps> = ({
  onMoveLeft,
  onMoveRight,
  isAnimating,
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-10 select-none">
      {/* 
        LEFT Arrow Button (←):
        Shifts all cards toward the LEFT; right review becomes center active review
      */}
      <button
        type="button"
        onClick={onMoveLeft}
        disabled={isAnimating}
        aria-label="Shift reviews left"
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] transition-all duration-300 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-105 active:scale-95 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
      >
        <svg
          className="h-4.5 w-4.5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:-translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* 
        RIGHT Arrow Button (→):
        Shifts all cards toward the RIGHT; left review becomes center active review
      */}
      <button
        type="button"
        onClick={onMoveRight}
        disabled={isAnimating}
        aria-label="Shift reviews right"
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] transition-all duration-300 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-105 active:scale-95 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
      >
        <svg
          className="h-4.5 w-4.5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};