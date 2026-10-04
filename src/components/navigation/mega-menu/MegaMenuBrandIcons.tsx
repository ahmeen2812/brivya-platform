"use client";

import * as React from "react";
import { ServiceIconType, SubServiceIconType } from "@/types/megaMenu";

interface BrandIconProps {
  type: ServiceIconType | SubServiceIconType;
  className?: string;
}

export const MegaMenuBrandIcon: React.FC<BrandIconProps> = ({
  type,
  className = "h-5 w-5",
}) => {
  switch (type) {
    // =========================================================================
    // 1. CORE 7 PILLARS — LIGHT THEME NATIVE CAPSULES (No Black Boxes)
    // =========================================================================

    case "code":
      // Web & Software: Soft Ice-Blue Capsule with Brivya Cobalt Code Glyph
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-[#0A5FD7] border border-sky-100/80 shadow-2xs">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
          </svg>
        </div>
      );

    case "google":
    case "google-ads":
      // Google Ads: Clean Slate Capsule with Official 4-Color Geometry
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/70 shadow-2xs">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M3.5 15.5L8.5 6.5C9.2 5.2 10.8 4.7 12.1 5.4C13.4 6.1 13.9 7.7 13.2 9L8.2 18C7.5 19.3 5.9 19.8 4.6 19.1C3.3 18.4 2.8 16.8 3.5 15.5Z"
              fill="#FBBC04"
            />
            <path
              d="M13.2 9L18.2 18C18.9 19.3 20.5 19.8 21.8 19.1C23.1 18.4 23.6 16.8 22.9 15.5L17.9 6.5C17.2 5.2 15.6 4.7 14.3 5.4C13 6.1 12.5 7.7 13.2 9Z"
              fill="#4285F4"
            />
            <circle cx="5.8" cy="17.3" r="2.8" fill="#34A853" />
          </svg>
        </div>
      );

    case "meta":
    case "meta-ads":
      // Meta Ads: Soft Azure Capsule with Authentic Meta Infinity Gradient
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50/70 border border-blue-100/80 shadow-2xs">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 7.2C10.6 5.2 8.7 4 6.5 4C2.9 4 0 7.3 0 11.8C0 16.4 3 20 6.6 20C8.9 20 10.7 18.7 12 16.6C13.3 18.7 15.1 20 17.4 20C21 20 24 16.4 24 11.8C24 7.3 21.1 4 17.5 4C15.3 4 13.4 5.2 12 7.2ZM6.6 17.4C4.4 17.4 2.6 15 2.6 11.8C2.6 8.7 4.3 6.6 6.5 6.6C8.3 6.6 9.8 8.1 10.8 10.6C9.9 13.6 8.5 17.4 6.6 17.4ZM17.4 17.4C15.5 17.4 14.1 13.6 13.2 10.6C14.2 8.1 15.7 6.6 17.5 6.6C19.7 6.6 21.4 8.7 21.4 11.8C21.4 15 19.6 17.4 17.4 17.4Z"
              fill="url(#metaLightGrad)"
            />
            <defs>
              <linearGradient id="metaLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0064E0" />
                <stop offset="50%" stopColor="#0081FB" />
                <stop offset="100%" stopColor="#0064E0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "ai":
    case "ai-chip":
      // AI & Automation: Soft Lavender Capsule with Electric Violet Processor
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-[#7C3AED] border border-violet-100/80 shadow-2xs">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      );

    case "cloud":
    case "cloud-server":
      // Cloud Solutions: Soft Amber Capsule with Cloud Infrastructure Glyph
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-[#D97706] border border-amber-100/80 shadow-2xs">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
      );

    case "microsoft":
      // Office Add-ins: Clean Slate Capsule with Official Microsoft 4-Color Grid
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/70 shadow-2xs p-1.5">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9.5" height="9.5" rx="1.5" fill="#F25022" />
            <rect x="12.5" y="2" width="9.5" height="9.5" rx="1.5" fill="#7FBA00" />
            <rect x="2" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#00A4EF" />
            <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#FFB900" />
          </svg>
        </div>
      );

    case "workspace":
      // Google Workspace: Clean Slate Capsule with Official 4-Color G
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/70 shadow-2xs p-1.5">
          <svg className="h-full w-full" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        </div>
      );

    // =========================================================================
    // 2. PRODUCT SPECIFIC ICONS (For Workspace & Office Pillars)
    // =========================================================================

    case "word":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#185ABD] text-white font-sans text-[10px] font-extrabold shadow-2xs">
          W
        </div>
      );

    case "excel":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#107C41] text-white font-sans text-[10px] font-extrabold shadow-2xs">
          X
        </div>
      );

    case "powerpoint":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#C43E1C] text-white font-sans text-[10px] font-extrabold shadow-2xs">
          P
        </div>
      );

    case "outlook":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0078D4] text-white font-sans text-[10px] font-extrabold shadow-2xs">
          O
        </div>
      );

    case "teams":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#464EB8] text-white font-sans text-[10px] font-extrabold shadow-2xs">
          T
        </div>
      );

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
            <path
              d="M2 6a2 2 0 012-2h2.5l5.5 4.5L17.5 4H20a2 2 0 012 2v12a2 2 0 01-2 2h-3V11.5L12 15l-5-3.5V20H4a2 2 0 01-2-2V6z"
              fill="#EA4335"
            />
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
      return null;
  }
};