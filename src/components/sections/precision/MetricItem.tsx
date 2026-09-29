"use client";

import * as React from "react";
import { MetricItemData } from "./types";
import { MetricIconResolver } from "./icons";
import { metricsTypography } from "./typography";

export interface MetricItemProps {
  data: MetricItemData;
}

export const MetricItem: React.FC<MetricItemProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-start justify-start w-full py-2 group select-none">
      {/* 1. Metric Icon in Cobalt Blue */}
      <div className="flex h-10 w-10 items-center justify-center text-[#0A5FD7] transition-transform duration-200 group-hover:scale-105">
        <MetricIconResolver iconKey={data.iconKey} className="h-6 w-6" />
      </div>

      {/* 2. Prominent Numeric Value */}
      <div className="mt-3 flex items-baseline">
        <span className={metricsTypography.metricValue}>
          {data.value}
        </span>
      </div>

      {/* 3. Horizontal Dash Divider (Matching Reference Screenshot) */}
      <div
        aria-hidden="true"
        className="w-8 h-[2.5px] bg-[#06162C] my-3.5 transition-all duration-200 group-hover:w-12 group-hover:bg-[#0A5FD7]"
      />

      {/* 4. Metric Label & Sublabel */}
      <div className="flex flex-col">
        <span className={metricsTypography.metricLabel}>
          {data.label}
        </span>
        {data.sublabel && (
          <span className={`mt-0.5 ${metricsTypography.metricSublabel}`}>
            {data.sublabel}
          </span>
        )}
      </div>
    </div>
  );
};