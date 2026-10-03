"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/config/navigation";
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
        className="rounded-3xl bg-white p-6 border border-slate-100/90 shadow-[0_20px_50px_-10px_rgba(6,22,44,0.18)] flex flex-col gap-4 max-h-[calc(100vh-120px)] overflow-y-auto"
      >
        <div className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8998AD] pb-2 border-b border-slate-100 flex items-center justify-between">
          <span>Navigation Menu</span>
          <span className="font-mono text-[10px] text-[#1675F8]">06 SECTORS</span>
        </div>

        <ul className="flex flex-col divide-y divide-slate-100 m-0 p-0">
          {NAV_ITEMS.map((item, idx) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

            return (
              <li
                key={item.id}
                ref={(el) => {
                  itemsRefList.current[idx] = el;
                }}
                className="list-none"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3.5 group"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Dynamic Rolling Number Index */}
                    <span
                      ref={(el) => {
                        numberRefList.current[idx] = el;
                      }}
                      className="font-mono text-xs font-semibold text-[#8998AD] group-hover:text-[#1675F8] transition-colors"
                    >
                      00
                    </span>
                    <span
                      className={`font-sans text-base font-semibold tracking-tight transition-colors ${
                        isActive ? "text-[#1675F8]" : "text-[#06162C] group-hover:text-[#0A5FD7]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  {isActive ? (
                    <span className="h-2 w-2 rounded-full bg-[#1675F8]" />
                  ) : (
                    <span className="font-sans text-xs text-[#8998AD] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Full-Width CTA */}
        <div
          ref={ctaButtonRef}
          className="pt-3 border-t border-slate-100 sm:hidden"
        >
          <NavCtaButton onClick={onClose} className="w-full text-center" />
        </div>
      </div>
    </div>
  );
};