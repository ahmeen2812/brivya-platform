"use client";

import React, { useState } from "react";
import { INQUIRY_CONTENT } from "./content";
import { InquiryFormState, InquiryFormErrors } from "./types";
import { InquiryTexture } from "./InquiryTexture";

export const InquiryForm: React.FC = () => {
  const { form } = INQUIRY_CONTENT;

  const [formState, setFormState] = useState<InquiryFormState>({
    fullName: "",
    email: "",
    company: "",
    serviceCategory: "",
    projectDetails: "",
    budgetRange: "",
    timeline: "",
  });

  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: InquiryFormErrors = {};
    if (!formState.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formState.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formState.serviceCategory) errs.serviceCategory = "Please select a service category.";
    if (!formState.projectDetails.trim()) errs.projectDetails = "Project details are required.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Safe preview demonstration mode - no fake email dispatch
      setIsDemoSubmitted(true);
    }
  };

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_-8px_rgba(6,22,44,0.06)] overflow-hidden">
      <InquiryTexture />

      <div className="relative z-10 flex flex-col w-full">
        {/* Form Header */}
        <div className="mb-6 sm:mb-8 border-b border-slate-100 pb-5">
          <h2 className="font-sans text-[22px] sm:text-[26px] font-bold text-[#06162C] tracking-tight">
            {form.heading}
          </h2>
          <p className="mt-1 font-sans text-[13.5px] sm:text-[14px] text-[#64748B]">
            {form.supportingLine}
          </p>
        </div>

        {/* Demonstration Feedback Banner */}
        {isDemoSubmitted && (
          <div className="mb-6 rounded-xl border border-blue-200 bg-sky-50/80 p-4 text-left">
            <div className="flex items-center gap-2 text-[#0A5FD7] font-semibold text-sm">
              <span>●</span>
              <span>Inquiry Form UI Validated</span>
            </div>
            <p className="mt-1 text-xs text-[#475569] leading-relaxed">
              Client validation succeeded. Production delivery service will be connected in the subsequent backend stage.
            </p>
          </div>
        )}

        {/* Main Form Fields */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-5">
          {/* 1. Full Name & Email (2 Cols on tablet+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="inquiry-name" className="block font-sans text-xs font-semibold text-[#06162C] mb-1.5">
                Full Name <span className="text-[#0A5FD7]">*</span>
              </label>
              <input
                id="inquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formState.fullName}
                onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                placeholder="Jane Doe"
                className={`w-full h-11 px-3.5 rounded-xl border text-sm text-[#06162C] bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#0A5FD7] focus:ring-[#0A5FD7]/15"
                }`}
              />
              {errors.fullName && <p className="mt-1 text-[11px] text-red-500">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="inquiry-email" className="block font-sans text-xs font-semibold text-[#06162C] mb-1.5">
                Email Address <span className="text-[#0A5FD7]">*</span>
              </label>
              <input
                id="inquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="jane@company.com"
                className={`w-full h-11 px-3.5 rounded-xl border text-sm text-[#06162C] bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.email ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#0A5FD7] focus:ring-[#0A5FD7]/15"
                }`}
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
            </div>
          </div>

          {/* 2. Company (Optional) & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="inquiry-company" className="block font-sans text-xs font-semibold text-[#06162C] mb-1.5">
                Company / Organization <span className="font-normal text-slate-400">(Optional)</span>
              </label>
              <input
                id="inquiry-company"
                name="organization"
                type="text"
                autoComplete="organization"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                placeholder="Acme Corp"
                className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm text-[#06162C] bg-slate-50/60 focus:bg-white focus:outline-none focus:border-[#0A5FD7] focus:ring-2 focus:ring-[#0A5FD7]/15 transition-all"
              />
            </div>

            <div>
              <label htmlFor="inquiry-service" className="block font-sans text-xs font-semibold text-[#06162C] mb-1.5">
                Service Required <span className="text-[#0A5FD7]">*</span>
              </label>
              <select
                id="inquiry-service"
                required
                value={formState.serviceCategory}
                onChange={(e) => setFormState({ ...formState, serviceCategory: e.target.value })}
                className={`w-full h-11 px-3.5 rounded-xl border text-sm text-[#06162C] bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.serviceCategory ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#0A5FD7] focus:ring-[#0A5FD7]/15"
                }`}
              >
                <option value="">Select a service category...</option>
                {form.services.map((opt) => (
                  <option key={opt.id} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.serviceCategory && <p className="mt-1 text-[11px] text-red-500">{errors.serviceCategory}</p>}
            </div>
          </div>

          {/* 3. Project Details (Multiline Textarea) */}
          <div>
            <label htmlFor="inquiry-details" className="block font-sans text-xs font-semibold text-[#06162C] mb-1.5">
              Project Details <span className="text-[#0A5FD7]">*</span>
            </label>
            <textarea
              id="inquiry-details"
              rows={4}
              required
              value={formState.projectDetails}
              onChange={(e) => setFormState({ ...formState, projectDetails: e.target.value })}
              placeholder="Tell us a little about your project, goals, or the problem you're trying to solve."
              className={`w-full p-3.5 rounded-xl border text-sm text-[#06162C] bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 transition-all leading-relaxed ${
                errors.projectDetails ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#0A5FD7] focus:ring-[#0A5FD7]/15"
              }`}
            />
            {errors.projectDetails && <p className="mt-1 text-[11px] text-red-500">{errors.projectDetails}</p>}
          </div>

          {/* 4. Estimated Budget Selection (Pills) */}
          <div>
            <span className="block font-sans text-xs font-semibold text-[#06162C] mb-2">
              Estimated Budget <span className="font-normal text-slate-400">(Optional)</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {form.budgetRanges.map((opt) => {
                const isSelected = formState.budgetRange === opt.label;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormState({ ...formState, budgetRange: isSelected ? "" : opt.label })}
                    className={`px-3 py-1.5 rounded-lg font-sans text-xs font-medium transition-all select-none border ${
                      isSelected
                        ? "bg-[#0A5FD7] text-white border-[#0A5FD7] shadow-2xs"
                        : "bg-slate-50 border-slate-200 text-[#475569] hover:bg-slate-100"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Preferred Timeline Selection (Pills) */}
          <div>
            <span className="block font-sans text-xs font-semibold text-[#06162C] mb-2">
              Preferred Timeline <span className="font-normal text-slate-400">(Optional)</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {form.timelines.map((opt) => {
                const isSelected = formState.timeline === opt.label;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormState({ ...formState, timeline: isSelected ? "" : opt.label })}
                    className={`px-3 py-1.5 rounded-lg font-sans text-xs font-medium transition-all select-none border ${
                      isSelected
                        ? "bg-[#0A5FD7] text-white border-[#0A5FD7] shadow-2xs"
                        : "bg-slate-50 border-slate-200 text-[#475569] hover:bg-slate-100"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6. Submit Button (Navbar-Gradient CTA Language) */}
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
  );
};