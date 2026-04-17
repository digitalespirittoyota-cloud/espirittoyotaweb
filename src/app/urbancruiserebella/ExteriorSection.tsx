
"use client";
import React, { useState, useEffect } from "react";

const exteriorData = [
  {
    title: "PREMIUM LED HEADLAMPS",
    thumb: "/models/ebella/ebella2.webp",
    image: "/models/ebella/ebella2.webp",
  },
  {
    title: "PREMIUM LED HEADLAMPS",
    thumb: "/models/ebella/ebella3.webp",
    image: "/models/ebella/ebella3.webp",
  },
  {
    title: "TOYOTA’S SIGNATURE HAMMERHEAD STYLING",
    thumb: "/models/ebella/ebella4.webp",
    image: "/models/ebella/ebella4.webp",
  },
  {
    title: "",
    thumb: "/models/ebella/ebella5.webp",
    image: "/models/ebella/ebella5.webp",
  },
  {
    title: "UNDERBODY PROTECTION",
    thumb: "/models/ebella/ebella6.webp",
    image: "/models/ebella/ebella6.webp",
  },
  {
    title: "18” ALLOY WHEELS",
    thumb: "/models/ebella/ebella7.webp",
    image: "/models/ebella/ebella7.webp",
  },
];

const VISIBLE_THUMBS = 2;

const ExteriorSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  // Slide next / prev
  const handleNext = () => {
    const next = (activeIndex + 1) % exteriorData.length;
    setActiveIndex(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + exteriorData.length) % exteriorData.length;
    setActiveIndex(prev);
  };

  // Update startIndex to make the thumbnail scroll follow the active image
  useEffect(() => {
    if (activeIndex < startIndex) {
      setStartIndex(activeIndex);
    } else if (activeIndex >= startIndex + VISIBLE_THUMBS) {
      setStartIndex(activeIndex - VISIBLE_THUMBS + 1);
    }
  }, [activeIndex]);

  return (
    <>
      
      <div className="exterior-wrapper">
        <div className="z-shape" >
        <p className="exterior-heading">EXTERIOR</p>

      </div>
        {/* LEFT CONTENT */}
        <div className="left">
          <div className="exterior-text">
            <h3>
              STANCE THAT’S <span>BOLD</span>
            </h3>
            <p>
              The Urban Cruiser EV showcases an authentic SUV character inspired
              by its Urban Tech design philosophy. With a bold hammerhead
              expression and three-dimensional surfaces, the BEV delivers a
              strong, futuristic road presence.
            </p>
          </div>

          {/* THUMBNAILS */}
          <div className="scroll">
            <button className="arrow thumb-prev" onClick={handlePrev}>
              <img src="/models/ebella/arrow-prev.webp" />
            </button>

            <div className="thumb-wrapper">
              {exteriorData
                .slice(startIndex, startIndex + VISIBLE_THUMBS)
                .map((item, index) => {
                  const realIndex = startIndex + index;
                  return (
                    <button
                      key={realIndex}
                      className={`thumb ${realIndex === activeIndex ? "active" : ""}`}
                      onClick={() => setActiveIndex(realIndex)}
                    >
                      <img src={item.thumb} alt={item.title} />
                    </button>
                  );
                })}
            </div>

            <button className="arrow next" onClick={handleNext}>
            <img src="/models/ebella/arrow-next.webp" />
          </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="exterior-image">

          <div className="image-slider">
            <div
              className="image-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {exteriorData.map((item, index) => (
                <div className="image-slide" key={index}>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </div>
          </div>

          {/* <button className="arrow next" onClick={handleNext}>
            <img src="https://static3.toyotabharat.com/images/showroom/a32/arrow-next.png" />
          </button> */}

          <div className="image-title">{exteriorData[activeIndex].title}</div>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
      .z-shape {
  position: absolute;
  inset: 0;            /* 🔥 THIS WAS MISSING */
  pointer-events: none;
  z-index: 2;
}


/* TOP LEFT LINE */
.z-shape::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 60px;
  border-top: 2px solid red;
  border-right: 2px solid red;
  border-radius: 0 14px 0 0;
}

