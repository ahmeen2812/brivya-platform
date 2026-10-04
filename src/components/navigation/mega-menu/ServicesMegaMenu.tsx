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

interface ServicesMegaMenuProps {
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
  // Progressive disclosure: activePillarId starts as null (showing ONLY 7 pillars)
  const [activePillarId, setActivePillarId] = React.useState<string | null>(null);
  const [shouldRender, setShouldRender] = React.useState<boolean>(isOpen);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const backdropRef = React.useRef<HTMLDivElement | null>(null);
  const leftRailRef = React.useRef<HTMLDivElement | null>(null);
  const subPanelRef = React.useRef<HTMLDivElement | null>(null);

  const COLLAPSED_WIDTH = 370;
  const EXPANDED_WIDTH = 920;

  // Active pillar object resolution
  const activePillar: ServicePillar | null = React.useMemo(() => {
    if (!activePillarId) return null;
    return SERVICE_PILLARS.find((p) => p.id === activePillarId) || null;
  }, [activePillarId]);

  // Handle Opening / Closing Lifecycle with Exact Inverse Fold
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
          setActivePillarId(null); // Reset back to collapsed state on exit
        },
      );
    }
  }, [isOpen, shouldRender]);

  // Trigger Symmetrical Reveal
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

  // Trigger Progressive Width Morph (370px -> 920px)
  React.useEffect(() => {
    if (!containerRef.current) return;
    const targetWidth = activePillarId ? EXPANDED_WIDTH : COLLAPSED_WIDTH;
    animateContainerWidthMorph(containerRef.current, targetWidth);
  }, [activePillarId]);

  // Accessibility: Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <>
      {/* 
        Click-outside backdrop:
        Clicking outside immediately folds and closes the menu
      */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[#06162C]/15 backdrop-blur-[1px] transition-opacity duration-200"
      />

      {/* 
        The Floating Hit-Bridge Wrapper:
        Anchored at top-[5.25rem] (giving an exact 4px visible gap under the navbar).
        The before: pseudo-element bridges the 4px gap so moving between the
        navbar and the dropdown never triggers mouse leave or flickers.
      */}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => {
          // If the menu is pinned by click, do NOT close on hover leave!
          if (!isPinned && onMouseLeave) {
            onMouseLeave();
          }
        }}
        className="fixed top-[5.25rem] sm:top-[5.5rem] left-0 right-0 z-50 mx-auto flex justify-center pointer-events-none before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
      >
        <div
          ref={containerRef}
          role="region"
          aria-label="Services Exploration Console"
          className="pointer-events-auto relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_16px_45px_-10px_rgba(6,22,44,0.14),0_2px_8px_-2px_rgba(6,22,44,0.04)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] transition-[box-shadow]"
          style={{ width: COLLAPSED_WIDTH }}
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
                onHoverPillar={(id) => setActivePillarId(id)}
                onClickPillar={(id) => setActivePillarId(id)}
                railRef={leftRailRef}
              />
            </div>

            {/* Right Sub-Services Panel (Morphs into view when a pillar is selected) */}
            {activePillar && (
              <div className="w-[550px] shrink-0 bg-white">
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