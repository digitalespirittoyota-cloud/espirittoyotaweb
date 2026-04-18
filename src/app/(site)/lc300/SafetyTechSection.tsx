"use client";

import { safetyFeatures } from "./data";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["200", "300"],
});
export default function SafetyTechSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden text-white">

            {/* Desktop Image */}
            <img
                src="/lc300/lc300-ADAS-desktop-1200x750.webp"
                alt="Toyota Safety"
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
            />

            {/* Mobile Image */}
            <img
                src="/lc300/lc300-ADAS-desktop-1200x750.webp"
                alt="Toyota Safety"
                className="block md:hidden absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-20 py-12 md:py-24">

                {/* TOP TEXT */}
                <div>
                    <h2 className={`${inter.className} text-[28px] sm:text-[34px] md:text-[58px] font-extralight tracking-[1px] leading-tight`}>
                        Toyota <br /> Safety Sense 3.0
                    </h2>

                    <p className="mt-4 text-[13px] md:text-[15px] font-light text-white/85">
                        The new Land Cruiser has adopted the latest Toyota Safety Sense 3.0
                    </p>
                </div>

                {/* DESKTOP FEATURES */}
                <div className="hidden md:grid grid-cols-5 gap-12 border-t border-white/20 pt-12">

                    {safetyFeatures.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-[20px] font-medium tracking-wide">
                                {item.title}
                            </h3>

                            <p className="text-[14px] text-white/80 mt-2">
                                {item.subtitle}
                            </p>

                            <p className="text-[13px] text-white/60 mt-6 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* MOBILE FEATURES */}
                <div className="md:hidden space-y-4 mt-10">
                    {safetyFeatures.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black/60 p-4 border border-white/10"
                        >
                            <h3 className="text-[17px] font-medium">
                                {item.title}
                            </h3>

                            <p className="text-[13px] text-white/70 mt-1">
                                {item.subtitle}
                            </p>

                            <p className="text-[12px] text-white/60 mt-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
