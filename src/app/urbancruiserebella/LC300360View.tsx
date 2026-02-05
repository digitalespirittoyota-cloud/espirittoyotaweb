"use client";
import React from "react";

const LC300360View: React.FC = () => {
  const handleClick = () => {
    window.open(
      "https://www.toyotabharat.com/virtual-showroom/lc300.html",
      "_blank"
    );
  };

  return (
    <>
      <section className="lc360-section">
        <div className="overlay" />

        <img
          src="https://static.toyotabharat.com/images/showroom/lc300/lc300-360-section-image-desktop-1920x1080.webp"
          alt="LC300 360 View"
          className="bg-image"
        />

        <div className="view-btn" onClick={handleClick}>
          <span>360°</span>
          <p>VIEW</p>
        </div>
      </section>

      <style jsx>{`
        .lc360-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
          cursor: pointer;
        }

        .bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 1;
        }

        .view-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;

  /* underline styling */
  text-decoration-line: underline;
  text-decoration-color: skyblue;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}


        .view-btn span {
          font-size: 28px;
          font-weight: 500;
        }

        .view-btn p {
          font-size: 14px;
          letter-spacing: 2px;
          margin-top: 4px;
          text-decoration: none;
        }

        /* Hover effect */
        .view-btn:hover {
          background: #fff;
          color: #000;
        }

        .view-btn:hover  {
          text-decoration: underline;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .lc360-section {
            height: 90vh;
          }

          .view-btn {
            width: 120px;
            height: 120px;
          }

          .view-btn span {
            font-size: 24px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .lc360-section {
            height: 80vh;
          }

          .view-btn {
            width: 100px;
            height: 100px;
          }

          .view-btn span {
            font-size: 22px;
          }

          .view-btn p {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default LC300360View;
