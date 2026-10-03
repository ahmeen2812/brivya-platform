"use client";

import * as React from "react";
import Link from "next/link";
import { ServiceCategory, SubServiceItem } from "@/config/servicesMegaMenu";

interface MegaMenuSubServicesProps {
  category: ServiceCategory;
  onNavigate: () => void;
  bayRef?: React.RefObject<HTMLDivElement | null>;
}

// Dedicated child row component with pure CSS hover mechanics (No hooks inside map loops)
const SubServiceRow: React.FC<{
  sub: SubServiceItem;
  onNavigate: () => void;
}> = ({ sub, onNavigate }) => {
  return (
    <Link
      href={sub.href}
      onClick={onNavigate}
      className="group flex flex-col justify-between rounded-lg p-2.5 transition-colors duration-150 hover:bg-slate-50"
    >
      <div className="flex items-center justify-between">
        <span className="font-sans text-[13px] font-semibold text-[#06162C] group-hover:text-[#1675F8] transition-colors">
          {sub.title}
        </span>

        {/* Optional clean badge */}
        {sub.badge && (
          <span className="rounded-full bg-[#1675F8]/10 px-2 py-0.5 text-[9.5px] font-semibold text-[#1675F8]">
            {sub.badge}
          </span>
        )}
      </div>

      <p className="mt-0.5 line-clamp-1 font-sans text-[11px] leading-relaxed text-[#8998AD]">
        {sub.description}
      </p>
    </Link>
  );
};

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
      className="flex h-full w-full flex-col justify-between p-4 sm:p-5"
    >
      <div>
        {/* Header & Direct Category Link */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs font-bold text-[#06162C]">
              {category.title}
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-sans text-[11px] text-[#8998AD]">
              {category.subServices.length} Offerings
            </span>
          </div>

          <Link
            href={category.href}
            onClick={onNavigate}
            className="group inline-flex items-center gap-1 font-sans text-xs font-bold text-[#1675F8] hover:text-[#0A5FD7] transition-colors"
          >
            <span>Overview</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* 2-Column Compact Subservices Grid (Safely mapped without dynamic hooks) */}
        <div className="mt-2.5 grid grid-cols-1 gap-1 sm:grid-cols-2">
          {category.subServices.map((sub) => (
            <SubServiceRow key={sub.id} sub={sub} onNavigate={onNavigate} />
          ))}
        </div>
      </div>

      {/* Clean Bottom Note */}
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[11px] text-[#8998AD]">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          <span>Active Capacity Available</span>
        </div>
        <span className="font-medium text-[#06162C]">All engagements backed by SLAs</span>
      </div>
    </div>
  );
};