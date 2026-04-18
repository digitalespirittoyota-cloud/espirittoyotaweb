import { label } from "framer-motion/client";

export const legacyData = {
  title: "Timeless legacy",
  paragraphs: [
    "The name LAND CRUISER evokes strong emotions. Terms like 'epic' and 'phenomenal' are often associated with it. That said, mere words can hardly capture the larger-than-life image the LAND CRUISER has built over the years.",
    "The chronicles of automotive history are filled with legendary tales of its exploits and escapades. Everything about it has become part of popular folklore. So revered is the Land Cruiser that it rightfully earns its place on the Mount Rushmore of iconic automobiles.",
  ],
};





export type CarSlide = {
  id: number;
  image: string;
  alt: string;
};

export const carSliderData: CarSlide[] = [
  {
    id: 1,
    image: "/lc300/lagacy01.webp",
    alt: "Car 1",
  },
  {
    id: 2,
    image: "/lc300/lagacy02.webp",
    alt: "Car 2",
  },
  {
    id: 3,
    image: "/lc300/lagacy03.webp",
    alt: "Car 3",
  },
  {
    id: 4,
    image: "/lc300/lagacy04.webp",
    alt: "Car 4",
  },
  {
    id: 5,
    image: "/lc300/lagacy05.webp",
    alt: "Car 3",
  },
  {
    id: 6,
    image: "/lc300/lagacy06.webp",
    alt: "Car 4",
  },
  {
    id: 7,
    image: "/lc300/lagacy07.webp",
    alt: "Car 4",
  },
  {
    id: 8,
    image: "/lc300/lagacy08.webp",
    alt: "Car 4",
  },
  {
    id: 9,
    image: "/lc300/lagacy09.webp",
    alt: "Car 4",
  },
];


export const Builtlikeatank = {
  title: "Built Like A Tank",
  paragraphs: [
    "The Land Cruiser is armored to the teeth like a true conqueror. Designed to dominate and built to conquer any terrain, its robust structure features a powerful door cross-section, a strong horizontal axis, and seamlessly interlocking fenders—all of which embody the strength of a full-fledged SUV.",
    "",
  ],
};




export const slides = [
  {
    title: "Captivating Frontline",
    description:
      "Design signature with sequential turn indicators and illuminated DRLs.",
    image: "/images/frontline.jpg",
  },
  {
    title: "Bold Side Profile",
    description:
      "Strong character lines with commanding road presence.",
    image: "/images/side.jpg",
  },
  {
    title: "Premium Rear Design",
    description:
      "Sleek LED tail lamps with modern styling.",
    image: "/images/rear.jpg",
  },
  {
    title: "Refined Details",
    description:
      "Every detail crafted for sophistication.",
    image: "/images/detail.jpg",
  },
];




export const Fingertipsdata = {
  title: "World At your\n Finger tips",
  paragraphs: [
    "Step inside the Land Cruiser 300 and experience a world of unmatched luxury and comfort. Every detail has been meticulously crafted to provide a premium driving experience.",
    "",
  ],
};



export type ToyotaSlide = {
  title: string;
  desc: string;
  img: string;
};

export const toyotaCarouselSlides: ToyotaSlide[] = [
  {
    title: "Captivating Frontline",
    desc: "Design signature with sequential turn indicators and illuminated DRLs.",
    img: "/lc300/lc300-ext-head-lights-desktop-900x600.webp",
  },
  {
    title: "Premium Body Coating",
    desc: "Highlight your overwhelming presence with a coating of rich gloss",
    img: "/lc300/lc300-ext-body-desktop.webp",
  },
  {
    title: "Stunning Alloys",
    desc: "50.8 cm Alloy wheel expresses the dignity and distinctive presence.",
    img: "/lc300/lc300-ext-wheel-desktop-900x600.webp",
  },
  {
    title: "Astounding Rear End",
    desc: "High-grade rear combination lamps with sequential turn indicators.",
    img: "/lc300/lc300-ext-rear-desktop-900x600.webp",
  },
];




