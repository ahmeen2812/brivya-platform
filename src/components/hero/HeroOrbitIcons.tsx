"use client";

import * as React from "react";

export type HeroIconKey =
  | "nextjs"
  | "typescript"
  | "react"
  | "shopify"
  | "python"
  | "postgresql"
  | "aws"
  | "openai"
  | "supabase"
  | "zapier"
  | "hubspot"
  | "whatsapp"
  | "cloudflare"
  | "docker"
  | "lighthouse"
  | "google-ads"
  | "google-search"
  | "youtube"
  | "gtm"
  | "ga4"
  | "meta"
  | "facebook"
  | "instagram"
  | "meta-capi"
  | "word"
  | "excel"
  | "powerpoint"
  | "outlook"
  | "teams"
  | "sheets"
  | "docs"
  | "gmail"
  | "forms"
  | "drive"
  | "code"
  | "ai"
  | "cloud"
  | "microsoft"
  | "workspace"
  | "default";

interface HeroOrbitIconProps {
  type: HeroIconKey | string;
  className?: string;
}

export const HeroOrbitIcon: React.FC<HeroOrbitIconProps> = ({
  type,
  className = "h-5 w-5",
}) => {
  switch (type) {
    // =========================================================================
    // 1. WEB ENGINEERING & PLATFORM ASSETS
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

    case "aws":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-50 text-[#FF9900] border border-amber-100 shadow-2xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" fill="none" />
          </svg>
        </div>
      );

    // =========================================================================
    // 2. GOOGLE ADS & MEDIA MARKETING ASSETS
    // =========================================================================

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
    // 3. META ADS & SOCIAL ASSETS
    // =========================================================================

    case "meta":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50/70 border border-blue-100/80 shadow-2xs">
          <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 7.2C10.6 5.2 8.7 4 6.5 4C2.9 4 0 7.3 0 11.8C0 16.4 3 20 6.6 20C8.9 20 10.7 18.7 12 16.6C13.3 18.7 15.1 20 17.4 20C21 20 24 16.4 24 11.8C24 7.3 21.1 4 17.5 4C15.3 4 13.4 5.2 12 7.2ZM6.6 17.4C4.4 17.4 2.6 15 2.6 11.8C2.6 8.7 4.3 6.6 6.5 6.6C8.3 6.6 9.8 8.1 10.8 10.6C9.9 13.6 8.5 17.4 6.6 17.4ZM17.4 17.4C15.5 17.4 14.1 13.6 13.2 10.6C14.2 8.1 15.7 6.6 17.5 6.6C19.7 6.6 21.4 8.7 21.4 11.8C21.4 15 19.6 17.4 17.4 17.4Z"
              fill="url(#metaHeroLightGrad)"
            />
            <defs>
              <linearGradient id="metaHeroLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
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
    // 4. MICROSOFT OFFICE 365 SUITE
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

    // =========================================================================
    // 5. GOOGLE WORKSPACE SUITE
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

    // =========================================================================
    // 6. DEFAULT FALLBACK
    // =========================================================================

    default:
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-slate-100 text-[#1675F8]">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </div>
      );
  }
};