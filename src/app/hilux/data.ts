import { label } from "framer-motion/client";
import { Blocks } from "lucide-react";

export const hiluxCtaData = {
  disclaimer: [
    "Exterior features shown are not standard items and are available as Toyota Genuine Accessories items. Few accessories and attachments other than Toyota Genuine Accessories shown here are for purely for visual presentation and are not manufactured by TKM.",
    "TKM accepts no liability for any errors or omissions, on behalf of third party. Hilux is a N1 category vehicle and will come with reflective strips in the front & rear of the vehicle. Actual features and specifications of the vehicle may vary from the visuals shown herein. TKM reserves the right to alter, add or remove any feature and/or specification, without prior notice."
  ],

  brochureUrl: "/hilux/e-brochure-hilux.pdf",
  ebookUrl: "https://www.toyotabharat.com/online-booking/?model-id=17",

  image: {
    src: "/hilux/e-book-banner.webp",
    alt: ""
  }
};




export const specificationsData = [
  {
    title: "ENGINE",
    blocks: [
      {
        type: "table",
        rows: [
          { label: "Displacement", value: "2755 cm3" },
          { label: "Fuel Type", value: "Diesel" },
          { label: "Max. Output", value: "STD MT & High MT - 150 kW [204 PS] (MT) @ 3400 rpm High AT - 150 kW [204 PS] @ 3000-3400 rpm" },
          { label: "Max. Torque", value: "STD MT & High MT - 420 Nm (MT) @ 1400 - 3400 rpm High AT - 500 Nm @ 1600 - 2800 rpm" },
          { label: "Cylinder Nos. & Layout", value: "4 & Inline" },
          { label: "Emission Standard", value: "BS VI" },
          { label: "Drive Type", value: "4WDAuto Limited Slip Differential" },
         
        ],
      },
    ],
  },

  {
    title: "TRANSMISSION",
    blocks: [
      {
        type: "table",
        rows: [
          { label: "Type", value: "6 MT / 6 AT" },
          { label: "STD MT", value: "Transmission 6MT with iMT [Intelligent Manual Transmission]" },
          { label: "High MT", value: "Transmission 6MT with iMT [Intelligent Manual Transmission]" },
          { label: "High AT", value: "6AT [Sequential Shift + Shiftlock]" },
          
        ],
      },
    ],
  },

  {
    title: "DIMENSIONS & WEIGHT",
    blocks: [
      {
        type: "table",
        rows: [
          { label: "Overall [L X W X H]", value: "5325mm X 1855mm X 1815mm" },
          { label: "Wheel Base", value: "3085 mm" },
          { label: "Min. Turning Radius", value: "6400 mm" },
          { label: "Fuel Tank Capacity", value: "80 Litres" },
          {lable:"Seating Capacity", value:"5-seater"},
          {lable:"Gross Vehicle Weight", value:"2910 kg"},
          {lable:"Payload Capacitys", value:"470 kg"},
          
        ],
      },
    ],
  },

  {
    title: "CHASSIS",
    blocks: [
      {
        type: "table",
        rows: [
          { label: "Front", value: "Double Wishbone" },
          { label: "Rear", value: "Leaf spring rigid axle" },
          
        ],
      },
    ],
  },
{
    title: "STABILIZER",
    blocks: [
      {
        type: "table",
        rows: [
          { label: "Front", value: "Pitch & Bounce Control" },
         
          
        ],
      },
    ],
  },

  {
    title: "BRAKES",
    blocks: [
      {
        type: "table",
        rows: [
          { label: "Front", value: "Ventilated Discs" },
         {label:"Rear", value:"Drum"},
          
        ],
      },
    ],
  },


  {
    title: "WHEEL & TYRE",
    blocks: [
      {
        type: "table",
        rows: [
          { label: "STD MT", value: "Bridgestone, 265/65R17 112S, Radial, Tubeless" },
         {label:"High MT & High AT", value:"Bridgestone, 265/60R18 110H, Radial, Tubeless"},
          
        ],
      },
    ],
  },

  
{
  title: "EXTERIOR",
  blocks: [

    // 🔹 Bullet Block
    {
      type: "bullet",
      items: [
        ["New design Front Bumper W/ Piano black accents"],
        ["SMART Entry and Push Start/Stop"],
        ["Chrome Plated Door Handles"],
        ["LED Front Fog Lamp"],
        ["Rear Fog Lamp"],
        ["Aero-Stabilising Fins on ORVM Base and Rear Combination Lamps"],
      ],
    },

    // 🔹 Table Block
    {
      type: "table",
      rows: [
        {
          label: "STD MT – Diesel",
          value: "High MT and High AT – Diesel",
        },
        {
          label: "Dusk Sensing Halogen headlamps",
          value: "Dusk Sensing LED Headlamps with LED Daytime Running Lamp W/ Integrated LED turn indicators",
        },
        {
          label: "Halogen Rear combination Lamps",
          value: "LED Rear Combination Lamps",
        },
        {
          label: "Bold New Trapezoid-shaped grille with Silver surround",
          value: "Bold Piano Black Trapezoidal grille with Chrome surround",
        },
          {
          label: "STEEL STEP PAINT Rear Bumper",
          value: "STEEL STEP CHROME Rear Bumper",
        },
          {
          label: "Machine finish alloy wheels",
          value: "Super Chrome alloy wheel design",
        },
          {
          label: "Electrically Adjustable, with Side Turn Indicators",
          value: "Chrome, Electrically Adjustable, Retractable Side Mirrors with Side Turn Indicators",
        },
        {
          lable:"_",
          value:"Chrome Beltline",
        },
      ],
    },

  ],
}
,

  
];

