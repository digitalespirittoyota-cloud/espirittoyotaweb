
"use client";

import Image from "next/image";
import { useState } from "react";

type LuxuryItem = {
  image: string;
  text: string;
};

type LuxurySectionProps = {
  backgroundImage: string;
  heading: string;
  showUnderline?: boolean;
  data: LuxuryItem[];
};

export default function LuxurySection({
  backgroundImage,
  heading,
  showUnderline = true,
  data,
}: LuxurySectionProps) {
  const [active, setActive] = useState(0);
  const slide = data[active];

  const next = () =>
    setActive((p) => (p + 1) % data.length);

  const prev = () =>
    setActive((p) => (p === 0 ? data.length - 1 : p - 1));

  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src={backgroundImage}
        alt="Luxury bg"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* HEADING */}
      <div className="relative z-10 text-center pt-10 sm:pt-14 text-gray-300">
        <h2 className="text-lg sm:text-xl md:text-4xl font-semibold tracking-widest uppercase">
          {heading}
        </h2>

        {showUnderline && (
          <div className="w-14 h-[2px] bg-white mx-auto mt-3" />
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto mt-8 sm:mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden bg-white rounded-bl-[18%]">
            <Image
              src={slide.image}
              alt="interior"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div
            className="
    h-[220px] sm:h-[260px] md:h-[300px]   /* 👈 left se kam height */
    mt-[40px]                              /* 👈 top se gap */
    bg-black/65
    px-6 sm:px-8 md:px-10
    text-white
    flex flex-col
    justify-between
  "
          >

            {/* TEXT – FIXED START POSITION */}
            <div className="pt-8">
              <h3
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-semibold
                  uppercase
                  leading-snug
                  max-w-[420px]
                  min-h-[64px]   /* ✅ prevents jump (1 or 2 lines) */
                "
              >
                {slide.text}
              </h3>
            </div>

            {/* CONTROLS – ALWAYS BOTTOM */}
            <div className="flex items-center gap-4 pb-6">
              <button
                onClick={prev}
                className="w-9 h-9 md:w-10 md:h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="w-9 h-9 md:w-10 md:h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                ›
              </button>
              <span className="ml-4 text-xs opacity-70">
                {active + 1}/{data.length}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}









