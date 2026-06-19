
// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// type Slide = {
//   name: string;
//   bgImage: string;
//   image: string;
// };

// type StyledCarouselProps = {
//   title: string;
//   description?: string;
//   slides: Slide[];
// };

// export default function StyledToInspireCarousel({
//   title,
//   description,
//   slides,
// }: StyledCarouselProps) {
//   const [active, setActive] = useState(0);

//   const prev = () =>
//     setActive((p) => (p === 0 ? slides.length - 1 : p - 1));
//   const next = () =>
//     setActive((p) => (p === slides.length - 1 ? 0 : p + 1));

//   const slide = slides[active];

//   return (
//     <section className="w-full bg-white py-16 overflow-hidden relative text-black">
//       {/* HEADING */}
//       <div className="text-center max-w-3xl mx-auto mb-12 px-4 relative z-10">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider">
//           {title}
//         </h2>
//         {description && (
//           <p className="mt-4 text-gray-600 text-sm sm:text-base">
//             {description}
//           </p>
//         )}
//       </div>

//       {/* CAROUSEL */}
//       <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">
//         {/* Background */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.bgImage}
//             className="absolute inset-0 w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image
//               src={slide.bgImage}
//               alt="background"
//               fill
//               className="object-cover"
//               priority
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Foreground */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.image}
//             initial={{ x: 120, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -120, opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <div className="relative w-[85%] sm:w-[70%] md:w-[60%] h-full">
//               <Image
//                 src={slide.image}
//                 alt={slide.name}
//                 fill
//                 className=""
//                 priority
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Name */}
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[70%] md:w-[60%]">
//           <div className="inline-block bg-black/50 text-white px-5 py-3 text-base sm:text-lg font-bold tracking-widest leading-relaxed whitespace-pre-line">
//             {slide.name}
//           </div>
//         </div>

//         {/* Arrows */}
//         <button
//           onClick={prev}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 text-4xl shadow-md z-10"
//         >
//           ‹
//         </button>

//         <button
//           onClick={next}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 text-4xl shadow-md z-10"
//         >
//           ›
//         </button>
//       </div>
//     </section>
//   );
// }








// // "use client";

// // import Image from "next/image";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useEffect, useState } from "react";

// // type Slide = {
// //   name: string;
// //   bgImage: string;
// //   image: string;
// // };

// // type StyledCarouselProps = {
// //   title: string;
// //   description?: string;
// //   slides: Slide[];
// // };

// // export default function StyledToInspireCarousel({
// //   title,
// //   description,
// //   slides,
// // }: StyledCarouselProps) {
// //   const [active, setActive] = useState(0);

// //   // 🔥 IMPORTANT FIX — reset slide when data changes
// //   useEffect(() => {
// //     setActive(0);
// //   }, [slides]);

// //   const prev = () =>
// //     setActive((p) => (p === 0 ? slides.length - 1 : p - 1));

// //   const next = () =>
// //     setActive((p) => (p === slides.length - 1 ? 0 : p + 1));

// //   const slide = slides[active];

// //   return (
// //     <section className="w-full bg-white py-16 overflow-hidden relative">
// //       {/* HEADING */}
// //       <div className="text-center max-w-3xl mx-auto mb-12 px-4 relative z-10">
// //         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider">
// //           {title}
// //         </h2>

// //         {description && (
// //           <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
// //             {description}
// //           </p>
// //         )}
// //       </div>

// //       {/* CAROUSEL */}
// //       <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">
// //         {/* Background Image */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={slide.bgImage}
// //             className="absolute inset-0"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <Image
// //               src={slide.bgImage}
// //               alt="background"
// //               fill
// //               className="object-cover"
// //               priority
// //             />
// //           </motion.div>
// //         </AnimatePresence>

// //         {/* Car Image */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={slide.image}
// //             initial={{ x: 120, opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             exit={{ x: -120, opacity: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             className="absolute inset-0 flex items-center justify-center"
// //           >
// //             <div className="relative w-[85%] sm:w-[70%] md:w-[60%] h-full">
// //               <Image
// //                 src={slide.image}
// //                 alt={slide.name}
// //                 fill
// //                 className="object-contain"
// //                 priority
// //               />
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>

