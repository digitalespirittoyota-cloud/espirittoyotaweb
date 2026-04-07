import { Metadata } from "next";
import { getBaseMetadata } from "../utils/seo";
import GlanzaHero from "../glanza/GlanzaHero";
import AwesomeAccessories from "./AwesomeAccessories";
import ColorSelectionPage from "./ColorSelectionPage";
import Comfort from "./Comfort";
import EVHighlightsSection from "./EVHighlightsSection";
import ExteriorSection from "./ExteriorSection";
import FAQ from "./FAQ";
import OwnershipExperience from "./OwnershipExperience";
import PerformanceSection from "./PerformanceSection";
import SafetyExact from "./SafetySection";
import SmartwatchConnectivity from "./SmartwatchConnectivity";
import SpecsFeatures from "./SpecsFeatures";
import Testdrive from "./Testdrive";
import ToyotaInterior from "./ToyotaInterior";

export const metadata: Metadata = getBaseMetadata(
  "Toyota Urban Cruiser Rebella Price & Features | Espirit Toyota",
  "Discover the Toyota Urban Cruiser Rebella. Experience its stylish exterior, premium interior, and advanced features at Espirit Toyota Bhubaneswar. Book a test drive today.",
  "/urbancruiserebella",
  ["Toyota Rebella", "Urban Cruiser Rebella Price", "Toyota SUV", "Rebella Features"],
  "https://static3.toyotabharat.com/images/showroom/a32/a32-banner-4000x2250.jpg"
);

export default function HomePage() {
  return (
    <>
      <GlanzaHero
        imageUrl="https://static3.toyotabharat.com/images/showroom/a32/a32-banner-4000x2250.jpg"
        alt="Toyota A32"
      />
      <EVHighlightsSection />
      <ExteriorSection />
      <ToyotaInterior />
      <SmartwatchConnectivity />
      <PerformanceSection />
      <Comfort />
      <SafetyExact />
      <ColorSelectionPage />
      <AwesomeAccessories />
      <OwnershipExperience />
      <SpecsFeatures />
      <FAQ />
      <Testdrive />
    </>
  );
}
