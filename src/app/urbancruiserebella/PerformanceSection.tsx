
"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";

const slides = [
  {
    img: "/models/ebella/ebella16.webp",
    text: "",
  },
  {
    img: "/models/ebella/ebella17.webp",
    text: "POWERFUL MOTOR - 128 kW | 106 kW",
  },
  {
    img: "/models/ebella/ebella18.webp",
    text: "INSTANT TORQUE - 189 Nm",
  },
  {
    img: "/models/ebella/ebella19.webp",
    text: "LITHIUM IRON PHOSPHATE BATTERY - 61 kWh | 49 kWh",
  },
];

// [last_clone, slide0, slide1, slide2, slide3, first_clone]
const cloned = [slides[slides.length - 1], ...slides, slides[0]];
const TOTAL = slides.length;

export default function PerformanceSection() {
  const [active, setActive] = useState(1); // start at index 1 (real first slide)
  const trackRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef<boolean>(false);
  const jumpTo = useRef<number | null>(null); // holds the silent jump target index

  const enableTransition = () => {
    if (trackRef.current)
      trackRef.current.style.transition =
        "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
  };

  const disableTransition = () => {
    if (trackRef.current) trackRef.current.style.transition = "none";
  };

  const goTo = useCallback((idx: number) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    enableTransition();
    setActive(idx);
  }, []);

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  // After animated slide ends, check if we landed on a clone
  const handleTransitionEnd = () => {
    if (active === 0) {
      // Landed on last_clone → silently jump to real last slide
      jumpTo.current = TOTAL;
      disableTransition();
      setActive(TOTAL);
    } else if (active === cloned.length - 1) {
      // Landed on first_clone → silently jump to real first slide
      jumpTo.current = 1;
      disableTransition();
      setActive(1);
    } else {
      isTransitioning.current = false;
    }
  };

  // After silent jump is painted, re-enable transition and unlock
  useEffect(() => {
    if (jumpTo.current !== null) {
      // Force reflow so browser paints the new position before we re-enable transition
      if (trackRef.current) void trackRef.current.offsetHeight;
      enableTransition();
      jumpTo.current = null;
      isTransitioning.current = false;
    }
  }, [active]);

  // Real dot index (0-based)
  const realIndex = ((active - 1) % TOTAL + TOTAL) % TOTAL;

  return (
    <section className="performance">
      <div className="container">
        <h2 className="title">PERFORMANCE</h2>

        {/* Z LINE */}
        <div className="zline">
          <span />
        </div>

        {/* TOP TEXT */}
        <div className="topRow">
          <h3>
            POWER THAT RESPONDS <span>INSTANTLY</span>
          </h3>
          <p>
            With classic SUV proportions, 18" aerodynamic alloy wheels, and
            confident ground clearance, the Toyota Urban Cruiser Ebella delivers
            agile performance and the calm, composed feel of electric driving.
          </p>
        </div>

        {/* SLIDER */}
        <div className="sliderWrap">
          <button className="nav prev" onClick={prev} aria-label="Previous slide">
            <img
              src="https://static.toyotabharat.com/images/showroom/a32/left-black-arrow.svg"
              alt="Previous"
            />
          </button>

          <div className="viewport">
            <div
              className="track"
              ref={trackRef}
              style={{ transform: `translateX(-${active * 33.333}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {cloned.map((item, i) => (
                <div
                  className={`card ${i === active ? "active" : ""}`}
                  key={i}
                >
                  <img src={item.img} alt={item.text || "Performance image"} />
                  {item.text && <div className="label">{item.text}</div>}
                </div>
              ))}
            </div>
          </div>

          <button className="nav next" onClick={next} aria-label="Next slide">
            <img
              src="https://static.toyotabharat.com/images/showroom/a32/right-black-arrow.svg"
              alt="Next"
            />
          </button>
        </div>

        
      </div>

      <style jsx>{`
        .performance {
          padding: 70px 0 90px;
          background: #fff;
          color: #000;
        }
        .container {
          width: 92%;
          max-width: 1400px;
          margin: auto;
        }
        .title {
          font-size: clamp(26px, 5vw, 44px);
          color: #e10600;
          font-style: italic;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .zline {
          position: relative;
          height: 2px;
          margin-bottom: 50px;
        }
        .zline::before {
          content: "";
          position: absolute;
          width: 40%;
          height: 1px;
          background: #e10600;
        }
        .zline::after {
          content: "";
          position: absolute;
          left: 42.1%;
          top: 50px;
          width: 62%;
          height: 1px;
          background: #e10600;
        }
        .zline span {
          position: absolute;
          left: 41.1%;
          top: -6px;
          width: 1px;
          height: 59px;
          background: #e10600;
          transform: rotate(-34deg);
          transform-origin: center;
        }
        .topRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 50px;
        }
        .topRow h3 {
          font-size: clamp(20px, 3vw, 26px);
          font-style: italic;
          font-weight: 700;
          line-height: 1.3;
        }
        .topRow h3 span {
          color: #e10600;
        }
        .topRow p {
          font-size: clamp(13px, 2vw, 14px);
          line-height: 1.7;
        }
        .sliderWrap {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .viewport {
          overflow: hidden;
          width: 100%;
        }
        .track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card {
          position: relative;
          flex: 0 0 33.333%;
          padding: 0 15px;
          transform: scale(0.92);
          opacity: 0.6;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card.active {
          transform: scale(1);
          opacity: 1;
        }
        .card img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 18px;
          display: block;
        }
        .label {
          position: absolute;
          bottom: 0;
          left: 15px;
          right: 15px;
          padding: 14px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          border-radius: 0 0 18px 18px;
          background: linear-gradient(
            0deg,
            rgba(225, 4, 0, 0.95),
            rgba(225, 6, 0, 0.7),
            transparent
          );
        }
        .nav {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e0e0e0;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .nav:hover {
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: scale(1.05);
        }
        .nav:active {
          transform: scale(0.95);
        }
        .nav img {
          width: 20px;
          height: 20px;
        }
        .slideIndicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d0d0d0;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .indicator.active {
          background: #e10600;
          width: 24px;
          border-radius: 4px;
        }
        @media (min-width: 1440px) {
          .card img { height: 420px; }
        }
        @media (max-width: 1439px) {
          .container { width: 94%; }
        }
        @media (max-width: 1199px) {
          .performance { padding: 60px 0 80px; }
          .card img { height: 340px; }
          .topRow { gap: 30px; }
        }
        @media (max-width: 1023px) {
          .performance { padding: 50px 0 70px; }
          .zline::after { left: 43%; top: 45px; width: 60%; }
          .zline span { left: 42%; height: 53px; }
          .topRow { gap: 25px; margin-bottom: 40px; }
          .card img { height: 300px; }
          .nav { width: 44px; height: 44px; }
          .nav img { width: 18px; height: 18px; }
        }
        @media (max-width: 767px) {
          .performance { padding: 40px 0 60px; }
          .container { width: 95%; }
          .zline { margin-bottom: 35px; }
          .zline::before { width: 35%; }
          .zline::after { left: 37%; top: 40px; width: 65%; }
          .zline span { left: 36%; height: 48px; }
          .topRow { grid-template-columns: 1fr; gap: 20px; margin-bottom: 35px; }
          .sliderWrap { gap: 0; }
          .card { padding: 0 10px; }
          .card img { height: 280px; border-radius: 14px; }
          .label { left: 10px; right: 10px; padding: 12px 14px; font-size: 12px; border-radius: 0 0 14px 14px; }
          .nav { position: absolute; width: 40px; height: 40px; z-index: 10; background: rgba(255, 255, 255, 0.95); }
          .nav img { width: 16px; height: 16px; }
          .prev { left: 5px; }
          .next { right: 5px; }
        }
        @media (max-width: 639px) {
          .card img { height: 240px; }
          .zline::before { width: 30%; }
          .zline::after { left: 33%; top: 35px; width: 70%; }
          .zline span { left: 32%; height: 43px; }
        }
        @media (max-width: 479px) {
          .performance { padding: 35px 0 50px; }
          .container { width: 92%; }
          .zline { margin-bottom: 30px; }
          .zline::before { width: 28%; }
          .zline::after { left: 31%; top: 32px; width: 72%; }
          .zline span { left: 30%; height: 40px; }
          .topRow { margin-bottom: 30px; gap: 18px; }
          .card { padding: 0 8px; }
          .card img { height: 200px; border-radius: 12px; }
          .label { left: 8px; right: 8px; padding: 10px 12px; font-size: 11px; border-radius: 0 0 12px 12px; }
          .nav { width: 36px; height: 36px; }
          .nav img { width: 14px; height: 14px; }
          .prev { left: 2px; }
          .next { right: 2px; }
          .indicator { width: 6px; height: 6px; }
          .indicator.active { width: 20px; }
        }
        @media (max-width: 360px) {
          .card img { height: 180px; }
          .label { font-size: 10px; padding: 8px 10px; }
          .topRow p { font-size: 12px; }
        }
      `}</style>
    </section>
  );
}