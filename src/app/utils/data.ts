import { Facebook, Twitter, Youtube, X } from "lucide-react";

const bannerSlides = [
  { src: "/banner/banner1.jpg", alt: "banner1" },
  { src: "/banner/banner2.jpg", alt: "banner2" },
  { src: "/banner/banner3.jpg", alt: "banner3" },
  { src: "/banner/banner4.jpg", alt: "banner4" },
  { src: "/banner/banner5.jpg", alt: "banner5" },
  { src: "/banner/banner6.jpg", alt: "banner6" },
  { src: "/banner/banner7.jpg", alt: "banner7" },
  { src: "/banner/banner8.jpg", alt: "banner8" },
  { src: "/banner/banner9.jpg", alt: "banner9" },
  { src: "/banner/banner10.jpg", alt: "banner10" },
  { src: "/banner/banner11.jpg", alt: "banner11" },
  { src: "/banner/banner12.jpg", alt: "banner12" },
  { src: "/banner/banner13.jpg", alt: "banner13" },
  { src: "/banner/banner14.jpg", alt: "banner14" },
];

const models = [
  {
    name: "Glanza",
    image: "/models/glanza-maroon.png",
    link: "https://espirittoyota.co.in/showroom/glanza/",
  },
  {
    name: "Urban Cruiser Taisor",
    image: "/models/KODIAQ1.png",
    link: "https://espirittoyota.co.in/showroom/urbancruiser-taisor/",
  },
  {
    name: "Rumion",
    image: "/models/Rumino-blue.png",
    link: "https://espirittoyota.co.in/showroom/rumion",
  },
  {
    name: "Urban Cruiser Hyryder",
    image: "/models/hyryder-blue.png",
    link: "https://espirittoyota.co.in/showroom/urbancruiser-hyryder",
  },
  {
    name: "Innova Crysta",
    image: "/models/KODIAQ1.png",
    link: "https://espirittoyota.co.in/showroom/innova",
  },
  {
    name: "Innova Hycross",
    image: "/models/innova-hycross.png",
    link: "https://espirittoyota.co.in/showroom/innova-hycross",
  },
  {
    name: "Hilux",
    image: "/models/hylux.png",
    link: "https://espirittoyota.co.in/showroom/hilux",
  },
  {
    name: "Fortuner",
    image: "/models/KODIAQ1.png",
    link: "https://espirittoyota.co.in/showroom/fortuner/index-fortuner.html",
  },
  {
    name: "Legender",
    image: "/models/legender.png",
    link: "https://espirittoyota.co.in/showroom/fortuner/index-legender.html",
  },
  {
    name: "Camry",
    image: "/models/camry.png",
    link: "https://espirittoyota.co.in/showroom/camry",
  },
  {
    name: "Vellfire",
    image: "/models/vellfire.png",
    link: "https://espirittoyota.co.in/showroom/vellfire",
  },
  {
    name: "Land Cruiser 300",
    image: "/models/land-crusire.webp",
    link: "https://espirittoyota.co.in/showroom/lc300",
  },
];

const address = {
  company: {
    name: "ESPIRIT TOYOTA",
    logo: "TOYOTA",
    addresses: [
      {
        id: 1,
        name: "Espirit Toyota",
        location: "Jaydev Vihar - Nandan Kanan Road, Plot No. 370/2119",
        area: "Patia, Khurda Dist,",
        pincode: "Bhubaneshwar-751024",
        phone: ["07935428989"],
        // additionalPhone: "+917873044445",
        email: "marketing@fieldtoyota.com",
      },
      {
        id: 2,
        name: "Espirit Toyota",
        location: "Plot No - 225/226 , RMC Road ( NH-6)",
        area: "AT/PO - Bareipali, P.S - Ainthapali,",
        pincode: "Sambalpur-768006",
        phone: ["07935428989"],
        // additionalPhone: "+91 78730 45500",
        email: "marketing@fieldtoyota.com",
      },
      {
        id: 3,
        name: "Espirit Toyota",
        location: "Panchamahalla Chhak",
        area: "Karadagadia",
        pincode: "Angul-759132",
        phone: ["07935428989"],
        // additionalPhone: "+91 78730 44445",
        email: "marketing@fieldtoyota.com",
      },
      {
        id: 4,
        name: "Espirit Toyota",
        location: "2514, NH 5,",
        area: "Telengapentha,",
        pincode: "Cuttack-754001",
        phone: ["07935428989"],
        // additionalPhone: "+91 78730 44445",
        email: "marketing@fieldtoyota.com",
      },
      {
        id: 5,
        name: "Espirit Toyota",
        location: "Plot No : B/ 12 & 13",
        area: "Kalunga Industrial Estate, Kalunga,",
        pincode: "Rourkela-770031",
        phone: ["07935428989"],
        // additionalPhone: "+91 78730 44130",
        email: "marketing@fieldtoyota.com",
      },
    ],
  },
  sections: {
    products: {
      title: "PRODUCTS",
      links: models,
    },
  },
  social: [
    {
      icon: Facebook,
      link: "https://www.facebook.com/ToyotaIndia",
      label: "Facebook",
    },
    {
      icon: X,
      link: "https://twitter.com/Toyota_India",
      label: "Twitter",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/user/ToyotainIndia",
      label: "YouTube",
    },
  ],
  copyright: "Copyright © 2025 TKM. All Rights Reserved.",
  poweredBy: "Developed & Designed By Jnine Infotech",
};

export { bannerSlides, models, address };
