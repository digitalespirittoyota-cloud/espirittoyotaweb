import Banner from "../commonbanner/Banner";
import CarColorShowcase from "./CarColorShowcase";
import { engineeringdata, galleryData, luxuryData, safetydata, stylingdata } from "./data";
import LuxurySection from "./LuxurySection";
import TopHeadingBgSection from "./TopHeadingBgSection";
import GallerySection2 from "./GallerySection2";


export default function Page() {
    return (
        <>
            <Banner
                desktopImg="/vellfire/loard-of-realms-vellfire-1920x807.jpg"
                mobileImg="/vellfire/loard-of-realms-vellfire-1920x807.jpg"
                height="90vh"
            />
            <Banner
                desktopImg="/vellfire/vellfire-new-virtual-showroom-1920x807 (1).jpg"
                mobileImg="/vellfire/vellfire-new-virtual-showroom-1920x807 (1).jpg"
                height="90vh"
                link="https://www.toyotabharat.com/virtual-showroom/vellfire.html"
            />
            <LuxurySection
                backgroundImage="/vellfire/new-exquisite-interiors-bg (5).jpg"
                heading="HOSPITALITY-INSPIRED LUXURY"
                data={luxuryData}
            />

            <LuxurySection
                backgroundImage="/vellfire/new-opulent-design-bg (2).jpg"
                heading="DISTUINGUISHED STYLING​"
                data={stylingdata}
            />


            <LuxurySection
                backgroundImage="/vellfire/new-safety-bg (1).jpg"
                heading="CONNNOISSEURS OF SAFETY​​​"
                data={safetydata}
            />

            <LuxurySection
                backgroundImage="/vellfire/master-engine-bg (1).jpg"
                heading="MASTER THE ENGINEERING​​​​"
                data={engineeringdata}
            />


            <TopHeadingBgSection
                bgImage="/vellfire/i-connect-bg (1).jpg"
                heading=""
                height="90vh"
            />
            <CarColorShowcase />
           {/* <GallerySection2 data={galleryData} /> */}
        </>

    );
}
