"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_BRAND_CONFIG } from "@/config/navigation";
import { animateLogoPrismaticSheen } from "@/animations/navHoverAnimations";

interface NavLogoProps {
  className?: string;
  onClick?: () => void;
  wrapperRef?: React.RefObject<HTMLDivElement | null>;
}

export const NavLogo: React.FC<NavLogoProps> = ({
  className,
  onClick,
  wrapperRef,
}) => {
  const sheenRef = React.useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    animateLogoPrismaticSheen(sheenRef.current);
  };

  return (
    <div
      ref={wrapperRef}
      className="overflow-hidden"
      style={{ willChange: "transform, opacity" }}
    >
      <Link
        href="/"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        aria-label="Brivya Solutions - Return to homepage"
        className={`group relative flex items-center shrink-0 select-none py-1 transition-opacity duration-200 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1675F8] rounded-md ${
          className || ""
        }`}
      >
        <div className="relative h-8 sm:h-9 md:h-10 w-auto min-w-[110px] sm:min-w-[130px] flex items-center overflow-hidden">
          <Image
            src={NAV_BRAND_CONFIG.logoSrc}
            alt={NAV_BRAND_CONFIG.logoAlt}
            width={160}
            height={42}
            priority
            className="h-full w-auto object-contain object-left"
          />

          {/* Prismatic Specular Sheen Beam Layer */}
          <div
            ref={sheenRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -skew-x-12 w-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0"
            style={{ willChange: "transform, opacity" }}
          />
        </div>
      </Link>
    </div>
  );
};