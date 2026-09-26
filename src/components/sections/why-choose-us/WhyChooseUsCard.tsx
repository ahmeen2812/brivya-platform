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
}

export const WhyChooseUsCard = forwardRef<HTMLDivElement, WhyChooseUsCardProps>(
  ({ data }, ref) => {
    
    const mapThemePayloads = (key: string) => {
      switch(key) {
        case "quality":
          return {
            bgLayer: <QualityLayerGrid />,
            coreGrad: "from-[#F1F5F9] via-[#E8EDF4] to-[#DFE7EF]",
            accentTone: "#0A5FD7",
            containerSkin: "bg-[#DFEDFF]/60 text-[#0A5FD7] border-[#0A5FD7]/15",
          };
        case "speed":
          return {
            bgLayer: <SpeedArrowVector />,
            coreGrad: "from-[#D5F2E1] via-[#CEEDE1] to-[#CAE7E3]",
            accentTone: "#10B981",
            containerSkin: "bg-[#CDF7DE]/60 text-[#059669] border-[#059669]/15",
          };
        case "value":
          return {
            bgLayer: <WaveRateCurves />,
            coreGrad: "from-[#F3EBFA] via-[#ECE1F5] to-[#E5E5F1]",
            accentTone: "#9333EA",
            containerSkin: "bg-[#E6D4FC]/60 text-[#9333EA] border-[#9333EA]/15",
          };
        default:
          return { bgLayer: null, coreGrad: "from-white", accentTone: "#0A5FD7", containerSkin: "" };
      }
    };

    const targetProps = mapThemePayloads(data.theme);

    // Swap old icons out targeting fresh content representations smoothly natively formatting constraints effectively rendering
    const resolveContextGraphic = (identifier: string) => {
       const bClass = "w-[21px] h-[21px] transition-transform duration-[350ms] ease-out lg:group-hover:scale-[1.07]";
       switch(identifier) {
         // Network connection / Connected Thinking Concept Mapping Structurally Scaling Smoothly Producing Outputs Safely 
         case "network":
           return <svg className={`${bClass} lg:group-hover:rotate-[3deg]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
         // Cloud/Database/Block structure rendering efficiently representing 'Practical engineering' tracking completely parsing nicely  
         case "engineering":
           return <svg className={`${bClass} lg:group-hover:rotate-[4deg]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/><polyline points="2 15.5 12 8.5 22 15.5"/><line x1="12" y1="2" x2="12" y2="8.5"/></svg>;
         // Intersected speech format producing Clean Conversational Interface cleanly producing parameters rendering flawlessly routing nicely    
         case "communication":
           return <svg className={`${bClass} lg:group-hover:-rotate-[3deg]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
         default: return null;
       }
    };

    return (
      <div 
        ref={ref} 
        className="w-full h-full perspective-[1200px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <PremiumCardHover
           gradientStart={targetProps.coreGrad}
           accentBorder={targetProps.accentTone}
           className="w-full min-h-[300px] h-full rounded-[22px] sm:rounded-[24px] border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.02)]"
        >
          <div className="absolute inset-0 z-0 select-none overflow-hidden rounded-[24px]">
             {targetProps.bgLayer}
          </div>
          
          <div className="relative z-10 w-full flex-1 flex flex-col p-[28px] sm:p-[32px] md:p-[38px] text-left">
             <div 
               className={`flex items-center justify-center w-[48px] h-[48px] rounded-[14px] shadow-sm shrink-0 mb-[32px] border backdrop-blur-md transition-all duration-[300ms] group-hover:bg-white group-hover:scale-[1.04] ${targetProps.containerSkin}`}
             >
                {resolveContextGraphic(data.iconType)}
             </div>
             
             <div className="flex-1 w-full" />
             
             <h3 className="font-sans font-bold text-[#06162C] text-[18px] sm:text-[20px] lg:text-[21px] tracking-tight leading-[1.25] pb-2 relative transform transition-transform duration-300">
               {data.title}
             </h3>
             <p className="font-sans text-[14px] sm:text-[14.5px] leading-relaxed tracking-[-0.01em] text-[#475569] max-w-[94%] text-pretty">
               {data.description}
             </p>
             
             <div 
               className="absolute bottom-0 left-[26px] w-[50px] h-[3px] rounded-t-[2px] transition-transform duration-500 ease-out origin-left scale-x-0 group-hover:scale-x-100 pointer-events-none"
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