

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ToyotaHeroStoryProps {
  image: string;
  mobileImage: string;
  title: string;
  description: string;
}

export default function ToyotaHeroStorySection({
  image,
  mobileImage,
  title,
  description,
}: ToyotaHeroStoryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // 👇 viewport se bahar gaya → animation reset
          setVisible(false);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] overflow-hidden bg-white"
    >
      {/* DESKTOP IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="hidden sm:block object-cover"
      />

      {/* MOBILE IMAGE */}
      <Image
        src={mobileImage}
        alt={title}
        fill
        priority
        className="block sm:hidden object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-start pt-14 sm:pt-20 lg:pt-24">

          {/* TITLE */}
          <h1
            className={`
              text-white font-light leading-tight max-w-md
              text-3xl sm:text-4xl lg:text-[56px]
              transition-all duration-1000 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {title}
          </h1>

          {/* DESCRIPTION */}
          <p
            className={`
              text-white text-sm sm:text-base leading-relaxed max-w-lg
              mt-6 lg:mt-0
              transition-all duration-1000 ease-out delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {description}
          </p>

        </div>
      </div>

      {/* RIGHT TOP DIAGONAL */}
      <div
        className="absolute top-0 right-0 bg-white z-20
        w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />

      {/* LEFT BOTTOM DIAGONAL */}
      <div
        className="absolute bottom-0 left-0 bg-white z-20
        w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36"
        style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
      />
    </section>
  );
}





