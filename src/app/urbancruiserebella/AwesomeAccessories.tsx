"use client";
import React, { useState, useRef } from "react";

type Item = { img: string; text: string };

const interior: Item[] = [
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior8-650x410.jpg",
    text: "BASIC SEAT COVER",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior11-650x410.jpg",
    text: "PREMIUM SEAT COVER",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/interior/Accessories_Interior12-650x410.jpg",
    text: "LUGGAGE MAT TRAY",
  },
];

const exterior: Item[] = [
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior7-650x410.jpg",
    text: "BODY SIDE MOULDING",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior8-650x410.jpg",
    text: "DOOR VISOR PREMIUM",
  },
  {
    img: "https://static.toyotabharat.com/images/showroom/a32/accessories/exterior/Accessories_Exterior9-650x410.jpg",
    text: "MUD FLAP",
  },
];

export default function AwesomeAccessories() {
  return (
    <section className="wrap">
      <Header />

      <SliderRow title="INTERIOR" data={interior} />
      <SliderRow title="EXTERIOR" data={exterior} reverse />

      <Footer />

      {/* CSS */}
      <style jsx>{`
        .wrap {
          max-width: 1550px;
          margin: auto;
          padding: 40px 24px 90px;
          background:#fff;
          color:#000;
        }
      `}</style>
    </section>
  );
}

/* ---------------- HEADER ---------------- */

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

/* ---------------- SLIDER ROW ---------------- */

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

  /* MOBILE SWIPE */
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
          style={{ transform: `translateX(${-index * 440}px)` }}
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
        }
        .track {
          display: flex;
          gap: 80px;
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

/* ---------------- LABEL ---------------- */

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
        <button onClick={prev}>❮</button>
        <button onClick={next}>❯</button>
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
          font-size: 22px;
          cursor: pointer;
          margin: 0 6px;
        }
      `}</style>
    </aside>
  );
}

/* ---------------- CARD ---------------- */

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
          width: 360px;
          position: relative;
          clip-path: polygon(7% 0, 100% 0, 93% 100%, 0% 100%);
        }
        img {
          width: 100%;
          display: block;
        }
        .active {
          opacity: 1;
        }
        .faded {
          opacity: 0.3;
        }
        .glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(
            135deg,
            rgba(220, 0, 0, 0.95),
            rgba(220, 0, 0, 0.5),
            transparent 70%
          );
        }
        .text {
          position: absolute;
          bottom: 14px;
          left: 16px;
          font-size: 13px;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="foot">
        <button>
        Download  Brochure
        <img src="https://static.toyotabharat.com/images/showroom/a32/download-icon.svg" />
      </button>
      <button>
        Download Accessories Brochure
        <img src="https://static.toyotabharat.com/images/showroom/a32/download-icon.svg" />
      </button>
      

      <style jsx>{`
        .foot {
          width:100%;
        //   background: yellow;
        gap:200px;
          text-align: center;
          margin-top: 90px;
          display:flex;
          align-items: center;
          justify-content:center;
        }
        button {
          padding: 10px 15px;
          border: 1px solid #ccc;
          background: #f7eaeadf;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          border-radius:10px;
        }
      `}</style>
    </footer>
  );
}
