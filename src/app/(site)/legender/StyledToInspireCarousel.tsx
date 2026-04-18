
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Slide = {
  name: string;
  bgImage: string;
  image: string;
};

type StyledCarouselProps = {
  title: string;
  description?: string;
  slides: Slide[];
};

export default function StyledToInspireCarousel({
  title,
  description,
  slides,
}: StyledCarouselProps) {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () =>
    setActive((p) => (p === slides.length - 1 ? 0 : p + 1));

  const slide = slides[active];

  return (
    <section className="w-full bg-white py-16 overflow-hidden relative">
      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            {description}
          </p>
        )}
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">
        {/* Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.bgImage}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={slide.bgImage}
              alt="background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Foreground */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -120, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[85%] sm:w-[70%] md:w-[60%] h-full">
              <Image
                src={slide.image}
                alt={slide.name}
                fill
                className=""
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Name */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[70%] md:w-[60%]">
          <div className="inline-block bg-black/50 text-white px-5 py-3 text-base sm:text-lg font-bold tracking-widest leading-relaxed whitespace-pre-line">
            {slide.name}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 text-4xl shadow-md z-10"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 text-4xl shadow-md z-10"
        >
          ›
        </button>
      </div>
    </section>
  );
}








// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// type Slide = {
//   name: string;
//   bgImage: string;
//   image: string;
// };

// type StyledCarouselProps = {
//   title: string;
//   description?: string;
//   slides: Slide[];
// };

// export default function StyledToInspireCarousel({
//   title,
//   description,
//   slides,
// }: StyledCarouselProps) {
//   const [active, setActive] = useState(0);

//   // 🔥 IMPORTANT FIX — reset slide when data changes
//   useEffect(() => {
//     setActive(0);
//   }, [slides]);

//   const prev = () =>
//     setActive((p) => (p === 0 ? slides.length - 1 : p - 1));

//   const next = () =>
//     setActive((p) => (p === slides.length - 1 ? 0 : p + 1));

//   const slide = slides[active];

//   return (
//     <section className="w-full bg-white py-16 overflow-hidden relative">
//       {/* HEADING */}
//       <div className="text-center max-w-3xl mx-auto mb-12 px-4 relative z-10">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider">
//           {title}
//         </h2>

//         {description && (
//           <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
//             {description}
//           </p>
//         )}
//       </div>

//       {/* CAROUSEL */}
//       <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">
//         {/* Background Image */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.bgImage}
//             className="absolute inset-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image
//               src={slide.bgImage}
//               alt="background"
//               fill
//               className="object-cover"
//               priority
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Car Image */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.image}
//             initial={{ x: 120, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -120, opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <div className="relative w-[85%] sm:w-[70%] md:w-[60%] h-full">
//               <Image
//                 src={slide.image}
//                 alt={slide.name}
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Slide Name */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] sm:w-[70%] md:w-[60%]">
//           <div className="inline-block bg-black/60 text-white px-5 py-3 text-sm sm:text-base md:text-lg font-bold tracking-widest leading-relaxed whitespace-pre-line">
//             {slide.name}
//           </div>
//         </div>

//         {/* Arrows */}
//         <button
//           onClick={prev}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 text-4xl shadow-md z-10 hover:bg-white"
//         >
//           ‹
//         </button>

//         <button
//           onClick={next}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 text-4xl shadow-md z-10 hover:bg-white"
//         >
//           ›
//         </button>
//       </div>
//     </section>
//   );
// }
