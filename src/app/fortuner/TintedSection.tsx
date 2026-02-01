
"use client";
import { useState } from "react";
import Image from "next/image";

const colors = [
  { name: "Platinum White Pearl", hex: "#f2f2f2", img: "/fortuner/car-001 (1).png" },
  { name: "Sparkling Black Crystal Shine", hex: "#111111", img: "/fortuner/car-01 (1).png" },
  { name: "Super White", hex: "#ffffff", img: "/fortuner/car-03 (1).png" },
  { name: "Attitude Black", hex: "#1a1a1a", img: "/fortuner/car-04 (1).png" },
  { name: "Avant-Garde Bronze", hex: "#b7a189", img: "/fortuner/car-05 (1).png" },
  { name: "Silver Metallic", hex: "#cfd3da", img: "/fortuner/car-08 (1).png" },
];

export default function TintedSection() {
  const [active, setActive] = useState(colors[0]);

  return (
    <section className="w-full bg-white pt-14 lg:pt-20 pb-12 overflow-hidden">
      <div className="max-w-[1500px] mx-auto relative flex flex-col lg:flex-row">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-[42%] px-5 sm:px-8 lg:pl-24 lg:pr-10">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] font-semibold tracking-wide mb-5">
            TINTED TO STANDOUT
          </h2>

          <p className="text-[13px] sm:text-[14px] leading-[24px] sm:leading-[26px] text-gray-600 max-w-[480px]">
            The dynamic new Fortuner is available in a wide range of shades.
            The vibrant colours make it more distinguished and dominant even
            when it’s standing still. From light to dark, you'll surely find
            a shade that suits your unique personality.
          </p>
        </div>

        {/* RIGHT IMAGE ZONE */}
        <div className="relative w-full lg:w-[58%] h-[300px] sm:h-[360px] lg:h-[420px] mt-10 lg:mt-0">

          {/* BLUE BACKGROUND */}
          <div className="absolute right-0 top-0 w-[92%] sm:w-[85%] h-[220px] sm:h-[280px] lg:h-[330px] bg-[#8fb3d9]" />

          {/* DOWNLOAD BUTTON */}
          <a
            href="https://www.toyotabharat.com/documents/brochures/fortuner-mmc/combined-brochure-mobile.pdf"
            download
            className="absolute top-4 left-4 sm:left-8 lg:left-12 bg-black text-white text-[11px] sm:text-[12px] px-6 sm:px-7 py-2.5 sm:py-3 tracking-wide z-20"
          >
            DOWNLOAD BROCHURE
          </a>

          {/* CAR IMAGE */}
          <div className="
            absolute 
            left-1/2 
            top-[90px] sm:top-[80px] lg:top-[70px]
            -translate-x-1/2 
            lg:-translate-x-[60%]
            z-10 
            w-[95%] sm:w-[90%] lg:w-[900px]
          ">
            <Image
              src={active.img}
              alt={active.name}
              width={900}
              height={420}
              className="w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* COLOR SELECTOR */}
      <div className="max-w-[1300px] mx-auto mt-14 px-5 sm:px-8 lg:pl-24 flex gap-4 flex-wrap">
        {colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setActive(c)}
            className="flex flex-col items-start"
          >
            <div
              className={`w-[120px] sm:w-[140px] h-[52px] sm:h-[56px] border ${
                active.name === c.name ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: c.hex }}
            />
            <p className="text-[11px] sm:text-[12px] mt-2 w-[120px] sm:w-[140px] leading-tight">
              {c.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
