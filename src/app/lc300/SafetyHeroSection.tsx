"use client";

type SafetyHeroProps = {
  desktopImage: string;
  mobileImage: string;
  title: string;
  description: string;
};

export default function SafetyHeroSection({
  desktopImage,
  mobileImage,
  title,
  description,
}: SafetyHeroProps) {
  return (
    <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">

      {/* Desktop Image */}
      <img
        src={desktopImage}
        alt="Safety"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Mobile Image */}
      <img
        src={mobileImage}
        alt="Safety"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full px-6 md:px-16 pb-10 md:pb-14">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            {/* Left Title */}
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[48px] font-extralight tracking-wide leading-tight">
              {title}
            </h2>

            {/* Right Description */}
            <p className="text-white text-[13px] sm:text-[14px] md:text-[15px] font-light max-w-lg leading-relaxed">
              {description}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
