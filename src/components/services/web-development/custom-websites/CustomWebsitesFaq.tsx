"use client";

import React, { useState } from "react";
import { CUSTOM_WEBSITES_CONTENT } from "@/config/services/customWebsites";

export const CustomWebsitesFaq: React.FC = () => {
  const { faq } = CUSTOM_WEBSITES_CONTENT;
  // Allows expanding and collapsing individual question rows
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full mb-16 sm:mb-20 lg:mb-24 select-none">
      {/* 
        Clean Bordered Container (NOT filled gradient card):
        Uses an elevated, semi-translucent white substrate with delicate border
      */}
      <div className="w-full rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-white/75 backdrop-blur-xs p-6 sm:p-9 lg:p-12 shadow-[0_8px_30px_-6px_rgba(7,54,109,0.04)]">
        {/* Section Header */}
        <div className="border-b border-[#BACFE6]/60 pb-5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-mono text-[11px] font-semibold text-[#0A5FD7] uppercase tracking-wider">
              Common Inquiries
            </span>
          </div>
          <h2 className="font-sans text-[26px] sm:text-[32px] font-extrabold text-[#06162C] tracking-tight">
            {faq.heading}
          </h2>
        </div>

        {/* Expandable Rows Array */}
        <div className="flex flex-col divide-y divide-[#BACFE6]/50">
          {faq.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-4.5 sm:py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7] rounded-lg cursor-pointer"
                >
                  <span
                    className={`font-sans text-[16px] sm:text-[17px] font-bold transition-colors duration-200 ${
                      isOpen ? "text-[#0A5FD7]" : "text-[#06162C] group-hover:text-[#0A5FD7]"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Expand / Collapse Icon Indicator */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "bg-[#0A5FD7] text-white border-[#0A5FD7]"
                        : "bg-white text-slate-500 border-slate-200 group-hover:border-[#BACFE6]"
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {/* Collapsible Answer Region */}
                {isOpen && (
                  <div className="pt-3.5 pr-0 sm:pr-8 animate-in fade-in duration-200">
                    <p className="font-sans text-[14.5px] leading-[1.72] text-[#475569] font-normal tracking-[-0.01em]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};