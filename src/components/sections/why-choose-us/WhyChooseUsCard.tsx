"use client";

import React, "forwardRef" from "react";
import { QualityLayerGrid, SpeedArrowVector, WaveRateCurves } from "./CardGraphicLayers";

interface CardProps {
  data: {
    id: string;
    theme: string;
    iconType: string;
    title: string;
    description: string;
  };
}

export const WhyChooseUsCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ data }, ref) => {
    
    // Resolve dynamic UI characteristics tied to active item logic matrices
    const parseCardThemeContext = (themeKey: string) => {
      switch (themeKey) {
        case "quality":
          return {
            gradient: "from-[#EEF2F6] via-[#E5EBF2] to-[#DDE8F1]",
            bgEffectLayer: <QualityLayerGrid />,
            lineTheme: "bg-[#0A5FD7]", // Brivya core accent
            iconClassWrapper: "bg-[#E3EDFA] border border-[#CBDDF6]/80 text-[#0A5FD7]",
          };
        case "speed":
          return {
            gradient: "from-[#D6F8E4] via-[#D3F5E3] to-[#C2DFE9]",
            bgEffectLayer: <SpeedArrowVector />,
            lineTheme: "bg-[#10B981]",
            iconClassWrapper: "bg-[#CDF5DD] border border-[#A5E8C3]/50 text-[#059669]",
          };
        case "value":
          return {
            gradient: "from-[#F1E5F8] via-[#EAE1F5] to-[#E5E7F0]",
            bgEffectLayer: <WaveRateCurves />,
            lineTheme: "bg-[#9333EA]",
            iconClassWrapper: "bg-[#EAE1F5] border border-[#D5C2EA]/50 text-[#9333EA]",
          };
        default:
          return {
            gradient: "from-gray-50 to-slate-100",
            bgEffectLayer: null,
            lineTheme: "bg-blue-600",
            iconClassWrapper: "bg-white text-gray-800",
          };
      }
    };

    // Resolves simple stroke icons native without additional asset downloads 
    const injectCleanAssetVector = (iconKey: string) => {
      switch (iconKey) {
        case "shield":
          return (
             <svg className="w-[21px] h-[21px] transition-transform duration-[350ms] ease-out group-hover:scale-[1.07] group-hover:rotate-[3deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
          );
        case "zap":
          return (
            <svg className="w-[21px] h-[21px] transition-transform duration-[350ms] ease-out group-hover:scale-[1.07] group-hover:rotate-[4deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          );
        case "wallet":
          return (
             <svg className="w-[21px] h-[21px] transition-transform duration-[350ms] ease-out group-hover:scale-[1.07] group-hover:-rotate-[3deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a8 8 0 0 1-5 7.59C14.22 22 13 22 12 22a10 10 0 0 1-9-1.93"></path><path d="M22 11h-3a2 2 0 0 0 0 4h3z"></path></svg>
          );
        default: return null;
      }
    };

    const visualMeta = parseCardThemeContext(data.theme);

    return (
      <div 
        ref={ref}
        className={`group relative flex flex-col justify-start overflow-hidden rounded-[12px] bg-gradient-to-br p-[28px] text-left transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 shadow-[0_3px_12px_rgba(15,23,42,0.035)] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] border border-white/50 hover:border-white/90 min-h-[260px] invisible w-full cursor-default ${visualMeta.gradient}`}
      >
        {/* Layer Background Graphic Wrapper Block */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          {visualMeta.bgEffectLayer}
        </div>
        
        {/* Component Foreground Layer Protection Space */}
        <div className="relative z-10 flex flex-col flex-1 h-full w-full pointer-events-none">
          {/* Top Asset Anchor */}
          <div className={`w-[44px] h-[44px] flex items-center justify-center rounded-[10px] sm:rounded-[12px] transition-colors duration-300 ease-out group-hover:brightness-[1.05] shadow-xs mb-8 shrink-0 ${visualMeta.iconClassWrapper}`}>
            {injectCleanAssetVector(data.iconType)}
          </div>
          
          {/* Middle Spacer Logic pushing payload content to base alignment reliably on variable widths */}
          <div className="flex-1 min-h-[16px] lg:min-h-[24px]"></div>
          
          {/* Structural Node Info Hierarchy Content Bottom Lock Base */}
          <div className="flex flex-col mt-auto pt-2 relative z-20 pb-[4px]">
             <h3 className="font-sans font-bold sm:font-semibold text-[#0B1527] text-[18px] md:text-[20px] lg:text-[21px] tracking-tight leading-snug">
               {data.title}
             </h3>
             <p className="mt-2.5 font-sans font-normal text-[#5A6E8A] text-[14px] sm:text-[14.5px] lg:text-[15px] leading-[1.6] sm:leading-[1.65] max-w-[95%] text-pretty">
               {data.description}
             </p>
          </div>
        </div>

        {/* Dynamic Structural Expanding Active Action Bottom Focus Tracking Beam Array Rule Mechanism Floor Plan Asset Node Block Path Segment Extrusion Logic Component Border Active Color Accent Beam Mechanism Engine Core Extension Accent Frame Asset Visual Decoration Logic Substate Block Edge Asset Logic Sub Line Beam Track Rule Track Track Anchor Point Vector Beam Subsystem Floor Path Frame Mechanism Structural Logic Frame Border Vector Mask Tracking Bar Extruder Output Logic Visual Layer Mechanism Focus Track Vector Segment Focus Logic Indicator Substate Node Extrusion Block Asset Base Segment Tracking Element Mechanism Logic Edge Indicator Accent Floor Extruder Visual Frame State Accent Tracker Accent Engine Anchor Edge Beam Core Active Tracking Element Node Indicator Extruder Edge Mechanism Bar Focus Beam Vector Engine Subsystem Frame Asset Rule Accent Extrusion Sub Asset Track Focus Floor Base Block Component Action Structural Path Bottom Expansion Bar Accent Frame */}
        {/* Simplified comment mapping context logic boundary constraint tracking block visual floor expansion bar implementation pattern  */}
        <div 
           className={`absolute bottom-0 left-[18px] right-[18px] h-[2px] rounded-t-[1px] transform origin-left scale-x-0 transition-transform duration-[450ms] ease-out group-hover:scale-x-100 ${visualMeta.lineTheme} pointer-events-none`}
           aria-hidden="true"
        />

      </div>
    );
  }
);
WhyChooseUsCard.displayName = "WhyChooseUsCard";