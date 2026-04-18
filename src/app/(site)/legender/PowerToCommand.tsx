


"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PowerSectionProps = {
  bgImage: string;
  carImage: string;
  title: string;
  middleImage: string;
  description: string;
};

export default function PowerToCommand({
  bgImage,
  carImage,
  title,
  middleImage,
  description,
}: PowerSectionProps) {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">

        {/* LEFT SIDE */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] pl-3 sm:pl-8 lg:pl-16 overflow-hidden rounded-r-xl">
          {/* Background image */}
          <Image
            src={bgImage}
            alt="background"
            fill
            className="object-cover object-top sm:object-center rounded-r-xl"
            priority
          />

          {/* Car Image */}
          <motion.div
            initial={{ x: -160, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 w-full h-full flex justify-center items-end overflow-hidden"
          >
            <div className="relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-[95%] h-[60%] sm:h-[70%] md:h-[80%] lg:h-[85%]">
              <Image
                src={carImage}
                alt="car"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 gap-6 mt-10 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold uppercase leading-tight">
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>

          <div className="relative w-[200px] sm:w-[260px] md:w-[340px] h-[150px] sm:h-[200px] md:h-[260px]">
            <Image
              src={middleImage}
              alt="engine"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <p className="text-gray-600 text-[14px] sm:text-[14.5px] md:text-[15px] leading-6 sm:leading-7 max-w-full md:max-w-md">
            {description}
          </p>
        </div>

      </div>
    </section>
  );
}
