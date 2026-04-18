

"use client";
import React, { useState } from "react";

type Color = {
  id: string;
  title: string;
  image: string;
  colorClass: string;
};

const COLORS: Color[] = [
  {
    id: "white",
    title: "SUPER WHITE",
    image:
      "/models/innovacrysta/crysta39.webp",
    colorClass: "white",
  },
  {
    id: "black",
    title: "ATTITUDE BLACK MICA",
    image:
      "/models/innovacrysta/crysta37.webp",
    colorClass: "black",
  },
  {
    id: "bronze",
    title: "AVANT-GARDE BRONZE METALLIC",
    image:
      "/models/innovacrysta/crysta36.webp",
    colorClass: "bronze",
  },
  {
    id: "whitePearl",
    title: "PLATINUM WHITE PEARL",
    image:
      "/models/innovacrysta/crysta40.webp",
    colorClass: "whitePearl",
  },
  {
    id: "silver",
    title: "SILVER METALLIC",
    image:
      "/models/innovacrysta/crysta38.webp",
    colorClass: "silver",
  },
];

const InnovaColors: React.FC = () => {
  const [active, setActive] = useState<Color>(COLORS[1]);

  return (
    <>
      <section className="image-section">
        <div className="overlay" />

        <div className="container">
          <h1 className="topTitle">Unmatched Colours</h1>

          <div className="copy-bg">
            <p>
              The dynamic new Innova Crysta is available in a wide range of
              colours. From light shades to dark, you’ll surely find a colour
              that fits your personality and character.
            </p>
          </div>

          <ul className="brochure-list">
            <li><a className="btn" href="#">VIEW BROCHURE</a></li>
            <li><a className="btn" href="#">DOWNLOAD BROCHURE</a></li>
            <li><a className="btn spec" href="#">SPECIFICATION</a></li>
          </ul>

          {/* CENTERED & BIGGER IMAGE */}
          <div className="car-preview">
            <img src={active.image} alt={active.title} />
            <h4>{active.title}</h4>
          </div>

          <ul className="color-tabs">
            {COLORS.map((c) => (
              <li
                key={c.id}
                className={`${c.colorClass} ${
                  active.id === c.id ? "active" : ""
                }`}
                onClick={() => setActive(c)}
              >
                <span />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style jsx>{`
        .image-section {
          position: relative;
          padding: 90px 20px;
          background: url("/models/innovacrysta/car-bg.webp")
            no-repeat center / cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
         background: rgba(255, 255, 255, 0.2);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: auto;
          text-align: center;
          color: #000;
        }

        .topTitle {
          font-size: 3.8rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 30px;
        }

        .copy-bg {
          max-width: 950px;
          margin: 0 auto 45px;
          font-size: 15px;
          line-height: 1.8;
        }

        .brochure-list {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 55px;
          list-style: none;
          padding: 0;
        }

        .btn {
          padding: 12px 30px;
          background: #d3d3d3;
          color: #000;
          font-size: 13px;
          letter-spacing: 1px;
          text-decoration: none;
        }

        .btn.spec {
          background: #000;
          color: #fff;
        }

        /* IMAGE CENTER + SIZE */
        .car-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .car-preview img {
          width: 100%;
          max-width: 1100px; /* INCREASED SIZE */
          margin: 0 auto;
        }

        .car-preview h4 {
          margin-top: 25px;
          font-size: 14px;
          letter-spacing: 2px;
        }

        .color-tabs {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-top: 40px;
          list-style: none;
          padding: 0;
        }

        .color-tabs li {
          width: 120px;
          height: 38px;
          // border-radius: 50%;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .color-tabs li.active {
          border-color: #000;
        }

        .white { background: #f5f5f5; }
        .black { background: #000; }
        .bronze { background: #7b6a58; }
        .whitePearl { background: #e8e8e8; }
        .silver { background: #bdbdbd; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .car-preview img {
            max-width: 900px;
          }
        }

        @media (max-width: 768px) {
          .topTitle {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }

          .copy-bg {
            font-size: 14px;
          }

          .car-preview img {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default InnovaColors;
