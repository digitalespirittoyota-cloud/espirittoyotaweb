

// import React from "react";

// interface StyleSectionProps {
//   leftImage: string;
//   rightTopImage: string;
//   rightBottomImage: string;
//   description: string;
// }

// const StyleSectionReverse: React.FC<StyleSectionProps> = ({
//   leftImage,
//   rightTopImage,
//   rightBottomImage,
//   description,
// }) => {
//   return (
//     <section className="w-full h-auto lg:h-[400px] overflow-hidden relative">
//       <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[47%_53%]">

//         {/* LEFT CONTENT */}
//         <div className="relative w-full h-auto lg:h-full bg-white flex z-20">
//           <div
//             className="
//               relative w-full h-full
//               px-4 lg:px-0
//               pt-4 lg:pt-0
//               pb-8 lg:pb-0
//               lg:pl-[80px] xl:pl-[100px]
//             "
//           >
//             {/* DESKTOP TOP IMAGE */}
//             <div
//               className="hidden lg:block relative w-full h-[190px] bg-no-repeat bg-contain bg-right"
//               style={{ backgroundImage: `url(${rightTopImage})` }}
//             >
//               {/* DESKTOP BOTTOM IMAGE */}
//               <img
//                 src={rightBottomImage}
//                 alt="Style Bottom"
//                 className="hidden lg:block absolute -bottom-20 -right-8 w-[230px] object-contain z-30"
//               />
//             </div>

//             {/* MOBILE IMAGE */}
//             <div className="lg:hidden flex justify-center items-center mt-6 mb-4">
//               <img
//                 src={rightBottomImage}
//                 alt="Style Bottom"
//                 className="w-[180px] sm:w-[200px] md:w-[220px] object-contain"
//               />
//             </div>

//             {/* TEXT */}
//             <p className="mt-4 lg:mt-16 text-gray-600 text-lg sm:text-xl leading-relaxed max-w-md text-center lg:text-left">
//               {description}
//             </p>
//           </div>
//         </div>

//         {/* RIGHT IMAGE WITH DIAGONAL CUT */}
//         <div
//           className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-full relative"
//           style={{
//             clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
//           }}
//         >
//           <img
//             src={leftImage}
//             alt="Car"
//             className="w-full h-full object-cover"
//           />

//           {/* MOBILE TOP IMAGE */}
//           <div className="hidden lg:block relative w-full h-[190px] overflow-hidden">
//   <img
//     src={rightTopImage}
//     alt="Top Style"
//     className="absolute right-0 top-1/2 -translate-y-1/2 
//                h-full w-auto object-contain"
//     style={{ transform: "translateY(-50%) translateX(20px)" }}
//   />
// </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default StyleSectionReverse;




import React from "react";

interface StyleSectionProps {
  leftImage: string;
  rightTopImage: string;
  rightBottomImage: string;
  description: string;
}

const StyleSectionReverse: React.FC<StyleSectionProps> = ({
  leftImage,
  rightTopImage,
  rightBottomImage,
  description,
}) => {
  return (
    <section className="w-full overflow-hidden relative">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[47%_53%]">

        {/* RIGHT IMAGE (TOP ON MOBILE, RIGHT ON DESKTOP) */}
        <div
          className="
            order-1 lg:order-2
            w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px]
            relative
          "
          style={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <img
            src={leftImage}
            alt="Car"
            className="w-full h-full object-cover"
          />

          {/* DESKTOP TOP IMAGE */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[190px]">
            <img
              src={rightTopImage}
              alt="Top Style"
              className="h-full w-auto object-contain translate-x-5"
            />
          </div>
        </div>

        {/* LEFT CONTENT (BOTTOM ON MOBILE, LEFT ON DESKTOP) */}
        <div
          className="
            order-2 lg:order-1
            relative w-full bg-white flex z-20
          "
        >
          <div
            className="
              relative w-full
              px-4 lg:px-0
              pt-6 lg:pt-0
              pb-8 lg:pb-0
              lg:pl-[80px] xl:pl-[100px]
            "
          >
            {/* DESKTOP TOP IMAGE */}
            <div
              className="hidden lg:block relative w-full h-[190px] bg-no-repeat bg-contain bg-right"
              style={{ backgroundImage: `url(${rightTopImage})` }}
            >
              {/* DESKTOP BOTTOM IMAGE */}
              <img
                src={rightBottomImage}
                alt="Style Bottom"
                className="absolute -bottom-20 -right-8 w-[230px] object-contain z-30"
              />
            </div>

            {/* MOBILE IMAGE */}
            <div className="lg:hidden flex justify-center items-center mb-4">
              <img
                src={rightBottomImage}
                alt="Style Bottom"
                className="w-[160px] sm:w-[190px] md:w-[220px] object-contain"
              />
            </div>

            {/* TEXT */}
            <p className="mt-4 lg:mt-16 text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              {description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StyleSectionReverse;