"use client";

import * as React from "react";
import { PRECISION_CONTENT } from "./content";
import { precisionTypography } from "./typography";
import { TelemetryMetric, DeploymentRecord } from "./types";
import { PrecisionCheckmarkIcon, PrecisionArrowIcon } from "./icons";

export interface PrecisionMetricsLedgerProps {
  metricsRef?: React.RefObject<HTMLDivElement | null>;
  ledgerRef?: React.RefObject<HTMLDivElement | null>;
}

export const PrecisionMetricsLedger: React.FC<PrecisionMetricsLedgerProps> = ({
  metricsRef,
  ledgerRef,
}) => {
  return (
    <div className="flex flex-col w-full max-w-[1360px] mx-auto gap-8 sm:gap-10 select-none">
      {/* 
        ========================================================================
        1. THE VERIFIED PERFORMANCE METRICS GRID (4-Column Tabular Ledger)
        ========================================================================
      */}
      <div
        ref={metricsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {PRECISION_CONTENT.metrics.map((metric: TelemetryMetric) => (
          <div
            key={metric.id}
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_-2px_rgba(6,22,44,0.04)] transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
          >
            <div>
              {/* Metric Header & Index */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-mono text-[10px] font-bold text-[#8998AD]">
                  // {metric.index}
                </span>
                <span className={precisionTypography.verificationBadge}>
                  {metric.verificationBadge}
                </span>
              </div>

              {/* Numerical Figure with Monospace Alignment */}
              <div className="mt-4 flex items-baseline">
                <span className={precisionTypography.metricValue}>
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className={precisionTypography.metricUnit}>
                    {metric.unit}
                  </span>
                )}
              </div>

              {/* Label */}
              <h4 className={`mt-2 ${precisionTypography.metricLabel}`}>
                {metric.label}
              </h4>
            </div>

            {/* Factual Technical Benchmark */}
            <p className={`mt-3 pt-3 border-t border-slate-100/80 ${precisionTypography.metricBenchmark}`}>
              {metric.benchmarkStandard}
            </p>
          </div>
        ))}
      </div>

      {/* 
        ========================================================================
        2. THE RECENT DEPLOYMENTS AUDIT LEDGER (Factual Delivery Logs)
        ========================================================================
      */}
      <div
        ref={ledgerRef}
        className="flex flex-col rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_16px_-4px_rgba(6,22,44,0.05)] overflow-hidden"
      >
        {/* Ledger Header Bar */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 bg-slate-50/80 border-b border-slate-100 text-[10px] font-mono uppercase tracking-[0.16em] text-[#8998AD]">
          <span className="col-span-2">SPEC / CODE</span>
          <span className="col-span-3">CLIENT SECTOR</span>
          <span className="col-span-4">ARCHITECTURE & DELIVERABLE</span>
          <span className="col-span-3 text-right">VERIFIED OUTCOME</span>
        </div>

        {/* Ledger Rows */}
        <div className="divide-y divide-slate-100">
          {PRECISION_CONTENT.ledgerEntries.map((record: DeploymentRecord) => (
            <div
              key={record.id}
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 sm:px-6 py-4 items-center transition-colors duration-150 hover:bg-slate-50/80 cursor-default"
            >
              {/* Code & Timestamp */}
              <div className="md:col-span-2 flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#0A5FD7]">
                  {record.code}
                </span>
                <span className="font-mono text-[10px] text-[#8998AD]">
                  {record.timestamp}
                </span>
              </div>

              {/* Sector */}
              <div className="md:col-span-3 flex flex-col">
                <span className={precisionTypography.ledgerSector}>
                  {record.clientSector}
                </span>
              </div>

              {/* Deliverable & Tech Stack */}
              <div className="md:col-span-4 flex flex-col">
                <span className={precisionTypography.ledgerDeliverable}>
                  {record.deliverable}
                </span>
                <span className={`mt-0.5 ${precisionTypography.ledgerArchitecture}`}>
                  {record.technicalArchitecture}
                </span>
              </div>

              {/* Verified Outcome */}
              <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-2 pt-2 md:pt-0">
                <div className="flex items-center gap-1.5 text-right">
                  <PrecisionCheckmarkIcon className="h-3 w-3 text-[#059669]" />
                  <span className={precisionTypography.ledgerOutcome}>
                    {record.verifiedOutcome}
                  </span>
                </div>
                <PrecisionArrowIcon className="h-3.5 w-3.5 text-[#8998AD] opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};