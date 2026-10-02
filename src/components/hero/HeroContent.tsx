"use client";

import * as React from "react";
import Link from "next/link";

interface HeroContentProps {
  activeTrackIndex: number;
  onSelectTrack: (index: number) => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  activeTrackIndex,
  onSelectTrack,
}) => {
  const tracks = [
    {
      id: "track-web",
      index: "01",
      code: "TRK.WEB",
      title: "Web Engineering",
      capabilities: "Custom Platforms · Shopify Plus · SaaS Architecture · Performance",
    },
    {
      id: "track-google",
      index: "02",
      code: "TRK.GGL",
      title: "Google Media System",
      capabilities: "Search Ads · PMax Shopping · Intent Capture · Server CAPI",
    },
    {
      id: "track-meta",
      index: "03",
      code: "TRK.MTA",
      title: "Meta Acquisition",
      capabilities: "Direct Response · High-Scale Creative Testing · Conversion API",
    },
  ];

  return (
    <div className="flex flex-col justify-between py-6">
      {/* System Heading Hierarchy */}
      <div className="flex flex-col gap-6">
        {/* Telemetry Index Header */}
        <div className="inline-flex items-center gap-3">
          <div className="flex h-5 items-center border border-[#8998AD]/30 bg-[#07366D]/30 px-2 font-mono text-[10px] uppercase tracking-widest text-[#8998AD]">
            <span className="mr-1.5 h-1.5 w-1.5 bg-[#1675F8]" />
            SPEC: ARCH-SYSTEM-V2.6
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#8998AD]">
            // ENGINE OPERATIONAL
          </span>
        </div>

        {/* Primary Moniker */}
        <div className="flex flex-col">
          <h1 className="font-sans text-4xl font-bold tracking-tight text-[#F4F7FC] sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.04]">
            We build the system <br />
            <span className="text-[#8998AD]">behind your growth.</span>
          </h1>
        </div>

        {/* Structured Capability Specifier */}
        <p className="max-w-xl font-sans text-base leading-relaxed text-[#8998AD] sm:text-lg">
          Brivya is a digital operating studio. We engineer high-performance web products, execute
          capital-efficient customer acquisition, and deploy automation infrastructure.
        </p>

        {/* Action Directives */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/start-project"
            className="group inline-flex h-12 items-center justify-center border border-[#1675F8] bg-[#0A5FD7] px-7 font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F7FC] transition-all duration-200 hover:bg-[#1675F8] active:translate-y-[1px] chamfer-sm"
          >
            <span className="flex items-center gap-2.5">
              <span>START A PROJECT</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </Link>

          <a
            href="#growth-architecture"
            className="inline-flex h-12 items-center justify-center border border-[#8998AD]/30 bg-[#07366D]/20 px-6 font-mono text-xs font-semibold uppercase tracking-wider text-[#8998AD] transition-all duration-200 hover:border-[#8998AD]/60 hover:text-[#F4F7FC] active:translate-y-[1px]"
          >
            EXPLORE THE SYSTEM
          </a>
        </div>
      </div>

      {/* Interactive Physical Track Inspection Bar */}
      <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(137,152,173,0.15)] pt-6 sm:mt-16">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#8998AD]">
          <span>PHYSICAL TRACK SELECTION</span>
          <span className="text-[#C7A76B]">CONDUIT: SYNCHRONIZED</span>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {tracks.map((trk, idx) => {
            const isSelected = activeTrackIndex === idx;

            return (
              <button
                key={trk.id}
                type="button"
                onClick={() => onSelectTrack(idx)}
                className={`group flex flex-col border p-3 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-[#1675F8] bg-[#0A1D36]"
                    : "border-[rgba(137,152,173,0.15)] bg-[#06162C]/60 hover:border-[#8998AD]/40"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className={isSelected ? "text-[#1675F8]" : "text-[#8998AD]"}>
                    {trk.code}
                  </span>
                  <span className="text-[#8998AD]">{trk.index}</span>
                </div>
                <span className="mt-1 font-sans text-xs font-bold text-[#F4F7FC]">
                  {trk.title}
                </span>
                <span className="mt-0.5 line-clamp-1 text-[11px] text-[#8998AD]">
                  {trk.capabilities}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};