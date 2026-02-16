


// "use client";

// import { useState } from "react";

// interface Item {
//   image: string;
//   caption: string[];
// }

// interface Props {
//   title: string;
//   items: Item[];
// }

// export default function TaisorStyleCarousel({ title, items }: Props) {
//   const [active, setActive] = useState(0);

//   const prev = () =>
//     setActive((p) => (p === 0 ? items.length - 1 : p - 1));

//   const next = () =>
//     setActive((p) => (p === items.length - 1 ? 0 : p + 1));

//   return (
//     <section
//       className="w-full relative bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/urban-cruiser-taisor/bgimage.svg')",
//       }}
//     >
//       <div className="flex flex-col lg:flex-row w-full min-h-[520px]">

//         {/* LEFT SIDE */}
//         <div className="lg:w-[35%] relative py-12">
//           <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:22px_22px]" />

//           <div className="relative z-10 px-6 sm:px-10 lg:pl-[72px]">
//             <p className="italic text-[16px] sm:text-[18px] text-[#444] max-w-[340px] leading-snug mb-10">
//               {title}
//             </p>

//             {/* BIGGER THUMBNAILS */}
//             <div className="grid grid-cols-3 sm:grid-cols-3 gap-[16px] sm:gap-[22px] w-full max-w-[420px]">
//               {items.map((item, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActive(i)}
//                   className={`transition-all duration-300 ${
//                     active === i ? "bg-red-600 p-[3px]" : ""
//                   }`}
//                 >
//                   <div className="bg-white">
//                     <img
//                       src={item.image}
//                       alt=""
//                       className="w-full h-[90px] sm:h-[110px] object-cover"
//                     />
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="lg:w-[65%] flex items-center justify-start py-10">
//           <div className="relative w-full">

//             <div className="relative overflow-hidden">
//               <img
//                 key={active}
//                 src={items[active].image}
//                 alt=""
//                 className="w-full h-[260px] sm:h-[380px] lg:h-[550px] object-cover animate-imageSwap"
//               />

//               {/* CAPTION + ARROWS */}
//               <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6">

//                 <button onClick={prev} className="opacity-70">
//                   <img
//                     src="/urbancruiser-taisor/prev (1).svg"
//                     alt="Previous"
//                     className="w-10 h-10 sm:w-14 sm:h-14"
//                   />
//                 </button>

//                 <div className="bg-gray-300 px-6 sm:px-8 py-3 sm:py-4 skew-x-[-12deg] shadow-md min-w-[200px] sm:min-w-[240px]">
//                   <div className="skew-x-[12deg] text-[12px] sm:text-[14px] font-bold uppercase leading-tight">
//                     {items[active].caption.map((line, i) => (
//                       <div key={i}>{line}</div>
//                     ))}
//                   </div>
//                 </div>

//                 <button onClick={next} className="opacity-70">
//                   <img
//                     src="/urbancruiser-taisor/next (1).svg"
//                     alt="Next"
//                     className="w-10 h-10 sm:w-14 sm:h-14"
//                   />
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ANIMATION */}
//       <style jsx>{`
//         @keyframes imageSwap {
//           from {
//             opacity: 0;
//             transform: translateX(14px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         .animate-imageSwap {
//           animation: imageSwap 0.45s ease;
//         }
//       `}</style>
//     </section>
//   );
// }





"use client";

import { useState } from "react";

interface Item {
  image: string;
  caption: string[];
}

interface Props {
  title: string;
  items: Item[];
}

export default function TaisorStyleCarousel({ title, items }: Props) {
  const [active, setActive] = useState(0);

  if (!items?.length) return null; // ✅ safety

  const prev = () =>
    setActive((p) => (p === 0 ? items.length - 1 : p - 1));

  const next = () =>
    setActive((p) => (p === items.length - 1 ? 0 : p + 1));

  return (
    <section
      className="w-full relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/urban-cruiser-taisor/bgimage.svg')",
      }}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-[520px]">

        {/* LEFT */}
        <div className="lg:w-[35%] relative py-10 sm:py-12">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:22px_22px]" />

          <div className="relative z-10 px-4 sm:px-6 lg:pl-[72px]">
            <p className="italic text-[15px] sm:text-[18px] text-[#444] max-w-[340px] mb-8 sm:mb-10">
              {title}
            </p>

            <div className="grid grid-cols-3 gap-[12px] sm:gap-[22px] max-w-[420px]">
              {items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    active === i ? "bg-red-600 p-[3px]" : ""
                  }`}
                >
                  <div className="bg-white">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-[80px] sm:h-[110px] object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-[65%] flex items-center justify-center py-8 sm:py-10">
          <div className="relative w-full overflow-hidden">
            <img
              key={active}
              src={items[active].image}
              alt=""
              className="
                w-full
                h-[220px]
                sm:h-[320px]
                md:h-[420px]
                lg:h-[550px]
                object-cover
                animate-imageSwap
              "
            />

            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6">
              <button onClick={prev} className="opacity-70">
                <img
                  src="/urbancruiser-taisor/prev (1).svg"
                  className="w-9 h-9 sm:w-14 sm:h-14"
                />
              </button>

              <div className="bg-gray-300 px-4 sm:px-8 py-2 sm:py-4 skew-x-[-12deg] shadow-md min-w-[180px] sm:min-w-[240px]">
                <div className="skew-x-[12deg] text-[11px] sm:text-[14px] font-bold uppercase">
                  {items[active].caption.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>

              <button onClick={next} className="opacity-70">
                <img
                  src="/urbancruiser-taisor/next (1).svg"
                  className="w-9 h-9 sm:w-14 sm:h-14"
                />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}