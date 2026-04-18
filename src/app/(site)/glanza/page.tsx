import { Metadata } from "next";
import { getBaseMetadata } from "../../utils/seo";
import CarColorSelector from "./CarColorSelector";
import Ecng from "./Ecng";
import GlanzaAccessories from "./GlanzaAccessories";
import GlanzaHero from "./GlanzaHero";
import GlanzaInstantLoan from "./GlanzaInstantLoan";
import SideHero from "./SideHero";
import TechnicalSpecifications from "./TechnicalSpecifications";
import ToyotaGlanza from "./ToyotaGlanza";
import { glanzaSections } from "./data/glanzaData";

export const metadata: Metadata = getBaseMetadata(
  "Toyota Glanza Price, Features & Mileage | Espirit Toyota",
  "The cool and advanced Toyota Glanza. Check features, mileage, variants, and price at Espirit Toyota Bhubaneswar. Experience premium hatchback quality with Toyota.",
  "/glanza",
  ["Toyota Glanza", "Glanza Price", "Glanza Mileage", "Glanza Hatchback Bhubaneswar", "Glanza Features"],
  "https://static3.toyotabharat.com/images/showroom/glanza/glanza-product-page-banner-1920x807.jpg"
);

export default function GlanzaPage() {
  const lastIndex = glanzaSections.length - 1;

  return (
    <>
      <style>{`
  * {
    box-sizing: border-box;
  }

  
`}</style>
      {/* All sections except last */}
      <GlanzaHero
        imageUrl="/models/glanza/glanza1.webp"
        alt="Toyota Glanza"
      />
      <GlanzaHero
        imageUrl="/models/glanza/glanza2.webp"
        alt="Toyota Glanza"
      />
      <GlanzaHero
        imageUrl="https://static3.toyotabharat.com/images/showroom/glanza/new/glanza-your-first-toyota-1920x807.jpg"
        alt="Toyota Glanza"
      />
      <GlanzaHero
        imageUrl="/models/glanza/glanza3.webp"
        alt="Toyota Glanza"
      />
      <SideHero
        imageUrl="/models/glanza/glanza4.webp"
        alt="Glanza Ebook"
      />
      {glanzaSections.slice(0, lastIndex).map((section, index) => (

        <ToyotaGlanza
          key={index}
          backgroundColor={section.backgroundColor}
          arrowStripColor={section.arrowStripColor}
          title={section.title}
          subtitle={section.subtitle}
          sectionTitle={section.sectionTitle}
          description={section.description}
          images={section.images}
          reverse={section.reverse}
        />
      ))}

      {/* 🔥 ECNG SECTION (before last) */}
      <Ecng />

      {/* Last ToyotaGlanza section */}
      <ToyotaGlanza
        backgroundColor={glanzaSections[lastIndex].backgroundColor}
        arrowStripColor={glanzaSections[lastIndex].arrowStripColor}
        title={glanzaSections[lastIndex].title}
        subtitle={glanzaSections[lastIndex].subtitle}
        sectionTitle={glanzaSections[lastIndex].sectionTitle}
        description={glanzaSections[lastIndex].description}
        images={glanzaSections[lastIndex].images}
        reverse={glanzaSections[lastIndex].reverse}
      />
      <CarColorSelector />
      <GlanzaAccessories />
      <TechnicalSpecifications />
      {/* <ZoomImageFormSection
        testDriveImage="https://static.toyotabharat.com/images/showroom/glanza/new/img-test-drive.png"
        emiImage="https://static.toyotabharat.com/images/showroom/glanza/new/img-emi-calculator-new.jpg"
        emiTitle="EMI CALCULATOR"
        testDriveFields={[
          { label: "---*", options: ["Mr", "Mrs", "Ms", "Dr"] },
          { label: "Name*" },
          { label: "Mobile Number*" },
          { label: "Email*" },
          // { label: "Select City*", options: ["Bhubaneswar"] },
          // { label: "Select Dealer*", options: [] },
        ]}
        emiFields={[
          { label: "Select Fuel Type*", options: ["Petrol-Manual", "Petrol-Automatic", "CNG-Manual"] },
          { label: "Select Variant*" },
          { label: "Select State*", options: ["Odisha",] },
          { label: "Select City*", options: ["Bhubaneswar"] },
        ]}
      /> */}

      <GlanzaInstantLoan />
      <SideHero
        imageUrl="/models/glanza/img-ebook.webp"
        alt="Glanza Ebook"
      />
    </>
  );
}
