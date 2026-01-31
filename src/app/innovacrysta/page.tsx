"use client";
import React from "react";
import CarShowcase from "./InnovaCrysta";
import InnovaCrystaDesign from "./InnovaCrystaDesign";
import Specifications from "./Specifications";
import InnovaColors from "./InnovaColors";
import Gallery from "./Gallery";
import GlanzaHero from "../glanza/GlanzaHero";

const Page: React.FC = () => {

  const cars = [
    {
      description: `The Innova’s legendary capabilities have been enhanced beyond compare
      with the new Innova Crysta.`,
      imageUrl:
        "https://static.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
      heading: "UNMATCHED UNRIVALED",
    },
  ];

  // ✅ ADD THIS (THIS WAS MISSING)
  const designSectionData = {
    title: "UNMATCHED DESIGN",
    description:
      "The new Innova Crysta's design is matchless. Thanks to its bold front grille and bumper, it exudes unmistakable road presence.",
    heroImage:
      "https://static.toyotabharat.com/images/showroom/innova-mmc/unmatched-design1600x1000.jpg",
    cards: [
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-thumb1-new-440x417.jpg",
        title: "IMPOSING CHROME SURROUND PIANO BLACK GRILLE",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large01.jpg",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-thumb2-440x440.jpg",
        title: "PIERCING LED HEADLAMPS",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large02.jpg",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-thumb5-440x440.jpg",
        title: "FRONT CLEARANCE SONAR WITH MID INDICATION",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-thumb3-440x440.jpg",
        title: "ENTICING DIAMOND-CUT ALLOYS",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large04.jpg",
          description: "Gives more style & presence to your drive",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-thumb4-440x440.jpg",
        title: "WELCOME LAMPS",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large05.jpg",
          description:
            "Provides a warm welcome everytime you approach the new Innova Crysta",
        },
      },
    ],
  };
  const unrivaledData = {
    title: "Unrivaled connectivity",
    description:
      "The elegant driver dashboard is the control centre of the new Innova Crysta. It features 20.32cm display with Android Auto and Apple CarPlay Connectivity*, using your smartphone you can also access advanced connectivity* features like Walk to Car, Geo Fencing & Real Time Vehicle Tracking.",
    heroImage:
      "https://static.toyotabharat.com/images/showroom/innova-mmc/unrivaled-connectivity-banner1600x1000-new.jpg",
    cards: [
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/connectivity-thumb02-440x440.jpg",
        title: "Apple CarPlay &amp; Android Auto",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large01.jpg",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/connectivity-thumb01-880x440.jpg",
        title: "Blue illumination, 3-dimensional combination meter with Large TFT MID",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large02.jpg",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/connectivity-thumb03-440x440.jpg",
        title: "Start/ stop button",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      
    ],
  };
const unmatchedData = {
    title: "Unmatched comfort",
    description:
      "Like every other Innova, luxury and comfort is at the core of the new Innova Crysta. Be it the plush, camel tan seats, enhanced legroom or soft-touch materials, the new Innova spells unparalleled refinement and class.",
    heroImage:
      "https://static.toyotabharat.com/images/showroom/innova-mmc/unmatched-comfort-banner1600x1000.jpg",
    cards: [
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large01.jpg",
        title: "AMBIENT ILLUMINATION",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large01.jpg",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large02.jpg",
        title: "Foldable seatback table with cup holder",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large02.jpg",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large03.jpg",
        title: "Wood finish interior panels",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large04.jpg",
        title: "Easy slide side passenger seat",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },{
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large05.jpg",
        title: "Smartphone holder with USB port",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large06.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },{
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large06.jpg",
        title: "Plush Leather Seats",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large08.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large08.jpg",
        title: "Plush Leather Seats",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large08.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large08.jpg",
        title: "Upper glove box with cooling",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large08.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
    ],
  };
  const performanceData = {
    title: "Unrivaled performance",
    description:
      "The new Innova Crysta has oodles of power under its hood. Yet it is unwaveringly efficient as it returns more miles for the gallon. And that’s not all. It also offers refined driving dynamics for a smoother, more surefooted ride thanks to its robust chassis, sturdy suspension and slick transmission.",
    heroImage:
      "https://static.toyotabharat.com/images/showroom/innova-mmc/unrivaled-performance-banner1600x1000.jpg",
    cards: [
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/performance-thumb01-440x440.jpg",
        title: "Powerful GD diesel engine",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large01.jpg",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/performance-thumb03-880x440-new.jpg",
        title: "Eco &amp; Power drive modes",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large02.jpg",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/performance-thumb05-880x440.jpg",
        title: "Improved suspension with pitch &amp; bounce control",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      
    ],
    
  };
  const safetyData = {
    title: "Unmatched safety",
    description:
      "The new Innova Crysta is not only powerful and comfortable, it’s safe too. The new Innova Crysta protects you and your family with 7 SRS Airbags during any eventuality. Anti-lock braking, electronic brake force distribution, brake assist and the like ensure safety and stability on every journey.",
    heroImage:
      "https://static.toyotabharat.com/images/showroom/innova-mmc/unmatched-safety-banner1600x1000.jpg",
    cards: [
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/safety-feature-large01.jpg",
        title: "Anti-lock Braking System",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large01.jpg",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/safety-feature-large02.jpg",
        title: "Vehicle stability control",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large02.jpg",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/safety-feature-large03.jpg",
        title: "GOA body",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/safety-feature-large04.jpg",
        title: "Hill-start assist control",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },{
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large05.jpg",
        title: "Smartphone holder with USB port",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/comfort-feature-large06.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      
    ],
  };
  const upgradesData = {
    title: "Unrivaled Upgrades",
    description:
      "The new Innova Crysta is decked with all the features you expect. But we always leave scope for enhancements. You can enhance the appeal, convenience and comfort of your new Innova Crysta with these amazing accessories.",
    heroImage:
      "https://static.toyotabharat.com/images/showroom/innova-mmc/unrivaled-upgrades-banner1600x1000.jpg",
    cards: [
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/updrade-deatures04-880x440.jpg",
        title: "Welcome door lamp",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large01.jpg",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/updrade-deatures06-440x440.jpg",
        title: "Roof Spoiler Garnish",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large02.jpg",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/upgrades-feature-large02.jpg",
        title: "Tire pressure monitoring system",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "https://static.toyotabharat.com/images/showroom/innova-mmc/upgrades-feature-large03.jpg",
        title: "Wireless charger",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large03.jpg",
          description: "Ensures safe parking in tight spaces",
        },
      },
      
    ],
  };
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <GlanzaHero
      imageUrl="https://static.toyotabharat.com/images/showroom/innova-mmc/20-years-ruling-1600x850.jpg"
      alt="Toyota Glanza"
    />
      {cars.map((car, index) => (
        <CarShowcase
          key={index}
          description={car.description}
          imageUrl={car.imageUrl}
          heading={car.heading}
        />
      ))}

      {/* ✅ PERFECT CALL */}
      <InnovaCrystaDesign {...designSectionData} />
      <InnovaCrystaDesign {...unrivaledData} />
      <InnovaCrystaDesign {...unmatchedData} />
      <InnovaCrystaDesign {...performanceData} />
      <InnovaCrystaDesign {...safetyData} />
      <Specifications/>
      <InnovaCrystaDesign {...upgradesData} />
      <InnovaColors/>
      <Gallery/>
    </div>
  );
};

export default Page;
