// "use client";

// export default function BrochureSection() {
//   return (
//     <div className="w-full h-[10vh] flex items-center justify-center">
//       <a
//         href="https://www.toyotabharat.com/documents/brochures/fortuner-mmc/gr_mobile-brochure_360x640pix.pdf"   // 👉 public folder me brochure.pdf rakho
//         download
//         className="
//           bg-black 
//           text-white 
//           px-9 
//           py-3 
//           text-sm 
//           md:text-base 
//           font-semibold 
//           tracking-wider 
//           transition 
//           duration-300 
//           hover:scale-105 
//           hover:bg-neutral-900
//         "
//       >
//         DOWNLOAD BROCHURE
//       </a>
//     </div>
//   );
// }


"use client";

export default function BrochureSection({
  label = "DOWNLOAD BROCHURE",
  fileUrl="",
  height = "h-[10vh]",
}) {
  return (
    <div className={`w-full ${height} flex items-center justify-center`}>
      <a
        href={fileUrl}
        download
        className="
          bg-black
          text-white
          px-9
          py-3
          text-sm
          md:text-base
          font-semibold
          tracking-wider
          transition
          duration-300
          hover:scale-105
          hover:bg-neutral-900
        "
      >
        {label}
      </a>
    </div>
  );
}
