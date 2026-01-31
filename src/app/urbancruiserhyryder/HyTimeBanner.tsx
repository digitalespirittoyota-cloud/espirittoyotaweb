
"use client";
import React from "react";

interface HyTimeBannerProps {
  leftImage?: string;
  stats?: string[];
  description?: string[];
  introText?: string;
  carImage?: string;
}

const HyTimeBanner: React.FC<HyTimeBannerProps> = ({
  leftImage = "",
  stats = [],
  description = [],
  introText = "",
  carImage = "",
}) => {

  return (
    <>
      <section className="hytime">
        {/* LEFT IMAGE */}
        <div className="left">
          <img src={leftImage} alt="HY Time Banner" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="right">
          {stats.map((item, i) => (
            <p key={i} className="bold">
              {item}
            </p>
          ))}

          {description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}

          <p className="intro">
            Introducing the all-new <strong>{introText}</strong>
          </p>

          <img className="car" src={carImage} alt={introText} />
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .hytime {
          display: grid;
          grid-template-columns: 60% 40%;
          width: 100%;
          background: #fff;
          color:#000;
          overflow: hidden;
        }

        .left {
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          padding: 10px;
        }

        .right {
          padding: 80px 70px;
        }

        .right p {
          font-size: 14px;
          line-height: 1.7;
          color: #111;
          margin-bottom: 18px;
        }

        .bold {
          font-weight: 600;
        }

        .intro {
          margin-top: 22px;
          font-size: 15px;
        }

        .car {
          width: 220px;
          max-width: 100%;
          margin-top: 40px;
          display: block;
        }

        @media (max-width: 1024px) {
          .hytime {
            grid-template-columns: 1fr;
          }
          .left {
            height: 55vh;
          }
          .right {
            padding: 40px;
          }
          .car {
            width: 380px;
            margin: 40px auto 0;
          }
        }

        @media (max-width: 768px) {
          .left {
            height: 45vh;
          }
          .right {
            padding: 30px 20px;
          }
          .right p {
            font-size: 13px;
          }
          .car {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .left {
            height: 40vh;
          }
          .right p {
            font-size: 12.5px;
          }
        }
      `}</style>
    </>
  );
};

export default HyTimeBanner;
