"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { UniversalServicePageConfig } from "../types";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";
import gsap from "gsap";

interface UniversalHeroProps {
  config: UniversalServicePageConfig["hero"];
}

export const UniversalHero: React.FC<UniversalHeroProps> = ({ config }) => {
  const [imageError, setImageError] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const isImageLeft = config.imageAlignment === "left";

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "cubic-bezier(0.16, 1, 0.3, 1)" }});
    
    // Dynamic Slide Origin Vectors ensuring physics pull cleanly matching orientation constraints.
    const imageSlideDir = isImageLeft ? -150 : 150; 
    
    tl.fromTo(imageRef.current, { autoAlpha: 0, x: imageSlideDir, scale: 1.05 }, { autoAlpha: 1, x: 0, scale: 1, duration: 1.15 }, 0)
      .fromTo(tagRef.current, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.1)
      .fromTo(headRef.current, { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, duration: 0.8 }, 0.18)
      .fromTo(lineRef.current, { autoAlpha: 0, scaleY: 0, transformOrigin: "top" }, { autoAlpha: 1, scaleY: 1, duration: 0.5 }, 0.28)
      .fromTo(descRef.current, { autoAlpha: 0, x: -30 }, { autoAlpha: 1, x: 0, duration: 0.7 }, 0.35);
      
    return () => { tl.kill(); };
  }, [isImageLeft]);

  return (
    <section ref={containerRef} className="hidden lg:block relative w-full pt-4 pb-12 select-none overflow-x-clip">
      <div className="grid grid-cols-12 gap-12 items-center">
        
        {/* Dynamic Image Payload */}
        <div className={`col-span-5 flex items-center justify-center ${isImageLeft ? "order-1" : "order-2"}`}>
           <div ref={imageRef} className="relative w-full aspect-[4/3] flex items-center justify-center will-change-transform">
             {!imageError ? (
                <Image src={config.imagePath} alt={config.imageAlt} fill sizes="500px" className="object-contain" priority onError={() => setImageError(true)} />
             ) : (
                <div className="flex items-center justify-center w-full h-full bg-slate-100 rounded-3xl border border-slate-300">
                   <span className="font-mono text-xs text-slate-500 text-center px-4">IMG FAILED: {config.imagePath}</span>
                </div>
             )}
           </div>
        </div>

        {/* Dynamic Content Structure Payload */}
        <div className={`col-span-7 flex flex-col justify-center ${isImageLeft ? "order-2" : "order-1"}`}>
           <div ref={tagRef} className="w-fit mb-4 will-change-transform">
              <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-widest">{config.serviceTitle}</span>
           </div>
           
           <div className="overflow-hidden pb-1">
             <h1 ref={headRef} className="font-sans text-[44px] xl:text-[50px] font-extrabold text-[#07366D] leading-[1.08] tracking-[-0.03em] will-change-transform">
                {config.heading}
             </h1>
           </div>

           <div className="mt-8 flex items-stretch">
             <div ref={lineRef} className="w-[3px] bg-[#0A5FD7] shrink-0 rounded-full will-change-transform" />
             <div className="overflow-hidden pl-6 py-1">
               <p ref={descRef} className="font-sans text-[16px] leading-[1.72] text-[#475569] font-medium tracking-[-0.01em] max-w-[580px] will-change-transform">
                  {config.description}
               </p>
             </div>
           </div>
        </div>
        
      </div>
    </section>
  );
};