"use client";

import React, { useRef } from "react";
import { UniversalServicePageConfig } from "../types";
import { useIsomorphicLayoutEffect } from "@/components/shared/useIsomorphicLayoutEffect";
import gsap from "gsap";

interface UniversalDirectiveProps {
  config: UniversalServicePageConfig["directiveConsole"];
}

export const UniversalDirective: React.FC<UniversalDirectiveProps> = ({ config }) => {
  const consoleRef = useRef<HTMLDivElement>(null);
  
  useIsomorphicLayoutEffect(() => {
    if (!consoleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(consoleRef.current,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: consoleRef.current, start: "top 95%", toggleActions: "play none none reverse" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="hidden lg:block relative w-full mt-24 lg:mt-32 mb-24 lg:mb-32 select-none overflow-x-clip">
      <div
        ref={consoleRef}
        className="w-full rounded-none border border-[#07366D]/35 bg-transparent p-6 lg:py-8 lg:px-12 shadow-xs will-change-transform mx-auto max-w-[1200px]"
      >
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-4 pr-6 border-r border-[#07366D]/25">
            <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-widest block mb-2">
              {config.tag}
            </span>
            <h2 className="font-sans text-[22px] lg:text-[25px] font-extrabold text-[#07366D] tracking-tight leading-snug">
              {config.heading}
            </h2>
          </div>
          
          <div className="col-span-8 flex flex-col space-y-3">
            {config.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[15px] leading-[1.68] text-[#475569] font-normal">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};