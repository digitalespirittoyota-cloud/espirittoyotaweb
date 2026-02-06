
"use client";

import Image from "next/image";

export default function DownloadBrochureSection() {
  const handleDownload = () => {
    const pdfUrl = "/urbancruiser-taisor/e-brochure-uc-taisor (1).pdf";

    // 1️⃣ open in new tab
    window.open(pdfUrl, "_blank");

    // 2️⃣ trigger download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Urban-Cruiser-Taisor-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative flex flex-col lg:flex-row min-h-[420px]">

        {/* LEFT IMAGE */}
        <div className="relative w-full lg:w-[65%] h-[260px] lg:h-auto">
          <Image
            src="/urbancruiser-taisor/D27_Make_Your_Style.webp"
            alt="Toyota Taisor"
            fill
            priority
            className="object-cover"
          />

          {/* DIAGONAL WHITE CUT */}
          <div className="hidden lg:block absolute top-0 right-[-90px] h-full w-[180px] bg-white skew-x-[-12deg] z-10" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative w-full lg:w-[35%] flex items-center px-6 lg:px-14 py-12 bg-white z-20">
          <div className="max-w-md">
            <p className="text-sm italic tracking-wide mb-2">
              DOWNLOAD
            </p>

            <h2 className="text-4xl font-bold italic mb-6">
              BROCHURE
            </h2>

            <p className="text-base leading-relaxed mb-8">
              For more information on how you make your way, all you have to do is click on the button and download the brochure.
            </p>

            {/* DOWNLOAD BUTTON */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="bg-red-600 text-white px-6 py-3 flex items-center gap-3 italic font-medium hover:bg-red-700 transition"
              >
                <span className="text-lg">⬇</span>
                Download Brochure
              </button>

              {/* RED STRIPES */}
              <div className="flex gap-1">
                <span className="w-2 h-10 bg-red-400"></span>
                <span className="w-2 h-10 bg-red-300"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}