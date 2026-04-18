"use client";
import React from "react";

const LC300Hero: React.FC = () => {
  return (
    <>
      <section className="lc300-hero">
        <div className="overlay" />

        <picture>
  {/* Mobile */}
  <source
    media="(max-width: 768px)"
    srcSet="https://static3.toyotabharat.com/images/showroom/lc300/lc300-hero-section-image-mobile-600x1080.webp"
  />

  {/* Tablet */}
  <source
    media="(max-width: 1024px)"
    srcSet="https://static3.toyotabharat.com/images/showroom/lc300/lc300-hero-section-image-tablet-900x1080.webp"
  />
  

  {/* Desktop / Laptop fallback */}
  <img
    src="https://static3.toyotabharat.com/images/showroom/lc300/lc300-hero-section-image-desktop-1920x1080.webp"
    alt="Land Cruiser 300"
    className="hero-image"
  />
</picture>


        <div className="hero-content">
          <h1>Land Cruiser 300</h1>
          <button>Download Brochure</button>
        </div>
      </section>

      <style jsx>{`
        .lc300-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.4)
          );
          z-index: 1;
        }

        .hero-content {
          position: absolute;
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: #fff;
          z-index: 2;
          width: 100%;
          padding: 0 16px;
        }

        .hero-content h1 {
          font-size: 56px;
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 18px;
        }

        .hero-content button {
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
          padding: 12px 28px;
          font-size: 14px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-content button:hover {
          background: #fff;
          color: #000;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-content h1 {
            font-size: 44px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .lc300-hero {
            height: 100vh;
          }

          .hero-content {
            bottom: 10%;
          }

          .hero-content h1 {
            font-size: 34px;
          }

          .hero-content button {
            padding: 10px 22px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default LC300Hero;
