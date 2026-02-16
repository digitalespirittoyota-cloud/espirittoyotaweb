import Banner from "../commonbanner/Banner";
import ChiefEngineerSection from "./ChiefEngineerSection";
import EngineerMessageSection from "./EngineerMessageSection";
import FeatureCarousel from "./FeatureCarousel";
import FeatureGallery from "./FeatureGallery";
import FeatureSection from "./FeatureSection";
import FeatureSectionGallery from "./FeatureSectionGallery";
import HiluxEbookSection from "./HiluxEbookSection";
import HiluxLegacyMediaSection from "./HiluxLegacyMediaSection";
import HiluxLegacySection from "./HiluxLegacySection";
import InteriorSafetySection from "./InteriorSafetySection";
import PowerfulPerformance from "./PowerfulPerformance";
import TechnicalSpecifications from "./TechnicalSpecifications";
import ToyotaServiceSection from "./ToyotaServiceSection";
import VirtualShowroomImage from "./VirtualShowroomSection";



export default function Page() {
    return (
        <>
            <Banner
                desktopImg="/hilux/hilux-black (1).webp"
                mobileImg="/hilux/hilux-black (1).webp"
                height="90vh"
            />
            <VirtualShowroomImage />
            <PowerfulPerformance
                leftTitleLine1="POWERFUL"
                leftTitleLine2="PERFORMANCE"
                centerTopText={<>MAKE EVERY <br /> ADVENTURE</>}
                centerHighlightText="Awesome"
                description="Be it city roads or mountain trails, the incredibly powerful and capable Toyota Hilux is here to take it all in its stride - A 4X4 like no other."
            />

            <FeatureSection />
            <ChiefEngineerSection />



            <PowerfulPerformance
                leftTitleLine1="EXTERIOR FEATURES"
                leftTitleLine2=""
                centerTopText={<>
                    BOLD LOOKS THAT  <br /> MAKE YOU FEEL
                </>}
                centerHighlightText="Awesome"
                description="Built to be powerful. Designed for style.
Live a fuller life with the Toyota Hilux."
            />

            <FeatureGallery/>

            <EngineerMessageSection/>

            <InteriorSafetySection/>
            <FeatureCarousel/>
            <HiluxLegacySection/>
            <HiluxLegacyMediaSection/>
        <ToyotaServiceSection/>
       
        <FeatureSectionGallery/>
         <TechnicalSpecifications/>
         <HiluxEbookSection />
        
        </>

    );
}
