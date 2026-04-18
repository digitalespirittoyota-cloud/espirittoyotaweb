import { Metadata } from "next";
import { getBaseMetadata } from "../../utils/seo";
import GlanzaHero from "../../glanza/GlanzaHero";
import SideHero from "../../glanza/SideHero";
import AccessoriesPage from "./AccessoriesPage";
import CarCustomizer from "./CarCustomizer";
import EBookBanner from "./EBookbanner";
import HybridPage from "./HybridPage";
import HyMilesWinners from "./HyMilesWinners";
import HyTimeBanner from "./HyTimeBanner";
import PerformanceFeature, { FeatureItem } from "./PerformanceFeature";
import Technical from "./Technical";

export const metadata: Metadata = getBaseMetadata(
  "Toyota Urban Cruiser Hyryder Price, Mileage & Features | Espirit Toyota",
  "Explore the Toyota Urban Cruiser Hyryder at Espirit Toyota Bhubaneswar. Check price, self-charging hybrid features, mileage, and book a test drive today.",
  "/urbancruiserhyryder",
  ["Toyota Hyryder", "Hyryder Hybrid", "Toyota SUV Bhubaneswar", "Hyryder Mileage", "Hyryder Price"],
  "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/img-uch.png"
);


export interface Winner {
  name: string;
  mileage: string;
  drive: string;
  region: string;
  img: string;
}
export const hyTimeData = {
  leftImage:
    "/models/urbancruiserhyryder/urbancruiserhyryder3.webp",

  stats: [
    "2 crore units. In over 140 countries.",
    "Over 25 years.",
  ],

  description: [
    "Now, it's HY time you experienced this legacy in an advanced self-charging hybrid electric SUV.",
    "The reliability of a petrol engine meets the performance of an electric motor.",
  ],

  introText: "Toyota Urban Cruiser Hyryder.",

  carImage:
    "/models/urbancruiserhyryder/urbancruiserhyryder2.webp",
};

const winners: Winner[] = [
  { name: "Mr. Rajashekhar N Koti", mileage: "23.57 km/l", drive: "NEODRIVE", region: "South", img: "/models/urbancruiserhyryder/urbancruiserhyryder8.webp" },
  { name: "Mr. Ravi Kumbath", mileage: "23.15 km/l", drive: "NEODRIVE", region: "South", img: "/models/urbancruiserhyryder/urbancruiserhyryder7.webp" },
  { name: "Mr. Shashidara S Bapat", mileage: "24.89 km/l", drive: "NEODRIVE", region: "South", img: "/models/urbancruiserhyryder/urbancruiserhyryder6.webp" },
  { name: "Mr. Abhinandan Kapoor", mileage: "29.25 km/l", drive: "NEODRIVE", region: "North", img: "/models/urbancruiserhyryder/urbancruiserhyryder9.webp" },
  { name: "Mr. Bikram Singh", mileage: "26.98 km/l", drive: "HYBRID", region: "East", img: "/models/urbancruiserhyryder/urbancruiserhyryder10.webp" },
  { name: "Mr. Dakshesh Shah", mileage: "20.62 km/l", drive: "NEODRIVE", region: "West", img: "/models/urbancruiserhyryder/urbancruiserhyryder11.webp" },
];

