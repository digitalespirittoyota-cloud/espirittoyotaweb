
"use client";
import React, { useState } from "react";

const slides = [
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/performance/Performance1_655x540.jpg",
    text: "",
  },
   {
    img: "https://static.toyotabharat.com/images/showroom/a32/performance/Performance4_655x540.jpg",
    text: "POWERFUL MOTOR - 128 kW | 106 kW",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/performance/instant-torque-655x540-02.jpg",
    text: "INSTANT TORQUE - 189 Nm",
  },
 
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/performance/performance-battery_655x540.jpg",
    text: "LITHIUM IRON PHOSPHATE BATTERY - 61 kWh | 49 kWh",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/performance/Performance1_655x540.jpg",
    text: "",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/performance/Performance4_655x540.jpg",
    text: "POWERFUL MOTOR - 128 kW | 106 kW",
  },
];

export default function PerformanceSection() {
  const [active, setActive] = useState(1);

  const prev = () => {
    setActive((p) => (p === 0 ? slides.length - 1 : p - 1));
  };

  const next = () => {
    setActive((p) => (p === slides.length - 1 ? 0 : p + 1));
  };

  return (
    <section className="performance">
      <div className="container">
        <h2 className="title">PERFORMANCE</h2>

        {/* Z LINE */}
        <div className="zline">
          <span />
        </div>

        {/* TOP TEXT */}
        <div className="topRow">
          <h3>
            POWER THAT RESPONDS <span>INSTANTLY</span>
          </h3>
          <p>
            With classic SUV proportions, 18” aerodynamic alloy wheels, and
            confident ground clearance, the Toyota Urban Cruiser Ebella delivers
            agile performance and the calm, composed feel of electric driving.
          </p>
        </div>

        {/* SLIDER */}
        <div className="sliderWrap">
          <button className="nav prev" onClick={prev}>
            <img src="https://static.toyotabharat.com/images/showroom/a32/left-black-arrow.svg" />
          </button>

          <div className="viewport">
            <div
              className="track"
              style={{
                transform: `translateX(-${active * 33.333}%)`,
              }}
            >
              {slides.map((item, i) => (
                <div className={`card ${i === active ? "active" : ""}`} key={i}>
                  <img src={item.img} />
                  <div className="label">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <button className="nav next" onClick={next}>
            <img src="https://static.toyotabharat.com/images/showroom/a32/right-black-arrow.svg" />
          </button>
        </div>
      </div>

      {/* INTERNAL CSS */}
      <style jsx>{`
        .performance {
          padding: 70px 0 90px;
          background: #fff;
          color:#000;
        }

        .container {
          width: 92%;
          margin: auto;
        }

        .title {
          font-size: 44px;
          color: #e10600;
          font-style: italic;
          margin-bottom: 10px;
        }

        /* Z LINE */
        .zline {
          position: relative;
          height: 2px;
        //   margin-bottom: 35px;
        }

        .zline::before {
          content: "";
          position: absolute;
          width: 40%;
          height: 1px;
          background: #e10600;
        }

        .zline::after {
          content: "";
          position: absolute;
          left: 42.1%;
          top: 50px;
          width: 62%;
          height: 1px;
          background: #e10600;
        }

        .zline span {
          position: absolute;
          left: 41.1%;
          top: -6px;
          width: 1px;
          height: 59px;
          background: #e10600;
          /* THIS MAKES IT "\" SHAPED */
  transform: rotate(-34deg);
  transform-origin: center;
        }

        .topRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .topRow h3 {
          font-size: 26px;
          font-style: italic;
        }

        .topRow h3 span {
          color: #e10600;
        }

        .topRow p {
          font-size: 14px;
          line-height: 1.7;
        }

        /* SLIDER */
        .sliderWrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .viewport {
          overflow: hidden;
          width: 100%;
        }

        .track {
          display: flex;
          transition: transform 0.6s ease;
        }

        .card {
          position: relative;
          flex: 0 0 33.333%;
          padding: 0 20px;
          transform: scale(0.9);
          transition: transform 0.5s ease;
        }

        .card.active {
          transform: scale(1);
        }

        .card img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 18px;
          display: block;
        }

        .label {
          position: absolute;
          bottom: 0;
          left: 20px;
          right: 20px;
          padding: 14px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          border-radius: 0 0 18px 18px;
          background: linear-gradient(
            0deg,
            rgba(225, 4, 0, 120),
            rgba(225, 6, 0, 0.7),
            transparent
          );
        }

        .nav {
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav img {
          width: 36px;
        }

        .prev {
          margin-right: 10px;
        }

        .next {
          margin-left: 10px;
        }

        /* TABLET */
@media (max-width: 1024px) {
  .title {
    font-size: 36px;
  }

  .card img {
    height: 320px;
  }

  .nav img {
    width: 30px;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .performance {
    padding: 50px 0 70px;
  }

  .title {
    font-size: 30px;
  }

  .topRow {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .topRow h3 {
    font-size: 22px;
  }

  .card img {
    height: 380px;
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .prev {
    left: -5px;
  }

  .next {
    right: -5px;
  }
}

/* SMALL MOBILE */
@media (max-width: 480px) {
  .title {
    font-size: 26px;
  }

  .card img {
    height: 220px;
  }

  .label {
    font-size: 12px;
    padding: 10px;
  }
}
      `}</style>
    </section>
  );
}
