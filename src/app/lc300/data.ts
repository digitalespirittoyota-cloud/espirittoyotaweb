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