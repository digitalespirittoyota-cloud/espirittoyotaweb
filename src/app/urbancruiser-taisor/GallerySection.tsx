// "use client";

// import { useState } from "react";

// type Category = "all" | "exterior" | "interior";

// interface GalleryItem {
//   src: string;
//   type: Category;
// }

// const galleryData: GalleryItem[] = [
//   { src: "/urbancruiser-taisor/Gallery_1.jpg", type: "exterior" },
//   { src: "/urbancruiser-taisor/d27_Gallery_2_1400x600px.jpg", type: "exterior" },
//   {src:"/urbancruiser-taisor/d27_Gallery_3_1400x600px.jpg",type:"exterior"},
//   {src:"/urbancruiser-taisor/d27_Gallery_4.jpg",type:"exterior"},
//   {src:"/urbancruiser-taisor/d27_Gallery_7_1400x600px.jpg",type:"exterior"},
//   { src: "/urbancruiser-taisor/d27_Gallery_5.png", type: "interior" },
//   { src: "/urbancruiser-taisor/d27_Gallery_6_1400x600px.jpg", type: "interior" },
// ];

// export default function GallerySection() {
//   const [activeTab, setActiveTab] = useState<Category>("all");
//   const [activeIndex, setActiveIndex] = useState(0);

//   const filteredImages =
//     activeTab === "all"
//       ? galleryData
//       : galleryData.filter((img) => img.type === activeTab);

//   const prev = () => {
//     setActiveIndex((p) => (p === 0 ? filteredImages.length - 1 : p - 1));
//   };

//   const next = () => {
//     setActiveIndex((p) => (p === filteredImages.length - 1 ? 0 : p + 1));
//   };

//   return (
//     <section
//       className="relative py-20 overflow-hidden"
//       style={{
//         backgroundImage: "url('/gallery/bg-pattern.svg')",
//         backgroundRepeat: "repeat",
//       }}
//     >
//       {/* TITLE */}
//       <h2 className="text-center text-[32px] sm:text-[40px] font-bold tracking-widest mb-8">
//         GALLERY
//       </h2>

//       {/* TABS */}
//       <div className="flex justify-center gap-4 mb-10">
//         {["all", "exterior", "interior"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => {
//               setActiveTab(tab as Category);
//               setActiveIndex(0);
//             }}
//             className={`px-6 py-2 italic border text-sm transition-all
//               ${
//                 activeTab === tab
//                   ? "bg-red-600 text-white border-red-600"
//                   : "border-gray-400 text-black hover:bg-gray-100"
//               }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* CAROUSEL */}
//       <div className="relative max-w-[1200px] mx-auto px-4">
//         {/* IMAGE */}
//         <div className="relative overflow-hidden rounded-md shadow-xl">
//           <img
//             src={filteredImages[activeIndex].src}
//             alt="Gallery"
//             className="w-full h-[220px] sm:h-[360px] md:h-[440px] object-cover transition-all duration-500"
//           />
//         </div>

//         {/* LEFT ARROW */}
//         <button
//           onClick={prev}
//           className="absolute left-[-20px] sm:left-[-40px] top-1/2 -translate-y-1/2"
//         >
//           <img
//             src="/urbancruiser-taisor/prev (1).svg"
//             alt="Previous"
//             className="w-8 sm:w-10 opacity-70 hover:opacity-100"
//           />
//         </button>

//         {/* RIGHT ARROW */}
//         <button
//           onClick={next}
//           className="absolute right-[-20px] sm:right-[-40px] top-1/2 -translate-y-1/2"
//         >
//           <img
//             src="/urbancruiser-taisor/next (1).svg"
//             alt="Next"
//             className="w-8 sm:w-10 opacity-70 hover:opacity-100"
//           />
//         </button>
//       </div>
//     </section>
//   );
// }





"use client";

import { useEffect, useRef, useState } from "react";

type Category = "all" | "exterior" | "interior";

interface GalleryItem {
  src: string;
  type: Category;
}

const images: GalleryItem[] = [
   { src: "/urbancruiser-taisor/Gallery_1.jpg", type: "exterior" },
  { src: "/urbancruiser-taisor/d27_Gallery_2_1400x600px.jpg", type: "exterior" },
  {src:"/urbancruiser-taisor/d27_Gallery_3_1400x600px.jpg",type:"exterior"},
  {src:"/urbancruiser-taisor/d27_Gallery_4.jpg",type:"exterior"},
   {src:"/urbancruiser-taisor/d27_Gallery_7_1400x600px.jpg",type:"exterior"},
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

  // AUTOPLAY
 
  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/gallery/bg-pattern.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* TITLE */}
      <h2 className="text-center text-[34px] md:text-[42px] font-bold tracking-widest mb-8">
        GALLERY
      </h2>

      {/* FILTER TABS */}
      <div className="flex justify-center gap-4 mb-10">
        {["all", "exterior", "interior"].map((t) => (
          <button
            key={t}
            onClick={() => {
              setTab(t as Category);
              setIndex(0);
            }}
            className={`px-6 py-2 italic border text-sm transition
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
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {filtered.map((img, i) => (
              <img
                key={i}
                src={img.src}
                className="min-w-full h-[240px] sm:h-[380px] md:h-[460px] object-cover"
                alt="gallery"
              />
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-[-24px] sm:left-[-50px] top-1/2 -translate-y-1/2"
        >
          <img src="/icons/arrow-left.svg" className="w-8 sm:w-10 opacity-70" />
        </button>

        <button
          onClick={next}
          className="absolute right-[-24px] sm:right-[-50px] top-1/2 -translate-y-1/2"
        >
          <img src="/icons/arrow-right.svg" className="w-8 sm:w-10 opacity-70" />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex justify-center gap-3 mt-8 px-4 overflow-x-auto">
        {filtered.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`border-2 transition
              ${
                i === index
                  ? "border-red-600"
                  : "border-transparent opacity-60"
              }`}
          >
            <img
              src={img.src}
              className="w-24 h-14 object-cover"
              alt="thumb"
            />
          </button>
        ))}
      </div>
    </section>
  );
}