// src/components/services/google-ads/campaign-management/CampaignManagementFaq.tsx
'use client';

import React, { useState } from 'react';
import { CAMPAIGN_MANAGEMENT_CONFIG } from '@/config/services/campaignManagement';

export const CampaignManagementFaq: React.FC = () => {
  const { faq } = CAMPAIGN_MANAGEMENT_CONFIG;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Frosted Glass Container */}
        <div
          data-motion="faq-container"
          className="border border-[#BACFE6] bg-white/70 backdrop-blur-xs rounded-3xl p-10 shadow-sm"
        >
          <div className="mb-8 border-b border-[#BACFE6]/60 pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#07366D]">
              {faq.heading}
            </h2>
          </div>

          <div className="divide-y divide-[#BACFE6]/60">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-hidden group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#07366D] group-hover:text-[#0A5FD7] transition-colors">
                      {item.question}
                    </span>
                    {/* Rotating 45-degree Toggle Vector */}
                    <span
                      className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#BACFE6] text-[#07366D] font-mono text-base transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-[#E1E7EF] border-[#0A5FD7] text-[#0A5FD7]' : 'rotate-0 bg-white'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {/* Strictly Declarative CSS Grid Animation (0fr -> 1fr) */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-3.5' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden pr-8">
                      <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};