
// "use client";
// import React, { useState } from "react";

// const exterior = [
//   { title: "Body Cladding", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/body-cladding-small.png" },
//   { title: "Front Bumper Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/front-bumper-garnish-small.png" },
//   { title: "Hood Emblem", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/hood-emblem-small.png" },
//   { title: "Door Visor", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/door-visor-small.png" },
//   { title: "Head Lamp Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/headlamp-garnish-small.png" },
//   { title: "Rear Bumper Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/rear-bumper-garnish-small.png" },
//   { title: "Rear Door Lid Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/reardoor-lid-garnish-small.png" },
//   { title: "Roof Ornament", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/roof-ornament-small.png" },
// ];

// const interior = [
//   { title: "Interior Styling Kit (THS)", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/dark-brown-isk-small.png" },
//   { title: "Sill Guard", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/sill-guard-small.png" },
//   { title: "Wireless Charger", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/wireless-charger-small.png" },
//   { title: "TPMS", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/tpms-small.png" },
// ];

// export default function Accessories() {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const nextSlide = () => {
//     setCurrentSlide(1);
//   };
  
//   const prevSlide = () => {
//     setCurrentSlide(0);
//   };

//   // Get items for current slide
//   const getCurrentSlideItems = () => {
//     if (currentSlide === 0) {
//       return exterior.slice(0, 6);
//     } else {
//       return exterior.slice(6, 8);
//     }
//   };

//   return (
//     <section className="acc">
//       <style>{`
//         .acc {
//           height: 100vh;
//           position: relative;
//           background: #fff;
//           padding: 60px 0 40px;
//           overflow: hidden;
//           font-family: Arial, Helvetica, sans-serif;
//         }

//         .acc-wrap {
//           max-width: 1600px;
//           margin: auto;
//           display: flex;
//           position: relative;
//         }

//         /* LEFT BLUE TRAPEZIUM */
//         .left-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 57%;
//           height: 490px;
//           background: #e6eff8;
//           clip-path: polygon(0 0, 92% 0, 85% 100%, 0 100%);
//           z-index: 0;
//         }

//         /* SOFT FADE EDGE */
//         .left-bg::after {
//           content: "";
//           position: absolute;
//           right: -80px;
//           top: 0;
//           width: 160px;
//           height: 100%;
//         }

//         .col {
//           width: 50%;
//           padding: 0 50px;
//           position: relative;
//           z-index: 1;
//         }

//         h2 {
//           font-size: 22px;
//           font-weight: 700;
//           letter-spacing: 1px;
//           margin-bottom: 26px;
//           color: #000;
//         }

//         .right h2 {
//           text-align: right;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 26px 25px;
//           justify-content: center;
//           align-items: center;
//         }
        
//         .card {
//           height: 190px;
//           width: 200px;
//         }
        
//         .card img {
//           width: 100%;
//           display: block;
//         }
         
//         .card p {
//           margin-top: 6px;
//           font-size: 13px;
//           color: #000;
//           background: transparent;
//         }

//         /* ARROWS */
//         .arrow {
//           position: absolute;
//           top: 48%;
//           width: 34px;
//           height: 34px;
//           border-radius: 50%;
//           background: #fff;
//           box-shadow: 0 0 0 1px #ddd;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 18px;
//           cursor: pointer;
//           z-index: 2;
//         }

//         /* LEFT SECTION ARROWS */
//         /* Left arrow - left side of left section */
//         .left .left-arrow {
//           left: -17px;
//         }

//         /* Right arrow - right side of left section */
//         .left .right-arrow {
//           right: -17px;
//         }

//         /* Right section arrow - unchanged */
//         .right .arrow {
//           left: -17px;
//         }

//         /* BUTTON BAR */
//         .btns {
//           display: flex;
//           justify-content: center;
//           gap: 6px;
//           margin-top: 45px;
//         }

//         .btns a {
//           background: #0099cc;
//           color: #fff;
//           padding: 14px 28px;
//           font-size: 14px;
//           text-decoration: none;
//         }

//         @media (max-width: 1024px) {
//           .grid { grid-template-columns: repeat(2, 1fr); }
//         }

//         @media (max-width: 768px) {
//           .acc-wrap { flex-direction: column; }
//           .left-bg { display: none; }
//           .col { width: 100%; padding: 20px; }
//           .right h2 { text-align: left; }
//         }
//       `}</style>

//       <div className="acc-wrap">
//         <div className="left-bg" />

//         {/* EXTERIOR WITH SLIDER - NOW HAS BOTH ARROWS */}
//         <div className="col left">
//           <h2>EXTERIOR ACCESSORIES</h2>
//           {/* LEFT ARROW ADDED HERE */}
//           <div className="arrow left-arrow" onClick={prevSlide}>‹</div>
//           {/* RIGHT ARROW */}
//           <div className="arrow right-arrow" onClick={nextSlide}>›</div>
          