const eperformanceItems: FeatureItem[] = [
  {
    title: "",
    subtitle: "on style",
    bigImage: "/models/urbancruiserhyryder/exterior-1.webp",
    thumb: "/models/urbancruiserhyryder/exterior-1.webp",
    description: "",

  },
  {
    title: "Unique Crystal Acrylic Grille",
    subtitle: "with Chrome Garnish",
    bigImage: "/models/urbancruiserhyryder/exterior2.webp",
    thumb: "/models/urbancruiserhyryder/exterior2.webp",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before. ",
  },
  {
    title: "LED Projector",
    subtitle: "Headlamps",
    bigImage: "/models/urbancruiserhyryder/exterior3.webp",
    thumb: "/models/urbancruiserhyryder/exterior3.webp",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Twin LED Daytime",
    subtitle: "Running Lamps",
    bigImage: "/models/urbancruiserhyryder/exterior4.webp",
    thumb: "/models/urbancruiserhyryder/exterior4.webp",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Roof",
    subtitle: "Rails",
    bigImage: "/models/urbancruiserhyryder/exterior5.webp",
    thumb: "/models/urbancruiserhyryder/exterior5.webp",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Sporty Rear",
    subtitle: "Skid Plate",
    bigImage: "/models/urbancruiserhyryder/exterior6.webp",
    thumb: "/models/urbancruiserhyryder/exterior6.webp",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Wide Trapezoidal",
    subtitle: "Lower Grille",
    bigImage: "/models/urbancruiserhyryder/exterior7.webp",
    thumb: "/models/urbancruiserhyryder/exterior7.webp",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Dual-tone",
    subtitle: "Body Colour",
    bigImage: "/models/urbancruiserhyryder/exterior8.webp",
    thumb: "/models/urbancruiserhyryder/exterior8.webp",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Sleek and Dynamic",
    subtitle: "R17 Alloy Wheels",
    bigImage: "/models/urbancruiserhyryder/exterior9.webp",
    thumb: "/models/urbancruiserhyryder/exterior9.webp",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  // {
  //   title: "LED",
  //   subtitle: "Tail Lamps",
  //   bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/led-tail-lamp.jpg",
  //   thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/led-tail-lamp-thumb.jpg",
  //   description:
  //     "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  // },



];
const smartphoneitems: FeatureItem[] = [
  {
    title: "",
    subtitle: "HY On Connectivity",
    bigImage: "/models/urbancruiserhyryder/Smartphone1.webp",
    thumb: "/models/urbancruiserhyryder/Smartphone1.webp",
    description: "",
  },
  {
    title: "Remote Vehicle Ignition",
    subtitle: "HY On Connectivity",
    bigImage: "/models/urbancruiserhyryder/Conectivity2.webp",
    thumb: "/models/urbancruiserhyryder/Conectivity2.webp",
    description: "Start your journey even before you approach your car. Or stop it if the plan changes, with a single tap.",
  },
  {
    title: "Stolen Vehicle Tracker",
    subtitle: "HY On Connectivity",
    bigImage: "/models/urbancruiserhyryder/Smartphone3.webp",
    thumb: "/models/urbancruiserhyryder/Smartphone3.webp",
    description: "Not around your car? No problem. We'll keep you posted on the vehicle health. And in case it's stolen, we'll help you track and immobilise it.",
  },
  {
    title: "Advanced Voice Control",
    subtitle: "HY On Connectivity",
    bigImage: "/models/urbancruiserhyryder/Smartphone4.webp",
    thumb: "/models/urbancruiserhyryder/Smartphone4.webp",
    description: "With Siri on the iPhone, you can remotely access and control your car with just your voice.",
  },
  {
    title: "Smartwatch Connectivity",
    subtitle: "HY On Connectivity",
    bigImage: "/models/urbancruiserhyryder/Smartphone5.webp",
    thumb: "/models/urbancruiserhyryder/Smartphone5.webp",
    description: " The keys to your car, now on your wrist. Compatible with both Apple's watchOS and Android's Wear OS smartwatches.",
  },
  {
    title: "Find My Car",
    subtitle: "HY On Connectivity",
    bigImage: "/models/urbancruiserhyryder/Smartphone5.webp",
    thumb: "/models/urbancruiserhyryder/Smartphone5.webp",
    description: "Can't find your way back to your last parking spot? We'll get you there easily.",
  },
  // {
  //   title: "Fast Charging",
  //   subtitle: "HY On Connectivity",
  //   bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/Find-My-Car.jpg",
  //   thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/Find-My-Car.jpg",
  //   description: "Charge your phone from 0–100% in minutes.",
  // },
];
const frontinterioritems: FeatureItem[] = [
  {
    title: "",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-1.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-1.webp",
    description: "",

  },
  {
    title: "Stunning Black and Brown Interiors",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-2.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-2.webp",
    description: "One step into the cabin, and you'll know the HY life has some awesome experiences lined up for you.",
  },
  {
    title: "Drive Mode Switch",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-3.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-3.webp",
    description: "Go HY on efficiency or HY on performance. It's all in your hands. ",
  },
  {
    title: "Wireless Charging",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-4.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-4.webp",
    description: "Keep your smartphone HY on charge. Stay ready for wherever the roads lead you.",
  },
  {
    title: "Leather Seats with Ventilation",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-5.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-5.webp",
    description: "The HY life is all about the little details. Experience unparalleled comfort with ventilated seats in the front",
  },
  {
    title: "360-degree Camera and View",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-6.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-6.webp",
    description:
      "Enjoy a HY vantage point while navigating tight spaces.",
  },
  {
    title: "Head-up Display",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-7.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-7.webp",
    description:
      "Keep your sights HY for a distraction-free drive. Get all the information you need at eye-level.",
  },
  {
    title: "22.86 cm Smart Playcast Audio",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-8.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-8.webp",
    description:
      "Stay informed, entertained and connected with a HY-tech Smart Playcast infotainment system featuring a 9-inch display, and premium speakers.",
  },
  {
    title: "Tilt &amp; Telescopic Steering",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-9.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-9.webp",
    description:
      "Adjust the steering wheel to best suit your posture and preferences.",
  },
  {
    title: "Auto AC",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-10.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-10.webp",
    description:
      " No more struggling with manual temperature controls. All thanks to automatic climate control.",
  },
  {
    title: "Google Assistant &amp; Siri",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-11.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-11.webp",
    description:
      "Use the voice assistant on your smartphone to stay connected. Compatible with both Google Assistant and Siri.",
  },
  {
    title: "17.78 cm TFT Multi-info Display",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-12.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-12.webp",
    description:
      "Get all the information you need about your ride, right on the instrument cluster.",
  },
  {
    title: "Paddle Shift",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-13.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-13.webp",
    description:
      "Take full control without taking your hands off the wheel,with paddle shifters.",
  },
  {
    title: "Soft-touch Instrument Panel",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-14.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-14.webp",
    description:
      "Experience an awesome cabin built around a lavish soft-touch dashboard. And seating with premium stitch.",
  },
  {
    title: "PM 2.5 Air Filter",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-15.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-15.webp",
    description:
      "Breathe easy. We'll filter out pollutants from the cabin air.",
  },
  {
    title: "Ambient Light (Door Spot and IP Line)",
    subtitle: "HY  on features",
    bigImage: "/models/urbancruiserhyryder/frontinterior-15.webp",
    thumb: "/models/urbancruiserhyryder/frontinterior-15.webp",
    description:
      "Stylish ambient lighting on the door and along the instrument panel line, to uplift your mood.",
  },



];
const rearinterioritems: FeatureItem[] = [
  {
    title: "",
    subtitle: "HY On Comfort",
    bigImage: "/models/urbancruiserhyryder/RearInterior1.webp",
    thumb: "/models/urbancruiserhyryder/RearInterior1.webp",
    description: "",
  },
  {
    title: "Panoramic Roof",
    subtitle: "HY On Comfort",
    bigImage: "/models/urbancruiserhyryder/RearInterior2.webp",
    thumb: "/models/urbancruiserhyryder/RearInterior2.webp",
    description: "Stay HY on feel with a wider view of the sun and stars.",
  },
  {
    title: "Reclining Rear Seat",
    subtitle: "HY On Comfort",
    bigImage: "/models/urbancruiserhyryder/RearInterior3.webp",
    thumb: "/models/urbancruiserhyryder/RearInterior3.webp",
    description: "Relaxation and road trips now go hand-in-hand.",
  },
  {
    title: "Rear AC Vents and USB Ports",
    subtitle: "HY On Comfort",
    bigImage: "/models/urbancruiserhyryder/RearInterior-4.webp",
    thumb: "/models/urbancruiserhyryder/RearInterior-4.webp",
    description: "Stay cool and stay charged up, even in the rear.",
  },
  {
    title: "Ample Legroom and Headroom",
    subtitle: "HY On Comfort",
    bigImage: "/models/urbancruiserhyryder/RearInterior5.webp",
    thumb: "/models/urbancruiserhyryder/RearInterior5.webp",
    description: " All the space you need to stretch on your adventures.",
  },
  {
    title: "60:40 Split Seat",
    subtitle: "HY On Comfort",
    bigImage: "/models/urbancruiserhyryder/RearInterior6.webp",
    thumb: "/models/urbancruiserhyryder/RearInterior6.webp",
    description: "There's always more room to carry your world.",
  },

];
const performanceitems: FeatureItem[] = [
  {
    title: "With Best In Class Fuel Efficiency Of 27.97* km/l",
    subtitle: "HY on performance",
    bigImage: "/models/urbancruiserhyryder/performance-1.webp",
    thumb: "/models/urbancruiserhyryder/performance-1.webp",
    description: "",
  },
  {
    title: "1.5L TNGA Engine | 1.5L K-series with Neo Drive (ISG)",
    subtitle: "HY on performance",
    bigImage: "/models/urbancruiserhyryder/performance-2.webp",
    thumb: "/models/urbancruiserhyryder/performance-2.webp",
    description: "Depending on the variant you choose, the HY life is powered by a TNGA or K-series engine, both 1.5L.",
  },
  {
    title: "Self-charging hybrid electric engine*",
    subtitle: "HY on performance",
    bigImage: "/models/urbancruiserhyryder/performance-3.webp",
    thumb: "/models/urbancruiserhyryder/performance-3.webp",
    description: " Experience the power of hybrid. Experience a new drive.",
  },
  {
    title: "5-speed MT | 6-speed AT | e-Drive",
    subtitle: "HY on performance",
    bigImage: "/models/urbancruiserhyryder/performance-4.webp",
    thumb: "/models/urbancruiserhyryder/performance-4.webp",
    description: "With the all-new Urban Cruiser Hyryder, you get to choose from three transmission modes.",
  },
  {
    title: "1.5L K series engine with E-CNG technology",
    subtitle: "HY on performance",
    bigImage: "/models/urbancruiserhyryder/performance-5.webp",
    thumb: "/models/urbancruiserhyryder/performance-5.webp",
    description: " *Fuel efficiency of 26.1km/kg.*Under the process of certification under Rule 115 of CMVR 1989",

  },


];
const saftyitems: FeatureItem[] = [
  {
    title: "",
    subtitle: "HY on safety",
    bigImage: "/models/urbancruiserhyryder/safety-1.webp",
    thumb: "/models/urbancruiserhyryder/safety-1.webp",
    description: "",
  },
  {
    title: "6 Units Airbags",
    subtitle: "HY on safety",
    bigImage: "/models/urbancruiserhyryder/safety-2.webp",
    thumb: "/models/urbancruiserhyryder/safety-2.webp",
    description: "The HY life is all about feeling safe in every seat. All thanks to a total of 6 Units airbags including front,passenger, side and curtain airbags.",
  },
  {
    title: "Front Seat PT/FL",
    subtitle: "HY on safety",
    bigImage: "/models/urbancruiserhyryder/safety-3.webp",
    thumb: "/models/urbancruiserhyryder/safety-3.webp",
    description: " All the occupants in the front get the added safety of seat belt pretensioner and force limiter.",
  },
  {
    title: "Advanced Body Structure",
    subtitle: "HY on safety",
    bigImage: "/models/urbancruiserhyryder/safety-4.webp",
    thumb: "/models/urbancruiserhyryder/safety-4.webp",
    description: " The all-new Urban Cruiser Hyryder is built on a frame capable of dispersing impact energy in the event of collision. All while ensuring a sturdy cabin.",
  },
  {
    title: "Cruise Control",
    subtitle: "HY on performance",
    bigImage: "/models/urbancruiserhyryder/safety-5.webp",
    thumb: "/models/urbancruiserhyryder/safety-5.webp",
    description: " Command open roads without having to put your foot down.",

  },


];
export default function hiluxPage() {


  return (
    <>
      <GlanzaHero
        imageUrl="/models/urbancruiserhyryder/urbancruiserhyryder1.webp"
        alt="Toyota Glanza"
      />
      <GlanzaHero
        imageUrl="/models/urbancruiserhyryder/urbancruiserhyryder2.webp"
        alt="Toyota Glanza"
      />
      <HyTimeBanner {...hyTimeData} />
      {/* Right Image Layout */}
      {/* 1️⃣ Cards LEFT | Image RIGHT */}
      <HyMilesWinners
        title="HY MILES"
        subtitle="CHALLENGE WINNER"
        winners={winners}
        bigImage="/models/urbancruiserhyryder/urbancruiserhyryder5.webp"
        layout="right"
        cardWidth={250}
        cardsToShow={3}
        overlap={50}
      />

      {/* ================= PERFORMANCE FEATURE ================= */}
      <PerformanceFeature
        headingTop="Exterior"
        headingBottom="Features"
        layout="image-left"
        items={eperformanceItems} // ✅ Use the correct variable
      />
      {/* LEFT CARDS | RIGHT IMAGE */}
      <PerformanceFeature
        headingTop="Smartphone"
        headingBottom="Features"
        items={smartphoneitems}
        layout="image-right"
      />
      <GlanzaHero
        imageUrl="/models/urbancruiserhyryder/banner-hy-life-new.webp"
        alt="Toyota Glanza"
      />

      <PerformanceFeature
        headingTop="Front Interior"
        headingBottom="Features"
        layout="image-left"
        items={frontinterioritems} // ✅ Use the correct variable
      />
      <PerformanceFeature
        headingTop="Rear Interior"
        headingBottom="Features"
        items={rearinterioritems}
        layout="image-right"
      />
      <GlanzaHero
        imageUrl="/models/urbancruiserhyryder/banner.webp"
        alt="Toyota Glanza"
      />

      <PerformanceFeature
        headingTop="Performance"
        headingBottom="Features"
        layout="image-left"
        items={performanceitems} // ✅ Use the correct variable
      />
      <PerformanceFeature
        headingTop="Safety"
        headingBottom="Features"
        layout="image-right"
        items={saftyitems} // ✅ Use the correct variable
      />
      <CarCustomizer />
      <AccessoriesPage />
      <GlanzaHero
        imageUrl="/models/urbancruiserhyryder/bannerexcitement.webp"
        alt="Toyota Glanza"
      />

      <Technical />

      <HybridPage />
      {/* <SideHero
  imageUrl="https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/uch-ebook.jpg"
  alt="Glanza Ebook"
/> */}
      <EBookBanner />
    </>

  );
}
