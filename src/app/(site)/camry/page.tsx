import { Metadata } from "next";
import { getBaseMetadata } from "../../utils/seo";
import CamryImage from "./camrybanner";
import SideHero from "../glanza/SideHero";
import CamryBookNowBanner from "./CamryBooknowbanner";
import CamryColors from "./CamryColors";
import CamryElegance from "./CamryElegance";
import CamryEnginePerformance from "./CamryEnginePerformance";
import CamryExteriorInterior from "./CamryExteriorInterior";
import CamrySafetyConnected from "./CamrySafetyConnected";
import TNGASection from "./TNGASection";
import CamryBanner from "./camrybanner";

export const metadata: Metadata = getBaseMetadata(
  "Toyota Camry Hybrid Price, luxury & Performance | Espirit Toyota",
  "Experience the luxury of the Toyota Camry Hybrid at Espirit Toyota Bhubaneswar. Discover its self-charging hybrid technology, elegant design, and premium features.",
  "/camry",
  ["Toyota Camry", "Camry Hybrid", "Camry Price", "Luxury Sedan Bhubaneswar", "Camry Features"],
  "https://static3.toyotabharat.com/images/showroom/new-camry/exterior_img1-1199-x478.png"
);

export const camryExteriorInteriorData = {
  exterior: {
    label: "EXTERIOR",
    description:
      "The redesigned Toyota Camry stands out with bold LED lighting, sleek grille and aerodynamic styling.",
    banner:
      "/models/camry/camry6.webp",
    thumbs: [
      "/models/camry/camry7.webp",
      "/models/camry/camry8.webp",
      "/models/camry/camry9.webp",
    ],
  },

  interior: {
    label: "INTERIOR",
    description:
      "Premium leather seats, 10-way power adjustment and a 12.3-inch digital display define luxury inside.",
    banner:
      "/models/camry/interior_1.webp",
    thumbs: [
      "/models/camry/interior_2.webp",
      "/models/camry/interior_3.webp",
      "/models/camry/interior_4.webp",
    ],
  },
};
export const camryConvenienceComfortData = {
  exterior: {
    label: "Convenience",
    description:
      "Stay connected and in control with the new 12.3-inch Multi-Information Display and multimedia system. Features like wireless smartphone charging and rear armrest touch controls make every drive intuitive and seamless.",
    banner:
      "/models/camry/camry10.webp",
    thumbs: [
      "/models/camry/camry11.webp",
      "/models/camry/camry12.webp",
      "/models/camry/camry13.webp",
    ],
  },

  interior: {
    label: "Comfort",
    description:
      "Step into the Toyota Camry’s spacious cabin, where soft upholstery and thoughtfully designed seating create an oasis of relaxation. With 10-way power-adjustable seats, lumbar support, and rear power-reclining seats, every journey feels effortlessly comfortable.",
    banner:
      "/models/camry/comfort-banner.webp",
    thumbs: [
      "/models/camry/camry15.webp",
      "/models/camry/camry16.webp",
      "/models/camry/camry17.webp",
    ],
  },
};
export const camryExteriorElectricalData = {
  interior: {
    label: "Interior",
    description: "Discover a range of genuine accessories that are thoughtfully crafted for a superior drive.",
    banner: { src: "/models/camry/int1.webp", caption: "FLOORMAT" },
    thumbs: [
      { src: "/models/camry/int2.webp", caption: "SKY BOX (2-BOX SET)" },
      { src: "/models/camry/int3.webp", caption: "COOL BOX" },
      { src: "/models/camry/int4.webp", caption: "CARGO NET" },
    ],
  },
  exterior: {
    label: "Exterior",
    description: "Discover a range of genuine accessories that are thoughtfully crafted for a superior drive.",
    banner: { src: "/models/camry/ext1.webp", caption: "SIDE VISOR" },
    thumbs: [
      { src: "/models/camry/ext2.webp", caption: "CAR COVER" },
      { src: "/models/camry/ext3.webp", caption: "BODY SIDE MOLDING" },
      { src: "/models/camry/ext4.webp", caption: "FRONT GARNISH, CHROME" },
      { src: "/models/camry/ext5.webp", caption: "DOOR HOUSING HIBOSSCAL" },
      { src: "/models/camry/ext6.webp", caption: "DOOR EDGE PROTECTOR" },
      { src: "/models/camry/ext7.webp", caption: "REAR BUMPER GARNISH" },
    ],
  },
  electrical: {
    label: "Electrical",
    description: "Discover a range of genuine accessories that are thoughtfully crafted for a superior drive.",
    banner: { src: "/models/camry/elct1.webp", caption: "WELCOME DOOR LAMP" },
    thumbs: [],
  },
};
export default function HomePage() {
  return (
    <>
 
      <CamryBanner
  images={[
    { src: "/models/camry/camry1.webp",        alt: "Camry" },
    { src: "/models/camry/camry-banner2.webp",  alt: "Camry" },
  ]}
  autoPlayInterval={4000}
/>
      <CamryElegance />
      <CamryEnginePerformance />
      <CamryExteriorInterior
        tabs={camryExteriorInteriorData}
        defaultTab="exterior"
      />
      <CamryExteriorInterior
        tabs={camryConvenienceComfortData}
        defaultTab="exterior"
      />
      <CamrySafetyConnected />
      <CamryColors />
      <CamryExteriorInterior tabs={camryExteriorElectricalData} defaultTab="electrical" />
      <TNGASection />
      <SideHero
        imageUrl="/models/camry/camry27.webp"
        alt="Camry Ebook"
      />
      <CamryBookNowBanner />

    </>
  );
}
