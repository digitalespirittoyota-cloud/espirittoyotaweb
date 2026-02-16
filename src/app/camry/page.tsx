import SideHero from "../glanza/SideHero";
import CamryBookNowBanner from "./CamryBooknowbanner";
import CamryColors from "./CamryColors";
import CamryElegance from "./CamryElegance";
import CamryEnginePerformance from "./CamryEnginePerformance";
import CamryExteriorInterior from "./CamryExteriorInterior";
import CamrySafetyConnected from "./CamrySafetyConnected";
import TNGASection from "./TNGASection";

export const camryExteriorInteriorData = {
  exterior: {
    label: "EXTERIOR",
    description:
      "The redesigned Toyota Camry stands out with bold LED lighting, sleek grille and aerodynamic styling.",
    banner:
      "https://static3.toyotabharat.com/images/showroom/new-camry/exterior_img1-1199-x478.png",
    thumbs: [
      "https://static3.toyotabharat.com/images/showroom/new-camry/exterior_thumb1-389x264.png",
      "https://static3.toyotabharat.com/images/showroom/new-camry/exterior_thumb2-389x264.jpg",
      "https://static3.toyotabharat.com/images/showroom/new-camry/exterior_thumb3-389x264.jpg",
    ],
  },

  interior: {
    label: "INTERIOR",
    description:
      "Premium leather seats, 10-way power adjustment and a 12.3-inch digital display define luxury inside.",
    banner:
      "https://static3.toyotabharat.com/images/showroom/new-camry/interior_img1-1199-x478.jpg",
    thumbs: [
      "https://static3.toyotabharat.com/images/showroom/new-camry/interior_thumb1-389x264.jpg",
      "https://static3.toyotabharat.com/images/showroom/new-camry/interior_thumb2-389x264.jpg",
      "https://static3.toyotabharat.com/images/showroom/new-camry/interior_thumb3-389x264.jpg",
    ],
  },
};
export const camryConvenienceComfortData = {
  exterior: {
    label: "Convenience",
    description:
      "Stay connected and in control with the new 12.3-inch Multi-Information Display and multimedia system. Features like wireless smartphone charging and rear armrest touch controls make every drive intuitive and seamless.",
    banner:
      "https://static3.toyotabharat.com/images/showroom/new-camry/convenience_img1-1199-x478.jpg",
    thumbs: [
      "https://static3.toyotabharat.com/images/showroom/new-camry/multimedia_thumb1-389x264.jpg",
      "https://static3.toyotabharat.com/images/showroom/new-camry/multimedia_thumb2-389x264.jpg",
      "https://static3.toyotabharat.com/images/showroom/new-camry/multimedia_thumb3-389x264.jpg",
    ],
  },

  interior: {
    label: "Comfort",
    description:
      "Step into the Toyota Camry’s spacious cabin, where soft upholstery and thoughtfully designed seating create an oasis of relaxation. With 10-way power-adjustable seats, lumbar support, and rear power-reclining seats, every journey feels effortlessly comfortable.",
    banner:
      "https://static3.toyotabharat.com/images/showroom/new-camry/comfort-banner-1199x478.jpg",
    thumbs: [
      "https://static3.toyotabharat.com/images/showroom/new-camry/comfort_thumb1-389x264.jpg",
      "https://static3.toyotabharat.com/images/showroom/new-camry/comfort_thumb2-389x264.jpg",
      "https://static3.toyotabharat.com/images/showroom/new-camry/comfort_thumb3-389x264.jpg",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <CamryElegance />
      <CamryEnginePerformance/>
      <CamryExteriorInterior
        tabs={camryExteriorInteriorData}
        defaultTab="exterior"
      />
      <CamryExteriorInterior
        tabs={camryConvenienceComfortData}
        defaultTab="exterior"
      />
      <CamrySafetyConnected/>
      <CamryColors/>
      <TNGASection/>
      <SideHero
  imageUrl="https://static.toyotabharat.com/images/showroom/new-camry/blueskybanner-1366x485.jpg"
  alt="Camry Ebook"
/>
<CamryBookNowBanner/>

    </>
  );
}
