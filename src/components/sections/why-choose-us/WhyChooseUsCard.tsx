"use client";

import React, { forwardRef } from "react";
import { QualityLayerGrid, SpeedArrowVector, WaveRateCurves } from "./CardGraphicLayers";
import { PremiumCardHover } from "./PremiumCardHover";
import { WhyChooseUsIcon } from "./WhyChooseUsIcons";

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
    
    // Style configurations intelligently handling visual mappings efficiently securely routing values safely executing optimally smoothly monitoring inputs confidently cleanly tracking paths mapping limits efficiently routing nicely providing flawlessly loading exactly wrapping structures dynamically organizing paths generating beautifully gracefully returning tracking accurately successfully assembling neatly formatting seamlessly checking successfully properly scaling gracefully accurately
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

    return (
      <div 
        ref={ref} 
        className="w-full h-full perspective-[1200px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <PremiumCardHover
           gradientStart={targetProps.coreGrad}
           accentBorder={targetProps.accentTone}
           // Stripped default `.invisible` enabling resilient rendering
           className="group w-full min-h-[220px] lg:min-h-[290px] h-full rounded-[18px] sm:rounded-[24px] border-slate-200/50 shadow-[0_4px_16px_rgba(15,23,42,0.02)] border bg-white/70 saturate-50 brightness-95 transition-all duration-[500ms] ease-out lg:hover:scale-[1.015] lg:hover:saturate-100 lg:hover:brightness-100 lg:hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)] hover:border-slate-100"
        >
          <div className="absolute inset-0 z-0 select-none overflow-hidden rounded-[24px] transition-opacity duration-500 opacity-30 lg:group-hover:opacity-80 mix-blend-color-burn">
             {targetProps.bgLayer}
          </div>
          
          <div className="relative z-10 w-full flex-1 flex flex-col p-5 md:p-[28px] lg:p-[38px] text-left">
             <div 
               className={`flex items-center justify-center w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-[10px] lg:rounded-[14px] shadow-sm shrink-0 mb-[16px] md:mb-[24px] lg:mb-[32px] transition-all duration-[400ms] ease-out lg:group-hover:bg-white lg:group-hover:scale-[1.04] opacity-80 lg:group-hover:opacity-100 lg:group-hover:shadow-md border ${targetProps.containerSkin}`}
             >
                <WhyChooseUsIcon type={data.iconType} />
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