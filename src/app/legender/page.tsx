import { Metadata } from "next";
import { getBaseMetadata } from "../utils/seo";
import Banner from "../commonbanner/Banner";
import { styledSlides, styledSlides2, styledSlides3 } from "./data";
import EbookSection from "./EbookSection";
import FeatureImageSection from "./FeatureImageSection";
import GallerySection from "./GallerySection";
import PowerToCommand from "./PowerToCommand";
import SlideCarSection from "./SlideCarSection";
import StyledToInspireCarousel from "./StyledToInspireCarousel";
import VideoShowcase from "./VideoShowcase";

export const metadata: Metadata = getBaseMetadata(
  "Toyota Fortuner Legender Price, Interior & Style | Espirit Toyota",
  "Styled to inspire awe. Explore the Toyota Fortuner Legender at Espirit Toyota Bhubaneswar. Check its premium interior, performance features, and book a test drive today.",
  "/legender",
  ["Toyota Legender", "Fortuner Legender Price", "Legender SUV", "Legender Interior", "Premium SUV Bhubaneswar"],
  "/legender/legender-awesome-ban1.webp"
);

export default function Page() {
    return (
        <>
            <Banner
                desktopImg="/legender/legender-awesome-ban1.webp"
                mobileImg="/legender/legender-awesome-ban1.webp"
                height="110vh"
            />

            <Banner
                desktopImg="/legender/vs-hp-legender-banner2.jpg"
                mobileImg="/legender/vs-hp-legender-banner2mobile.jpg"
                height="90vh"
                link="https://www.toyotabharat.com/virtual-showroom/legender.html"
            />
            <VideoShowcase />
            <PowerToCommand
                bgImage="/legender/power-to-command-bg.jpg"
                carImage="/legender/power-to-command-car.png"
                title={`Power To\nCommand`}
                middleImage="/legender/power-to-command-img02.jpg"
                description="The new Legender houses a refined 6-speed Diesel AT engine. The power on tap complements the cutting-edge design of the Legender seamlessly. Take command of the incredible power and make a style statement as you breeze through the urban jungle."
            />
            <SlideCarSection
                bgImage="/legender/style-to-inspire-bg.jpg"
                carImage="/legender/style-to-inspire-car.png"
                title=""
                description=""
            />
            <StyledToInspireCarousel
                title="STYLED TO INSPIRE"
                description="The new Legender is styled to inspire awe. From the front grille to the rear garnish, it’s
designed to let you power your way through the cityscapes in style."
                slides={styledSlides} />



            <StyledToInspireCarousel
                title="CURATED TO LEAD"
                description="The new Legender is meticulously designed to the minutest details. Reason why, it exudes style
and luxury that appeals to your discerning lifestyle."
                slides={styledSlides2} />


            <FeatureImageSection
                heading="EMBELLISHED TO CONNECT"
                description="The new Legender is decked with state-of-the-art connectivity features. Now you can securely manoeuvre
through the urban jungle, anywhere at any time knowing that your car is secure."
                image="/legender/fortuner-iconnect-banner.jpg"
            />

            <StyledToInspireCarousel
                title="DESIGNED TO SECURE"
                description="The new Legender keeps you safe from the hustle and bustle of the urban jungle. With 7 SRS Airbags, Vehicle
Stability Control and the like, it safeguards you from eventualities in formidable style."
                slides={styledSlides3} />



            <GallerySection
                heading="GALLERY"
                images={[
                    { src: "/legender/gallery01 (1).jpg" },
                    { src: "/legender/gallery02 (1).jpg" },
                    { src: "/legender/gallery03 (1).jpg" },
                ]}
            />

            <EbookSection
                bgImage="/legender/ebook-img-bg.jpg"
                carImage="/legender/ebook-img.png"
                ebookText="ebook Now"
                ebookLink="/ebook"
            />
            <Banner
                desktopImg="/legender/apply-for-loan-banner-legender-1920x807 (1).jpg"
                mobileImg="/legender/apply-for-loan-banner-legender-1920x807 (1).jpg"
                height="90vh"
            />

        </>

    );
}
