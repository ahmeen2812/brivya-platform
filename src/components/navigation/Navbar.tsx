"use client";

import * as React from "react";
import { NavContainer } from "./NavContainer";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavDivider } from "./NavDivider";
import { NavCtaButton } from "./NavCtaButton";
import { NAV_ITEMS } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  // Close mobile drawer on route transition
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is unfolded
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <NavContainer>
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <NavLogo onClick={closeMobileMenu} />
          {/* Vertical Divider after Logo */}
          <NavDivider className="hidden md:block" />
        </div>

        {/* Center Section: Desktop / Tablet Navigation Items (Exact Reference) */}
        <nav
          aria-label="Desktop Navigation"
          className="hidden md:flex items-center justify-center flex-1 px-2"
        >
          <NavLinks />
        </nav>

        {/* Right Section: CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Vertical Divider before CTA (Matches Reference) */}
          <NavDivider className="hidden md:block" />

          {/* Pill CTA Button */}
          <NavCtaButton className="hidden sm:inline-flex" />

          {/* Accessible Mobile/Tablet Drawer Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#06162C] transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8]"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </NavContainer>

      {/* Mobile Drawer (Responsive Behavior for Small Screens) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#06162C]/70 backdrop-blur-md md:hidden pt-24 px-4 pb-8 flex flex-col justify-between"
        >
          <div className="rounded-3xl bg-white p-6 shadow-2xl flex flex-col gap-4 max-h-[calc(100vh-140px)] overflow-y-auto">
            <div className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8998AD] pb-2 border-b border-slate-100">
              Navigation Menu
            </div>

            <ul className="flex flex-col divide-y divide-slate-100 m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

                return (
                  <li key={item.id} className="list-none">
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-xs font-semibold text-[#8998AD]">
                          {item.index}
                        </span>
                        <span className="font-sans text-base font-semibold text-[#06162C]">
                          {item.label}
                        </span>
                      </div>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#1675F8]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-slate-100 sm:hidden">
              <NavCtaButton onClick={closeMobileMenu} className="w-full text-center" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};