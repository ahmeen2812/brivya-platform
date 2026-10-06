"use client";

import * as React from "react";
import { MainWheelIconKey } from "@/types/heroMainWheel";

interface MainWheelIconProps {
  type: MainWheelIconKey | string;
  className?: string;
}

export const MainWheelIcon: React.FC<MainWheelIconProps> = ({
  type,
  className = "h-7 w-7",
}) => {
  switch (type) {
    // =========================================================================
    // 1. WEB DEVELOPMENT PHASE (10 Solid Brand Assets)
    // =========================================================================

    case "nextjs":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-950 text-white shadow-2xs">
          <svg className="h-4.5 w-4.5" viewBox="0 0 180 180" fill="none">
            <path
              d="M149.5 159.5L61.3 45H45V135H58.5V64.1L139 168C142.7 165.4 146.2 162.6 149.5 159.5Z"
              fill="white"
            />
            <rect x="122.5" y="45" width="13.5" height="90" fill="white" />
          </svg>
        </div>
      );

    case "react":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#00D8FF]">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
      );

    case "typescript":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#3178C6] text-white font-sans text-[12px] font-bold shadow-2xs">
          TS
        </div>
      );

    case "shopify":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#95BF47]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.8 6.2c-.1-.3-.4-.5-.7-.5-.3 0-3.3-.2-3.3-.2s-2.1-2.1-2.3-2.3c-.2-.2-.6-.3-.9-.2-.1 0-.7.2-1.6.5C10 2.2 9 1.4 8.7 1.4c-.4 0-.8.4-1 .8L6 6.8s-2.3.7-2.5.8c-.5.2-.6.7-.5 1.1l3 14.1c.1.5.6.9 1.1.9h9.8c.5 0 1-.4 1.1-.9l1.8-16.6zm-8.6-3.4c.5-.2 1.1-.3 1.8-.4.4.4.9 1 1.4 1.7l-3.2.9V2.8z" />
          </svg>
        </div>
      );

    case "nodejs":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#5FA04E]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.9 8.4v7.2L12 19.7l7.1-4.1V8.4L12 4.3z" />
          </svg>
        </div>
      );

    case "graphql":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#E10098]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      );

    case "tailwind":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#06B6D4]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
          </svg>
        </div>
      );

    case "postgresql":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#336791]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
      );

    case "python":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none">
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

    case "lighthouse":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#F44B21]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v3l2 1v9h12v-9l2-1V7l-8-5zm0 3.3L16 8h-8l4-2.7zM8 18v-6h8v6H8z" />
          </svg>
        </div>
      );

    // =========================================================================
    // 2. CLOUD INFRASTRUCTURE PHASE (10 Solid Brand Assets)
    // =========================================================================

    case "cloudflare":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#F38020]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.2 12.8c-.2 0-.4.1-.6.1-.2-2.1-2-3.8-4.2-3.8-1.5 0-2.8.8-3.5 2-.4-.2-.8-.3-1.3-.3-1.6 0-3 1.3-3 2.9 0 .1 0 .2.1.3-1.6.3-2.7 1.6-2.7 3.2 0 1.9 1.5 3.3 3.4 3.3h11.9c1.9 0 3.5-1.5 3.5-3.4 0-1.8-1.4-3.3-3.2-3.4 0-.3-.4-.9-.4-.9z" />
          </svg>
        </div>
      );

    case "aws":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#FF9900]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" fill="none" />
          </svg>
        </div>
      );

    case "docker":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#2496ED]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.9 12.5h-1.8v-1.8h1.8v1.8zm-2.4 0H9.7v-1.8h1.8v1.8zm-2.4 0H7.3v-1.8h1.8v1.8zm4.8-2.4h-1.8V8.3h1.8v1.8zm-2.4 0H9.7V8.3h1.8v1.8zm-2.4 0H7.3V8.3h1.8v1.8zm-2.4 0H4.9V8.3h1.8v1.8zm9.6 0h-1.8V8.3h1.8v1.8zm-2.4-2.4H9.7V5.9h1.8v1.8zm8.6 6.3c-.6-.4-1.8-.4-2.6.2-.2-1.3-1.1-2.1-2.4-2.3l-.4-.1-.2.4c-.4.9-.4 2.3.4 3.3-.4.2-.8.5-1.3.8H1.3C.8 19 3.5 21 8.8 21c7.2 0 11.6-3.8 11.6-8.8 0-.4 0-.8-.1-1.2l.6-.4z" />
          </svg>
        </div>
      );

    case "kubernetes":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#326CE5]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
          </svg>
        </div>
      );

    case "terraform":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#7B42BC]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.4 0h6.8l7 12-7 12H1.4l7-12-7-12zm7.6 0h6.8l7 12-7 12H9l7-12-7-12z" />
          </svg>
        </div>
      );

    case "gcp":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#4285F4]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
          </svg>
        </div>
      );

    case "azure":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#0078D4]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.05 4.24l-4.5 7.82 5.48 7.39H4.15l7.39-12.86 1.51-2.35h-.01zM14.47 2l-3.32 5.78 4.29 5.8L21 2h-6.53z" />
          </svg>
        </div>
      );

    case "supabase":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#3ECF8E]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.36 9.87a1.47 1.47 0 00-1.16-.62h-7.05L17.7 2.1a1 1 0 00-.77-1.1 1 1 0 00-1.07.41L2.64 14.13a1.47 1.47 0 001.16 2.37h7.05l-4.55 7.15a1 1 0 00.77 1.1 1 1 0 001.07-.41l13.22-12.72a1.47 1.47 0 00.06-1.75z" />
          </svg>
        </div>
      );

    case "redis":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#DC382D]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 7.5L12 2 3 7.5v9L12 22l9-5.5v-9zM12 4.2l6.8 4.1L12 12.5 5.2 8.3 12 4.2zM5 10.3l6 3.7v6.2l-6-3.7v-6.2zm14 6.2l-6 3.7v-6.2l6-3.7v6.2z" />
          </svg>
        </div>
      );

    case "githubactions":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#2088FF]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" strokeLinecap="round" />
          </svg>
        </div>
      );

    // =========================================================================
    // 3. AI & AUTOMATION PHASE (10 Solid Brand Assets)
    // =========================================================================

    case "openai":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#10A37F]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.28 9.37a5.98 5.98 0 00-.51-4.91 6.06 6.06 0 00-6.51-2.9A6.06 6.06 0 0010.5.5a6.06 6.06 0 00-5.78 4.19 6.04 6.04 0 00-3.93 2.87 6.07 6.07 0 00.74 7.1 6.06 6.06 0 00.51 4.91 6.06 6.06 0 006.51 2.9A6.06 6.06 0 0013.5 23.5a6.06 6.06 0 005.78-4.19 6.04 6.04 0 003.93-2.87 6.07 6.07 0 00-.93-7.07zM12 15a3 3 0 110-6 3 3 0 010 6z" />
          </svg>
        </div>
      );

    case "python-ai":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none">
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

    case "pytorch":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#EE4C2C]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.9 2.5a.8.8 0 00-1.1.2L10 5.4c-2.3 2.8-3.4 5.9-2.9 9 1 5.9 7 8.3 11 4.5 4.3-4.1 2.7-10.7-2.6-13.6L12.9 2.5zM17 10a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
        </div>
      );

    case "langchain":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[#00A67E] border border-emerald-100/90 shadow-2xs font-mono font-bold text-[11px]">
          LC
        </div>
      );

    case "anthropic":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#CC785C]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.5 3L7 21h3l1.5-3.6h5l1.5 3.6h3L14.5 3zm-2.2 11.8l1.7-4.1 1.7 4.1h-3.4zM3 21h3L10.5 9h-3L3 21z" />
          </svg>
        </div>
      );

    case "huggingface":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#FFD21E]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <circle cx="8" cy="10" r="1.5" fill="#000" />
            <circle cx="16" cy="10" r="1.5" fill="#000" />
            <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "pinecone":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#047857]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3 5-3 2-3-2 3-5zm0 8l4 6-4 2-4-2 4-6zm0 9l3 3h-6l3-3z" />
          </svg>
        </div>
      );

    case "tensorflow":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#FF6F00]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5v10l-4-2.3V8.8l-5-2.8v14.4l-4-2.3V8.8L3 11.6v5.8l-4 2.3V7l9-5z" />
          </svg>
        </div>
      );

    case "zapier":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-orange-50 text-[#FF4A00] font-extrabold text-xl leading-none border border-orange-100/70">
          *
        </div>
      );

    case "hubspot":
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#FF7A59]">
          <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 7.5a2.5 2.5 0 00-2.3 1.5h-3.4a2.5 2.5 0 00-4.6-.3l-3.4 2A2.5 2.5 0 105 13l3.4-2a2.5 2.5 0 002.4.5v3.4a2.5 2.5 0 102.5 0v-3.4a2.5 2.5 0 001.9-1.5h2.3a2.5 2.5 0 100-2.5z" />
          </svg>
        </div>
      );

    default:
      return (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-[#0A5FD7] font-mono text-[11px] font-bold">
          API
        </div>
      );
  }
};