// "use client";
// import React, { useState } from "react";

// const comfortData = [
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort6_800x510.jpg",
//     text: "10-WAY ADJUSTABLE DRIVER SEAT",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort5_800x510.jpg",
//     text: "10-WAY ADJUSTABLE DRIVER SEAT",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort4_800x510.jpg",
//     text: "FRONT SEAT ARM REST",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort3_800x510.jpg",
//     text: "ELECTRONIC PARKING BRAKE",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort2_800x510.jpg",
//     text: "AIR VENTS",
//   },
//   {
//     img: "https://static3.toyotabharat.com/images/showroom/a32/comfort/comfort1_800x510.jpg",
//     text: "",
//   },
// ];

// const Comfort = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const prev = () => activeIndex > 0 && setActiveIndex(activeIndex - 1);
//   const next = () =>
//     activeIndex < comfortData.length - 1 &&
//     setActiveIndex(activeIndex + 1);

//   return (
//     <section className="comfort-wrapper">
//       {/* LEFT */}
//       <div className="comfort-left">
//         <h2>COMFORT</h2>
//         <h4>
//           CALM THAT <br /> MOVES WITH YOU
//         </h4>
//         <p>
//           The All-Electric Urban Cruiser EV offers a contemporary premium cabin
//           with dual-tone interiors and soft-touch surfaces.
//         </p>

//         <div className="thumb-slider">
//           <button onClick={prev} disabled={activeIndex === 0}>
//             <img
//               src={
//                 activeIndex === 0
//                   ? "https://static.toyotabharat.com/images/showroom/a32/arrow-prev.png"
//                   : "https://static.toyotabharat.com/images/showroom/a32/left-arrow-37x40.svg"
//               }
//             />
//           </button>

//           <div className="thumb-track">
//             <div
//               className="thumb-inner"
//               style={{ transform: `translateX(-${activeIndex * 140}px)` }}
//             >
//               {comfortData.map((item, i) => (
//                 <div
//                   key={i}
//                   className={`thumb ${i === activeIndex ? "active" : ""}`}
//                   onClick={() => setActiveIndex(i)}
//                 >
//                   <img src={item.img} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={next}
//             disabled={activeIndex === comfortData.length - 1}
//           >
//             <img
//               src={
//                 activeIndex === comfortData.length - 1
//                   ? "https://static.toyotabharat.com/images/showroom/a32/arrow-next.png"
//                   : "https://static.toyotabharat.com/images/showroom/a32/right-arrow-37x40.svg"
//               }
//             />
//           </button>
//         </div>
//       </div>

//       {/* DIAGONAL RED DIVIDER */}
//       <div className="divider" />

//       {/* RIGHT */}
//       <div className="comfort-right">
//         <div key={activeIndex} className="image-wrap fade">
//           <img src={comfortData[activeIndex].img} />
//         </div>
//         {comfortData[activeIndex].text && (
//           <p className="label">{comfortData[activeIndex].text}</p>
//         )}
//       </div>

//       <style jsx>{`
//         .comfort-wrapper {
//           display: flex;
//           padding: 60px;
//           position: relative;
//           overflow: hidden;
//           background:#fff;
//           color:#000;
//         }

//         .comfort-left {
//           width: 35%;
//           z-index: 2;
//         }

//         h2 {
//           color: #e10600;
//           font-size: 28px;
//         }

//         h4 {
//           font-size: 22px;
//           margin: 10px 0;
//         }

//         p {
//           font-size: 14px;
//           line-height: 1.6;
//         }

//         /* DIAGONAL RED LINE */
//         .divider {
//           position: absolute;
//           left: 40%;
//           top: 0;
//           width: 2px;
//           height: 120%;
//           background: linear-gradient(#e10600, transparent);
//           transform: skewX(-12deg);
//         }

//         /* THUMB SLIDER */
//         .thumb-slider {
//           display: flex;
//           align-items: center;
//           margin-top: 40px;
//         }

//         .thumb-track {
//           width: 280px; /* ONLY 2 VISIBLE */
//           overflow: hidden;
//           margin: 0 12px;
//         }

//         .thumb-inner {
//           display: flex;
//           transition: transform 0.4s ease;
//         }

//         .thumb {
//           width: 130px;
//           height: 90px;
//           margin-right: 10px;
//           cursor: pointer;
//           transform: skewX(-12deg);
//           overflow: hidden;
//           border: 2px solid transparent;
//         }

//         .thumb img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transform: skewX(12deg);
//         }

//         .thumb.active {
//           border-color: #e10600;
//         }

//         button {
//           background: none;
//           border: none;
//           cursor: pointer;
//         }

//         button:disabled {
//           opacity: 0.4;
//           cursor: not-allowed;
//         }

//         /* RIGHT IMAGE */
//         .comfort-right {
//           width: 65%;
//           position: relative;
//         }

//         .image-wrap {
//           width: 100%;
//           max-height: 520px;
//           transform: skewX(-12deg);
//           overflow: hidden;
//         }

//         .image-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: contain;
//           transform: skewX(12deg);
//         }

//         /* FADE ANIMATION */
//         .fade {
//           animation: fadeIn 0.5s ease;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px) skewX(-12deg);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) skewX(-12deg);
//           }
//         }

//         .label {
//           position: absolute;
//           bottom: 20px;
//           left: 30px;
//           background: rgba(0, 0, 0, 0.6);
//           color: #fff;
//           padding: 8px 14px;
//           font-size: 13px;
//         }

//         /* RESPONSIVE */
//         @media (max-width: 1024px) {
//           .comfort-wrapper {
//             flex-direction: column;
//           }

//           .divider {
//             display: none;
//           }

//           .comfort-left,
//           .comfort-right {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Comfort;





















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
          CALM THAT <span>MOVES</span> WITH YOU
        </h2>
        <p>
          The All-Electric Urban Cruiser Ebella features a contemporary, premium
          cabin with dual-tone interiors, soft-touch surfaces and a two-spoke
          squiricle steering wheel.
        </p>

        {/* THUMB CARDS */}
        <div className="thumb-wrap">
          {[active, (active + 1) % comfortData.length].map((i, idx) => (
            <div
              key={idx}
              className={`thumb ${idx === 0 ? "active" : ""}`}
            >
              <img src={comfortData[i].img} />
            </div>
          ))}

          <button className="nav left" onClick={prev}>
            ‹
          </button>
          <button className="nav right" onClick={next}>
            ›
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
          background: #000;
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
        }

        .content h2 {
          font-size: 28px;
          font-weight: 400;
          margin-bottom: 18px;
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
          display: flex;
          gap: 22px;
          margin-top: 55px;
          align-items: center;
        }

        .thumb {
          width: 170px;
          height: 105px;
          border-radius: 10px;
          overflow: hidden;
          opacity: 0.55;
          backdrop-filter: blur(6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.35);
          transform: translateY(8px);
          
        }

        .thumb.active {
          opacity: 1;
          border: 3px solid #e60012;
          transform: translateY(0);
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ARROWS */
        .nav {
          position: absolute;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.65);
          color: #fff;
          font-size: 26px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav.left {
          left: -18px;
        }

        .nav.right {
          right: -18px;
        }

        /* IMAGE */
        .visual {
          width: 56%;
          position: relative;
        }

        .visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          clip-path: polygon(5% 0, 100% 0, 95% 100%, 0% 100%);
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
