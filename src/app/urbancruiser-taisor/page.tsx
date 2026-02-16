import Banner from "../commonbanner/Banner";
import AccessoriesCarousel from "./AccessoriesCarousel";
import ColorShowcase from "./ColorShowcase";
import Connection from "./Connection";


import { connectionSectionData, exteriorAccessoriesData, InteriorAccessoriesData, items, styleSectionData, taisorData, taisorData2, taisorData3, thrillsSectionData } from "./data";
import DownloadAccessoryBrochure from "./DownloadAccessoryBrochure";
import DownloadBrochureSection from "./DownloadBrochureSection";
import EBookHeroSection from "./EBookHeroSection";
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
        description={connectionSectionData.description} />


      <TaisorStyleCarousel
        title="Travel the distance in style and with confidence because you make your way."
        items={taisorData}
      />

      <EngineCarouselSection />
      <TaisorStyleCarousel
        title="Get the freedom to be you and live on your own terms."
        items={taisorData2}
      />
      <ScrollGrowImage />

      <TaisorStyleCarousel
        title="Discover interiors that are in tune with your getaways. The cabin is refreshing and adds a spring to every step that you take forward."
        items={taisorData3}
      />
      <ColorShowcase />
      <DownloadBrochureSection />
      <GallerySection />
      <AccessoriesCarousel
        heading="EXTERIOR ACCESSORIES"
        items={exteriorAccessoriesData}
      />


        <AccessoriesCarousel
        heading="INTERIOR ACCESSORIES"
        items={InteriorAccessoriesData}
      />

      <DownloadAccessoryBrochure />
      <EBookHeroSection/>
    </>

  );
}
