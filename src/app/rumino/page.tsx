

import GlanzaHero from "../glanza/GlanzaHero";
import SideHero from "../glanza/SideHero";
import AccessoriesSlider from "./AccessoriesSlider";
import Gallery from "./Gallery";
import RumionColors from "./RumionColors";
import TechnicalSpecifications from "./TechnicalSpecifications";
import TechExactSlider from "./TechSection";

export default function RuminoPage() {
  return (
    <>
    <GlanzaHero
      imageUrl="/models/rumino/rumino1.webp"
      alt="Toyota Rumion"
    />
    <GlanzaHero
      imageUrl="/models/rumino/rumino2.webp"
      alt="Toyota Rumion"
    />
    {/* ================= TECH (SLIDER MODE) ================= */}
      <TechExactSlider
        layout="big-right"
        mode="card-click"
        titleMain="GOOD WALA"
        titleHighlight="STYLE"
        description="Everything about the Rumion is designed to exude stylish vibes. Take for instance its premium front grille with chrome finish bumper. So no matter where you go, you are always upbeat and full of cheer."
        slides={[
          {
            image:
              "/models/rumino/rumino3.webp",
            title: "PREMIUM GRILLE WITH CHROME FINISH ON THE FRONT BUMPER",
            subtitle: "",
          },
          {
            image:
              "/models/rumino/rumino4.webp",
            title: "STUNNING TWO TONE MACHINED ALLOY WHEELS",
            subtitle: "",
          },
          
        ]}
      />
      {/* ===== FIRST SECTION (BIG IMAGE RIGHT) ===== */}
      <TechExactSlider
        layout="big-right"
        titleMain="GOOD WALA"
        titleHighlight="TECH"
        description="Decked with advanced tech, the Rumion keeps your vibes high with its seamless connectivity."
        slides={[
          {
            image:
              "/models/rumino/sl1.webp",
            title: "AUTO HEAD LAMP",
            subtitle: "Featuring follow me home function",
          },
          {
            image:
              "/models/rumino/sl2.webp",
            title: "SMARTPHONE CONNECTIVITY*",
            subtitle:
              "Remote immobilisation | Tow alert | Remote start/Stop",
          },
          {
            image:
              "/models/rumino/sl3.webp",
            title: "SMARTWATCH CONNECTIVITY*",
            subtitle: "Climate control | Lock unlock | Find my car",
          },
          {
            image:
              "/models/rumino/sl4.webp",
            title: "17.78 cm SMARTPLAYCAST AUDIO",
            subtitle:
              "Display audio with wireless Android Auto and Apple CarPlay",
          },
        ]}
      />

      {/* ===== SECOND SECTION (BIG IMAGE LEFT) ===== */}
      <TechExactSlider
        layout="big-left"
        titleMain="GOOD WALA"
        titleHighlight="PERFORMANCE"
        description="The 1.5L K series engine with Neodrive and E-CNG technology gives you higher fuel-efficiency and performance letting you enjoy good vibes on every journey."
        slides={[
          {
            image:
              "/models/rumino/performance-img01.webp",
            title: "POWERFUL 1.5L K SERIES ENGINE",
            subtitle: "ISG technology for NeoDrive grades Fuel efficiency of 20.11 km/l* for Neo Drive AT grade and 20.51 km/l* for Neo Drive MT grade",
          },
          {
            image:
              "/models/rumino/performance-img02.webp",
            title: "POWERFUL 1.5L K SERIES ENGINE",
            subtitle: "E-CNG technology for CNG grade Fuel efficiency of 26.11 km/kg* for CNG grade",
          },
          {
            image:
              "/models/rumino/performance-img03.webp",
            title: "6-SPEED AUTOMATIC TRANSMISSION",
            subtitle: "",
          },
          {
            image:
              "/models/rumino/performance-img04.webp",
            title: "PADDLE SHIFTERS FOR BETTER PERFORMANCE",
            subtitle: "Perfect balance of power and convenience &nbsp;",
          },
        ]}
      />
      <TechExactSlider
        layout="big-right"
        titleMain="GOOD WALA"
        titleHighlight="SPACE"
        description="Experience the goodness of space with flexible seating options and ample room for your luggage."
        slides={[
          {
            image:
              "/models/rumino/space-img01.webp",
            title: "7 SEATER WITH PLUSH DUAL TONE SEAT FABRIC",
            subtitle: "",
          },
          {
            image:
              "/models/rumino/space-img02.webp",
            title: "AMPLE LUGGAGE SPACE",
            subtitle:
              "",
          },
          {
            image:
              "/models/rumino/space-img03.webp",
            title: "2nd ROW CONSOLE AC VENTS",
            subtitle: "",
          },
          {
            image:
              "/models/rumino/space-img04.webp",
            title: "TYRE PRESSURE MONITORING SYSTEM",
            subtitle:
              "",
          },
        ]}
      />
      
    <GlanzaHero
      imageUrl="/models/rumino/good-wala-vibe02.webp"
      alt="Toyota Rumion"
    />
      <TechExactSlider
        layout="big-left"
        titleMain="GOOD WALA"
        titleHighlight="SAFETY"
        description="The Rumion comes loaded with safety features to keep you safe all the time, allowing you to enjoy the good vibes of peace of mind."
        slides={[
          {
            image:
              "/models/rumino/safety-img01.webp",
            title: "6 AIRBAGS AS STANDARD",
            subtitle: "",
          },
          {
            image:
              "/models/rumino/safety-img02.webp",
            title: "HILL HOLD ASSIST",
            subtitle: "",
          },
          {
            image:
              "/models/rumino/safety-img03.webp",
            title: "ABS WITH EBD &amp; BRAKE ASSIST",
            subtitle: "",
          },
          {
            image:
              "/models/rumino/safety-img04.webp",
            title: "HEARTECT PLATFORM",
            subtitle: "",
          },
          {
            image:
              "/models/rumino/safety-img05.webp",
            title: "FRONT SEAT PRETENSIONER/ FORCE LIMITER",
            subtitle: "",
          },
        ]}
      />
      <RumionColors/>
      <TechExactSlider
        layout="big-left"
        mode="click"
        showBrochureButton
        brochureUrl="https://www.toyotabharat.com/documents/brochures/e-brochure-rumion.pdf"
        titleMain="Download"
        titleHighlight="Brochure"
        description="For more information on how you can experience and enjoy Good Wala Vibes, all you have to do is click on the button and download the brochure."
        slides={[
          {
            image:
              "/models/rumino/download-brochure.webp",
            title: "",
            subtitle:
              "",
          },
          
          
        ]}
      />
      <TechnicalSpecifications/>
      <Gallery/>
      <AccessoriesSlider/>
      <SideHero
  imageUrl="/models/rumino/rumion-e-booking.webp"
  alt="Rumion E-Booking"
/>
    </>
  );
}


























