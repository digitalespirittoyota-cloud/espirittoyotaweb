"use client";
import React, { useState } from "react";

const slides = [
  {
    title: "SMOOTH DIAL SHIFT",
    image:
      "/models/ebella/ebella8.webp",
  },
  {
    title: "TWO SPOKE SQUIRCLE STEERING WHEEL",
    image:
      "/models/ebella/ebella9.webp",
  },
  {
    title: "10.1’’ INTEGRATED AUDIO DISPLAY UNIT",
    image:
      "/models/ebella/ebella10.webp",
  },
  {
    title: "PREMIUM JBL SOUND SYSTEM",
    image:
      "/models/ebella/ebella11.webp",
  },
  {
    title: "LUGGAGE SPACE",
    image:
      "/models/ebella/ebella12.webp",
  },
  {
    title: "PANORAMIC ROOF",
    image:
      "/models/ebella/ebella13.webp",
  },
];

export default function ToyotaInteriorSlider() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () =>
    setActive((p) => (p === slides.length - 1 ? 0 : p + 1));

  const nextIndex = (active + 1) % slides.length;
  return (
    <section className="wrapper">
      {/* 1️⃣ GREY HEADLINE STRIP */}
      <div className="headline">
        <div className="headline-left">
          <span className="red">SOPHISTICATION</span>{" "} <br />
          <span style={{color:"black"}}>THAT FEELS ADVANCED</span>
        </div>
        <div className="headline-right">
          Step inside, and modern design takes centre stage. Every detail is
          purposeful, from the sleek digital displays to the clean, minimal
          layout. The interior, enhanced with ambient lighting, delivers a
          visually-cohesive design that expresses the bold strength of an SUV.
        </div>
      </div>

      {/* 2️⃣ HERO IMAGE */}
      <div className="hero">
        <img src={slides[active].image} alt={slides[active].title} />

        {/* overlays */}
        <div className="dark-overlay" />
        <div className="red-glow" />

        {/* 4️⃣ BOTTOM LEFT TEXT */}
        <div className="interior-text">INTERIOR</div>

        {/* 5️⃣ PREVIEW CARD */}
        {/* THUMBNAILS (2 cards) */}
        
            <div className="preview">
          <span className="preview-title">
            {slides[active].title}
          </span>
          <div className="thumbs">
            <img src={slides[active].image} />
            <img src={slides[nextIndex].image} />
          </div>
        </div>
        

        {/* ARROWS */}
        <div className="arrows">
          <img
            src="/models/ebella/arrow-prev.webp"
            onClick={prev}
          />
          <img
            src="/models/ebella/arrow-next.webp"
            onClick={next}
          />
        </div>

        {/* 6️⃣ RIGHT FLOATING ICONS (UI ONLY) */}
        
      </div>

      <style jsx>{`
  .wrapper {
    width: 100%;
    background: #000;
    overflow-x: hidden;
  }

  /* HEADLINE */
  .headline {
    display: flex;
    justify-content: space-between;
    padding: 12px 40px;
    width: calc(100% - 80px);
    border-radius: 10px;
    background: rgba(210, 210, 210, 0.9);
    font-style: italic;
    align-items: center;
    margin: 25px auto 0;
    gap: 30px;
  }

  .headline-left {
    font-size: clamp(16px, 2vw, 20px);
    letter-spacing: 1px;
  }

  .headline-left .red {
    color: #e10600;
    font-weight: 700;
  }

  .headline-right {
    max-width: 520px;
    font-size: clamp(11px, 1.2vw, 12px);
    line-height: 1.6;
    color: #222;
  }

  /* HERO */
  .hero {
    position: relative;
    width: 100%;
  }

  .hero img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .dark-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.3) 45%,
      transparent 70%
    );
  }

  .red-glow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40vw;
    max-width: 320px;
    height: 30vw;
    max-height: 220px;
    background: radial-gradient(
      circle,
      rgba(225, 6, 0, 0.6),
      transparent 70%
    );
  }

  .interior-text {
    position: absolute;
    left: 40px;
    bottom: 40px;
    color: #fff;
    font-size: clamp(18px, 3vw, 26px);
    letter-spacing: 5px;
  }

  /* PREVIEW CARD – FULLY RESPONSIVE */
.preview {
  position: absolute;

  /* Responsive horizontal position */
  right: clamp(16px, 26vw, 270px);

  /* Responsive vertical position */
  bottom: clamp(20px, 5vw, 40px);

  /* Responsive width */
  width: clamp(200px, 26vw, 260px);

  z-index: 5;
}

  .preview-title {
    display: block;
    padding: 8px;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }

  .thumbs {
    display: flex;
    border: 1px solid #333;
  }

  .thumbs img {
    width: 30%;
    object-fit: cover;
  }
.preview img { width: 100%; display: block; }
  /* ARROWS */
  .arrows {
    position: absolute;
    right: 20px;
    bottom: 100px;
    display: flex;
    gap: 12px;
    z-index: 5;
  }

  .arrows img {
    width: 36px;
    cursor: pointer;
  }

  /* ========================= */
  /* TABLET */
  /* ========================= */
  @media (max-width: 1024px) {
    .preview {
      right: 40px;
      width: 220px;
    }

    .interior-text {
      left: 24px;
      bottom: 24px;
    }
  }

  /* ========================= */
  /* MOBILE */
  /* ========================= */
  @media (max-width: 768px) {
    .headline {
      flex-direction: column;
      text-align: center;
      padding: 16px;
      gap: 12px;
    }

    .headline-right {
      max-width: 100%;
    }

    .preview {
      position: static;
      width: 90%;
      margin: 16px auto;
    }

    .interior-text {
      font-size: 18px;
      left: 16px;
      bottom: 16px;
    }

    .arrows {
      right: 50%;
      transform: translateX(50%);
      bottom: 20px;
    }
  }

  /* ========================= */
  /* SMALL MOBILE */
  /* ========================= */
  @media (max-width: 480px) {
    .preview-title {
      font-size: 11px;
    }

    .arrows img {
      width: 30px;
    }
  }
`}</style>

    </section>
  );
}
























