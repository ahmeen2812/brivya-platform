"use client";

import * as React from "react";
import Link from "next/link";
import { ServiceCategory } from "@/config/servicesMegaMenu";
import { animateSubServiceArrow } from "@/animations/megaMenuAnimations";

interface MegaMenuSubServicesProps {
  category: ServiceCategory;
  onNavigate: () => void;
  bayRef?: React.RefObject<HTMLDivElement | null>;
}

export const MegaMenuSubServices: React.FC<MegaMenuSubServicesProps> = ({
  category,
  onNavigate,
  bayRef,
}) => {
  return (
    <div
      ref={bayRef}
      id={`panel-${category.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${category.id}`}
      className="flex h-full w-full flex-col justify-between p-5 sm:p-7"
    >
      {/* Category Header & Thesis */}
      <div>
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#1675F8]">
              {category.code} // SUBSYSTEMS
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-sans text-xs font-semibold text-[#8998AD]">
              {category.subServices.length} Specialized Deliverables
            </span>
          </div>

          <Link
            href={category.href}
            onClick={onNavigate}
            className="group flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#1675F8] hover:text-[#0A5FD7] transition-colors"
          >
            <span>VIEW ALL</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <p className="mt-2.5 max-w-xl font-sans text-xs leading-relaxed text-[#8998AD]">
          {category.shortDescription}
        </p>

        {/* 2-Column Sub-Service Grid */}
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {category.subServices.map((sub) => {
            const arrowRef = React.useRef<SVGSVGElement | null>(null);

            const handleMouseEnter = () => {
              animateSubServiceArrow(arrowRef.current, true);
            };

            const handleMouseLeave = () => {
              animateSubServiceArrow(arrowRef.current, false);
            };

            return (
              <Link
                key={sub.id}
                href={sub.href}
                onClick={onNavigate}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-100/90 bg-white p-3.5 transition-all duration-200 hover:border-[#1675F8]/40 hover:bg-slate-50/60 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[13px] font-bold text-[#06162C] group-hover:text-[#1675F8] transition-colors">
                      {sub.title}
                    </span>

                    {/* Optional Status Badge */}
                    {sub.badge && (
                      <span className="rounded-full bg-[#1675F8]/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-tight text-[#1675F8]">
                        {sub.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 line-clamp-2 font-sans text-[11.5px] leading-snug text-[#8998AD]">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100/80 pt-2 font-mono text-[10px] text-[#8998AD]">
                  <span>ENTERPRISE SPEC</span>
                  <svg
                    ref={arrowRef}
                    className="h-3.5 w-3.5 text-[#1675F8] opacity-60 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Inspection Bay Status Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 font-mono text-[10px] text-[#8998AD]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          <span>PRODUCTION-READY DEPLOYMENT</span>
        </div>
        <span>SLAs & MAINTENANCE INCLUDED</span>
      </div>
    </div>
  );
};