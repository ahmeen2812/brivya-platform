import React from "react";
import { OfficeTemplateConfig } from "./types/OfficeTemplateSchema";
import { Footer } from "@/components/footer";

// Desktop Presentation Components
import { OfficeHeroDesktop } from "./desktop/OfficeHeroDesktop";
import { OfficeVerticalSplitDesktop } from "./desktop/OfficeVerticalSplitDesktop";
import { OfficeFullWidthBannerDesktop } from "./desktop/OfficeFullWidthBannerDesktop";
import { OfficeFourPartMosaicDesktop } from "./desktop/OfficeFourPartMosaicDesktop";
import { OfficePanoramicVisualDesktop } from "./desktop/OfficePanoramicVisualDesktop";
import { OfficeAdditionalCapabilitiesDesktop } from "./desktop/OfficeAdditionalCapabilitiesDesktop";
import { OfficeResourcesDesktop } from "./desktop/OfficeResourcesDesktop";
import { OfficeFaqDesktop } from "./desktop/OfficeFaqDesktop";
import { OfficeCtaDesktop } from "./desktop/OfficeCtaDesktop";

// Mobile Presentation Components
import { OfficeHeroMobile } from "./mobile/OfficeHeroMobile";
import { OfficeVerticalSplitMobile } from "./mobile/OfficeVerticalSplitMobile";
import { OfficeFullWidthBannerMobile } from "./mobile/OfficeFullWidthBannerMobile";
import { OfficeFourPartMosaicMobile } from "./mobile/OfficeFourPartMosaicMobile";
import { OfficePanoramicVisualMobile } from "./mobile/OfficePanoramicVisualMobile";
import { OfficeAdditionalCapabilitiesMobile } from "./mobile/OfficeAdditionalCapabilitiesMobile";
import { OfficeResourcesMobile } from "./mobile/OfficeResourcesMobile";
import { OfficeFaqMobile } from "./mobile/OfficeFaqMobile";
import { OfficeCtaMobile } from "./mobile/OfficeCtaMobile";

export interface OfficeServicePageTemplateProps {
  content: OfficeTemplateConfig;
}

export const OfficeServicePageTemplate: React.FC<OfficeServicePageTemplateProps> = ({ content }) => {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        
        {/* DESKTOP ENGINE ASSEMBLY (hidden on mobile) */}
        <div className="hidden lg:block">
          <OfficeHeroDesktop hero={content.hero} directive={content.heroDirective} />
          <OfficeVerticalSplitDesktop data={content.verticalSplitSection} />
          <OfficeFullWidthBannerDesktop data={content.fullWidthBanner} />
          <OfficeFourPartMosaicDesktop data={content.fourPartMosaic} />
          <OfficePanoramicVisualDesktop data={content.panoramicShowcase} />
          <OfficeAdditionalCapabilitiesDesktop items={content.additionalCapabilities} />
          <OfficeResourcesDesktop data={content.officialResources} />
          <OfficeFaqDesktop data={content.faq} />
          <OfficeCtaDesktop data={content.cta} />
        </div>

        {/* MOBILE ENGINE ASSEMBLY (block on mobile) */}
        <div className="block lg:hidden">
          <OfficeHeroMobile hero={content.hero} directive={content.heroDirective} />
          <OfficeVerticalSplitMobile data={content.verticalSplitSection} />
          <OfficeFullWidthBannerMobile data={content.fullWidthBanner} />
          <OfficeFourPartMosaicMobile data={content.fourPartMosaic} />
          <OfficePanoramicVisualMobile data={content.panoramicShowcase} />
          <OfficeAdditionalCapabilitiesMobile items={content.additionalCapabilities} />
          <OfficeResourcesMobile data={content.officialResources} />
          <OfficeFaqMobile data={content.faq} />
          <OfficeCtaMobile data={content.cta} />
        </div>

      </div>

      <Footer />
    </div>
  );
};