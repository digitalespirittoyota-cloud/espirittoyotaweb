
"use client";
import React, { useState, useRef } from "react";

type Item = { img: string; text: string };

/* ================= DATA ================= */

const interior: Item[] = [
  {
    img: "/models/ebella/ebella40.webp",
    text: "BASIC SEAT COVER",
  },
  {
    img: "/models/ebella/ebella41.webp",
    text: "PREMIUM SEAT COVER",
  },
  {
    img: "/models/ebella/ebella42.webp",
    text: "LUGGAGE MAT TRAY",
  },
  {
    img: "/models/ebella/ebella43.webp",
    text: "WIRELESS CHARGER",
  },
  {
    img: "/models/ebella/ebella44.webp",
    text: "ALL WEATHER 3D MAT",
  },
  {
    img: "/models/ebella/ebella45.webp",
    text: "BACK DOOR SCUFF PLATE",
  },
  {
    img: "/models/ebella/ebella46.webp",
    text: "DOOR SILL GUARD",
  },
  {
    img: "/models/ebella/ebella47.webp",
    text: "CARPET FLOOR MAT",
  },
  {
    img: "/models/ebella/ebella48.webp",
    text: "LUGGAGE SHELF",
  },
  {
    img: "/models/ebella/ebella49.webp",
    text: "REAR SUNSHADE",
  },
  {
    img: "/models/ebella/ebella50.webp",
    text: "CAR VIEW CAMERA",
  },
];

const exterior: Item[] = [
  {
    img: "/models/ebella/ebella51.webp",
    text: "BODY SIDE MOULDING",
  },
  {
    img: "/models/ebella/ebella52.webp",
    text: "DOOR VISOR PREMIUM",
  },
  {
    img: "/models/ebella/ebella53.webp",
    text: "MUD FLAP",
  },
  {
    img: "/models/ebella/ebella54.webp",
    text: "REAR MID GARNISH",
  },
  {
    img: "/models/ebella/ebella55.webp",
    text: "SIDE QUARTER SPOILER",
  },
  {
    img: "/models/ebella/ebella56.webp",
    text: "SIDESTEP",
  },
  {
    img: "/models/ebella/ebella57.webp",
    text: "ALLOW WHEEL COVER",
  },
  {
    img: "/models/ebella/ebella58.webp",
    text: "BACK DOOR GARNISH",
  },
  {
    img: "/models/ebella/ebella59.webp",
    text: "BODY COVER",
  },
];

/* ================= MAIN COMPONENT ================= */

export default function AwesomeAccessories() {
  return (
    <main className="wrap">
      {/* CONTENT PART */}
      <div className="content-section">
        <Header />
      </div>

      {/* INTERIOR PART */}
      <div className="interior-section">
        <SliderRow title="INTERIOR" data={interior} />
      </div>

      {/* EXTERIOR PART */}
      <div className="exterior-section">
        <SliderRow title="EXTERIOR" data={exterior} reverse />
      </div>

      {/* BUTTON PART */}
      <div className="button-section">
        <Footer />
      </div>

      <style jsx>{`
        .wrap {
          max-width: 1550px;
          margin: auto;
          padding: 40px 24px 90px;
          background: #fff;
          color: #000;
        }
      `}</style>
    </main>
  );
}

/* ================= HEADER ================= */

function Header() {
  return (
    <header className="head">
      <div>
        <img
          src="https://static.toyotabharat.com/images/showroom/a32/awesome-txt-img.svg"
          className="title"
        />
        <p className="tag">THAT ARE BUILT TO LAST</p>
      </div>

      <p className="desc">
        Elevate your driving experience and make the new Urban Cruiser Hyryder
        truly your own with our exclusive range of Genuine Accessories.
      </p>

      <style jsx>{`
        .head {
          display: flex;
          justify-content: space-between;
          gap: 60px;
        }
        .title {
          width: 320px;
        }
        .tag {
          font-style: italic;
          margin-top: 6px;
        }
        .desc {
          max-width: 620px;
          font-size: 13.5px;
          line-height: 1.7;
        }
        @media (max-width: 900px) {
          .head {
            flex-direction: column;
          }
        }
      `}</style>
    </header>
  );
}

