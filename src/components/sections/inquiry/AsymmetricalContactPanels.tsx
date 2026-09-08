"use client";

import React from "react";
import { INQUIRY_CONTENT } from "./content";
import { InquiryTexture } from "./InquiryTexture";

export const AsymmetricalContactPanels: React.FC = () => {
  const { directContact, locationAvailability } = INQUIRY_CONTENT;

  return (
    <div className="w-full flex flex-col space-y-6 sm:space-y-8 select-none">
      {/* 
        PANEL 1 — DIRECT CONTACT
        Asymmetrical Position: Extends across ~70% desktop width, aligned to the RIGHT (ml-auto)
      */}
      <div className="w-full lg:w-[72%] xl:w-[70%] ml-auto">
        <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 lg:p-9 shadow-[0_8px_30px_-6px_rgba(6,22,44,0.05)] overflow-hidden">
          <InquiryTexture />

          <div className="relative z-10 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span aria-hidden="true" className="w-4 h-[2px] bg-[#0A5FD7]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A5FD7]">
                DIRECT CHANNELS
              </span>
            </div>

            <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#06162C] tracking-tight mb-5">
              {directContact.heading}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1 border-t border-slate-100">
              {/* Business Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0A5FD7] border border-sky-100 shadow-2xs">
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${directContact.info.email}`}
                    className="font-sans text-sm font-semibold text-[#06162C] hover:text-[#0A5FD7] transition-colors"
                  >
                    {directContact.info.email}
                  </a>
                </div>
              </div>

              {/* Telephone Contact */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0A5FD7] border border-sky-100 shadow-2xs">
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                    Phone Direct
                  </span>
                  <a
                    href={`tel:${directContact.info.phone}`}
                    className="font-sans text-sm font-semibold text-[#06162C] hover:text-[#0A5FD7] transition-colors"
                  >
                    {directContact.info.phone}
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[12px] font-sans text-[#64748B]">
              {directContact.info.responseTimeNote}
            </p>
          </div>
        </div>
      </div>

      {/* 
        PANEL 2 — LOCATION & AVAILABILITY
        Asymmetrical Position: Extends across ~70% desktop width, aligned to the LEFT (mr-auto)
      */}
      <div className="w-full lg:w-[72%] xl:w-[70%] mr-auto">
        <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 lg:p-9 shadow-[0_8px_30px_-6px_rgba(6,22,44,0.05)] overflow-hidden">
          <InquiryTexture />

          <div className="relative z-10 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span aria-hidden="true" className="w-4 h-[2px] bg-[#0A5FD7]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A5FD7]">
                STUDIO PRESENCE
              </span>
            </div>

            <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#06162C] tracking-tight mb-5">
              {locationAvailability.heading}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1 border-t border-slate-100">
              {/* Operating Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0A5FD7] border border-sky-100 shadow-2xs">
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                    Studio Hubs
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#06162C]">
                    {locationAvailability.info.operatingLocation}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0A5FD7] border border-sky-100 shadow-2xs">
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                    Active Availability
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#06162C]">
                    {locationAvailability.info.workingHours}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[12px] font-sans text-[#64748B]">
              {locationAvailability.info.engagementModel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};