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
    // 1. MICROSOFT OFFICE 365 OFFICIAL FLUENT ICONS (Matching Reference)
    // =========================================================================

    case "microsoft":
      // Official Microsoft 4-Color Squircle
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F172A] p-1 shadow-xs">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9.5" height="9.5" rx="1.5" fill="#F25022" />
            <rect x="12.5" y="2" width="9.5" height="9.5" rx="1.5" fill="#7FBA00" />
            <rect x="2" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#00A4EF" />
            <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#FFB900" />
          </svg>
        </div>
      );

    case "word":
      // Official Microsoft Word Fluent SVG (Blue 3D Sheet + W Tile)
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="3" width="22" height="26" rx="3" fill="#185ABD" />
            <path d="M16 3H25a3 3 0 013 3v20a3 3 0 01-3 3H16V3z" fill="#2B7CD3" opacity="0.6" />
            <rect x="2" y="7" width="16" height="18" rx="2" fill="#103F91" />
            <path
              d="M5 12h2.2l1.6 5.2L10.4 12h2.1l1.6 5.2 1.6-5.2H18l-2.4 8h-2.3L11.5 15l-1.8 5H7.4L5 12z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );

    case "excel":
      // Official Microsoft Excel Fluent SVG (Green 3D Sheet + X Tile)
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="3" width="22" height="26" rx="3" fill="#107C41" />
            <path d="M16 3H25a3 3 0 013 3v20a3 3 0 01-3 3H16V3z" fill="#23A55A" opacity="0.6" />
            <rect x="2" y="7" width="16" height="18" rx="2" fill="#0E5C2F" />
            <path
              d="M6 12h2.8l2.2 3.6 2.2-3.6H16l-3.4 5 3.5 5H13.2L11 16.8 8.8 20H6l3.5-5L6 12z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );

    case "powerpoint":
      // Official Microsoft PowerPoint Fluent SVG (Orange 3D Sheet + P Tile)
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="3" width="22" height="26" rx="3" fill="#C43E1C" />
            <path d="M16 3H25a3 3 0 013 3v20a3 3 0 01-3 3H16V3z" fill="#ED6C47" opacity="0.6" />
            <rect x="2" y="7" width="16" height="18" rx="2" fill="#982C10" />
            <path
              d="M6 12h4.5c1.8 0 3 1.1 3 2.7s-1.2 2.7-3 2.7H8.5V20H6v-8zm2.5 3.6h1.8c.6 0 1-.4 1-.9s-.4-.9-1-.9H8.5v1.8z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );

    case "outlook":
      // Official Microsoft Outlook Fluent SVG (Blue Envelope + O Disc)
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
      // Official Microsoft Teams Fluent SVG (Purple Silhouette + T Tile)
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
    // 2. GOOGLE WORKSPACE OFFICIAL ICONS (Matching Reference)
    // =========================================================================

    case "workspace":
    case "google":
      // Official Google 4-Color G Emblem
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F172A] p-1 shadow-xs">
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

    case "sheets":
      // Official Google Sheets Folded Green Document + Grid
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
      // Official Google Docs Folded Blue Document + Text Lines
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
      // Official Google Workspace 2024+ 4-Color M Envelope
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
      // Official Google Forms Purple Document + Checklist
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

    case "slides":
      // Official Google Slides Yellow Presentation Document
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="#F4B400" />
            <path d="M14 2v6h6" fill="#F9D466" />
            <rect x="7" y="11" width="10" height="7" rx="1" fill="#FFFFFF" opacity="0.9" />
          </svg>
        </div>
      );

    case "drive":
      // Official Google Drive 3-Color Geometry
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path d="M8.5 3.5h7l6 10.5h-7z" fill="#FFBA00" />
            <path d="M2.5 14l3.5-6 6 10.5H5z" fill="#0066DA" />
            <path d="M15.5 3.5l6 10.5-3.5 6-6-10.5z" fill="#00AC47" />
          </svg>
        </div>
      );

    // =========================================================================
    // 3. CORE PLATFORM BRAND ICONS (Meta, Google Ads, Full-Stack, AI, Cloud)
    // =========================================================================

    case "meta":
    case "meta-ads":
      // Official Meta Infinity Dual-Tone Gradient (Accurate ViewBox Coordinates)
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F172A] p-1 shadow-xs">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 7.2C10.6 5.2 8.7 4 6.5 4C2.9 4 0 7.3 0 11.8C0 16.4 3 20 6.6 20C8.9 20 10.7 18.7 12 16.6C13.3 18.7 15.1 20 17.4 20C21 20 24 16.4 24 11.8C24 7.3 21.1 4 17.5 4C15.3 4 13.4 5.2 12 7.2ZM6.6 17.4C4.4 17.4 2.6 15 2.6 11.8C2.6 8.7 4.3 6.6 6.5 6.6C8.3 6.6 9.8 8.1 10.8 10.6C9.9 13.6 8.5 17.4 6.6 17.4ZM17.4 17.4C15.5 17.4 14.1 13.6 13.2 10.6C14.2 8.1 15.7 6.6 17.5 6.6C19.7 6.6 21.4 8.7 21.4 11.8C21.4 15 19.6 17.4 17.4 17.4Z"
              fill="url(#metaOfficialGrad)"
            />
            <defs>
              <linearGradient id="metaOfficialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0064E0" />
                <stop offset="50%" stopColor="#0081FB" />
                <stop offset="100%" stopColor="#0064E0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "google-ads":
      // Official Google Ads 4-Color Geometry
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F172A] p-1 shadow-xs">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
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

    case "code":
      // Next.js & TypeScript Cyan/Slate Code Monogram
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F172A] text-[#38BDF8] shadow-xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3m-9 3l6-12" />
          </svg>
        </div>
      );

    case "ai":
    case "ai-chip":
      // Electric Violet Neural Processor Emblem
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] text-white shadow-xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      );

    case "cloud":
    case "cloud-server":
      // Cloudflare / AWS Orange Infrastructure Emblem
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#F97316] text-white shadow-xs">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
      );

    default:
      return (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-slate-100 text-[#1675F8]">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </div>
      );
  }
};