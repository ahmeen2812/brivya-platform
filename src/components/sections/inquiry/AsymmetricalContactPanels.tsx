"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INQUIRY_CONTENT } from "./content";
import { SITE_CONTACT } from "@/config/siteContact";
import { initAsymmetricalPanelsAnimation } from "./animations/ContactPanelsAnimation";
import { animatePanelHover } from "./animations/ContactHoverEffects";

export const AsymmetricalContactPanels: React.FC = () => {
  const { directContactHeading, locationHeading } = INQUIRY_CONTENT;
  const { channels, presence } = SITE_CONTACT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rightPanelRef = useRef<HTMLDivElement | null>(null);
  const leftPanelRef = useRef<HTMLDivElement | null>(null);

  const rightHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const leftHeadingRef = useRef<HTMLHeadingElement | null>(null);

  const rightChannelsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftChannelsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rightNoteRef = useRef<HTMLParagraphElement | null>(null);
  const leftNoteRef = useRef<HTMLParagraphElement | null>(null);

  // Icon References for isolated hover micro-interactions
  const emailIconRef = useRef<HTMLDivElement | null>(null);
  const phoneIconRef = useRef<HTMLDivElement | null>(null);
  const locationIconRef = useRef<HTMLDivElement | null>(null);
  const hoursIconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initAsymmetricalPanelsAnimation({
      container: containerRef.current,
      rightPanel: rightPanelRef.current,
      leftPanel: leftPanelRef.current,
      rightHeading: rightHeadingRef.current,
      leftHeading: leftHeadingRef.current,
      rightChannels: rightChannelsRefs.current,
      leftChannels: leftChannelsRefs.current,
      rightNote: rightNoteRef.current,
      leftNote: leftNoteRef.current,
    });

    // Synchronize ScrollTrigger geometry post hydration
    ScrollTrigger.refresh();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      /*
        Container Breathing Room:
        - pt-3 pb-4 -my-3 provides 12px vertical clearance so -6px hover lift and box-shadow never get clipped.
        - overflow-x-clip prevents horizontal scrollbars without clipping vertical transform coordinates.
      */
      className="w-full flex flex-col space-y-7 sm:space-y-9 select-none pt-3 pb-4 -my-3 overflow-x-clip"
    >
      {/* =================================================================== */}
      {/* PANEL 1 — DIRECT CONTACT: Emerges from RIGHT edge with edge blend   */}
      {/* =================================================================== */}
      <div
        ref={rightPanelRef}
        className="w-full lg:w-[74%] xl:w-[70%] ml-auto pt-2 pb-2 will-change-transform"
      >
        <div
          onMouseEnter={() => {
            animatePanelHover(rightPanelRef.current, emailIconRef.current, true);
          }}
          onMouseLeave={() => {
            animatePanelHover(rightPanelRef.current, emailIconRef.current, false);
          }}
          /* 
            Edge-to-Background Integration:
            - Left corners: smoothly rounded (rounded-l-2xl sm:rounded-l-3xl)
            - Right corners: straight flush to page boundary (lg:rounded-r-none)
            - Border-r-0 prevents hard demarcation line on viewport edge
            - Removed card overflow-hidden so upper specular highlight and lift shadow expand cleanly
          */
          className="group/panel relative rounded-2xl sm:rounded-3xl lg:rounded-r-none lg:rounded-l-3xl border border-[#BACFE6] lg:border-r-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 sm:p-8 lg:p-9 lg:pr-14 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] transition-colors duration-300 hover:border-[#0A5FD7]/40"
        >
          {/* Architectural Edge Fade: Blends right edge seamlessly into page background */}
          <div
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FC]/70 via-[#F4F7FC]/20 to-transparent z-20 rounded-r-none"
          />

          <div className="relative z-10 flex flex-col">
            <h3
              ref={rightHeadingRef}
              className="font-sans text-[20px] sm:text-[23px] font-bold text-[#06162C] tracking-tight mb-4 will-change-transform"
            >
              {directContactHeading}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-3 border-t border-[#BACFE6]/60">
              {/* Business Email Channel */}
              <div
                ref={(el) => {
                  rightChannelsRefs.current[0] = el;
                }}
                className="flex items-start gap-3 will-change-transform"
              >
                <div
                  ref={emailIconRef}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/85 text-[#0A5FD7] border border-[#CBDDF6] shadow-2xs transition-transform duration-300"
                >
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${channels.email}`}
                    className="font-sans text-sm font-semibold text-[#06162C] hover:text-[#0A5FD7] transition-colors"
                  >
                    {channels.email}
                  </a>
                </div>
              </div>

              {/* Telephone Contact Channel */}
              <div
                ref={(el) => {
                  rightChannelsRefs.current[1] = el;
                }}
                className="flex items-start gap-3 will-change-transform"
              >
                <div
                  ref={phoneIconRef}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/85 text-[#0A5FD7] border border-[#CBDDF6] shadow-2xs transition-transform duration-300"
                >
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                    Phone Direct
                  </span>
                  <a
                    href={`tel:${channels.phone}`}
                    className="font-sans text-sm font-semibold text-[#06162C] hover:text-[#0A5FD7] transition-colors"
                  >
                    {channels.phone}
                  </a>
                </div>
              </div>
            </div>

            <p ref={rightNoteRef} className="mt-3.5 text-[12px] font-sans text-[#64748B] will-change-transform">
              {channels.responseTimeNote}
            </p>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* PANEL 2 — LOCATION & AVAILABILITY: Emerges from LEFT edge           */}
      {/* =================================================================== */}
      <div
        ref={leftPanelRef}
        className="w-full lg:w-[74%] xl:w-[70%] mr-auto pt-2 pb-2 will-change-transform"
      >
        <div
          onMouseEnter={() => {
            animatePanelHover(leftPanelRef.current, locationIconRef.current, true);
          }}
          onMouseLeave={() => {
            animatePanelHover(leftPanelRef.current, locationIconRef.current, false);
          }}
          /* 
            Edge-to-Background Integration:
            - Left corners: straight flush to page boundary (lg:rounded-l-none)
            - Right corners: smoothly rounded (rounded-r-2xl sm:rounded-r-3xl)
            - Border-l-0 prevents hard demarcation line on viewport edge
            - Removed card overflow-hidden so upper specular highlight and lift shadow expand cleanly
          */
          className="group/panel relative rounded-2xl sm:rounded-3xl lg:rounded-l-none lg:rounded-r-3xl border border-[#BACFE6] lg:border-l-0 bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 sm:p-8 lg:p-9 lg:pl-14 shadow-[0_12px_36px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] transition-colors duration-300 hover:border-[#0A5FD7]/40"
        >
          {/* Architectural Edge Fade: Blends left edge seamlessly into page background */}
          <div
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FC]/70 via-[#F4F7FC]/20 to-transparent z-20 rounded-l-none"
          />

          <div className="relative z-10 flex flex-col">
            <h3
              ref={leftHeadingRef}
              className="font-sans text-[20px] sm:text-[23px] font-bold text-[#06162C] tracking-tight mb-4 will-change-transform"
            >
              {locationHeading}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-3 border-t border-[#BACFE6]/60">
              {/* Studio Hubs */}
              <div
                ref={(el) => {
                  leftChannelsRefs.current[0] = el;
                }}
                className="flex items-start gap-3 will-change-transform"
              >
                <div
                  ref={locationIconRef}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/85 text-[#0A5FD7] border border-[#CBDDF6] shadow-2xs transition-transform duration-300"
                >
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                    Studio Hubs
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#06162C]">
                    {presence.operatingHubs}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div
                ref={(el) => {
                  leftChannelsRefs.current[1] = el;
                }}
                className="flex items-start gap-3 will-change-transform"
              >
                <div
                  ref={hoursIconRef}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/85 text-[#0A5FD7] border border-[#CBDDF6] shadow-2xs transition-transform duration-300"
                >
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                    Active Availability
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#06162C]">
                    {presence.businessHours}
                  </span>
                </div>
              </div>
            </div>

            <p ref={leftNoteRef} className="mt-3.5 text-[12px] font-sans text-[#64748B] will-change-transform">
              {presence.engagementModel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



