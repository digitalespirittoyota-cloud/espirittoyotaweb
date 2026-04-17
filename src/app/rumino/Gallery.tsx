"use client";

import { useState } from "react";

type TabType = "ALL" | "EXTERIOR" | "INTERIOR";

const exteriorImages = [
  "/models/rumino/gallery-img02.webp",
  "/models/rumino/gallery-img01.webp",
];

const interiorImages = [
  "/models/rumino/gallery-img03.webp",
  "/models/rumino/gallery-img04.webp",
  
];

const allImages = [...exteriorImages, ...interiorImages];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImages = () => {
    if (activeTab === "EXTERIOR") return exteriorImages;
    if (activeTab === "INTERIOR") return interiorImages;
    return allImages;
  };

  const images = getImages();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="gallery-wrapper">
      <style>
        {`.gallery-wrapper {
  width: 100%;
  padding: 40px 5%;
  box-sizing: border-box;
  background-color:#fff;
  color:black;
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.gallery-header h1 {
  color: #00a3e0;
  font-size: 40px;
  font-weight: 700;
}

.tabs button {
  margin-left: 15px;
  padding: 10px 22px;
  border: none;
  background: #f2f2f2;
  cursor: pointer;
  font-weight: 600;
}

.tabs .active {
  background: #00a3e0;
  color: white;
}

.gallery-content {
  position: relative;
  display: flex;
  align-items: center;
}

.arrow {
  font-size: 40px;
  background: none;
  border: none;
  cursor: pointer;
}

.left { margin-right: 20px; }
.right { margin-left: 20px; }

/* ALL layout – 1 big + 3 stacked */
.grid-all {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
}

.big-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.small-imgs {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  gap: 20px;
}

.small-imgs img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


/* EXTERIOR layout */
.grid-exterior {
  display: grid;
  grid-template-columns: 0.3fr 0.3fr;
  gap: 20px;
  width: 100%;
}

.grid-exterior img {
  width: 100%;
  height: auto;
}

/* INTERIOR layout */
.grid-interior {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 28%;
}

.grid-interior img {
  width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .grid-all,
  .grid-exterior {
    grid-template-columns: 1fr;
  }

  .grid-interior {
    width: 100%;
  }

  .gallery-header {
    flex-direction: column;
    align-items: flex-start;
  }
}`}
      </style>

      <div className="gallery-header">
        <h1>GALLERY</h1>
        <div className="tabs">
          {["ALL", "EXTERIOR", "INTERIOR"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => {
                setActiveTab(tab as TabType);
                setCurrentIndex(0);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className={`gallery-content ${activeTab.toLowerCase()}`}>
        <button className="arrow left" onClick={prevSlide}>‹</button>

        {/* ALL Layout */}
        {activeTab === "ALL" && (
  <div className="grid-all">
    <div className="big-img">
      <img src={images[0]} alt="" />
    </div>

    <div className="small-imgs">
      <img src={images[1]} alt="" />
      <img src={images[2]} alt="" />
    </div>
    <div className="small-img">
        <img src={images[3]} alt="" />
    </div>
  </div>
)}


        {/* EXTERIOR Layout */}
        {activeTab === "EXTERIOR" && (
          <div className="grid-exterior">
            <img src={images[currentIndex]} alt="" />
            <img src={images[(currentIndex + 1) % images.length]} alt="" />
          </div>
        )}

        {/* INTERIOR Layout */}
        {activeTab === "INTERIOR" && (
          <div className="grid-interior">
            <img src={images[currentIndex]} alt="" />
            <img src={images[(currentIndex + 1) % images.length]} alt="" />
          </div>
        )}

        <button className="arrow right" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

export default Gallery;
