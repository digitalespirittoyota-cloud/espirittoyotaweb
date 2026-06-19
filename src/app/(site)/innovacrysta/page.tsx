import { Metadata } from "next";
import { getBaseMetadata } from "../../utils/seo";
import React from "react";
import CarShowcase from "./InnovaCrysta";
import InnovaCrystaDesign from "./InnovaCrystaDesign";
import Specifications from "./Specifications";
import InnovaColors from "./InnovaColors";
import Gallery from "./Gallery";
import GlanzaHero from "../glanza/GlanzaHero";

export const metadata: Metadata = getBaseMetadata(
  "Toyota Innova Crysta Price, Features & Specs | Espirit Toyota",
  "The legendary Toyota Innova Crysta. Explore its unmatched design, unrivaled performance, and premium comfort at Espirit Toyota Bhubaneswar. Book your test drive today.",
  "/innovacrysta",
  ["Toyota Innova Crysta", "Innova Crysta Price", "Innova Diesel", "MPV Bhubaneswar", "Innova Crysta Features"],
  "https://static.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg"
);


const Page: React.FC = () => {


  const cars = [
    {
      description: `The Innova’s legendary capabilities have been enhanced beyond compare with the new Innova Crysta. Be it the new bold front grille and bumper or the stunning diamond-cut alloy wheels, the new Innova Crysta is in a league of its own.

If the exterior design spells dominance, the well-appointed interior is steeped in luxury and elegance. Unequalled space and plushness welcome you inside to the camel tanned seats of the new Innova Crysta. Replete with unsurpassed connectivity, safety and a linear power delivery, it gives you a truly unmatched and unrivalled travelling experience.`,
      imageUrl:
        "/models/innovacrysta/unmatched-design.webp",
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
        title: "Welcome Lamps",
        modalContent: {
          image:
            "https://static.toyotabharat.com/images/showroom/innova-mmc/design-feature-large01.jpg",
          description:
            "New bold front grille with chrome surround and stylish CRYSTA embossed bumper",
        },
      },
      {
        img: "/models/innovacrysta/crysta5.webp",
        title: "Enticing Diamond-cut Alloys",
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
        title: "PIERCING LED HEADLAMPS",
        modalContent: {
          image:
            "/models/innovacrysta/crysta7.webp",
          description: "Gives more style & presence to your drive",
        },
      },
      {
        img: "/models/innovacrysta/crysta8.webp",
        title: "Modernised Front Grille with Refined Chrome Elements",
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
      "/models/innovacrysta/unrivaled-connectivity.webp",
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
        img: "/models/innovacrysta/connectivity-feature.webp",
        title: "Blue illumination, 3-dimensional combination meter with Large TFT MID",
        modalContent: {
          image:
            "/models/innovacrysta/connectivity-feature.webp",
          description: "Blue illumination, 3-dimensional combination meter with large TFT MID with drive information, cost calculator and telephone/navigation display adds to the car’s intelligence",
        },
      },
      {
        img: "/models/innovacrysta/connectivity-feature03.webp",
        title: "Start/ stop button",
        modalContent: {
          image:
            "/models/innovacrysta/connectivity-feature03.webp",
          description: "For the convenience of starting the car at the touch of a button",
        },
      },

    ],
  };
  const unmatchedData = {
    title: "Unmatched comfort",
    description:
      "Like every other Innova, luxury and comfort is at the core of the new Innova Crysta. Be it the plush, camel tan seats, enhanced legroom or soft-touch materials, the new Innova spells unparalleled refinement and class.",
    heroImage:
      "/models/innovacrysta/unmatched-comfort.webp",
    cards: [
      {
        img: "/models/innovacrysta/comfort-feature-large01.webp",
        title: "AMBIENT ILLUMINATION",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large01.webp",
          description:
            "Gives the cabin a luxurious look and feel",
        },
      },
      {
        img: "/models/innovacrysta/comfort-feature-large02.webp",
        title: "Foldable seatback table with cup holder",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large02.webp",
          description: "Keeps your knick knacks safetly when on the go",
        },
      },
      {
        img: "/models/innovacrysta/comfort-feature-large03.webp",
        title: "Wood finish interior panels",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large03.webp",
          description: "Gives a premium and luxurious look",
        },
      },
      {
        img: "/models/innovacrysta/comfort-feature-large04.webp",
        title: "Easy slide side passenger seat",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large04.webp",
          description: "Adjusts the rear legroom for more comfort",
        },
      }, {
        img: "/models/innovacrysta/comfort-feature-large05.webp",
        title: "Smartphone holder with USB port",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large05.webp",
          description: "Keeps you connected when on the move",
        },
      }, {
        img: "/models/innovacrysta/comfort-feature-large06.webp",
        title: "Plush Leather Seats",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large06.webp",
          description: "Premium dual-tone leather seats in hazel brown and black",
        },
      },
      {
        img: "/models/innovacrysta/comfort-feature-large07.webp",
        title: "Plush Leather Seats",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large07.webp",
          description: "Gives you easy access to the third row seats",
        },
      },
      {
        img: "/models/innovacrysta/comfort-feature-large08.webp",
        title: "Upper glove box with cooling",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large08.webp",
          description: "Keeps your beverages cold and refreshingly fresh",
        },
      },
       {
        img: "/models/innovacrysta/comfort-feature-large09.webp",
        title: "Upper glove box with cooling",
        modalContent: {
          image:
            "/models/innovacrysta/comfort-feature-large09.webp",
          description: "Keeps your phone charged, effortlessly",
        },
      },
    ],
  };
  const performanceData = {
    title: "Unrivaled performance",
    description:
      "The new Innova Crysta has oodles of power under its hood. Yet it is unwaveringly efficient as it returns more miles for the gallon. And that’s not all. It also offers refined driving dynamics for a smoother, more surefooted ride thanks to its robust chassis, sturdy suspension and slick transmission.",
    heroImage:
      "/models/innovacrysta/unrivaled-performance.webp",
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
        img: "/models/innovacrysta/performancet.webp",
        title: "Eco & Power drive modes",
        modalContent: {
          image:
            "/models/innovacrysta/performancet.webp",
          description: "ECO mode for optimum fuel economy and POWER mode for sharper acceleration response",
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
      "/models/innovacrysta/unmatched-safety.webp",
    cards: [
      {
        img: "/models/innovacrysta/crysta27.webp",
        title: "Anti-lock Braking System",
        modalContent: {
          image:
            "/models/innovacrysta/crysta27.webp",
          description:
            "Prevents wheels from locking and enables greater manoeuvrability and steering control",
        },
      },
      {
        img: "/models/innovacrysta/safety-feature-large02.webp",
        title: "Vehicle stability control",
        modalContent: {
          image:
            "/models/innovacrysta/safety-feature-large02.webp",
          description: "Automatically controls both vehicle brakes and engine output during over steer or under steer while the vehicle is making a turn, ensuring vehicle stability",
        },
      },
      {
        img: "/models/innovacrysta/crysta29.webp",
        title: "GOA body",
        modalContent: {
          image:
            "/models/innovacrysta/crysta29.webp",
          description: "High strength body structure that effectively absorbs impacts and distributes it evenly during unforeseen collisions, thereby reducing passenger and pedestrian injuries",
        },
      },
      {
        img: "/models/innovacrysta/safety-feature-large04.webp",
        title: "Hill-start assist control",
        modalContent: {
          image:
            "/models/innovacrysta/safety-feature-large04.webp",
          description: "Automatically controls the brakes suppressing vehicle rollback when starting off on a slope, reducing the burden on the driver",
        },
      }, 
      // {
      //   img: "/models/innovacrysta/crysta31.webp",
      //   title: "Smartphone holder with USB port",
      //   modalContent: {
      //     image:
      //       "/models/innovacrysta/crysta31.webp",
      //     description: "Ensures safe parking in tight spaces",
      //   },
      // },

    ],
  };
  const upgradesData = {
    title: "Unrivaled Upgrades",
    description:
      "The new Innova Crysta is decked with all the features you expect. But we always leave scope for enhancements. You can enhance the appeal, convenience and comfort of your new Innova Crysta with these amazing accessories.",
    heroImage:
      "/models/innovacrysta/unrivaled-upgrades.webp",
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
        title: "Wireless Charger",
        modalContent: {
          image:
            "/models/innovacrysta/crysta35.webp",
          description: "Charges your smartphone smartly",
        },
      },
      // {
      //   img: "/models/innovacrysta/crysta32.webp",
      //   title: "Wireless charger",
      //   modalContent: {
      //     image:
      //       "/models/innovacrysta/crysta32.webp",
      //     description: "Ensures safe parking in tight spaces",
      //   },
      // },

    ],
  };




  return (
    <div style={{ backgroundColor: "#fff" }}>
      <GlanzaHero
        imageUrl="/models/innovacrysta/innovabanner1.webp"
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
      <Specifications />
      <InnovaCrystaDesign {...upgradesData} />
      <InnovaColors />
      <Gallery />



    </div>
  );
};

export default Page;
