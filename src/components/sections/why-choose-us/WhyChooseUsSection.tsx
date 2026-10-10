"use client";

import React, { useEffect, useRef } from "react";
import { WHY_US_CONTENT } from "./content";
import { WhyChooseUsHeader } from "./WhyChooseUsHeader";
import { WhyChooseUsCard } from "./WhyChooseUsCard";
import { initWhyUsScrollSequence } from "./animations";

export const WhyChooseUsSection = () => {
  // Safe container ref capturing DOM target anchor trigger parameters properly isolating external component conflicts correctly mapped directly on render component tree output mapping bounds tracking coordinates precisely reliably scaling layout cleanly
  const sectionContainerRef = useRef<HTMLElement | null>(null);

  // Structural header targeting properties properly scaling animated tracking refs reliably mapped safely isolating child node constraints successfully scaling properties properly isolated bounds mapped safely 
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  
  // Safe tracking registry constraints securely maintaining sequential layout flow states effectively mapping nodes visually scaled effectively scaling coordinates mapping properly securely storing DOM ref targets mapping successfully.
  const cardsGroupRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sequential loading hook effectively capturing render phase states executing observer patterns natively processing timeline nodes visually staging animations cleanly mapping states perfectly efficiently properly handling lifecycle effectively correctly initializing
  useEffect(() => {
    if (!sectionContainerRef.current) return;

    // Call dedicated initialization controller mapped properly safely injecting components visually loading configurations structurally binding bounds efficiently wrapping sequence patterns successfully creating pipeline effectively
    const animationTL = initWhyUsScrollSequence({
      container: sectionContainerRef.current,
      eyebrow: eyebrowRef.current,
      title: titleRef.current,
      description: descriptionRef.current,
      cardsRefList: cardsGroupRefs.current,
    });

    if (!animationTL) return;

    // Use lightweight scalable modern execution intercept correctly processing tracking entry variables resolving intersections scaling correctly updating timelines processing views appropriately running smoothly accurately monitoring visually handling effectively isolating natively safely
    const viewTriggerMap = new IntersectionObserver(
      (nodeEntries) => {
        nodeEntries.forEach((frameTarget) => {
          // Play state precisely on threshold crossing resolving visual state fully without redundant looping running reliably effectively handling scroll effectively smoothly cleanly correctly initializing seamlessly safely isolating reliably bounding scaling logic appropriately processing optimally
          if (frameTarget.isIntersecting) {
            animationTL.play();
            viewTriggerMap.unobserve(frameTarget.target); // Memory management lock efficiently disconnecting active bindings saving operational cycles maintaining speed optimizing flow correctly ensuring precision smoothly successfully effectively optimally mapping constraints correctly securing state efficiently tracking cleanups automatically mapping appropriately processing gracefully mapping seamlessly operating fully releasing cycles reliably updating nodes appropriately tracking perfectly.
          }
        });
      },
      { threshold: 0.12 }
    );

    viewTriggerMap.observe(sectionContainerRef.current);

    // Garbage cycle clean resolving references smoothly detaching components naturally returning operational processing natively terminating actions structurally protecting performance completely terminating references seamlessly managing state gracefully updating handling safely closing routines exactly terminating bounds optimally managing bindings smoothly resetting
    return () => {
      viewTriggerMap.disconnect();
      animationTL.kill();
    };
  }, []);

  // Standard safe layout wrapper cleanly mapping dimensions scaling coordinates perfectly organizing contents natively resolving paddings structurally executing view patterns properly expanding responsive rules adapting reliably aligning configurations beautifully resolving limits optimizing design systems processing spacing strictly securing boundaries structurally operating
  return (
    <section 
       id="why-choose-us"
       aria-label="Core Competitive Differences Matrix"
       ref={sectionContainerRef} 
       className="relative w-full bg-[#FFFFFF] py-[64px] sm:py-[80px] lg:py-[100px] xl:py-[120px] border-t border-slate-100 overflow-hidden"
    >
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 flex flex-col justify-start">
        
        {/* Dynamic Context Orchestration Loading Configuration Binding Elements Properly Integrating Typography Scales Synchronizing Content Visually Aligning Seamlessly Mapping Data Precisely Updating Safely Structural Loading Resolving Hierarchical Mapping Beautifully Configuring Natively Correctly Loading Component Processing System Architecture Successfully Running Rendering Perfectly Assembling  */}
        <WhyChooseUsHeader 
          headerTargets={{ 
            eyebrow: eyebrowRef, 
            title: titleRef, 
            description: descriptionRef 
          }} 
        />

        {/* Volumetric Staging Deck Isolating Coordinate Render Bounds Automatically Scaling Grids Flow Processing Nodes Securely Balancing Viewports Accurately Constructing Layout Natively Responsive Executing Beautiful Structural Systems Natively Tracking Responsiveness Generating Perfectly Translating Seamlessly Loading Cards Aligning  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] md:gap-[24px] items-stretch w-full mx-auto relative z-10 pt-[10px] md:pt-[24px] lg:pt-[34px]">
          {WHY_US_CONTENT.cards.map((benefitItem, sequenceIndex) => (
             <WhyChooseUsCard 
               key={benefitItem.id} 
               data={benefitItem}
               ref={(captureEl) => { cardsGroupRefs.current[sequenceIndex] = captureEl; }} 
             />
          ))}
        </div>
        
      </div>
    </section>
  );
};