/* ================= SLIDER ROW ================= */

function SliderRow({
  title,
  data,
  reverse,
}: {
  title: string;
  data: Item[];
  reverse?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % data.length);
  const prev = () => setIndex((i) => (i - 1 + data.length) % data.length);

  const onTouchStart = (e: React.TouchEvent) =>
    (startX.current = e.touches[0].clientX);

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className={`row ${reverse ? "reverse" : ""}`}>
      {!reverse && <Label title={title} prev={prev} next={next} />}

      <div
        className="viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="track"
          style={{ transform: `translateX(${-index * 540}px)` }}
        >
          {data.map((item, i) => (
            <Card
              key={i}
              {...item}
              active={i === index}
              faded={i === index + 1}
            />
          ))}
        </div>
      </div>

      {reverse && <Label title={title} prev={prev} next={next} />}

      <style jsx>{`
        .row {
          display: grid;
          grid-template-columns: 140px 1fr;
          align-items: center;
          margin-top: 90px;
        }
        .row.reverse {
          grid-template-columns: 1fr 140px;
        }
        .viewport {
          overflow: hidden;
          height: 320px;
        }
        .track {
          display: flex;
          gap: 60px;
          align-items: center;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 900px) {
          .row,
          .row.reverse {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

/* ================= LABEL ================= */

function Label({
  title,
  prev,
  next,
}: {
  title: string;
  prev: () => void;
  next: () => void;
}) {
  return (
    <aside className="label">
      <span>{title}</span>
      <div className="arrows">
        <button onClick={prev}>
          <img src="https://static3.toyotabharat.com/images/showroom/a32/left-arrow-37x40.svg" />
        </button>
        <button onClick={next}>
          <img src="https://static3.toyotabharat.com/images/showroom/a32/right-arrow-37x40.svg" />
        </button>
      </div>

      <style jsx>{`
        .label {
          text-align: center;
          font-style: italic;
        }
        .arrows {
          margin-top: 18px;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
          margin: 0 6px;
        }
      `}</style>
    </aside>
  );
}

/* ================= CARD ================= */

function Card({
  img,
  text,
  active,
  faded,
}: {
  img: string;
  text: string;
  active?: boolean;
  faded?: boolean;
}) {
  return (
    <div className={`card ${active ? "active" : ""} ${faded ? "faded" : ""}`}>
      <img src={img} />
      <div className="glow" />
      <div className="text">{text}</div>

      <style jsx>{`
        .card {
          width: 460px;
          position: relative;
          transform: skewX(-6deg);
          overflow: hidden;
          transition: all 0.6s ease;
          flex-shrink: 0;
          clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: skewX(6deg) scale(1.05);
        }
        .active {
          transform: translateY(12px);
        }
        .faded {
          opacity: 0.4;
          filter: grayscale(100%);
          transform: translateY(-8px);
        }
        .glow {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 90px;
          background: linear-gradient(
            to right,
            #d60000,
            rgba(214, 0, 0, 0.7),
            transparent 70%
          );
        }
        .text {
          position: absolute;
          bottom: 16px;
          left: 18px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="foot">
      <button>
        Download Brochure
        <img src="https://static.toyotabharat.com/images/showroom/a32/download-icon.svg" />
      </button>

      <button>
        Download Accessories Brochure
        <img src="https://static.toyotabharat.com/images/showroom/a32/download-icon.svg" />
      </button>

      <style jsx>{`
        .foot {
          margin-top: 90px;
          display: flex;
          justify-content: center;
          gap: 30px;
        }
        button {
          padding: 10px 15px;
          border: 1px solid #ccc;
          background: #f7eaeadf;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          border-radius: 10px;
        }
      `}</style>
    </footer>
  );
}
