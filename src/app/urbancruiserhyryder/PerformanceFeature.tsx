
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
// }

// /* ================= COMPONENT ================= */
// const ExteriorFeatures: React.FC<Props> = ({
//   headingTop,
//   headingBottom,
//   items,
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
//       <div className="exterior-grid">

//         {/* LEFT BIG IMAGE */}
//         <div className="big-image">
//   {items[active] && (
//     <>
//       <img
//         src={items[active].bigImage}
//         alt={items[active].title}
//       />

//      <div className="overlay">
//   {items[active]?.subtitle && <h3>{items[active].subtitle}</h3>}

//   {(items[active]?.title || items[active]?.description) && (
//     <span>
//       {items[active]?.title && <h4>{items[active].title}</h4>}
//       {items[active]?.description && <p>{items[active].description}</p>}
//     </span>
//   )}
// </div>

//     </>
//   )}
// </div>


//         {/* RIGHT SIDE */}
//         <div className="right-panel">

//           {/* HEADING */}
//           <div className="heading">
//             <span style={{fontSize:"30px",fontWeight:"bold",color:"black"}}>{headingTop}</span>
//             <strong style={{fontSize:"25px",fontWeight:"lighter",marginLeft:"90px"}}>{headingBottom}</strong>
//           </div>

//           {/* SLIDER */}
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

//             <button className="nav next" onClick={next} style={{paddingTop:"30px"}}>›</button>
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

//         /* LEFT */
//         .big-image {
//           position: relative;
//   height: 520px;
//   width: 100%;
//   z-index: 1;
//         }

//         .big-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           padding: 40px;
//           color: #fff;
//           background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
//           width: 100%;
//         }

//         .overlay h3 {
//           font-size: 32px;
//           margin: 0;
//         }
//         .overlay span{
//           display:flex;
//           gap:10px;
//         }
//         .overlay  h4 {
//           font-size: 18px;
//           margin-top: 6px;
//           width:380px;
//           border-top:1px solid white;
//           border-right:1px solid white;
//         }

//         .overlay p {
//           font-size: 14px;
//           max-width: 220px;
//           margin-top: 10px;
//         }

//         /* RIGHT */
//         .right-panel {
//   background: #fff;
//   padding: 24px;
//   color: #000;
//   position: relative;
//   z-index: 2;
// }


//         .heading {
//           // text-align: right;
//           margin-bottom: 20px;
//         }

//         .heading span {
//           display: block;
//           font-size: 14px;
//           opacity: 0.7;
//         }

        

//         /* SLIDER */
//         .slider-wrapper {
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   /* 👇 THIS IS THE KEY */
//   margin-left: -120px;   /* overlap amount */
//   z-index: 3;
// }


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
//   min-width: 31.4433%;
//   height: 300px;
//   background: #f1f3f6;
//   color: #000;
//   margin-right: 12px;
//   cursor: pointer;

//   position: relative;
//   z-index: 4;

//   box-shadow: 0 10px 30px rgba(0,0,0,0.15);
// }


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
//            min-height: 60px;
//         }

//         .card-text h5 {
//           font-size: 14px;
//           margin: 0;
//         }

//         .card-text p {
//           font-size: 12px;
//           margin-top: 4px;
//         }

        

//         @media (max-width: 991px) {
//           .exterior-grid {
//             grid-template-columns: 1fr;
//           }

//           .right-panel {
//             background: #000;
//           }

//           .card {
//             min-width: 260px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ExteriorFeatures;





























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
  layout?: "image-left" | "image-right"; // 👈 NEW (optional)
}

/* ================= COMPONENT ================= */
const PerformanceFeature: React.FC<Props> = ({
  headingTop,
  headingBottom,
  items,
  layout = "image-left", // default same as before
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
      {/* 👇 ONLY THIS CLASS ADDED */}
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
            <span style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}>
              {headingTop}
            </span>
            <strong style={{ fontSize: "25px", fontWeight: "lighter", marginLeft: "90px" }}>
              {headingBottom}
            </strong>
          </div>

          <div className="slider-wrapper">
            <button className="nav prev" onClick={prev}>‹</button>

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

            <button className="nav next" onClick={next} style={{ paddingTop: "30px" }}>
              ›
            </button>
          </div>
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .exterior-wrap {
          max-width: 1600px;
          margin: auto;
          padding: 50px 0;
          font-family: Arial, Helvetica, sans-serif;
          background:#fff;
        }

        .exterior-grid {
          display: grid;
          grid-template-columns: 50% 50%;
        }

        /* ✅ ONLY NEW CSS (layout swap) */
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
          // background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          width: 60%;
          
        }

        .overlay h3 {
          font-size: 30px;
          margin: 0;
          
        }

        .overlay span {
          display:flex;
          gap:10px;
        }

        .overlay h4 {
          font-size: 18px;
          margin-top: 9px;
          width:300px;
          border-top:1px solid white;
          border-right:1px solid white;
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

        .slider-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: -120px;
          z-index: 3;
        }

        .nav {
          background: none;
          border: none;
          color: gray;
          font-size: 32px;
          cursor: pointer;
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
        .exterior-grid.reverse .slider-wrapper {
  margin-left: 0;          /* old overlap cancel */
  margin-right: -120px;    /* mirror overlap */
}

        @media (max-width: 991px) {
          .exterior-grid {
            grid-template-columns: 1fr;
          }
        }
          /* ================= REVERSE OVERLAP FIX ================= */

      `}</style>
    </section>
  );
};

export default PerformanceFeature;
