"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { TestimonialItem } from "../types";

export interface ReviewCardProps {
  readonly review: TestimonialItem;
  readonly isActive: boolean;
  readonly cardIndex: number;
}

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ review, isActive, cardIndex }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        aria-label={`Review ${cardIndex + 1}: ${review.authorName}`}
        aria-hidden={!isActive}
        /* 
          Equal Height Standards:
          - h-full and min-h enforce uniform card heights across all slide items
          - flex-col justify-between anchors the header at the top and the category tag at the bottom
        */
        className={`relative w-full h-full min-h-[290px] sm:min-h-[310px] md:min-h-[320px] rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none shrink-0 ${
          isActive
            ? "opacity-100 scale-100 shadow-[0_12px_40px_-6px_rgba(6,22,44,0.08)] z-20 pointer-events-auto"
            : "opacity-40 sm:opacity-55 scale-[0.93] shadow-sm z-10 pointer-events-none"
        }`}
      >
        {/* Top Header: Author Avatar/Initials + Name & Credentials */}
        <div>
          <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-100">
            <div className="flex items-center gap-3 sm:gap-3.5">
              {/* Avatar Photo or Refined Initials Badge */}
              <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#EBF3FF] border border-[#CBDDF6] text-[#0A5FD7] font-sans font-bold text-sm overflow-hidden shadow-2xs">
                {review.authorAvatarUrl ? (
                  <Image
                    src={review.authorAvatarUrl}
                    alt={review.authorName}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  /* Fixed: className="tracking-wider" replaces the bare non-boolean attribute */
                  <span className="tracking-wider">{review.initials}</span>
                )}
              </div>

              <div className="flex flex-col">
                <span className="font-sans text-[14.5px] sm:text-[15.5px] font-bold text-[#06162C] leading-snug">
                  {review.authorName}
                </span>
                <span className="font-sans text-[11.5px] sm:text-[12px] text-[#64748B] leading-tight">
                  {review.authorRole} ·{" "}
                  <span className="text-[#06162C] font-medium">{review.authorCompany}</span>
                </span>
              </div>
            </div>

            {/* Optional Verified 5-Star Indicator */}
            {review.ratingStars && (
              <div
                className="hidden xs:flex items-center gap-0.5"
                aria-label={`${review.ratingStars} out of 5 stars`}
              >
                {[...Array(review.ratingStars)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-3.5 w-3.5 text-[#FBBC04]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
            )}
          </div>

          {/* Review Quote Typography (High readability, comfortable spacing) */}
          <p className="mt-4 sm:mt-5 font-sans text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.65] text-[#334155] font-normal tracking-[-0.01em]">
            &ldquo;{review.quote}&rdquo;
          </p>
        </div>

        {/* Bottom Category Pill Tag (Anchored to card floor) */}
        {review.categoryTag && (
          <div className="mt-4 sm:mt-5 flex items-center justify-start">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#0A5FD7] bg-sky-50 border border-[#0A5FD7]/15 rounded-md px-2 py-0.5 font-medium">
              {review.categoryTag}
            </span>
          </div>
        )}
      </div>
    );
  }
);

ReviewCard.displayName = "ReviewCard";