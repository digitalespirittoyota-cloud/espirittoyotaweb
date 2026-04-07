import { Metadata } from "next";
import { getBaseMetadata } from "../utils/seo";
import Banner from "../commonbanner/Banner";
import EbookSection from "../legender/EbookSection";
import FeatureImageSection from "../legender/FeatureImageSection";
import GallerySection from "../legender/GallerySection";
import PowerToCommand from "../legender/PowerToCommand";
import SlideCarSection from "../legender/SlideCarSection";
import StyledToInspireCarousel from "../legender/StyledToInspireCarousel";
import VideoShowcase from "../legender/VideoShowcase";
import BrochureSection from "./BrochureSection";
import { allnewfortuner, conquredata, leaddata, overcomedata } from "./data";
import TintedSection from "./TintedSection";

export const metadata: Metadata = getBaseMetadata(
  "Toyota Fortuner Price, Features & Specifications | Espirit Toyota",
  "The Toyota Fortuner is built to lead. Explore its performance, 4x4 capabilities, safety features, and price at Espirit Toyota Bhubaneswar. Book your test drive now.",
  "/fortuner",
  ["Toyota Fortuner", "Fortuner Price", "Fortuner 4x4", "Fortuner SUV Bhubaneswar", "Toyota Dealer Odisha"],
  "/fortuner/le-fortuner-banner-1920x807 (1).jpg"
);


export default function Page() {
    return (
        <>
            <Banner
                desktopImg="/fortuner/le-fortuner-banner-1920x807 (1).jpg"
                mobileImg=""
                height="85vh"
            />

            <Banner
                desktopImg="/fortuner/vs-hp-fortuner-banner-1920x807 (1).jpg"
                mobileImg=""
                height="90vh"
                link="https://www.toyotabharat.com/virtual-showroom/fortuner.html"
            />
            <VideoShowcase />

            <StyledToInspireCarousel
                title="ALL NEW FORTUNER GR-S"
                description=""
                slides={allnewfortuner} />

            <BrochureSection
                label="DOWNLOAD BROCHURE"
                fileUrl="https://www.toyotabharat.com/documents/brochures/fortuner-mmc/gr_mobile-brochure_360x640pix.pdf"
            />



            <PowerToCommand
                bgImage="/fortuner/muscle-to-lead-bg (1).jpg"
                carImage="/fortuner/power-to-overpower-car (2).png"
                title={`POWER TO\nOVERPOWER`}
                middleImage="/fortuner/power-to-overpower-engine (1).jpg"
                description="The new Fortuner boasts of a power-packed 6-speed Diesel and Petrol AT as well as MT engine capable of turning mountains into molehills. With so much raw, unbridled power at your beck and call, the new Fortuner makes blazing new trails and conquering uncharted territory as easy as a walk in the park."
            />

            <SlideCarSection
                bgImage="/fortuner/musclebg.jpg"
                carImage="/fortuner/muscle-to-lead-car (1).png"
                title=""
                description=""
            />


            <StyledToInspireCarousel
                title="MUSCLE TO LEAD"
                description="The new Fortuner is more than a SUV. It’s a force of nature. Be it the chrome embellished
front grille, the rugged alloy wheels or its 4x4 capabilities, every bit is built to lead."
                slides={leaddata} />



            <StyledToInspireCarousel
                title="APPOINTED TO CONQUER"
                description="The new Fortuner is crafted with finesse. So no matter how tough the path, you
are always connected and cocooned in luxury and safety."
                slides={conquredata} />

            <FeatureImageSection
                heading="CONNECTED TO CONTROL"
                description="The new Fortuner boasts of advanced connected features for you to stay in control of your car and drive.
With the car secure at your fingertips, you can focus on conquering any kind of terrain that lies ahead of you."
                image="/legender/fortuner-iconnect-banner.jpg"
            />



            <StyledToInspireCarousel
                title="CONFIDENCE TO OVERCOME"
                description="The new Fortuner keeps you safe no matter how rugged the road ahead looks. Embedded with
safety technology like Active Traction Control and Antilock Braking System, it gives
you the confidence to soar over any obstacle and dominate.."
                slides={overcomedata} />
            <GallerySection
                heading="GALLERY"
                images={[
                    { src: "/fortuner/fortuner-gallery01 (1).jpg" },
                    { src: "/fortuner/fortuner-gallery02 (1).jpg" },
                    { src: "/fortuner/fortuner-gallery03 (1).jpg" },
                ]}
            />
            <TintedSection />


             <BrochureSection
                label="DOWNLOAD ACCESSORIES BROCHURE"
                fileUrl="https://www.toyotabharat.com/documents/brochures/fortuner-mmc/fortuner-accessory-brochure.pdf"
            />


             <EbookSection
                            bgImage="/fortuner/ebook-img-fortuner (1).jpg"
                            carImage=""
                            ebookText="ebook Now"
                            ebookLink="/ebook"
                        />
        </>

    );
}
