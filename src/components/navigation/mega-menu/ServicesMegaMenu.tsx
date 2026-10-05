"use client";

import * as React from "react";
import { SERVICE_PILLARS } from "@/config/servicesMegaMenu";
import { ServicePillar } from "@/types/megaMenu";
import { MegaMenuPillarList } from "./MegaMenuPillarList";
import { MegaMenuSubPanel } from "./MegaMenuSubPanel";
import {
  animateMegaMenuReveal,
  animateMegaMenuDisappear,
  animateContainerWidthMorph,
} from "@/animations/servicesMegaMenuAnimations";

export interface ServicesMegaMenuProps {
  isOpen: boolean;
  isPinned: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  isOpen,
  isPinned,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  // Progressive disclosure: activePillarId starts as null (showing ONLY 7 pillars initially)
  const [activePillarId, setActivePillarId] = React.useState<string | null>(null);
  const [shouldRender, setShouldRender] = React.useState<boolean>(isOpen);

  // DOM node references for GSAP animation targets
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const backdropRef = React.useRef<HTMLDivElement | null>(null);
  const leftRailRef = React.useRef<HTMLDivElement | null>(null);
  const subPanelRef = React.useRef<HTMLDivElement | null>(null);

  // Dimensional constraints
  const COLLAPSED_WIDTH = 370;
  const EXPANDED_WIDTH = 940;

  // Track whether container is currently in expanded state to prevent width re-collapse
  const isExpandedRef = React.useRef<boolean>(false);

  // Active pillar resolution
  const activePillar: ServicePillar | null = React.useMemo(() => {
    if (!activePillarId) return null;
    return SERVICE_PILLARS.find((pillar) => pillar.id === activePillarId) || null;
  }, [activePillarId]);

  // Synchronize Mounting and Inverse LIFO Disappearing Sequence
  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else if (shouldRender) {
      animateMegaMenuDisappear(
        {
          container: containerRef.current,
          backdrop: backdropRef.current,
          leftRail: leftRailRef.current,
          subPanel: subPanelRef.current,
        },
        () => {
          setShouldRender(false);
          setActivePillarId(null);
          isExpandedRef.current = false;
        },
      );
    }
  }, [isOpen, shouldRender]);

  // Trigger Symmetrical Reveal when mounted (Synchronized: zero empty box flash)
  React.useEffect(() => {
    if (shouldRender && isOpen) {
      animateMegaMenuReveal(
        {
          container: containerRef.current,
          backdrop: backdropRef.current,
          leftRail: leftRailRef.current,
        },
        COLLAPSED_WIDTH,
      );
    }
  }, [shouldRender, isOpen]);

  // Progressive Width Morph (Only animates width when state transitions between collapsed and expanded)
  React.useEffect(() => {
    if (!containerRef.current) return;

    if (activePillarId && !isExpandedRef.current) {
      // First expansion from 370px -> 940px
      isExpandedRef.current = true;
      animateContainerWidthMorph(containerRef.current, EXPANDED_WIDTH);
    } else if (!activePillarId && isExpandedRef.current) {
      // Collapse from 940px -> 370px
      isExpandedRef.current = false;
      animateContainerWidthMorph(containerRef.current, COLLAPSED_WIDTH);
    }
    // When switching between pillars while already expanded, width STAYS at 940px (no jitter/lag)
  }, [activePillarId]);

  // Accessibility: Handle Escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Pillar selection handlers with identity guards to prevent redundant re-renders
  const handlePillarHover = (pillarId: string) => {
    if (pillarId === activePillarId) return; // Prevent duplicate triggers on same pillar
    setActivePillarId(pillarId);
  };

  const handlePillarClick = (pillarId: string) => {
    if (pillarId === activePillarId) return;
    setActivePillarId(pillarId);
  };

  if (!shouldRender) return null;

  return (
    <>
      {/* Click-Outside Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[#06162C]/15 backdrop-blur-[1px] transition-opacity duration-200"
      />

      {/* Floating Hit-Bridge Wrapper */}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => {
          if (!isPinned && onMouseLeave) {
            onMouseLeave();
          }
        }}
        className="fixed top-[5.25rem] sm:top-[5.5rem] left-0 right-0 z-50 mx-auto flex justify-center pointer-events-none before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
      >
        {/* 
          Main Console Chassis:
          Initial style specifies opacity: 0 and visibility: hidden.
          Width is NOT hardcoded in JSX so React never resets GSAP's animated width on re-renders!
        */}
        <div
          ref={containerRef}
          role="region"
          aria-label="Services Exploration Console"
          style={{
            opacity: 0,
            visibility: "hidden",
          }}
          className="pointer-events-auto relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_16px_45px_-10px_rgba(6,22,44,0.14),0_2px_8px_-2px_rgba(6,22,44,0.04)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]"
        >
          {/* Pinned Telemetry Indicator */}
          {isPinned && (
            <div className="absolute right-3 top-2.5 z-20 flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-mono font-semibold text-[#1675F8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1675F8]" />
              <span>PINNED // CLICK TO UNPIN</span>
            </div>
          )}

          <div className="flex h-full w-full">
            {/* Left Rail: 7 Main Pillars (Always 370px wide) */}
            <div className="w-[370px] shrink-0 border-r border-slate-100 bg-slate-50/40">
              <MegaMenuPillarList
                pillars={SERVICE_PILLARS}
                activePillarId={activePillarId}
                onHoverPillar={handlePillarHover}
                onClickPillar={handlePillarClick}
                railRef={leftRailRef}
              />
            </div>

            {/* Right Sub-Services Panel */}
            {activePillar && (
              <div className="w-[570px] shrink-0 bg-white">
                <MegaMenuSubPanel
                  pillar={activePillar}
                  onNavigate={onClose}
                  subPanelRef={subPanelRef}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};