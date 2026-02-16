"use client";
import React from "react";

const SmartwatchConnectivity: React.FC = () => {
  return (
    <div className="page">
      <div className="hero">
        <img
          src="https://static.toyotabharat.com/images/showroom/a32/iconnect/iconnectimg1-1399x787.webp"
          alt="Smartwatch Connectivity"
          className="bgImage"
        />

        {/* Bottom Content */}
        <div className="contentWrapper">
          <div className="contentBox">
            <p className="tagline">
              TECHNOLOGY THAT FEELS <span>INTUITIVE</span>
            </p>

            <div className="divider">SMARTWATCH CONNECTIVITY</div>

            <p className="description">
              THE TOYOTA URBAN CRUISER REBELLA KEEPS YOU CONNECTED TO EVERY MOMENT.
              WITH THE INTELLIGENT I-CONNECT SYSTEM, INFORMATION AND CONTROL COME
              TOGETHER SEAMLESSLY. FROM RANGE TO CHARGING, NAVIGATION TO
              CONVENIENCE, EVERYTHING WORKS IN SYNC, EFFORTLESSLY.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          width: 100%;
          background: #fff;
          display:flex;
          justify-content:center;
        }

        .hero {
          position: relative;
          width: 83%;
          height: 100vh;
          overflow: hidden;
        }

        .bgImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right center;
          z-index: 1;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        .contentWrapper {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 3;
        }

        .contentBox {
          width: 48%;
          max-width: 500px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          padding: 24px 30px 30px;
          text-align: center;
          color: #fff;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15) 0%,
            rgba(0, 0, 0, 0.65) 55%,
            rgba(0, 0, 0, 0.95) 100%
          );
        }

        .tagline {
          font-size: 25px;
          letter-spacing: 2.5px;
          margin-bottom: 22px;
          font-weight: 500;
          font-style:italic;
        }

        .tagline span {
          color: #e10600;
          font-weight: 600;
        }

        .divider {
          margin: 0 auto 22px;
          padding: 11px 96px;
          background: #ffffff;
          color: #000;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.4px;
          display: inline-block;
          font-style:italic;
        }

        .description {
          font-size: 15.5px;
          line-height: 1.8;
          letter-spacing: 0.4px;
          color: #dcdcdc;
          max-width: 760px;
          margin: 0 auto;
          font-style:italic;
          text-align:left;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .contentWrapper {
            bottom: 50px;
          }

          .contentBox {
            padding: 30px 22px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .hero {
            height: 92vh;
          }

          .contentWrapper {
            bottom: 36px;
          }

          .contentBox {
            width: 92%;
            padding: 24px 16px;
          }

          .tagline {
            font-size: 14px;
            letter-spacing: 2px;
          }

          .divider {
            font-size: 11px;
            padding: 8px 18px;
          }

          .description {
            font-size: 11.5px;
          }
        }
      `}</style>
    </div>
  );
};

export default SmartwatchConnectivity;