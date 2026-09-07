"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_CONTACT } from "@/config/siteContact";
import { MeetingInfoBay } from "./MeetingInfoBay";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { INQUIRY_MOTION } from "@/components/sections/inquiry/animations/animationConfig";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const CallUsBookingCard: React.FC = () => {
  const { meeting } = SITE_CONTACT;

  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const leftBayRef = useRef<HTMLDivElement | null>(null);
  const rightBayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardContainerRef.current) return;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardContainerRef.current,
          start: "top 92%",
          toggleActions: INQUIRY_MOTION.scrollTrigger.toggleActions,
        },
        onComplete: () => {
          if (cardContainerRef.current) {
            gsap.set(cardContainerRef.current, { filter: "none", clearProps: "filter" });
          }
        },
      });

      // 1. Soft Card Elevation & Settle
      masterTl.fromTo(
        cardContainerRef.current,
        {
          autoAlpha: 0,
          y: INQUIRY_MOTION.travel.desktopCardY,
          scale: INQUIRY_MOTION.depth.initialScaleCard,
          filter: INQUIRY_MOTION.depth.initialBlur,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: INQUIRY_MOTION.depth.clearedBlur,
          duration: INQUIRY_MOTION.durations.cardSettle,
          ease: INQUIRY_MOTION.easings.executiveDecel,
        },
        0
      );

      // 2. Left Bay Elements Entrance
      if (leftBayRef.current) {
        masterTl.fromTo(
          leftBayRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: INQUIRY_MOTION.easings.powerOut },
          0.18
        );
      }

      // 3. Right Bay Calendly Container Emergence
      if (rightBayRef.current) {
        masterTl.fromTo(
          rightBayRef.current,
          { autoAlpha: 0, y: 24, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: INQUIRY_MOTION.easings.powerOut },
          0.26
        );
      }
    }, cardContainerRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardContainerRef}
      /* 
        Master Brivya Substrate Card:
        Matches results, reviews, and inquiry cards:
        from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] with border-[#BACFE6]
      */
      className="relative w-full rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 sm:p-8 lg:p-10 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] overflow-hidden select-none will-change-transform"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* =================================================================== */}
        {/* LEFT BAY — (~40% Desktop Width): Title, 30m Duration & Illustration */}
        {/* =================================================================== */}
        <div ref={leftBayRef} className="lg:col-span-5 flex flex-col justify-between will-change-transform">
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
        <div
          ref={rightBayRef}
          className="lg:col-span-7 flex flex-col justify-start border-t lg:border-t-0 lg:border-l border-[#BACFE6]/70 pt-8 lg:pt-0 lg:pl-10 will-change-transform"
        >
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