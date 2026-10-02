"use client";

import * as React from "react";
import gsap from "gsap";
import { NavigationSpine } from "./NavigationSpine";
import { ArchitecturalPlanes } from "./ArchitecturalPlanes";
import { NavigationIndices } from "./NavigationIndices";
import { NavigationPlaneId } from "@/types/navigation";

export const FoldNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [activePlane, setActivePlane] = React.useState<NavigationPlaneId>("build");

  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const planesContainerRef = React.useRef<HTMLDivElement | null>(null);
  const indicesContainerRef = React.useRef<HTMLDivElement | null>(null);
  const timelineRef = React.useRef<gsap.core.Timeline | null>(null);

  // Initialize synchronized GSAP timeline using easeBrivya [0.16, 1, 0.3, 1]
  React.useEffect(() => {
    if (!overlayRef.current || !planesContainerRef.current || !indicesContainerRef.current) return;

    gsap.set(overlayRef.current, {
      display: "none",
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
    });

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power4.out",
      },
      onStart: () => {
        if (overlayRef.current) overlayRef.current.style.display = "block";
      },
      onReverseComplete: () => {
        if (overlayRef.current) overlayRef.current.style.display = "none";
      },
    });

    tl.to(overlayRef.current, {
      duration: 0.65,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
    })
      .fromTo(
        planesContainerRef.current,
        { opacity: 0, y: -24 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        indicesContainerRef.current,
        { opacity: 0, x: 24 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
        "-=0.4",
      );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  // Control Timeline Playback
  React.useEffect(() => {
    if (timelineRef.current) {
      if (isOpen) {
        timelineRef.current.play();
        document.body.style.overflow = "hidden";
      } else {
        timelineRef.current.reverse();
        document.body.style.overflow = "";
      }
    }
  }, [isOpen]);

  // Accessibility: Handle Escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleToggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Top Telemetry Spine Bar */}
      <NavigationSpine
        isOpen={isOpen}
        onToggle={handleToggle}
        activePlane={activePlane}
      />

      {/* Unfolded Architectural Plane Matrix */}
      <div
        id="brivya-architectural-overlay"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="System Navigation Matrix"
        className="fixed inset-0 z-40 bg-[#06162C]/98 pt-20 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-[calc(100vh-5rem)] w-full max-w-[1780px] flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
          {/* Left / Center: Three Architectural Planes (BUILD, ACQUIRE, EXPAND) */}
          <div ref={planesContainerRef} className="w-full lg:w-7/12 xl:w-2/3">
            <ArchitecturalPlanes
              activePlane={activePlane}
              onPlaneSelect={setActivePlane}
              onNavigate={handleClose}
            />
          </div>

          {/* Right: Directory Indices (01 Work to 07 Start Project) */}
          <div
            ref={indicesContainerRef}
            className="w-full border-t border-[rgba(137,152,173,0.15)] bg-[#07366D]/10 lg:w-5/12 lg:border-t-0 xl:w-1/3"
          >
            <NavigationIndices
              onPlaneHover={setActivePlane}
              onNavigate={handleClose}
            />
          </div>
        </div>
      </div>
    </>
  );
};