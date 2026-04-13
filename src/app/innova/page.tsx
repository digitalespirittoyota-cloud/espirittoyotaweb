

"use client";

import GlanzaHero from "../glanza/GlanzaHero";
import HyTimeBanner from "../urbancruiserhyryder/HyTimeBanner";
import ArticlesSection from "./ArticlesSection";
import CarSpecs from "./CarSpecs";
import ExteriorOverview from "./ExteriorOverview";
import HyColors from "./HyColors";
import HyPerformance from "./HyPerformance";
import InnovaHeroImage from "./InnovaHeroImage";
import InnovaVideoHero from "./InnovaVideoHero";
import SafetyFeatures from "./SafetyFeatures";
export const hyBannerData = {
  leftImage:
    "/models/innovahycross/hycross2.webp",

  stats: [
    "The beginning",
    "of a New HY",
  ],

  description: [
    "Now, it's HY time you experienced this legacy in an advanced self-charging hybrid electric SUV.",
    "The reliability of a petrol engine meets the performance of an electric motor.",
  ],

  introText: "Toyota Urban Cruiser Hyryder.",

  carImage:
    "/models/innovahycross/hycross3.webp",
};
const hycrossArticles = [
  { title: "HyCross first drive review", img: "/models/innovahycross/hycross29.webp" },
  { title: "HyCross detailed review", img: "/models/innovahycross/hycross30.webp" },
  { title: "Another HyCross article", img: "/models/innovahycross/hycross31.webp" },
];

const innovaArticles = [
  { title: "Toyota Innova HyCross Hybrid First Drive | Safe Cover Drive or Over The Stadium?", img: "/models/innovahycross/hycross32.webp" },
  { title: "Toyota Innova HyCross | First Drive Review | We Talk Style, Features, Driving, Hybrid | PowerDrift", img: "/models/innovahycross/hycross32.webp" },
  { title: "Toyota Innova Hycross review - India's favourite MPV reborn | First Drive | Autocar India", img: "/models/innovahycross/hycross33.webp" },
];

export default function Page() {
  return (
    <>
      <GlanzaHero
      imageUrl="/models/innovahycross/hycross1.webp"
      alt="Toyota Glanza"
    />
      <HyTimeBanner {...hyBannerData}/>
      <InnovaVideoHero/>
      <ExteriorOverview
        headingTop="MY NEW HY"
        headingBottom="of SUV styling"
        primaryImage="/models/innovahycross/hycross4.webp"
        secondaryImage="/models/innovahycross/hycross5.webp"
        buttonText="Explore Styling"
        buttonLink="https://www.toyotabharat.com/showroom/innova/features-exterior.html"
        description="The new Innova HyCross has elevated its design to a new HY. The muscular SUV stance and stature of the new Innova HyCross is accentuated by its glamorous yet tough Front Grille and a raised Bonnet Line heralding a new era. Not only the frontage, the new Innova HyCross is crafted with strong character lines & fender flares to amplify the SUV presence from any angle."
      />
      <HyPerformance/>
      <ExteriorOverview
        headingTop="MY NEW HY"
        headingBottom="of Plush Comfort"
        primaryImage="/models/innovahycross/hycross8.webp"
        secondaryImage="/models/innovahycross/hycross9.webp"
        buttonText="Explore Comfort Features"
        buttonLink="https://www.toyotabharat.com/showroom/innova/features-comfort.html"
        description="The new Innova HyCross attains a new HY when it comes to comfort. The first-in-segment, Powered Ottoman Seats with Long Slide and Panoramic Sunroof with Mood Lighting and Roof Mounted A/C Vents takes comfort notches higher."
      />

      <ExteriorOverview
        headingTop="MY NEW HY"
        headingBottom="of Enhanced Convenience"
        primaryImage="/models/innovahycross/hycross10.webp"
        buttonText="Explore Connected Features"
        buttonLink="https://www.toyotabharat.com/showroom/innova/features-connected-services.html"
        description="Take convenience to a new HY with advanced connected features like Remote Vehicle Ignition, Smartwatch Connectivity, Stolen Vehicle Tracker, Find My Car, Remote Windows, Trunk Close and the like. Empower yourself to control almost every aspect of the car."
      />
      <InnovaHeroImage 
      imageUrl="/models/innovahycross/hycross11.webp"
      alt="Toyota Innova HyCross"/>
      <SafetyFeatures/>
      <InnovaHeroImage 
      imageUrl="/models/innovahycross/hycross15.webp"
      alt="Toyota Innova HyCross"/>
      <CarSpecs/>
      <HyColors/>
       <ArticlesSection data={hycrossArticles} title=" Articles" />
      <ArticlesSection data={innovaArticles} title="Reviews" />
    </>
  );
}
