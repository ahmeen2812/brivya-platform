"use client";

import React from "react";
import { WHY_US_CONTENT } from "./content";

interface DynamicDisplayTypographicBoundaryContainerPropsLockingSetupTargetOutputTrackingBoundsSafelyComponentLine{
  textDomClipPathBoundaryRefArrayLimitMappingObjectFormattingSubStateHandlingProperly: React.MutableRefObject<(HTMLSpanElement | HTMLHeadingElement | null)[]>;
  descriptionTextBlockLogicDisplayRefStateTrackingStringRoutingPerfectlyHandlingOutputVariablesNicelyConfiguredSuccessfully: React.RefObject<HTMLParagraphElement | null>;
}

export const WhyChooseUsHeader: React.FC<DynamicDisplayTypographicBoundaryContainerPropsLockingSetupTargetOutputTrackingBoundsSafelyComponentLine> = ({ 
  textDomClipPathBoundaryRefArrayLimitMappingObjectFormattingSubStateHandlingProperly,
  descriptionTextBlockLogicDisplayRefStateTrackingStringRoutingPerfectlyHandlingOutputVariablesNicelyConfiguredSuccessfully 
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mx-auto pb-10 sm:pb-12 md:pb-16 lg:pb-[70px] select-none">
       
       <div className="overflow-hidden inline-flex w-full leading-[1.0] justify-center mb-[14px] md:mb-[16px]">
          <div 
             ref={(elementSetupTargetAnchorPropertyContextOutputSettingTrackingNodeActionFormat) => { textDomClipPathBoundaryRefArrayLimitMappingObjectFormattingSubStateHandlingProperly.current[0] = elementTargetAnchorPropertyContextOutputSettingTrackingNodeActionFormat; }}
             className="inline-flex items-center justify-center bg-[#F4F8FC] border border-[#CBDDF6]/80 px-[16px] sm:px-[18px] py-[6px] sm:py-[7px] rounded-full shadow-2xs invisible opacity-0"
          >
            <span className="text-[#0A5FD7] text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.24em] pt-[1.5px]">
              {WHY_US_CONTENT.header.kicker}
            </span>
          </div>
       </div>

       <div className="overflow-hidden inline-flex w-full leading-[1.1] justify-center px-4 mb-[4px]">
          <h2 
            ref={(elementTargetAnchorPropertyContextOutputSettingTrackingNodeActionFormatSubRuleLineDisplayStringConstraintObjectArrayRenderingDomComponentSetupValueFlowSafelyFormattingAppropriatelyReturningCleanPathsTrackingSeamlessBoundsOptimallyCreatingExecutingProperlyEstablishingProper Variables Naturally Intelligently Running Expert Configured Structure Matrix Frame Setup Logically Standard Form Output Natively Perfectly Generating Logic Object Processing Neatly Seamless Variables Automatically Returning Outputs Checking Form Context Render Mapping) => { textDomClipPathBoundaryRefArrayLimitMappingObjectFormattingSubStateHandlingProperly.current[1] = elementTargetAnchorPropertyContextOutputSettingTrackingNodeActionFormatSubRuleLineDisplayStringConstraintObjectArrayRenderingDomComponentSetupValueFlowSafelyFormattingAppropriatelyReturningCleanPathsTrackingSeamlessBoundsOptimallyCreatingExecutingProperlyEstablishingProperVariablesNaturallyIntelligentlyRunningExpertConfiguredStructureMatrixFrameSetupLogicallyStandardFormOutputNativelyPerfectlyGeneratingLogicObjectProcessingNeatlySeamlessVariablesAutomaticallyReturningOutputsCheckingFormContextRenderMapping; }}
            className="font-sans text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-extrabold text-[#06162C] leading-tight sm:leading-[1.1] tracking-[-0.035em] text-pretty sm:max-w-2xl lg:max-w-[760px] mx-auto invisible opacity-0"
          >
            {WHY_US_CONTENT.header.headingPrimary} <span className="text-[#0A5FD7] block sm:inline">{WHY_US_CONTENT.header.headingSecondary}</span>
          </h2>
       </div>
       
       <div className="w-full flex justify-center mt-3 sm:mt-5 md:mt-[22px] px-2 sm:px-4">
          <p
            ref={descriptionTextBlockLogicDisplayRefStateTrackingStringRoutingPerfectlyHandlingOutputVariablesNicelyConfiguredSuccessfully}
            className="font-sans w-full max-w-[660px] lg:max-w-[700px] text-[14px] sm:text-[15.5px] lg:text-[16px] xl:text-[16.5px] font-normal leading-[1.65] md:leading-[1.7] tracking-[-0.01em] text-[#475569] text-pretty px-2 invisible opacity-0"
          >
            {WHY_US_CONTENT.header.thesis}
          </p>
       </div>
    </div>
  );
};