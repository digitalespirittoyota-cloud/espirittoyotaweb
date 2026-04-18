
// "use client";
// import React, { useState } from "react";

// /* ================= TYPES ================= */
// export interface FeatureItem {
//   title?: string;
//   subtitle?: string;
//   description?: string;
//   thumb: string;
//   bigImage: string;
// }

// interface Props {
//   headingTop: string;
//   headingBottom: string;
//   items: FeatureItem[];
//   layout?: "image-left" | "image-right"; // 👈 NEW (optional)
// }

// /* ================= COMPONENT ================= */
// const PerformanceFeature: React.FC<Props> = ({
//   headingTop,
//   headingBottom,
//   items,
//   layout = "image-left", // default same as before
// }) => {
//   const [active, setActive] = useState(0);
//   const visibleCards = 3;

//   const next = () => {
//     setActive((prev) => (prev + 1) % items.length);
//   };

//   const prev = () => {
//     setActive((prev) => (prev - 1 + items.length) % items.length);
//   };

//   const translateX = -(active * (100 / visibleCards));

//   return (
//     <section className="exterior-wrap">
//       {/* 👇 ONLY THIS CLASS ADDED */}
//       <div className={`exterior-grid ${layout === "image-right" ? "reverse" : ""}`}>

//         {/* LEFT BIG IMAGE */}
//         <div className="big-image">
//           {items[active] && (
//             <>
//               <img src={items[active].bigImage} alt={items[active].title} />

//               <div className="overlay">
//                 {items[active]?.subtitle && <h3>{items[active].subtitle}</h3>}

//                 {(items[active]?.title || items[active]?.description) && (
//                   <span>
//                     {items[active]?.title && <h4>{items[active].title}</h4>}
//                     {items[active]?.description && <p>{items[active].description}</p>}
//                   </span>
//                 )}
//               </div>
//             </>
//           )}
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="right-panel">
//           <div className="heading">
//             <span style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}>
//               {headingTop}
//             </span>
//             <strong style={{ fontSize: "25px", fontWeight: "lighter", marginLeft: "90px" }}>
//               {headingBottom}
//             </strong>
//           </div>

//           <div className="slider-wrapper">
//             <button className="nav prev" onClick={prev}>‹</button>

//             <div className="slider-window">
//               <div
//                 className="slider-track"
//                 style={{ transform: `translateX(${translateX}%)` }}
//               >
//                 {items.map((item, i) => (
//                   <div
//                     key={i}
//                     className={`card ${i === active ? "active" : ""}`}
//                     onClick={() => setActive(i)}
//                   >
//                     <span className="count">{i + 1}</span>

//                     <div className="card-text">
//                       <h5>{item.title}</h5>
//                       <p>{item.subtitle}</p>
//                     </div>

//                     <img src={item.thumb} alt={item.title} />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <button className="nav next" onClick={next} style={{ paddingTop: "30px" }}>
//               ›
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= CSS ================= */}
//       <style>{`
//         .exterior-wrap {
//           max-width: 1600px;
//           margin: auto;
//           padding: 50px 0;
//           font-family: Arial, Helvetica, sans-serif;
//           background:#fff;
//         }

//         .exterior-grid {
//           display: grid;
//           grid-template-columns: 50% 50%;
//         }

//         /* ✅ ONLY NEW CSS (layout swap) */
//         .exterior-grid.reverse {
//           direction: rtl;
//         }
//         .exterior-grid.reverse > * {
//           direction: ltr;
//         }

//         .big-image {
//           position: relative;
//           height: 520px;
//           width: 100%;
//           z-index: 1;
//         }

//         .big-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .overlay {
//           position: absolute;
//           bottom: 0;
//           left: 70px;
//           padding: 5px;
//           color: #fff;
//           // background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
//           width: 60%;
          
//         }

//         .overlay h3 {
//           font-size: 30px;
//           margin: 0;
          
//         }

//         .overlay span {
//           display:flex;
//           gap:10px;
//         }

//         .overlay h4 {
//           font-size: 18px;
//           margin-top: 9px;
//           width:300px;
//           border-top:1px solid white;
//           border-right:1px solid white;
//         }

//         .overlay p {
//           font-size: 14px;
//           max-width: 220px;
//           margin-top: 10px;
//         }

