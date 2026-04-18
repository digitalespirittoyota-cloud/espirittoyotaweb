// "use client";

// import Image from "next/image";

// type TopHeadingBgSectionProps = {
//   bgImage: string;
//   heading: string;
//   height?: string; // optional custom height
// };

// export default function TopHeadingBgSection({
//   bgImage,
//   heading,
//   height = "80vh",
// }: TopHeadingBgSectionProps) {
//   return (
//     <section
//       className="relative w-full overflow-hidden"
//       style={{ height }}
//     >
//       {/* BACKGROUND IMAGE */}
//       <Image
//         src={bgImage}
//         alt="Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* DARK OVERLAY (matches screenshot tone) */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* TOP CENTER HEADING */}
//       <div className="relative z-10 flex justify-center pt-10 sm:pt-14 md:pt-20">
//         <h1
//           className="
//             text-center
//             text-gray-200
//             text-sm
//             sm:text-base
//             md:text-2xl
//             lg:text-3xl
//             font-semibold
//             tracking-[0.3em]
//             uppercase
//           "
//         >
//           {heading}
//         </h1>
//       </div>
//     </section>
//   );
// }







"use client";

import Image from "next/image";

type TopHeadingBgSectionProps = {
  bgImage: string;
  heading: string;
  height?: string;
};

export default function TopHeadingBgSection({
  bgImage,
  heading,
  height = "80vh",
}: TopHeadingBgSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY ONLY FOR IMAGE (NOT TEXT AREA) */}
      <div className="absolute inset-0 bg-black/25" />

      {/* HEADING — EXACT MATCH POSITION */}
     <h1
  className="
    absolute
    top-8 sm:top-12 md:top-16
    left-1/2
    -translate-x-1/2
    z-20

    text-[#3a3a3a]
    text-xs
    sm:text-sm
    md:text-xl        /* tablet */
    lg:text-2xl       /* 💻 laptop – bigger */
    xl:text-3xl       /* 🖥️ large screens */
    font-medium
    tracking-[0.32em]
    uppercase
    text-center
    whitespace-nowrap
  "
>
  {heading}
</h1>

    </section>
  );
}
