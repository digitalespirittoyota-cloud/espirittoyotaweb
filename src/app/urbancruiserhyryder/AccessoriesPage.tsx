
// "use client";
// import React, { useState } from "react";

// const exteriorItems = [
//   { title: "Body Cladding", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/body-cladding-small.png" },
//   { title: "Front Bumper Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/front-bumper-garnish-small.png" },
//   { title: "Hood Emblem", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/hood-emblem-small.png" },
//   { title: "Door Visor", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/door-visor-small.png" },
//   { title: "Head Lamp Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/headlamp-garnish-small.png" },
//   { title: "Rear Bumper Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/rear-bumper-garnish-small.png" },
//   { title: "Rear Door Lid Garnish", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/reardoor-lid-garnish-small.png" },
//   { title: "Roof Ornament", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/roof-ornament-small.png" },
// ];

// const interiorItems = [
//   { title: "Interior Styling Kit (THS)", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/dark-brown-isk-small.png" },
//   { title: "Sill Guard", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/sill-guard-small.png" },
//   { title: "Wireless Charger", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/wireless-charger-small.png" },
//   { title: "TPMS", img: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/acessories/small/tpms-small.png" },
// ];

// export default function CarAccessories() {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const nextSlide = () => setSlideIndex(1);
//   const prevSlide = () => setSlideIndex(0);

//   const currentExteriorItems = slideIndex === 0 ? exteriorItems.slice(0, 6) : exteriorItems.slice(6, 8);

//   return (
//     <section className="acc-section">
//       <style>{`
//         .acc-section {
//           height: 100vh;
//           position: relative;
//           background: #fff;
//           padding: 60px 0 40px;
//           overflow: hidden;
//           font-family: Arial, Helvetica, sans-serif;
//         }

//         .acc-container {
//           max-width: 1600px;
//           margin: auto;
//           display: flex;
//           position: relative;
//         }

//         .acc-bg-left {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 57%;
//           height: 490px;
//           background: #e6eff8;
//           clip-path: polygon(0 0, 92% 0, 85% 100%, 0 100%);
//           z-index: 0;
//         }

//         .acc-col {
//           width: 50%;
//           padding: 0 50px;
//           position: relative;
//           z-index: 1;
//         }

//         .acc-col h2 {
//           font-size: 22px;
//           font-weight: 700;
//           letter-spacing: 1px;
//           margin-bottom: 26px;
//           color: #000;
//         }

//         .acc-col.right h2 { text-align: right; }

//         .acc-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 26px 25px;
//           justify-content: center;
//           align-items: center;
//         }

//         .acc-card {
//           height: 190px;
//           width: 200px;
//         }

//         .acc-card img { width: 100%; display: block; }
//         .acc-card p { margin-top: 6px; font-size: 13px; color: #000; background: transparent; }

//         .acc-arrow {
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

//         .acc-left-arrow { left: -17px; }
//         .acc-right-arrow { right: -17px; }

//         .acc-btns {
//           display: flex;
//           justify-content: center;
//           gap: 6px;
//           margin-top: 45px;
//         }

//         .acc-btns a {
//           background: #0099cc;
//           color: #fff;
//           padding: 14px 28px;
//           font-size: 14px;
//           text-decoration: none;
//         }

//         @media (max-width: 1024px) {
//           .acc-grid { grid-template-columns: repeat(2, 1fr); }
//         }

//         @media (max-width: 768px) {
//           .acc-container { flex-direction: column; }
//           .acc-bg-left { display: none; }
//           .acc-col { width: 100%; padding: 20px; }
//           .acc-col.right h2 { text-align: left; }
//         }
//       `}</style>

//       <div className="acc-container">
//         <div className="acc-bg-left" />

//         <div className="acc-col left">
//           <h2>EXTERIOR ACCESSORIES</h2>
//           <div className="acc-arrow acc-left-arrow" onClick={prevSlide}>‹</div>
//           <div className="acc-arrow acc-right-arrow" onClick={nextSlide}>›</div>

//           <div className="acc-grid">
//             {currentExteriorItems.map((item, idx) => (
//               <div className="acc-card" key={idx}>
//                 <img src={item.img} alt={item.title} />
//                 <p>{item.title}</p>
//               </div>
//             ))}

//             {slideIndex === 1 && Array(4).fill(0).map((_, idx) => (
//               <div className="acc-card" key={`empty-${idx}`} style={{ visibility: 'hidden' }}></div>
//             ))}
//           </div>
//         </div>

//         <div className="acc-col right">
//           <h2>INTERIOR ACCESSORIES</h2>
//           <div className="acc-arrow">›</div>

