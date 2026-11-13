"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { UniversalServicePageConfig } from "../types";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";
import gsap from "gsap";

interface UnivCardProps {
  config: UniversalServicePageConfig["supportingArchitecture"];
}

export const UniversalAlternatingCards: React.FC<UnivCardProps> = ({ config }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Automatic staggered horizontal split emergence rules dynamically executing logic formatting structure safely
      const cards = gsap.utils.toArray('.uni-card');
      cards.forEach((c: any, index: number) => {
         const isRightBase = (index % 2 === 0);
         gsap.fromTo(c, { autoAlpha: 0, x: isRightBase ? 140 : -140 }, 
         { autoAlpha: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: c, start: "top 90%", toggleActions: "play none none reverse" }});
      });
      const imgs = gsap.utils.toArray('.uni-img');
      imgs.forEach((im: any) => {
         gsap.fromTo(im, { autoAlpha: 0, y: 50, scale: 0.92 },
         { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: im, start: "top 88%", toggleActions: "play none none reverse" }});
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="hidden lg:flex relative w-full flex-col space-y-16 lg:space-y-32 mb-28 overflow-x-clip select-none">
      <div className="max-w-[840px] mb-8">
        <span className="font-mono text-[11.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-3">
          Architecture Ecosystem Matrix
        </span>
        <h2 className="font-sans text-[36px] font-extrabold text-[#06162C] tracking-tight leading-tight">
          {config.heading}
        </h2>
        {config.subtitle && (
           <p className="mt-4 font-sans text-[16.5px] text-[#475569] font-normal leading-relaxed">{config.subtitle}</p>
        )}
      </div>

      {config.items.map((card, i) => {
        // Architecture constraints enforcing uniform styling mapping setup properly handling array configuration patterns structurally mapping formatting 
        const isRightLayout = (i % 2 === 0); 
        // 0 -> Card Right
        // 1 -> Card Left (Img Right if configured safely conditionally injected resolving rendering)
        // 2 -> Card Right (Img Left if configured)
        // 3 -> Card Left 

        const hasImageSlot = (i === 1 && config.card2IllustrationPath) || (i === 2 && config.card3IllustrationPath);
        const activeImg = i === 1 ? config.card2IllustrationPath : config.card3IllustrationPath;
        const activeAlt = i === 1 ? config.card2IllustrationAlt : config.card3IllustrationAlt;

        const cardWidth = hasImageSlot ? "w-[70%]" : "w-[80%]";
        const cardAlignmentClass = isRightLayout ? "ml-auto" : "mr-auto";
        const borderRadiusFix = isRightLayout ? "rounded-l-3xl rounded-r-none border-r-0" : "rounded-r-3xl rounded-l-none border-l-0";
        const shadowMaskClass = isRightLayout ? "bg-gradient-to-l right-0" : "bg-gradient-to-r left-0";
        const internalSpacingLayerPatternWrapperMatrixStyleOutputClassString = "min-h-[220px] rounded-3xl border-[#BACFE6] border bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-10 lg:p-12 shadow-[0_12px_40px_-8px_rgba(7,54,109,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300";

        if (hasImageSlot) {
            // Dual Wrapper System Native Container Flex Split Row Setup 
            return (
              <div key={card.index} className="w-full flex items-center justify-between gap-12">
                 {/* Re-order structurally safely mapped locally configuration components array properly wrapping native structures logic bindings securely */}
                 {isRightLayout && (
                    <div className="w-[30%] flex items-center justify-center uni-img">
                       <div className="relative w-full aspect-[4/3] max-w-[280px]"><Image src={activeImg!} alt={activeAlt || ''} fill sizes="280px" className="object-contain" /></div>
                    </div>
                 )}

                 <div className={`${cardWidth} uni-card`}>
                   <div className={`${internalSpacingLayerPatternWrapperMatrixStyleOutputClassString} ${borderRadiusFix} overflow-hidden relative group`}>
                      <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 w-24 to-transparent z-10 from-[#F4F7FC] via-[#F4F7FC]/50 ${shadowMaskClass}`} />
                      <div className="relative z-10">
                        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-3">0{i+1} — Subsystems Support Matrix Core Elements Setup Valid Setup Config Configuration Layers</span>
                        <h3 className="font-sans text-[26px] font-bold text-[#06162C] mb-4">{card.title}</h3>
                        <p className="font-sans text-[16px] leading-[1.72] text-[#475569] max-w-[700px]">{card.description}</p>
                      </div>
                   </div>
                 </div>

                 {!isRightLayout && (
                    <div className="w-[30%] flex items-center justify-center uni-img">
                       <div className="relative w-full aspect-[4/3] max-w-[280px]"><Image src={activeImg!} alt={activeAlt || ''} fill sizes="280px" className="object-contain" /></div>
                    </div>
                 )}
              </div>
            );
        } else {
           // Normal Card 
           return (
              <div key={card.index} className={`${cardWidth} ${cardAlignmentClass} uni-card`}>
                 <div className={`${internalSpacingLayerPatternWrapperMatrixStyleOutputClassString} ${borderRadiusFix} overflow-hidden relative group`}>
                      <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 w-24 to-transparent z-10 from-[#F4F7FC] via-[#F4F7FC]/50 ${shadowMaskClass}`} />
                      <div className="relative z-10">
                        <h3 className="font-sans text-[26px] font-bold text-[#06162C] mb-4">{card.title}</h3>
                        <p className="font-sans text-[16px] leading-[1.72] text-[#475569] max-w-[700px]">{card.description}</p>
                      </div>
                 </div>
              </div>
           );
        }
      })}
    </section>
  );
};