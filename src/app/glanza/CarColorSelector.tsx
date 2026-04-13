"use client";
import { useState } from "react";

interface CarColor {
  name: string;
  image: string;
  colorCode: string;
}

const carColors: CarColor[] = [
  { name: "Insta Blue", image: "/models/glanza/car-blue.webp", colorCode: "#2e1ea4" },
  { name: "Gaming Grey", image: "/models/glanza/car-dark-grey.webp", colorCode: "#333333" },
  { name: "Enticing Silver", image: "/models/glanza/car-light-grey.webp", colorCode: "#D3D3D3" },
  { name: "Sportin Red", image: "/models/glanza/car-maroon.webp", colorCode: "#800000" },
  { name: "Cafe White", image: "/models/glanza/car-white.webp", colorCode: "#FFFFFF" },
];

export default function CarColorSelector() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? carColors.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === carColors.length - 1 ? 0 : prev + 1));
  const handleSelectColor = (index: number) => setCurrentIndex(index);
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/e-brochure-glanza.pdf";
  link.download = "e-brochure-glanza.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};




  return (
    <div className="pageWrapper">
      {/* Header */}
      <div className="header">
        <h2 className="title" style={{color:"black"}}>
          PICK YOUR SHADE OF{" "}
          <img
            src="https://static.toyotabharat.com/images/showroom/glanza/new/txt-awesome.png"
            alt="Awesome"
            className="titleImage"
          />
        </h2>

        <div className="colorPicker">
          <span style={{color:"black",fontWeight:"bold"}}>CHOOSE COLOR:</span>
          <div className="swatches">
            {carColors.map((color, index) => (
              <div
                key={index}
                className={`swatch ${currentIndex === index ? "active" : ""}`}
                style={{ backgroundColor: color.colorCode }}
                onClick={() => handleSelectColor(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Car */}
      <div className="carWrapper">
        <button className="arrowLeft" onClick={handlePrev}>
          &#10094;
        </button>
        <img src={carColors[currentIndex].image} alt={carColors[currentIndex].name} className="carImage" />
        <button className="arrowRight" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Color Name */}
      <p className="colorName">{carColors[currentIndex].name}</p>
      <button className="download" onClick={handleDownload}>
  DOWNLOAD BROCHURE
</button>


      <style jsx>{`
        .pageWrapper {
          min-height: 100vh;
          background-color: #f2f2f2;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
           flex-wrap: wrap;
           gap: 1rem;
        }

        .title {
          font-size: 1.5rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .titleImage {
          height: 2.5rem;
          object-fit: contain;
        }

        .colorPicker {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .swatches {
          display: flex;
          gap: 0.5rem;
        }

        .swatch {
          width: 25px;
          height: 25px;
          // border-radius: 50%;
          cursor: pointer;
          border: 1px solid #ccc;
          transition: transform 0.2s, border-color 0.2s;
        }

        .swatch:hover {
          transform: scale(1.1);
        }

        .active {
          border-color: #000;
          transform: scale(1.2);
        }

        .carWrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          width: 100%;
          max-width: 1400px;
          // background-color:pink;
          height: 450px;

        }

        .carImage {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .arrowLeft,
        .arrowRight {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 0.3rem 1rem;
          cursor: pointer;
          font-size: 1.5rem;
          // border-radius: 50%;
        }

        .arrowLeft {
          left: -2rem;
        }

        .arrowRight {
          right: -2rem;
        }

        .colorName {
          font-weight: 300;
          margin-top: 1rem;
          color:black;
        }
        .download{
        height:45px;
        width:300px;
        border:none;
        padding:0.8rem;
        background-color:#4caf50;
        color:white;
        text-align:center;
        font-family:sans-serif;
        margin-top:2rem;
        cursor:pointer;
        }
        @media (max-width: 768px) {
          .carImage {
            max-width: 500px;
          }
            .download {
               width: 50%;
      }
        }

        @media (max-width: 425px) {
          .carImage {
            max-width: 350px;
          }
          .arrowLeft {
            left: -1.5rem;
          }
          .arrowRight {
            right: -1.5rem;
          }
            .download {
    width: 80%;
  }
        }

        @media (max-width: 375px) {
          .carImage {
            max-width: 260px;
          }
            .download {
    width: 90%;
  }
        }
      `}</style>
    </div>
  );
}
