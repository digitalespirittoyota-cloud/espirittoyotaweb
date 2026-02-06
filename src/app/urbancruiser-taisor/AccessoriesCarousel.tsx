"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface AccessoriesItem {
  image: string;
  title: string;
}

interface AccessoriesCarouselProps {
  heading: string;
  items?: AccessoriesItem[];
}

export default function AccessoriesCarousel({
  heading,
  items = [],
}: AccessoriesCarouselProps) {
  const visibleItems = 4;
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const maxIndex = items.length - visibleItems;

  const prev = () => {
    setIndex((p) => (p <= 0 ? maxIndex : p - 1));
  };

  const next = () => {
    setIndex((p) => (p >= maxIndex ? 0 : p + 1));
  };

  return (
    <section className="w-full py-16">
      {/* HEADING */}
      <h2 className="text-[26px] sm:text-[32px] font-semibold mb-10 px-4">
        {heading}
      </h2>

      {/* CAROUSEL WRAPPER */}
      <div className="relative max-w-[1400px] mx-auto px-4 overflow-hidden">
        {/* TRACK */}
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 25}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-[25%]"
            >
              {/* IMAGE */}
              <div className="overflow-hidden transition-all duration-300 group-hover:scale-x-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[300px] object-cover"
                />
              </div>

              {/* TITLE */}
              <p className="mt-3 text-sm sm:text-base font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                     z-40 bg-white/80 rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                     z-40 bg-white/80 rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
    </section>
  );
}