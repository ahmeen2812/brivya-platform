"use client";

import React, { useRef, useEffect } from "react";
import { SAAS_PRODUCTS_CONTENT } from "@/config/services/saasProducts";
import { initLifecycleAnimation } from "./animations";
import { SaasLifecycleGridMobile } from "./mobile/SaasLifecycleGridMobile";

export const SaasLifecycleGrid: React.FC = () => {
  const { lifecycle } = SAAS_PRODUCTS_CONTENT;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = initLifecycleAnimation(
      {
        header: headerRef.current,
        cards: cardRefs.current,
      },
      containerRef.current
    );

    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* DESKTOP VIEWPORT */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full mb-20 select-none overflow-x-clip"
      >
        <div ref={headerRef} className="max-w-[760px] mb-10 will-change-transform">
          <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
            Engineering Methodology
          </span>
          <h2 className="font-sans text-[32px] font-extrabold text-[#06162C] tracking-tight leading-[1.14]">
            {lifecycle.heading}
          </h2>
          <p className="mt-3 font-sans text-[16px] text-[#475569] font-normal">
            {lifecycle.subtitle}
          </p>
        </div>

        {/* 3-Column Progression Grid */}
        <div className="grid grid-cols-3 gap-6">
          {lifecycle.phases.map((item, index) => (
            <div
              key={item.phase}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="relative rounded-3xl border border-[#BACFE6] bg-white/70 backdrop-blur-xs p-7 shadow-[0_8px_30px_-6px_rgba(7,54,109,0.04)] flex flex-col justify-between hover:-translate-y-1 hover:border-[#0A5FD7]/40 hover:shadow-md transition-all duration-300 will-change-transform"
            >
              <div>
                <span className="font-mono text-[11px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-3">
                  {item.phase}
                </span>
                <h3 className="font-sans text-[20px] font-bold text-[#06162C] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.7] text-[#475569] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED MOBILE VIEWPORT */}
      <div className="block lg:hidden">
        <SaasLifecycleGridMobile />
      </div>
    </>
  );
};