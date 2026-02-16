import React from "react";

interface StyleSectionProps {
  leftImage: string;
  rightTopImage: string;
  rightBottomImage: string;
  description: string;
}

const Connection: React.FC<StyleSectionProps> = ({
  leftImage,
  rightTopImage,
  rightBottomImage,
  description,
}) => {
  return (
    <section className="w-full h-auto lg:h-[400px] overflow-hidden relative">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[51%_49%]">

        {/* LEFT IMAGE – 60% on desktop, full width on mobile */}
        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-full relative">
          <img
            src={leftImage}
            alt="Car"
            className="w-full h-full object-cover"
          />

          {/* MOBILE ONLY: RIGHT TOP IMAGE */}
          <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div
              className="h-[100px] w-[200px] sm:h-[120px] sm:w-[250px] bg-no-repeat bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${rightTopImage})`,
              }}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative w-full h-auto lg:h-full bg-white flex">
          {/* DIAGONAL CUT */}
          <div className="hidden lg:block absolute top-0 left-[-90px] h-full w-[180px] bg-white skew-x-[-12deg] z-10" />

          <div className="relative z-20 w-full h-full px-4 lg:px-0 pt-4 lg:pt-0 pb-8 lg:pb-0">
            {/* DESKTOP TOP IMAGE */}
            <div
              className="hidden lg:block relative w-full h-[190px] bg-no-repeat bg-contain bg-left z-200 position-relative right-18"
              style={{ backgroundImage: `url(${rightTopImage})` }}
            >
              {/* DESKTOP BOTTOM IMAGE */}
              <img
                src={rightBottomImage}
                alt="Style Bottom"
                className="hidden lg:block absolute -bottom-20 -left-8 w-[230px] object-contain z-30 position-relative left-9 top-31"
              />
            </div>

            {/* MOBILE BOTTOM IMAGE */}
            <div className="lg:hidden flex justify-center items-center mt-6 mb-4">
              <img
                src={rightBottomImage}
                alt="Style Bottom"
                className="w-[180px] sm:w-[200px] md:w-[220px] object-contain"
              />
            </div>

            {/* TEXT */}
            <p className="mt-4 lg:mt-19 text-gray-600 text-lg sm:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              {description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Connection;