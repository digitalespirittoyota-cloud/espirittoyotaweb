"use client";
import { useState } from "react";

type CarColor = {
  name: string;
  image: string;
  colorCode: string;
};

const carColors: CarColor[] = [
  {
    name: "Spunky Blue",
    image:
      "https://static.toyotabharat.com/images/showroom/rumion/car-color/monotone/spunky-blue.png",
    colorCode: "#1f4fa3",
  },
  {
    name: "Rustic Brown",
    image:
      "https://static.toyotabharat.com/images/showroom/rumion/car-color/monotone/rustic-brown.png",
    colorCode: "#6b2e2e",
  },
  {
    name: "Iconic Grey",
    image:
      "https://static.toyotabharat.com/images/showroom/rumion/car-color/monotone/iconic-grey.png",
    colorCode: "#4b4b4b",
  },
  {
    name: "Cafe White",
    image:
      "https://static.toyotabharat.com/images/showroom/rumion/car-color/monotone/cafe-white.png",
    colorCode: "#e8e5dc",
  },
  {
    name: "Enticing Silver",
    image:
      "https://static.toyotabharat.com/images/showroom/rumion/car-color/monotone/enticing-silver.png",
    colorCode: "#b5b5b5",
  },
];

export default function RumionColors() {
  const [activeColor, setActiveColor] = useState<CarColor>(carColors[0]);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .color-page {
          min-height: 100vh;
          background: url("https://static.toyotabharat.com/images/showroom/rumion/car-color-bg.webp")
            no-repeat center/cover;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 30px 20px;
        }

        .title {
          text-align: center;
          margin-top: 10px;
        }

        .title h2 {
          font-size: 45px;
          font-weight: 700;
          margin: 0;
          color: #000;
        }

        .title span {
          color: #00a3ff;
          
        }

        .car-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .car-image {
          max-width: 900px;
          width: 100%;
          transition: opacity 0.4s ease;
          
        }

        .car-image img {
          width: 100%;
          height: auto;
        }

        .color-selector {
          display: flex;
          gap: 22px;
          margin-bottom: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .color-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          font-size: 12px;
          color: #333;
        }

        .color-dot {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid transparent;
          margin-bottom: 6px;
        }

        .color-item.active .color-dot {
          border-color: #000;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 768px) {
          .title h2 {
            font-size: 22px;
          }

          .car-image {
            max-width: 95%;
          }
        }

        @media (max-width: 480px) {
          .color-selector {
            gap: 16px;
          }

          .color-dot {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>

      <div className="color-page">
        {/* Title */}
        <div className="title">
          <h2>
            GOOD WALA <br /> <span>COLOURS</span>
          </h2>
        </div>

        {/* Car Image */}
        <div className="car-wrapper">
          <div className="car-image">
            <img src={activeColor.image} alt={activeColor.name} />
          </div>
        </div>

        {/* Color Selector */}
        <div className="color-selector">
          {carColors.map((color) => (
            <div
              key={color.name}
              className={`color-item ${
                activeColor.name === color.name ? "active" : ""
              }`}
              onClick={() => setActiveColor(color)}
            >
              <div
                className="color-dot"
                style={{ backgroundColor: color.colorCode }}
              ></div>
              <span>{color.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