//         .right-panel {
//           background: #fff;
//           padding: 24px;
//           color: #000;
//           position: relative;
//           z-index: 2;
//         }

//         .slider-wrapper {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-left: -120px;
//           z-index: 3;
//         }

//         .nav {
//           background: none;
//           border: none;
//           color: gray;
//           font-size: 32px;
//           cursor: pointer;
//         }

//         .slider-window {
//           overflow: hidden;
//           width: 100%;
//         }

//         .slider-track {
//           display: flex;
//           transition: transform 0.4s ease;
//         }

//         .card {
//           min-width: 31.4433%;
//           height: 300px;
//           background: #f1f3f6;
//           color: #000;
//           margin-right: 12px;
//           cursor: pointer;
//           position: relative;
//           z-index: 4;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.15);
//         }

//         .card img {
//           width: 100%;
//           height: 170px;
//           object-fit: cover;
//         }

//         .count {
//           font-size: 42px;
//           opacity: 0.15;
//           font-weight: bold;
//           padding: 8px 12px;
//           display: block;
//         }

//         .card-text {
//           padding: 10px 12px;
//           min-height: 60px;
//         }

//         .card-text h5 {
//           font-size: 14px;
//           margin: 0;
//         }

//         .card-text p {
//           font-size: 12px;
//           margin-top: 4px;
//         }
//         .exterior-grid.reverse .slider-wrapper {
//   margin-left: 0;          /* old overlap cancel */
//   margin-right: -120px;    /* mirror overlap */
// }

//         @media (max-width: 991px) {
//           .exterior-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//           /* ================= REVERSE OVERLAP FIX ================= */

//       `}</style>
//     </section>
//   );
// };

// export default PerformanceFeature;


































"use client";
import React, { useState } from "react";

/* ================= TYPES ================= */
export interface FeatureItem {
  title?: string;
  subtitle?: string;
  description?: string;
  thumb: string;
  bigImage: string;
}

interface Props {
  headingTop: string;
  headingBottom: string;
  items: FeatureItem[];
  layout?: "image-left" | "image-right";
}

