import GlanzaHero from "../glanza/GlanzaHero";
import SideHero from "../glanza/SideHero";
import AccessoriesPage from "./AccessoriesPage";
import CarCustomizer from "./CarCustomizer";
import EBookBanner from "./EBookbanner";
import HybridPage from "./HybridPage";
import HyMilesWinners from "./HyMilesWinners";
import HyTimeBanner from "./HyTimeBanner";
// import ExteriorFeatures from "./PerformanceFeature";
import PerformanceFeature, { FeatureItem } from "./PerformanceFeature";
import Technical from "./Technical";


export interface Winner {
  name: string;
  mileage: string;
  drive: string;
  region: string;
  img: string;
}
export const hyTimeData = {
  leftImage:
    "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/banner-hy-time-v2-new.jpg",

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
    "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/img-uch.png",
};

const winners: Winner[] = [
  { name: "Mr. Rajashekhar N Koti", mileage: "23.57 km/l", drive: "NEODRIVE", region: "South", img: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/winners/ajeya-kumar-vivatoyota-270x280.jpg" },
   { name: "Mr. Ravi Kumbath", mileage: "23.15 km/l", drive: "NEODRIVE", region: "South", img: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/winners/hy-miles-ravi-ravindu-270x280.jpg" },
   { name: "Mr. Shashidara S Bapat", mileage: "24.89 km/l", drive: "NEODRIVE", region: "South", img: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/winners/ajeya-kumar-vivatoyota-270x280.jpg" },
  { name: "Mr. Abhinandan Kapoor", mileage: "29.25 km/l", drive: "NEODRIVE", region: "North", img: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/winners/north-ijm-toyota-270x280.jpg" },
  { name: "Mr. Bikram Singh", mileage: "26.98 km/l", drive: "HYBRID", region: "East", img: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/winners/north02-ijm-toyota-270x280.jpg" },
  { name: "Mr. Dakshesh Shah", mileage: "20.62 km/l", drive: "NEODRIVE", region: "West", img: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/winners/ahmedabad-270x280.jpg" },
];

const eperformanceItems: FeatureItem[] = [
  {
    title: "",
    subtitle: "on style",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/exterior-1.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/exterior-1-thumb.jpg",
    description:"",
  
  },
  {
    title: "Unique Crystal Acrylic Grille",
    subtitle: "with Chrome Garnish",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/unique-crystal-acrylic-upper-grille.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/unique-crystal-acrylic-upper-grille-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before. ",
  },
  {
    title: "LED Projector",
    subtitle: "Headlamps",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/led-projector-headlamp.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/led-projector-headlamp-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Twin LED Daytime",
    subtitle: "Running Lamps",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/twin-led-daytime-running-lamps.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/twin-led-daytime-running-lamps-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Roof",
    subtitle: "Rails",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/panoramic-roof.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/panoramic-roof-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Sporty Rear",
    subtitle: "Skid Plate",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/rear-skid-plate.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/rear-skid-plate-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Wide Trapezoidal",
    subtitle: "Lower Grille",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/wide-trapezoidal-lower-grille.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/wide-trapezoidal-lower-grille-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Dual-tone",
    subtitle: "Body Colour",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/dual-tone-body-colour.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/dual-tone-body-colour-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "Sleek and Dynamic",
    subtitle: "R17 Alloy Wheels",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/sleek-&-dynamic-r-17-alloy-wheels.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/sleek-&-dynamic-r-17-alloy-wheels-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },
  {
    title: "LED",
    subtitle: "Tail Lamps",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/led-tail-lamp.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/exterior/led-tail-lamp-thumb.jpg",
    description:
      "The all-new Urban Cruiser Hyryder keeps you driving in style with a contemporary design, sharp features and bold stance. The smart choice has never looked this awesome before.",
  },

 
  
];
const smartphoneitems: FeatureItem[] = [
   {
    title: "",
    subtitle: "HY On Connectivity",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/conectivity-1-new.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/conectivity-1-new.jpg",
    description: "",
  },
  {
    title: "Remote Vehicle Ignition",
    subtitle: "HY On Connectivity",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/Remote-vehicle-ignition.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/Remote-vehicle-ignition.jpg",
    description: "Start your journey even before you approach your car. Or stop it if the plan changes, with a single tap.",
  },
  {
    title: "Stolen Vehicle Tracker",
    subtitle: "HY On Connectivity",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/Remote-Ac-Control.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/Remote-Ac-Control.jpg",
    description: "Not around your car? No problem. We'll keep you posted on the vehicle health. And in case it's stolen, we'll help you track and immobilise it.",
  },
  {
    title: "Advanced Voice Control",
    subtitle: "HY On Connectivity",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/stolen-vehicle-tracking.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/stolen-vehicle-tracking.jpg",
    description: "With Siri on the iPhone, you can remotely access and control your car with just your voice.",
  },
  {
    title: "Smartwatch Connectivity",
    subtitle: "HY On Connectivity",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/Advanced-Voice-Control.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/Advanced-Voice-Control.jpg",
    description: " The keys to your car, now on your wrist. Compatible with both Apple's watchOS and Android's Wear OS smartwatches.",
  },
  {
    title: "Find My Car",
    subtitle: "HY On Connectivity",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/smartwatch-connectivity.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/conectivity/smartwatch-connectivity.jpg",
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
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/front-interior-1-new.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/front-interior-1-new.jpg",
    description:"",
  
  },
  {
    title: "Stunning Black and Brown Interiors",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/Stunning-Black-and-Brown-Interiors.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/Stunning-Black-and-Brown-Interiors.jpg",
    description:"One step into the cabin, and you'll know the HY life has some awesome experiences lined up for you.",
  },
  {
    title: "Drive Mode Switch",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/DRIVE-MODE-SWITCH-(THS-AND-AWD).jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/DRIVE-MODE-SWITCH-(THS-AND-AWD).jpg",
    description:"Go HY on efficiency or HY on performance. It's all in your hands. ",
  },
  {
    title: "Wireless Charging",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/29062022Toyota-D22-WebsiteFeature-wireless-charging2.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/29062022Toyota-D22-WebsiteFeature-wireless-charging2.jpg",
    description:"Keep your smartphone HY on charge. Stay ready for wherever the roads lead you.",
  },
  {
    title: "Leather Seats with Ventilation",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/hyryder-ventilated-seats.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/hyryder-ventilated-seats.jpg",
    description:"The HY life is all about the little details. Experience unparalleled comfort with ventilated seats in the front",
  },
  {
    title: "360-degree Camera and View",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/360-DEGREE-CAMERA.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/360-DEGREE-CAMERA.jpg",
    description:
      "Enjoy a HY vantage point while navigating tight spaces.",
  },
  {
    title: "Head-up Display",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/HEAD-UP-DISPLAY.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/HEAD-UP-DISPLAY.jpg",
    description:
      "Keep your sights HY for a distraction-free drive. Get all the information you need at eye-level.",
  },
  {
    title: "22.86 cm Smart Playcast Audio",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/9-INCH-SMART-PLAY-CAST-AUDIO.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/9-INCH-SMART-PLAY-CAST-AUDIO.jpg",
    description:
      "Stay informed, entertained and connected with a HY-tech Smart Playcast infotainment system featuring a 9-inch display, and premium speakers.",
  },
  {
    title: "Tilt &amp; Telescopic Steering",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/Tilt-&-Telescopic-Steering.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/Tilt-&-Telescopic-Steering.jpg",
    description:
      "Adjust the steering wheel to best suit your posture and preferences.",
  },
  {
    title: "Auto AC",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/Auto-AC.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/Auto-AC.jpg",
    description:
      " No more struggling with manual temperature controls. All thanks to automatic climate control.",
  },
  {
    title: "Google Assistant &amp; Siri",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/Connectivity-Google-Assistant-and-Siri-Compatibility_980x650px.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/Connectivity-Google-Assistant-and-Siri-Compatibility_980x650px.jpg",
    description:
      "Use the voice assistant on your smartphone to stay connected. Compatible with both Google Assistant and Siri.",
  },
  {
    title: "17.78 cm TFT Multi-info Display",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/29062022Toyota-D22-WebsiteFeature-7-inch-2.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/29062022Toyota-D22-WebsiteFeature-7-inch-2.jpg",
    description:
      "Get all the information you need about your ride, right on the instrument cluster.",
  },
  {
    title: "Paddle Shift",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/paddle-shift.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/paddle-shift.jpg",
    description:
      "Take full control without taking your hands off the wheel,with paddle shifters.",
  },
  {
    title: "Soft-touch Instrument Panel",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/paddle-shift.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/paddle-shift.jpg",
    description:
      "Experience an awesome cabin built around a lavish soft-touch dashboard. And seating with premium stitch.",
  },
  {
    title: "PM 2.5 Air Filter",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/PM-2.5-Air-Filter.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/PM-2.5-Air-Filter.jpg",
    description:
      "Breathe easy. We'll filter out pollutants from the cabin air.",
  },
  {
    title: "Ambient Light (Door Spot and IP Line)",
    subtitle: "HY  on features",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/ambient-light.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/ambient-light.jpg",
    description:
      "Stylish ambient lighting on the door and along the instrument panel line, to uplift your mood.",
  },

 
  
];
const rearinterioritems: FeatureItem[] = [
   {
    title: "",
    subtitle: "HY On Comfort",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/rear-interior-1-new.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/rear-interior-1-new.jpg",
    description: "",
  },
  {
    title: "Panoramic Roof",
    subtitle: "HY On Comfort",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/panoramic-roof.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/panoramic-roof.jpg",
    description: "Stay HY on feel with a wider view of the sun and stars.",
  },
  {
    title: "Reclining Rear Seat",
    subtitle: "HY On Comfort",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/RECLINING-REAR-SEAT.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/RECLINING-REAR-SEAT.jpg",
    description: "Relaxation and road trips now go hand-in-hand.",
  },
  {
    title: "Rear AC Vents and USB Ports",
    subtitle: "HY On Comfort",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/REAR-AC-VENTS-&-USB-PORTS.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/REAR-AC-VENTS-&-USB-PORTS.jpg",
    description: "Stay cool and stay charged up, even in the rear.",
  },
  {
    title: "Ample Legroom and Headroom",
    subtitle: "HY On Comfort",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/29062022Toyota-D22-legroom-headspace2.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/29062022Toyota-D22-legroom-headspace2.jpg",
    description: " All the space you need to stretch on your adventures.",
  },
  {
    title: "60:40 Split Seat",
    subtitle: "HY On Comfort",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/60-40-SPLIT-SEAT.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/interior/60-40-SPLIT-SEAT.jpg",
    description: "There's always more room to carry your world.",
  },
  
];
const performanceitems: FeatureItem[] = [
   {
    title: "With Best In Class Fuel Efficiency Of 27.97* km/l",
    subtitle: "HY on performance",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/performance-1-new.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/performance-1-new.jpg",
    description: "",
  },
  {
    title: "1.5L TNGA Engine | 1.5L K-series with Neo Drive (ISG)",
    subtitle: "HY on performance",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/1.5L-TNGA-Engine-1.5L-K-series.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/1.5L-TNGA-Engine-1.5L-K-series.jpg",
    description: "Depending on the variant you choose, the HY life is powered by a TNGA or K-series engine, both 1.5L.",
  },
  {
    title: "Self-charging hybrid electric engine*",
    subtitle: "HY on performance",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/HY-on-Power.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/HY-on-Power.jpg",
    description: " Experience the power of hybrid. Experience a new drive.",
  },
  {
    title: "5-speed MT | 6-speed AT | e-Drive",
    subtitle: "HY on performance",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/5-speed-MT-6-speed-AT.jpg",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/5-speed-MT-6-speed-AT.jpg",
    description: "With the all-new Urban Cruiser Hyryder, you get to choose from three transmission modes.",
  },
  {
    title: "1.5L K series engine with E-CNG technology",
    subtitle: "HY on performance",
    bigImage: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/performance-4-big.png",
    thumb: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/performance/performance-4-big.png",
    description: " *Fuel efficiency of 26.1km/kg.*Under the process of certification under Rule 115 of CMVR 1989",
    
  },
  
  
];
const saftyitems: FeatureItem[] = [
   {
    title: "",
    subtitle: "HY on safety",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/safety-1-new.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/safety-1-new.jpg",
    description: "",
  },
  {
    title: "6 Units Airbags",
    subtitle: "HY on safety",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/6-Airbags.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/6-Airbags.jpg",
    description: "The HY life is all about feeling safe in every seat. All thanks to a total of 6 Units airbags including front,passenger, side and curtain airbags.",
  },
  {
    title: "Front Seat PT/FL",
    subtitle: "HY on safety",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/front-seat-ptfl.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/front-seat-ptfl.jpg",
    description: " All the occupants in the front get the added safety of seat belt pretensioner and force limiter.",
  },
  {
    title: "Advanced Body Structure",
    subtitle: "HY on safety",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/TECT-BODY.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/TECT-BODY.jpg",
    description: " The all-new Urban Cruiser Hyryder is built on a frame capable of dispersing impact energy in the event of collision. All while ensuring a sturdy cabin.",
  },
  {
    title: "Cruise Control",
    subtitle: "HY on performance",
    bigImage: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/cruse-control.jpg",
    thumb: "https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/safety/cruse-control.jpg",
    description: " Command open roads without having to put your foot down.",
    
  },
  
  
];
export default function hiluxPage() {
  

  return (
    <>
      <GlanzaHero
      imageUrl="https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/aero-edition-uch-1920x807.jpg"
      alt="Toyota Glanza"
    />
    <GlanzaHero
      imageUrl="https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/img-virtual-showroom-v2.jpg"
      alt="Toyota Glanza"
    />
      <HyTimeBanner {...hyTimeData}/>
      {/* Right Image Layout */}
      {/* 1️⃣ Cards LEFT | Image RIGHT */}
      <HyMilesWinners
        title="HY MILES"
        subtitle="CHALLENGE WINNER"
        winners={winners}
        bigImage="https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/hy-miles-banner-980x650.jpg"
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
      imageUrl="https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/banner-hy-life-new.jpg"
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
      imageUrl="https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/banner-hy-life-hybrid-with-logo-new.jpg"
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
      <CarCustomizer/>
      <AccessoriesPage/>
      <GlanzaHero
      imageUrl="https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/banner-excitement-efficiency-new.jpg"
      alt="Toyota Glanza"
    />
    
      <Technical/>

      <HybridPage />
      {/* <SideHero
  imageUrl="https://static.toyotabharat.com/images/showroom/urbancruiser-hyryder/uch-ebook.jpg"
  alt="Glanza Ebook"
/> */}
<EBookBanner/>
      </>
    
  );
}