// //         {/* Slide Name */}
// //         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] sm:w-[70%] md:w-[60%]">
// //           <div className="inline-block bg-black/60 text-white px-5 py-3 text-sm sm:text-base md:text-lg font-bold tracking-widest leading-relaxed whitespace-pre-line">
// //             {slide.name}
// //           </div>
// //         </div>

// //         {/* Arrows */}
// //         <button
// //           onClick={prev}
// //           className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 text-4xl shadow-md z-10 hover:bg-white"
// //         >
// //           ‹
// //         </button>

// //         <button
// //           onClick={next}
// //           className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 text-4xl shadow-md z-10 hover:bg-white"
// //         >
// //           ›
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }























"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Slide = {
  name: string;
  image: string;
};

type StyledCarouselProps = {
  title: string;
  description?: string;
  slides: Slide[];
  brochureUrl?: string;
};

export default function StyledToInspireCarousel({
  title,
  description,
  slides,
  brochureUrl = "#",
}: StyledCarouselProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prev = () => {
    setDirection("left");
    setActive((p) => (p === 0 ? slides.length - 1 : p - 1));
  };

  const next = () => {
    setDirection("right");
    setActive((p) => (p === slides.length - 1 ? 0 : p + 1));
  };

  const getIndex = (offset: number) =>
    (active + offset + slides.length) % slides.length;

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: "48px",
        paddingBottom: "48px",
        overflow: "hidden",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* HEADING */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "32px",
          padding: "0 16px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(18px, 3vw, 28px)",
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#111",
            margin: 0,
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              marginTop: "12px",
              color: "#555",
              fontSize: "clamp(12px, 1.5vw, 15px)",
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        )}
      </div>

      {/* CAROUSEL TRACK — 3 visible panels */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Prev partial peek */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "16%",
            overflow: "hidden",
            opacity: 0.6,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={slides[getIndex(-1)].image}
              alt="prev"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Dark overlay on peek panels */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
              }}
            />
          </div>
        </div>

        {/* CENTER SLIDE */}
        <div
          style={{
            position: "relative",
            width: "68%",
            aspectRatio: "1200/648",
            overflow: "hidden",
            zIndex: 2,
            flexShrink: 0,
          }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={slides[active].image}
                alt={slides[active].name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Slide label — bottom left */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  background: "rgba(0,0,0,0.55)",
                  color: "#fff",
                  padding: "10px 20px",
                  fontSize: "clamp(11px, 1.4vw, 15px)",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                  lineHeight: 1.5,
                }}
              >
                {slides[active].name}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next partial peek */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "16%",
            overflow: "hidden",
            opacity: 0.6,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={slides[getIndex(1)].image}
              alt="next"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
              }}
            />
          </div>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: "14%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "clamp(36px, 4vw, 52px)",
            height: "clamp(36px, 4vw, 52px)",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.85)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(20px, 2.5vw, 32px)",
            fontWeight: 300,
            color: "#111",
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            lineHeight: 1,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "rgba(255,255,255,0.85)")
          }
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: "14%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "clamp(36px, 4vw, 52px)",
            height: "clamp(36px, 4vw, 52px)",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.85)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(20px, 2.5vw, 32px)",
            fontWeight: 300,
            color: "#111",
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            lineHeight: 1,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "rgba(255,255,255,0.85)")
          }
        >
          ›
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "20px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > active ? "right" : "left");
              setActive(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === active ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === active ? "#111" : "#ccc",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* DOWNLOAD BROCHURE */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <a
          href={brochureUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 48px",
            backgroundColor: "#111",
            color: "#fff",
            fontSize: "clamp(11px, 1.2vw, 13px)",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#333";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#111";
          }}
        >
          Download Brochure
        </a>
      </div>
    </section>
  );
}