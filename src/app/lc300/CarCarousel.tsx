

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { CarSlide } from "./data";

// type Props = {
//   slides: CarSlide[];
// };

// const SLIDE_WIDTH = 420;
// const SLIDE_GAP = 48;

// export default function CarCarousel({ slides }: Props) {
//   const [active, setActive] = useState(0);

//   const prev = () => {
//     if (active === 0) return;
//     setActive((p) => p - 1);
//   };

//   const next = () => {
//     if (active === slides.length - 1) return;
//     setActive((p) => p + 1);
//   };

//   return (
//     <section className="relative w-full py-20 bg-white overflow-hidden">

//       {/* LEFT BUTTON */}
//       <button
//         onClick={prev}
//         disabled={active === 0}
//         className={`absolute left-6 top-1/2 -translate-y-1/2 z-20
//           rounded-full p-3 shadow-md transition
//           ${active === 0 ? "opacity-40 cursor-default bg-white" : "bg-white"}
//         `}
//       >
//         <ChevronLeft />
//       </button>

//       {/* RIGHT BUTTON */}
//       <button
//         onClick={next}
//         disabled={active === slides.length - 1}
//         className={`absolute right-6 top-1/2 -translate-y-1/2 z-20
//           rounded-full p-3 shadow-md transition
//           ${
//             active === slides.length - 1
//               ? "opacity-40 cursor-default bg-white"
//               : "bg-white"
//           }
//         `}
//       >
//         <ChevronRight />
//       </button>

//       {/* VIEWPORT */}
//       <div className="relative w-full overflow-hidden">
//         <div
//           className="flex items-center transition-transform duration-700 ease-in-out"
//           style={{
//             paddingLeft: "calc(50% - 210px)",
//             paddingRight: "calc(50% - 210px)",
//             transform: `translateX(-${
//               active * (SLIDE_WIDTH + SLIDE_GAP)
//             }px)`,
//           }}
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`mx-6 min-w-[300px] sm:min-w-[420px]
//                 h-[220px] sm:h-[300px]
//                 flex items-center justify-center
//                 transition-all duration-500
//                 clip-card
//                 ${
//                   index === active
//                     ? "bg-black scale-105 z-10"
//                     : "bg-gray-200 opacity-60"
//                 }`}
//             >
//               <Image
//                 src={slide.image}
//                 alt={slide.alt}
//                 width={360}
//                 height={220}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* DIAMOND PROGRESS */}
//       <div className="flex justify-center gap-5 mt-12">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className={`w-4 h-4 rotate-45 border transition-all
//               ${
//                 i === active
//                   ? "bg-black border-black scale-125"
//                   : "border-gray-400"
//               }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }







"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarSlide } from "./data";

type Props = {
  slides: CarSlide[];
};

export default function CarCarousel({ slides }: Props) {
  const [active, setActive] = useState(0);

  const prev = () => {
    if (active === 0) return;
    setActive((p) => p - 1);
  };

  const next = () => {
    if (active === slides.length - 1) return;
    setActive((p) => p + 1);
  };

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        disabled={active === 0}
        className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20
          rounded-full p-3 shadow-md transition
          ${active === 0 ? "opacity-40 cursor-default bg-white" : "bg-white"}
        `}
      >
        <ChevronLeft />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        disabled={active === slides.length - 1}
        className={`absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20
          rounded-full p-3 shadow-md transition
          ${
            active === slides.length - 1
              ? "opacity-40 cursor-default bg-white"
              : "bg-white"
          }
        `}
      >
        <ChevronRight />
      </button>

      {/* VIEWPORT */}
      <div className="relative w-full overflow-hidden">
        <div
          className="
            flex items-center transition-transform duration-700 ease-in-out
            [--slide:280px] sm:[--slide:360px] lg:[--slide:420px]
            [--gap:48px]
          "
          style={{
            paddingLeft: "calc(50% - var(--slide) / 2)",
            paddingRight: "calc(50% - var(--slide) / 2)",
            transform: `translateX(calc(-${active} * (var(--slide) + var(--gap))))`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`
                mx-6 min-w-[var(--slide)]
                h-[200px] sm:h-[260px] lg:h-[300px]
                flex items-center justify-center
                transition-all duration-500
                clip-card
                ${
                  index === active
                    ? "bg-black scale-105 z-10"
                    : "bg-gray-200 opacity-60"
                }
              `}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                width={360}
                height={220}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DIAMOND PROGRESS */}
      <div className="flex justify-center gap-5 mt-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-4 h-4 rotate-45 border transition-all
              ${
                i === active
                  ? "bg-black border-black scale-125"
                  : "border-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}