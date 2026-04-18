


// "use client";

// import { useEffect, useState } from "react";

// interface HeroBannerProps {
//   desktopImage: string;
//   mobileImage: string;
//   title: string;
//   buttonText: string;
//   buttonLink: string;
// }

// export default function HeroBanner({
//   desktopImage,
//   mobileImage,
//   title,
//   buttonText,
//   buttonLink,
// }: HeroBannerProps) {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setShow(true), 200);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section className="relative w-full h-[90vh] min-h-[520px] overflow-hidden">
//       {/* DESKTOP IMAGE */}
//       <img
//         src={desktopImage}
//         className="hidden md:block absolute inset-0 w-full h-full object-cover"
//         alt="banner"
//       />

//       {/* MOBILE IMAGE */}
//       <img
//         src={mobileImage}
//         className="md:hidden absolute inset-0 w-full h-full object-cover"
//         alt="banner mobile"
//       />

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* CONTENT – BOTTOM */}
//       <div className="relative z-10 h-full flex items-end">
//         <div className="w-full text-center pb-12 sm:pb-16 md:pb-20 px-4">
//           {/* TITLE */}
//           <h1
//             className={`
//               text-white font-light tracking-wide
//               text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px]
//               transition-all duration-700 ease-out
//               ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
//             `}
//           >
//             {title}
//           </h1>

//           {/* BUTTON */}
//           <a
//             href={buttonLink}
//             className={`
//               inline-block mt-4
//               bg-black/70 text-white text-sm
//               px-6 py-3
//               border border-white/30
//               transition-all duration-700 delay-200
//               hover:bg-white hover:text-black
//               ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
//             `}
//           >
//             {buttonText}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useEffect, useState } from "react";

interface HeroBannerProps {
  desktopImage: string;
  mobileImage: string;
  title: string;
  buttonText: string;
  buttonLink: string;

  /** desktop height (example: "90vh", "700px", "calc(100vh - 120px)") */
  desktopHeight?: string;
}

export default function HeroBanner({
  desktopImage,
  mobileImage,
  title,
  buttonText,
  buttonLink,
  desktopHeight = "90vh", // default
}: HeroBannerProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"    >
      {/* DESKTOP IMAGE (height from props) */}
      <div
        className="hidden md:block relative w-full"
        style={{ height: desktopHeight }}
      >
        <img
          src={desktopImage}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* MOBILE IMAGE */}
      <div className="md:hidden relative w-full h-[90vh] bg-black">
        <img
          src={mobileImage}
          alt="banner mobile"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* CONTENT – BOTTOM */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-full text-center pb-12 sm:pb-16 md:pb-20 px-4">
          {/* TITLE */}
          <h1
            className={`
              text-white font-light tracking-wide
              text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px]
              transition-all duration-700 ease-out
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            {title}
          </h1>

          {/* BUTTON */}
          <a
            href={buttonLink}
            className={`
              inline-block mt-4
              bg-black/70 text-white text-sm
              px-6 py-3
              border border-white/30
              transition-all duration-700 delay-200
              hover:bg-white hover:text-black
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}