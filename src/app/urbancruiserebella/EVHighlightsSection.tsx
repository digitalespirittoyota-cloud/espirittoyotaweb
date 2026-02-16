"use client";
import React from "react";

const EVHighlightsSection: React.FC = () => {
  return (
    <>
      {/* ================= TOP HIGHLIGHTS ================= */}
      <section className="highlights-wrapper">
        <div className="highlight-card">
          <h2>543 km</h2>
          <p>RANGE</p>
          <span>(CERTIFIED BY ARAI)</span>
        </div>

        <div className="highlight-card">
          <h2>49 | 61 kWh</h2>
          <p>BATTERY OPTIONS</p>
        </div>

        <div className="highlight-card">
          <h2>ADAS LEVEL 2</h2>
        </div>

        <div className="highlight-card">
          <h2>DC CHARGING</h2>
          <p>10% TO 80%</p>
          <span>IN 45 MINS</span>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="tabs-wrapper">
        {[
          "EXTERIOR",
          "INTERIOR",
          "ICONNECT",
          "PERFORMANCE",
          "COMFORT",
          "SAFETY",
          "COLOURS",
          "SERVICE",
          "ACCESSORIES",
          "SPECS",
        ].map((tab) => (
          <button key={tab} className="tab-btn">
            {tab}
          </button>
        ))}
      </section>

      {/* ================= ASSURED CARE ================= */}
      <section className="assured-care">
        <h2>
          ASSURED <span>CARE</span>
        </h2>

        <ul>
          <li>
            World class service through <strong>500+</strong> BEV enabled service
            touchpoints.
          </li>
          <li>
            Latest BEV diagnostic tools and advanced infrastructure.
          </li>
          <li>
            <strong>2500+</strong> BEV master technicians with over a decade of
            electrification experience.
          </li>
        </ul>
      </section>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        /* ================= HIGHLIGHTS ================= */
        .highlights-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 110px 40px 70px;
  background: #ffffff;
  overflow: hidden;
}
.highlights-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1500px;
  height: 300px;

  background-image: url("https://static3.toyotabharat.com/images/showroom/a32/colors/img-bottom-line-circle-1016x328.svg");
  background-repeat: no-repeat;
  background-size: 1800px 528px;
  background-position: center top;

  z-index: 1;
  pointer-events: none;
}



        .highlight-card {
  background: linear-gradient(
    90deg,
    #000 0%,
    #b10505 50%,
    #000 100%
  );
  color: #fff;
  border-radius: 14px;
  padding: 43px;
  text-align: center;
  box-shadow: 0 20px 25px rgba(245, 0, 0, 0.2);
  position: relative;
  z-index: 2;
}


        .highlight-card h2 {
          font-size: 34px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .highlight-card p {
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        .highlight-card span {
          font-size: 12px;
          opacity: 0.8;
        }

        /* ================= TABS ================= */
        .tabs-wrapper {
        max-width: 1500px;
  margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          border: 1px solid #625f5f62;
          padding: 20px 30px;
          justify-content: center;
          background: #f7f7f7;
        }

        .tab-btn {
          padding: 10px 22px;
          border-radius: 10px;
          border: 1px solid #000;
          background: #e7e3e3e2;
          color:#000;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
  background: linear-gradient(
    to bottom,
    #b10505 0%,
    #8a0000 50%,
    #000 100%
  );
  color: #fff;
}


        /* ================= ASSURED CARE ================= */
        .assured-care {
          padding: 60px 20px;
          text-align: center;
          max-width: 1520px;
          margin: auto;
          background:#fff;
          color:#000;
          // border-bottom:1px solid red;
        }

        .assured-care h2 {
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 30px;
          font-Style:italic;
        }

        .assured-care h2 span {
          color: red;
          font-style: italic;
        }

        .assured-care ul {
          list-style: none;
          padding: 0;
        }

        .assured-care li {
          font-size: 28px;
          line-height: 1.8;
          margin-bottom: 18px;
          text-align: left;
          position: relative;
          padding-left: 24px;
          font-Style:italic;
        }

        .assured-care li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;

  width: 16px;
  height: 16px;

  background-image: url("https://static3.toyotabharat.com/images/showroom/a32/service/service-liicon.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.assured-care li strong{
color:red;}

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1024px) {
          .highlights-wrapper {
    grid-template-columns: repeat(2, 1fr);
    background-size: 110% auto;
    background-position: center 20px;
  }

          .highlight-card h2 {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .highlights-wrapper {
    grid-template-columns: 1fr;
    background-size: 140% auto;
    background-position: center 10px;
    padding: 40px 20px;
  }

          .tabs-wrapper {
            padding: 16px;
          }

          .assured-care h2 {
            font-size: 28px;
          }

          .assured-care li {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default EVHighlightsSection;
