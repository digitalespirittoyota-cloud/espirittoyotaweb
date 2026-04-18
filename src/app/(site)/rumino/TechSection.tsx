
"use client";
import { useState } from "react";

/* ================= TYPES ================= */
interface SlideContent {
  image: string;
  title: string;
  subtitle: string;
}

interface TechExactSliderProps {
  titleMain: string;
  titleHighlight: string;
  description: string;
  slides: SlideContent[];
  layout?: "big-right" | "big-left";
  mode?: "slider" | "click" | "card-click";
  showBrochureButton?: boolean;
  brochureUrl?: string;
}

/* ================= COMPONENT ================= */
export default function TechExactSlider({
  titleMain,
  titleHighlight,
  description,
  slides,
  layout = "big-right",
  mode = "slider",
  showBrochureButton = false,
  brochureUrl = "",
}: TechExactSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===== SLIDER CONTROLS ===== */
  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  /* ===== INFO BLOCK ===== */
  const InfoBlock = (
    <div className="tech-left">
      <h2>
        {titleMain} <br />
        <span>{titleHighlight}</span>
      </h2>

      <p>{description}</p>

      {/* ===== NORMAL SLIDER MODE ===== */}
      {mode === "slider" && (
        <div className="card-slider">
          <div className="cards">
            {[
              slides[activeIndex],
              slides[(activeIndex + 1) % slides.length],
            ].map((slide, idx) => (
              <div className="card" key={idx}>
                <img src={slide.image} alt="tech" />
              </div>
            ))}
          </div>

          <div className="arrow-wrapper">
            <button className="arrow" onClick={prevSlide}>
              &#8249;
            </button>
            <button className="arrow" onClick={nextSlide}>
              &#8250;
            </button>
          </div>
        </div>
      )}

      {/* ===== CARD CLICK MODE (LAST SECTION ONLY) ===== */}
      {mode === "card-click" && (
        <div className="cards click-cards">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`card clickable ${
                idx === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={slide.image} alt="tech" />
            </div>
          ))}
        </div>
      )}

      {/* ===== BROCHURE MODE ===== */}
      {mode === "click" && showBrochureButton && (
        <a
          href={brochureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brochure-btn"
          
        >
          DOWNLOAD BROCHURE
        </a>
      )}
    </div>
  );

  /* ===== BIG IMAGE BLOCK ===== */
  const ImageBlock = (
    <div className="tech-right">
      <img src={slides[activeIndex].image} alt="big-tech" />

      <div className="big-image-content">
        <h3>{slides[activeIndex].title}</h3>
        <h4>{slides[activeIndex].subtitle}</h4>
      </div>
    </div>
  );

  return (
    <>
      <section className={`tech-section ${mode === "card-click" ? "card-click-layout" : ""}`}>
  {mode === "card-click" ? (
    <>
      {ImageBlock}
      {InfoBlock}
    </>
  ) : layout === "big-right" ? (
    <>
      {InfoBlock}
      {ImageBlock}
    </>
  ) : (
    <>
      {ImageBlock}
      {InfoBlock}
    </>
  )}
</section>

      {/* ================= CSS ================= */}
      <style>{`
* {
  box-sizing: border-box;
}

.tech-section {
  max-width: 1600px;
  margin: auto;
  padding: 60px 20px;
  display: flex;
  gap: 50px;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background: #fff;
  color: #000;
}

/* LEFT CONTENT */
.tech-left {
  flex: 1;
  padding-left: clamp(0px, 6vw, 120px);
}

.tech-left h2 {
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 800;
  line-height: 1.1;
}

.tech-left span {
  color: #00a3e0;
}

.tech-left p {
  max-width: 480px;
  margin: 20px 0 30px;
  font-style: italic;
  font-weight: 600;
}

/* BUTTON */
.brochure-btn {
  background-color: black;
  color: white;
  padding: 14px 32px;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.brochure-btn:hover {
  background-color: #00a3e0;
  color: black;
  cursor: pointer;
}

/* CARDS */
.cards {
  display: flex;
  gap: 30px;
}

.card {
  width: clamp(220px, 28vw, 330px);
}

.card img {
  width: 100%;
  display: block;
}

/* CLICK MODE */
.clickable {
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.clickable:hover {
  transform: scale(1.05);
}

.clickable.active {
  outline: 3px solid #00a3e0;
}

/* ARROWS */
.arrow-wrapper {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 18px;
}

.arrow {
  background: none;
  border: none;
  font-size: clamp(42px, 8vw, 94px);
  cursor: pointer;
  color: #817d7d;
}

/* BIG IMAGE */
.tech-right {
  flex: 1;
  position: relative;
}

.tech-right img {
  width: 100%;
  height: auto;
  display: block;
}

.big-image-content {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: #fff;
  max-width: 80%;
}

/* ================= TABLET ================= */
@media (max-width: 1024px) {
  .tech-section {
    flex-direction: column;
    text-align: center;
  }

  .tech-left {
    padding-left: 0;
  }

  .tech-left p {
    margin-left: auto;
    margin-right: auto;
  }

  .cards {
    justify-content: center;
  }

  .big-image-content {
    left: 20px;
    bottom: 20px;
  }
}

/* ================= MOBILE ================= */
@media (max-width: 767px) {
  .tech-section {
    padding: 40px 16px;
    gap: 30px;
  }

  .tech-left h2 {
    font-size: 26px;
  }

  .tech-left p {
    font-size: 14px;
  }

  .cards {
    flex-direction: column;
    gap: 20px;
  }

  .card {
    width: 100%;
  }

  .brochure-btn {
    width: 100%;
    text-align: center;
  }

  .big-image-content {
    position: static;
    background: rgba(0, 0, 0, 0.6);
    padding: 12px;
    margin-top: -60px;
  }
}

/* ================= LARGE SCREENS ================= */
@media (min-width: 1600px) {
  .tech-section {
    padding: 80px 40px;
  }
}

`}</style>
    </>
  );
}
