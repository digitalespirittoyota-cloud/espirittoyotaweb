

"use client";

import { useState } from "react";

type ColorOption = {
    title: string | [string, string];
    bgTop: string;
    bgBottom: string;
    image: string;
    type: "mono" | "dual";
};

const colors: ColorOption[] = [
    // MONOTONE (top color + deep same color bottom)
    {
        title: "LUCENT ORANGE",
        bgTop: "#D66A2D",
        bgBottom: "#8A3F14", // deep orange
        image: "/urbancruiser-taisor/D27_Lucent_Orange copy.png",
        type: "mono",
    },
    {
        title: "CAFÉ WHITE",
        bgTop: "#F1F1F1",
        bgBottom: "#BDBDBD", // deep white/grey
        image: "/urbancruiser-taisor/Cafe_white.png",
        type: "mono",
    },
    {
        title: "ENTICING SILVER",
        bgTop: "#E3E3E3",
        bgBottom: "#9C9C9C", // deep silver
        image: "/urbancruiser-taisor/D27_Enticing_silver.png",
        type: "mono",
    },
    {
        title: "GAMING GREY",
        bgTop: "#8C8C8C",
        bgBottom: "#4F4F4F",
        image: "/urbancruiser-taisor/D27_Gaming_grey.png",
        type: "mono",
    },
    {
        title: "SPORTIN RED",
        bgTop: "#B11226",
        bgBottom: "#5C0B14",
        image: "/urbancruiser-taisor/D27_Sportin_red.png",
        type: "mono",
    },
    {
        title: "BLUISH BLACK",
        bgTop: "#0A5F66",
        bgBottom: "#04363A",
        image: "/urbancruiser-taisor/D27_Blueish_Black.png",
        type: "mono",
    },

    // DUAL TONE (color + black)
    {
        title: ["ENTICING SILVER", "MIDNIGHT BLACK"],
        bgTop: "#E3E3E3",
        bgBottom: "#121212",
        image: "/urbancruiser-taisor/D27_Enticing_silver_dual_tone_All_color_1920x625px.png",
        type: "dual",
    },
    {
        title: ["SPORTIN RED", "MIDNIGHT BLACK"],
        bgTop: "#B11226",
        bgBottom: "#121212",
        image: "/urbancruiser-taisor/D27_Sportin_red_dualtone_All_color_1920x625px.png",
        type: "dual",
    },
    {
        title: ["CAFÉ WHITE", "MIDNIGHT BLACK"],
        bgTop: "#F1F1F1",
        bgBottom: "#121212",
        image: "/urbancruiser-taisor/D27_Cafe_white_dual_tone_All_color_1920x625px.png",
        type: "dual",
    },
];

export default function ColorShowcase() {
    const [active, setActive] = useState<ColorOption>(colors[2]);

    return (
        <section className="relative w-full h-[700px] sm:h-[820px] lg:h-[900px] overflow-hidden">
            {/* BACKGROUND */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to bottom, ${active.bgTop} 52%, ${active.bgBottom} 52%)`,
                }}
            />

            {/* TITLE (FONT SIZE REDUCED) */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center">
                {Array.isArray(active.title) ? (
                    <>
                        <h1 className="text-white/70 font-extrabold uppercase tracking-widest text-[56px] sm:text-[90px] lg:text-[130px] leading-none whitespace-nowrap">
                            {active.title[0]}
                        </h1>
                        <h1 className="text-white/70 font-extrabold uppercase tracking-widest text-[56px] sm:text-[90px] lg:text-[130px] leading-none whitespace-nowrap">
                            {active.title[1]}
                        </h1>
                    </>
                ) : (
                    <h1 className="text-white/70 font-extrabold uppercase tracking-widest text-[56px] sm:text-[90px] lg:text-[130px] leading-none whitespace-nowrap">
                        {active.title}
                    </h1>
                )}
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-4 pt-32 lg:pt-36 grid grid-cols-1 lg:grid-cols-2 items-end">

                {/* CAR */}
                <div className="relative h-[340px] sm:h-[500px] lg:h-[680px]">
  <img
    src={active.image}
    alt="car"
    className="
      h-full w-auto object-contain
      scale-[1.25] sm:scale-[1.3] lg:scale-[1.4]
      ml-6 sm:ml-16 lg:ml-28
    "
  />
</div>

                {/* COLOR SELECTOR */}
                <div className="flex flex-col items-end pr-6 lg:pr-24 text-white pb-10">

                    {/* MONOTONE */}
                    <div className="mb-10">
                        <p className="uppercase text-xs mb-4 opacity-80">Monotone</p>
                        <div className="flex gap-4">
                            {colors.filter(c => c.type === "mono").map((c, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(c)}
                                    className="w-12 h-12 rounded-full border border-white/40"
                                    style={{
                                        background: `linear-gradient(to bottom, ${c.bgTop} 50%, ${c.bgBottom} 50%)`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* DUAL TONE */}
                    <div>
                        <p className="uppercase text-xs mb-4 opacity-80">Dual Tone</p>
                        <div className="flex gap-4">
                            {colors.filter(c => c.type === "dual").map((c, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(c)}
                                    className="w-12 h-12 rounded-full border border-white/40"
                                    style={{
                                        background: `linear-gradient(to bottom, ${c.bgTop} 50%, ${c.bgBottom} 50%)`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}









