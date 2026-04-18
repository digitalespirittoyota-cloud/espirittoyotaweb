

"use client";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

interface ModelHighlightSectionProps {
  title?: string;
  desktopImage?: string;
  mobileImage?: string;
}

export default function ModelHighlightSection({
  title = "ZX",
  desktopImage = "",
  mobileImage = "",
}: ModelHighlightSectionProps) {
  return (
    <>
      <section className="w-full">
        <div className="w-full flex flex-col md:flex-row md:items-start">

          {/* ZX STRIP */}
          <div className="relative h-[60px] md:h-[90px] 
                          w-full md:w-[260px] 
                          shrink-0">
            <div
              className="h-full w-full bg-[#d9d9d9] 
                         flex items-center 
                         pl-6 md:pl-8"
              style={{
                clipPath:
                  "polygon(0 0, 88% 0, 100% 40%, 100% 100%, 0 100%)",
              }}
            >
              <h2
                className={`${inter.className} 
                  text-[20px] md:text-[34px] 
                  font-extralight 
                  tracking-[1px]`}
              >
                {title}
              </h2>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 w-full">
            {/* Desktop Image */}
            <img
              src={desktopImage}
              alt={title}
              className="hidden md:block w-full h-auto object-contain"
            />

            {/* Mobile Image */}
            <img
              src={mobileImage || desktopImage}
              alt={title}
              className="block md:hidden w-full h-auto object-contain"
            />
          </div>

        </div>
      </section>

      <div className="h-[6vh] md:h-[10vh]"></div>
    </>
  );
}
