import { Inter } from "next/font/google";
import CarCarousel from "./CarCarousel";
import CarConfigurator from "./CarConfigurator";
import { Barreddata, Builtlikeatank, carSliderData, colordata, Dimensionsdata, Fingertipsdata, grInteriorData, legacyData, Slides2, Slides3, Slides4, specificationsData, suspensiondata, toyotaCarouselSlides, variants } from "./data";
import ToyotaStyleCarousel from "./FeatureCarousel";
import FeatureCarousel from "./FeatureCarousel";
import ToyotaGRInteriorSection from "./GRSportFeatureSection";
import GRSportFeatureSection from "./GRSportFeatureSection";
import HeroBanner from "./HeroBanner";
import HeroOverlapSection from "./HeroOverlapSection";
import ToyotaHeroStorySection from "./HeroStorySection";
import LegacySection from "./LegacySection";
import ModelHighlightSection from "./ModelHighlightSection";
import SafetyHeroSection from "./SafetyHeroSection";
import SafetyTechSection from "./SafetyTechSection";
import ToyotaHeroStorySection2 from "./ToyotaHeroStorySection2";
import SpecificationsPage from "./SpecificationsPage";
import GallerySection from "./GallerySection";




export default function Page() {
    return (
        <>

            <HeroBanner
                desktopImage="/lc300/lc300-hero-section-image.webp"
                mobileImage="/lc300/lc300-hero-section-image-mobile.webp"
                title="Land Cruiser 300"
                buttonText="Download Brochure"
                buttonLink="https://www.toyotabharat.com/documents/brochures/e-brochure-lc-300.pdf"
                desktopHeight="870px"
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





            <ToyotaStyleCarousel
                slides={Slides3}
                autoPlayDelay={4000}
            />


            <LegacySection
                title={suspensiondata.title}
                paragraphs={suspensiondata.paragraphs}
            />

            <ToyotaStyleCarousel
                slides={Slides4}
                autoPlayDelay={4000}
            />

            <SafetyHeroSection
                desktopImage="/lc300/lc300-airbags-desktop-1920x750.webp"
                mobileImage="/lc300/lc300-airbags-mobile-1200x750.webp"
                title="Citadel Of Safety"
                description="While the Land Cruiser is a beast of a performer, it is equally high on safety. That’s why you can be sure that you won’t just traverse the four corners of the world—you’ll return in one piece. With SRS airbags, the Land Cruiser becomes a fortress of safety you can rely on, no matter where you are."
            />
            <SafetyTechSection />


            <LegacySection
                title={Dimensionsdata.title}
                paragraphs={Dimensionsdata.paragraphs}
            />

            <ModelHighlightSection
                title="ZX"
                desktopImage="/lc300/lc300-zx-spec-1600x500.webp"
                mobileImage="/lc300/lc300-zx-spec-1080x1600.webp"

            />

            <ModelHighlightSection
                title="GR Sports"
                desktopImage="/lc300/lc300-grs-spec-1600x500.webp"
                mobileImage="/lc300/lc300-grs-spec-1080x1600.webp"

            />

            <SpecificationsPage
        variants={variants}
        specifications={specificationsData}
        
      />
      <GallerySection/>

        </>

    );
}