//           <div className="acc-grid">
//             {interiorItems.map((item, idx) => (
//               <div className="acc-card" key={idx}>
//                 <img src={item.img} alt={item.title} />
//                 <p>{item.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="acc-btns">
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
        * {
          box-sizing: border-box;
        }

        .acc-section {
          min-height: 100vh;
          position: relative;
          background: #fff;
          padding: 60px 0 40px;
          overflow-x: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .acc-container {
          max-width: 1600px;
          margin: auto;
          display: flex;
          position: relative;
          padding: 0 20px;
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

        .acc-col.right h2 { 
          text-align: right; 
        }

        .acc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px 25px;
          justify-content: center;
          align-items: center;
        }

        .acc-card {
          height: 190px;
          width: 100%;
          max-width: 200px;
          margin: 0 auto;
        }

        .acc-card img { 
          width: 100%; 
          height: auto;
          display: block; 
        }
        
        .acc-card p { 
          margin-top: 6px; 
          font-size: 13px; 
          color: #000; 
          background: transparent;
          text-align: center;
        }

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
          transition: all 0.3s ease;
        }

        .acc-arrow:hover {
          box-shadow: 0 0 0 2px #0099cc;
        }

        .acc-left-arrow { left: -17px; }
        .acc-right-arrow { right: -17px; }

        .acc-btns {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 45px;
          flex-wrap: wrap;
          padding: 0 20px;
        }

        .acc-btns a {
          background: #0099cc;
          color: #fff;
          padding: 14px 28px;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.3s ease;
          white-space: nowrap;
        }

        .acc-btns a:hover {
          background: #007aa3;
        }

        /* ================= RESPONSIVE BREAKPOINTS ================= */

        /* Large Tablets (1200px - 1400px) */
        @media (max-width: 1400px) {
          .acc-col {
            padding: 0 30px;
          }

          .acc-grid {
            gap: 20px 18px;
          }

          .acc-card {
            height: 170px;
          }
        }

        /* Tablets (992px - 1199px) */
        @media (max-width: 1199px) {
          .acc-section {
            padding: 50px 0 35px;
          }

          .acc-col {
            padding: 0 25px;
          }

          .acc-col h2 {
            font-size: 20px;
            margin-bottom: 22px;
          }

          .acc-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px 15px;
          }

          .acc-card {
            height: 160px;
            max-width: 180px;
          }

          .acc-card p {
            font-size: 12px;
          }

          .acc-bg-left {
            height: 450px;
          }
        }

        /* Small Tablets & Large Phones (768px - 991px) */
        @media (max-width: 991px) {
          .acc-section {
            min-height: auto;
            padding: 40px 0 30px;
          }

          .acc-container {
            flex-direction: column;
            padding: 0 15px;
          }

          .acc-bg-left {
            display: none;
          }

          .acc-col {
            width: 100%;
            padding: 0 20px;
            margin-bottom: 40px;
          }

          .acc-col.right h2 {
            text-align: left;
          }

          .acc-col h2 {
            font-size: 19px;
            margin-bottom: 20px;
          }

          .acc-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px 15px;
          }

          .acc-card {
            height: 150px;
            max-width: 170px;
          }

          .acc-arrow {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }

          .acc-left-arrow { left: -16px; }
          .acc-right-arrow { right: -16px; }

          .acc-btns {
            margin-top: 35px;
            gap: 8px;
          }

          .acc-btns a {
            padding: 12px 24px;
            font-size: 13px;
          }
        }

        /* Mobile Landscape (576px - 767px) */
        @media (max-width: 767px) {
          .acc-section {
            padding: 30px 0 25px;
          }

          .acc-container {
            padding: 0 12px;
          }

          .acc-col {
            padding: 0 15px;
            margin-bottom: 35px;
          }

          .acc-col h2 {
            font-size: 18px;
            margin-bottom: 18px;
          }

          .acc-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px 12px;
          }

          .acc-card {
            height: 140px;
            max-width: 160px;
          }

          .acc-card p {
            font-size: 11px;
          }

          .acc-arrow {
            width: 30px;
            height: 30px;
            font-size: 15px;
          }

          .acc-left-arrow { left: -15px; }
          .acc-right-arrow { right: -15px; }

          .acc-btns {
            margin-top: 30px;
            gap: 6px;
          }

          .acc-btns a {
            padding: 11px 20px;
            font-size: 12px;
          }
        }

        /* Mobile Portrait (320px - 575px) */
        @media (max-width: 575px) {
          .acc-section {
            padding: 25px 0 20px;
          }

          .acc-container {
            padding: 0 10px;
          }

          .acc-col {
            padding: 0 10px;
            margin-bottom: 30px;
          }

          .acc-col h2 {
            font-size: 17px;
            margin-bottom: 16px;
            text-align: center;
          }

          .acc-col.right h2 {
            text-align: center;
          }

          .acc-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px 10px;
          }

          .acc-card {
            height: 130px;
            max-width: 150px;
          }

          .acc-card p {
            font-size: 10.5px;
            margin-top: 4px;
          }

          .acc-arrow {
            width: 28px;
            height: 28px;
            font-size: 14px;
            top: 50%;
          }

          .acc-left-arrow { 
            left: 50%;
            transform: translateX(-50%);
            top: auto;
            bottom: -45px;
          }
          
          .acc-right-arrow { 
            right: 50%;
            transform: translateX(50%);
            top: auto;
            bottom: -45px;
          }

          .acc-btns {
            margin-top: 60px;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .acc-btns a {
            padding: 10px 18px;
            font-size: 11px;
            width: 100%;
            max-width: 280px;
            text-align: center;
          }
        }

        /* Extra Small Mobile (< 400px) */
        @media (max-width: 400px) {
          .acc-section {
            padding: 20px 0 18px;
          }

          .acc-col h2 {
            font-size: 16px;
            margin-bottom: 14px;
          }

          .acc-grid {
            gap: 12px 8px;
          }

          .acc-card {
            height: 120px;
            max-width: 140px;
          }

          .acc-card p {
            font-size: 10px;
          }

          .acc-btns a {
            padding: 10px 16px;
            font-size: 10.5px;
            max-width: 260px;
          }
        }

        /* Extra Extra Small Mobile (< 360px) */
        @media (max-width: 360px) {
          .acc-col h2 {
            font-size: 15px;
          }

          .acc-grid {
            gap: 10px 6px;
          }

          .acc-card {
            height: 110px;
            max-width: 130px;
          }

          .acc-card p {
            font-size: 9.5px;
          }

          .acc-btns a {
            font-size: 10px;
            padding: 9px 14px;
          }
        }

        /* Landscape orientation adjustments for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .acc-section {
            min-height: auto;
            padding: 20px 0;
          }

          .acc-col {
            margin-bottom: 20px;
          }

          .acc-col h2 {
            margin-bottom: 12px;
          }

          .acc-btns {
            margin-top: 20px;
          }
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