/* BOTTOM RIGHT LINE */
.z-shape::after {
  content: "";
  position: absolute;
  bottom: 700;
  right: 3;
  width: 25%;
  height: 60px;
  border-bottom: 2px solid red;
  border-left: 2px solid red;
  border-radius: 0 0 0 14px;
}


        .exterior-wrapper {
  position: relative; /* IMPORTANT */
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  padding: 140px 30px;
  background: #fff;
}
  .exterior-heading {
  position: absolute;
  top: 20px;
  right: 400px;   /* instead of left:1000px */
  font-size: 48px;
  font-style: italic;
  color: red;
}


        .left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .exterior-text {
          background: #fafafa;
          padding: 90px;
          border-radius: 10px;
          border: 1px solid #9b959582;
        }

        .exterior-text h3 {
          font-size: 25px;
          font-style: italic;
          margin-bottom: 16px;
          color: #000;
        }

        .exterior-text h3 span {
          color: red;
        }

        .exterior-text p {
          font-size: 15px;
          color: #333;
        }

        .scroll {
          position: relative;
          height: 150px;
          display: flex;
          align-items: center;
          border-radius: 14px;
          background: linear-gradient(
            90deg,
            #eaa0a0 0%,
            #f6eeee 50%,
            #f1a2a2 100%
          );
        }

        .thumb-wrapper {
          display: flex;
          gap: 12px;
          padding: 10px 40px;
          overflow: hidden;
        }

        .thumb {
          padding: 9px;
          background: red;
          clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
          cursor: pointer;
          border-radius: 14px;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .thumb img {
          width: 150px;
          height: 100px;
          object-fit: cover;
          display: block;
          border-radius: 14px;
          clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
        }

        .thumb.active {
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          z-index: 5;
        }

        .arrow img {
          width: 36px;
          height: 36px;
        }

        .arrow:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .arrow.prev {
          left: 14px;
        }

        .arrow.next {
          right: 14px;
        }

        .exterior-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }

        .image-slider {
          overflow: hidden;
          width: 100%;
        }

        .image-track {
          display: flex;
          transition: transform 0.6s ease-in-out;
        }

        .image-slide {
          min-width: 100%;
        }

        .image-slide img {
          width: 100%;
          display: block;
          border-radius: 12px;
        }

        .image-title {
          position: absolute;
          bottom: 24px;
          left: 24px;
          font-size: 24px;
          font-style: italic;
          color: #fff;
          padding: 10px 18px;
          border-radius: 6px;
          background: linear-gradient(to right, rgba(160, 0, 0, 0.9), rgba(0, 0, 0, 0));
          z-index: 4;
        }

        @media (max-width: 1024px) {
          .exterior-wrapper {
    grid-template-columns: 1fr;
    padding: 100px 20px;
  }

  .exterior-heading {
    position: static;
    text-align: right;
    margin-bottom: 20px;
  }

  .exterior-text {
    padding: 40px;
  }

  .image-title {
    font-size: 20px;
  }
        }
  @media (max-width: 768px) {
  .exterior-wrapper {
    padding: 80px 14px;
    gap: 20px;
  }

  .exterior-heading {
    font-size: 32px;
    text-align: center;
  }

  .exterior-text h3 {
    font-size: 20px;
  }

  .exterior-text p {
    font-size: 14px;
  }

  .scroll {
    height: auto;
    padding: 12px 0;
  }

  .thumb-wrapper {
    justify-content: center;
    padding: 10px 0;
  }

  .thumb img {
    width: 110px;
    height: 70px;
  }

  .arrow img {
    width: 28px;
    height: 28px;
  }

  .image-title {
    font-size: 16px;
    bottom: 12px;
    left: 12px;
    padding: 6px 12px;
  }
}


        @media (max-width: 600px) {
          .thumb img {
            width: 90px;
            height: 60px;
          }

          .exterior-text {
            padding: 20px;
          }
        }
          @media (max-width: 480px) {
  .thumb img {
    width: 90px;
    height: 60px;
  }

  .thumb.active {
    transform: scale(1.05);
  }

  .image-title {
    font-size: 14px;
  }
}

      `}</style>
    </>
  );
};

export default ExteriorSection;
