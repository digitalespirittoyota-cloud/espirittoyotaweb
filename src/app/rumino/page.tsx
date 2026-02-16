

import AccessoriesSlider from "./AccessoriesSlider";
import Gallery from "./Gallery";
import RumionColors from "./RumionColors";
import TechExactSlider from "./TechSection";

export default function RuminoPage() {
  return (
    <>
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
              "https://static.toyotabharat.com/images/showroom/rumion/style-img02.jpg",
            title: "PREMIUM GRILLE WITH CHROME FINISH ON THE FRONT BUMPER",
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
              "https://static.toyotabharat.com/images/showroom/rumion/tech-img04-small.jpg",
            title: "AUTO HEAD LAMP",
            subtitle: "Featuring follow me home function",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/tech-img01-small.jpg",
            title: "SMARTPHONE CONNECTIVITY*",
            subtitle:
              "Remote immobilisation | Tow alert | Remote start/Stop",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/tech-img02-small.jpg",
            title: "SMARTWATCH CONNECTIVITY*",
            subtitle: "Climate control | Lock unlock | Find my car",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/tech-img03-small.jpg",
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
              "https://static.toyotabharat.com/images/showroom/rumion/performance-img01.jpg",
            title: "POWERFUL 1.5L K SERIES ENGINE",
            subtitle: "ISG technology for NeoDrive grades Fuel efficiency of 20.11 km/l* for Neo Drive AT grade and 20.51 km/l* for Neo Drive MT grade",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/performance-img02.jpg",
            title: "POWERFUL 1.5L K SERIES ENGINE",
            subtitle: "E-CNG technology for CNG grade Fuel efficiency of 26.11 km/kg* for CNG grade",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/performance-img03.jpg",
            title: "6-SPEED AUTOMATIC TRANSMISSION",
            subtitle: "",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/performance-img04.jpg",
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
              "https://static.toyotabharat.com/images/showroom/rumion/space-img01-small.jpg",
            title: "7 SEATER WITH PLUSH DUAL TONE SEAT FABRIC",
            subtitle: "",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/space-img02-small.jpg",
            title: "AMPLE LUGGAGE SPACE",
            subtitle:
              "",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/space-img03-small.jpg",
            title: "2nd ROW CONSOLE AC VENTS",
            subtitle: "",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/space-img04-small.jpg",
            title: "TYRE PRESSURE MONITORING SYSTEM",
            subtitle:
              "",
          },
        ]}
      />
      <TechExactSlider
        layout="big-left"
        titleMain="GOOD WALA"
        titleHighlight="SAFETY"
        description="The Rumion comes loaded with safety features to keep you safe all the time, allowing you to enjoy the good vibes of peace of mind."
        slides={[
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/safety-img01.jpg",
            title: "6 AIRBAGS AS STANDARD",
            subtitle: "",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/safety-img02.jpg",
            title: "HILL HOLD ASSIST",
            subtitle: "",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/safety-img03.jpg",
            title: "ABS WITH EBD &amp; BRAKE ASSIST",
            subtitle: "",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/safety-img04.jpg",
            title: "HEARTECT PLATFORM",
            subtitle: "",
          },
          {
            image:
              "https://static.toyotabharat.com/images/showroom/rumion/safety-img05.jpg",
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
              "https://static.toyotabharat.com/images/showroom/rumion/download-brochure.jpg",
            title: "",
            subtitle:
              "",
          },
          
          
        ]}
      />
      <Gallery/>
      <AccessoriesSlider/>
      
    </>
  );
}


























