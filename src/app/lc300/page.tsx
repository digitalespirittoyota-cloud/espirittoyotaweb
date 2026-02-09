import CarCarousel from "./CarCarousel";
import { Builtlikeatank, carSliderData, legacyData } from "./data";
import HeroBanner from "./HeroBanner";
import ToyotaHeroStorySection from "./HeroStorySection";
import LegacySection from "./LegacySection";




export default function Page() {
    return (
        <>

            <HeroBanner
                desktopImage="/lc300/lc300-hero-section-image.webp"
                mobileImage="/lc300/lc300-hero-section-image-mobile.webp"
                title="Land Cruiser 300"
                buttonText="Download Brochure"
                buttonLink="/brochure"

                desktopHeight="820px"
            />
            <LegacySection
                title={legacyData.title}
                paragraphs={legacyData.paragraphs}
            />
            <CarCarousel slides={carSliderData} />
            <ToyotaHeroStorySection
                mobileImage="/lc300/lc300-banner-01-mobile-second.webp"
                image="/lc300/lc300-banner-01-desktop-second.webp"
                title="Kingdom On Wheels"
                description="When you have been there and done that, and there’s nothing more to prove. When you are among the who’s who of the world. When your discerning tastes speak louder than words. You need a masterpiece redefined—one with hypnotizing elegance, effortlessly conquering even the toughest terrains."
            />


              <LegacySection
                title={Builtlikeatank.title}
                paragraphs={Builtlikeatank.paragraphs}
            />

        </>

    );
}
