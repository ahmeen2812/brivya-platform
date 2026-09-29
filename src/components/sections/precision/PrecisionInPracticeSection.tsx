"use client";

import * as React from "react";
import { PrecisionHeader } from "./PrecisionHeader";
import { PrecisionVisualPlate } from "./PrecisionVisualPlate";
import { PrecisionMetricsLedger } from "./PrecisionMetricsLedger";
import { initPrecisionSectionTimeline } from "./animations";

export const PrecisionInPracticeSection: React.FC = () => {
  // Master Section DOM Targets for GSAP 5-Stage Reveal
  const sectionContainerRef = React.useRef<HTMLElement | null>(null);
  const headerBlockRef = React.useRef<HTMLDivElement | null>(null);
  const visualPlateRef = React.useRef<HTMLDivElement | null>(null);
  const liveHtmlOverlayRef = React.useRef<HTMLDivElement | null>(null);
  const metricsGridRef = React.useRef<HTMLDivElement | null>(null);
  const ledgerContainerRef = React.useRef<HTMLDivElement | null>(null);

  // Initialize and play timeline once section enters viewport
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

    if (!tl) return;

    // Use IntersectionObserver to start playback when 15% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionContainerRef}
      id="precision-in-practice"
      aria-label="Precision in Practice - Audited Technical Standards"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F4F7FC] via-white to-[#F4F7FC] py-16 sm:py-24 lg:py-32 border-t border-slate-200/80"
    >
      {/* Subtle Luminous Light Pool */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-100/25 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {/* 1. Section Editorial Header */}
        <PrecisionHeader headerRef={headerBlockRef} />

        {/* 2. Architectural Blueprint Visual Plate (Unmasks -> Live UI) */}
        <PrecisionVisualPlate
          plateRef={visualPlateRef}
          overlayRef={liveHtmlOverlayRef}
        />

        {/* 3. Audited Telemetry Metrics Grid & Deployment Ledger */}
        <PrecisionMetricsLedger
          metricsRef={metricsGridRef}
          ledgerRef={ledgerContainerRef}
        />
      </div>
    </section>
  );
};