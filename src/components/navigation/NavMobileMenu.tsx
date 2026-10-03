"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, type NavItemConfig } from "@/config/navigation";
import { SERVICES_CATEGORIES } from "@/config/servicesMegaMenu";
import { NavCtaButton } from "./NavCtaButton";
import {
  animateMobileDrawerOpen,
  animateMobileDrawerClose,
} from "@/animations/navMobileAnimations";

interface NavMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavMobileMenu: React.FC<NavMobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = React.useState<boolean>(isOpen);
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);

  const backdropRef = React.useRef<HTMLDivElement | null>(null);
  const drawerCardRef = React.useRef<HTMLDivElement | null>(null);
  const itemsRefList = React.useRef<(HTMLLIElement | null)[]>([]);
  const numberRefList = React.useRef<(HTMLSpanElement | null)[]>([]);
  const ctaButtonRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else if (shouldRender) {
      animateMobileDrawerClose(backdropRef.current, drawerCardRef.current, () => {
        setShouldRender(false);
      });
    }
  }, [isOpen, shouldRender]);

  React.useEffect(() => {
    if (shouldRender && isOpen) {
      animateMobileDrawerOpen({
        backdrop: backdropRef.current,
        drawerCard: drawerCardRef.current,
        items: itemsRefList.current,
        numberRefs: numberRefList.current,
        ctaButton: ctaButtonRef.current,
      });
    }
  }, [shouldRender, isOpen]);

  const toggleCategory = (catId: string) => {
    setExpandedCategory((prev) => (prev === catId ? null : catId));
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-40 bg-[#06162C]/65 backdrop-blur-md md:hidden pt-20 sm:pt-24 px-4 pb-8 flex flex-col justify-start"
    >
      <div
        ref={drawerCardRef}
        className="rounded-3xl bg-white p-5 sm:p-6 border border-slate-100/90 shadow-[0_20px_50px_-10px_rgba(6,22,44,0.18)] flex flex-col gap-4 max-h-[calc(100vh-120px)] overflow-y-auto"
      >
        <div className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8998AD] pb-2 border-b border-slate-100 flex items-center justify-between">
          <span>Navigation Menu</span>
          <span className="font-mono text-[10px] text-[#1675F8]">33 SERVICES</span>
        </div>

        <ul className="flex flex-col divide-y divide-slate-100 m-0 p-0">
          {NAV_ITEMS.map((item: NavItemConfig, idx: number) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            const isServices = item.id === "services";

            return (
              <li
                key={item.id}
                ref={(el) => {
                  itemsRefList.current[idx] = el;
                }}
                className="list-none py-2"
              >
                <div className="flex items-center justify-between py-1.5">
                  <Link
                    href={item.href}
                    onClick={isServices ? (e) => { e.preventDefault(); toggleCategory(SERVICES_CATEGORIES[0].id); } : onClose}
                    className="flex items-center gap-2.5"
                  >
                    <span
                      className={`font-sans tracking-tight transition-colors ${
                        isActive
                          ? "text-[16px] font-bold text-[#06162C]"
                          : "text-[15px] font-semibold text-[#8998AD] hover:text-[#06162C]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>

                  {isServices && (
                    <button
                      type="button"
                      onClick={() => toggleCategory(expandedCategory ? "" : SERVICES_CATEGORIES[0].id)}
                      className="p-1.5 text-[#1675F8]"
                      aria-label="Toggle all services"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedCategory ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Nested Touch Accordion for Services */}
                {isServices && (
                  <div className="mt-2 flex flex-col gap-2 pl-2 border-l-2 border-slate-100">
                    {SERVICES_CATEGORIES.map((cat) => {
                      const isCatExpanded = expandedCategory === cat.id;

                      return (
                        <div key={cat.id} className="flex flex-col rounded-xl bg-slate-50/70 p-2.5">
                          <button
                            type="button"
                            onClick={() => toggleCategory(cat.id)}
                            className="flex items-center justify-between text-left"
                          >
                            <span className="font-sans text-xs font-bold text-[#06162C]">
                              {cat.title}
                            </span>
                            <span className="font-mono text-xs text-[#1675F8]">
                              {isCatExpanded ? "−" : "+"}
                            </span>
                          </button>

                          {isCatExpanded && (
                            <ul className="mt-2.5 flex flex-col divide-y divide-slate-100 border-t border-slate-200/60 pt-1">
                              {cat.subServices.map((sub) => (
                                <li key={sub.id} className="py-2">
                                  <Link
                                    href={sub.href}
                                    onClick={onClose}
                                    className="flex items-center justify-between"
                                  >
                                    <span className="font-sans text-[12px] text-[#06162C]/85">
                                      {sub.title}
                                    </span>
                                    <span className="text-[10px] text-[#1675F8]">→</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Full-Width CTA */}
        <div ref={ctaButtonRef} className="pt-3 border-t border-slate-100 sm:hidden">
          <NavCtaButton onClick={onClose} className="w-full text-center" />
        </div>
      </div>
    </div>
  );
};