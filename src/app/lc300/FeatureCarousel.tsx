

// "use client";

// import { useEffect, useState } from "react";
// import type { ToyotaSlide } from "./data";

// type ToyotaStyleCarouselProps = {
//   slides: ToyotaSlide[];
//   autoPlayDelay?: number;
// };

// export default function ToyotaStyleCarousel({
//   slides,
//   autoPlayDelay = 4000,
// }: ToyotaStyleCarouselProps) {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     if (!slides?.length) return;

//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, autoPlayDelay);

//     return () => clearInterval(interval);
//   }, [slides, autoPlayDelay]);

//   if (!slides?.length) return null;

//   return (
//     <>
//     <section className="w-full bg-white overflow-hidden">
//       <div className="flex flex-col md:flex-row h-auto md:h-[520px] px-4 md:px-10 gap-6 md:gap-8">

//         {/* LEFT CONTENT */}
//         <div className="relative w-full md:w-[32%] bg-gray-100 left-double-cut">
//           <div className="p-6 md:p-14 md:pt-20">
//             <h2 className="text-[24px] md:text-[32px] font-semibold leading-tight text-gray-900">
//               {slides[active].title}
//             </h2>
//             <p className="mt-3 md:mt-4 text-[14px] md:text-[15px] text-gray-600">
//               {slides[active].desc}
//             </p>
//           </div>

//           {/* CONTROLS */}
//           <div className="relative md:absolute md:bottom-10 md:left-14 px-6 pb-6 md:p-0 flex items-center gap-3">
//             <button
//               onClick={() =>
//                 setActive((active - 1 + slides.length) % slides.length)
//               }
//             >
//               ‹
//             </button>

//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 className={`w-7 h-7 md:w-8 md:h-8 rounded-full border flex items-center justify-center text-xs md:text-sm
//                 ${
//                   active === i
//                     ? "border-gray-800"
//                     : "border-gray-300 text-gray-400"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             ))}

//             <button onClick={() => setActive((active + 1) % slides.length)}>
//               ›
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative w-full md:w-[68%] bg-gray-100 right-top-cut overflow-hidden h-[240px] sm:h-[320px] md:h-full">
//           <img
//             src={slides[active].img}
//             alt={slides[active].title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>

//     <div className="h-[10vh]"></div>
//     </>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import type { ToyotaSlide } from "./data";

type ToyotaStyleCarouselProps = {
  slides: ToyotaSlide[];
  autoPlayDelay?: number;
};

export default function ToyotaStyleCarousel({
  slides,
  autoPlayDelay = 4000,
}: ToyotaStyleCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!slides?.length) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [slides, autoPlayDelay]);

  if (!slides?.length) return null;

  return (
    <>
      <section className="w-full bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row h-auto md:h-[520px] px-4 md:px-10 gap-6 md:gap-8">

          {/* LEFT CONTENT */}
          <div className="relative w-full md:w-[38%] bg-gray-100 left-double-cut">
            <div className="p-6 md:p-16 md:pt-20">
              <h2 className="text-[24px] md:text-[32px] font-semibold leading-tight text-gray-900">
                {slides[active].title}
              </h2>

              <p className="mt-3 md:mt-4 text-[14px] md:text-[15px] text-gray-600">
                {slides[active].desc}
              </p>
            </div>

            {/* CONTROLS */}
            <div className="relative md:absolute md:bottom-10 md:left-16 px-6 pb-6 md:p-0 flex items-center gap-3">
              <button
                onClick={() =>
                  setActive((active - 1 + slides.length) % slides.length)
                }
                className="text-xl md:text-2xl font-light"
              >
                ‹
              </button>

              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full border flex items-center justify-center text-xs md:text-sm transition
                  ${
                    active === i
                      ? "border-gray-800 text-gray-800"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setActive((active + 1) % slides.length)
                }
                className="text-xl md:text-2xl font-light"
              >
                ›
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full md:w-[62%] bg-gray-100 right-top-cut overflow-hidden h-[240px] sm:h-[320px] md:h-full">
            <img
              src={slides[active].img}
              alt={slides[active].title}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
          </div>

        </div>
      </section>

      <div className="h-[10vh]"></div>
    </>
  );
}
