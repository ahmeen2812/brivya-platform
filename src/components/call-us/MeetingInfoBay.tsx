"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MeetingInfoBayProps } from "./types";

export const MeetingInfoBay: React.FC<MeetingInfoBayProps> = ({
  heading,
  description,
  secondaryDescription,
  durationLabel,
  illustrationPath,
  illustrationAlt,
  className = "",
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <div className={`flex flex-col justify-between h-full pr-0 lg:pr-6 ${className}`}>
      {/* 1. Header & Meeting Telemetry Metadata */}
      <div>
        {/* 30-Minute Meeting Duration Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-[#BACFE6] shadow-[0_2px_8px_rgba(7,54,109,0.04)] mb-4">
          <svg
            className="w-4 h-4 text-[#0A5FD7] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          </svg>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#06162C]">
            {durationLabel} Session
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#1675F8]" aria-hidden="true" />
          <span className="font-sans text-[11px] font-medium text-[#475569]">Video Call</span>
        </div>

        {/* Primary Section Heading */}
        <h1 className="font-sans text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-extrabold text-[#06162C] leading-[1.12] tracking-[-0.035em]">
          {heading}
        </h1>

        {/* Editorial Description */}
        <p className="mt-4 font-sans text-[14px] sm:text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
          {description}
        </p>

        <p className="mt-3 font-sans text-[14px] sm:text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
          {secondaryDescription}
        </p>

        {/* Architectural Direct Assurance Micro-Checklist */}
        <div className="mt-6 pt-5 border-t border-[#BACFE6]/60 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#0A5FD7] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-sans text-[12.5px] font-medium text-[#06162C]">
              No software installation required
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#0A5FD7] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-sans text-[12.5px] font-medium text-[#06162C]">
              Instant calendar invite & link
            </span>
          </div>
        </div>
      </div>

      {/* 2. Illustration Bay: Dedicated Asset Anchor */}
      <div className="relative w-full aspect-[16/11] max-w-[360px] sm:max-w-[380px] mt-8 mx-auto lg:mx-0 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={illustrationPath}
            alt={illustrationAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
            className="object-contain"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          /* Informative fallback box matching Brivya engineering guidelines */
          <div className="flex flex-col items-center justify-center text-center p-5 border border-dashed border-[#BACFE6] rounded-2xl w-full h-full bg-white/50 backdrop-blur-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0A5FD7] border border-[#CBDDF6] shadow-2xs mb-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="font-mono text-[11px] font-bold text-[#06162C]">
              Asset: {illustrationPath}
            </span>
            <span className="mt-1 text-[11px] text-[#64748B] leading-relaxed">
              Place call-us-illustration.png in public/call-us/assets/ to display automatically
            </span>
          </div>
        )}
      </div>
    </div>
  );
};