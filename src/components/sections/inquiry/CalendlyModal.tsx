"use client";

import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export interface CalendlyModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly calendlyUrl: string;
  readonly primaryColor?: string;
  readonly textColor?: string;
  readonly backgroundColor?: string;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  calendlyUrl,
  primaryColor = "0a5fd7",
  textColor = "06162c",
  backgroundColor = "ffffff",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasIframeLoaded, setHasIframeLoaded] = useState<boolean>(false);

  // Construct parameterized Calendly URL matching Brivya design system
  const constructCalendlyUrl = (): string => {
    try {
      const cleanUrl = new URL(calendlyUrl);
      cleanUrl.searchParams.set("embed_domain", typeof window !== "undefined" ? window.location.hostname : "localhost");
      cleanUrl.searchParams.set("embed_type", "Inline");
      cleanUrl.searchParams.set("primary_color", primaryColor);
      cleanUrl.searchParams.set("text_color", textColor);
      cleanUrl.searchParams.set("background_color", backgroundColor);
      cleanUrl.searchParams.set("hide_landing_page_details", "0");
      cleanUrl.searchParams.set("hide_gdpr_banner", "0");
      return cleanUrl.toString();
    } catch {
      return calendlyUrl;
    }
  };

  const formattedUrl = constructCalendlyUrl();

  // Handle escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Mount Calendly widget on open
  useEffect(() => {
    if (!isOpen) {
      setHasIframeLoaded(false);
      return;
    }

    let isSubscribed = true;

    const mountCalendly = () => {
      if (!isSubscribed || !containerRef.current) return;

      if (window.Calendly) {
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: formattedUrl,
          parentElement: containerRef.current,
        });

        setTimeout(() => {
          if (isSubscribed) setHasIframeLoaded(true);
        }, 1100);
      }
    };

    if (window.Calendly) {
      mountCalendly();
    } else {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.addEventListener("load", mountCalendly);
      } else {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = mountCalendly;
        document.body.appendChild(script);
      }
    }

    return () => {
      isSubscribed = false;
    };
  }, [isOpen, formattedUrl]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a Meeting Scheduling Dialog"
      className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#06162C]/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-[1040px] h-[92vh] max-h-[780px] rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-white shadow-[0_24px_70px_-12px_rgba(6,22,44,0.4)] flex flex-col overflow-hidden select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-[#BACFE6]/60 bg-gradient-to-r from-[#E1E7EF]/50 to-[#D8E2F0]/40 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#1675F8]" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
              30 Min Technical Session
            </span>
            <span className="text-slate-300">|</span>
            <span className="font-sans text-xs sm:text-sm font-bold text-[#06162C]">
              Brivya Solutions
            </span>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close scheduling modal"
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#06162C] hover:border-[#0A5FD7] hover:bg-slate-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
          >
            <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body: Loading State & Calendly Scheduler */}
        <div className="relative w-full flex-1 overflow-hidden bg-white">
          {!hasIframeLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xs">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute h-full w-full rounded-full border-2 border-[#E1E7EF] border-t-[#0A5FD7] animate-spin" />
                <span className="h-3 w-3 rounded-full bg-[#0A5FD7]" />
              </div>
              <span className="mt-4 font-sans text-xs font-semibold text-[#06162C]">
                Loading Live Calendar...
              </span>
              <span className="mt-1 font-mono text-[11px] text-[#64748B]">
                Connecting to official schedule
              </span>
            </div>
          )}

          {/* Calendly Inline Mount Container */}
          <div
            ref={containerRef}
            className="w-full h-full min-h-[580px] sm:min-h-[660px]"
            style={{ minWidth: "320px", height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};