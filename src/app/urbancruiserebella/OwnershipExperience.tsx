"use client";
import React from "react";

const OwnershipExperience = () => {
  return (
    <section className="ownership-wrapper">
      <div className="container">
        {/* LEFT */}
        <div className="left">
          <h2>
            DELIGHTFUL <span>OWNERSHIP</span>
            <br /> EXPERIENCE
          </h2>

          <div className="map-section">
            <img
              src="https://static.toyotabharat.com/images/showroom/a32/service/india.png"
              alt="India Map"
              className="india-map"
            />

            {/* <div className="stat top-left">
              <p>TOTAL</p>
              <h3>1300+</h3>
              <span>TOUCHPOINTS</span>
            </div> */}

            {/* <div className="stat right">
              <p>NETWORK ACROSS</p>
              <h3>900+</h3>
              <span>CITIES PAN-INDIA</span>
            </div> */}

            {/* <div className="stat bottom">
              <h3>500+</h3>
              <span>BEV ENABLED SERVICE TOUCHPOINTS</span>
            </div> */}
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <img
            src="https://static.toyotabharat.com/images/showroom/a32/service/assured-service-txt.svg"
            className="assured-title"
            alt="Assured Electrified Service"
          />

          <ul className="service-points">
            <li>
              <img src="https://static3.toyotabharat.com/images/showroom/a32/service/service-liicon.svg" />
              Quick and Convenient Service at all Toyota dealerships
            </li>
            <li>
              <img src="https://static3.toyotabharat.com/images/showroom/a32/service/service-liicon.svg" />
              Serviced by trained Technicians with over a decade of experience
            </li>
          </ul>

          <h3 className="peace">PEACE OF MIND OWNERSHIP</h3>

          <div className="icon-grid">
            {[
              "assured-buyback-img",
              "tcare-img",
              "EM47",
              "toyota trust",
              "financial",
              "mobility",
              "iconnect",
            ].map((img, i) => (
              <img
                key={i}
                src={`https://static.toyotabharat.com/images/showroom/a32/service/${img}.svg`}
                alt="icon"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Right Lines */}
      <img
        src="https://static3.toyotabharat.com/images/showroom/a32/right-comfort-line-339x520.svg"
        className="right-lines"
      />

      <style jsx>{`
        .ownership-wrapper {
          position: relative;
          padding: 80px 20px;
          background: #fff;
          color:#000;
          overflow: hidden;
        }

        .container {
        max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  border: 1px solid red;
  border-radius: 10px;
  padding: 20px;
  background: white;
  position: relative;
  z-index: 1; /* ensures it stays above background elements */
}

        /* LEFT */
        .left h2 {
          font-size: 32px;
          font-weight: 500;
          margin-bottom: 40px;
          font-style:italic;
        }

        .left h2 span {
          color: #e10600;
          font-weight: 700;
        }

        .map-section {
          position: relative;
        }

        .india-map {
          width: 100%;
          max-width: 460px;
        }

        .stat {
          position: absolute;
          color: #000;
        }

        .stat h3 {
          color: #e10600;
          font-size: 26px;
          margin: 4px 0;
        }

        .top-left {
          top: 0;
          left: 0;
        }

        .right {
          top: 80px;
          right: -80px;
        }

        .bottom {
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        /* RIGHT */
        .assured-title {
          max-width: 280px;
          margin-bottom: 20px;
        }

        .service-points {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        .service-points li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .service-points img {
          width: 14px;
          margin-top: 4px;
        }

        .peace {
          color: #e10600;
          font-size: 18px;
          margin-bottom: 20px;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .icon-grid img {
          width: 100%;
          max-width: 120px;
        }

        /* DECOR */
        .right-lines {
          position: absolute;
          right: -40px;
          top: 50%;
          transform: translateY(-50%);
          max-width: 260px;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .container {
            flex-direction: column;
          }

          .right-lines {
            display: none;
          }

          .icon-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .left h2 {
            font-size: 24px;
          }

          .icon-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat {
            position: static;
            margin-top: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default OwnershipExperience;
