"use client";
import React, { useState } from "react";

interface ColorOption {
  name: string;
  image: string;
  swatch: string;
}

const colors: ColorOption[] = [
  {
    name: "Blackish Ageha Glass Flake",
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/ageha-blackish.png",
    swatch: "#1c1c1c",
  },
  {
    name: "Super White",
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/super-white.png",
    swatch: "#eeeeee",
  },
  {
    name: "Platinum White Pearl",
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/platinum-white-pearl.png",
    swatch: "#e6e3df",
  },
  {
    name: "Silver Metallic",
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/metallic-silver.png",
    swatch: "#d9dee7",
  },
  {
    name: "Attitude Black Mica",
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/attitude-black.png",
    swatch: "#111111",
  },
  {
    name: "Avant Garde Bronze Metallic",
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/avant-garde-bronze.png",
    swatch: "#c1b4a6",
  },
];

const HyColors: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="hy-container">
        <h1 className="hy-title">
          MY NEW <span>HY</span> Colors
        </h1>

        <div className="hy-content">
          {/* Car Image */}
          <div className="car-wrap">
            <img src={colors[active].image} alt="Innova HyCross" />
          </div>

          {/* Color Selector */}
          <div className="color-list">
            {colors.map((item, index) => (
              <div
                key={index}
                className={`color-item ${
                  active === index ? "active" : ""
                }`}
                onClick={() => setActive(index)}
              >
                <div
                  className="color-dot"
                  style={{ backgroundColor: item.swatch }}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="explore-btn">Explore Virtually</button>
      </section>

      {/* ================= INTERNAL CSS ================= */}
      <style jsx>{`
        .hy-container {
          padding: 60px 5%;
          background: #fff;
          text-align: center;
          color:black;
        }

        .hy-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 40px;
        }

        .hy-title span {
          color: #243c8f;
          font-style: italic;
        }

        .hy-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .car-wrap {
          flex: 1.4;
        }

        .car-wrap img {
          width: 100%;
          height:60vh;
          max-width: 900px;
        }

        .color-list {
          flex: 0.5;
          display: flex;
          flex-direction: column;
          gap: 26px;
          text-align: left;
        }

        .color-item {
          display: flex;
          align-items: center;
          gap: 18px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 500;
        }

        .color-dot {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 2px solid #ccc;
        }

        .color-item.active .color-dot {
          border: 2px solid #000;
          box-shadow: 0 0 0 3px #fff, 0 0 0 4px #000;
        }

        .explore-btn {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          background: #111;
          border: none;
          cursor: pointer;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1024px) {
          .hy-title {
            font-size: 38px;
          }

          .hy-content {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .hy-content {
            flex-direction: column;
          }

          .color-list {
            align-items: center;
            text-align: center;
          }

          .color-item {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
  .hy-container {
    padding: 30px 16px;
  }

  .hy-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .hy-content {
    gap: 24px;
  }

  .car-wrap img {
    height: auto;
    max-width: 100%;
  }

  .color-list {
    width: 100%;
    gap: 16px;
  }

  .color-item {
    font-size: 14px;
    gap: 12px;
  }

  .color-dot {
    width: 28px;
    height: 28px;
  }

  .explore-btn {
    width: 100%;
    margin-top: 30px;
    padding: 12px 0;
    font-size: 16px;
  }
}
@media (max-width: 360px) {
  .hy-title {
    font-size: 22px;
  }

  .color-item span {
    line-height: 1.3;
  }
}

      `}</style>
    </>
  );
};

export default HyColors;
