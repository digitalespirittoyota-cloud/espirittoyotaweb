
"use client";
import React from "react";

interface ExteriorOverviewProps {
  headingTop: string;
  headingBottom: string;
  description: string;
  primaryImage: string;
  secondaryImage?: string; // OPTIONAL
  buttonText: string;
  buttonLink: string;
}

const ExteriorOverview: React.FC<ExteriorOverviewProps> = ({
  headingTop,
  headingBottom,
  description,
  primaryImage,
  secondaryImage,
  buttonText,
  buttonLink,
}) => {
  const handleExplore = () => {
    window.open(buttonLink, "_blank");
  };

  return (
    <>
      <style>{`
        .exterior-section {
          width: 100%;
          padding: 60px 5%;
          background: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .exterior-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .exterior-heading h2 {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .exterior-heading h2 span:first-child {
          color: #1e3a8a;
          font-style: italic;
          margin-right: 8px;
        }

        .exterior-heading h2 span:last-child {
          color: #000;
          font-style: italic;
        }
        .exterior-layout {
                display: grid;
                gap: 30px;
        }

        .two-images {
                grid-template-columns: 2.2fr 1fr;
                align-items: stretch; /* important */
          }

        /* 🔥 THIS IS THE MAGIC */
         .small-image {
               align-self: end;        /* bottom */
               justify-self: center;  /* horizontal center */
        }

       

        .big-image img,
        .small-image img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          display: block;
        }

        .content-area {
          margin-top: 40px;
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .content-area p {
          font-size: 16px;
          line-height: 1.7;
          color: #333;
          font-weight: bold;
        }

        .explore-btn {
          min-width: 400px;
          background: #111;
          color: #fff;
          border: none;
          padding: 16px 36px;
          font-size: 18px;
          font-weight: 600;
          font-style: italic;
          cursor: pointer;
        }

        .explore-btn:hover {
          background: #fff;
          color:black;
          border:1px solid black;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .exterior-layout {
            grid-template-columns: 1fr;
          }

          .content-area {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .exterior-heading h2 {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .exterior-heading h2 {
            font-size: 22px;
          }

          .explore-btn {
            width: 100%;
          }
        }
      `}</style>

      <section className="exterior-section">
        {/* Heading */}
        <div className="exterior-heading">
          <h2>
            <span>{headingTop}</span>
            <span>{headingBottom}</span>
          </h2>
        </div>

        {/* Images */}
        <div
          className={`exterior-layout ${
            secondaryImage ? "two-images" : "one-image"
          }`}
        >
          <div className="big-image">
            <img src={primaryImage} alt="Primary Image" />
          </div>

          {secondaryImage && (
            <div className="small-image">
              <img src={secondaryImage} alt="Secondary Image" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="content-area">
          <button className="explore-btn" onClick={handleExplore}>
            {buttonText}
          </button>

          <p>{description}</p>
        </div>
      </section>
    </>
  );
};

export default ExteriorOverview;
