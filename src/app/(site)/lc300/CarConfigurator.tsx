
// "use client";

// import { useState } from "react";
// import Image from "next/image";

// /* ===================== DATA ===================== */

// const DATA = {
//   ZX: {
//     exterior: [
//       {
//         name: "Attitude Black",
//         carImg: "/lc300/lc300-LX-EXT-B-1250x750.webp",
//         bg: "bg-gradient-to-r from-black to-zinc-800",
//         text: "text-white",
//       },
//       {
//         name: "Precious White Pearl",
//         carImg: "/lc300/lc300-LX-EXT-W-1250x750.webp",
//         bg: "bg-[#e6e6e6]",
//         text: "text-black",
//       },
//     ],
//     interior: [
//       {
//         name: "Neutral Beige",
//         carImg: "/lc300/lc300-INT-NB-1250x750.webp",
//         texture: "/lc300/int-colors01-611x176.webp",
//         text: "text-white",
//       },
//       {
//         name: "Black",
//         carImg: "/lc300/lc300-INT-B-1250x750.webp",
//         texture: "/lc300/int-colors03-611x176.webp",
//         text: "text-white",
//       },
//     ],
//   },

//   GRS: {
//     exterior: [
//          {
//         name: "Attitude Black",
//         carImg: "/lc300/lc300-GRS-EXT-B-1250x750.webp",
//         bg: "bg-gradient-to-r from-black to-zinc-800",
//         text: "text-white",
//       },
//       {
//         name: "Precious White Pearl",
//         carImg: "/lc300/lc300-GRS-EXT-W-1250x750.webp",
//         bg: "bg-[#e6e6e6]",
//         text: "text-black",
//       },
//     ],
//     interior: [
//       {
//         name: "Red & Black",
//         carImg: "/lc300/lc300-INT-RB-1250x750.webp",
//         texture: "/lc300/int-colors02-611x176.webp",
//         text: "text-white",
//       },
//        {
//         name: "Black",
//         carImg: "/lc300/lc300-INT-B-1250x750 (1).webp",
//         texture: "/lc300/int-colors03-611x176 (1).webp",
//         text: "text-white",
//       },
//     ],
//   },
// };

// /* ===================== COMPONENT ===================== */

// export default function CarConfigurator() {
//   const [model, setModel] = useState<"ZX" | "GRS">("ZX");
//   const [view, setView] = useState<"Exterior" | "Interior">("Exterior");
//   const [extIndex, setExtIndex] = useState(0);
//   const [intIndex, setIntIndex] = useState(0);

//   const carImage =
//     view === "Exterior"
//       ? DATA[model].exterior[extIndex].carImg
//       : DATA[model].interior[intIndex].carImg;

//   return (
//     <section className="w-full bg-white px-6 lg:px-14 py-10">
//       <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-start">
//         {/* ================= LEFT PANEL ================= */}
//         <div>
//           {/* -------- Colours -------- */}
//           <h2 className="text-3xl font-medium mb-4">Colours</h2>
//           <div className="space-y-4 mb-10">
//             {DATA[model].exterior.map((c, i) => (
//              <button
//   key={c.name}
//   onClick={() => {
//     setExtIndex(i);
//     setView("Exterior");
//   }}
//   className={`relative w-full h-[64px] px-6 flex items-center justify-between
//     ${c.bg} ${c.text} transition-all`}
//   style={{
//     clipPath:
//       "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
//     opacity:
//       view === "Exterior" && extIndex === i ? 1 : 0.45,
//   }}
// >
//   <span className="text-base font-medium">{c.name}</span>
//   {view === "Exterior" && extIndex === i && (
//     <span className="text-xl">✓</span>
//   )}
// </button>
//             ))}
//           </div>

