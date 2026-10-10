"use client";

import * as React from "react";
import { initPrecisionSectionTimeline } from "./animations";

export const PrecisionInPracticeSection: React.FC = () => {
  const sectionContainerRef = React.useRef<HTMLElement | null>(null);
  const headerBlockRef = React.useRef<HTMLDivElement | null>(null);
  const visualPlateRef = React.useRef<HTMLDivElement | null>(null);
  const liveHtmlOverlayRef = React.useRef<HTMLDivElement | null>(null);
  const metricsGridRef = React.useRef<HTMLDivElement | null>(null);
  const ledgerContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const container = sectionContainerRef.current;
    if (!container) return;

    const tl = initPrecisionSectionTimeline({
      sectionContainer: container,
      headerBlock: headerBlockRef.current,
      visualPlate: visualPlateRef.current,
      liveHtmlOverlay: liveHtmlOverlayRef.current,
      metricsGrid: metricsGridRef.current,
      ledgerContainer: ledgerContainerRef.current,
    });

    if (tl) {
      tl.play();
    }
    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <section ref={sectionContainerRef} className="relative w-full py-20 bg-[#F4F7FC]">
      <div className="text-center text-slate-500">
        Precision Section Temporarily Disabled
      </div>
    </section>
  );
};