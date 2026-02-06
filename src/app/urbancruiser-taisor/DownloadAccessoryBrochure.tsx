"use client";

import { Download } from "lucide-react";

export default function DownloadAccessoryBrochure() {
  return (
    <section className="w-full bg-white py-12 flex justify-center">
      <div className="relative flex items-center">
        {/* Main Button */}
        <button className="relative flex items-center gap-3 bg-[#e60012] text-white px-8 py-4 pr-14 font-semibold text-sm md:text-base uppercase tracking-wide clip-btn">
          <Download size={20} />
          Download Accessory Brochure
        </button>

        {/* Right Slanted Stripes */}
        <div className="absolute right-[-28px] top-1/2 -translate-y-1/2 flex gap-1">
          <span className="w-2 h-10 bg-[#f8a1a8] rotate-12"></span>
          <span className="w-2 h-10 bg-[#f8a1a8] rotate-12"></span>
          <span className="w-2 h-10 bg-[#f8a1a8] rotate-12"></span>
        </div>
      </div>

      
    </section>
  );
}