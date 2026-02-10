import CarCarousel from "./CarCarousel";
import CarConfigurator from "./CarConfigurator";
import { Barreddata, Builtlikeatank, carSliderData, colordata, Fingertipsdata, grInteriorData, legacyData, Slides2, toyotaCarouselSlides } from "./data";
import ToyotaStyleCarousel from "./FeatureCarousel";
import FeatureCarousel from "./FeatureCarousel";
import ToyotaGRInteriorSection from "./GRSportFeatureSection";
import GRSportFeatureSection from "./GRSportFeatureSection";
import HeroBanner from "./HeroBanner";
import HeroOverlapSection from "./HeroOverlapSection";
import ToyotaHeroStorySection from "./HeroStorySection";
import LegacySection from "./LegacySection";
import ToyotaHeroStorySection2 from "./ToyotaHeroStorySection2";




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

            <ToyotaStyleCarousel
                slides={toyotaCarouselSlides}
                autoPlayDelay={4000}
            />



            <ToyotaHeroStorySection2
                mobileImage="/lc300/lc300-banner-02-mobile-600x750 (1).webp"
                image="/lc300/lc300-banner-02-desktop-1920x750 (1).webp"
                title="Control Command Conquer"
                description="When you have been there and done that, and there’s nothing more to prove. When you are among the who’s who of the world. When your discerning tastes speak louder than words. You need a masterpiece redefined—one with hypnotizing elegance, effortlessly striding through the toughest terrains"
            />



            <LegacySection
                title={Fingertipsdata.title}
                paragraphs={Fingertipsdata.paragraphs}
            />



            <ToyotaStyleCarousel
                slides={Slides2}
                autoPlayDelay={4000}
            />



            <LegacySection
                title={colordata.title}
                paragraphs={colordata.paragraphs}
            />
            <CarConfigurator />

            <HeroOverlapSection />

            {grInteriorData.map((item, index) => (
                <ToyotaGRInteriorSection
                    key={index}
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    imagePosition={item.imagePosition}
                    sections={item.sections}
                />
            ))}



              <ToyotaHeroStorySection2
                mobileImage="/lc300/lc300-banner-03-mobile-600x750.webp"
                image="/lc300/lc300-banner-03-desktop-1920x750.webp"
                title="
            Phenom                           
            Unleashed
          "
                description="When you have been there and done that, and there’s nothing more to prove. When you are among the who’s who of the world. When your discerning tastes speak louder than words. You need a masterpiece redefined—one with hypnotizing elegance, effortlessly striding through the toughest terrains"
            />


             <LegacySection
                title={Barreddata.title}
                paragraphs={Barreddata.paragraphs}
            />
        </>

    );
}
