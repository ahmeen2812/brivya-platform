"use client";

import React, { useRef } from "react";
import { TESTIMONIALS_CONFIG } from "./content";
import { ReviewCard } from "./components/ReviewCard";
import { CarouselControls } from "./components/CarouselControls";
import { useTestimonialCarousel } from "./hooks/useTestimonialCarousel";

export const TestimonialsSection: React.FC = () => {
  const { header, carousel, reviews } = TESTIMONIALS_CONFIG;
  const sectionRef = useRef<HTMLElement | null>(null);

  const {
    activeIndex,
    isPlaying,
    progress,
    goToNext,
    goToPrev,
    togglePlay,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  } = useTestimonialCarousel({
    totalItems: reviews.length,
    autoPlayDurationMs: carousel.autoPlayDurationMs,
    pauseOnHover: carousel.pauseOnHover,
  });

  return (
    <section
      id="client-experiences"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Client Testimonials and Experiences"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      /* 
        Light Theme Canvas & Compact Spacing:
        Seamlessly flows from the previous section with clean padding.
      */
      className="relative w-full bg-[#F4F7FC] py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-t border-slate-200/60 select-none"
    >
      <div className="relative mx-auto w-full max-w-[1340px] px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto pb-9 sm:pb-11 select-none">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center justify-center mb-3">
            <div className="inline-flex items-center justify-center bg-[#EBF3FF] border border-[#CBDDF6] px-3.5 sm:px-4 py-1.5 rounded-full shadow-2xs">
              <span className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#0A5FD7] pt-px">
                {header.eyebrow}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-extrabold text-[#06162C] leading-[1.12] tracking-[-0.035em] text-balance">
            {header.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-sans text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed text-[#475569] text-balance">
            {header.subtitle}
          </p>
        </div>

        {/* 
          Horizontal Carousel Stage:
          Displays the active review in the center with neighboring reviews visible
        */}
        <div className="relative w-full flex items-center justify-center overflow-visible">
          <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-8">
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + reviews.length) % reviews.length;
              const isNext = index === (activeIndex + 1) % reviews.length;

              // On desktop, keep active and immediate neighbors rendered in-view
              // On mobile, render only the active card to prevent horizontal overflow
              if (!isActive && !isPrev && !isNext) {
                return null;
              }

              return (
                <div
                  key={review.id}
                  className={`${
                    isActive
                      ? "block w-full max-w-[540px] sm:max-w-[580px] md:max-w-[620px]"
                      : "hidden lg:block w-full max-w-[420px] xl:max-w-[460px]"
                  }`}
                >
                  <ReviewCard
                    review={review}
                    isActive={isActive}
                    cardIndex={index}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Progress Bar & Controls */}
        <CarouselControls
          onPrev={goToPrev}
          onNext={goToNext}
          onTogglePlay={togglePlay}
          isPlaying={isPlaying}
          progress={progress}
          currentIndex={activeIndex}
          totalCount={reviews.length}
        />
      </div>
    </section>
  );
};