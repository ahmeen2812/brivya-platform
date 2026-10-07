"use client";

import * as React from "react";
import { AddonsWheelIconKey } from "@/types/heroAddonsWheel";

interface AddonsWheelIconProps {
  type: AddonsWheelIconKey | string;
  className?: string;
}

export const AddonsWheelIcon: React.FC<AddonsWheelIconProps> = ({
  type,
  className = "h-5 w-5",
}) => {
  switch (type) {
    // =========================================================================
    // GOOGLE WORKSPACE ECOSYSTEM ASSETS
    // =========================================================================

    case "workspace":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-5 w-5" viewBox="0 0 24 24">
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
      return (
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-full w-full" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="#0F9D58" />
            <path d="M14 2v6h6" fill="#87CEAB" />
            <rect x="7" y="11" width="10" height="8" rx="1" fill="#FFFFFF" opacity="0.95" />
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

    case "apps-script":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-[#4285F4] border border-blue-100 font-mono font-bold text-[10px]">
          &lt;/&gt;
        </div>
      );

    // =========================================================================
    // MICROSOFT OFFICE 365 ECOSYSTEM ASSETS
    // =========================================================================

    case "microsoft":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9.5" height="9.5" rx="1.5" fill="#F25022" />
            <rect x="12.5" y="2" width="9.5" height="9.5" rx="1.5" fill="#7FBA00" />
            <rect x="2" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#00A4EF" />
            <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#FFB900" />
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
            <path
              d="M6 12h2.8l2.2 3.6 2.2-3.6H16l-3.4 5 3.5 5H13.2L11 16.8 8.8 20H6l3.5-5L6 12z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      );

    case "word":
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

    case "vsto":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-50 text-[#0078D4] border border-blue-100 shadow-2xs font-mono font-bold text-[9px]">
          VSTO
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