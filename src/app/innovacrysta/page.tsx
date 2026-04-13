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
      description: `The Innova’s legendary capabilities have been enhanced beyond compare with the new Innova Crysta. Be it the new bold front grille and bumper or the stunning diamond-cut alloy wheels, the new Innova Crysta is in a league of its own.

If the exterior design spells dominance, the well-appointed interior is steeped in luxury and elegance. Unequalled space and plushness welcome you inside to the camel tanned seats of the new Innova Crysta. Replete with unsurpassed connectivity, safety and a linear power delivery, it gives you a truly unmatched and unrivalled travelling experience.`,
      imageUrl:
        "/models/innovacrysta/crysta2.webp",
      heading: "UNMATCHED UNRIVALED",
    },
  ];

  // ✅ ADD THIS (THIS WAS MISSING)
  const designSectionData = {
    title: "UNMATCHED DESIGN",
    description:
      "The new Innova Crysta’s design is matchless. Thanks to its distinctly styled, bold front grille and bumper, it exudes unmistakable road presence that takes it miles ahead of the rest.",
    heroImage:
      "/models/innovacrysta/crysta3.webp",
    cards: [
      {
        img: "/models/innovacrysta/crysta4.webp",
        title: "IMPOSING CHROME SURROUND PIANO BLACK GRILLE",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large01.jpg",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "/models/innovacrysta/crysta5.webp",
        title: "PIERCING LED HEADLAMPS",
        modalContent: {
          image:
            "/models/innovacrysta/crysta5.webp",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "/models/innovacrysta/crysta6.webp",
        title: "FRONT CLEARANCE SONAR WITH MID INDICATION",
        modalContent: {
          image:
            "/models/innovacrysta/crysta6.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "/models/innovacrysta/crysta7.webp",
        title: "ENTICING DIAMOND-CUT ALLOYS",
        modalContent: {
          image:
            "/models/innovacrysta/crysta7.webp",
          description: "Gives more style & presence to your drive",
        },
      },
      {
        img: "/models/innovacrysta/crysta8.webp",
        title: "WELCOME LAMPS",
        modalContent: {
          image:
            "/models/innovacrysta/crysta8.webp",
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
      "/models/innovacrysta/crysta9.webp",
    cards: [
      {
        img: "/models/innovacrysta/crysta10.webp",
        title: "Apple CarPlay &amp; Android Auto",
        modalContent: {
          image:
            "/models/innovacrysta/crysta10.webp",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "/models/innovacrysta/crysta11.webp",
        title: "Blue illumination, 3-dimensional combination meter with Large TFT MID",
        modalContent: {
          image:
            "/models/innovacrysta/crysta11.webp",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "/models/innovacrysta/crysta12.webp",
        title: "Start/ stop button",
        modalContent: {
          image:
            "/models/innovacrysta/crysta12.webp",
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
      "/models/innovacrysta/crysta14.webp",
    cards: [
      {
        img: "/models/innovacrysta/crysta16.webp",
        title: "AMBIENT ILLUMINATION",
        modalContent: {
          image:
            "/models/innovacrysta/crysta16.webp",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "/models/innovacrysta/crysta17.webp",
        title: "Foldable seatback table with cup holder",
        modalContent: {
          image:
            "/models/innovacrysta/crysta17.webp",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "/models/innovacrysta/crysta18.webp",
        title: "Wood finish interior panels",
        modalContent: {
          image:
            "/models/innovacrysta/crysta18.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "/models/innovacrysta/crysta19.webp",
        title: "Easy slide side passenger seat",
        modalContent: {
          image:
            "/models/innovacrysta/crysta19.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },{
        img: "/models/innovacrysta/crysta20.webp",
        title: "Smartphone holder with USB port",
        modalContent: {
          image:
            "/models/innovacrysta/crysta20.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },{
        img: "/models/innovacrysta/crysta.webp",
        title: "Plush Leather Seats",
        modalContent: {
          image:
            "/models/innovacrysta/crysta.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "/models/innovacrysta/crysta20.webp",
        title: "Plush Leather Seats",
        modalContent: {
          image:
            "/models/innovacrysta/crysta20.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "/models/innovacrysta/crysta21.webp",
        title: "Upper glove box with cooling",
        modalContent: {
          image:
            "/models/innovacrysta/crysta21.webp",
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
      "/models/innovacrysta/crysta22.webp",
    cards: [
      {
        img: "/models/innovacrysta/crysta23.webp",
        title: "Powerful GD diesel engine",
        modalContent: {
          image:
            "/models/innovacrysta/crysta23.webp",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "/models/innovacrysta/crysta24.webp",
        title: "Eco &amp; Power drive modes",
        modalContent: {
          image:
            "/models/innovacrysta/crysta24.webp",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "/models/innovacrysta/crysta25.webp",
        title: "Improved suspension with pitch &amp; bounce control",
        modalContent: {
          image:
            "/models/innovacrysta/crysta25.webp",
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
      "/models/innovacrysta/crysta26.webp",
    cards: [
      {
        img: "/models/innovacrysta/crysta27.webp",
        title: "Anti-lock Braking System",
        modalContent: {
          image:
            "/models/innovacrysta/crysta27.webp",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "/models/innovacrysta/crysta28.webp",
        title: "Vehicle stability control",
        modalContent: {
          image:
            "/models/innovacrysta/crysta28.webp",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "/models/innovacrysta/crysta29.webp",
        title: "GOA body",
        modalContent: {
          image:
            "/models/innovacrysta/crysta29.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "/models/innovacrysta/crysta30.webp",
        title: "Hill-start assist control",
        modalContent: {
          image:
            "/models/innovacrysta/crysta30.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },{
        img: "/models/innovacrysta/crysta31.webp",
        title: "Smartphone holder with USB port",
        modalContent: {
          image:
            "/models/innovacrysta/crysta31.webp",
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
      "/models/innovacrysta/crysta42.webp",
    cards: [
      {
        img: "/models/innovacrysta/crysta33.webp",
        title: "Welcome door lamp",
        modalContent: {
          image:
            "/models/innovacrysta/crysta33.webp",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "/models/innovacrysta/crysta34.webp",
        title: "Roof Spoiler Garnish",
        modalContent: {
          image:
            "/models/innovacrysta/crysta34.webp",
          description: "Improves visibility and enhances the confident stance",
        },
      },
      {
        img: "/models/innovacrysta/crysta35.webp",
        title: "Tire pressure monitoring system",
        modalContent: {
          image:
            "/models/innovacrysta/crysta35.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },
      {
        img: "/models/innovacrysta/crysta32.webp",
        title: "Wireless charger",
        modalContent: {
          image:
            "/models/innovacrysta/crysta32.webp",
          description: "Ensures safe parking in tight spaces",
        },
      },
      
    ],
  };
 
  

  
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <GlanzaHero
      imageUrl="/models/innovacrysta/crysta1.webp"
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
