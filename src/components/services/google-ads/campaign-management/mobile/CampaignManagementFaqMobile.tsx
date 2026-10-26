// src/components/services/google-ads/campaign-management/mobile/CampaignManagementFaqMobile.tsx
'use client';

import React, { useState } from 'react';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementFaqMobile: React.FC = () => {
  const { faqs } = CAMPAIGN_MANAGEMENT_CONFIG;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="lg:hidden w-full py-12 px-4">
      <div className="border border-[#BACFE6] bg-white/70 rounded-2xl p-5 shadow-xs">
        <div className="mb-6 border-b border-[#BACFE6]/60 pb-4">
          <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-[#0A5FD7]">
            {faqs.tag}
          </span>
          <h2 className="text-xl font-bold text-[#07366D] mt-1">
            {faqs.heading}
          </h2>
        </div>

        <div className="divide-y divide-[#BACFE6]/60">
          {faqs.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left gap-3 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-[#07366D]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-[#BACFE6] font-mono text-sm transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#E1E7EF] text-[#0A5FD7]' : 'rotate-0 bg-white text-[#07366D]'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2.5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};