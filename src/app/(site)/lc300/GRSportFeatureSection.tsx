

// "use client";

// import Image from "next/image";

// export default function ToyotaGRInteriorSection() {
//   return (
//     <section
//       className="relative w-full overflow-hidden bg-black py-16 lg:py-24"
//       style={{
//         backgroundImage: "url('/lc300/topograpy.svg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >

//       <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT CONTENT */}
//           <div className="flex flex-col gap-8">

//             {/* BOX 1 */}
//             <div className="relative bg-gradient-to-r from-[#111] to-[#1a1a1a] p-8 lg:p-10 clip-box">
//               <span className="absolute left-0 top-0 h-full w-[4px] bg-red-600" />
//               <h3 className="text-white text-2xl lg:text-3xl font-semibold uppercase mb-4">
//                 Crowned With GR Sport Logo
//               </h3>
//               <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
//                 Throughout the cabin you’ll find links to the spirit Toyota’s
//                 motorsport legacy like a carbon look GR Sport steering wheel
//                 and a GR Sport logo adorned key plate.
//               </p>
//             </div>

//             {/* BOX 2 */}
//             <div className="relative bg-gradient-to-r from-[#111] to-[#1a1a1a] p-8 lg:p-10 clip-box">
//               <span className="absolute left-0 top-0 h-full w-[4px] bg-red-600" />
//               <h3 className="text-white text-2xl lg:text-3xl font-semibold uppercase mb-4">
//                 Race Bred Design
//               </h3>
//               <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
//                 Everywhere you look the Land Cruiser GR Sport is a winner.
//                 Taking cues from motorsport, legendary desert races and rally
//                 stages, you’ll find spartan finishes and carbon fibre look trim.
//               </p>
//             </div>

//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] clip-image">
//             <Image
//               src="/lc300/lc300-grs-04-900x600.webp"
//               alt="Toyota GR Interior"
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>

//         </div>
//       </div>

//       {/* CUSTOM CLIP PATH STYLES */}
//      <style jsx>{`
//   .clip-box {
//     clip-path: polygon(
//       0 0,
//       calc(100% - 40px) 0,
//       100% 40px,
//       100% 100%,
//       0 100%
//     );
//   }

//   .clip-image {
//     clip-path: polygon(
//       0 0,
//       calc(100% - 60px) 0,
//       100% 60px,
//       100% 100%,
//       0 100%
//     );
//   }

//   @media (max-width: 1024px) {
//     .clip-box,
//     .clip-image {
//       clip-path: none;
//     }
//   }
// `}</style>
//     </section>
//   );
// }






"use client";

import Image from "next/image";

type InfoBox = {
  title: string;
  description: string;
};

type Props = {
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  sections: InfoBox[];
};

export default function ToyotaGRInteriorSection({
  imageSrc,
  imageAlt = "Toyota GR Interior",
  imagePosition = "right",
  sections,
}: Props) {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      className="relative w-full overflow-hidden bg-black py-16 lg:py-24"
      style={{
        backgroundImage: "url('/lc300/topograpy.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div
            className={`relative w-full h-[360px] sm:h-[420px] lg:h-[520px] clip-image ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div
            className={`flex flex-col gap-8 ${
              isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {sections.map((item, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-r from-[#111] to-[#1a1a1a] p-8 lg:p-10 clip-box"
              >
                <span className="absolute left-0 top-0 h-full w-[4px] bg-red-600" />
                <h3 className="text-white text-2xl lg:text-1xl font-semibold uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-box {
          clip-path: polygon(
            0 0,
            calc(100% - 40px) 0,
            100% 40px,
            100% 100%,
            0 100%
          );
        }

        .clip-image {
          clip-path: polygon(
            0 0,
            calc(100% - 60px) 0,
            100% 60px,
            100% 100%,
            0 100%
          );
        }

        @media (max-width: 1024px) {
          .clip-box,
          .clip-image {
            clip-path: none;
          }
        }
      `}</style>
    </section>
  );
}