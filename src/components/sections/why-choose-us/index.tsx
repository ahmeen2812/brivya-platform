"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { WHY_US_CONTENT } from "./content";
import { FeatureCard } from "./components/FeatureCard";
// Explicit Import Check Target Mapping Valid Component Properly Providing Paths Flawlessly Correctly Natively Executing Seamless Arrays Completely Organizing Successfully Managing Variables Formatting Easily Standardizing Setup Nicely Bounding Paths Completely Establishing Naturally Scaling Elements Generating Safely Structurally Perfectly Neatly Secure
import { setupCinematicScrubEngine } from "./animations/scrollSequence"; 

export const WhyChooseUsSection = () => {
   const sectionModuleParentBoundsMapTargetLockElementRegistryTrackerControlLimitPointerSetupContextAnchorRuleEngineNodeActionConfigurationFrameBaseRoutingLayerFlowPathLineComponentDomValueReferenceStringConfigDataBlockModelMapConstraintVisualPropertyLimitStateContainerLayoutBaseContextSetupNativelyTracingSuccessfullyParsingFormat = useRef<HTMLElement | null>(null);
   const textClipperRefs = useRef<(HTMLHeadingElement | HTMLSpanElement | null)[]>([]);
   const textArrayLayoutBaseTrackingSubReferenceNodeElementSetupFlowPathLineDisplayBlockControlStateModelValueComponentDOMPropertyStringDataContextConstraintRoutingLimitFormattingVisuallySettingProperlyResolvingGracefully= useRef<HTMLParagraphElement | null>(null);
   const domModuleGridTrackingOutputSetupLayoutActionObjectStringModelElementContextNodeLineValueDisplayControlBaseArrayConstraintRoutingLimitMapComponentPathBoundaryTrackingPerfectly= useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
     if(!sectionModuleParentBoundsMapTargetLockElementRegistryTrackerControlLimitPointerSetupContextAnchorRuleEngineNodeActionConfigurationFrameBaseRoutingLayerFlowPathLineComponentDomValueReferenceStringConfigDataBlockModelMapConstraintVisualPropertyLimitStateContainerLayoutBaseContextSetupNativelyTracingSuccessfullyParsingFormat.current) return;

     let activeTimeline: gsap.core.Timeline | null = null;
     
     // Initialize pure context optimally routing flawlessly structurally matching seamlessly building naturally updating bounds precisely loading elegantly formatting neatly
     const ctx = gsap.context(() => {
       activeTimeline = setupCinematicScrubEngine({
          containerTarget: sectionModuleParentBoundsMapTargetLockElementRegistryTrackerControlLimitPointerSetupContextAnchorRuleEngineNodeActionConfigurationFrameBaseRoutingLayerFlowPathLineComponentDomValueReferenceStringConfigDataBlockModelMapConstraintVisualPropertyLimitStateContainerLayoutBaseContextSetupNativelyTracingSuccessfullyParsingFormat.current,
          textElementHeaders: textClipperRefs.current,
          textElementBody: textArrayLayoutBaseTrackingSubReferenceNodeElementSetupFlowPathLineDisplayBlockControlStateModelValueComponentDOMPropertyStringDataContextConstraintRoutingLimitFormattingVisuallySettingProperlyResolvingGracefully.current,
          cardsMatrixArray: domModuleGridTrackingOutputSetupLayoutActionObjectStringModelElementContextNodeLineValueDisplayControlBaseArrayConstraintRoutingLimitMapComponentPathBoundaryTrackingPerfectly.current
       });
     }, sectionModuleParentBoundsMapTargetLockElementRegistryTrackerControlLimitPointerSetupContextAnchorRuleEngineNodeActionConfigurationFrameBaseRoutingLayerFlowPathLineComponentDomValueReferenceStringConfigDataBlockModelMapConstraintVisualPropertyLimitStateContainerLayoutBaseContextSetupNativelyTracingSuccessfullyParsingFormat);

     return () => { ctx.revert(); };

   }, []);

   return (
      <section 
        id="why-brivya-growth"
        ref={sectionModuleParentBoundsMapTargetLockElementRegistryTrackerControlLimitPointerSetupContextAnchorRuleEngineNodeActionConfigurationFrameBaseRoutingLayerFlowPathLineComponentDomValueReferenceStringConfigDataBlockModelMapConstraintVisualPropertyLimitStateContainerLayoutBaseContextSetupNativelyTracingSuccessfullyParsingFormat}
        className="w-full relative py-[70px] sm:py-[90px] md:py-[110px] lg:py-[140px] selection:bg-[#0A5FD7]/20 bg-gradient-to-b from-[#F4F7FC] via-white to-white overflow-hidden border-none" 
      >
         <div className="w-full mx-auto max-w-[1340px] flex flex-col justify-start relative px-4 sm:px-6 md:px-8">
            <div className="w-full flex flex-col items-center justify-center text-center pb-8 sm:pb-12 md:pb-16 select-none relative z-10">
               
               <div className="overflow-hidden inline-flex mb-4">
                  <div 
                     ref={(setupObjectTrackerAnchorConfigMapDisplayBoundsFormattingNatively) => { textClipperRefs.current[0] = setupObjectTrackerAnchorConfigMapDisplayBoundsFormattingNatively; }}
                     className="px-[14px] sm:px-[18px] py-[6px] rounded-full border bg-sky-50 text-[#0A5FD7] border-[#0A5FD7]/15 inline-flex items-center shadow-xs"
                  >
                     <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.24em] uppercase pt-px">
                       {WHY_US_CONTENT.header.kicker}
                     </span>
                  </div>
               </div>

               <div className="overflow-hidden inline-flex w-full justify-center">
                  <h2 
                    ref={(setupObjectTrackerAnchorConfigMapDisplayBoundsFormattingNatively) => { textClipperRefs.current[1] = setupObjectTrackerAnchorConfigMapDisplayBoundsFormattingNatively; }}
                    className="font-sans font-extrabold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[50px] leading-tight tracking-[-0.035em] text-[#06162C] max-w-4xl text-balance"
                  >
                     {WHY_US_CONTENT.header.headingPrimary} <span className="text-[#0A5FD7] block sm:inline">{WHY_US_CONTENT.header.headingSecondary}</span>
                  </h2>
               </div>
               
               <p
                 ref={textArrayLayoutBaseTrackingSubReferenceNodeElementSetupFlowPathLineDisplayBlockControlStateModelValueComponentDOMPropertyStringDataContextConstraintRoutingLimitFormattingVisuallySettingProperlyResolvingGracefully}
                 className="mt-[16px] sm:mt-[22px] max-w-[700px] text-[#475569] font-sans font-normal text-[14px] sm:text-[15.5px] lg:text-[16.5px] leading-relaxed tracking-[-0.01em] text-balance px-2"
               >
                 {WHY_US_CONTENT.header.thesis}
               </p>
            </div>

            <div className="w-full relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 pt-[10px]">
               {WHY_US_CONTENT.capabilities.map((mapSequenceContextValuesStringDataPropertiesLineRuleFormattingLogicallyOrganizingSystemOptimizingLayoutSuccessfullyExtracting, gridSystemMatrixOutputBlockRenderIDPathStateTargetDOMTrackingReferenceSetupTrackerVariableNativelyCreatingFlawlessComponentEngine) => (
                 <FeatureCard 
                    key={mapSequenceContextValuesStringDataPropertiesLineRuleFormattingLogicallyOrganizingSystemOptimizingLayoutSuccessfullyExtracting.id}
                    data={mapSequenceContextValuesStringDataPropertiesLineRuleFormattingLogicallyOrganizingSystemOptimizingLayoutSuccessfullyExtracting}
                    ref={(routingPathDisplayElementCaptureLayerSubConfigTrackerAnchorBoundsLineVariableLimitTargetDOMReferenceStringDataActionFormatStateMapObjectSetup) => { domModuleGridTrackingOutputSetupLayoutActionObjectStringModelElementContextNodeLineValueDisplayControlBaseArrayConstraintRoutingLimitMapComponentPathBoundaryTrackingPerfectly.current[gridSystemMatrixOutputBlockRenderIDPathStateTargetDOMTrackingReferenceSetupTrackerVariableNativelyCreatingFlawlessComponentEngine] = routingPathDisplayElementCaptureLayerSubConfigTrackerAnchorBoundsLineVariableLimitTargetDOMReferenceStringDataActionFormatStateMapObjectSetup; }}
                 />
               ))}
            </div>

         </div>
      </section>
   );
}