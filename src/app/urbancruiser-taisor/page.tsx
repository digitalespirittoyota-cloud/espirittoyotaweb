import Banner from "../commonbanner/Banner";
import AccessoriesCarousel from "./AccessoriesCarousel";
import ColorShowcase from "./ColorShowcase";
import Connection from "./Connection";


import { connectionSectionData, exteriorAccessoriesData, items, styleSectionData, taisorData, thrillsSectionData } from "./data";
import DownloadAccessoryBrochure from "./DownloadAccessoryBrochure";
import DownloadBrochureSection from "./DownloadBrochureSection";
import EngineCarouselSection from "./EngineCarouselSection";
import GallerySection from "./GallerySection";
import ScrollGrowImage from "./ScrollGrowImage";
import StyleSection from "./StyleSection";
import StyleSectionReverse from "./StyleSectionReverse";
import TaisorStyleCarousel from "./TaisorStyleCarousel";





export default function Page() {
    return (
        <>
            <Banner
                desktopImg="/urbancruiser-taisor/urbancruiser-taisor-banner.webp"
                mobileImg="/urbancruiser-taisor/urbancruiser-taisor-banner.webp"
                height="90vh"
            />
          <StyleSection
      leftImage={styleSectionData.leftImage}
      rightTopImage={styleSectionData.rightTopImage}
      rightBottomImage={styleSectionData.rightBottomImage}
      description={styleSectionData.description}
    />


       <StyleSectionReverse
      leftImage={thrillsSectionData.leftImage}
      rightTopImage={thrillsSectionData.rightTopImage}
      rightBottomImage={thrillsSectionData.rightBottomImage}
      description={thrillsSectionData.description}
    />
        <Connection leftImage={connectionSectionData.leftImage}
      rightTopImage={connectionSectionData.rightTopImage}
      rightBottomImage={connectionSectionData.rightBottomImage}
      description={connectionSectionData.description}/>


<TaisorStyleCarousel
        title="Travel the distance in style and with confidence because you make your way."
        items={taisorData}
      />

 <EngineCarouselSection  />
 <ScrollGrowImage/>
 <ColorShowcase/>
 <DownloadBrochureSection/>
 <GallerySection/>
 <AccessoriesCarousel
        heading="EXTERIOR ACCESSORIES"
        items={exteriorAccessoriesData}
      />

<DownloadAccessoryBrochure/>
        </>

    );
}
