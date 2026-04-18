
"use client";
import { title } from "process";
import { useState, useEffect } from "react";

const carouselData = [
  {
    img: "/hilux/seating.webp",
    title: "Cabin wrapped in soft leather and metallic accents ",
    desc: "Feel the warm embrace of luxury as soon as you step into the cabin, with soft leather upholstery for unparalleled comfort and metallic accents for a dash of style.",
  },
  {
    img: "/hilux/7-air-bags.webp",
    title: "7 SRS Airbags",
    desc: "7 airbags, including the driver, passenger, front and rear side curtain airbags, ensure that each one of your adventures keeps up with our highest safety standards.",
  },
  {
    img: "/hilux/hill-start-assistant-control.webp",
    title: "Hill start assistance control",
    desc: "Ascend inclines effortlessly, without losing your momentum. Even while you’re starting from a halt. All thanks to hill start assistant control.",
  },
  {
    img: "/hilux/Smartphone-connected-display-Audio.webp",
    title: "8 Smartphone connected display Audio",
    desc: " The infotainment system features an 8” display with in -built navigation, to be your window to the world of adventure.It is compatible with both Android AutoTM and Apple CarPlayTM.",
  },
  {
    img:"/hilux/Front-parking-sensors-with-MID-indication.webp",
    title:"Front parking sensors with MID indication",
    desc:"When you hit pause on your adventures, the front parking sensors with MID indication ensure that parking your vehicle is a breeze.",
  },
  {
    img:"/hilux/Dual-Zone-Auto-AC.webp",
    title:" Dual Zone Auto AC",
    desc:"Both the driver and passenger get to choose the air conditioning settings best suited to each of them with Dual Zone Auto AC."
  },
  {
    img:"/hilux/Vehicle-stability-control-752x800.webp",
    title:"Vehicle stability control",
    desc:"Designed to prioritise safety with features like vehicle stability control. All to keep the adventure going, no matter the turns or bends.",
  }
];

export default function FeatureCarousel() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const updateVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCards(3); // desktop
    } else if (window.innerWidth >= 768) {
      setVisibleCards(2); // tablet
    } else {
      setVisibleCards(1); // mobile
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalItems = carouselData.length;
  const next = () => {
    if (current < totalItems - visibleCards) setCurrent(current + 1);
  };
  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-10">
      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${current * (100 / visibleCards)}%)` }}
        >
          {carouselData.map((item, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${100 / visibleCards}%` }}>
              <div className="relative overflow-hidden group rounded-lg shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-max group-hover:w-auto bg-black bg-opacity-80 group-hover:bg-red-600 px-2 py-1 transition-all duration-500 rounded">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-white text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {/* Left arrow */}
      <button
        onClick={prev}
        disabled={current === 0}
        className={`absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md flex items-center justify-center
          ${current === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}
          left-2 md:-left-6 p-3 md:p-4`}
      >
        <span className="text-red-600 font-bold text-2xl md:text-3xl">&#10094;</span>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        disabled={current >= totalItems - visibleCards}
        className={`absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md flex items-center justify-center
          ${current >= totalItems - visibleCards ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}
          right-2 md:-right-6 p-3 md:p-4`}
      >
        <span className="text-red-600 font-bold text-2xl md:text-3xl">&#10095;</span>
      </button>
    </div>
  );
}
