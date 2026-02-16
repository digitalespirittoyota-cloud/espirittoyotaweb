

"use client";
import { useEffect, useRef, useState } from "react";

const carouselItems = [
  { type: "image", src: "/hilux/water-wanding-banner.webp" },
  {
    type: "youtube",
    src: "tfD2X2EZtl4",
    thumbnail: "https://img.youtube.com/vi/tfD2X2EZtl4/hqdefault.jpg",
  },
  { type: "image", src: "/hilux/water-wanding-banner2.webp" },
];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [index, setIndex] = useState(0);
  const [playYoutube, setPlayYoutube] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = () =>
    setIndex((index - 1 + carouselItems.length) % carouselItems.length);
  const next = () => {
    setIndex((index + 1) % carouselItems.length);
    setPlayYoutube(false);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 lg:px-16 py-14 overflow-x-hidden"
    >
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT : Carousel */}
          <div
            className={`relative w-full h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden bg-black
            transition-all duration-700 ease-out transform
            ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          >
            {carouselItems[index].type === "image" && (
              <img
                src={carouselItems[index].src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {carouselItems[index].type === "youtube" && !playYoutube && (
              <div
                className="w-full h-full relative cursor-pointer"
                onClick={() => setPlayYoutube(true)}
              >
                <img
                  src={carouselItems[index].thumbnail}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center text-white text-3xl">
                    ►
                  </div>
                </div>
              </div>
            )}

            {carouselItems[index].type === "youtube" && playYoutube && (
              <iframe
                src={`https://www.youtube.com/embed/${carouselItems[index].src}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
              />
            )}

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-red-600 text-white w-10 h-10 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-600 text-white w-10 h-10 rounded-full"
            >
              ›
            </button>
          </div>

          {/* RIGHT : Flex column with animation */}
          <div className="flex flex-col gap-6 h-[280px] sm:h-[420px] lg:h-[560px]">

            {/* TOP IMAGE */}
            <div
              className={`relative flex-1 overflow-hidden transition-transform duration-700 ease-out transform
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
            >
              <img
                src="/hilux/4x4-features.webp"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white px-4 py-3 text-sm tracking-wide">
                4X4 FEATURES
              </div>
            </div>

            {/* BOTTOM TWO IMAGES */}
            <div className="flex flex-1 gap-6">
              {[
                {
                  img: "/hilux/engine-and-transmission-548x468.webp",
                  text: "ENGINE & TRANSMISSION",
                },
                {
                  img: "/hilux/rigid-frame-structure-548x468.webp",
                  text: "RIGID FRAME STRUCTURE",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative flex-1 overflow-hidden transition-transform duration-700 ease-out transform
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  ${i === 0 ? "delay-300" : "delay-500"}`}
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white px-3 py-2 text-xs sm:text-sm">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
