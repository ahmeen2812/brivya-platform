"use client";

import * as React from "react";
import { AdsWheelIconKey } from "@/types/heroAdsWheel";

interface AdsWheelIconProps {
  type: AdsWheelIconKey | string;
  className?: string;
}

export const AdsWheelIcon: React.FC<AdsWheelIconProps> = ({
  type,
  className = "h-5 w-5",
}) => {
  switch (type) {
    // =========================================================================
    // GOOGLE ADS ASSETS
    // =========================================================================

    case "google-ads":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
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
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#4285F4]">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "google-shopping":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#4285F4]">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3zm7 17H5V8h2v2c0 .6.4 1 1 1s1-.4 1-1V8h6v2c0 .6.4 1 1 1s1-.4 1-1V8h2v12z" />
          </svg>
        </div>
      );

    case "youtube":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#FF0000]">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12c0 2 .2 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.3-1.9.5-3.8.5-5.8 0-2-.2-3.9-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
          </svg>
        </div>
      );

    case "gtm":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#246FDB]">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>
      );

    case "ga4":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#F9AB00]">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="14" width="4" height="7" rx="1" />
            <rect x="10" y="9" width="4" height="12" rx="1" />
            <rect x="17" y="4" width="4" height="17" rx="1" />
          </svg>
        </div>
      );

    // =========================================================================
    // META ADS ASSETS
    // =========================================================================

    case "meta":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 7.2C10.6 5.2 8.7 4 6.5 4C2.9 4 0 7.3 0 11.8C0 16.4 3 20 6.6 20C8.9 20 10.7 18.7 12 16.6C13.3 18.7 15.1 20 17.4 20C21 20 24 16.4 24 11.8C24 7.3 21.1 4 17.5 4C15.3 4 13.4 5.2 12 7.2ZM6.6 17.4C4.4 17.4 2.6 15 2.6 11.8C2.6 8.7 4.3 6.6 6.5 6.6C8.3 6.6 9.8 8.1 10.8 10.6C9.9 13.6 8.5 17.4 6.6 17.4ZM17.4 17.4C15.5 17.4 14.1 13.6 13.2 10.6C14.2 8.1 15.7 6.6 17.5 6.6C19.7 6.6 21.4 8.7 21.4 11.8C21.4 15 19.6 17.4 17.4 17.4Z"
              fill="url(#metaAdsWheelGrad)"
            />
            <defs>
              <linearGradient id="metaAdsWheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0064E0" />
                <stop offset="50%" stopColor="#0081FB" />
                <stop offset="100%" stopColor="#0064E0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "instagram":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md p-0.5 shadow-2xs bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] text-white">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
          </svg>
        </div>
      );

    case "facebook":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#1877F2] text-white shadow-2xs">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      );

    case "meta-capi":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#0064E0]">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "meta-advantage":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#0081FB]">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
          </svg>
        </div>
      );

    case "whatsapp":
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#25D366]">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.15c-.24.68-1.4 1.28-1.92 1.34-.5.06-1.13.1-3.27-.79-2.74-1.13-4.5-3.92-4.63-4.1-.14-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.99.95-2.25.24-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4-.07.63.48.24.57.81 1.99.88 2.14.07.15.12.33.02.53-.1.19-.15.31-.29.48-.15.17-.31.37-.44.5-.15.14-.3.29-.13.58.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.45.29.15.46.12.63-.07.18-.2.74-.86.94-1.16.2-.29.4-.24.67-.14.28.1 1.76.83 2.06.98.3.15.5.22.58.34.07.12.07.72-.17 1.4z" />
          </svg>
        </div>
      );

    default:
      return (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-50 text-[#0064E0] font-mono text-[10px] font-bold">
          ADS
        </div>
      );
  }
};