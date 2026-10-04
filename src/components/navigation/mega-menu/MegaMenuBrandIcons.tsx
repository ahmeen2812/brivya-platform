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
    // -------------------------------------------------------------------------
    // 1. PRIMARY PILLAR BRAND ICONS
    // -------------------------------------------------------------------------

    case "google":
    case "google-ads":
      // Official Google Ads 4-Color Geometry
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
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
      );

    case "meta":
    case "meta-ads":
      // Official Meta Blue Infinity Loop (Accurate Unwarped Coordinates)
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 7.2C10.6 5.2 8.7 4 6.5 4C2.9 4 0 7.3 0 11.8C0 16.4 3 20 6.6 20C8.9 20 10.7 18.7 12 16.6C13.3 18.7 15.1 20 17.4 20C21 20 24 16.4 24 11.8C24 7.3 21.1 4 17.5 4C15.3 4 13.4 5.2 12 7.2ZM6.6 17.4C4.4 17.4 2.6 15 2.6 11.8C2.6 8.7 4.3 6.6 6.5 6.6C8.3 6.6 9.8 8.1 10.8 10.6C9.9 13.6 8.5 17.4 6.6 17.4ZM17.4 17.4C15.5 17.4 14.1 13.6 13.2 10.6C14.2 8.1 15.7 6.6 17.5 6.6C19.7 6.6 21.4 8.7 21.4 11.8C21.4 15 19.6 17.4 17.4 17.4Z"
            fill="url(#metaGradient)"
          />
          <defs>
            <linearGradient id="metaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0064E0" />
              <stop offset="50%" stopColor="#0081FB" />
              <stop offset="100%" stopColor="#0064E0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "microsoft":
      // Official Microsoft 4-Color Grid
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
        </svg>
      );

    case "workspace":
      // Official Google Workspace Multi-Color Emblem
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16v12H4z" fill="#4285F4" opacity="0.1" />
          <path d="M12 3L3 9l9 6 9-6-9-6z" fill="#EA4335" />
          <path d="M3 9v9l9 3V12L3 9z" fill="#4285F4" />
          <path d="M21 9v9l-9 3V12l9-3z" fill="#34A853" />
        </svg>
      );

    case "code":
      // Modern React & TypeScript Slate/Cyan Code Stack
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#0F172A] text-[#38BDF8]">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
          </svg>
        </div>
      );

    case "ai":
    case "ai-chip":
      // Deep Electric Violet Neural Processor Emblem
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      );

    case "cloud":
    case "cloud-server":
      // Cloudflare & AWS Orange/Cyan Edge Cloud Symbol
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#F97316] text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
      );

    // -------------------------------------------------------------------------
    // 2. MICROSOFT OFFICE FULL-COLOR PRODUCT ICONS (From Image Reference)
    // -------------------------------------------------------------------------

    case "word":
      // Official Word Blue W Badge
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#185ABD] text-white font-sans text-[11px] font-extrabold shadow-2xs">
          W
        </div>
      );

    case "excel":
      // Official Excel Green X Badge
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#107C41] text-white font-sans text-[11px] font-extrabold shadow-2xs">
          X
        </div>
      );

    case "powerpoint":
      // Official PowerPoint Orange P Badge
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#C43E1C] text-white font-sans text-[11px] font-extrabold shadow-2xs">
          P
        </div>
      );

    case "outlook":
      // Official Outlook Blue O Badge
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#0078D4] text-white font-sans text-[11px] font-extrabold shadow-2xs">
          O
        </div>
      );

    case "teams":
      // Official Teams Purple T Badge
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#464EB8] text-white font-sans text-[11px] font-extrabold shadow-2xs">
          T
        </div>
      );

    // -------------------------------------------------------------------------
    // 3. GOOGLE WORKSPACE FULL-COLOR PRODUCT ICONS (From Image Reference)
    // -------------------------------------------------------------------------

    case "sheets":
      // Official Google Sheets Green Spreadsheet Icon
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#0F9D58] text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M3 15h18M9 3v18" />
          </svg>
        </div>
      );

    case "docs":
      // Official Google Docs Blue Document Icon
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#4285F4] text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6M8 13h8M8 17h5" />
          </svg>
        </div>
      );

    case "gmail":
      // Official Gmail 4-Color Envelope Geometry
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M2 6l10 7L22 6v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill="#EA4335" opacity="0.15" />
          <path d="M2 6l10 7L22 6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
          <path d="M2 6v12a2 2 0 002 2h2V10l6 4 6-4v10h2a2 2 0 002-2V6" stroke="#4285F4" strokeWidth="1.8" />
        </svg>
      );

    case "forms":
      // Official Google Forms Purple Form Icon
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#7248B9] text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
        </div>
      );

    case "slides":
      // Official Google Slides Yellow Presentation Icon
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#F4B400] text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <rect x="2" y="4" width="20" height="14" rx="2" />
            <path d="M8 20h8M12 18v2" />
          </svg>
        </div>
      );

    case "drive":
      // Official Google Drive 3-Color Geometry
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8.5 3.5h7l6 10.5h-7z" fill="#FFBA00" />
          <path d="M2.5 14l3.5-6 6 10.5H5z" fill="#0066DA" />
          <path d="M15.5 3.5l6 10.5-3.5 6-6-10.5z" fill="#00AC47" />
        </svg>
      );

    default:
      return (
        <div className="h-1.5 w-1.5 rounded-full bg-[#1675F8]" />
      );
  }
};