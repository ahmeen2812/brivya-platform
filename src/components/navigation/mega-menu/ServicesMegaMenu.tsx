"use client";

import * as React from "react";
import {
  SERVICES_CATEGORIES,
  ServiceCategory,
} from "@/config/servicesMegaMenu";
import { MegaMenuLeftRail } from "./MegaMenuLeftRail";
import { MegaMenuSubServices } from "./MegaMenuSubServices";
import { MegaMenuFeaturedCard } from "./MegaMenuFeaturedCard";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [activeCategoryId, setActiveCategoryId] = React.useState<string>(
    SERVICES_CATEGORIES[0].id,
  );

  // Active Category Object Resolution
  const activeCategory: ServiceCategory = React.useMemo(() => {
    return (
      SERVICES_CATEGORIES.find((c) => c.id === activeCategoryId) ||
      SERVICES_CATEGORIES[0]
    );
  }, [activeCategoryId]);

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

  if (!isOpen) return null;

  return (
    <>
      {/* 
        Click-outside backdrop:
        Clicking anywhere outside closes the mega-menu instantly
      */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[#06162C]/20 backdrop-blur-[1px] transition-opacity duration-200"
      />

      {/* 
        The Hover-Bridge Envelope:
        Padding top creates an unbroken hit zone between the floating navbar and dropdown,
        preventing any glitch, blink, or premature closing.
      */}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="fixed top-[4.2rem] sm:top-[4.6rem] left-0 right-0 z-50 mx-auto w-[92%] max-w-[890px] pt-2"
      >
        <div
          role="region"
          aria-label="Services Navigation Console"
          className="relative grid grid-cols-12 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_16px_45px_-10px_rgba(6,22,44,0.14),0_2px_8px_-2px_rgba(6,22,44,0.04)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Left Rail: 5 Core Systems (4.5 Columns) */}
          <div className="col-span-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/40">
            <MegaMenuLeftRail
              categories={SERVICES_CATEGORIES}
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </div>

          {/* Center Inspection Bay: 2-Column Subservices (7 Columns) */}
          <div className="col-span-12 lg:col-span-7 bg-white">
            <MegaMenuSubServices
              category={activeCategory}
              onNavigate={onClose}
            />
          </div>
        </div>
      </div>
    </>
  );
};