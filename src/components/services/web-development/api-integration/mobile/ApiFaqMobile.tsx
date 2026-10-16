"use client";

import React, { useState } from "react";
import { API_INTEGRATION_CONTENT } from "@/config/services/apiIntegration";

export const ApiFaqMobile: React.FC = () => {
  const { faq } = API_INTEGRATION_CONTENT;
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full mb-12 select-none">
      <div className="w-full rounded-2xl border border-[#BACFE6] bg-white/70 backdrop-blur-xs p-5 shadow-xs">
        <h2 className="font-sans text-[22px] font-extrabold text-[#06162C] tracking-tight pb-3 mb-3 border-b border-[#BACFE6]/60">
          {faq.heading}
        </h2>

        <div className="flex flex-col divide-y divide-[#BACFE6]/50">
          {faq.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-3.5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-3 focus-visible:outline-none"
                >
                  <span
                    className={`font-sans text-[15px] font-bold transition-colors ${
                      isOpen ? "text-[#0A5FD7]" : "text-[#06162C]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      isOpen ? "bg-[#0A5FD7] text-white border-[#0A5FD7]" : "bg-white text-slate-500 border-slate-200"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-2.5">
                    <p className="font-sans text-[13.5px] leading-[1.65] text-[#475569]">
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