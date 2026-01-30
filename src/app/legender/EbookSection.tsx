

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// type EbookSectionProps = {
//   bgImage: string;
//   carImage: string;
//   ebookText?: string;
//   ebookLink?: string;
// };

// export default function EbookSection({
//   bgImage,
//   carImage,
//   ebookText = "ebook Now",
//   ebookLink = "#ebook",
// }: EbookSectionProps) {
//   return (
//     <section className="relative w-full h-[80vh] md:h-[80vh] overflow-hidden">

//       {/* Background */}
//       <Image
//         src={bgImage}
//         alt="Ebook Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Right dark overlay */}
//       <div className="absolute right-0 md:right-7 top-0 h-full w-full md:w-[28%] bg-black/60 z-10" />

//       {/* ✅ Ebook CTA (TOP on mobile, CENTER on desktop) */}
//       <a
//         href={ebookLink}
//         className="
//           absolute z-20
//           top-[12%] md:top-1/2
//           left-1/2 md:left-auto
//           right-auto md:right-[6%]
//           -translate-x-1/2 md:translate-x-0
//           -translate-y-0 md:-translate-y-1/2
//           text-white text-xl sm:text-2xl md:text-4xl
//           font-semibold tracking-wide
//         "
//       >
//         {ebookText}
//       </a>

//       {/* 🚗 Car Image (BOTTOM on mobile & desktop) */}
//       <motion.div
//         initial={{ x: -500, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1.3, ease: "easeOut" }}
//         viewport={{ once: false, amount: 0.4 }}
//         className="
//           absolute z-20
//           bottom-[-8%] md:bottom-[-0%]
//           left-1/2 md:left-[-5%]
//           -translate-x-1/2 md:translate-x-0
//           w-[135%] md:w-[95%]
//           h-[55vh] md:h-[85vh]
//         "
//       >
//         <Image
//           src={carImage}
//           alt="Car"
//           fill
//           className="object-contain max-w-none scale-[1.15] md:scale-[1.2]"
//         />
//       </motion.div>

//     </section>
//   );
// }






"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type EbookSectionProps = {
  bgImage: string;
  carImage: string;
  ebookText?: string;
  ebookLink?: string;
};

export default function EbookSection({
  bgImage,
  carImage,
  ebookText = "ebook Now",
  ebookLink = "#ebook",
}: EbookSectionProps) {
  return (
    <section className="relative w-full h-[80vh] md:h-[80vh] overflow-hidden">

      {/* Background */}
      <Image
        src={bgImage}
        alt="Ebook Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute right-0 md:right-7 top-0 h-full w-full md:w-[28%] bg-black/60 z-10" />

      {/* Ebook CTA */}
      <a
        href={ebookLink}
        className="
          absolute z-20
          top-[10%] md:top-1/2
          left-1/2 md:left-auto
          right-auto md:right-[6%]
          -translate-x-1/2 md:translate-x-0
          md:-translate-y-1/2
          text-white text-xl sm:text-2xl md:text-4xl
          font-semibold tracking-wide
        "
      >
        {ebookText}
      </a>

      {/* 🚗 CAR IMAGE — MOBILE SAFE */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="
          absolute z-20
          bottom-[-8%] md:bottom-[-6%]
          left-1/2 md:left-[-5%]
          -translate-x-1/2 md:translate-x-0
          w-[100%] sm:w-[95%] md:w-[95%]
          h-[40vh] sm:h-[45vh] md:h-[85vh]
        "
      >
        <Image
          src={carImage}
          alt="Car"
          fill
          className="object-contain max-w-none md:scale-[1.2]"
        />
      </motion.div>

    </section>
  );
}
