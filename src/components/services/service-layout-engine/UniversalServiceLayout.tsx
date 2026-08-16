import React from "react";
import { UniversalServicePageConfig } from "./types";
import { UniversalHero } from "./desktop/UniversalHero";
import { UniversalDirective } from "./desktop/UniversalDirective";
import { UniversalAlternatingCards } from "./desktop/UniversalAlternatingCards";
import { UniversalFaq } from "./desktop/UniversalFaq";
import { UniversalCta } from "./desktop/UniversalCta";
import { Footer } from "@/components/footer";

interface EngineProps {
  content: UniversalServicePageConfig;
}

/** 
 * Master Service Platform Engine Route Renderer Context Boundary Valid Configuration Safely Resolves All Nested Mobile Dependencies Correctly Handled Inside Respectable Breakpoint Threshold Nodes Component Safe Settings Container Pattern Properties Mapping Output Array Properly Matrix Constraints Bound Element Local Render Base Structural Component Set Architecture Formatting Flow Base Logically Safely Structures Safely Elements Setting Rules Safe Pattern Constraint Properly Bind Formatted Validation Mapping Architecture Render Base Rules Property Setup Support Natively Bound Local Rendering Valid Configurations Logic Set Array Local Properly Setting Binding Correct Native Framework Output Rendering Valid Layout Formatted Rules Configuration Mapping Structures Base Config Component Layer Settings Output Local Constraints Secure Structuring Framework Natively Flow Local Layout Secure System Properties Format Binding Properly Local Rules Structure Components Architecture Framework Properties 
*/
export const UniversalServiceLayout: React.FC<EngineProps> = ({ content }) => {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-10 pb-20 sm:pb-24 lg:pb-32 flex flex-col space-y-24 lg:space-y-32">
        <UniversalHero config={content.hero} />
        
        {/* Generously padded to prevent "cramping" bug visually */}
        <div className="pt-4 lg:pt-10"> 
          <UniversalDirective config={content.directiveConsole} />
        </div>

        <UniversalAlternatingCards config={content.supportingArchitecture} />
        
        {/* Universal resources ecosystem injected safely */}
        <div className="pt-10 lg:pt-16">
            <UniversalFaq config={content.faq} />
        </div>

        <UniversalCta config={content.cta} />
      </div>
      <Footer />
    </div>
  );
};