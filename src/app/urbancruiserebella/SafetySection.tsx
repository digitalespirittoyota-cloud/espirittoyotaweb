
"use client";
import React, { useState } from "react";

const slides = [
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/safety/Safety1-710x460.jpg",
    text: "",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/safety/Safety2-710x460.jpg",
    text: "7 SRS AIRBAGS* (STANDARD ACROSS ALL VARIANTS)",
  },
  {
    img: "https://static3.toyotabharat.com/images/showroom/a32/safety/Safety3-710x460.jpg",
    text: "360° CAMERA",
  },
];

const SafetyExact = () => {
  const [index, setIndex] = useState(1);

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  return (
    <section className="safety-root">
      {/* HEADER */}
      <div className="header">
         <div className="header-left">
           <h1>SAFETY</h1>
           <div className="zline">
          <span />
        </div>
           <h2>
             <span>TRUST</span> THAT SUPPORTS <br /> EVERY JOURNEY
           </h2>
         </div>

        <div className="header-right">
           <p>
             Every drive deserves peace of mind. The Toyota Urban Cruiser EBezza
             brings together intelligent safety systems and connected technology
             to keep you aware, protected, and in control. The advanced driver
             assist system is engineered to think ahead. Safety isn’t an add-on.
             It’s a mindset.
           </p>
         </div>
       </div>

      {/* SLIDER */}
      <div className="slider">
        <button className="nav left" onClick={prev}>
          <img src="https://static.toyotabharat.com/images/showroom/a32/left-arrow-37x40.svg" />
        </button>

        <div className="viewport">
          <div
            className="track"
            style={{
              transform: `translateX(calc(50% - ${(index + 0.5) * 34}%))`,
            }}
          >
            {slides.map((item, i) => (
  <div key={i} className="card">
    <div className="card-inner">
      <img
        src={item.img}
        className={`card-img ${i === index ? "zoom" : ""}`}
      />

      {i === index && item.text && (
        <div className="overlay">{item.text}</div>
      )}
    </div>
  </div>
))}

          </div>
        </div>

        <button className="nav right" onClick={next}>
          <img src="https://static.toyotabharat.com/images/showroom/a32/right-arrow-37x40.svg" />
        </button>
      </div>

      {/* CSS */}
      <style jsx>{`
        .safety-root {
          padding: 70px 2%;
          font-family: Arial, Helvetica, sans-serif;
          background:#fff;
          color:#000;
        }

        /* HEADER */
         .header {
           display: flex;
           justify-content: space-between;
           gap: 60px;
           margin-bottom: 60px;
         }

         .header-left h1 {
           color: #e30613;
           font-size: 38px;
           font-weight: 900;
           margin-bottom: 12px;
         }

         .header-left h2 {
           font-size: 25px;
           font-weight: 800;
           line-height: 1.25;
           color:#000;
          
         }

         .header-left span {
           color: #e30613;
           font-style: italic;
         }

         .header-right {
         margin-top:60px;
          max-width: 840px;
         font-size: 10px;
         line-height: 1.7;
          color: #333;
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
          width: 193%;
          height: 1px;
          background: #e10600;
        }

        // .zline::after {
        //   content: "";
        //   position: absolute;
        //   left: 202.10%;
        //   top: 50px;
        //   width: 300%;
        //   height: 1px;
        //   background: #e10600;
        // }

        .zline span {
          position: absolute;
          left: 197.1%;
          top: -6px;
          width: 1px;
          height: 59px;
          background: #e10600;
          /* THIS MAKES IT "\" SHAPED */
  transform: rotate(-30deg);
  transform-origin: center;
        }
        .desc {
          max-width: 520px;
          font-size: 14px;
        }

        .slider {
          position: relative;
          margin-top: 60px;
          display: flex;
          align-items: center;
        }

        .viewport {
          overflow: hidden;
          width: 100%;
        }

        .track {
          display: flex;
          gap: 30px;
          transition: transform 0.6s ease;
        }

        .card {
  flex: 0 0 44%;
  aspect-ratio: 710 / 460;
  border-radius: 15px;
  position: relative;
}

/* RED GLOW BORDER */
.card-inner {
  height: 100%;
  padding: 2px;
  border-radius: 15px;
  background: linear-gradient(
    135deg,
    rgba(227, 6, 19, 0.9),
    rgba(227, 6, 19, 0.3)
  );
  overflow: hidden;
  clip-path: polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%);
}

/* IMAGE */
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 13px;
  clip-path: inherit;
  transition: transform 0.6s ease;
  will-change: transform;
}

/* ✅ REAL ZOOM */
.card-img.zoom {
  transform: scale(1.12);
}


        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 18px;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(
            to top,
            rgba(227, 6, 19, 0.95),
            rgba(227, 6, 19, 0)
          );
          clip-path: inherit;
        }

        .nav {
          background: none;
          border: none;
          cursor: pointer;
          z-index: 10;
        }

        .nav img {
          width: 36px;
        }

        @media (max-width: 1024px) {
          .track {
            transform: none !important;
            flex-direction: column;
          }

          .nav {
            display: none;
          }

          .center {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default SafetyExact;
