"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INQUIRY_CONTENT } from "./content";
import { InquiryFormState, InquiryFormErrors } from "./types";

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
      // Safe client demonstration validation - never simulates fake email delivery
      setIsDemoValidated(true);
    }
  };

  return (
    <div
      /* 
        ONE Unified Main Card:
        Uses the exact soft blue-gray gradient family from the delivery results card:
        from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] with border-[#BACFE6]
      */
      className="relative w-full rounded-2xl sm:rounded-3xl border border-[#BACFE6] bg-gradient-to-br from-[#E1E7EF] via-[#D8E2F0] to-[#C2DBF7] p-6 sm:p-8 lg:p-10 shadow-[0_16px_45px_-12px_rgba(7,54,109,0.08)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.95)] overflow-hidden select-none"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* =================================================================== */}
        {/* LEFT SECTION — (~45% Desktop Width): Editorial & PNG Illustration  */}
        {/* =================================================================== */}
        <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-2">
          <div>
            {/* Exact Approved Heading (No Eyebrow) */}
            <h1 className="font-sans text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-extrabold text-[#06162C] leading-[1.12] tracking-[-0.035em]">
              {editorial.heading}
            </h1>

            {/* Exact Approved Description */}
            <p className="mt-4 font-sans text-[14px] sm:text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
              {editorial.paragraph1}
            </p>

            <p className="mt-3 font-sans text-[14px] sm:text-[15px] leading-[1.68] text-[#475569] font-normal tracking-[-0.01em]">
              {editorial.paragraph2}
            </p>
          </div>

          {/* Dedicated PNG Illustration Bay (Inside same left column, no wrapper card) */}
          <div className="relative w-full aspect-[16/11] max-w-[360px] sm:max-w-[380px] mt-6 sm:mt-8 mx-auto lg:mx-0 flex items-center justify-center">
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
              /* Informative fallback container */
              <div className="flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-300 rounded-xl w-full h-full">
                <span className="font-mono text-[11px] font-bold text-[#06162C]">
                  PNG Asset: public/images/contact-illustration.png
                </span>
                <span className="mt-1 text-[11px] text-[#64748B]">
                  Image renders automatically when placed in directory
                </span>
              </div>
            )}
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT SECTION — (~55% Desktop Width): Streamlined 4-Field Form     */}
        {/* =================================================================== */}
        <div className="lg:col-span-7 flex flex-col justify-start border-t lg:border-t-0 lg:border-l border-[#BACFE6]/70 pt-8 lg:pt-0 lg:pl-10">
          <div className="mb-6 border-b border-[#BACFE6]/60 pb-4">
            <h2 className="font-sans text-[22px] sm:text-[24px] font-bold text-[#06162C] tracking-tight">
              {form.heading}
            </h2>
          </div>

          {/* Validation Status Notice (Non-production state) */}
          {isDemoValidated && (
            <div className="mb-5 rounded-xl border border-blue-200 bg-white/80 p-3.5 text-left">
              <span className="text-xs font-semibold text-[#0A5FD7] block">
                ● Form Input Validated
              </span>
              <span className="text-[11.5px] text-[#475569] leading-relaxed block mt-0.5">
                Client-side validation passed. Connect to live delivery service in backend integration phase.
              </span>
            </div>
          )}

          {/* 4 Fields Only Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-4 sm:space-y-4.5">
            {/* Field 1: Full Name */}
            <div>
              <label htmlFor="inquiry-fullname" className="block font-sans text-xs font-semibold text-[#06162C] mb-1">
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
                className={`w-full h-11 px-3.5 rounded-xl border text-sm text-[#06162C] bg-white/80 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-red-400 focus:ring-red-100"
                    : "border-slate-200/90 focus:border-[#0A5FD7] focus:ring-[#0A5FD7]/15"
                }`}
              />
              {errors.fullName && <p className="mt-1 text-[11px] text-red-500">{errors.fullName}</p>}
            </div>

            {/* Field 2: Email Address */}
            <div>
              <label htmlFor="inquiry-email-address" className="block font-sans text-xs font-semibold text-[#06162C] mb-1">
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
                className={`w-full h-11 px-3.5 rounded-xl border text-sm text-[#06162C] bg-white/80 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-red-400 focus:ring-red-100"
                    : "border-slate-200/90 focus:border-[#0A5FD7] focus:ring-[#0A5FD7]/15"
                }`}
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
            </div>

            {/* Field 3: Project Type (Dropdown with 7 Core Categories + Not Sure Yet) */}
            <div>
              <label htmlFor="inquiry-project-type" className="block font-sans text-xs font-semibold text-[#06162C] mb-1">
                Project Type <span className="text-[#0A5FD7]">*</span>
              </label>
              <select
                id="inquiry-project-type"
                required
                value={formState.projectType}
                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                className={`w-full h-11 px-3.5 rounded-xl border text-sm text-[#06162C] bg-white/80 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.projectType
                    ? "border-red-400 focus:ring-red-100"
                    : "border-slate-200/90 focus:border-[#0A5FD7] focus:ring-[#0A5FD7]/15"
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

            {/* Field 4: Message (Multiline Textarea) */}
            <div>
              <label htmlFor="inquiry-message" className="block font-sans text-xs font-semibold text-[#06162C] mb-1">
                Message <span className="text-[#0A5FD7]">*</span>
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell us a little about your project, goals, or the problem you're trying to solve."
                className={`w-full p-3.5 rounded-xl border text-sm text-[#06162C] bg-white/80 focus:bg-white focus:outline-none focus:ring-2 transition-all leading-relaxed ${
                  errors.message
                    ? "border-red-400 focus:ring-red-100"
                    : "border-slate-200/90 focus:border-[#0A5FD7] focus:ring-[#0A5FD7]/15"
                }`}
              />
              {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
            </div>

            {/* Submit Button (Navbar CTA Language) */}
            <div className="pt-2">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#061B3A] via-[#072B5E] to-[#0A5FD7] px-8 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_4px_16px_-2px_rgba(6,27,58,0.35)] transition-all duration-300 hover:shadow-[0_8px_25px_-2px_rgba(10,95,215,0.45)] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5FD7]"
              >
                <span>{form.submitButtonText}</span>
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};