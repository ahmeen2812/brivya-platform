"use client";

import React, { forwardRef } from "react";
import { WaveRateCurves } from "./CardGraphicLayers";

interface CardProps {
  data: {
    title: string;
    description: string;
  };
}

export const CardValue = forwardRef<HTMLDivElement, CardProps>(
  ({ data }, ref) => {
    return (
      <div 
        ref={ref}
        className="group relative flex flex-col justify-start overflow-hidden rounded-[14px] bg-gradient-to-br from-[#F1E5F8] via-[#EAE1F5] to-[#E5E7F0] p-6 sm:p-8 text-left transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:hover:-translate-y-1.5 shadow-sm lg:hover:shadow-[0_16px_34px_rgba(15,23,42,0.06)] border border-white/50 hover:border-white/90 w-full min-h-[260px] md:min-h-[280px] lg:min-h-[300px] invisible"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <WaveRateCurves />
        </div>
        
        <div className="relative z-10 flex flex-col flex-1 h-full w-full pointer-events-none">
          <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] flex items-center justify-center rounded-[10px] sm:rounded-[12px] bg-[#EAE1F5] border border-[#D5C2EA]/50 text-[#9333EA] shadow-xs transition-colors duration-300 ease-out group-hover:bg-white mb-6 lg:mb-8 shrink-0">
            <svg className="w-[22px] h-[22px] transition-transform duration-[350ms] ease-out lg:group-hover:scale-[1.08] lg:group-hover:-rotate-[3deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a8 8 0 0 1-5 7.59C14.22 22 13 22 12 22a10 10 0 0 1-9-1.93" />
              <path d="M22 11h-3a2 2 0 0 0 0 4h3z" />
            </svg>
          </div>
          
          <div className="flex-1 min-h-[16px]"></div>
          
          <div className="flex flex-col mt-auto pt-2 relative z-20 pb-1">
             <h3 className="font-sans font-bold text-[#06162C] text-[18px] sm:text-[20px] md:text-[21px] tracking-tight leading-snug">
               {data.title}
             </h3>
             <p className="mt-2.5 font-sans font-normal text-[#475569] text-[14px] sm:text-[14.5px] leading-relaxed max-w-[95%]">
               {data.description}
             </p>
          </div>
        </div>

        <div 
           className="absolute bottom-0 left-[20px] right-[20px] h-[2.5px] rounded-t-sm transform origin-left scale-x-0 transition-transform duration-[450ms] ease-out lg:group-hover:scale-x-100 bg-[#9333EA] pointer-events-none"
           aria-hidden="true"
        />
      </div>
    );
  }
);
CardValue.displayName = "CardValue";