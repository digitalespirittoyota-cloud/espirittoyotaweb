"use client";

import { useEffect, useRef, useState } from "react";

export default function ToyotaStyleScrollImage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const total = rect.height - vh;
      const scrolled = -rect.top;

      const p = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 🔑 ONLY WIDTH CHANGES */
  const minWidth = 200;
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setMaxWidth(window.innerWidth);

    const handleResize = () => {
      setMaxWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = minWidth + (maxWidth - minWidth) * progress;

  return (
    <>
      {/* <div className="h-[10vh]" /> */}

      <section ref={sectionRef} className="relative h-[100vh]">
        <div className="sticky top-0 h-[90vh] flex items-center justify-center overflow-hidden">

          <img
            src="/urbancruiser-taisor/d-27_interior_Comfort_cross_1920x800px.jpg"
            alt="Toyota style"
            style={{
              width: `${width}px`,
              height: "auto", // 🔥 keeps ratio
            }}
            className="object-cover transition-all duration-75 ease-out"
          />

        </div>
      </section>
    </>
  );
}