//           {/* -------- Interior -------- */}
//           <h2 className="text-3xl font-medium mb-4">Interior</h2>
//           <div className="space-y-4">
//             {DATA[model].interior.map((c, i) => (
//              <button
//   key={c.name}
//   onClick={() => {
//     setIntIndex(i);
//     setView("Interior");
//   }}
//   className={`relative w-full h-[64px] px-6 flex items-center justify-between ${c.text} transition-all`}
//   style={{
//     backgroundImage: `url(${c.texture})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     clipPath:
//       "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
//     opacity:
//       view === "Interior" && intIndex === i ? 1 : 0.45,
//   }}
// >
//   <span className="text-base font-medium">{c.name}</span>
//   {view === "Interior" && intIndex === i && (
//     <span className="text-xl">✓</span>
//   )}
// </button>
//             ))}
//           </div>

//           {/* -------- Note -------- */}
//           <p className="text-xs text-gray-500 mt-8 leading-relaxed">
//            Note: Vehicles pictured and specifications detailed in this brochure may vary between models and equipment. Addition of extra features may change figures in this chart. Toyota Kirloskar Motor Pvt. Ltd. reserves the right to alter the details of specifications and equipment without a notice. Actual colour of the vehicle body & upholstery might differ slightly from the images depicted in this brochure. Features are grade specific.


//           </p>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div>
//           {/* Car Image */}
//           <div className="relative w-full aspect-[16/9]">
//             <Image
//               src={carImage}
//               alt="Toyota LC300"
//               fill
//               priority
//               className="object-contain"
//             />
//           </div>

//           {/* Bottom Controls */}
//           <div className="flex justify-center gap-4 mt-6">
//             {/* ZX / GRS */}
//             <div className="flex rounded-full border overflow-hidden">
//               {(["ZX", "GRS"] as const).map((m) => (
//                 <button
//                   key={m}
//                   onClick={() => {
//                     setModel(m);
//                     setExtIndex(0);
//                     setIntIndex(0);
//                   }}
//                   className={`px-8 py-2 text-sm font-medium ${
//                     model === m
//                       ? "bg-black text-white"
//                       : "bg-white"
//                   }`}
//                 >
//                   {m}
//                 </button>
//               ))}
//             </div>

//             {/* Exterior / Interior */}
//             <div className="flex rounded-full border overflow-hidden">
//               {(["Exterior", "Interior"] as const).map((v) => (
//                 <button
//                   key={v}
//                   onClick={() => setView(v)}
//                   className={`px-6 py-2 text-sm font-medium ${
//                     view === v
//                       ? "bg-black text-white"
//                       : "bg-white"
//                   }`}
//                 >
//                   {v}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import { useState } from "react";
import Image from "next/image";

/* ===================== DATA ===================== */

const DATA = {
  ZX: {
    exterior: [
      {
        name: "Attitude Black",
        carImg: "/lc300/lc300-LX-EXT-B-1250x750.webp",
        bg: "bg-gradient-to-r from-black to-zinc-800",
        text: "text-white",
      },
      {
        name: "Precious White Pearl",
        carImg: "/lc300/lc300-LX-EXT-W-1250x750.webp",
        bg: "bg-[#e6e6e6]",
        text: "text-black",
      },
    ],
    interior: [
      {
        name: "Neutral Beige",
        carImg: "/lc300/lc300-INT-NB-1250x750.webp",
        texture: "/lc300/int-colors01-611x176.webp",
        text: "text-white",
      },
      {
        name: "Black",
        carImg: "/lc300/lc300-INT-B-1250x750.webp",
        texture: "/lc300/int-colors03-611x176.webp",
        text: "text-white",
      },
    ],
  },

  GRS: {
    exterior: [
      {
        name: "Attitude Black",
        carImg: "/lc300/lc300-GRS-EXT-B-1250x750.webp",
        bg: "bg-gradient-to-r from-black to-zinc-800",
        text: "text-white",
      },
      {
        name: "Precious White Pearl",
        carImg: "/lc300/lc300-GRS-EXT-W-1250x750.webp",
        bg: "bg-[#e6e6e6]",
        text: "text-black",
      },
    ],
    interior: [
      {
        name: "Red & Black",
        carImg: "/lc300/lc300-INT-RB-1250x750.webp",
        texture: "/lc300/int-colors02-611x176.webp",
        text: "text-white",
      },
      {
        name: "Black",
        carImg: "/lc300/lc300-INT-B-1250x750 (1).webp",
        texture: "/lc300/int-colors03-611x176 (1).webp",
        text: "text-white",
      },
    ],
  },
};

