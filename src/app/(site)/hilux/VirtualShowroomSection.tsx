

"use client";
import { useEffect, useRef, useState } from "react";
import "./VirtualShowroomImage.css";

export default function VirtualShowroomImage() {
  const imageRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    window.open(
      "https://espirittoyota.co.in/virtual-showroom/hilux.html",
      "_blank"
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false); // reset
          setTimeout(() => setAnimate(true), 50); // retrigger
        }
      },
      { threshold: 0.4 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="vs-section">
      <div
        ref={imageRef}
        className={`vs-image-wrapper ${animate ? "slide-up" : ""}`}
        onClick={handleClick}
      >
        <img
          src="/hilux/vr-banner-1 (1).webp"
          alt="Toyota Virtual Showroom"
        />
      </div>
    </section>
  );
}




