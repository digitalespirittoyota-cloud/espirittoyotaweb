"use client";

import { div } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ToyotaHeroStoryProps {
  image: string;
  mobileImage: string;
  title: string;
  description: string;
}

export default function ToyotaHeroStorySection2({
  image,
  mobileImage,
  title,
  description,
}: ToyotaHeroStoryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
<div className="h-[10vh]"></div>
    <section
      ref={sectionRef}
      className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] overflow-hidden isolate bg-white"
    >
      {/* DESKTOP IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"    
        className="hidden sm:block object-cover"
        style={{ transform: "none" }}
      />

      {/* MOBILE IMAGE */}
      <Image
        src={mobileImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="block sm:hidden object-cover"
        style={{ transform: "none" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT — BOTTOM, TWO SIDES */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        <div
          className="
            absolute bottom-10 sm:bottom-14 lg:bottom-20
            left-5 right-5
            sm:left-8 sm:right-8
            lg:left-16 lg:right-16
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end">
            
            {/* TITLE – LEFT */}
            <h1
              className={`
                text-white font-light leading-tight max-w-md
                text-3xl sm:text-4xl lg:text-[36px]
                transition-all duration-1000 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              {title}
            </h1>

            {/* DESCRIPTION – RIGHT */}
            <p
              className={`
                text-white text-sm sm:text-base leading-relaxed max-w-lg
                transition-all duration-1000 ease-out delay-200
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              {description}
            </p>

          </div>
        </div>
      </div>

      {/* TOP LEFT CUT */}
      <div
        className="
          absolute top-0 left-0 bg-white z-20
          w-8 h-8
          sm:w-12 sm:h-12
          lg:w-20 lg:h-20
        "
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* BOTTOM RIGHT CUT */}
      <div
        className="
          absolute bottom-0 right-0 bg-white z-20
          w-8 h-8
          sm:w-12 sm:h-12
          lg:w-20 lg:h-20
        "
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
      />
    </section>

    </>
  );
}