"use client";

import Image from "next/image";
import Link from "next/link";

export default function EBookHeroSection() {
  return (
    <Link href="https://www.toyotabharat.com/online-booking/?model-id=23">
      <section
        className="
          relative w-full
          h-[200px] sm:h-[320px] md:h-[420px] lg:h-[400px]
          overflow-hidden
          cursor-pointer
          group
        "
      >
        {/* BACKGROUND IMAGE */}
        <Image
          src="/urbancruiser-taisor/D27_E-book_1920x500px.jpg" // background image
          alt="E-Book Now"
          fill
          priority
          className="object-contain"
        />

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1400px] mx-auto h-full flex items-center px-5 sm:px-8 md:px-12">
          <h2
            className="
              text-white
              text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px]
              font-bold
              italic
              tracking-wide
              
            "
          >
            E - BOOK NOW
          </h2>
        </div>
      </section>
    </Link>
  );
}