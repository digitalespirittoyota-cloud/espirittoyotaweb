

// "use client";
// import { useState } from "react";

// export default function EngineerMessageSection() {
//     const [play, setPlay] = useState(false);
//     const videoId = "gHox_oji8U0";

//     return (
//         <>
//             {/* SECTION */}
//             <section className="w-full bg-white py-12 px-4 md:px-10">
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">


//                     {/* LEFT : VIDEO THUMB */}
//                     <div
//                         className="relative h-[260px] sm:h-[360px] lg:h-[420px] cursor-pointer overflow-hidden"
//                         onClick={() => setPlay(true)}
//                     >

//                         <img
//                             src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
//                             alt="Engineer Video"
//                             className="w-full h-full object-cover scale-[1.02]"
//                         />


//                         {/* Play Button */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center hover:scale-105 transition">
//                                 <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-red-600 ml-1" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT CONTENT */}
//                     <div className="
//   w-full h-full
//   text-white 
//   px-8 sm:px-12 py-12 
//   flex items-center
//   bg-gradient-to-br 
//   from-[#2f2a26] 
//   via-[#1f1c19] 
//   to-[#141210]
// ">

//                         <div className="relative">
//                             {/* Red corner line */}
//                             <span className="
//   absolute
//   -top-4
//  right-30
//   w-30
//   h-18
//  border-t-1
// border-r-1
//  border-red-600
// " />

//                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-gray-300">
//                                 Hear from our <br />
//                                 <span className="text-white">Regional Chief Engineer</span>
//                             </h2>

//                             <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
//                                 Powerful. Resilient. Adventurous. Here’s a 4x4 like no other.
//                                 Takes on any road or no roads with the same ease.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* VIDEO MODAL */}
//             {play && (
//                 <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//                     <div className="relative w-[90%] max-w-4xl aspect-video">
//                         <iframe
//                             className="w-full h-full"
//                             src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//                             title="YouTube video"
//                             frameBorder="0"
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                         />

//                         {/* Close Button */}
//                         <button
//                             onClick={() => setPlay(false)}
//                             className="absolute -top-10 right-0 text-white text-3xl"
//                         >
//                             ✕
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }







"use client";
import { useState } from "react";

export default function EngineerMessageSection() {
  const [play, setPlay] = useState(false);
  const videoId = "gHox_oji8U0";

  return (
    <>
      {/* ================= WHITE MAIN SECTION ================= */}
      <section className="relative w-full bg-white py-12 overflow-hidden">

        {/* BLACK STRIP – FULL WIDTH, SHORTER HEIGHT */}
        <div
          className="
            absolute
            left-0
            right-0
            top-1/2
            -translate-y-1/2
            h-[280px]
            bg-gradient-to-br
            from-[#2f2a26]
            via-[#1f1c19]
            to-[#141210]
            z-0
          "
        />

        {/* CONTENT CONTAINER */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-[420px]">

            {/* ================= LEFT : VIDEO ================= */}
            <div
              className="relative w-full h-full overflow-hidden cursor-pointer"
              onClick={() => setPlay(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Engineer Video"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center hover:scale-105 transition">
                  <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-red-600 ml-1" />
                </div>
              </div>
            </div>

            {/* ================= RIGHT : CONTENT ================= */}
            <div className="relative flex items-center">
              <div className="relative px-8 sm:px-12 text-white">

                {/* RED CORNER LINE */}
                <span className="
  absolute
  -top-4
 right-30
  w-30
 h-18
border-t-1
border-r-1
 border-red-600
" />

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-gray-300">
                  Hear from our <br />
                  <span className="text-white">
                    Regional Chief Engineer
                  </span>
                </h2>

                <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                  Powerful. Resilient. Adventurous. Here’s a 4x4 like no other.
                  Takes on any road or no roads with the same ease.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL (NO BLACK BARS) ================= */}
      {play && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">

          <div className="relative w-full max-w-5xl h-[80vh] overflow-hidden bg-black">

            {/* ULTRA-COVER IFRAME (NO TOP/BOTTOM BARS) */}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="
                absolute
                top-1/2
                left-1/2
                w-[140%]
                h-[140%]
                -translate-x-1/2
                -translate-y-1/2
              "
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setPlay(false)}
              className="absolute top-4 right-4 text-white text-3xl z-10"
            >
              ✕
            </button>

          </div>
        </div>
      )}
    </>
  );
}
