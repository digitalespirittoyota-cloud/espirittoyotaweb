import Banner from "../commonbanner/Banner";
import Connection from "./Connection";


import { connectionSectionData, styleSectionData, thrillsSectionData } from "./data";
import StyleSection from "./StyleSection";
import StyleSectionReverse from "./StyleSectionReverse";





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
        </>

    );
}