export const Slides2: ToyotaSlide[] = [
  {
    title: "Drive Modes",
    desc: "Enhances driving pleasure with 5 N Modes + Customised drive modes.",
    img: "/lc300/lc300-int-drive-mode-desktop-900x600.webp",
  },
  {
    title: "4 N Zone Air Conditioning",
    desc: "The cool air conditioning cools the whole cabin of the Land Cruiser with large vents even in the rear.",
    img: "/lc300/lc300-int-ac-all-desktop-900x600.webp",
  },
  {
    title: "TNGA-F Platform",
    desc: " Excellent ride comfort and handling ability along with exceptional off-road stability.",
    img: "/lc300/lc300-int-body-desktop-900x600.webp",
  },
];








export const colordata = {
  title: "Colours that\n Reflect Character",
  paragraphs: [
    "The colours of the Land Cruiser are not just a few shades put together—they're carefully curated to reflect its indomitable character and untamed individuality.",
    "",
  ],
};




export type GRInteriorSectionData = {
  imageSrc: string;
  imageAlt?: string;
  imagePosition: "left" | "right";
  sections: {
    title: string;
    description: string;
  }[];
};

export const grInteriorData: GRInteriorSectionData[] = [
  {
    imageSrc: "/lc300/lc300-grs-04-900x600.webp",
    imageAlt: "Toyota GR Sport Interior",
    imagePosition: "right",
    sections: [
      {
        title: "CROWNED WITH GR SPORT LOGO",
        description:
          "Throughout the cabin you’ll and links to the spirit Toyota’s motorsport legacy like a carbon look GR Sport steering wheel and a GR Sport logo adorned key plate.",
      },
      {
        title: "RACE BRED DESIGN",
        description:
          "Everywhere you look the Land Cruiser GR Sport is a winner. Taking cues from the world of motorsport, of legendary desert races and rally stages you’ll and spartan finishes and carbon bre look trim.",
      },
    ],
  },

  {
    imageSrc: "/lc300/lc300-grs-03-900x600.webp",
    imageAlt: "GR Sport Driver Cabin",
    imagePosition: "left",
    sections: [
      {
        title: "Suspension",
        description:
          "The new Land Cruiser GR Sport features optimized spring constants and for outstanding steering stability. It is also equipped with a significantly lengthened suspension stroke and the longest wheel articulation of any generation in the series.",
      },
      {
        title: "Electric Different Lock(Front)",
        description:
          "The Land Cruiser GR Sport is equipped with both front and rear electronic deferential locks, contributing to improved performance in a variety of on-road environments.",
      },
    ],
  },
];




export const Barreddata = {
  title: "No Holds Barred",
  paragraphs: [
    "The Land Cruiser is a testament to excellence, staying true to its promises. It knows only one thing—to rule. Its megalithic exterior only amplifies its presence. No bling, no frills—yet undeniably flamboyant.",
    "",
  ],
};







export const Slides3: ToyotaSlide[] = [
  {
    title: "Powerful 0.00335m³ (3.3L)V6 Diesel Engine",
    desc: "Ravage through even the most impossible terrain.",
    img: "/lc300/lc300-engine-01-900x600 (1).webp",
  },
  {
    title: "10 N Speed Automatic Transmission",
    desc: "Takes you where nobody has tread before with ease.",
    img: "/lc300/lc300-engine-02-900x600.webp",
  },

];




export const suspensiondata = {
  title: "Suspension Mastery",
  paragraphs: [
    "Experience unparalleled comfort and control with the advanced suspension system of the Land Cruiser 300.",
    "",
  ],
};



export const Slides4: ToyotaSlide[] = [
  {
    title: "Advance Suspension",
    desc: "The adaptive suspension system ensures superior handling and comfort on any terrain.",
    img: "/lc300/lc300-awd-02-900x600.webp",
  },
  {
    title: "Unmatched Comfort",
    desc: "Designed to absorb shocks and provide a smooth ride. even on the toughest terrains.",
    img: "/lc300/lc300-tarrain-03-900x600.webp",
  },

];



