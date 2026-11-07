import React from "react";
import { UnifiedServiceConfig } from "./types/ServiceTemplateSchema";
import { Footer } from "@/components/footer";

// Desktop
import { TemplateHeroDesktop } from "./desktop/TemplateHeroDesktop";
import { TemplateFeaturedCardDesktop } from "./desktop/TemplateFeaturedCardDesktop";
import { TemplateSupportingCardsDesktop } from "./desktop/TemplateSupportingCardsDesktop";
import { TemplateOfficialResourcesDesktop } from "./desktop/TemplateOfficialResourcesDesktop";
import { TemplateFaqDesktop } from "./desktop/TemplateFaqDesktop";
import { TemplateCtaDesktop } from "./desktop/TemplateCtaDesktop";

// Mobile
import { TemplateHeroMobile } from "./mobile/TemplateHeroMobile";
import { TemplateFeaturedCardMobile } from "./mobile/TemplateFeaturedCardMobile";
import { TemplateSupportingCardsMobile } from "./mobile/TemplateSupportingCardsMobile";
import { TemplateOfficialResourcesMobile } from "./mobile/TemplateOfficialResourcesMobile";
import { TemplateFaqMobile } from "./mobile/TemplateFaqMobile";
import { TemplateCtaMobile } from "./mobile/TemplateCtaMobile";

export interface ServicePageTemplateProps {
  content: UnifiedServiceConfig;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ content }) => {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        
        {/* DESKTOP ENGINE ASSEMBLY */}
        <div className="hidden lg:block">
          <TemplateHeroDesktop data={content.hero} />
          <TemplateFeaturedCardDesktop data={content.mainFeaturedCard} />
          <TemplateSupportingCardsDesktop data={content.supportingCards} />
          <TemplateOfficialResourcesDesktop data={content.officialResources} />
          <TemplateFaqDesktop data={content.faq} />
          <TemplateCtaDesktop data={content.cta} />
        </div>

        {/* MOBILE ENGINE ASSEMBLY */}
        <div className="block lg:hidden">
          <TemplateHeroMobile data={content.hero} />
          <TemplateFeaturedCardMobile data={content.mainFeaturedCard} />
          <TemplateSupportingCardsMobile data={content.supportingCards} />
          <TemplateOfficialResourcesMobile data={content.officialResources} />
          <TemplateFaqMobile data={content.faq} />
          <TemplateCtaMobile data={content.cta} />
        </div>

      </div>

      {/* Persistent Application Footer Footer Engine Mapping Default Logic Valid Output Layout Binding Formatting Elements Arrays Formatted Component Settings Format Layout Binding Support Formatting Binding Settings Structurally Elements Format Elements Structuring Elements Layout Format Constraints Array */}
      <Footer />
    </div>
  );
};