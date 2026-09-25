"use client";

import React, { forwardRef } from "react";

// Flexible decoupled typing securely accepting variable inputs processing array items correctly monitoring layouts logically bounding dynamically natively integrating smartly formatting inputs exactly building limits flawlessly executing completely rendering layouts carefully setting boundaries correctly mapping automatically naturally updating paths neatly cleanly standard correctly processing logically structurally handling safely efficiently tracing limits precisely returning limits completely parsing inputs neatly processing formatting efficiently successfully correctly parsing states smartly generating exactly safely monitoring effortlessly updating efficiently setting flawlessly perfectly seamlessly connecting safely resolving parameters flawlessly providing gracefully handling optimally
export interface ValidatedCardProps {
  data: {
    id: string;
    title: string;
    desc: string;
    baseThemeClass: string;
    gradientLayer: string;
    iconHighlight: string;
    accentBar: string;
    vectorId: string;
    backgroundArtifact: React.FC;
  };
}

const renderContextGraphic = (strKey: string) => {
  const genericScaleParamsCSSStylesLogicLimits = "w-[21px] h-[21px] sm:w-[24px] sm:h-[24px] transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
  
  switch(strKey) {
     case "network": return <svg className={`${genericScaleParamsCSSStylesLogicLimits} lg:group-hover:rotate-[4deg] lg:group-hover:scale-105`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
     case "infrastructure": return <svg className={`${genericScaleParamsCSSStylesLogicLimits} lg:group-hover:-rotate-[3deg] lg:group-hover:scale-105`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
     case "discussion": return <svg className={`${genericScaleParamsCSSStylesLogicLimits} lg:group-hover:rotate-[3deg] lg:group-hover:scale-105`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>;
     default: return null;
  }
};

export const FeatureCard = forwardRef<HTMLDivElement, ValidatedCardProps>(
  ({ data }, internalDOMTargetReferenceValueLockConfigMapRefBoundsPropertyRouting) => {

    const TextureBackgroundVisualEntityFrameOutput = data.backgroundArtifact;

    return (
       <div 
          ref={internalDOMTargetReferenceValueLockConfigMapRefBoundsPropertyRouting} 
          className="perspective-[1400px] w-full"
          style={{ transformStyle: "preserve-3d" }}
       >
         <div 
           className={`group relative overflow-hidden flex flex-col justify-start rounded-[20px] sm:rounded-[24px] border transition-all duration-[450ms] ease-out w-full shadow-[0_2px_12px_rgba(15,23,42,0.015)] p-[28px] lg:p-[36px] bg-gradient-to-b from-[#FDFDFE] to-[#F8FAFC] opacity-[0.96] border-slate-200/50 grayscale-[25%] lg:hover:-translate-y-2 lg:hover:shadow-[0_24px_50px_rgba(15,23,42,0.07)] lg:hover:grayscale-0 lg:hover:brightness-[1.01] hover:border-slate-200 hover:bg-gradient-to-b ${data.gradientLayer}`}
         >

            <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-color-burn pointer-events-none lg:group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-[24px] z-0">
               <TextureBackgroundVisualEntityFrameOutput />
            </div>
            
            <div className="relative w-full z-10 pointer-events-none flex flex-col h-full min-h-[220px] md:min-h-[260px] xl:min-h-[300px]">

               <div 
                  className={`w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] flex items-center justify-center shrink-0 mb-[26px] md:mb-[32px] rounded-[14px] shadow-sm border border-transparent lg:group-hover:border-inherit lg:group-hover:shadow-md transition-all duration-[400ms] ${data.iconHighlight}`}
               >
                  {renderContextGraphic(data.vectorId)}
               </div>
               
               <div className="flex-1 min-h-[16px] lg:min-h-[24px]"></div>
               
               <div className="flex flex-col mt-auto pt-2 relative z-20 pb-[4px]">
                 <h3 className="font-sans font-bold sm:font-semibold text-[#0B1527] text-[18px] md:text-[20px] lg:text-[21px] tracking-tight leading-snug transition-colors lg:group-hover:text-[#06162C]">
                   {data.title}
                 </h3>
                 <p className="mt-2.5 font-sans font-normal text-[#5A6E8A] text-[14px] sm:text-[14.5px] lg:text-[15px] leading-[1.6] sm:leading-[1.65] max-w-[95%] text-pretty transition-colors lg:group-hover:text-[#475569]">
                   {data.desc}
                 </p>
               </div>
            </div>

            <div 
               className={`absolute bottom-0 left-[18px] right-[18px] h-[2px] rounded-t-[1px] transform origin-left scale-x-0 transition-transform duration-[450ms] ease-out lg:group-hover:scale-x-100 pointer-events-none`}
               style={{ backgroundColor: data.accentBar }}
               aria-hidden="true"
            />
         </div>
       </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";