export type SafetyFeature = {
  title: string;
  subtitle: string;
  desc: string;
};

export const safetyFeatures: SafetyFeature[] = [
  {
    title: "PCS",
    subtitle: "(Pre-Collision System)",
    desc: "that helps avoid a collision or reduce damage",
  },
  {
    title: "LTA",
    subtitle: "(Lane Tracing Assist)",
    desc: "For enhanced lane-keeping",
  },
  {
    title: "DRCC",
    subtitle: "(Dynamic Radar Cruise Control)",
    desc: "with full-speed range with increased convenience",
  },
  {
    title: "LDA",
    subtitle: "(Lane departure alert)",
    desc: "for alert the driver and gentle corrective steering to keep in the lane",
  },
  {
    title: "AHS",
    subtitle: "Adaptive High-Beam System & AHB (Automatic High Beam)",
    desc: "for Automated High/Low beam operations and Allows enhancing nighttime visibility",
  },
];



export const Dimensionsdata = {
  title: "Dimensions",
  paragraphs: [
    "Experience unparalleled comfort and control with the advanced suspension system of the Land Cruiser 300.",
    "",
  ],
};







export const variants = [
  { id: "lc", name: "LC300" }, // ye label column hai
  { id: "zx", name: "ZX" },
  { id: "grs", name: "GRS" },
];

