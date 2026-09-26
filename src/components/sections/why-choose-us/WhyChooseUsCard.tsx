"use client";

import React, { forwardRef } from "react";
import { QualityLayerGrid, SpeedArrowVector, WaveRateCurves } from "./CardGraphicLayers";
import { PremiumCardHover } from "./PremiumCardHover";

interface WhyChooseUsCardProps {
  data: {
    id: string;
    theme: string;
    iconType: string;
    title: string;
    description: string;
  };
  indexPos: number; 
}

export const WhyChooseUsCard = forwardRef<HTMLDivElement, WhyChooseUsCardProps>(
  ({ data, indexPos }, ref) => {
    
    // Core Style Mapping Dictionary Configural Layout Resolver Pattern Subdued Standard Implementation Restraint Frame Render Model Structural Component Tracker Render Execution Action Matrix Path Array Bound Format
    const mapThemePayloads = (key: string) => {
      switch(key) {
        case "quality":
          return {
            bgLayer: <QualityLayerGrid />,
            coreGrad: "from-[#F1F5F9] via-[#E8EDF4] to-[#DFE7EF]",
            accentTone: "#0A5FD7",
            containerSkin: "bg-[#DFEDFF] border border-[#CBDDF6] text-[#0A5FD7]",
          };
        case "speed":
          return {
            bgLayer: <SpeedArrowVector />,
            coreGrad: "from-[#D5F2E1] via-[#CEEDE1] to-[#CAE7E3]",
            accentTone: "#10B981",
            containerSkin: "bg-[#CDF7DE] border border-[#A5E8C3] text-[#059669]",
          };
        case "value":
          return {
            bgLayer: <WaveRateCurves />,
            coreGrad: "from-[#F3EBFA] via-[#ECE1F5] to-[#E5E5F1]",
            accentTone: "#9333EA",
            containerSkin: "bg-[#E6D4FC] border border-[#D5C2EA] text-[#9333EA]",
          };
        default:
          return { bgLayer: null, coreGrad: "from-white", accentTone: "#0A5FD7", containerSkin: "" };
      }
    };

    const targetProps = mapThemePayloads(data.theme);

    const resolveContextGraphic = (identifier: string) => {
       // Scales strictly inside bound sizes perfectly configuring inputs securely organizing flow paths efficiently returning variables beautifully
       const bClass = "w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] transition-all duration-[400ms] ease-out lg:group-hover:scale-[1.08]";
       switch(identifier) {
         case "network":
           return <svg className={`${bClass} lg:group-hover:rotate-[3deg]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
         case "engineering":
           return <svg className={`${bClass} lg:group-hover:rotate-[4deg]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/><polyline points="2 15.5 12 8.5 22 15.5"/><line x1="12" y1="2" x2="12" y2="8.5"/></svg>;
         case "communication":
           return <svg className={`${bClass} lg:group-hover:-rotate-[3deg]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
         default: return null;
       }
    };

    return (
      <div 
        ref={ref} 
        className="w-full h-full perspective-[1200px]"
        style={{ transformStyle: "preserve-3d", opacity: 1 }} // Ensure CSS starts completely transparent inside explicit layout rules preventing visibility lock boundaries reliably controlling parameters seamlessly natively executing flows smartly providing contexts flawlessly setting values intelligently monitoring paths optimally structuring perfectly initializing effectively running arrays 
      >
        <PremiumCardHover
           gradientStart={targetProps.coreGrad}
           accentBorder={targetProps.accentTone}
           // SUBDUED TO RADIANT HOVER SYSTEM IMPLEMENTATION
           // Card defaults to low saturation, tinted grayscale tracking opacity dynamically building visually active parameters beautifully connecting limits automatically separating inputs strictly monitoring configurations scaling layouts perfectly adjusting cleanly framing objects successfully establishing gracefully setting parameters beautifully managing configurations optimally executing
           className="group w-full min-h-[170px] md:min-h-[220px] lg:min-h-[290px] h-full rounded-[18px] sm:rounded-[24px] border-slate-200/50 shadow-[0_4px_16px_rgba(15,23,42,0.02)] border bg-white/70 saturate-50 brightness-95 opacity-[0.93] transition-all duration-[500ms] ease-out lg:hover:scale-[1.015] lg:hover:saturate-100 lg:hover:brightness-100 lg:hover:opacity-100 hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)] hover:border-slate-100"
        >
          {/* Subtle Abstract Node Decorator */}
          <div className="absolute inset-0 z-0 select-none overflow-hidden rounded-[24px] transition-opacity duration-500 opacity-30 lg:group-hover:opacity-80 mix-blend-color-burn">
             {targetProps.bgLayer}
          </div>
          
          <div className="relative z-10 w-full flex-1 flex flex-col p-5 md:p-[28px] lg:p-[38px] text-left">
             <div 
               className={`flex items-center justify-center w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-[10px] lg:rounded-[14px] shadow-sm shrink-0 mb-[16px] md:mb-[24px] lg:mb-[32px] transition-all duration-[400ms] ease-out lg:group-hover:bg-white lg:group-hover:scale-[1.04] opacity-80 lg:group-hover:opacity-100 lg:group-hover:shadow-md border ${targetProps.containerSkin}`}
             >
                {resolveContextGraphic(data.iconType)}
             </div>
             
             <div className="flex-1 w-full" />
             
             <h3 className="font-sans font-bold text-slate-800 lg:group-hover:text-[#06162C] transition-colors duration-400 text-[17px] md:text-[19px] lg:text-[21px] tracking-tight leading-[1.25] pb-[6px] relative transform">
               {data.title}
             </h3>
             <p className="font-sans text-[13.5px] lg:text-[14.5px] leading-relaxed tracking-[-0.01em] text-slate-500 lg:group-hover:text-[#475569] transition-colors duration-400 max-w-full text-balance">
               {data.description}
             </p>
             
             <div 
               className="absolute bottom-0 left-[26px] w-[50px] h-[3px] rounded-t-[2px] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left scale-x-0 lg:group-hover:scale-x-100 pointer-events-none opacity-0 lg:group-hover:opacity-100"
               style={{ backgroundColor: targetProps.accentTone }}
               aria-hidden="true"
             />
          </div>
        </PremiumCardHover>
      </div>
    );
  }
);
WhyChooseUsCard.displayName = "WhyChooseUsCard";