"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { ReviewItem, CarouselSlot } from "../types";

export interface ReviewCardProps {
  readonly review: ReviewItem;
  readonly slot: CarouselSlot;
  readonly progress?: number; // 0 to 100 for center card
}

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ review, slot, progress = 0 }, ref) => {
    const isCenter = slot === "center";

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        aria-label={`Review by ${review.name}`}
        aria-hidden={!isCenter}
        /* 
          Vertical Composition:
          Top Center Avatar -> Middle Center Quote -> Bottom Center Name
        */
        className={`relative w-full max-w-[440px] sm:max-w-[480px] md:max-w-[500px] rounded-2xl sm:rounded-3xl bg-white border p-7 sm:p-8 md:p-9 flex flex-col items-center text-center justify-between select-none transition-shadow duration-300 ${
          isCenter
            ? "border-slate-200/90 shadow-[0_16px_45px_-8px_rgba(6,22,44,0.09)] pointer-events-auto"
            : "border-slate-200/60 shadow-sm pointer-events-none"
        }`}
        style={{ minHeight: "330px" }}
      >
        {/* Subtle Background Specular Sheen Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white via-white to-slate-50/50 opacity-90 -z-10"
        />

        {/* 1. TOP CENTER: Circular Avatar Portrait / Initials */}
        <div className="flex flex-col items-center justify-center shrink-0">
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
        <div className="my-auto py-4 flex items-center justify-center">
          <p className="font-sans text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.7] text-[#334155] font-normal tracking-[-0.01em] text-center max-w-[94%]">
            &ldquo;{review.quote}&rdquo;
          </p>
        </div>

        {/* 3. BOTTOM CENTER: Customer's Name & Progress Underline */}
        <div className="w-full flex flex-col items-center justify-center shrink-0 pt-2">
          <h4 className="font-sans text-[15.5px] sm:text-[16.5px] font-bold text-[#06162C] tracking-tight">
            {review.name}
          </h4>

          {/* Active Center Card Progress Underline */}
          <div
            aria-hidden="true"
            className="w-16 h-[2.5px] rounded-full bg-slate-100 mt-2.5 overflow-hidden"
          >
            {isCenter && (
              <div
                className="h-full bg-[#0A5FD7] rounded-full transition-[width] ease-linear duration-100"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);

ReviewCard.displayName = "ReviewCard";