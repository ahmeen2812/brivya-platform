"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { ReviewItem, CarouselSlot } from "../types";
import { ReviewCardTexture } from "../textures/ReviewCardTexture";
import { CardProgressBar } from "./CardProgressBar";

export interface ReviewCardProps {
  readonly review: ReviewItem;
  readonly slot: CarouselSlot;
  readonly progress?: number; // 0 to 100 for active center card
  readonly isPaused?: boolean;
  readonly onCardMouseEnter?: () => void;
  readonly onCardMouseLeave?: () => void;
}

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
  (
    {
      review,
      slot,
      progress = 0,
      isPaused = false,
      onCardMouseEnter,
      onCardMouseLeave,
    },
    ref
  ) => {
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
          Refined Visual Quality:
          - Equal-height layout (min-h-[340px] sm:min-h-[355px] md:min-h-[365px])
          - Prominent center card with elevated shadow; subdued side cards
        */
        className={`group relative w-full max-w-[440px] sm:max-w-[480px] md:max-w-[500px] min-h-[340px] sm:min-h-[355px] md:min-h-[365px] rounded-2xl sm:rounded-3xl bg-white border flex flex-col items-center text-center justify-between p-6 sm:p-7 md:p-8 select-none transition-all duration-400 overflow-hidden ${
          isCenter
            ? "border-slate-200/90 shadow-[0_16px_45px_-8px_rgba(6,22,44,0.09)] pointer-events-auto"
            : "border-slate-200/60 shadow-sm pointer-events-none opacity-45 sm:opacity-55"
        }`}
      >
        {/* 1. Subtle Architectural Vector Texture Background */}
        <ReviewCardTexture isActive={isCenter} />

        {/* 2. TOP CENTER: Circular Avatar Portrait / Initials */}
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

        {/* 3. MIDDLE CENTER: Review Text in Quotation Marks */}
        <div className="relative z-10 my-auto py-3 sm:py-4 flex items-center justify-center">
          <p className="font-sans text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.7] text-[#334155] font-normal tracking-[-0.01em] text-center max-w-[92%]">
            &ldquo;{review.quote}&rdquo;
          </p>
        </div>

        {/* 4. BOTTOM CENTER: Customer's Name & Wide Progress Indicator */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center shrink-0 pb-1">
          <h4 className="font-sans text-[15.5px] sm:text-[16.5px] font-bold text-[#06162C] tracking-tight">
            {review.name}
          </h4>

          {/* Wide Horizontal Progress Bar (88% Width) near bottom edge */}
          <div className="w-full mt-5">
            {isCenter && (
              <CardProgressBar progress={progress} isPaused={isPaused} />
            )}
          </div>
        </div>
      </div>
    );
  }
);

ReviewCard.displayName = "ReviewCard";