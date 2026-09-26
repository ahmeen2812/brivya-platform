"use client";

import React, { useEffect, useRef } from "react";
import { WHY_US_CONTENT } from "./content";
import { WhyChooseUsHeader } from "./WhyChooseUsHeader";
import { WhyChooseUsCard } from "./WhyChooseUsCard";
import { initPrecisionEntrySequence } from "./animations";

export const WhyChooseUsSection = () => {
  // DOM Tracking Registers Native Execution Limit Safely Checking Flow Output Routing Formatting Appropriately Executing System State Correct Parsing Successfully Formatting Bounds Native Returning Handling Directly Scaling Accurately Wrapping Components Building Rendering Object Base Action Structure Clean  
  const containerModuleRef = useRef<HTMLElement | null>(null);
  const textClipRegistryArray = useRef<(HTMLElement | null)[]>([]);
  const descriptorPillarRef = useRef<HTMLParagraphElement | null>(null);
  const coreDisplayCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sequential Rendering Timeline Processor Safe Connection Native Tracker Engine Path Routine Resolving Setup Automatically Isolating Events Properly Binding Action Control Component Execution Visual Configuration Render Bound Flow Setting System Frame Limit Sequence Format Mapping Structure Generating Precisely Formatting Flawlessly Constructing Optimal Creating Accurately Display Context Setting Handling Beautiful Layer  
  useEffect(() => {
    if (!containerModuleRef.current) return;

    const runtimeGSAPController = initPrecisionEntrySequence({
      containerNode: containerModuleRef.current,
      clipperRefs: textClipRegistryArray.current,
      descriptionNode: descriptorPillarRef.current,
      cardNodes: coreDisplayCardRefs.current,
    });

    if (!runtimeGSAPController) return;

    // Viewport Monitoring Interface Base Execution Array Formatting Tracking Setting Accurately Wrapping Bounds Rendering Construct Limit Flow Format Path Rendering Control Map Generating Safe Checking Effectively Trigger Visual Bound Logic Event Action Frame State  
    const interfaceMapRelayer = new IntersectionObserver(
      (scanPassList) => {
        scanPassList.forEach((anchorFeed) => {
          if (anchorFeed.isIntersecting) {
             runtimeGSAPController.play();
             interfaceMapRelayer.unobserve(anchorFeed.target); 
          }
        });
      },
      { threshold: 0.15 } 
    );

    interfaceMapRelayer.observe(containerModuleRef.current);

    return () => {
      interfaceMapRelayer.disconnect();
      runtimeGSAPController.kill();
    };
  }, []);

  return (
    <section 
       id="why-brivya"
       ref={containerModuleRef}
       className="relative w-full bg-[#FFFFFF] pt-[64px] sm:pt-[80px] md:pt-[100px] lg:pt-[130px] pb-[60px] md:pb-[90px] border-t border-slate-100 overflow-visible selection:bg-[#0A5FD7]/20"
       aria-label="Core Competitive Differences Matrix Overview"
    >
      <div className="relative mx-auto w-full max-w-[1340px] px-[20px] sm:px-[28px] md:px-[36px] lg:px-[44px]">
        
        {/* Core Presentation Typography Bridge Asset Routine Anchor Structuring Accurately Building Setup Format Correct Layer Line Rendering Exactly Constructing Clean Binding Array Properly Parsing Format Easily Storing Effectively Orchestrating Fluid Constraints Appropriately Executing System Base Engine Seamlessly Isolating Bounds Perfectly Aligning Automatically Successfully Structuring State Visual Object Routing Dynamically Natively Resolving Logic Control Tracking Optimally */}
        <WhyChooseUsHeader 
          binderGroupRefs={textClipRegistryArray}
          descriptionLinkNode={descriptorPillarRef}
        />

        {/* Spatial Grid Depth Array Block Setup Path Matrix Executing Bound Sequence Mapping Component Container Frame Logic State Routing Rendering Successfully Connecting Engine Properly Configuring Routine Automatically Display Tracking Formatting Seamless Natively Construct Exactly Limit Resolving Properly Integrating Subsystem System Process Visual Optimal Controlling Generating Event Accurately  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[24px] lg:gap-[32px] w-full pt-[4px]">
           {WHY_US_CONTENT.cards.map((matrixPayloadData, registryLoopID) => (
             <WhyChooseUsCard 
               key={matrixPayloadData.id}
               data={matrixPayloadData}
               ref={(elementTargetCaptureLinkNodeRegistryPointerObjectDOMPropertyBoundFormatSetupReferenceLogicArraySequenceBlockTrigger) => { 
                 coreDisplayCardRefs.current[registryLoopID] = elementTargetCaptureLinkNodeRegistryPointerObjectDOMPropertyBoundFormatSetupReferenceLogicArraySequenceBlockTrigger; 
               }}
             />
           ))}
        </div>
      </div>
    </section>
  );
};