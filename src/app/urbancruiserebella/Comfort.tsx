
"use client";
import React, { useState } from "react";

const comfortData = [
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort6_800x510.jpg",
    text: "10-WAY ADJUSTABLE DRIVER SEAT",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort5_800x510.jpg",
    text: "10-WAY ADJUSTABLE DRIVER SEAT",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort4_800x510.jpg",
    text: "FRONT SEAT ARM REST",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort3_800x510.jpg",
    text: "ELECTRONIC PARKING BRAKE",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort2_800x510.jpg",
    text: "AIR VENTS",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort1_800x510.jpg",
    text: "",
  },
];

export default function ComfortSection() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p === 0 ? comfortData.length - 1 : p - 1));
  const next = () =>
    setActive((p) => (p === comfortData.length - 1 ? 0 : p + 1));

  return (
    <section className="comfort">
      {/* LEFT PANEL */}
      <div className="content">
        <h1>COMFORT</h1>
        <h2>
          CALM THAT <br /> <span>MOVES</span> WITH YOU
        </h2>
        <p>
          The All-Electric Urban Cruiser Ebella features a contemporary, premium
          cabin with dual-tone interiors, soft-touch surfaces and a two-spoke
          squiricle steering wheel.
        </p>

        {/* THUMB CARDS */}
        <div className="thumb-wrap">
  <div
    className="thumb-track"
    style={{ transform: `translateX(-${active * 305}px)` }}
  >
    {comfortData.map((item, i) => (
      <div
        key={i}
        className={`thumb ${i === active ? "active" : ""}`}
      >
        <img src={item.img} />
      </div>
    ))}
  </div>

  <button className="nav left" onClick={prev}>
    <img src="https://static3.toyotabharat.com/images/showroom/a32/left-black-arrow.svg" />
  </button>

  <button className="nav right" onClick={next}>
    <img src="https://static3.toyotabharat.com/images/showroom/a32/right-black-arrow.svg" />
  </button>
</div>

      </div>

      {/* IMAGE PANEL */}
      <div className="visual">
        <img src={comfortData[active].img} />
      </div>

      {/* INTERNAL CSS */}
      <style jsx>{`
        .comfort {
          display: flex;
          min-height: 100vh;
          background: #fff;
          color: #000;
          overflow: hidden;
          position: relative;
        }

        /* LEFT PANEL */
        .content {
          width: 44%;
          background: #fff;
          padding: 90px 70px;
          clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
          z-index: 3;
          
        }

        .content h1 {
          color: #e60012;
          font-size: 52px;
          font-weight: 600;
          margin-bottom: 12px;
          font-style:italic;

        }

        .content h2 {
          font-size: 29px;
          font-weight: 400;
          margin-bottom: 18px;
          font-style:italic;
        }

        .content h2 span {
          color: #e60012;
          font-weight: 600;
        }

        .content p {
          max-width: 420px;
          font-size: 15px;
          line-height: 1.7;
          color: #333;
        }

        /* THUMBS */
        .thumb-wrap {
          position: relative;
          // display: flex;
          // gap: 5px;
          overflow: hidden;
  width: 610px;
  margin-top: 55px;
          // align-items: center;
          
        }
        .thumb-track {
  display: flex;
  gap: 5px;
  transition: transform 0.6s ease;
}
        .thumb {
          width: 300px;
          height: 195px;
          border-radius: 10px;
          flex-shrink: 0;
          overflow: hidden;
          opacity: 0.55;
          backdrop-filter: blur(6px);
          clip-path: polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%);
          
        }

        .thumb.active {
          opacity: 5;
          border: 5px solid #e60012;
          transform: translateY(0);
          clip-path: polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%);
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          clip-path: polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%);
        }

        /* ARROWS */
        .nav {
  position: absolute;
  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
}

.nav.left {
  left: -10px;
}

.nav.right {
  right: 50px;
}


        /* IMAGE */
        .visual {
          width: 56%;
          height: 90vh;          /* 👈 THIS controls image height */
  min-height: 520px;     /* optional but recommended */
          position: relative;
          clip-path: polygon(0% 0%, 79% 0%, 100% 100%, 11% 100%);
          overflow: hidden;
          background:green;
        }
       .visual img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .comfort {
            flex-direction: column;
          }

          .content {
            width: 100%;
            clip-path: none;
            padding: 40px 24px;
          }

          .visual {
            width: 100%;
            height: 320px;
          }

          .visual img {
            clip-path: none;
          }

          .thumb-wrap {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}






































