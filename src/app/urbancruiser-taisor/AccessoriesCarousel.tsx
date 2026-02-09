
// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export interface AccessoriesItem {
//   image: string;
//   title: string;
// }

// interface AccessoriesCarouselProps {
//   heading: string;
//   items?: AccessoriesItem[];
// }

// export default function AccessoriesCarousel({
//   heading,
//   items = [],
// }: AccessoriesCarouselProps) {
//   const visibleItems = 4;
//   const [index, setIndex] = useState(0);

//   if (!items.length) return null;

//   const maxIndex = Math.max(items.length - visibleItems, 0);

//   const prev = () => setIndex(p => (p <= 0 ? maxIndex : p - 1));
//   const next = () => setIndex(p => (p >= maxIndex ? 0 : p + 1));

//   return (
//     <section className="w-full py-16 bg-white overflow-hidden">
//       {/* HEADING */}
//       <h2 className="text-[20px] sm:text-[32px] font-semibold mb-10 max-w-[1400px] mx-auto px-4">
//         {heading}
//       </h2>

//       {/* VIEWPORT */}
//       <div className="relative max-w-[1400px] mx-auto px-12 overflow-hidden">
//         {/* TRACK */}
//         <div
//           className="flex gap-6 transition-transform duration-500 ease-out group"
//           style={{
//             transform: `translateX(-${index * 25}%)`,
//           }}
//         >
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="
//                 flex-shrink-0
//                 basis-[25%]
//                 group-hover:basis-[22%]
//                 hover:!basis-[32%]
//                 transition-[flex-basis] duration-300 ease-out
//               "
//             >
//               {/* IMAGE */}
//               <div className="overflow-hidden bg-gray-100">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="
//                     w-full h-[260px] sm:h-[300px] object-cover
//                     transition-transform duration-300
//                     hover:scale-105
//                   "
//                 />
//               </div>

//               {/* TITLE */}
//               <p className="mt-4 text-sm sm:text-base font-medium text-gray-900">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* LEFT ARROW */}
//         <button
//           onClick={prev}
//           className="
//             absolute left-0 top-1/2 -translate-y-1/2
//             w-10 h-10 sm:w-12 sm:h-12
//             flex items-center justify-center
//             rounded-full bg-white border shadow
//             hover:bg-gray-100 transition
//           "
//         >
//           <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//         </button>

//         {/* RIGHT ARROW */}
//         <button
//           onClick={next}
//           className="
//             absolute right-0 top-1/2 -translate-y-1/2
//             w-10 h-10 sm:w-12 sm:h-12
//             flex items-center justify-center
//             rounded-full bg-white border shadow
//             hover:bg-gray-100 transition
//           "
//         >
//           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//         </button>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface AccessoriesItem {
  image: string;
  title: string;
}

interface AccessoriesCarouselProps {
  heading: string;
  items?: AccessoriesItem[];
}

export default function AccessoriesCarousel({
  heading,
  items = [],
}: AccessoriesCarouselProps) {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  // 🔹 RESPONSIVE VISIBLE ITEMS
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!items.length) return null;

  const maxIndex = Math.max(items.length - visibleItems, 0);
  const movePercent = 100 / visibleItems;

  const prev = () => setIndex(p => (p <= 0 ? maxIndex : p - 1));
  const next = () => setIndex(p => (p >= maxIndex ? 0 : p + 1));

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      {/* HEADING */}
      <h2 className="text-[20px] sm:text-[32px] font-semibold mb-10 max-w-[1400px] mx-auto px-4">
        {heading}
      </h2>

      {/* VIEWPORT */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12 overflow-hidden">
        {/* TRACK */}
        <div
          className="flex gap-6 transition-transform duration-500 ease-out group"
          style={{
            transform: `translateX(-${index * movePercent}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="
                flex-shrink-0
                basis-full
                sm:basis-1/2
                lg:basis-1/4
                group-hover:lg:basis-[22%]
                hover:lg:!basis-[32%]
                transition-[flex-basis] duration-300 ease-out
              "
            >
              {/* IMAGE */}
              <div className="overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-[240px] sm:h-[280px] lg:h-[300px]
                    object-cover transition-transform duration-300
                    hover:scale-105
                  "
                />
              </div>

              {/* TITLE */}
              <p className="mt-4 text-sm sm:text-base font-medium text-gray-900">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute left-2 sm:left-0 top-1/2 -translate-y-1/2
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            rounded-full bg-white border shadow
            hover:bg-gray-100 transition
          "
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute right-2 sm:right-0 top-1/2 -translate-y-1/2
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            rounded-full bg-white border shadow
            hover:bg-gray-100 transition
          "
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
}