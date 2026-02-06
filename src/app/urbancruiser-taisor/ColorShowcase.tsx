"use client";

import { useState } from "react";

type ColorOption = {
    title: string | string[];
    bgColor?: string;
    bgGradient?: string;
    text: string;
    image: string;
    type: "mono" | "dual";
};

const colors: ColorOption[] = [
    {
        title: "LUCENT ORANGE",
        bgColor: "#c45a2a",
        text: "#ffffff",
        image: "/urbancruiser-taisor/D27_Lucent_Orange.png",
        type: "mono",
    },
     {
        title: "CAFÉ WHITE",
        bgColor: "#F1F1F1",
        text: "#1A1A1A",
        image: "/urbancruiser-taisor/Cafe_white.png",
        type: "mono",
    },
    {
        title: ["GRAPHITE", "GREY"],
        bgGradient: "linear-gradient(180deg, #6a6a6a 50%, #222222 50%)",
        text: "#ffffff",
        image: "/urban-cruiser-taisor/Graphite_Grey.png",
        type: "dual",
    },
    {
        title: ["CAFE", "WHITE"],
        bgGradient: "linear-gradient(180deg, #f1f1f1 50%, #1a1a1a 50%)",
        text: "#000000",
        image: "/urban-cruiser-taisor/Cafe_white.png",
        type: "dual",
    },
];

export default function ColorShowcase() {
    const [active, setActive] = useState<ColorOption>(colors[0]);

    const bgStyle = active.bgGradient
        ? { backgroundImage: active.bgGradient }
        : { backgroundColor: active.bgColor };

    return (
        <section
  className="relative min-h-screen w-full overflow-hidden"
  style={bgStyle}
>
            {/* TITLE */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-center">
                {Array.isArray(active.title) ? (
                    active.title.map((line, i) => (
                        <h1
                            key={i}
                            className="text-[40px] sm:text-[70px] lg:text-[120px] font-extrabold tracking-widest leading-none"
                            style={{ color: active.text }}
                        >
                            {line}
                        </h1>
                    ))
                ) : (
                    <h1
                        className="text-[40px] sm:text-[70px] lg:text-[120px] font-extrabold tracking-widest whitespace-nowrap"
                        style={{ color: active.text }}
                    >
                        {active.title}
                    </h1>
                )}
            </div>

            <div className="relative z-20 max-w-[1500px] mx-auto px-6 pt-40 grid grid-cols-1 lg:grid-cols-2 items-center">

                {/* CAR */}
                {/* CAR */}
                <div className="relative flex justify-start h-[520px] lg:h-[680px]">
                    <img
                        key={active.image}
                        src={active.image}
                        alt="car"
                       className="
  h-[110%]
  w-auto
  max-w-[150%]
  scale-110
  -ml-20 lg:-ml-32
  object-contain
  animate-car-slide-strong
"
                    />
                </div>

                {/* COLORS */}
                <div className="mt-16 lg:mt-0 flex flex-col items-end pr-6 lg:pr-20">

                    {/* MONO */}
                    <div className="mb-12">
                        <p className="uppercase text-sm mb-4 opacity-80">Monotone</p>
                        <div className="flex gap-4">
                            {colors.filter(c => c.type === "mono").map((c, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(c)}
                                    className="w-14 h-14 rounded-full border-2 border-white/50"
                                    style={{ backgroundColor: c.bgColor }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* DUAL */}
                    <div>
                        <p className="uppercase text-sm mb-4 opacity-80">Dual Tone</p>
                        <div className="flex gap-4">
                            {colors.filter(c => c.type === "dual").map((c, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(c)}
                                    className="w-14 h-14 rounded-full border-2 border-white/50"
                                    style={{ backgroundImage: c.bgGradient }}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}









