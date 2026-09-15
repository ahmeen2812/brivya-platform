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
        /* 
          Vertical Composition:
          Top Center Avatar -> Middle Center Quote -> Bottom Center Name -> 88% Wide Progress Bar
        */
        className={`group relative w-full max-w-[430px] sm:max-w-[470px] md:max-w-[490px] min-h-[330px] sm:min-h-[345px] md:min-h-[355px] rounded-2xl sm:rounded-3xl bg-white border flex flex-col items-center text-center justify-between p-6 sm:p-7 md:p-8 select-none transition-all duration-300 overflow-hidden ${
          isCenter
            ? "border-slate-200/90 shadow-[0_16px_45px_-8px_rgba(6,22,44,0.09)] pointer-events-auto"
            : "border-slate-200/60 shadow-sm pointer-events-none"
        }`}
      >
        {/* Subtle Background Texture */}
        <ReviewCardTexture isActive={isCenter} />

        {/* 1. TOP CENTER: Circular Avatar Portrait / Initials */}
        <div className="relative z-10 flex flex-col items-center justify-center shrink-0 pt-1">
          <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#EBF3FF] to-[#DFEDFF] border-2 border-white text-[#0A5FD7] font-sans font-bold text-base shadow-sm overflow-hidden">
            {review.avatarUrl ? (
              <Image
                src={review.avatarUrl}
                alt={review.name}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="tracking-wider">{review.initials}</span>
            )}
          </div>
        </div>

        {/* 2. MIDDLE CENTER: Review Text in Quotation Marks */}
        <div className="relative z-10 my-auto py-3 sm:py-4 flex items-center justify-center">
          <p className="font-sans text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.7] text-[#334155] font-normal tracking-[-0.01em] text-center max-w-[92%]">
            &ldquo;{review.quote}&rdquo;
          </p>
        </div>

        {/* 3. BOTTOM CENTER: Customer's Name & Wide Horizontal Progress Bar */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center shrink-0 pb-1">
          <h4 className="font-sans text-[15.5px] sm:text-[16.5px] font-bold text-[#06162C] tracking-tight">
            {review.name}
          </h4>

          {/* 
            Wide Horizontal Progress Bar:
            Occupies 88% width near the bottom inside edge of the card.
            Animated directly via GSAP without React state re-rendering lag.
          */}
          <div
            aria-hidden="true"
            className="w-[88%] mx-auto h-[3px] rounded-full bg-slate-200/70 overflow-hidden mt-5"
          >
            {isCenter && (
              <div
                ref={progressRef}
                className="h-full bg-[#0A5FD7] rounded-full origin-left will-change-transform"
                style={{ transform: "scaleX(0)" }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);

ReviewCard.displayName = "ReviewCard";