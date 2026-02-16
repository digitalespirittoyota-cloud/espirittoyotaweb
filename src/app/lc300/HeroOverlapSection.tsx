"use client";

import Image from "next/image";

export default function HeroOverlapSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      <div className="relative w-full h-full">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block relative w-full h-full">
          
          {/* Desktop Background */}
          <Image
            src="/lc300/grs-image-1 (1).webp"
            alt="Toyota background desktop"
            fill
            priority
            className="object-cover "
          />

          {/* Desktop Foreground */}
          <Image
            src="/lc300/grs-cliping (1).webp"
            alt="Toyota LC300 desktop"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ================= MOBILE ================= */}
        <div className="block md:hidden relative w-full h-full">
          
          {/* Mobile Background */}
          <Image
            src="/lc300/grs-image-1 (1).webp"
            alt="Toyota background mobile"
            fill
            priority
            className="object-cover "
          />

          {/* Mobile Foreground */}
          <Image
            src="/lc300/grs-cliping-mobile.webp"
            alt="Toyota LC300 mobile"
            fill
            priority
            // className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}