

// "use client";

// const data = {
//   topImage: {
//     src: "/hilux/Tent-with-Canopy.jpg",
//     label: "Tent with Canopy#",
//   },
//   bottomImages: [
//     {
//       src: "/hilux/Stylish-Roll-Bar-And-Over-Fender.webp",
//       label: "Stylish Roll Bar & Over Fender",
//     },
//     {
//       src: "/hilux/Tail-Gate-Assist.webp",
//       label: "Tail Gate Assist",
//     },
//     {
//       src: "/hilux/Wireless-charger.webp",
//       label: "Wireless Charger",
//     },
//     {
//         src:"/hilux/Awning.webp",
//         label:"TPMS & Air Compressor",
//     },
//     {
//         src:"/hilux/TPMS.webp",
//         label:"Front Under-run",
//     },
//     {
//         src:"/hilux/Tonneau-cover.webp",
//         label:"Tonneau cover#",
//     }
//   ],
// };

// export default function FeatureSectionGallery() {
//   return (
//     <section className="w-full bg-white py-8 px-4 md:px-8">
//       {/* WIDTH CONTROL CONTAINER */}
//       <div className="max-w-[1200px] mx-auto">
//         {/* ACCESSORIES HEADING – ALIGNED WITH IMAGE WIDTH */}
//         <div className="flex justify-end mb-4">
//           <h2 className="text-black text-lg md:text-2xl font-bold border-t-2 border-r-2 border-red-600 px-3 py-1">
//             Accessories
//           </h2>
//         </div>

//         {/* TOP IMAGE */}
//         <div className="relative w-full mb-8 overflow-hidden rounded-lg group">
//           <img
//             src={data.topImage.src}
//             alt=""
//             className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 text-sm font-medium transition-colors duration-300 group-hover:bg-red-600">
//             {data.topImage.label}
//           </span>
//         </div>

//         {/* BOTTOM IMAGES – LEFT BIG, RIGHT SMALL */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* BIG IMAGE */}
//           <div className="relative md:col-span-2 overflow-hidden rounded-lg group">
//             <img
//   src={data.bottomImages[0].src}
//   className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
// />

//             <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm transition-colors duration-300 group-hover:bg-red-600">
//               {data.bottomImages[0].label}
//             </span>
//           </div>

//           {/* SMALL IMAGE 1 */}
//           <div className="relative md:col-span-1 overflow-hidden rounded-lg group">
//           <img
//   src={data.bottomImages[1].src}
//   className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
// />

//             <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm transition-colors duration-300 group-hover:bg-red-600">
//               {data.bottomImages[1].label}
//             </span>
//           </div>

//           {/* SMALL IMAGE 2 */}
//           <div className="relative md:col-span-1 overflow-hidden rounded-lg group">
//           <img
//   src={data.bottomImages[2].src}
//   className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
// />

//             <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm transition-colors duration-300 group-hover:bg-red-600">
//               {data.bottomImages[2].label}
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

const data = {
  topImage: {
    src: "/hilux/Tent-with-Canopy.jpg",
    label: "Tent with Canopy#",
  },
  bottomImages: [
    {
      src: "/hilux/Stylish-Roll-Bar-And-Over-Fender.webp",
      label: "Stylish Roll Bar & Over Fender",
    },
    {
      src: "/hilux/Tail-Gate-Assist.webp",
      label: "Tail Gate Assist",
    },
    {
      src: "/hilux/Wireless-charger.webp",
      label: "Wireless Charger",
    },
    {
      src: "/hilux/Awning.webp",
      label: "TPMS & Air Compressor",
    },
    {
      src: "/hilux/TPMS.webp",
      label: "Front Under-run",
    },
    {
      src: "/hilux/Tonneau-cover.webp",
      label: "Tonneau cover#",
    },
  ],
};

export default function FeatureSectionGallery() {
  return (
    <section className="w-full bg-white py-8 px-4 md:px-8">
      {/* WIDTH CONTROL CONTAINER */}
      <div className="max-w-[1200px] mx-auto">
        {/* ACCESSORIES HEADING */}
        <div className="flex justify-end mb-4">
          <h2 className="text-black text-lg md:text-2xl font-bold border-t-2 border-r-2 border-red-600 px-3 py-1">
            Accessories
          </h2>
        </div>

        {/* TOP IMAGE */}
        <div className="relative w-full mb-8 overflow-hidden rounded-lg group">
          <img
            src={data.topImage.src}
            alt=""
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 text-sm font-medium transition-colors duration-300 group-hover:bg-red-600">
            {data.topImage.label}
          </span>
        </div>

        {/* BOTTOM IMAGES – AUTO 3 IMAGE PATTERN */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.bottomImages.map((item, index) => {
            const isBig = index % 3 === 0;

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg group ${
                  isBig ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px]
                             object-cover transition-transform duration-500
                             group-hover:scale-110"
                />
                <span
                  className="absolute top-2 left-2 bg-black text-white
                             px-2 py-1 text-sm transition-colors
                             duration-300 group-hover:bg-red-600"
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* DISCLAIMER + DOWNLOAD BUTTON */}
<div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
  
  {/* DISCLAIMER TEXT */}
  <p className="text-xs md:text-sm text-gray-600 max-w-3xl">
    * Accessories shown here are purely for visual representation and are not
    manufactured by TKM.
  </p>

  {/* DOWNLOAD BUTTON */}
  <a
  href="/hilux/accessories-brochure-hilux.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-black text-white text-sm md:text-base
             px-5 py-3 font-semibold uppercase tracking-wide
             hover:bg-red-600 transition-colors duration-300"
>
  <span>Download Accessories Brochure</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
    />
  </svg>
</a>

</div>

      </div>
    </section>
  );
}
