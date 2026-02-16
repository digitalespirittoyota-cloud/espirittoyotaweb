
"use client";
import React, { useState } from "react";

const images = [
  "https://static.toyotabharat.com/images/showroom/innova-mmc/gallery03-646x405.jpg", // 1
  "https://static.toyotabharat.com/images/showroom/innova-mmc/gallery04-646x405.jpg", // 2
  "https://static.toyotabharat.com/images/showroom/innova-mmc/gallery02-646x405.jpg", // 3
  "https://static.toyotabharat.com/images/showroom/innova-mmc/gallery01-646x405.jpg", // 4
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((p) => (p === 0 ? images.length - 2 : p - 2));
  };

  const next = () => {
    setIndex((p) => (p + 2) % images.length);
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">GALLERY</h2>

      <div className="gallery-bg">
        <div className="gallery-container">

          {/* VIEWPORT */}
          <div className="viewport">
            <div key={index} className="columns slide-right">

              {/* LEFT COLUMN (1,3) */}
              <div className="column">
                <img src={images[index % images.length]} />
                <img src={images[(index + 2) % images.length]} />
              </div>

              {/* RIGHT COLUMN (2,4) */}
              <div className="column">
                <img src={images[(index + 1) % images.length]} />
                <img src={images[(index + 3) % images.length]} />
              </div>

            </div>
          </div>

          {/* ARROWS */}
          <div className="gallery-nav">
            <button onClick={prev}>‹</button>
            <button onClick={next}>›</button>
          </div>

        </div>
      </div>

      <style jsx>{`
        .gallery-section {
          padding: 60px 0;
        }

        .gallery-title {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 4px;
          margin-bottom: 40px;
        }

        .gallery-bg {
          background: #e6e6e6;
          padding: 60px 20px;
        }

        .gallery-container {
          max-width: 1200px;
          margin: auto;
          position: relative;
        }

        .viewport {
          overflow: hidden;
        }

        .columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          animation: slideRight 0.7s ease;
        }

        .column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .column img {
          width: 100%;
          height: 420px;
          object-fit: cover;
        }

        /* 🔥 LEFT → RIGHT MOTION */
        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        /* NAV */
        .gallery-nav {
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
        }

        .gallery-nav button {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #000;
          color: #fff;
          font-size: 28px;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .columns {
            grid-template-columns: 1fr;
          }

          .column img {
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
