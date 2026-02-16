"use client";

export default function HiluxLegacySection() {
  return (
    <section className="w-full bg-white px-4 md:px-12 py-16">
      <div className="max-w-7xl mx-auto relative">

        {/* HEADING + RED L LINE */}
        <div className="relative inline-flex items-center">

          {/* TEXT + IMAGE */}
          <h1 className="flex items-center text-[28px] sm:text-[34px] md:text-[44px] font-semibold text-[#2b2b2b] leading-none">
            THE
            <span className="mx-3 inline-flex items-center">
              <img
                src="/hilux/hilux-text.webp"
                alt="Hilux"
                className="h-[26px] sm:h-[32px] md:h-[40px] object-contain"
              />
            </span>
            LEGACY
          </h1>

          {/* RED L SHAPE */}
          <div className="absolute -top-2 right-[-20px] w-[140px] h-[60px] border-t-2 border-r-2 border-red-600 hidden md:block" />
        </div>

        {/* PARAGRAPH 1 */}
        <p className="mt-8 max-w-4xl text-[14px] sm:text-[15px] md:text-[16px] text-[#333] leading-relaxed">
          A formidable reputation of toughness, power, luxury and performance.
          Built over 5 decades and 8 generations with        {" "}
          <span className="text-red-600 font-medium">
            over 20 million units sold in more than 180 countries.
          </span>
        </p>

        {/* PARAGRAPH 2 */}
        <p className="mt-6 max-w-4xl text-[14px] sm:text-[15px] md:text-[16px] text-[#333] leading-relaxed">
          And here we are now, to make a statement of power, sophistication and
          durability on Indian soil.
        </p>

      </div>
    </section>
  );
}
