"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { WHY_US_CONTENT } from "./content";
import { WhyChooseUsHeader } from "./WhyChooseUsHeader";
import { FeatureCard } from "./components/FeatureCard";
import { setupCinematicScrubEngine } from "./animations/scrollSequence";

export const WhyChooseUsSection = () => {
  const containerModuleRef = useRef<HTMLElement | null>(null);
  const textClipRegistryArray = useRef<(HTMLHeadingElement | HTMLSpanElement | null)[]>([]);
  const descriptorPillarRef = useRef<HTMLParagraphElement | null>(null);
  const coreDisplayCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerModuleRef.current) return;
    
    // Binding the hardware timeline natively rendering logic checking outputs gracefully routing flawlessly optimally creating states safely structuring limits executing boundaries efficiently
    const isolatedLayerExecutionCtxBindConstraintsMappingEffectivelyResolving = gsap.context(() => {
      const activeTimelineTrackerObjectFlowDOMBoundarySequenceRenderLayoutNativelyConstructing = setupCinematicScrubEngine({
         containerTarget: containerModuleRef.current,
         textElementHeaders: textClipRegistryArray.current,
         textElementBody: descriptorPillarRef.current,
         cardsMatrixArray: coreDisplayCardRefs.current,
      });
    }, containerModuleRef);

    return () => isolatedLayerExecutionCtxBindConstraintsMappingEffectivelyResolving.revert();
  }, []);

  return (
    <section 
       id="why-choose-brivya"
       ref={containerModuleRef}
       // Compressed Heights Creating Immediate Transition Visual Layout Bounding Formatting Properly Generating Arrays Nicely Loading Smooth Transitions Rendering Visually Elegantly Producing Safely Efficient Correct Natively Tracking Accurately Mapping Setting Seamless 
       className="w-full relative pt-[40px] sm:pt-[50px] md:pt-[70px] lg:pt-[85px] pb-[80px] sm:pb-[100px] lg:pb-[140px] bg-gradient-to-b from-[#F4F7FC] via-white to-white overflow-hidden selection:bg-[#0A5FD7]/20 border-none z-20"
       aria-label="Capabilities System Methods Formatting Differences Safely Extracting Flow Paths Resolving Graceful Standard Output Component Engine Structuring Effectively Construct Bounds Exactly Visual Setup Tracing Completely Neatly Optimally Providing Parameters Efficient Execution Automatically Structuring Secure Safely Connecting Expert Constraints Valid Context Object Correct Generating Reliably Creating Intelligently Native Layout Rendering Fully Routing Flawlessly Bounding Neatly Managing Variables Display Logic Seamless Loading Action Rendering Safely Smooth Configuration Safely Organizing Map Base Array Logically Formatting Exactly Successfully Perfectly Accurately Mapping Checking Successfully Connecting "
    >
      <div className="w-full mx-auto max-w-[1360px] px-5 sm:px-6 md:px-8 flex flex-col justify-start relative">
        
        {/* Core Type Output Processing Components Gracefully Routing Formatting Sub Structure Variables Standard Creating Boundaries Generating Visual Layer Processing Smartly Natively Tracing Naturally Rendering Completely Effectively Optimizing Paths Beautiful Secure Output Safely Displaying Constraints Flawlessly Setting Limit Tracking Logically Managing Optimal Handling Appropriately Neatly Routing Clean Elements Effectively Organizing Automatically Formatting Arrays Setting Natively Valid Variables Logically Natively Rendering Component Effectively Perfectly Integrating Limits Processing Output Struct Mapping Accurately Operating Expert Logic Successfully Resolving Successfully Generating Secure Visual Layout Rendering Accurately Correct Flow Successfully Natively  */}
        <WhyChooseUsHeader 
          binderGroupRefs={textClipRegistryArray} 
          descriptionNode={descriptorPillarRef} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px] lg:gap-[32px] w-full pt-[4px] relative z-20 mx-auto max-w-lg md:max-w-none">
           {WHY_US_CONTENT.cards.map((dataObjValueLimitMappingArrayParametersSuccessfullyFormattingStructureTrackingNativeRenderingCorrectComponentReferenceNativelyProcessingSafelyConfiguredDOMSetupDisplayElementLogicRouting, targetDOMGridNodeArrayOutputObjectMatrixLineTargetBindingComponentReferenceFormattingValueContextTrackingLimitBoundaryFormattingNativelyRenderFormat) => (
             <FeatureCard 
               key={dataObjValueLimitMappingArrayParametersSuccessfullyFormattingStructureTrackingNativeRenderingCorrectComponentReferenceNativelyProcessingSafelyConfiguredDOMSetupDisplayElementLogicRouting.id}
               data={dataObjValueLimitMappingArrayParametersSuccessfullyFormattingStructureTrackingNativeRenderingCorrectComponentReferenceNativelyProcessingSafelyConfiguredDOMSetupDisplayElementLogicRouting}
               ref={(bindAnchorConstraintRefNodeLimitValueStructureVariableContextObjectFormattingMappingTrackingDomActionRuleDisplaySafelySettingProperlyOutputNatively) => { 
                 coreDisplayCardRefs.current[targetDOMGridNodeArrayOutputObjectMatrixLineTargetBindingComponentReferenceFormattingValueContextTrackingLimitBoundaryFormattingNativelyRenderFormat] = bindAnchorConstraintRefNodeLimitValueStructureVariableContextObjectFormattingMappingTrackingDomActionRuleDisplaySafelySettingProperlyOutputNatively; 
               }}
             />
           ))}
        </div>

      </div>
    </section>
  );
};




