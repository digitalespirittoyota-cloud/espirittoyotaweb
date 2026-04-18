



// "use client";

// import { useEffect, useRef, useState } from "react";

// type Category = "all" | "exterior" | "interior";

// interface GalleryItem {
//   src: string;
//   type: Category;
// }

// const images: GalleryItem[] = [
//    { src: "/urbancruiser-taisor/Gallery_1.jpg", type: "exterior" },
//   { src: "/urbancruiser-taisor/d27_Gallery_2_1400x600px.jpg", type: "exterior" },
//   {src:"/urbancruiser-taisor/d27_Gallery_3_1400x600px.jpg",type:"exterior"},
//   {src:"/urbancruiser-taisor/d27_Gallery_4.jpg",type:"exterior"},
//    {src:"/urbancruiser-taisor/d27_Gallery_7_1400x600px.jpg",type:"exterior"},
//   { src: "/urbancruiser-taisor/d27_Gallery_5.png", type: "interior" },
//   { src: "/urbancruiser-taisor/d27_Gallery_6_1400x600px.jpg", type: "interior" },
// ];

// export default function GallerySection() {
//   const [tab, setTab] = useState<Category>("all");
//   const [index, setIndex] = useState(0);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   const filtered =
//     tab === "all" ? images : images.filter((i) => i.type === tab);

//   const next = () =>
//     setIndex((p) => (p === filtered.length - 1 ? 0 : p + 1));

//   const prev = () =>
//     setIndex((p) => (p === 0 ? filtered.length - 1 : p - 1));

//   // AUTOPLAY
 
//   return (
//     <section
//       className="py-20 bg-white relative overflow-hidden"
//       style={{
//         backgroundImage: "url('/gallery/bg-pattern.svg')",
//         backgroundRepeat: "repeat",
//       }}
//     >
//       {/* TITLE */}
//       <h2 className="text-center text-[34px] md:text-[42px] font-bold tracking-widest mb-8">
//         GALLERY
//       </h2>

//       {/* FILTER TABS */}
//       <div className="flex justify-center gap-4 mb-10">
//         {["all", "exterior", "interior"].map((t) => (
//           <button
//             key={t}
//             onClick={() => {
//               setTab(t as Category);
//               setIndex(0);
//             }}
//             className={`px-6 py-2 italic border text-sm transition
//               ${
//                 tab === t
//                   ? "bg-red-600 text-white border-red-600"
//                   : "border-gray-400 hover:bg-gray-100"
//               }`}
//           >
//             {t[0].toUpperCase() + t.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* MAIN CAROUSEL */}
//       <div className="relative max-w-[1200px] mx-auto px-4">
//         <div className="overflow-hidden rounded-md shadow-xl">
//           <div
//             className="flex transition-transform duration-700"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {filtered.map((img, i) => (
//               <img
//                 key={i}
//                 src={img.src}
//                 className="min-w-full h-[240px] sm:h-[380px] md:h-[460px] object-cover"
//                 alt="gallery"
//               />
//             ))}
//           </div>
//         </div>

//         {/* ARROWS */}
//         <button
//           onClick={prev}
//           className="absolute left-[-24px] sm:left-[-50px] top-1/2 -translate-y-1/2"
//         >
//           <img src="/icons/arrow-left.svg" className="w-8 sm:w-10 opacity-70" />
//         </button>

//         <button
//           onClick={next}
//           className="absolute right-[-24px] sm:right-[-50px] top-1/2 -translate-y-1/2"
//         >
//           <img src="/icons/arrow-right.svg" className="w-8 sm:w-10 opacity-70" />
//         </button>
//       </div>

//       {/* THUMBNAILS */}
//       <div className="flex justify-center gap-3 mt-8 px-4 overflow-x-auto">
//         {filtered.map((img, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`border-2 transition
//               ${
//                 i === index
//                   ? "border-red-600"
//                   : "border-transparent opacity-60"
//               }`}
//           >
//             <img
//               src={img.src}
//               className="w-24 h-14 object-cover"
//               alt="thumb"
//             />
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// }








"use client";

import { useRef, useState } from "react";

type Category = "all" | "exterior" | "interior";

interface GalleryItem {
  src: string;
  type: Category;
}

const images: GalleryItem[] = [
  { src: "/urbancruiser-taisor/Gallery_1.jpg", type: "exterior" },
  { src: "/urbancruiser-taisor/d27_Gallery_2_1400x600px.jpg", type: "exterior" },
  { src: "/urbancruiser-taisor/d27_Gallery_3_1400x600px.jpg", type: "exterior" },
  { src: "/urbancruiser-taisor/d27_Gallery_4.jpg", type: "exterior" },
  { src: "/urbancruiser-taisor/d27_Gallery_7_1400x600px.jpg", type: "exterior" },
  { src: "/urbancruiser-taisor/d27_Gallery_5.png", type: "interior" },
  { src: "/urbancruiser-taisor/d27_Gallery_6_1400x600px.jpg", type: "interior" },
];

export default function GallerySection() {
  const [tab, setTab] = useState<Category>("all");
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filtered =
    tab === "all" ? images : images.filter((i) => i.type === tab);

  const next = () =>
    setIndex((p) => (p === filtered.length - 1 ? 0 : p + 1));

  const prev = () =>
    setIndex((p) => (p === 0 ? filtered.length - 1 : p - 1));

  return (
    <section
      className="py-14 sm:py-20 bg-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/gallery/bg-pattern.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* TITLE */}
      <h2 className="text-center text-[28px] sm:text-[34px] md:text-[42px] font-bold tracking-widest mb-8">
        GALLERY
      </h2>

      {/* FILTER TABS */}
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-10 px-4">
        {["all", "exterior", "interior"].map((t) => (
          <button
            key={t}
            onClick={() => {
              setTab(t as Category);
              setIndex(0);
            }}
            className={`px-5 sm:px-6 py-2 italic border text-sm transition
              ${
                tab === t
                  ? "bg-red-600 text-white border-red-600"
                  : "border-gray-400 hover:bg-gray-100"
              }`}
          >
            {t[0].toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* MAIN CAROUSEL */}
      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className="overflow-hidden rounded-md shadow-xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {filtered.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt="gallery"
                className="
                  min-w-full object-cover
                  h-[220px]
                  sm:h-[320px]
                  md:h-[420px]
                  lg:h-[460px]
                "
              />
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="
            absolute left-2 sm:left-[-40px]
            top-1/2 -translate-y-1/2
            z-10
          "
        >
          <img
            src="/icons/arrow-left.svg"
            className="w-7 sm:w-9 opacity-70"
            alt="prev"
          />
        </button>

        <button
          onClick={next}
          className="
            absolute right-2 sm:right-[-40px]
            top-1/2 -translate-y-1/2
            z-10
          "
        >
          <img
            src="/icons/arrow-right.svg"
            className="w-7 sm:w-9 opacity-70"
            alt="next"
          />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex justify-start sm:justify-center gap-3 mt-8 px-4 overflow-x-auto">
        {filtered.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`border-2 flex-shrink-0 transition
              ${
                i === index
                  ? "border-red-600"
                  : "border-transparent opacity-60"
              }`}
          >
            <img
              src={img.src}
              alt="thumb"
              className="
                w-20 h-12
                sm:w-24 sm:h-14
                object-cover
              "
            />
          </button>
        ))}
      </div>
    </section>
  );
}