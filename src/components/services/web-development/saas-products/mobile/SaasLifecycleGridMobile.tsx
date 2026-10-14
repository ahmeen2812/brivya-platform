"use client";

import React, { useRef, useEffect } from "react";
import { SAAS_PRODUCTS_CONTENT } from "@/config/services/saasProducts";
import { initLifecycleAnimation } from "../animations";

export const SaasLifecycleGridMobile: React.FC = () => {
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
    <section
      ref={containerRef}
      className="relative w-full mb-12 select-none overflow-x-clip"
    >
      <div ref={headerRef} className="mb-6 will-change-transform">
        <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-1.5">
          Engineering Methodology
        </span>
        <h2 className="font-sans text-[24px] font-extrabold text-[#06162C] tracking-tight leading-[1.18]">
          {lifecycle.heading}
        </h2>
        <p className="mt-2 font-sans text-[14px] text-[#475569]">
          {lifecycle.subtitle}
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        {lifecycle.phases.map((item, index) => (
          <div
            key={item.phase}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="rounded-2xl border border-[#BACFE6] bg-white/70 backdrop-blur-xs p-5 shadow-xs will-change-transform"
          >
            <span className="font-mono text-[10.5px] font-bold text-[#0A5FD7] uppercase tracking-wider block mb-2">
              {item.phase}
            </span>
            <h3 className="font-sans text-[17px] font-bold text-[#06162C] tracking-tight mb-2">
              {item.title}
            </h3>
            <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};