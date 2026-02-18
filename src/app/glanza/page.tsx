
import CarColorSelector from "./CarColorSelector";
import Ecng from "./Ecng";
import GlanzaAccessories from "./GlanzaAccessories";
import GlanzaHero from "./GlanzaHero";
import GlanzaInstantLoan from "./GlanzaInstantLoan";
import SideHero from "./SideHero";
import TechnicalSpecifications from "./TechnicalSpecifications";
import ToyotaGlanza from "./ToyotaGlanza";
import ZoomImageFormSection from "./ZoomImageFormSection";
import { glanzaSections } from "./data/glanzaData";

export default function GlanzaPage() {
  const lastIndex = glanzaSections.length - 1;

  return (
    <>
     <style>{`
  * {
    box-sizing: border-box;
    ,"Ahmednager","Aizawal"
  }

  
`}</style>
      {/* All sections except last */}
      <GlanzaHero
      imageUrl="https://static3.toyotabharat.com/images/showroom/glanza/glanza-product-page-banner-1920x807.jpg"
      alt="Toyota Glanza"
    />
    <GlanzaHero
      imageUrl="https://static3.toyotabharat.com/images/showroom/glanza/new/img-where-ever-you-are-new.jpg"
      alt="Toyota Glanza"
    />
    <GlanzaHero
      imageUrl="https://static3.toyotabharat.com/images/showroom/glanza/new/glanza-your-first-toyota-1920x807.jpg"
      alt="Toyota Glanza"
    />
    <GlanzaHero
      imageUrl="https://static3.toyotabharat.com/images/showroom/glanza/new/c-goawesome/01-new.jpg"
      alt="Toyota Glanza"
    />
    <SideHero
  imageUrl="https://static3.toyotabharat.com/images/showroom/glanza/new/img-style-statement-new.jpg"
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
      <CarColorSelector/>
      <GlanzaAccessories/>
      <TechnicalSpecifications/>
      <ZoomImageFormSection
        testDriveImage="https://static.toyotabharat.com/images/showroom/glanza/new/img-test-drive.png"
        emiImage="https://static.toyotabharat.com/images/showroom/glanza/new/img-emi-calculator-new.jpg"
        emiTitle="EMI CALCULATOR"
        testDriveFields={[
          { label: "---*", options: ["Mr","Mrs", "Ms","Dr"] },
          { label: "Name*" },
          { label: "Mobile Number*" },
          { label: "Email*" },
          { label: "Select City*", options: ["Bhubaneswar"] },
          { label: "Select Dealer*", options: [] },
        ]}
        emiFields={[
          { label: "Select Fuel Type*", options: ["Petrol-Manual","Petrol-Automatic", "CNG-Manual"] },
          { label: "Select Variant*" },
          { label: "Select State*", options: ["Odisha",] },
          { label: "Select City*", options: [ "Bhubaneswar"] },
        ]}
      />

      <GlanzaInstantLoan/>
      <SideHero
  imageUrl="https://static3.toyotabharat.com/images/showroom/glanza/new/img-ebook-now-new.jpg"
  alt="Glanza Ebook"
/>
    </>
  );
}