/* ===================== COMPONENT ===================== */

export default function CarConfigurator() {
  const [model, setModel] = useState<"ZX" | "GRS">("ZX");
  const [view, setView] = useState<"Exterior" | "Interior">("Exterior");
  const [extIndex, setExtIndex] = useState(0);
  const [intIndex, setIntIndex] = useState(0);

  const carImage =
    view === "Exterior"
      ? DATA[model].exterior[extIndex].carImg
      : DATA[model].interior[intIndex].carImg;

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-14 py-8 lg:py-10">
      <div className="grid lg:grid-cols-[420px_1fr] gap-8 lg:gap-12 items-start">
        
        {/* ================= LEFT PANEL ================= */}
        <div>
          {/* -------- Colours -------- */}
          <h2 className="text-2xl lg:text-3xl font-medium mb-4">Colours</h2>

          <div className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
            {DATA[model].exterior.map((c, i) => (
              <button
                key={c.name}
                onClick={() => {
                  setExtIndex(i);
                  setView("Exterior");
                }}
                className={`relative w-full h-[56px] lg:h-[64px] px-4 lg:px-6 flex items-center justify-between
                  ${c.bg} ${c.text} transition-all`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
                  opacity:
                    view === "Exterior" && extIndex === i ? 1 : 0.45,
                }}
              >
                <span className="text-sm lg:text-base font-medium">
                  {c.name}
                </span>
                {view === "Exterior" && extIndex === i && (
                  <span className="text-lg lg:text-xl">✓</span>
                )}
              </button>
            ))}
          </div>

          {/* -------- Interior -------- */}
          <h2 className="text-2xl lg:text-3xl font-medium mb-4">Interior</h2>

          <div className="space-y-3 lg:space-y-4">
            {DATA[model].interior.map((c, i) => (
              <button
                key={c.name}
                onClick={() => {
                  setIntIndex(i);
                  setView("Interior");
                }}
                className={`relative w-full h-[56px] lg:h-[64px] px-4 lg:px-6 flex items-center justify-between ${c.text} transition-all`}
                style={{
                  backgroundImage: `url(${c.texture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  clipPath:
                    "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
                  opacity:
                    view === "Interior" && intIndex === i ? 1 : 0.45,
                }}
              >
                <span className="text-sm lg:text-base font-medium">
                  {c.name}
                </span>
                {view === "Interior" && intIndex === i && (
                  <span className="text-lg lg:text-xl">✓</span>
                )}
              </button>
            ))}
          </div>

          {/* -------- Note -------- */}
          <p className="text-xs text-gray-500 mt-6 lg:mt-8 leading-relaxed">
            Note: Vehicles pictured and specifications detailed in this brochure
            may vary between models and equipment. Addition of extra features may
            change figures in this chart. Toyota Kirloskar Motor Pvt. Ltd.
            reserves the right to alter specifications without notice. Actual
            colours and upholstery may differ slightly from images shown.
          </p>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div>
          {/* Car Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
            <Image
              src={carImage}
              alt="Toyota LC300"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            
            {/* ZX / GRS */}
            <div className="flex rounded-full border overflow-hidden">
              {(["ZX", "GRS"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setModel(m);
                    setExtIndex(0);
                    setIntIndex(0);
                  }}
                  className={`px-6 lg:px-8 py-2 text-sm font-medium ${
                    model === m
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Exterior / Interior */}
            <div className="flex rounded-full border overflow-hidden">
              {(["Exterior", "Interior"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 lg:px-6 py-2 text-sm font-medium ${
                    view === v
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}