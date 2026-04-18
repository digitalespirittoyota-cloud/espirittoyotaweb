

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function FeatureGallery() {
//   return (
//     <section className="w-full bg-white px-4 md:px-10 lg:px-20 py-10">
//       <div className="max-w-7xl mx-auto space-y-6">

//         {/* Top Row – 2 Images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <AnimatedGalleryItem
//             img="/hilux/Bold-Trapezoidal-grille-with-Chrome-surround-1158x630.webp"
//             label="Bold Trapezoidal Grille With Chrome Surround"
//             labelBg="bg-black"
//             direction="left"
//           />
//           <AnimatedGalleryItem
//             img="/hilux/Super-chrome-alloy-wheel-design.webp"
//             label="Super Chrome Alloy Wheel Design"
//             labelBg="bg-black"
//             direction="right"
//           />
//         </div>

//         {/* Bottom Row – 3 Images */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatedGalleryItem
//             img="/hilux/LED-Rear-combi-lamps.webp"
//             label="LED Rear Combi Lamps"
//             labelBg="bg-black"
//             direction="up"
//           />
//           <AnimatedGalleryItem
//             img="/hilux/chrome-rear-bumper.webp"
//             label="Chrome Rear Bumper"
//             labelBg="bg-black"
//             direction="up"
//           />
//           <AnimatedGalleryItem
//             img="/hilux/LED-front-fog-lamps.webp"
//             label="LED Front Fog Lamps"
//             labelBg="bg-black"
//             direction="up"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

// function AnimatedGalleryItem({ img, label, labelBg, direction }) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true); // element entered viewport
//         } else {
//           setIsVisible(false); // element left viewport
//         }
//       },
//       { threshold: 0.2 } // trigger when 20% visible
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   // Tailwind transform based on direction
//   const initialTransform = {
//     left: "-translate-x-20 opacity-0",
//     right: "translate-x-20 opacity-0",
//     up: "translate-y-10 opacity-0",
//   };

//   return (
//     <div
//       ref={ref}
//       className={`relative overflow-hidden group transition-transform duration-700 ease-out
//         ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : initialTransform[direction]}`}
//     >
//       <img
//         src={img}
//         alt={label}
//         className="w-full h-[220px] md:h-[280px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
//       />

//       {/* Label */}
//       <div
//         className={`absolute top-0 left-0 ${labelBg} text-white text-sm md:text-base px-4 py-2`}
//       >
//         {label}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";

export default function FeatureGallery() {
  return (
    <section className="w-full bg-white px-4 md:px-10 lg:px-20 py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Top Row – 2 Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedGalleryItem
            img="/hilux/Bold-Trapezoidal-grille-with-Chrome-surround-1158x630.webp"
            label="Bold Trapezoidal Grille With Chrome Surround"
            labelBg="bg-black"
            direction="left"
          />
          <AnimatedGalleryItem
            img="/hilux/Super-chrome-alloy-wheel-design.webp"
            label="Super Chrome Alloy Wheel Design"
            labelBg="bg-black"
            direction="right"
          />
        </div>

        {/* Bottom Row – 3 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedGalleryItem
            img="/hilux/LED-Rear-combi-lamps.webp"
            label="LED Rear Combi Lamps"
            labelBg="bg-black"
            direction="up"
          />
          <AnimatedGalleryItem
            img="/hilux/chrome-rear-bumper.webp"
            label="Chrome Rear Bumper"
            labelBg="bg-black"
            direction="up"
          />
          <AnimatedGalleryItem
            img="/hilux/LED-front-fog-lamps.webp"
            label="LED Front Fog Lamps"
            labelBg="bg-black"
            direction="up"
          />
        </div>

      </div>
    </section>
  );
}

interface AnimatedGalleryItemProps {
  img: string;
  label: string;
  labelBg: string;
  direction: "left" | "right" | "up";
}

function AnimatedGalleryItem({ img, label, labelBg, direction }: AnimatedGalleryItemProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        else setIsVisible(false);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Tailwind transforms for initial off-screen positions
  const initialTransform = {
    left: "-translate-x-16 opacity-0", // slightly smaller to avoid scrollbar
    right: "translate-x-16 opacity-0",
    up: "translate-y-10 opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-lg group transition-transform duration-700 ease-out
        ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : initialTransform[direction]}`}
    >
      <img
        src={img}
        alt={label}
        className="w-full h-[220px] md:h-[280px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className={`absolute top-0 left-0 ${labelBg} text-white text-sm md:text-base px-4 py-2`}>
        {label}
      </div>
    </div>
  );
}