//           <div className="grid">
//             {getCurrentSlideItems().map((x, i) => (
//               <div className="card" key={i}>
//                 <img src={x.img} alt={x.title} />
//                 <p>{x.title}</p>
//               </div>
//             ))}
//             {/* Add empty cards to maintain grid layout when only 2 items */}
//             {currentSlide === 1 && (
//               <>
//                 <div className="card" style={{ visibility: 'hidden' }}></div>
//                 <div className="card" style={{ visibility: 'hidden' }}></div>
//                 <div className="card" style={{ visibility: 'hidden' }}></div>
//                 <div className="card" style={{ visibility: 'hidden' }}></div>
//               </>
//             )}
//           </div>
//         </div>

//         {/* INTERIOR - UNCHANGED */}
//         <div className="col right">
//           <h2>INTERIOR ACCESSORIES</h2>
//           <div className="arrow">›</div>
          
//           <div className="grid">
//             {interior.map((x, i) => (
//               <div className="card" key={i}>
//                 <img src={x.img} alt={x.title} />
//                 <p>{x.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="btns">
//         <a href="#">DOWNLOAD BROCHURE</a>
//         <a href="#">Download Accessory Brochure</a>
//         <a href="#">DOWNLOAD BROCHURE</a>
//       </div>
//     </section>
//   );
// }



























"use client";
import React, { useState } from "react";

const exteriorItems = [
  { title: "Body Cladding", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/body-cladding-small.png" },
  { title: "Front Bumper Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/front-bumper-garnish-small.png" },
  { title: "Hood Emblem", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/hood-emblem-small.png" },
  { title: "Door Visor", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/door-visor-small.png" },
  { title: "Head Lamp Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/headlamp-garnish-small.png" },
  { title: "Rear Bumper Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/rear-bumper-garnish-small.png" },
  { title: "Rear Door Lid Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/reardoor-lid-garnish-small.png" },
  { title: "Roof Ornament", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/roof-ornament-small.png" },
];

const interiorItems = [
  { title: "Interior Styling Kit (THS)", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/dark-brown-isk-small.png" },
  { title: "Sill Guard", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/sill-guard-small.png" },
  { title: "Wireless Charger", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/wireless-charger-small.png" },
  { title: "TPMS", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/tpms-small.png" },
];

export default function CarAccessories() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => setSlideIndex(1);
  const prevSlide = () => setSlideIndex(0);

  const currentExteriorItems = slideIndex === 0 ? exteriorItems.slice(0, 6) : exteriorItems.slice(6, 8);

  return (
    <section className="acc-section">
      <style>{`
        .acc-section {
          height: 100vh;
          position: relative;
          background: #fff;
          padding: 60px 0 40px;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .acc-container {
          max-width: 1600px;
          margin: auto;
          display: flex;
          position: relative;
        }

        .acc-bg-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 57%;
          height: 490px;
          background: #e6eff8;
          clip-path: polygon(0 0, 92% 0, 85% 100%, 0 100%);
          z-index: 0;
        }

        .acc-col {
          width: 50%;
          padding: 0 50px;
          position: relative;
          z-index: 1;
        }

        .acc-col h2 {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 26px;
          color: #000;
        }

        .acc-col.right h2 { text-align: right; }

        .acc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px 25px;
          justify-content: center;
          align-items: center;
        }

        .acc-card {
          height: 190px;
          width: 200px;
        }

        .acc-card img { width: 100%; display: block; }
        .acc-card p { margin-top: 6px; font-size: 13px; color: #000; background: transparent; }

        .acc-arrow {
          position: absolute;
          top: 48%;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 1px #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          z-index: 2;
        }

        .acc-left-arrow { left: -17px; }
        .acc-right-arrow { right: -17px; }

        .acc-btns {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 45px;
        }

        .acc-btns a {
          background: #0099cc;
          color: #fff;
          padding: 14px 28px;
          font-size: 14px;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .acc-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .acc-container { flex-direction: column; }
          .acc-bg-left { display: none; }
          .acc-col { width: 100%; padding: 20px; }
          .acc-col.right h2 { text-align: left; }
        }
      `}</style>

      <div className="acc-container">
        <div className="acc-bg-left" />

        <div className="acc-col left">
          <h2>EXTERIOR ACCESSORIES</h2>
          <div className="acc-arrow acc-left-arrow" onClick={prevSlide}>‹</div>
          <div className="acc-arrow acc-right-arrow" onClick={nextSlide}>›</div>

          <div className="acc-grid">
            {currentExteriorItems.map((item, idx) => (
              <div className="acc-card" key={idx}>
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}

            {slideIndex === 1 && Array(4).fill(0).map((_, idx) => (
              <div className="acc-card" key={`empty-${idx}`} style={{ visibility: 'hidden' }}></div>
            ))}
          </div>
        </div>

        <div className="acc-col right">
          <h2>INTERIOR ACCESSORIES</h2>
          <div className="acc-arrow">›</div>

          <div className="acc-grid">
            {interiorItems.map((item, idx) => (
              <div className="acc-card" key={idx}>
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="acc-btns">
        <a href="#">DOWNLOAD BROCHURE</a>
        <a href="#">Download Accessory Brochure</a>
        <a href="#">DOWNLOAD BROCHURE</a>
      </div>
    </section>
  );
}
