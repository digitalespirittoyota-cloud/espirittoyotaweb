"use client";
import { useState } from "react";

const accessories = [
  {
    img: "/models/rumino/accessories-img01-large.webp",
    title: "REAR BUMPER GARNISH",
  },
  {
    img: "/models/rumino/accessories-img02-large.webp",
    title: "NUMBER PLATE GARNISH",
  },
  {
    img: "/models/rumino/accessories-img03-large.webp",
    title: "BACK DOOR GARNISH",
  },
  {
    img: "/models/rumino/accessories-img04-large.webp",
    title: "HEAD LAMP GARNISH<",
  },
  {
    img: "/models/rumino/accessories-img05-large.webp",
    title: "BACK DOOR GARNISH",
  },
  {
    img: "/models/rumino/accessories-img06-large.webp",
    title: "HEAD LAMP GARNISH",
  },
  {
    img: "/models/rumino/accessories-img07-large.webp",
    title: "ROOF EDGE SPOILER",
  },
  {
    img: "/models/rumino/accessories-img08-large.webp",
    title: "BODY SIDE MOULDING GARNISH FINISH",
  },
  {
    img: "/models/rumino/accessories-img09-small.webp",
    title: "FLOOR MAT",
  },
];


const VISIBLE = 4;

export default function AccessoriesSlider() {
  const [active, setActive] = useState(0);
  const [start, setStart] = useState(0);

  const next = () => {
    const nextIndex = (active + 1) % accessories.length;
    setActive(nextIndex);

    if (nextIndex >= start + VISIBLE) {
      setStart((prev) => (prev + 1) % accessories.length);
    }
  };

  const prev = () => {
    const prevIndex =
      active === 0 ? accessories.length - 1 : active - 1;
    setActive(prevIndex);

    if (prevIndex < start) {
      setStart(
        start === 0 ? accessories.length - VISIBLE : start - 1
      );
    }
  };

  return (
    <>
      <section className="accessories">
        {/* BIG IMAGE */}
        <h1 style={{color:"#129dd4",textAlign:"center",fontWeight:"bold",fontSize:"40px"}}>GOOD WALA UPGRADES</h1>
        <div className="big">
          <img src={accessories[active].img} />
          
        </div>

        {/* THUMBNAILS WITH ARROWS BEHIND */}
<div className="thumb-container">
  <button className="thumb-nav left" onClick={prev}>‹</button>

  <div className="thumbs">
    {Array.from({ length: VISIBLE }).map((_, i) => {
      const index = (start + i) % accessories.length;
      return (
        <div
          key={index}
          className={`thumb ${index === active ? "active" : ""}`}
          onClick={() => setActive(index)}
        >
          <img src={accessories[index].img} />
          <h3>{accessories[index].title}</h3>
        </div>
      );
    })}
  </div>

  <button className="thumb-nav right" onClick={next}>›</button>
</div>


        {/* DOWNLOAD */}
        <div className="download">
          <a
            href="https://www.toyotabharat.com/documents/brochures/rumion-accessory-brochure.pdf"
            target="_blank"
          >
            DOWNLOAD ACCESSORIES BROCHURE
          </a>
        </div>
      </section>

      {/* INTERNAL CSS */}
      <style jsx>{`
/* =========================
   MAIN SECTION
========================= */
.accessories {
  background: #000;
  padding: 50px 20px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}

/* =========================
   BIG IMAGE
========================= */
.big {
  max-width: 1200px;
  margin: auto;
}

.big img {
  width: 100%;
  height: auto;
  border-radius: 6px;
}

/* =========================
   THUMB CONTAINER
========================= */
.thumb-container {
  position: relative;
  max-width: 1200px;
  margin: 30px auto 0;
}

/* =========================
   ARROW BUTTONS
========================= */
.thumb-nav {
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.65);
  border: none;
  color: #fff;
  font-size: 32px;
  width: 42px;
  height: 58px;
  cursor: pointer;
  z-index: 10;
}

.thumb-nav.left {
  left: -18px;
}

.thumb-nav.right {
  right: -18px;
}

/* =========================
   THUMB GRID (DEFAULT = 4)
========================= */
.thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* ✅ 4 cards in one row */
  gap: 18px;
}

/* =========================
   THUMB CARD
========================= */
.thumb {
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s;
  text-align: center;
}

.thumb.active {
  opacity: 1;
}

.thumb img {
  width: 100%;
  border-radius: 4px;
}

.thumb h3 {
  font-size: 13px;
  font-weight: 600;
  margin-top: 10px;
  line-height: 1.3;
}

/* =========================
   TABLET + MOBILE (2 CARDS)
========================= */
@media (max-width: 1024px) {
  .thumbs {
    grid-template-columns: repeat(4, 1fr); /* ✅ 2 cards */
  }

  .thumb h3 {
    font-size: 12px;
  }

  .thumb-nav {
    font-size: 24px;
    width: 34px;
    height: 48px;
  }

  .thumb-nav.left {
    left: -6px;
  }

  .thumb-nav.right {
    right: -6px;
  }
}

/* =========================
   SMALL MOBILE
========================= */
@media (max-width: 480px) {
  h1 {
    font-size: 24px !important;
  }

  .thumb h3 {
    font-size: 11px;
  }

  .download a {
    width: 100%;
    padding: 18px 0;
    font-size: 14px;
  }
}

/* =========================
   DOWNLOAD BUTTON
========================= */
.download {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.download a {
  background: #00aaff;
  color: #000;
  padding: 8px 30px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 1px;
}
`}</style>

    </>
  );
}
