import { Metadata } from "next";
import { getBaseMetadata } from "../utils/seo";
import CamryImage from "./camry/camrybanner";
import SideHero from "../glanza/SideHero";
import CamryBookNowBanner from "./camry/CamryBooknowbanner";
import CamryColors from "./camry/CamryColors";
import CamryElegance from "./camry/CamryElegance";
import CamryEnginePerformance from "./camry/CamryEnginePerformance";
import CamryExteriorInterior from "./camry/CamryExteriorInterior";
import CamrySafetyConnected from "./camry/CamrySafetyConnected";
import TNGASection from "./camry/TNGASection";

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
      "/models/camry/camry15.webp",
    thumbs: [
      "/models/camry/camry15.webp",
      "/models/camry/camry16.webp",
      "/models/camry/camry17.webp",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <CamryImage
        imageUrl="/models/camry/camry1.webp"
        alt="Camry"
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
      <TNGASection />
      <SideHero
        imageUrl="/models/camry/camry27.webp"
        alt="Camry Ebook"
      />
      <CamryBookNowBanner />

    </>
  );
}
