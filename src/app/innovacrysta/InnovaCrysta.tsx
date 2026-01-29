
"use client";
import React from "react";

interface CarShowcaseProps {
  description: string;
  imageUrl: string;
  heading: string;
}

const CarShowcase: React.FC<CarShowcaseProps> = ({ description, imageUrl, heading }) => {
  return (
    <div className="container">
      {/* Text Section */}
      <div className="textWrapper">
        <p className="description">{description}</p>
      </div>

      {/* Image Section with Heading Overlay */}
      <div className="imageWrapper">
        <img src={imageUrl} alt={heading} className="carImage" />
        <h2 className="heading">{heading}</h2>
      </div>

      {/* Styles */}
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 40px 20px 20px 20px;
          max-width: 1600px;
          margin: 0 auto;
          background-color: #fff;
          color: #000;
        }

        .textWrapper {
          max-width: 100%;
          margin: 0 auto 20px;
          padding: 0 10px;
        }

        .description {
          font-size: 1rem;
          line-height: 1.8;
          color: #333;
          text-align: center;
          font-family: "gothambook", Arial, sans-serif;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .imageWrapper {
          position: relative;
          width: 100%;
          margin-top: 0;
        }

        .carImage {
          width: 100%;
          height: auto;
          display: block;
        }

        .heading {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #000;
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-align: center;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.78);
          padding: 10px 20px;
          width: 90%;
          max-width: 1200px;
          box-sizing: border-box;
        }

        @media (max-width: 1200px) {
          .heading {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 1024px) {
          .heading {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .description {
            font-size: 0.95rem;
          }
          .heading {
            font-size: 2rem;
            padding: 8px 16px;
          }
        }

        @media (max-width: 480px) {
          .description {
            font-size: 0.9rem;
          }
          .heading {
            font-size: 1.5rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default CarShowcase;
