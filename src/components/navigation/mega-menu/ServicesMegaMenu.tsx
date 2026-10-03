"use client";

import * as React from "react";
import { SERVICE_PILLARS } from "@/config/servicesMegaMenu";
import { ServicePillar } from "@/types/megaMenu";
import { MegaMenuPillarList } from "./MegaMenuPillarList";
import { MegaMenuSubPanel } from "./MegaMenuSubPanel";
import {
  animateMegaMenuReveal,
  animateMegaMenuFold,
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
  // Starts with null so only the 5 main pillars are shown on initial open
  const [activePillarId, setActivePillarId] = React.useState<string | null>(null);
  const [shouldRender, setShouldRender] = React.useState<boolean>(isOpen);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const backdropRef = React.useRef<HTMLDivElement | null>(null);

  const COLLAPSED_WIDTH = 360;
  const EXPANDED_WIDTH = 880;

  const activePillar: ServicePillar | null = React.useMemo(() => {
    if (!activePillarId) return null;
    return SERVICE_PILLARS.find((p) => p.id === activePillarId) || null;
  }, [activePillarId]);

  // Handle Lifecycle Transitions
  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else if (shouldRender) {
      animateMegaMenuFold(
        {
          container: containerRef.current,
          backdrop: backdropRef.current,
        },
        () => {
          setShouldRender(false);
          setActivePillarId(null);
        },
      );
    }
  }, [isOpen, shouldRender]);

  // Trigger Open Animation
  React.useEffect(() => {
    if (shouldRender && isOpen) {
      animateMegaMenuReveal(
        {
          container: containerRef.current,
          backdrop: backdropRef.current,
        },
        COLLAPSED_WIDTH,
      );
    }
  }, [shouldRender, isOpen]);

  // Morph width between collapsed (360px) and expanded (880px)
  React.useEffect(() => {
    if (!containerRef.current) return;
    const targetWidth = activePillarId ? EXPANDED_WIDTH : COLLAPSED_WIDTH;
    animateContainerWidthMorph(containerRef.current, targetWidth);
  }, [activePillarId]);

  // Close on Escape key
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
      {/* Click-outside backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[#06162C]/15 backdrop-blur-[1px] transition-opacity duration-200"
      />

      {/* 
        Hit-Bridge Wrapper:
        Anchors below the floating navbar with a clean 4px visible gap.
        The before: pseudo-element acts as the mouse bridge so traversing
        the gap does not trigger premature closing.
      */}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => {
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
          className="pointer-events-auto relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_16px_45px_-10px_rgba(6,22,44,0.14),0_2px_8px_-2px_rgba(6,22,44,0.04)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]"
          style={{ width: COLLAPSED_WIDTH }}
        >
          {/* Pinned Indicator when locked open via click */}
          {isPinned && (
            <div className="absolute right-3 top-2.5 z-20 flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-mono font-semibold text-[#1675F8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1675F8]" />
              <span>PINNED // CLICK TO UNPIN</span>
            </div>
          )}

          <div className="flex h-full w-full">
            {/* Left Rail: 5 Main Pillars */}
            <div className="w-[360px] shrink-0 border-r border-slate-100 bg-slate-50/40">
              <MegaMenuPillarList
                pillars={SERVICE_PILLARS}
                activePillarId={activePillarId}
                onHoverPillar={(id) => setActivePillarId(id)}
                onClickPillar={(id) => setActivePillarId(id)}
              />
            </div>

            {/* Right Sub-Services Panel (Expands when pillar is hovered/clicked) */}
            {activePillar && (
              <div className="w-[520px] shrink-0 bg-white">
                <MegaMenuSubPanel pillar={activePillar} onNavigate={onClose} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};