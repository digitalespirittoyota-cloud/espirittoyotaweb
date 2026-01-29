// import React from "react";

// const Gallery: React.FC = () => {
//   return (
//     <section className="gallery-section">
//       <h2 className="gallery-title">GALLERY</h2>

//       <div className="gallery-box">
//         <div className="gallery-wrapper">
//         <div className="gallery-grid">
//           <img
//             src="https://static.toyotabharat.com/images/showroom/innova-mmc/gallery03-646x405.jpg"
//             alt="Front View"
//           />
//           <img
//             src="https://static.toyotabharat.com/images/showroom/innova-mmc/gallery04-646x405.jpg"
//             alt="Interior"
//           />
//           <img
//             src="https://static.toyotabharat.com/images/showroom/innova-mmc/gallery02-646x405.jpg"
//             alt="Side View"
//           />
//           <img
//             src="https://static.toyotabharat.com/images/showroom/innova-mmc/gallery01-646x405.jpg"
//             alt="Action Shot"
//           />
//         </div>
//       </div>
//       </div>

//       {/* 🔥 INTERNAL CSS */}
//       <style jsx>{`
//         .gallery-section {
//           width:100%,
//           padding: 60px 20px;
//           color:black;
//         }

//         .gallery-title {
//           text-align: center;
//           font-size: 32px;
//           font-weight: 700;
//           letter-spacing: 4px;
//           margin-bottom: 40px;
//         }
//         .gallery-box{
//         background: #c0b9b984;
//          height:1000px;
//           width: 1520px;
//           display:grid;
//         }
//         .gallery-wrapper {
//          height:900px;
//           max-width: 1300px;
//           margin: auto;
//         }

//         .gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 30px;
//         }

//         .gallery-grid img {
//           width: 100%;
//           height: 420px;
//           object-fit: cover;
//         //   border-radius: 6px;
//           transition: transform 0.4s ease;
//           cursor: pointer;
//         }

//         // .gallery-grid img:hover {
//         //   transform: scale(1.05);
//         // }

//         /* 📱 Tablet */
//         @media (max-width: 992px) {
//           .gallery-grid img {
//             height: 260px;
//           }
//         }

//         /* 📱 Mobile */
//         @media (max-width: 600px) {
//           .gallery-grid {
//             grid-template-columns: 1fr;
//           }

//           .gallery-grid img {
//             height: 240px;
//           }

//           .gallery-title {
//             font-size: 26px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Gallery;






















"use client";
import React, { useState } from "react";

const images = [
  "https://static.toyotabharat.com/images/showroom/innova-mmc/gallery03-646x405.jpg",
  "https://static.toyotabharat.com/images/showroom/innova-mmc/gallery04-646x405.jpg",
  "https://static.toyotabharat.com/images/showroom/innova-mmc/gallery02-646x405.jpg",
  "https://static.toyotabharat.com/images/showroom/innova-mmc/gallery01-646x405.jpg",
];

const Gallery: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">GALLERY</h2>

      <div className="gallery-bg">
        <div className="gallery-container">
          <div className="gallery-grid">
            <img src={images[index]} alt="Gallery" />
            <img src={images[(index + 1) % images.length]} alt="Gallery" />
            <img src={images[(index + 2) % images.length]} alt="Gallery" />
            <img src={images[(index + 3) % images.length]} alt="Gallery" />
          </div>

          {/* NAV ARROWS */}
          <div className="gallery-nav">
            <button className="prev" onClick={prev}>
              ‹
            </button>
            <button className="next" onClick={next}>
              ›
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 INTERNAL CSS */}
      <style jsx>{`
        .gallery-section {
          width: 100%;
          padding: 60px 0;
          color: #000;
        }

        .gallery-title {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 4px;
          margin-bottom: 40px;
        }

        .gallery-bg {
          background: #e6e6e6;
          padding: 60px 20px;
        }

        .gallery-container {
          max-width: 1400px;
          margin: auto;
          position: relative;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .gallery-grid img {
          width: 100%;
          height: 420px;
          object-fit: cover;
        }

        /* NAV ARROWS */
        .gallery-nav {
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          pointer-events: none;
        }

        .gallery-nav button {
          pointer-events: all;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #000;
          color: #fff;
          font-size: 28px;
          border: none;
          cursor: pointer;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .gallery-grid img {
            height: 280px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid img {
            height: 240px;
          }

          .gallery-title {
            font-size: 28px;
          }

          .gallery-nav {
            top: auto;
            bottom: -50px;
            transform: none;
            justify-content: center;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
