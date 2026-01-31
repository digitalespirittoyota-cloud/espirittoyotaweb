// "use client";

// import Image from "next/image";
// import { useState } from "react";

// type CarColor = {
//   name: string;
//   colorHex: string;
//   carImage: string;
// };

// const carColors: CarColor[] = [
//   {
//     name: "Platinum White Pearl",
//     colorHex: "#f5f5f0",
//     carImage: "/vellfire/new-vellfire-white (1).png",
//   },
//   {
//     name: "Black",
//     colorHex: "#1c1c1e",
//     carImage: "/vellfire/new-vellfire-black.png",
//   },
//   {
//     name: "Precious Metal​",
//     colorHex: "#6E7175",
//     carImage: "/vellfire/new-vellfire-white-2.png",
//   },
// ];

// export default function CarColorShowcase() {
//   const [active, setActive] = useState(0);
//   const current = carColors[active];

//   return (
//     <section className="w-full">
//       {/* 🔮 TOP PURPLE BACKGROUND */}
//       <div className="relative w-full h-[55vh] sm:h-[60vh]">
//         <Image
//           src="/vellfire/commanding-colours (1).png"   // 👈 purple bg image
//           alt="Background"
//           fill
//           priority
//           className="object-cover"
//         />

//         {/* Optional glow */}
//         <div className="absolute inset-0 bg-black/25" />

//         {/* Small top text */}
//         <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-center">
//   <p className="text-xs tracking-[0.25em] text-gray-200 uppercase">
//     Exterior | Interior
//   </p>

//   <h1
//     className="
//       mt-2
//       text-white
//       text-lg
//       sm:text-xl
//       md:text-2xl
//       lg:text-3xl
//       font-semibold
//       tracking-[0.2em]
//       uppercase
//     "
//   >
//     Shades of Luxury
//   </h1>
// </div>

//       </div>

//       {/* ⚪ BOTTOM WHITE AREA */}
//       <div className="relative bg-[#d9d9d6] pt-24 sm:pt-28 pb-12 text-center">
//         {/* 🚗 CAR IMAGE */}
//         <div className="absolute -top-44 sm:-top-52 left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] max-w-3xl">
//           <Image
//             src={current.carImage}
//             alt={current.name}
//             width={1200}
//             height={600}
//             className="w-full h-auto"
//             priority
//           />
//         </div>

//         {/* COLOR NAME */}
//         <h2 className="mt-32 sm:mt-40 text-lg sm:text-xl font-medium text-gray-900">
//           {current.name}
//         </h2>

//         <div className="w-10 h-[1px] bg-gray-800 mx-auto mt-2 mb-6" />

//         {/* 🎨 COLOR SELECTOR */}
//         <div className="flex justify-center gap-4">
//           {carColors.map((item, index) => (
//             <button
//               key={item.name}
//               onClick={() => setActive(index)}
//               className={`w-10 h-10 rounded-md border transition
//                 ${active === index ? "border-black" : "border-gray-400"}
//               `}
//               style={{ backgroundColor: item.colorHex }}
//             />
//           ))}
//         </div>

//         {/* FOOTNOTE */}
//         <p className="text-[11px] text-gray-600 mt-10 max-w-5xl mx-auto px-4">
//           Note: Vehicles pictured and specifications detailed in this website may
//           vary between models and equipment. Toyota Kirloskar Motor Pvt. Ltd.
//           reserves the right to alter the details of specifications and equipment
//           without a notice.
//         </p>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { useState } from "react";

type CarColor = {
  name: string;
  colorHex: string;
  carImage: string;
};

const carColors: CarColor[] = [
  {
    name: "Platinum White Pearl",
    colorHex: "#f5f5f0",
    carImage: "/vellfire/new-vellfire-white (1).png",
  },
  {
    name: "Black",
    colorHex: "#1c1c1e",
    carImage: "/vellfire/new-vellfire-black.png",
  },
  {
    name: "Precious Metal​",
    colorHex: "#6E7175",
    carImage: "/vellfire/new-vellfire-white-2.png",
  },
];

export default function CarColorShowcase() {
  const [active, setActive] = useState(0);
  const current = carColors[active];

  return (
    <section className="w-full">
      {/* 🔮 TOP PURPLE BACKGROUND */}
      <div className="relative w-full h-[50vh] sm:h-[55vh]"> {/* slightly reduced */}
        <Image
          src="/vellfire/commanding-colours (1).png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Optional glow */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Small top text */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-center">
          <p className="text-xs tracking-[0.25em] text-gray-200 uppercase">
            Exterior | Interior
          </p>

          <h1
            className="
              mt-2
              text-white
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              font-semibold
              tracking-[0.2em]
              uppercase
            "
          >
            Shades of Luxury
          </h1>
        </div>
      </div>

      {/* ⚪ BOTTOM WHITE AREA */}
      <div className="relative bg-[#d9d9d6] pt-20 sm:pt-24 pb-10 text-center"> {/* slightly reduced */}
        {/* 🚗 CAR IMAGE */}
        <div className="absolute -top-36 sm:-top-44 left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] max-w-3xl"> {/* slightly reduced */}
          <Image
            src={current.carImage}
            alt={current.name}
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* COLOR NAME */}
        <h2 className="mt-28 sm:mt-32 text-lg sm:text-xl font-medium text-gray-900"> {/* slightly reduced */}
          {current.name}
        </h2>

        <div className="w-10 h-[1px] bg-gray-800 mx-auto mt-2 mb-6" />

        {/* 🎨 COLOR SELECTOR */}
        <div className="flex justify-center gap-4">
          {carColors.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              className={`w-10 h-10 rounded-md border transition
                ${active === index ? "border-black" : "border-gray-400"}
              `}
              style={{ backgroundColor: item.colorHex }}
            />
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="text-[11px] text-gray-600 mt-10 max-w-5xl mx-auto px-4">
          Note: Vehicles pictured and specifications detailed in this website may
          vary between models and equipment. Toyota Kirloskar Motor Pvt. Ltd.
          reserves the right to alter the details of specifications and equipment
          without a notice.
        </p>
      </div>
    </section>
  );
}
