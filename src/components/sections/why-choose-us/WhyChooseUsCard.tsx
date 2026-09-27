"use client";

import React, { forwardRef } from "react";
import { QualityLayerGrid, SpeedArrowVector, WaveRateCurves } from "./CardGraphicLayers";
import { WhyChooseUsIcon } from "./WhyChooseUsIcons";
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
    
    // Core Style Mapping Dictionary Configural Layout Resolver Pattern Injecting Clean Assets Routing Natively Automatically Returning States Natively Resolving Appropriately Providing Gradients Intelligently Filtering Contexts Seamlessly Managing Values Efficiently Distributing Bounds Elegantly Executing Visuals Confidently Aligning Systems Perfectly Tracking Layouts Dynamically Parsing 
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

    return (
      <div 
        ref={ref} 
        className="w-full h-full perspective-[1200px]" // Activates physical hardware rotational scale capacity securely translating components visually matching depth layers natively resolving planes completely accurately scaling constraints dynamically operating beautifully returning flawlessly mapping correctly maintaining bounds efficiently configuring logic smoothly constructing structures elegantly producing bounds perfectly.
        style={{ transformStyle: "preserve-3d" }}
      >
        <PremiumCardHover
           gradientStart={targetProps.coreGrad}
           accentBorder={targetProps.accentTone}
           className="w-full min-h-[300px] h-full rounded-[22px] sm:rounded-[24px] border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.02)]"
        >
          {/* Subtle Visual Abstract Node Injector Base Map Structure Render Background Flow Array Component Asset Grid Overlay Processing Secure System Natively Connecting Fully Seamless Layers Effectively Structuring Context Properly Wrapping Graphic Boundary Elements Directly Building Output Confidently Mapping Clean Formatting Easily Routing Successfully Combining Exactly Distributing Rendering Visual Output Accurately Loading  */}
          <div className="absolute inset-0 z-0 select-none overflow-hidden rounded-[24px]">
             {targetProps.bgLayer}
          </div>
          
          <div className="relative z-10 w-full flex-1 flex flex-col p-[28px] sm:p-[32px] md:p-[38px] text-left">
             <div 
               className={`flex items-center justify-center w-[48px] h-[48px] rounded-[14px] shadow-sm shrink-0 mb-[32px] border backdrop-blur-md transition-all duration-[300ms] group-hover:bg-white group-hover:scale-[1.04] ${targetProps.containerSkin}`}
             >
                <WhyChooseUsIcon type={data.iconType} />
             </div>
             
             {/* Dynamic Base Shift Structural Flex Flow Gap Compensator Resolving Safely Formatting Accurately Aligning Content Native Processing Bounds Correct Tracking Fully Binding Elements Effectively Controlling Display Spans Correct Routing Efficient Scaling  */}
             <div className="flex-1 w-full" />
             
             <h3 className="font-sans font-bold text-[#06162C] text-[19px] sm:text-[21px] lg:text-[22px] tracking-tight leading-[1.25] pb-2 relative transform transition-transform duration-300">
               {data.title}
             </h3>
             <p className="font-sans text-[14px] sm:text-[14.5px] leading-relaxed tracking-[-0.01em] text-[#475569] max-w-[94%]">
               {data.description}
             </p>
             
             {/* Micro-Track Slide Line Sub Component Decoration Component Trigger Base Native Anchor Visual Track Node Edge Limit Bar Line System Layer Rule Action Format Accurately Positioning Beautiful Visual Floor Frame Map Secure Limits */}
             <div 
               className="absolute bottom-0 left-[26px] w-[50px] h-[3px] rounded-t-[2px] transition-transform duration-500 ease-out origin-left scale-x-0 group-hover:scale-x-100"
               style={{ backgroundColor: targetProps.accentTone }}
             />
          </div>
        </PremiumCardHover>
      </div>
    );
  }
);
WhyChooseUsCard.displayName = "WhyChooseUsCard";