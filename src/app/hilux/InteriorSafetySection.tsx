"use client";

export default function InteriorSafetySection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">

        {/* Left Side */}
        <div className="relative md:flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-black inline-block relative">
            Interior & Safety Features
            {/* Red top-right L line */}
           <span className="absolute -top-1 -right-3 w-30 h-14 border-t-1 border-r-1 border-red-600"></span>

          </h2>
        </div>

        {/* Middle Section */}
      {/* Middle Section */}
<div className="md:flex-1 flex items-center md:justify-end md:pl-8">
  <h3 className="text-lg md:text-xl font-medium text-black">
    LUXURIOUS INTERIORS, <br /> MADE FOR A FULLER LIFE
  </h3>
</div>


        {/* Right Side */}
        <div className="md:flex-1 flex items-center">
          {/* Vertical line */}
          <div className="w-px h-16 bg-black mr-4 hidden md:block"></div>
          <p className="text-base md:text-lg leading-relaxed text-black">
            Plush. Luxurious. Safe. And sure to keep you connected to the world of adventure outside.{" "}
            <span className="text-red-600 font-script text-2xl md:text-3xl">Awesome</span>
          </p>
        </div>

      </div>
    </section>
  );
}
