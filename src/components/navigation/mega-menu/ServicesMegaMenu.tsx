"use client";

import * as React from "react";
import {
  SERVICES_CATEGORIES,
  ServiceCategory,
} from "@/config/servicesMegaMenu";
import { MegaMenuLeftRail } from "./MegaMenuLeftRail";
import { MegaMenuSubServices } from "./MegaMenuSubServices";
import { MegaMenuFeaturedCard } from "./MegaMenuFeaturedCard";
import {
  animateMegaMenuOpen,
  animateMegaMenuClose,
  animateCategoryCrossFade,
} from "@/animations/megaMenuAnimations";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeCategoryId, setActiveCategoryId] = React.useState<string>(
    SERVICES_CATEGORIES[0].id,
  );
  const [shouldRender, setShouldRender] = React.useState<boolean>(isOpen);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const backdropRef = React.useRef<HTMLDivElement | null>(null);
  const leftRailRef = React.useRef<HTMLDivElement | null>(null);
  const subServicesBayRef = React.useRef<HTMLDivElement | null>(null);
  const featuredCardRef = React.useRef<HTMLDivElement | null>(null);

  // Active Category Object Resolution
  const activeCategory: ServiceCategory = React.useMemo(() => {
    return (
      SERVICES_CATEGORIES.find((c) => c.id === activeCategoryId) ||
      SERVICES_CATEGORIES[0]
    );
  }, [activeCategoryId]);

  // Synchronize Opening and Closing Lifecycle
  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else if (shouldRender) {
      animateMegaMenuClose(
        {
          container: containerRef.current,
          backdrop: backdropRef.current,
          leftRail: leftRailRef.current,
          subServicesBay: subServicesBayRef.current,
          featuredCard: featuredCardRef.current,
        },
        () => {
          setShouldRender(false);
        },
      );
    }
  }, [isOpen, shouldRender]);

  // Trigger Open Animation when mounted
  React.useEffect(() => {
    if (shouldRender && isOpen) {
      animateMegaMenuOpen({
        container: containerRef.current,
        backdrop: backdropRef.current,
        leftRail: leftRailRef.current,
        subServicesBay: subServicesBayRef.current,
        featuredCard: featuredCardRef.current,
      });
    }
  }, [shouldRender, isOpen]);

  // Cross-fade when switching category
  const handleSelectCategory = (categoryId: string) => {
    if (categoryId !== activeCategoryId) {
      setActiveCategoryId(categoryId);
      animateCategoryCrossFade(subServicesBayRef.current);
    }
  };

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
      {/* Click-outside backdrop */}
      <div
        ref={backdropRef}
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[#06162C]/40 backdrop-blur-[2px] transition-opacity"
      />

      {/* Floating Two-Tier Split-Pane Chassis */}
      <div
        ref={containerRef}
        role="region"
        aria-label="Services Navigation Console"
        onMouseLeave={onClose}
        className="fixed top-[4.8rem] sm:top-[5.2rem] md:top-[5.6rem] left-0 right-0 z-50 mx-auto w-[94%] max-w-[1360px] overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-[0_20px_60px_-15px_rgba(6,22,44,0.18),0_4px_16px_-4px_rgba(6,22,44,0.06)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)]"
      >
        <div className="grid grid-cols-12 min-h-[460px]">
          {/* Left Rail: 5 Core Systems (3.5 Columns) */}
          <div className="col-span-12 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/50">
            <MegaMenuLeftRail
              categories={SERVICES_CATEGORIES}
              activeCategoryId={activeCategoryId}
              onSelectCategory={handleSelectCategory}
              railRef={leftRailRef}
            />
          </div>

          {/* Center Inspection Bay: 2-Column Subservices (5.5 Columns) */}
          <div className="col-span-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-100 bg-white">
            <MegaMenuSubServices
              category={activeCategory}
              onNavigate={onClose}
              bayRef={subServicesBayRef}
            />
          </div>

          {/* Right Pillar: Featured Strategy Brief Card (3 Columns) */}
          <div className="col-span-12 lg:col-span-3 p-4 sm:p-5 bg-slate-50/30 flex items-center justify-center">
            <MegaMenuFeaturedCard onNavigate={onClose} cardRef={featuredCardRef} />
          </div>
        </div>
      </div>
    </>
  );
};