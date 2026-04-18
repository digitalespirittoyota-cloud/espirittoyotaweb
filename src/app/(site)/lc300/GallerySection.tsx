"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryData } from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<"exterior" | "interior">(
    "exterior"
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = galleryData[activeTab];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full bg-black py-16">

      {/* Heading */}
      <h2 className="text-white text-center text-4xl md:text-4xl font-light tracking-widest mb-10">
        GALLERY
      </h2>

      {/* Image Container */}
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">

        <Image
          src={images[currentIndex]}
          alt="gallery"
          fill
          priority
          className="object-cover"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
        >
          <ChevronLeft size={25} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
        >
          <ChevronRight size={25} />
        </button>

        {/* Bottom Toggle Buttons (Image ke upar) */}
        <div className="absolute bottom-5 left-0 w-full flex justify-center">
          <div className="flex w-full md:w-[400px] bg-black/60 backdrop-blur-sm">

            <button
              onClick={() => {
                setActiveTab("exterior");
                setCurrentIndex(0);
              }}
              className={`w-1/2 py-4 text-center text-sm md:text-base tracking-wide transition-all ${
                activeTab === "exterior"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Exterior
            </button>

            <button
              onClick={() => {
                setActiveTab("interior");
                setCurrentIndex(0);
              }}
              className={`w-1/2 py-4 text-center text-sm md:text-base tracking-wide transition-all ${
                activeTab === "interior"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              Interior
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
