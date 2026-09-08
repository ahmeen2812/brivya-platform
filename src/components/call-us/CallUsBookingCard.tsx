"use client";

import React from "react";
import { SITE_CONTACT } from "@/config/siteContact";
import { MeetingInfoBay } from "./MeetingInfoBay";
import { CalendlyEmbed } from "./CalendlyEmbed";

export const CallUsBookingCard: React.FC = () => {
  const { meeting } = SITE_CONTACT;

  return (
    <div
      /* 
        Master Brivya Card Chassis:
        Uses the exact soft blue-gray gradient substrate from reviews and inquiry:
        from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] with border-[#BACFE6]
      */
      className="relative w-full rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 sm:p-8 lg:p-10 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] overflow-hidden select-none"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* =================================================================== */}
        {/* LEFT BAY — (~40% Desktop Width): Title, 30m Duration & Illustration */}
        {/* =================================================================== */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <MeetingInfoBay
            heading={meeting.heading}
            description={meeting.description}
            secondaryDescription={meeting.secondaryDescription}
            durationLabel={meeting.durationLabel}
            illustrationPath={meeting.illustrationPath}
            illustrationAlt={meeting.illustrationAlt}
          />
        </div>

        {/* =================================================================== */}
        {/* RIGHT BAY — (~60% Desktop Width): Official Calendly Inline Widget   */}
        {/* =================================================================== */}
        <div className="lg:col-span-7 flex flex-col justify-start border-t lg:border-t-0 lg:border-l border-[#BACFE6]/70 pt-8 lg:pt-0 lg:pl-10">
          <CalendlyEmbed
            url={meeting.calendlyUrl}
            primaryColor={meeting.theme.primaryColor}
            textColor={meeting.theme.textColor}
            backgroundColor={meeting.theme.backgroundColor}
          />
        </div>
      </div>
    </div>
  );
};