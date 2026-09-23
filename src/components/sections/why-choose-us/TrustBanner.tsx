"use client";

import React, { forwardRef } from "react";

export const TrustBanner = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div 
      ref={ref}
      className="w-full flex items-center justify-center pt-[50px] md:pt-[70px] lg:pt-[90px] border-t border-slate-100/60 mt-16 sm:mt-24 lg:mt-32 relative z-30"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center bg-[#FAFCFF] border border-blue-50 px-6 sm:px-12 py-5 sm:py-6 rounded-2xl shadow-sm gap-4 sm:gap-6 lg:gap-10">
         
         <div className="flex items-center gap-5">
           <div className="flex items-center gap-1.5 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-pointer">
              <span className="font-bold text-[#06162C] font-sans text-xl leading-none">Google</span>
              <span className="text-[#059669] text-base leading-none pl-1 pb-1 flex tracking-tighter">★★★★★</span>
           </div>
           
           <div className="w-[1px] h-6 bg-slate-200" />
           
           <div className="flex items-center gap-1.5 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-pointer">
              <span className="font-bold text-[#06162C] font-sans text-xl leading-none">Trustpilot</span>
              <span className="text-[#10B981] text-base leading-none pl-1 pb-1 flex tracking-tighter">★★★★★</span>
           </div>
         </div>
         
         <span className="hidden lg:block w-[4px] h-[4px] rounded-full bg-slate-300" />
         
         <span className="font-sans text-[13.5px] font-medium text-slate-500 max-w-[200px] sm:max-w-none text-center lg:text-left text-pretty">
           Consistently verified outcomes. Over +250 global business engagements.
         </span>
         
      </div>
    </div>
  );
});

TrustBanner.displayName = "TrustBanner";