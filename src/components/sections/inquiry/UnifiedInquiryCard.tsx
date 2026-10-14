"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INQUIRY_CONTENT } from "./content";
import { InquiryFormState, InquiryFormErrors } from "./types";
import { buildHeroIntroTimeline } from "./animations/InquiryHeroAnimation";
import { buildImageRiseTimeline } from "./animations/InquiryImageReveal";
import { buildFormFieldsTimeline } from "./animations/InquiryFormAnimation";
import {
  animateKineticArrowHorizontal,
  animateKineticArrowDiagonal,
} from "./animations/ContactHoverEffects";
import { INQUIRY_MOTION } from "./animations/animationConfig";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const UnifiedInquiryCard: React.FC = () => {
  const { editorial, form } = INQUIRY_CONTENT;

  // Streamlined 4-field state
  const [formState, setFormState] = useState<InquiryFormState>({
    fullName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [imageError, setImageError] = useState(false);
  const [isDemoValidated, setIsDemoValidated] = useState(false);

  // Structural Target References
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const headingTextRef = useRef<HTMLHeadingElement | null>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement | null>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement | null>(null);
  const pngContainerRef = useRef<HTMLDivElement | null>(null);

  // Form Field References (Ordered strictly: Heading → Name → Email → Type → Message → Buttons)
  const formHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const fullNameFieldRef = useRef<HTMLDivElement | null>(null);
  const emailFieldRef = useRef<HTMLDivElement | null>(null);
  const projectTypeFieldRef = useRef<HTMLDivElement | null>(null);
  const messageFieldRef = useRef<HTMLDivElement | null>(null);
  const actionButtonsRef = useRef<HTMLDivElement | null>(null);

  // Arrow References for Continuous Kinetic Loops
  const primaryArrowRef = useRef<SVGSVGElement | null>(null);
  const secondaryArrowRef = useRef<SVGSVGElement | null>(null);

  // Master Entrance Sequence with Reversible ScrollTrigger Protocol
  useEffect(() => {
    if (!cardContainerRef.current) return;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardContainerRef.current,
          start: "top 92%",
          toggleActions: INQUIRY_MOTION.scrollTrigger.toggleActions,
        },
        onComplete: () => {
          if (cardContainerRef.current) {
            gsap.set(cardContainerRef.current, { filter: "none", clearProps: "filter" });
          }
        },
      });

      // 1. Card Container Elevation & Editorial Mask
      buildHeroIntroTimeline(
        {
          cardContainer: cardContainerRef.current,
          headingText: headingTextRef.current,
          paragraph1: paragraph1Ref.current,
          paragraph2: paragraph2Ref.current,
        },
        masterTl,
        0
      );

      // 2. PNG Illustration Bottom-Rising Emergence
      buildImageRiseTimeline(pngContainerRef.current, masterTl, 0.28);

      // 3. Staggered Form Sequence (Title → Name → Email → Type → Message → Buttons)
      buildFormFieldsTimeline(
        {
          formHeading: formHeadingRef.current,
          fullNameField: fullNameFieldRef.current,
          emailField: emailFieldRef.current,
          projectTypeField: projectTypeFieldRef.current,
          messageField: messageFieldRef.current,
          actionButtons: actionButtonsRef.current,
        },
        masterTl,
        0.22
      );
    }, cardContainerRef);

    // Synchronize ScrollTrigger geometry post hydration
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const validate = (): boolean => {
    const errs: InquiryFormErrors = {};
    if (!formState.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formState.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formState.projectType) errs.projectType = "Please select a project type.";
    if (!formState.message.trim()) errs.message = "Message details are required.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsDemoValidated(true);
    }
  };

  return (
    <div
      ref={cardContainerRef}
      /* 
        Unified Main Card:
        Matching the soft blue-gray gradient surface from results & reviews:
        from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] with border-[#BACFE6]
      */
      className="relative w-full rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 sm:p-8 lg:p-10 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] overflow-hidden select-none will-change-transform"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* =================================================================== */}
        {/* LEFT COLUMN — (~45% Width): Masked Headline & Rising PNG            */}
        {/* =================================================================== */}
        <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-2">
          <div>
            {/* Masked Editorial Headline Container */}
            <div className="overflow-hidden pb-1">
              <h1
                ref={headingTextRef}
                className="font-sans text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-extrabold text-[#06162C] leading-[1.12] tracking-[-0.035em] will-change-transform"
              >
                {editorial.heading}
              </h1>
            </div>

            {/* Editorial Description Paragraphs */}
            <p
              ref={paragraph1Ref}
              className="mt-4 font-sans text-[14px] sm:text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em] will-change-transform"
            >
              {editorial.paragraph1}
            </p>

            <p
              ref={paragraph2Ref}
              className="mt-3 font-sans text-[14px] sm:text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em] will-change-transform"
            >
              {editorial.paragraph2}
            </p>
          </div>

          {/* 
            PNG Illustration Bay:
            Anchored to the floor of the card with overflow-hidden boundary
            so the illustration emerges physically upward from within the card.
          */}
          <div className="overflow-hidden w-full max-w-[360px] sm:max-w-[380px] mt-6 sm:mt-8 mx-auto lg:mx-0">
            <div
              ref={pngContainerRef}
              className="relative w-full aspect-[16/11] flex items-center justify-center will-change-transform"
            >
              {!imageError ? (
                <Image
                  src={editorial.imagePath}
                  alt={editorial.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 380px"
                  className="object-contain"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-300 rounded-xl w-full h-full">
                  <span className="font-mono text-[11px] font-bold text-[#06162C]">
                    PNG Location: public/images/contact-illustration.png
                  </span>
                  <span className="mt-1 text-[11px] text-[#64748B]">
                    Image renders automatically when placed in directory
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT COLUMN — (~55% Width): Architectural Form with Premium Focus  */}
        {/* =================================================================== */}
        <div className="lg:col-span-7 flex flex-col justify-start border-t lg:border-t-0 lg:border-l border-[#BACFE6]/70 pt-8 lg:pt-0 lg:pl-10">
          <div className="mb-6 border-b border-[#BACFE6]/60 pb-4">
            <h2
              ref={formHeadingRef}
              className="font-sans text-[22px] sm:text-[24px] font-bold text-[#06162C] tracking-tight will-change-transform"
            >
              {form.heading}
            </h2>
          </div>

          {/* Demo Validation Banner */}
          {isDemoValidated && (
            <div className="mb-5 rounded-xl border border-blue-200 bg-white/85 p-3.5 text-left shadow-2xs">
              <span className="text-xs font-semibold text-[#0A5FD7] block">
                ● Form Input Validated
              </span>
              <span className="text-[11.5px] text-[#475569] leading-relaxed block mt-0.5">
                Client validation passed. Direct submission service will be connected in subsequent phase.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-4 sm:space-y-4.5">
            {/* Field 1: Full Name */}
            <div ref={fullNameFieldRef} className="group/field will-change-transform">
              <label
                htmlFor="inquiry-fullname"
                className="block font-sans text-xs font-semibold text-[#06162C] group-focus-within/field:text-[#0A5FD7] transition-colors duration-200 mb-1.5"
              >
                Full Name <span className="text-[#0A5FD7]">*</span>
              </label>
              <input
                id="inquiry-fullname"
                type="text"
                autoComplete="name"
                required
                value={formState.fullName}
                onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                placeholder="Jane Doe"
                className={`w-full h-11 px-3.5 text-sm text-[#06162C] placeholder:text-[#8998AD] bg-white/85 rounded-xl border transition-all duration-200 ease-out outline-none focus:outline-none focus:ring-0 focus:bg-white ${
                  errors.fullName
                    ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_1px_#EF4444,0_2px_8px_rgba(239,68,68,0.12)]"
                    : "border-[#BACFE6]/80 hover:border-[#8998AD] hover:bg-white hover:shadow-[0_2px_8px_rgba(7,54,109,0.04)] focus:border-[#0A5FD7] focus:shadow-[0_0_0_1px_#0A5FD7,0_1px_3px_0_rgba(10,95,215,0.1),0_4px_16px_-2px_rgba(10,95,215,0.14)]"
                }`}
              />
              {errors.fullName && <p className="mt-1 text-[11px] text-red-500">{errors.fullName}</p>}
            </div>

            {/* Field 2: Email Address */}
            <div ref={emailFieldRef} className="group/field will-change-transform">
              <label
                htmlFor="inquiry-email-address"
                className="block font-sans text-xs font-semibold text-[#06162C] group-focus-within/field:text-[#0A5FD7] transition-colors duration-200 mb-1.5"
              >
                Email Address <span className="text-[#0A5FD7]">*</span>
              </label>
              <input
                id="inquiry-email-address"
                type="email"
                autoComplete="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="jane@company.com"
                className={`w-full h-11 px-3.5 text-sm text-[#06162C] placeholder:text-[#8998AD] bg-white/85 rounded-xl border transition-all duration-200 ease-out outline-none focus:outline-none focus:ring-0 focus:bg-white ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_1px_#EF4444,0_2px_8px_rgba(239,68,68,0.12)]"
                    : "border-[#BACFE6]/80 hover:border-[#8998AD] hover:bg-white hover:shadow-[0_2px_8px_rgba(7,54,109,0.04)] focus:border-[#0A5FD7] focus:shadow-[0_0_0_1px_#0A5FD7,0_1px_3px_0_rgba(10,95,215,0.1),0_4px_16px_-2px_rgba(10,95,215,0.14)]"
                }`}
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
            </div>

            {/* Field 3: Project Type Dropdown */}
            <div ref={projectTypeFieldRef} className="group/field will-change-transform">
              <label
                htmlFor="inquiry-project-type"
                className="block font-sans text-xs font-semibold text-[#06162C] group-focus-within/field:text-[#0A5FD7] transition-colors duration-200 mb-1.5"
              >
                Project Type <span className="text-[#0A5FD7]">*</span>
              </label>
              <select
                id="inquiry-project-type"
                required
                value={formState.projectType}
                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                className={`w-full h-11 px-3.5 text-sm text-[#06162C] bg-white/85 rounded-xl border transition-all duration-200 ease-out outline-none focus:outline-none focus:ring-0 focus:bg-white cursor-pointer ${
                  errors.projectType
                    ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_1px_#EF4444,0_2px_8px_rgba(239,68,68,0.12)]"
                    : "border-[#BACFE6]/80 hover:border-[#8998AD] hover:bg-white hover:shadow-[0_2px_8px_rgba(7,54,109,0.04)] focus:border-[#0A5FD7] focus:shadow-[0_0_0_1px_#0A5FD7,0_1px_3px_0_rgba(10,95,215,0.1),0_4px_16px_-2px_rgba(10,95,215,0.14)]"
                }`}
              >
                <option value="">Select project category...</option>
                {form.projectTypes.map((opt) => (
                  <option key={opt.id} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.projectType && <p className="mt-1 text-[11px] text-red-500">{errors.projectType}</p>}
            </div>

            {/* Field 4: Message Multiline Field */}
            <div ref={messageFieldRef} className="group/field will-change-transform">
              <label
                htmlFor="inquiry-message"
                className="block font-sans text-xs font-semibold text-[#06162C] group-focus-within/field:text-[#0A5FD7] transition-colors duration-200 mb-1.5"
              >
                Message <span className="text-[#0A5FD7]">*</span>
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell us a little about your project, goals, or the problem you're trying to solve."
                className={`w-full p-3.5 text-sm text-[#06162C] placeholder:text-[#8998AD] bg-white/85 rounded-xl border transition-all duration-200 ease-out outline-none focus:outline-none focus:ring-0 focus:bg-white leading-relaxed resize-none ${
                  errors.message
                    ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_1px_#EF4444,0_2px_8px_rgba(239,68,68,0.12)]"
                    : "border-[#BACFE6]/80 hover:border-[#8998AD] hover:bg-white hover:shadow-[0_2px_8px_rgba(7,54,109,0.04)] focus:border-[#0A5FD7] focus:shadow-[0_0_0_1px_#0A5FD7,0_1px_3px_0_rgba(10,95,215,0.1),0_4px_16px_-2px_rgba(10,95,215,0.14)]"
                }`}
              />
              {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
            </div>

            {/* 
              Dual Action Controls with Continuous Kinetic Arrow Loops:
              1. Primary: Send Project Inquiry → (Horizontal Loop matching NavCtaButton)
              2. Secondary: Book a Call ↗ (45° Diagonal Loop)
            */}
            <div
              ref={actionButtonsRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2.5 will-change-transform"
            >
              {/* Primary Button */}
              <button
                type="submit"
                onMouseEnter={() => animateKineticArrowHorizontal(primaryArrowRef.current)}
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] transition-all duration-300 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
              >
                <span>{form.submitButtonText}</span>
                <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center overflow-hidden">
                  <svg
                    ref={primaryArrowRef}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                onMouseEnter={() => animateKineticArrowDiagonal(secondaryArrowRef.current)}
                onClick={() => {
                  // Direct calendar/meeting-booking integration placeholder
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-300/90 px-6 py-3.5 font-sans text-sm font-semibold text-[#06162C] shadow-2xs transition-all duration-300 hover:bg-slate-50 hover:border-[#0A5FD7]/50 hover:text-[#0A5FD7] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
              >
                <span>{form.bookCallButtonText}</span>
                <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center overflow-hidden">
                  <svg
                    ref={secondaryArrowRef}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};