// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// type SlideCarSectionProps = {
//   bgImage: string;
//   carImage: string;
//   title?: string;
//   description?: string;
// };

// export default function SlideCarSection({
//   bgImage,
//   carImage,
//   title,
//   description,
// }: SlideCarSectionProps) {
//   return (
//     <section
//       className="relative w-full h-[90vh] overflow-hidden flex items-center"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Optional text area */}
//       {(title || description) && (
//         <div className="relative z-10 max-w-xl px-6 text-white">
//           {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
//           {description && <p className="text-lg">{description}</p>}
//         </div>
//       )}

//       {/* Car image */}
//  <motion.div
//   key={bgImage + carImage}   // 👈 bas ye add
//   className="
//     absolute
//     right-[-12%]
//     bottom-[-2%]
//     w-[110%]
//     sm:w-[105%]
//     md:w-[100%]
//     lg:w-[95%]
//     xl:w-[90%]
//   "
//   initial={{ x: 450, opacity: 0 }}
//  animate={{ x: [450, -40, 0], opacity: 1 }}
//   // 👈 whileInView → animate
//   transition={{ duration: 1.2, ease: "easeOut" }}
// >
//   <Image
//     src={carImage}
//     alt="Car"
//     width={1800}
//     height={1000}
//     className="w-full h-auto object-contain"
//     priority
//   />
// </motion.div>


//     </section>
//   );
// }






"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

type SlideCarSectionProps = {
  bgImage: string;
  carImage: string;
  title?: string;
  description?: string;
};

export default function SlideCarSection({
  bgImage,
  carImage,
  title,
  description,
}: SlideCarSectionProps) {

  const controls = useAnimationControls();

  // 🔁 THIS IS THE KEY PART
  useEffect(() => {
    controls.start({
      x: [450, -40, 0],   // aage aake rukega
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    });
  }, [bgImage, carImage, controls]); // 👈 prop change = animation repeat

  return (
    <section
      className="relative w-full h-[90vh] overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {(title || description) && (
        <div className="relative z-10 max-w-xl px-6 text-white">
          {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
          {description && <p className="text-lg">{description}</p>}
        </div>
      )}

      {/* 🚗 CAR (UNCHANGED SIZE & POSITION) */}
     <motion.div
  className="
    absolute
    right-[-5%]
    bottom-[-2%]
    w-[110%]
    sm:w-[105%]
    md:w-[100%]
    lg:w-[95%]
    xl:w-[90%]
  "
  initial={{ x: 450, opacity: 0 }}
  whileInView={{ x: [450, -40, 0], opacity: 1 }}  
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.5 }}      
>
  <Image
    src={carImage}
    alt="Car"
    width={1800}
    height={1000}
    className="w-full h-auto object-contain"
    priority
  />
</motion.div>

    </section>
  );
}
