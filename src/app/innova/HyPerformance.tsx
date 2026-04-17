"use client";
import React, { useState } from "react";

/* ================= PERFORMANCE DATA ================= */
const performanceData = [
  {
    title: "Self-Charging Hybrid Electric Technology and Refined Petrol Engine",
    description:
      "The new Innova HyCross is propelled by the latest 2.0L TNGA petrol engine and the most advanced 5th Generation Self-charging Hybrid Electric Technology. This refined engine takes performance and fuel-efficiency to a new HY.",
    image:
      "/models/innovahycross/hycross7.webp",
  },
  {
    title: "Drive Mode Switch",
    description:
      "Enjoy the pure, refined performance at a whole new HY.",
    image:
      "/models/innovahycross/hycross7.0.webp",
  },
  {
    title: "First-in-Segment Paddle Shifters",
    description:
      "Go through the gear range manually for max driving pleasure.",
    image:
      "/models/innovahycross/hycross7.1.webp",
  },
  {
    title: "First-in-Segment TNGA Hybrid Petrol Engine with E-drive Transmission",
    description:
      "Experience an exhilarating output of power for HY-end performance.",
    image:
      "/models/innovahycross/hycross7.2.webp",
  },
  {
    title: "TNGA Petrol Engine with Direct Shift CVT",
    description:
      "The HyCross also comes with an option of Gasoline Powertrain with Direct Shift CVT, on select variants, which provides an exhilarating and economical drive.",
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/performance-img04.jpg",
  },
];

/* ================= COMPONENT ================= */
const HyPerformance: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section className="hy-wrapper">
        {/* Heading */}
        <h1 className="main-heading">
          <span className="blue">MY NEW HY</span>{" "}
          <span className="black">of Performance</span>
        </h1>

        {/* Content */}
        <div className="content">
          {/* Left Image */}
          <div className="image-box">
            <img
              src={
                activeIndex !== null
                  ? performanceData[activeIndex].image
                  : performanceData[0].image
              }
              alt={
                activeIndex !== null
                  ? performanceData[activeIndex].title
                  : performanceData[0].title
              }
            />
          </div>

          {/* Right Text */}
          <div className="text-box">
            

            {/* Dropdown */}
            <div className="accordion">
              {performanceData.map((item, index) => (
                <div key={index} className="accordion-item">
                  <button
                    className={`accordion-title ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    {item.title}
                    <span className="arrow">
                      {activeIndex === index ? "^" : "⌄"}
                    </span>
                  </button>

                  {/* Dropdown content */}
                  {activeIndex === index && (
                    <div className="accordion-content">
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERNAL CSS ================= */}
      <style jsx>{`
        .hy-wrapper {
          width: 100%;
          padding: 60px 80px;
          background: #fff;
          color: gray;
        }

        .main-heading {
          text-align: center;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 50px;
        }

        .blue {
          color: #1f3c88;
          font-style: italic;
        }

        .black {
          color: #222;
          font-style: italic;
        }

        .content {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        .image-box {
          flex: 1.2;
        }

        .image-box img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          transition: opacity 0.4s ease;
        }

        .text-box {
          flex: 1;
        }

        .text-box h3 {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #333;
        }

        .text-box p {
          font-size: 15px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 30px;
        }

        .accordion-item {
          position: relative;
          border-bottom: 1px solid #ccc;
        }

        .accordion-title {
          width: 100%;
          background: none;
          border: none;
          padding: 16px 0;
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .accordion-title.active {
          // color: #1f3c88;
          font-weight: 600;
        }

        .arrow {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .accordion-content {
          position: relative;
          padding: 10px 0 20px 0;
          background: #f9f9f9;
          border-radius: 4px;
          color: #555;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1024px) {
          .hy-wrapper {
            padding: 40px;
          }
          .content {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }
          .main-heading {
            font-size: 32px;
          }
        }

        @media (max-width: 480px) {
          .hy-wrapper {
            padding: 30px 20px;
          }
          .main-heading {
            font-size: 26px;
          }
          .text-box h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default HyPerformance;
