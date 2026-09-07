"use client";

import React, { useEffect, useRef, useState } from "react";
import { CalendlyEmbedProps } from "./types";

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

export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url,
  primaryColor = "0a5fd7",
  textColor = "06162c",
  backgroundColor = "ffffff",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasIframeLoaded, setHasIframeLoaded] = useState<boolean>(false);

  // Construct parameterized Calendly URL matching design tokens
  const constructCalendlyUrl = (): string => {
    try {
      const cleanUrl = new URL(url);
      cleanUrl.searchParams.set("embed_domain", typeof window !== "undefined" ? window.location.hostname : "localhost");
      cleanUrl.searchParams.set("embed_type", "Inline");
      cleanUrl.searchParams.set("primary_color", primaryColor);
      cleanUrl.searchParams.set("text_color", textColor);
      cleanUrl.searchParams.set("background_color", backgroundColor);
      cleanUrl.searchParams.set("hide_landing_page_details", "0");
      cleanUrl.searchParams.set("hide_gdpr_banner", "0");
      return cleanUrl.toString();
    } catch {
      return url;
    }
  };

  const formattedUrl = constructCalendlyUrl();

  useEffect(() => {
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
        }, 1000);
      }
    };

    // If script is already cached in DOM
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
  }, [formattedUrl]);

  return (
    <div className={`relative w-full h-full min-h-[680px] sm:min-h-[720px] lg:min-h-[740px] flex flex-col justify-start rounded-2xl sm:rounded-3xl bg-white border border-[#CBDDF6] shadow-[0_4px_24px_-4px_rgba(7,54,109,0.06)] overflow-hidden ${className}`}>
      {/* Loading Pulse State */}
      {!hasIframeLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xs transition-opacity duration-300">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute h-full w-full rounded-full border-2 border-[#E1E7EF] border-t-[#0A5FD7] animate-spin" />
            <span className="h-3 w-3 rounded-full bg-[#0A5FD7]" />
          </div>
          <span className="mt-4 font-sans text-xs font-semibold text-[#06162C]">
            Connecting to Secure Calendly Schedule...
          </span>
          <span className="mt-1 font-mono text-[11px] text-[#64748B]">
            Verifying live calendar availability
          </span>
        </div>
      )}

      {/* Target Mount Element for Calendly Widget */}
      <div
        ref={containerRef}
        className="w-full h-full min-h-[680px] sm:min-h-[720px] lg:min-h-[740px]"
        style={{ minWidth: "320px", height: "100%", width: "100%" }}
      />
    </div>
  );
};