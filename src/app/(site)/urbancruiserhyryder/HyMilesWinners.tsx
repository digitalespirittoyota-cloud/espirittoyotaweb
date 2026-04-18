
"use client";
import React, { useState, useRef, useEffect } from "react";

/* ================= TYPES ================= */
export interface Winner {
  name: string;
  mileage: string;
  drive: string;
  region: string;
  img: string;
}

interface HyMilesCarouselProps {
  title: string;
  subtitle: string;
  winners: Winner[];
  bigImage: string;
  layout?: "right" | "left";
  cardWidth?: number;
  cardsToShow?: number;
  overlap?: number;
}

/* ================= COMPONENT ================= */
const HyMilesCarousel: React.FC<HyMilesCarouselProps> = ({
  title,
  subtitle,
  winners,
  bigImage,
  layout = "right",
  cardWidth = 250,
  cardsToShow = 3,
  overlap = 50,
}) => {
  const GAP = 15;
  const STEP = cardWidth + GAP;

  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  /* clone items for smooth sliding */
  const trackItems = [...winners, ...winners.slice(0, cardsToShow)];

  const slideNext = () => setIndex((prev) => prev + 1);
  const slidePrev = () =>
    setIndex((prev) => (prev === 0 ? winners.length - 1 : prev - 1));

  /* smooth loop reset */
  useEffect(() => {
    if (index === winners.length) {
      const timer = setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setIndex(0);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 0.6s ease";
      }
    }
  }, [index, winners.length]);

  const maskWidth =
    cardWidth * cardsToShow + GAP * (cardsToShow - 1) - overlap;

  return (
    <>
      {/* ================= CSS ================= */}
      <style>{`
        .hy-container {
          display: flex;
          align-items: center;
          height: 100vh;
          overflow: hidden;
          background: #fff;
        }

        .layout-right { flex-direction: row; }
        .layout-left { flex-direction: row-reverse; }

        .hy-left {
          width: 45%;
          padding: 40px;
          position: relative;
          z-index: 5;
        }

        .hy-right {
          width: 55%;
          position: relative;
          z-index: 1;
        }

        .hy-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }

        .hy-title {
          font-size: 28px;
          font-weight: 700;
          color: #000;
          margin-bottom: 5px;
        }

        .hy-subtitle {
          font-size: 16px;
          letter-spacing: 2px;
          color: #000;
          margin-bottom: 30px;
        }

        .carousel-mask {
          position: relative;
          overflow: hidden;
          z-index: 10;
        }

        .carousel-track {
          display: flex;
          gap: ${GAP}px;
          position: relative;
          z-index: 20;
        }

        .winner-card {
          width: ${cardWidth}px;
          flex-shrink: 0;
          background: #eef4fb;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }

        .winner-info {
          padding: 14px;
        }

        .winner-info h4 {
          font-size: 13px;
          margin-bottom: 6px;
          color: #000;
        }

        .winner-info p {
          font-size: 12px;
          margin: 3px 0;
          color: #000;
        }

        .winner-img img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .arrow {
          position: absolute;
          bottom: 15px;
          font-size: 26px;
          background: none;
          border: none;
          cursor: pointer;
          color: #000;
          z-index: 30;
        }

        .arrow.left { left: 40px; }
        .arrow.right { left: 90px; }

        @media (max-width: 1024px) {
          .hy-container { height: auto; padding: 20px; }
          .hy-left, .hy-right { width: 50%; }
          .hy-right { height: 400px; }
        }

        @media (max-width: 768px) {
          .hy-container { flex-direction: column; }
          .hy-left, .hy-right { width: 100%; }
          .hy-right { height: 300px; margin-top: 20px; }
        }
      `}</style>

      {/* ================= JSX ================= */}
      <div className={`hy-container layout-${layout}`}>
        <div className="hy-left">
          <div className="hy-title">{title}</div>
          <div className="hy-subtitle">{subtitle}</div>

          <div
            className="carousel-mask"
            style={{
              width: maskWidth,
              marginRight: layout === "right" ? -overlap : 0,
              marginLeft: layout === "left" ? -overlap : 0,
            }}
          >
            <div
              className="carousel-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${index * STEP}px)`,
              }}
            >
              {trackItems.map((item, i) => (
                <div className="winner-card" key={i}>
                  <div className="winner-info">
                    <h4>{item.name}</h4>
                    <p>Mileage: {item.mileage}</p>
                    <p>{item.drive}</p>
                    <p>Region: {item.region}</p>
                  </div>
                  <div className="winner-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow left" onClick={slidePrev}>‹</button>
          <button className="arrow right" onClick={slideNext}>›</button>
        </div>

        <div className="hy-right">
          <img src={bigImage} alt="Big Banner" />
        </div>
      </div>
    </>
  );
};

export default HyMilesCarousel;




























