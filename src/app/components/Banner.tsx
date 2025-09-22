"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { bannerSlides } from "../utils/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bannerSlides.length);
  };

  return (
    <div className="relative w-full h-52 sm:h-60 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slide wrapper */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Custom Arrows */}
      <button
        title="Previous Slide"
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 text-white hover:scale-110 transition-transform z-10"
      >
        <ChevronLeft size={80} strokeWidth={0.5} />
      </button>

      <button
        title="Next Slide"
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 text-white hover:scale-110 transition-transform z-10"
      >
        <ChevronRight size={80} strokeWidth={0.5} />
      </button>
    </div>
  );
}
