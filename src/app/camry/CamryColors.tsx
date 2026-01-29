
"use client";
import React, { useState, useEffect } from "react";

interface ColorOption {
  name: string;
  image: string;
  swatch: string;
}

const colors: ColorOption[] = [
  {
    name: "Attitude Black",
    image:
      "https://static3.toyotabharat.com/images/showroom/new-camry/attitude-black-1920x850.jpg",
    swatch: "#000000",
  },
  {
    name: "Cement Grey",
    image:
      "https://static3.toyotabharat.com/images/showroom/new-camry/cement-grey-1920x850.jpg",
    swatch: "#8f9396",
  },
  {
    name: "Dark Blue",
    image:
      "https://static3.toyotabharat.com/images/showroom/new-camry/dark-blue-1920x850.jpg",
    swatch: "#1f2a33",
  },
  {
    name: "Emotional Red",
    image:
      "https://static3.toyotabharat.com/images/showroom/new-camry/emotional-red-1920x850.jpg",
    swatch: "#7c1f25",
  },
  {
    name: "Platinum White ",
    image:
      "https://static3.toyotabharat.com/images/showroom/new-camry/platinum-white-1920x850.jpg",
    swatch: "#f2f2f0",
  },
  {
    name: "Precious Metal",
    image:
      "https://static3.toyotabharat.com/images/showroom/new-camry/precious-metal-1920x850.jpg",
    swatch: "#6d6f73",
  },
];

const CamryColors: React.FC = () => {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openDownload = () => {
    window.open(
      "https://www.toyotabharat.com/documents/brochures/e-brochure-camry-hybrid.pdf",
      "_blank"
    );
  };

  const openView = () => {
    window.open(
      "https://www.toyotabharat.com/documents/brochures/camry/view-brochure/index.html",
      "_blank"
    );
  };

  // Responsive styles
  const responsiveSwatchSize = windowWidth < 480 ? 24 : windowWidth < 768 ? 28 : 32;
  const responsiveButtonPadding = windowWidth < 480 ? "8px 16px" : "10px 24px";

  return (
    <section style={styles.wrapper}>
      {/* Car Image */}
      <img
        src={activeColor.image}
        alt={activeColor.name}
        style={{
          ...styles.carImage,
          maxHeight: windowWidth < 768 ? "400px" : "850px",
        }}
      />

      {/* Colors Section */}
      <div style={styles.bottomSection}>
        <h3 style={{ ...styles.colorsTitle, fontSize: windowWidth < 480 ? "1.2rem" : "1.4rem" }}>
          Colors
        </h3>
        <div style={styles.underline} />

        <div
          style={{
            ...styles.swatchRow,
            gap: windowWidth < 480 ? 10 : 14,
          }}
        >
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setActiveColor(color)}
              style={{
                ...styles.swatchButton,
                border:
                  activeColor.name === color.name
                    ? "2px solid #000"
                    : "1px solid #ccc",
              }}
            >
              <span
                style={{
                  ...styles.swatch,
                  width: responsiveSwatchSize,
                  height: responsiveSwatchSize,
                  backgroundColor: color.swatch,
                }}
              />
            </button>
          ))}
        </div>

        <p
          style={{
            ...styles.colorName,
            fontSize: windowWidth < 480 ? "0.9rem" : "1rem",
          }}
        >
          {activeColor.name}
        </p>

        {/* Buttons */}
        <div
          style={{
            ...styles.buttonRow,
            gap: windowWidth < 480 ? 10 : 16,
          }}
        >
          <button
            style={{ ...styles.outlineButton, padding: responsiveButtonPadding }}
            onClick={openDownload}
          >
            DOWNLOAD BROCHURE
          </button>
          <button
            style={{ ...styles.outlineButton, padding: responsiveButtonPadding }}
            onClick={openView}
          >
            VIEW BROCHURE
          </button>
        </div>
      </div>
    </section>
  );
};

export default CamryColors;

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    width: "100%",
    backgroundColor: "#fff",
    textAlign: "center",
    overflow: "hidden",
    color: "#000",
  },

  carImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },

  bottomSection: {
    padding: "40px 16px 60px",
  },

  colorsTitle: {
    fontWeight: 500,
    marginBottom: "10px",
  },

  underline: {
    width: "60px",
    height: "4px",
    backgroundColor: "#000",
    margin: "0 auto 30px",
    borderRadius: "2px",
  },

  swatchRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "14px",
  },

  swatchButton: {
    background: "transparent",
    borderRadius: "50%",
    padding: "4px",
    cursor: "pointer",
  },

  swatch: {
    borderRadius: "50%",
    display: "block",
  },

  colorName: {
    color: "#555",
    marginBottom: "28px",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  outlineButton: {
    border: "1px solid #6d6a6adf",
    backgroundColor: "transparent",
    fontSize: "0.9rem",
    letterSpacing: "1px",
    cursor: "pointer",
    borderRadius: "30px",
  },
};
