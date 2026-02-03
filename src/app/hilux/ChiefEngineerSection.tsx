

// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function ChiefEngineerSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   const [play, setPlay] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.35 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-white py-16 px-4 lg:px-20 overflow-hidden"
//     >
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//         {/* LEFT TEXT */}
//         <div
//           className={`transition-all duration-700 ease-out
//           ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}`}
//         >
//           {/* HEADING + RED LINE WRAPPER */}
//           <div className="relative inline-block">
//             {/* RED LINE (tight to text) */}
//             <span
//               className={`absolute -top-2 right-0 w-20 h-20
//               border-t-4 border-r-4 border-red-600
//               transition-all duration-700 delay-300
//               ${inView ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
//             />

//             <h2 className="text-3xl sm:text-4xl font-semibold leading-tight pr-8">
//               Hear from our <br />
//               Global Chief Engineer
//             </h2>
//           </div>

//           <p className="mt-8 text-base leading-relaxed text-gray-800">
//             From pinstripe suits to khakis.<br />
//             You sport many looks.<br />
//             Here's a machine, made for<br />
//             someone like you.
//           </p>
//         </div>

//         {/* RIGHT VIDEO */}
//         <div
//           className={`relative w-full transition-all duration-700 delay-150 ease-out
//           ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}`}
//         >
//           {/* RED BACK PANEL */}
//           <div
//             className={`absolute -left-6 -bottom-6 w-full h-full bg-red-600
//             transition-all duration-700 delay-300
//             ${inView ? "opacity-100" : "opacity-0"}
//             hidden sm:block`}
//           />

//           {/* VIDEO */}
//           <div className="relative aspect-video bg-black overflow-hidden">
//             {!play ? (
//               <div
//                 className="w-full h-full cursor-pointer relative"
//                 onClick={() => setPlay(true)}
//               >
//                 <img
//                   src="https://img.youtube.com/vi/tfD2X2EZtl4/maxresdefault.jpg"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
//                     <div className="ml-1 w-0 h-0 border-l-[18px] border-l-red-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent" />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/tfD2X2EZtl4?autoplay=1"
//                 allow="autoplay; fullscreen"
//               />
//             )}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }








"use client";
import { useEffect, useRef, useState } from "react";

export default function ChiefEngineerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-4 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div
          className={`transition-all duration-700 ease-out
          lg:ml-16 xl:ml-24
          ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}`}
        >
          {/* HEADING + RED LINE */}
          <div className="relative inline-block">
            {/* RED LINE (longer) */}
            <span
              className={`absolute -top-3 right-0 w-49 h-27
              border-t-2 border-r-2 border-red-600
              transition-all duration-700 delay-300
              ${inView ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
            />

            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight pr-8">
              Hear from our <br />
              Global Chief Engineer
            </h2>
          </div>

          <p className="mt-8 text-base leading-relaxed text-gray-800">
            From pinstripe suits to khakis.<br />
            You sport many looks.<br />
            Here's a machine, made for<br />
            someone like you.
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div
          className={`relative w-full transition-all duration-700 delay-150 ease-out
          ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}`}
        >
          {/* RED BACK PANEL */}
          <div
            className={`absolute -left-6 -bottom-6 w-full h-full bg-red-600
            transition-all duration-700 delay-300
            ${inView ? "opacity-100" : "opacity-0"}
            hidden sm:block`}
          />

          {/* VIDEO */}
          <div className="relative aspect-video bg-black overflow-hidden">
            {!play ? (
              <div
                className="w-full h-full cursor-pointer relative"
                onClick={() => setPlay(true)}
              >
                <img
                  src="https://img.youtube.com/vi/tfD2X2EZtl4/maxresdefault.jpg"
                  alt="Chief Engineer Video"
                  className="w-full h-full object-cover"
                />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="ml-1 w-0 h-0 border-l-[18px] border-l-red-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/tfD2X2EZtl4?autoplay=1"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}