/* ================= COMPONENT ================= */
const PerformanceFeature: React.FC<Props> = ({
  headingTop,
  headingBottom,
  items,
  layout = "image-left",
}) => {
  const [active, setActive] = useState(0);
  const visibleCards = 3;

  const next = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const translateX = -(active * (100 / visibleCards));

  return (
    <section className="exterior-wrap">
      <div className={`exterior-grid ${layout === "image-right" ? "reverse" : ""}`}>

        {/* LEFT BIG IMAGE */}
        <div className="big-image">
          {items[active] && (
            <>
              <img src={items[active].bigImage} alt={items[active].title} />

              <div className="overlay">
                {items[active]?.subtitle && <h3>{items[active].subtitle}</h3>}

                {(items[active]?.title || items[active]?.description) && (
                  <span>
                    {items[active]?.title && <h4>{items[active].title}</h4>}
                    {items[active]?.description && <p>{items[active].description}</p>}
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="right-panel">
          <div className="heading">
            <span className="heading-top">
              {headingTop}
            </span>
            <strong className="heading-bottom">
              {headingBottom}
            </strong>
          </div>

          <div className="slider-wrapper">
            <button className="nav prev" onClick={prev} aria-label="Previous">‹</button>

            <div className="slider-window">
              <div
                className="slider-track"
                style={{ transform: `translateX(${translateX}%)` }}
              >
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`card ${i === active ? "active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="count">{i + 1}</span>

                    <div className="card-text">
                      <h5>{item.title}</h5>
                      <p>{item.subtitle}</p>
                    </div>

                    <img src={item.thumb} alt={item.title} />
                  </div>
                ))}
              </div>
            </div>

            <button className="nav next" onClick={next} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      </div>

      {/* ================= RESPONSIVE CSS ================= */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .exterior-wrap {
          max-width: 1600px;
          margin: auto;
          padding: 50px 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #fff;
          overflow-x: hidden;
        }

        .exterior-grid {
          display: grid;
          grid-template-columns: 50% 50%;
        }

        .exterior-grid.reverse {
          direction: rtl;
        }
        
        .exterior-grid.reverse > * {
          direction: ltr;
        }

        .big-image {
          position: relative;
          height: 520px;
          width: 100%;
          z-index: 1;
        }

        .big-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          bottom: 0;
          left: 70px;
          padding: 5px;
          color: #fff;
          width: 60%;
        }

        .overlay h3 {
          font-size: 30px;
          margin: 0;
        }

        .overlay span {
          display: flex;
          gap: 10px;
        }

        .overlay h4 {
          font-size: 18px;
          margin-top: 9px;
          width: 300px;
          border-top: 1px solid white;
          border-right: 1px solid white;
        }

        .overlay p {
          font-size: 14px;
          max-width: 220px;
          margin-top: 10px;
        }

        .right-panel {
          background: #fff;
          padding: 24px;
          color: #000;
          position: relative;
          z-index: 2;
        }

        .heading-top {
          font-size: 30px;
          font-weight: bold;
          color: black;
          display: block;
        }

        .heading-bottom {
          font-size: 25px;
          font-weight: lighter;
          margin-left: 90px;
          display: block;
        }

        .slider-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: -120px;
          z-index: 3;
        }

        .exterior-grid.reverse .slider-wrapper {
          margin-left: 0;
          margin-right: -120px;
        }

        .nav {
          background: none;
          border: none;
          color: gray;
          font-size: 32px;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0 5px;
        }

        .nav.next {
          padding-top: 30px;
        }

        .slider-window {
          overflow: hidden;
          width: 100%;
        }

        .slider-track {
          display: flex;
          transition: transform 0.4s ease;
        }

        .card {
          min-width: 31.4433%;
          height: 300px;
          background: #f1f3f6;
          color: #000;
          margin-right: 12px;
          cursor: pointer;
          position: relative;
          z-index: 4;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }

        .card img {
          width: 100%;
          height: 170px;
          object-fit: cover;
        }

        .count {
          font-size: 42px;
          opacity: 0.15;
          font-weight: bold;
          padding: 8px 12px;
          display: block;
        }

        .card-text {
          padding: 10px 12px;
          min-height: 60px;
        }

        .card-text h5 {
          font-size: 14px;
          margin: 0;
        }

        .card-text p {
          font-size: 12px;
          margin-top: 4px;
        }

        /* ================= RESPONSIVE BREAKPOINTS ================= */

        /* Large Tablets & Small Laptops (1200px - 1400px) */
        @media (max-width: 1400px) {
          .exterior-wrap {
            padding: 40px 20px;
          }

          .overlay {
            left: 40px;
            width: 70%;
          }

          .slider-wrapper {
            margin-left: -80px;
          }

          .exterior-grid.reverse .slider-wrapper {
            margin-left: 0;
            margin-right: -80px;
          }

          .heading-bottom {
            margin-left: 60px;
          }
        }

        /* Tablets (992px - 1199px) */
        @media (max-width: 1199px) {
          .exterior-grid {
            grid-template-columns: 45% 55%;
          }

          .big-image {
            height: 450px;
          }

          .overlay h3 {
            font-size: 26px;
          }

          .overlay h4 {
            font-size: 16px;
            width: 250px;
          }

          .overlay p {
            font-size: 13px;
            max-width: 200px;
          }

          .heading-top {
            font-size: 26px;
          }

          .heading-bottom {
            font-size: 22px;
            margin-left: 40px;
          }

          .slider-wrapper {
            margin-left: -60px;
          }

          .exterior-grid.reverse .slider-wrapper {
            margin-left: 0;
            margin-right: -60px;
          }

          .card {
            min-width: 32%;
            height: 280px;
          }

          .card img {
            height: 150px;
          }
        }

        /* Small Tablets & Large Phones (768px - 991px) */
        @media (max-width: 991px) {
          .exterior-wrap {
            padding: 30px 0;
            width: 100%;
          }

          .exterior-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .exterior-grid.reverse {
            direction: ltr;
          }

          .big-image {
            height: 400px;
            order: 1;
          }

          .right-panel {
            order: 2;
            padding: 20px;
          }

          .overlay {
            left: 30px;
            width: 80%;
          }

          .overlay h3 {
            font-size: 24px;
          }

          .overlay h4 {
            font-size: 15px;
            width: 200px;
          }

          /* CRITICAL: Remove negative margin on mobile */
          .slider-wrapper {
            margin-left: 0;
            margin-top: 20px;
            gap: 8px;
          }

          .exterior-grid.reverse .slider-wrapper {
            margin-right: 0;
          }

          .heading-bottom {
            margin-left: 20px;
          }

          .card {
            min-width: 48%;
            height: 260px;
          }
        }

        /* Mobile Landscape & Small Tablets (576px - 767px) */
        @media (max-width: 767px) {
          .exterior-wrap {
            padding: 20px 0;
            width: 100%;
          }

          .big-image {
            height: 350px;
          }

          .overlay {
            left: 20px;
            width: 85%;
            padding: 3px;
          }

          .overlay h3 {
            font-size: 20px;
          }

          .overlay span {
            flex-direction: column;
            gap: 5px;
          }

          .overlay h4 {
            font-size: 14px;
            width: auto;
            max-width: 200px;
            margin-top: 5px;
            border-right: none;
          }

          .overlay p {
            font-size: 12px;
            max-width: 180px;
            margin-top: 5px;
          }

          .right-panel {
            padding: 20px 15px;
          }

          .heading-top {
            font-size: 22px;
          }

          .heading-bottom {
            font-size: 18px;
            margin-left: 10px;
            margin-top: 5px;
          }

          .slider-wrapper {
            gap: 5px;
            margin-left: 0;
            margin-top: 15px;
          }

          .nav {
            font-size: 28px;
            padding: 0 3px;
          }

          .nav.next {
            padding-top: 20px;
          }

          .card {
            min-width: 70%;
            height: 240px;
            margin-right: 10px;
          }

          .card img {
            height: 130px;
          }

          .count {
            font-size: 36px;
            padding: 6px 10px;
          }

          .card-text {
            padding: 8px 10px;
            min-height: 50px;
          }

          .card-text h5 {
            font-size: 13px;
          }

          .card-text p {
            font-size: 11px;
          }
        }

        /* Mobile Portrait (320px - 575px) */
        @media (max-width: 575px) {
          .exterior-wrap {
            padding: 15px 0;
            width: 100%;
          }

          .big-image {
            height: 280px;
          }

          .overlay {
            left: 15px;
            right: 15px;
            width: auto;
          }

          .overlay h3 {
            font-size: 18px;
          }

          .overlay h4 {
            font-size: 13px;
            max-width: 150px;
          }

          .overlay p {
            font-size: 11px;
            max-width: 140px;
          }

          .right-panel {
            padding: 15px 12px;
          }

          .heading-top {
            font-size: 20px;
          }

          .heading-bottom {
            font-size: 16px;
            margin-left: 5px;
          }

          .slider-wrapper {
            margin-top: 12px;
            gap: 3px;
            margin-left: 0;
          }

          .nav {
            font-size: 26px;
            padding: 0 2px;
          }

          .nav.next {
            padding-top: 15px;
          }

          .card {
            min-width: 80%;
            height: 220px;
            margin-right: 8px;
          }

          .card img {
            height: 120px;
          }

          .count {
            font-size: 32px;
            padding: 5px 8px;
          }

          .card-text {
            padding: 6px 8px;
            min-height: 45px;
          }

          .card-text h5 {
            font-size: 12px;
          }

          .card-text p {
            font-size: 10px;
          }
        }

        /* Extra Small Mobile (< 400px) */
        @media (max-width: 400px) {
          .exterior-wrap {
            padding: 10px 0;
          }

          .big-image {
            height: 250px;
          }

          .overlay {
            left: 10px;
            right: 10px;
          }

          .overlay h3 {
            font-size: 16px;
          }

          .overlay h4 {
            font-size: 12px;
            max-width: 120px;
          }

          .overlay p {
            font-size: 10px;
            max-width: 120px;
          }

          .right-panel {
            padding: 12px 10px;
          }

          .heading-top {
            font-size: 18px;
          }

          .heading-bottom {
            font-size: 15px;
            margin-left: 3px;
          }

          .slider-wrapper {
            gap: 2px;
          }

          .nav {
            font-size: 24px;
          }

          .nav.next {
            padding-top: 10px;
          }

          .card {
            min-width: 85%;
            height: 200px;
            margin-right: 6px;
          }

          .card img {
            height: 110px;
          }

          .count {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default PerformanceFeature;