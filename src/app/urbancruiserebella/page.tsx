
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

export default function HomePage() {
  return (
    <>
      <GlanzaHero
        imageUrl="/models/ebella/ebella1.webp"
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