export const specificationsData = [
  {
    title: "Engine",
    items: [
      {
        label: "Type",
        value: {
          zx: "V6 0.00335m3 Turbo Diesel Engine (3.3 Litre)",
          grs: "V6 0.00335m3 Turbo Diesel Engine (3.3 Litre)",
        },
      },
      {
        label: "No. Of Cylinders",
        value: {
          zx: "6N",
          grs: "6N",
        },
      },
      {
        label: "Displacement",
        value: {
          zx: "0.00335m3 (3.346 L)",
          grs: "0.00335m3 (3.346 L)",
        },
      },

      {
        label: "Max. Output",
        value: {
          zx: "227kW@ 66.6 S-1 (4000 Rpm)",
          grs: "227kW@ 66.6 S-1 (4000 Rpm)",
        },
      },

      {
        label: "Max. Torque",
        value: {
          zx: "700 Nm@ 26.6~43.3 S-1 (1600 - 2600 Rpm)",
          grs: "700 Nm@ 26.6~43.3 S-1 (1600 - 2600 Rpm)",
        }
      },
    ],
  },

  {
    title: "Transmission",
    items: [
      {
        label: "Type",
        value: {
          zx: "10N - Speed Automatic Transmission With Manual Shift Mode",
          grs: "10N - Speed Automatic Transmission With Manual Shift Mode",
        },
      },
      {
        label: "Number Of Ratios",
        value: {
          zx: "10 N",
          grs: "10 N",
        },
      },
      {
        label: "Driveline",
        value: {
          zx: "AWD",
          grs: "AWD",
        },
      },
    ],
  },

  {
    title: "Chasis",
    items: [
      {
        label: "Suspension",
        value: {
          zx: "Front: Double Wishbone Independent;Rear: 4N - Link Rigid ",
          grs: "New Stability Control For Off -Road Capabilities [Sporty Usage & Enhanced Stability]",
        },
      },
      {
        label: "Tyres & Wheels:",
        value: {
          zx: "265/55R20 Alloys (50.8 Cm)",
          grs: "265/65R18 Alloys (45.72 Cm)",
        },
      },
    ],
  },
  {
    title: "Steering",
    items: [
      {
        label: "Steering Gear Type",
        value: {
          zx: "Rack & Pinion",
          grs: "Rack & Pinion",
        },
      },
      {
        label: "Power Steering System",
        value: {
          zx: "Integral",
          grs: "Integral",
        },
      },
    ],
  }
  ,
  {
    title: "Dimension & Weight",
    items: [
      {
        label: "Length",
        value: {
          zx: "498.5 Cm",
          grs: "496.5 Cm",
        },
      },
      {
        label: "Width",
        value: {
          zx: "198 Cm",
          grs: "199 Cm",
        },
      },

      {
        label: "Height",
        value: {
          zx: "195.5 Cm",
          grs: "195.5 Cm",
        },
      },
      {
        label: "Wheelbase",
        value: {
          zx: "285 Cm",
          grs: "285 Cm",
        },
      },

      {
        label: "Min. Ground Clearance",
        value: {
          zx: "23 Cm",
          grs: "23 Cm",
        },
      },
      {
        label: "Min. Turning Radius",
        value: {
          zx: "590 Cm",
          grs: "590 Cm",
        },
      },
      {
        label: "Fuel Tank Capacity",
        value: {
          zx: "80 Litres (0.08 M3)",
          grs: "80 Litres (0.08 M3)",
        },
      },
      {
        label: "Seating Capacity",
        value: {
          zx: "5 N",
          grs: "5 N",
        },
      },
    ],
  }
  ,

  {
    title: "Comfort & Convenience",
    items: [
      {
        label: "Upholstery",
        value: {
          zx: "Smooth Leather Upholstery",
          grs: "Smooth Leather Upholstery",
        },
      },
      {
        label: "Seat Ventilation & Heating",
        value: {
          zx: "Front & Rear",
          grs: "Front & Rear",
        },
      },

      {
        label: "Cool Box",
        value: {
          zx: "Cool Box (Large)",
          grs: "Cool Box (Large)",
        },
      },
      {
        label: "Parking Brake",
        value: {
          zx: "Electronic Parking Brake",
          grs: "Electronic Parking Brake",
        },
      },

      {
        label: "Rear Seat",
        value: {
          zx: "40:20:40 Split Rear Seat With Recline",
          grs: "40:20:40 Split Rear Seat With Recline",
        },
      },
      {
        label: "Drive Modes",
        value: {
          zx: "5N Drive Mode + Customize",
          grs: "5N Drive Mode + Customize",
        },
      },
      {
        label: "Defogger [Front + Rear]",
        value: {
          zx: "Defogger [Front + Rear]",
          grs: "Defogger [Front + Rear]",
        },
      },
      {
        label: "Headrest",
        value: {
          zx: "Individual Adjustable Headrests",
          grs: "Individual Adjustable Headrests",
        },
      },
      {
        label: "Cup Holder",
        value: {
          zx: "Convertible Rear Armrest With Cup Holder",
          grs: "Convertible Rear Armrest With Cup Holder",
        },
      },
      {
        label: "Smart Entry System",
        value: {
          zx: "Smart Entry System With Start/Stop Button",
          grs: "Smart Entry System With Start/Stop Button",
        },
      },
      {
        label: "Power Steering",
        value: {
          zx: "Hydraulic Power Steering [E-Tilt+Telescopic]",
          grs: "Hydraulic Power Steering [E-Tilt+Telescopic]",
        },
      },
      {
        label: "Front Seats",
        value: {
          zx: "8N Way Power Adjustable Front Seats [Lumbar Support For Driver Seat]",
          grs: "8N Way Power Adjustable Front Seats [Lumbar Support For Driver Seat]",
        },
      },
      {
        label: "Head Up Display",
        value: {
          zx: "With Head Up Display",
          grs: "With Head Up Display",
        },
      },
      {
        label: "Wireless Charger",
        value: {
          zx: "Wireless Charger For Front Seats",
          grs: "Wireless Charger For Front Seats",
        },
      },
      {
        label: "Interior Rear View Mirror",
        value: {
          zx: "Interior Rear View Mirror With Auto-Dimming Function",
          grs: "Interior Rear View Mirror With Auto-Dimming Function",
        },
      },
      {
        label: "Power Back Door",
        value: {
          zx: "Power Back Door With Kick Sensor",
          grs: "Power Back Door",
        },
      },
    ],
  },
  {
    title: "Interior Features",
    items: [
      {
        label: "Door Courtesy Lamp",
        value: {
          zx: "With LED Door Courtesy Lamp",
          grs: "With LED Door Courtesy Lamp",
        },
      },
      {
        label: "Air Conditioning System",
        value: {
          zx: "4N Zone Automatic Air Conditioning System",
          grs: "4N Zone Automatic Air Conditioning System",
        },
      },

      {
        label: "Windshield And Window Glass",
        value: {
          zx: "Green Laminated Acoustic Glass With Heat Shield",
          grs: "Green Laminated Acoustic Glass With Heat Shield",
        },
      },
      {
        label: "Lighting",
        value: {
          zx: "Illuminated Entry System",
          grs: "Illuminated Entry System",
        },
      },

      {
        label: "Audio System",
        value: {
          zx: "31.24 Cm Display Audio System",
          grs: "31.24 Cm Display Audio System",
        },
      },
      {
        label: "Number Of Speakers",
        value: {
          zx: "14N Speakers",
          grs: "14N Speakers",
        },
      },
      {
        label: "Audio System Connectivity",
        value: {
          zx: "Compatible With Apple Car PlayTM & Android AutoTM",
          grs: "Compatible With Apple Car PlayTM & Android AutoTM",
        },
      },
      {
        label: "Rear Seat Entertainment",
        value: {
          zx: "Rear Seat Entertainment [Head Rest Mounted 2N]",
          grs: "Rear Seat Entertainment [Head Rest Mounted 2N]",
        },
      },
      {
        label: "Gear Shift Knob",
        value: {
          zx: "Leather Accented Gear Shift Knob",
          grs: "Leather Accented Gear Shift Knob",
        },
      },
      {
        label: "GR Sport Logo",
        value: {
          zx: "",
          grs: "GR Logo On Steering Wheel And Smart Start Engine Button",
        },
      },


    ],
  },

  {
    title: "Off-road Capabilities",
    items: [
      {
        label: "Suspension",
        value: {
          zx: "Adaptive Variable Suspension",
          grs: "Adaptive Variable Suspension",
        },
      },
      {
        label: "Differential",
        value: {
          zx: "Rear Torque-Sensing Limited Slip Differential",
          grs: "Differential With Front And Rear Differential Locks",
        },
      },

      {
        label: "Features",
        value: {
          zx: [
            "Crawl Control",
            "Downhill Assist Control",
            "Hill-Start Assist Control",
            "Multi-Terrain Select",
            "4N-Camera Multi-Terrain Monitor With Panoramic View Monitor",
            "Vehicle Dynamics Integrated Management",
            "Active Traction Control",
          ],
          grs: [
            "Crawl Control",
            "Downhill Assist Control",
            "Hill-Start Assist Control",
            "Multi-Terrain Select",
            "4N-Camera Multi-Terrain Monitor With Panoramic View Monitor",
            "Vehicle Dynamics Integrated Management",
            "Active Traction Control",
          ],
        },
      },

    ],
  },
  {
    title: "Safety & Security",
    items: [
      {
        label: "ADAS Or Toyota Safety SenseTM",
        value: {
          zx: [
            "Toyota Safety Sense TM 3.0 With Pre-Collision System (PCS)",
            "Lane Departure Alert (LDA)",
            "Dynamic Radar Cruise Control (DRCC)",
            "Lane Tracing Assist (LTA)",
            "Adaptive High-Beam System (AHS)",
          ],
          grs: [
            "Toyota Safety Sense TM 3.0 With Pre-Collision System (PCS)",
            "Lane Departure Alert (LDA)",
            "Dynamic Radar Cruise Control (DRCC)",
            "Lane Tracing Assist (LTA)",
            "Adaptive High-Beam System (AHS)",
          ],
        },
      },
      {
        label: "Anti Theft System",
        value: {
          zx: "Anti Theft System [Immobilizer+Siren+Intrude+Slant]l",
          grs: "Anti Theft System [Immobilizer+Siren+Intrude+Slant]l",
        },
      },
      {
        label: "Seat Belt",
        value: {
          zx: "3N Point ELR Seat Belt [Pre-Tensioner+Load Limiter+Reminder]",
          grs: "3N Point ELR Seat Belt [Pre-Tensioner+Load Limiter+Reminder]",
        }
      },
      {
        label: "Child Restraint System",
        value: {
          zx: "2 N",
          grs: "2 N",
        }
      },
      {
        label: "SRS Airbag",
        value: {
          zx: "10N SRS Airbags",
          grs: "10N SRS Airbags",
        }
      },
      {
        label: "Panoramic View Monitor",
        value: {
          zx: "360 Deg Panoramic View Monitor",
          grs: "360 Deg Panoramic View Monitor",
        }
      },
      {
        label: "Disc Brakes",
        value: {
          zx: "Front & Rear",
          grs: "Front & Rear",
        }
      },
      {
        label: "Vehicle Stability Control",
        value: {
          zx: "Vehicle Stability Control [Multi Terrain System]",
          grs: "Vehicle Stability Control [Multi Terrain System]",
        }
      },
      {
        label: "Auto Door Lock",
        value: {
          zx: "Speed Sensing Door Lock",
          grs: "Speed Sensing Door Lock",
        }
      },
      {
        label: "Auto Door Unlock",
        value: {
          zx: "Impact Sensing Door Unlock",
          grs: "Impact Sensing Door Unlock",
        }
      },
      {
        label: "Auto Door Unlock",
        value: {
          zx: "Impact Sensing Door Unlock",
          grs: "Impact Sensing Door Unlock",
        }
      },
      {
        label: "Power Window",
        value: {
          zx: "One Touch Power Window With Jam Protector & Remote",
          grs: "One Touch Power Window With Jam Protector & Remote",
        }
      },
      {
        label: "Warning System",
        value: {
          zx: "Warning System [Speed, Door Ajar, Seat Belt, Light Remind, Key Remind, Tyre Pressure]",
          grs: "Warning System [Speed, Door Ajar, Seat Belt, Light Remind, Key Remind, Tyre Pressure]",
        }
      },
      {
        label: "Parking Sensors",
        value: {
          zx: "Front & Rear",
          grs: "Front & Rear",
        }
      },
      {
        label: "Safety Features",
        value: {
          zx: ["Anti Skid Brake System",
            "Vehicle Dynamic Management",
            "Brake Assist",
            "Crawl Control With Turn Assist",
            "Downhill Assist Control",
            "Blind Spot Monitor (BSM)",
            "Tire Pressure Warning System",
          ],
          grs: ["Anti Skid Brake System",
            "Vehicle Dynamic Management",
            "Brake Assist",
            "Crawl Control With Turn Assist",
            "Downhill Assist Control",
            "Blind Spot Monitor (BSM)",
            "Tire Pressure Warning System",],
        }
      },
    ],
  },

  {
    title: "Toyota Connected Services",
    items: [
      {
        label: "",
        value: {
          zx: ["Toyota Connected Services",
            "Toyota i-Connect App",
            "Remote Air Conditioner Package",
            "Stolen Vehicle Tracking",
            "Automatic Collision Notification",
            "SOS Emergency Call",
          ],
          grs: ["Toyota Connected Services",
            "Toyota i-Connect App",
            "Remote Air Conditioner Package",
            "Stolen Vehicle Tracking",
            "Automatic Collision Notification",
            "SOS Emergency Call",
          ],
        },
      },
      
    ],
  },

];






// app/components/gallery/galleryData.ts

export const galleryData = {
  backgroundImage: "/lc300/topograpy.svg",

  exterior: [
    "/lc300/lc300-ext-gallery-01-1800x800.webp",
    "/lc300/lc300-ext-gallery-02-1800x800.webp",
    "/lc300/lc300-ext-gallery-03-1800x800.webp",
  ],

  interior: [
    "/lc300/lc300-int-gallery-03-1800x800.webp",
    "/lc300/lc300-int-gallery-02-1800x800.webp",
    "/lc300/lc300-int-gallery-01-1800x800.webp",
  ],
};
