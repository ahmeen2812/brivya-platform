"use client";

import * as React from "react";
import { SubServiceIconType } from "@/types/megaMenu";

export interface BrandIconProps {
  type: SubServiceIconType | (string & {});
  className?: string;
}

export const BrandIcon: React.FC<BrandIconProps> = ({
  type,
  className = "h-5 w-5",
}) => {
  switch (type) {
    // =========================================================================
    // 1. WEB ENGINEERING & PLATFORM ICONS
    // =========================================================================

    case "nextjs":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-900 text-white shadow-2xs">
          <svg className="h-3 w-3" viewBox="0 0 180 180" fill="none">
            <path
              d="M149.508 159.486L61.3234 45H45V135H58.5V64.0607L138.992 168.031C142.66 165.419 146.183 162.553 149.508 159.486Z"
              fill="white"
            />
            <rect x="122.5" y="45" width="13.5" height="90" fill="white" />
          </svg>
        </div>
      );

    case "typescript":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#3178C6] text-white font-sans text-[10px] font-bold shadow-2xs">
          TS
        </div>
      );

    case "react":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-50 text-[#00D8FF] border border-sky-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
      );

    case "shopify":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[#95BF47] border border-emerald-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.8 6.2c-.1-.3-.4-.5-.7-.5-.3 0-3.3-.2-3.3-.2s-2.1-2.1-2.3-2.3c-.2-.2-.6-.3-.9-.2-.1 0-.7.2-1.6.5C10 2.2 9 1.4 8.7 1.4c-.4 0-.8.4-1 .8L6 6.8s-2.3.7-2.5.8c-.5.2-.6.7-.5 1.1l3 14.1c.1.5.6.9 1.1.9h9.8c.5 0 1-.4 1.1-.9l1.8-16.6zm-8.6-3.4c.5-.2 1.1-.3 1.8-.4.4.4.9 1 1.4 1.7l-3.2.9V2.8z" />
          </svg>
        </div>
      );

    case "graphql":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-pink-50 text-[#E10098] border border-pink-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      );

    case "supabase":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[#3ECF8E] border border-emerald-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.36 9.87a1.47 1.47 0 00-1.16-.62h-7.05L17.7 2.1a1 1 0 00-.77-1.1 1 1 0 00-1.07.41L2.64 14.13a1.47 1.47 0 001.16 2.37h7.05l-4.55 7.15a1 1 0 00.77 1.1 1 1 0 001.07-.41l13.22-12.72a1.47 1.47 0 00.06-1.75z" />
          </svg>
        </div>
      );

    case "lighthouse":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-orange-50 text-[#F44B21] border border-orange-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v3l2 1v9h12v-9l2-1V7l-8-5zm0 3.3L16 8h-8l4-2.7zM8 18v-6h8v6H8z" />
          </svg>
        </div>
      );

    // =========================================================================
    // 2. GOOGLE ADS & MEDIA MARKETING ICONS
    // =========================================================================

    case "google":
    case "google-ads":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-50 border border-slate-200/80 shadow-2xs">
          <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path
              d="M4.1 14.8l4.9-8.5c.7-1.2 2.2-1.7 3.5-1 1.3.7 1.7 2.2 1 3.5l-4.9 8.5c-.7 1.2-2.2 1.7-3.5 1-1.3-.7-1.7-2.3-1-3.5z"
              fill="#FBBC04"
            />
            <path
              d="M12.9 8.8l4.9 8.5c.7 1.2 2.2 1.7 3.5 1 1.3-.7 1.7-2.2 1-3.5l-4.9-8.5c-.7-1.2-2.2-1.7-3.5-1-1.3.7-1.7 2.2-1 3.5z"
              fill="#4285F4"
            />
            <circle cx="6.4" cy="17.2" r="2.8" fill="#34A853" />
          </svg>
        </div>
      );

    case "google-search":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50/80 text-[#4285F4] border border-blue-100/70 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "google-display":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-50 text-[#FBBC04] border border-amber-100/80 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </div>
      );

    case "youtube":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-red-50 text-[#FF0000] border border-red-100/70 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12c0 2 .2 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.3-1.9.5-3.8.5-5.8 0-2-.2-3.9-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
          </svg>
        </div>
      );

    case "gtm":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-50 text-[#246FDB] border border-sky-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>
      );

    case "ga4":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-50 text-[#F9AB00] border border-amber-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="14" width="4" height="7" rx="1" />
            <rect x="10" y="9" width="4" height="12" rx="1" />
            <rect x="17" y="4" width="4" height="17" rx="1" />
          </svg>
        </div>
      );

    // =========================================================================
    // 3. META ADS & SOCIAL PLATFORM ICONS
    // =========================================================================

    case "meta":
    case "meta-ads":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50/70 border border-blue-100/80 shadow-2xs">
          <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 7.2C10.6 5.2 8.7 4 6.5 4C2.9 4 0 7.3 0 11.8C0 16.4 3 20 6.6 20C8.9 20 10.7 18.7 12 16.6C13.3 18.7 15.1 20 17.4 20C21 20 24 16.4 24 11.8C24 7.3 21.1 4 17.5 4C15.3 4 13.4 5.2 12 7.2ZM6.6 17.4C4.4 17.4 2.6 15 2.6 11.8C2.6 8.7 4.3 6.6 6.5 6.6C8.3 6.6 9.8 8.1 10.8 10.6C9.9 13.6 8.5 17.4 6.6 17.4ZM17.4 17.4C15.5 17.4 14.1 13.6 13.2 10.6C14.2 8.1 15.7 6.6 17.5 6.6C19.7 6.6 21.4 8.7 21.4 11.8C21.4 15 19.6 17.4 17.4 17.4Z"
              fill="url(#metaSharedGrad)"
            />
            <defs>
              <linearGradient id="metaSharedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0064E0" />
                <stop offset="50%" stopColor="#0081FB" />
                <stop offset="100%" stopColor="#0064E0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "facebook":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#1877F2] text-white shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      );

    case "instagram":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md p-0.5 shadow-2xs bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
          </svg>
        </div>
      );

    // =========================================================================
    // 4. AI & AUTOMATION PLATFORM ICONS
    // =========================================================================

    case "openai":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[#10A37F] border border-emerald-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.28 9.37a5.98 5.98 0 00-.51-4.91 6.06 6.06 0 00-6.51-2.9A6.06 6.06 0 0010.5.5a6.06 6.06 0 00-5.78 4.19 6.04 6.04 0 00-3.93 2.87 6.07 6.07 0 00.74 7.1 6.06 6.06 0 00.51 4.91 6.06 6.06 0 006.51 2.9A6.06 6.06 0 0013.5 23.5a6.06 6.06 0 005.78-4.19 6.04 6.04 0 003.93-2.87 6.07 6.07 0 00-.93-7.07zM12 15a3 3 0 110-6 3 3 0 010 6z" />
          </svg>
        </div>
      );

    case "python":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-50 border border-slate-200/60 shadow-2xs p-0.5">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path
              d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.1 1.4h2.9v.4H6.2S4 4.8 4 8c0 3.1 1.9 3 1.9 3h1.1V9.6s-.1-1.3 1.3-1.3h4.6s1.3 0 1.3-1.2V4.5s.4-2.5-2.3-2.5zm-1.6 1a.5.5 0 110 1 .5.5 0 010-1z"
              fill="#3776AB"
            />
            <path
              d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.1-1.4h-2.9v-.4h5.8s2.2.3 2.2-2.9c0-3.1-1.9-3-1.9-3h-1.1v1.4s.1 1.3-1.3 1.3h-4.6s-1.3 0-1.3 1.2v2.6s-.4 2.5 2.3 2.5zm1.6-1a.5.5 0 110-1 .5.5 0 010 1z"
              fill="#FFD43B"
            />
          </svg>
        </div>
      );

    case "zapier":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-orange-50 text-[#FF4A00] border border-orange-100 shadow-2xs font-extrabold text-sm leading-none">
          *
        </div>
      );

    case "hubspot":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-orange-50 text-[#FF7A59] border border-orange-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 7.5a2.5 2.5 0 00-2.3 1.5h-3.4a2.5 2.5 0 00-4.6-.3l-3.4 2A2.5 2.5 0 105 13l3.4-2a2.5 2.5 0 002.4.5v3.4a2.5 2.5 0 102.5 0v-3.4a2.5 2.5 0 001.9-1.5h2.3a2.5 2.5 0 100-2.5z" />
          </svg>
        </div>
      );

    case "whatsapp":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[#25D366] border border-emerald-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.15c-.24.68-1.4 1.28-1.92 1.34-.5.06-1.13.1-3.27-.79-2.74-1.13-4.5-3.92-4.63-4.1-.14-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.99.95-2.25.24-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4-.07.63.48.24.57.81 1.99.88 2.14.07.15.12.33.02.53-.1.19-.15.31-.29.48-.15.17-.31.37-.44.5-.15.14-.3.29-.13.58.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.45.29.15.46.12.63-.07.18-.2.74-.86.94-1.16.2-.29.4-.24.67-.14.28.1 1.76.83 2.06.98.3.15.5.22.58.34.07.12.07.72-.17 1.4z" />
          </svg>
        </div>
      );

    // =========================================================================
    // 5. CLOUD INFRASTRUCTURE & BACKEND ICONS
    // =========================================================================

    case "cloudflare":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-50 text-[#F38020] border border-amber-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.2 12.8c-.2 0-.4.1-.6.1-.2-2.1-2-3.8-4.2-3.8-1.5 0-2.8.8-3.5 2-.4-.2-.8-.3-1.3-.3-1.6 0-3 1.3-3 2.9 0 .1 0 .2.1.3-1.6.3-2.7 1.6-2.7 3.2 0 1.9 1.5 3.3 3.4 3.3h11.9c1.9 0 3.5-1.5 3.5-3.4 0-1.8-1.4-3.3-3.2-3.4 0-.3-.4-.9-.4-.9z" />
          </svg>
        </div>
      );

    case "aws":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-50 text-[#FF9900] border border-amber-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" fill="none" />
          </svg>
        </div>
      );

    case "postgresql":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-50 text-[#336791] border border-sky-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
      );

    case "docker":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-50 text-[#2496ED] border border-sky-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.9 12.5h-1.8v-1.8h1.8v1.8zm-2.4 0H9.7v-1.8h1.8v1.8zm-2.4 0H7.3v-1.8h1.8v1.8zm4.8-2.4h-1.8V8.3h1.8v1.8zm-2.4 0H9.7V8.3h1.8v1.8zm-2.4 0H7.3V8.3h1.8v1.8zm-2.4 0H4.9V8.3h1.8v1.8zm9.6 0h-1.8V8.3h1.8v1.8zm-2.4-2.4H9.7V5.9h1.8v1.8zm8.6 6.3c-.6-.4-1.8-.4-2.6.2-.2-1.3-1.1-2.1-2.4-2.3l-.4-.1-.2.4c-.4.9-.4 2.3.4 3.3-.4.2-.8.5-1.3.8H1.3C.8 19 3.5 21 8.8 21c7.2 0 11.6-3.8 11.6-8.8 0-.4 0-.8-.1-1.2l.6-.4z" />
          </svg>
        </div>
      );

    // =========================================================================
    // 6. MICROSOFT OFFICE 365 SUITE
    // =========================================================================

    case "word":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="3" width="22" height="26" rx="3" fill="#185ABD" />
            <path d="M16 3H25a3 3 0 013 3v20a3 3 0 01-3 3H16V3z" fill="#2B7CD3" opacity="0.6" />
            <rect x="2" y="7" width="16" height="18" rx="2" fill="#103F91" />
            <path d="M5 12h2.2l1.6 5.2L10.4 12h2.1l1.6 5.2 1.6-5.2H18l-2.4 8h-2.3L11.5 15l-1.8 5H7.4L5 12z" fill="#FFFFFF" />
          </svg>
        </div>
      );

    case "excel":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="3" width="22" height="26" rx="3" fill="#107C41" />
            <path d="M16 3H25a3 3 0 013 3v20a3 3 0 01-3 3H16V3z" fill="#23A55A" opacity="0.6" />
            <rect x="2" y="7" width="16" height="18" rx="2" fill="#0E5C2F" />
            <path d="M6 12h2.8l2.2 3.6 2.2-3.6H16l-3.4 5 3.5 5H13.2L11 16.8 8.8 20H6l3.5-5L6 12z" fill="#FFFFFF" />
          </svg>
        </div>
      );

    case "powerpoint":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="3" width="22" height="26" rx="3" fill="#C43E1C" />
            <path d="M16 3H25a3 3 0 013 3v20a3 3 0 01-3 3H16V3z" fill="#ED6C47" opacity="0.6" />
            <rect x="2" y="7" width="16" height="18" rx="2" fill="#982C10" />
            <path d="M6 12h4.5c1.8 0 3 1.1 3 2.7s-1.2 2.7-3 2.7H8.5V20H6v-8zm2.5 3.6h1.8c.6 0 1-.4 1-.9s-.4-.9-1-.9H8.5v1.8z" fill="#FFFFFF" />
          </svg>
        </div>
      );

    case "outlook":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="6" width="22" height="20" rx="3" fill="#0078D4" />
            <path d="M6 9l11 7 11-7" stroke="#2899F5" strokeWidth="2" strokeLinecap="round" />
            <circle cx="11" cy="16" r="8" fill="#005A9E" />
            <ellipse cx="11" cy="16" rx="3.5" ry="4.5" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>
      );

    case "teams":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 32 32" fill="none">
            <rect x="8" y="5" width="20" height="22" rx="3" fill="#505AC9" />
            <circle cx="21" cy="11" r="3" fill="#7B83EB" />
            <rect x="2" y="9" width="16" height="16" rx="2" fill="#3940AB" />
            <path d="M6 13h8v2H11v6H9v-6H6v-2z" fill="#FFFFFF" />
          </svg>
        </div>
      );

    // =========================================================================
    // 7. GOOGLE WORKSPACE SUITE
    // =========================================================================

    case "sheets":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="#0F9D58" />
            <path d="M14 2v6h6" fill="#87CEAB" />
            <rect x="7" y="11" width="10" height="8" rx="1" fill="#FFFFFF" opacity="0.9" />
            <path d="M7 14h10M7 16h10M11 11v8M14 11v8" stroke="#0F9D58" strokeWidth="1" />
          </svg>
        </div>
      );

    case "docs":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="#4285F4" />
            <path d="M14 2v6h6" fill="#A1C2FA" />
            <path d="M8 12h8M8 15h8M8 18h5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "gmail":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path d="M2 6a2 2 0 012-2h2.5l5.5 4.5L17.5 4H20a2 2 0 012 2v12a2 2 0 01-2 2h-3V11.5L12 15l-5-3.5V20H4a2 2 0 01-2-2V6z" fill="#EA4335" />
            <path d="M17 20h3a2 2 0 002-2V8.5L17 12.5V20z" fill="#34A853" />
            <path d="M2 8.5V18a2 2 0 002 2h3v-7.5L2 8.5z" fill="#4285F4" />
            <path d="M17 4l-5 4-5-4h10z" fill="#FBBC04" />
          </svg>
        </div>
      );

    case "forms":
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="#7248B9" />
            <path d="M14 2v6h6" fill="#B9A0E3" />
            <circle cx="8" cy="12" r="1" fill="#FFFFFF" />
            <path d="M11 12h5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="15" r="1" fill="#FFFFFF" />
            <path d="M11 15h5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="18" r="1" fill="#FFFFFF" />
            <path d="M11 18h3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    default:
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-slate-100 text-[#1675F8]">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </div>
      );
  }
};