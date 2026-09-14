"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { ReviewItem, CarouselSlot } from "../types";
import { ReviewCardTexture } from "../textures/ReviewCardTexture";

export interface ReviewCardProps {
  readonly review: ReviewItem;
  readonly slot: CarouselSlot;
  readonly progressRef?: React.RefObject<HTMLDivElement | null>;
  readonly onCardMouseEnter?: () => void;
  readonly onCardMouseLeave?: () => void;
}

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ review, slot, progressRef, onCardMouseEnter, onCardMouseLeave }, ref) => {
    const isCenter = slot === "center";

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        aria-label={`Review by ${review.name}`}
        aria-hidden={!isCenter}
        onMouseEnter={onCardMouseEnter}
        onMouseLeave={onCardMouseLeave}
        className={`group relative w-full max-w-[440px] sm:max-w-[480px] md:max-w-[500px] min-h-[350px] sm:min-h-[365px] md:min-h-[375px] rounded-2xl sm:rounded-3xl bg-white border flex flex-col items-center text-center justify-between p-6 sm:p-7 md:p-8 select-none transition-all duration-300 overflow-hidden ${
          isCenter
            ? "border-slate-200/90 shadow-[0_16px_45px_-8px_rgba(6,22,44,0.09)] pointer-events-auto"
            : "border-slate-200/60 shadow-sm pointer-events-none opacity-45 sm:opacity-55"
        }`}
      >
        {/* 1. Subtle Architectural Vector Texture */}
        <ReviewCardTexture isActive={isCenter} />

        {/* 2. TOP CENTER: Enlarged Circular Avatar (68px mobile -> 76px desktop) */}
        <div className="relative z-10 flex flex-col items-center justify-center shrink-0 pt-1">
          <div className="relative flex h-[68px] w-[68px] sm:h-[76px] sm:w-[76px] items-center justify-center rounded-full bg-gradient-to-br from-[#EBF3FF] to-[#DFEDFF] border-2 border-white text-[#0A5FD7] font-sans font-bold text-lg shadow-[0_4px_14px_rgba(10,95,215,0.12)] overflow-hidden">
            {review.avatarUrl ? (
              <Image
                src={review.avatarUrl}
                alt={review.name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="tracking-wider text-base sm:text-lg">{review.initials}</span>
            )}
          </div>
        </div>

        {/* 3. MIDDLE CENTER: Review Text in Quotation Marks */}
        <div className="relative z-10 my-auto py-3 sm:py-4 flex items-center justify-center">
          <p className="font-sans text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.7] text-[#334155] font-normal tracking-[-0.01em] text-center max-w-[92%]">
            &ldquo;{review.quote}&rdquo;
          </p>
        </div>

        {/* 4. BOTTOM CENTER: Customer Name & 88% Wide Progress Bar */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center shrink-0 pb-1">
          <h4 className="font-sans text-[15.5px] sm:text-[16.5px] font-bold text-[#06162C] tracking-tight">
            {review.name}
          </h4>

          {/* 
            Wide Horizontal Progress Bar Track (88% width):
            Permanently in the DOM at scaleX(0) so it never flashes full.
            Opacity transitions cleanly when the card becomes active.
          */}
          <div
            aria-hidden="true"
            className="w-[88%] mx-auto h-[3px] rounded-full bg-slate-200/70 overflow-hidden mt-5"
          >
            <div
              ref={isCenter ? progressRef : undefined}
              className={`h-full bg-[#0A5FD7] rounded-full origin-left will-change-transform transition-opacity duration-300 ${
                isCenter ? "opacity-100" : "opacity-0"
              }`}
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    );
  }
);

ReviewCard.displayName = "ReviewCard";