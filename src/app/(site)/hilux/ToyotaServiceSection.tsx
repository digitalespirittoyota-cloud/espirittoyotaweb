


// "use client";
// import { useState, useEffect, useRef } from "react";

// const tabs = [
//   {
//     title: "QUALITY & SERVICE",
//     images: [
//       "/hilux/unmached-warranty.webp",
//       "/hilux/extended-warranty.webp",
//       "/hilux/em-60.webp",
//       "/hilux/sales-service-network.webp",
//     ],
//   },
//   {
//     title: "CARE & CONVENIENCE SERVICES",
//     images: [
//       "/hilux/24x7-548-246.webp",
//       "/hilux/toyota-connect.webp",
//       "/hilux/number.webp",
//       "/hilux/smiles.webp",
//     ],
//   },
//   {
//     title: "ADDITIONAL BENEFITS",
//     images: [
//       "/hilux/toyota-trust.webp",
//       "/hilux/toyota-financial.webp",
//     ],
//   },
// ];

// export default function ToyotaServiceSection() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [inView, setInView] = useState(false);
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setInView(entry.isIntersecting);
//         });
//       },
//       { threshold: 0.25 }
//     );

//     if (gridRef.current) observer.observe(gridRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="w-full bg-white py-12">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* TOP TABS */}
//         <div className="flex justify-between border-b border-gray-300">
//           {tabs.map((tab, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTab(index)}
//               className={`relative pb-4 text-sm md:text-base font-medium tracking-wide transition-colors
//                 ${activeTab === index ? "text-black" : "text-gray-500"}`}
//             >
//               {tab.title}

//               {activeTab === index && (
//                 <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-600" />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* IMAGE GRID */}
//         <div
//           ref={gridRef}
//           className={`mt-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
//             ${inView ? "translate-y-0 opacity-100" : "translate-y-[60px] opacity-0"}
//           `}
//         >
//           <div
//             className={`grid gap-6 ${
//               tabs[activeTab].images.length === 4
//                 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
//                 : "grid-cols-1 sm:grid-cols-2"
//             }`}
//           >
//             {tabs[activeTab].images.map((img, i) => (
//               <div
//                 key={i}
//                 className="flex items-center justify-center h-[140px] md:h-[160px]"
//               >
//                 <img
//                   src={img}
//                   alt=""
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }






"use client";
import { useState, useEffect, useRef } from "react";

const tabs = [
  {
    title: "QUALITY & SERVICE",
    images: [
      "/hilux/unmached-warranty.webp",
      "/hilux/extended-warranty.webp",
      "/hilux/em-60.webp",
      "/hilux/sales-service-network.webp",
    ],
  },
  {
    title: "CARE & CONVENIENCE SERVICES",
    images: [
      "/hilux/24x7-548-246.webp",
      "/hilux/toyota-connect.webp",
      "/hilux/number.webp",
      "/hilux/smiles.webp",
    ],
  },
  {
    title: "ADDITIONAL BENEFITS",
    images: [
      "/hilux/toyota-trust.webp",
      "/hilux/toyota-financial.webp",
    ],
  },
];

export default function ToyotaServiceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [inView, setInView] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  // Calculate responsive height based on number of rows
  const getCardHeight = () => {
    const totalCards = tabs[activeTab].images.length;
    if (totalCards <= 2) return "h-[200px] md:h-[220px]";
    if (totalCards === 4) return "h-[160px] md:h-[180px]";
    return "h-[180px] md:h-[200px]";
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP TABS */}
        <div className="flex justify-between border-b border-gray-300">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative pb-4 text-sm md:text-base font-medium tracking-wide transition-colors
                ${activeTab === index ? "text-black" : "text-gray-500"}`}
            >
              {tab.title}
              {activeTab === index && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-600" />
              )}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}
        <div
          ref={gridRef}
          className={`mt-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${inView ? "translate-y-0 opacity-100" : "translate-y-[60px] opacity-0"}
          `}
        >
          <div
            className={`grid gap-0 ${
              tabs[activeTab].images.length === 4
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {tabs[activeTab].images.map((img, i) => (
              <div
                key={i}
                className={`flex items-center justify-center ${getCardHeight()} p-0 m-0`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain m-0"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
