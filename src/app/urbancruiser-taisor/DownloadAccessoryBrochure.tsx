

// "use client";

// import { Download } from "lucide-react";

// export default function DownloadAccessoryBrochure() {
//   return (
//     <section className="w-full bg-white py-12 flex justify-center gap-3">
//       <div className="relative flex items-center group">
//         {/* Main Button */}
//         <button
//           className="
//             relative flex items-center gap-3 
//             bg-[#e60012] text-white 
//             px-6 sm:px-8 py-3 sm:py-4 pr-12 sm:pr-14
//             font-semibold text-xs sm:text-sm md:text-base 
//             uppercase tracking-wide clip-btn
//             transition-transform duration-300 ease-out
//             group-hover:scale-105
//           "
//         >
//           <Download size={18} className="sm:w-5 sm:h-5" />
//           Download Accessory Brochure
//         </button>

//         {/* Right Slanted Stripes */}
//         <div
//           className="
//             absolute right-[-39px] top-1/2 -translate-y-1/2 
//             flex gap-1
//             transition-transform duration-300 ease-out
//             group-hover:scale-105
//           "
//         >
//           <span className="w-2 h-9 sm:h-10 bg-[#f8a1a8] rotate-12"></span>
//           <span className="w-2 h-9 sm:h-10 bg-[#f8a1a8] rotate-12"></span>
//           <span className="w-2 h-9 sm:h-10 bg-[#f8a1a8] rotate-12"></span>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { Download } from "lucide-react";

export default function DownloadAccessoryBrochure() {
  const brochureUrl = "/brochures/accessory-brochure.pdf"; // ← apna PDF path

  const handleDownload = () => {
    // 1️⃣ Open brochure in new tab
    window.open(brochureUrl, "_blank");

    // 2️⃣ Trigger download
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Accessory-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full bg-white py-12 flex justify-center gap-3">
      <div className="relative flex items-center group">
        {/* Main Button */}
        <button
          onClick={handleDownload}
          className="
            relative flex items-center gap-3 
            bg-[#e60012] text-white 
            px-6 sm:px-8 py-3 sm:py-4 pr-12 sm:pr-14
            font-semibold text-xs sm:text-sm md:text-base 
            uppercase tracking-wide clip-btn
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
        >
          <Download size={18} className="sm:w-5 sm:h-5" />
          Download Accessory Brochure
        </button>

        {/* Right Slanted Stripes */}
        <div
          className="
            absolute right-[-39px] top-1/2 -translate-y-1/2 
            flex gap-1
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
        >
          <span className="w-2 h-9 sm:h-10 bg-[#f8a1a8] rotate-12"></span>
          <span className="w-2 h-9 sm:h-10 bg-[#f8a1a8] rotate-12"></span>
          <span className="w-2 h-9 sm:h-10 bg-[#f8a1a8] rotate-12"></span>
        </div>
      </div>
    </section>
  );
}