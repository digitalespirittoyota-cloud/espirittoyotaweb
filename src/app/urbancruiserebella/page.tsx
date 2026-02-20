
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
      <Testdrive


      // testDriveFields={[
      //   { label: "SELECT SALUTATION*", options: ["Mr","Mrs", "Ms","Dr"] },
      //   { label: "Name*" },
      //   { label: "Mobile Number*" },
      //   { label: "Email*" },
      //   { label: "Select City*", options: ["Bhubaneswar"] },
      //   { label: "Select Dealer*", options: [] },
      // ]}

      />
    </>
  );
}
