"use client";

import { hiluxCtaData } from "./data";

export default function HiluxEbookSection() {
  return (
    <section className="w-full bg-white">

      {/* DISCLAIMER + DOWNLOAD */}
      <div className="max-w-[1200px] mx-auto px-4 py-10 relative">
        <h3 className="text-sm font-semibold mb-4">DISCLAIMER</h3>

        <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-700">
          {hiluxCtaData.disclaimer.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ol>

        {/* DOWNLOAD BUTTON */}
        <a
          href={hiluxCtaData.brochureUrl}
          target="_blank"
          className="absolute top-10 right-4 bg-black text-white text-xs md:text-sm px-4 py-2 uppercase font-semibold hover:bg-red-600 transition"
        >
          Download Brochure
        </a>
      </div>

      {/* IMAGE CTA SECTION */}
      <a
        href={hiluxCtaData.ebookUrl}
        target="_blank"
        className="block relative w-full group"
      >
        <img
          src={hiluxCtaData.image.src}
          alt={hiluxCtaData.image.alt}
          className="w-full h-[200px] sm:h-[360px] md:h-[450px] "
        />

        {/* E-BOOK NOW TEXT */}
        
      </a>
    </section>
  );
}
