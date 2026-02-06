
"use client";
import { useState } from "react";

interface EngineItem {
  title: string;
  quote: string;
  image: string;
}

const DATA: EngineItem[] = [
  {
    title: "POWERFUL TURBO ENGINE",
    quote: "Never run out of power when you are chasing your inner voice",
    image: "/urbancruiser-taisor/D27_POWERFUL_800x550px.jpg",
  },
  {
    title: "EXCITING PETROL ENGINE",
    quote: "Never run out of power when you are chasing your inner voice",
    image: "/urbancruiser-taisor/D27_EXCITING_800x550px.jpg",
  },
  {
    title: "SMOOTH iGS TRANSMISSION",
    quote: "Never run out of power when you are chasing your inner voice",
    image: "/urbancruiser-taisor/D27_SMOOTH_iGS_TRANSMISSION.webp",
  },
   {
    title: "SLICK 6-SPEED AUTO TRANSMISSION",
    quote: "Never run out of power when you are chasing your inner voice",
    image: "/urbancruiser-taisor/D27_SLICK_AT_TRANSMISSION.webp",
  },
   {
    title: "CONVENIENT CRUISE CONTROL",
    quote: "Never run out of power when you are chasing your inner voice",
    image: "/urbancruiser-taisor/D27_CONVENIENT_CRUISE_CONTROL_800x550px.jpg",
  },
   {
    title: "ERGONOMIC TILT STEERING",
    quote: "Never run out of power when you are chasing your inner voice",
    image: "/urbancruiser-taisor/D27_ERGONOMIC_TILT_STEERING_800x550px.webp",
  },
   {
    title: "PADDLE SHIFTERS",
    quote: "Never run out of power when you are chasing your inner voice",
    image: "/urbancruiser-taisor/D27_PADDLE_SHIFT_800x550px.jpg",
  },
  
];

export default function EngineCarouselSection() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p === 0 ? DATA.length - 1 : p - 1));

  const next = () =>
    setActive((p) => (p === DATA.length - 1 ? 0 : p + 1));

  return (
    <section className="relative w-full overflow-hidden border border-red-500">

      {/* 🔴 FULL WIDTH CENTER RED LINE */}
      <span className="absolute top-1/2 left-0 w-full h-px bg-red-500 z-0"></span>

      <div className="relative max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 items-center z-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between h-full">

          {/* TOP QUOTE (CHANGES WITH ACTIVE) */}
          <p className="text-gray-700 italic text-lg max-w-md">
            {DATA[active].quote}
          </p>

          {/* TITLE + ARROWS */}
          <div className="mt-16 flex items-center">

            {/* LEFT ARROW */}
            <button
              onClick={prev}
              className="opacity-70 hover:opacity-100 transition"
            >
              <img
                src="/urbancruiser-taisor/prev (1).svg"
                alt="Previous"
                className="w-12 h-12"
              />
            </button>

            {/* FIXED WIDTH TITLE BOX */}
            <div className="mx-4 px-8 py-3 bg-gray-100 skew-x-[-12deg] w-[340px] text-center">
              <span className="block skew-x-[12deg] font-bold text-xl tracking-wide">
                {DATA[active].title}
              </span>
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={next}
              className="opacity-70 hover:opacity-100 transition "
            >
              <img
                src="/urbancruiser-taisor/next (1).svg"
                alt="Next"
                className="w-12 h-12"
               
              />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center mt-12 lg:mt-0">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full border border-red-500 flex items-center justify-center bg-white">

            {/* VERTICAL CENTER LINE (BEHIND IMAGE) */}
            <span className="absolute h-full w-px bg-red-500 left-1/2 top-0 z-0"></span>

            {/* ROUND IMAGE (ABOVE LINE) */}
            <div className="w-[75%] h-[75%] rounded-full overflow-hidden flex items-center justify-center relative z-10">
              <img
                src={DATA[active].image}
                alt={DATA[active].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}