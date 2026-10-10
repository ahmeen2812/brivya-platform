"use client";

import * as React from "react";
import { METRICS_SECTION_COPY, METRICS_DATA } from "./content";
import { metricsTypography } from "./typography";
import { PrecisionHeader } from "./PrecisionHeader";
import { MetricItem } from "./MetricItem";
import { IconExpandDiagonal } from "./icons";

export const PrecisionInPracticeSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const primaryMetrics = METRICS_DATA.filter((m) => m.isPrimary);
  const secondaryMetrics = METRICS_DATA.filter((m) => !m.isPrimary);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <section id="credibility-metrics" className="relative w-full bg-[#F4F7FC] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="relative mx-auto w-full max-w-[1360px] rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_-4px_rgba(6,22,44,0.05)] transition-all duration-300">
        
        <PrecisionHeader />
        
        <div className="w-full h-[1px] bg-slate-100 my-8 sm:my-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full">
          {primaryMetrics.map((item) => (
            <MetricItem key={item.id} data={item} />
          ))}
        </div>

        {/* CSS Hardware-Accelerated Zero-Stutter Expand */}
        <div className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-8 pt-8 border-t border-slate-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full">
              {secondaryMetrics.map((item) => (
                <MetricItem key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-slate-100 mt-8 sm:mt-10 mb-5 sm:mb-6" />

        <div className="flex items-center justify-between gap-4">
          <span className={metricsTypography.footerText}>
            {METRICS_SECTION_COPY.footerStatement}
          </span>
          <button
            type="button"
            onClick={toggleExpand}
            className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-[#0A5FD7] shadow-2xs transition-all duration-200 hover:border-[#0A5FD7]/40 hover:bg-blue-50/60 focus-visible:outline-none"
          >
            <IconExpandDiagonal isExpanded={isExpanded} className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
};