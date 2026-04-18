
"use client";
import React, { useState } from "react";

// Dual-tone color data
const dualToneColors = [
  {
    name: "Caffe White Dual Tone",
    img: "/models/ebella/ebella30.webp",
    colorCode: "#d9d9d9",
  },
  {
    name: "Sportin Red Dual Tone",
    img: "/models/ebella/ebella31.webp",
    colorCode: "#991b2f",
  },
  {
    name: "Land Breeze Green Dual Tone",
    img: "/models/ebella/ebella32.webp",
    colorCode: "#7a7c6b",
  },
  {
    name: "Enticing Silver Dual Tone",
    img: "/models/ebella/ebella33.webp",
    colorCode: "#9b9b9b",
  },
];

// Mono-tone color data
const monoToneColors = [
  {
    name: "Caffe White",
    img: "/models/ebella/ebella34.webp",
    colorCode: "#d9d9d9",
  },
  {
    name: "Bluish Black",
    img: "/models/ebella/ebella35.webp",
    colorCode: "#000000",
  },
  {
    name: "Gaming Gray",
    img: "/models/ebella/ebella36.webp",
    colorCode: "#3f403eeb",
  },
  {
    name: "Enticing Silver",
    img: "/models/ebella/ebella37.webp",
    colorCode: "#c0c0c0",
  },
  {
    name: "Sportin Red",
    img: "/models/ebella/ebella38.webp",
    colorCode: "#991b2f",
  },
];

const tabs = ["DUAL-TONE", "MONO-TONE"];

const ColorSelectionPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedColor, setSelectedColor] = useState(dualToneColors[0]);

  const currentColors = activeTab === "DUAL-TONE" ? dualToneColors : monoToneColors;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedColor(tab === "DUAL-TONE" ? dualToneColors[0] : monoToneColors[0]);
  };

  return (
    <div style={styles.container}>
      {/* Title Section */}
      <div style={styles.titleSection}>
        <h1 style={styles.title}>COLOURS</h1>
        <div style={styles.subtitleWrapper}>
          <p style={styles.subtitle}>
            A <span style={{ color: "#e10600" }}>PALETTE</span> THAT MAKES A STATEMENT
          </p>
          <div style={styles.angledLine}></div>
        </div>
      </div>


      {/* Car + Colors Section */}
      <div style={styles.carSection}>

        {/* LEFT – CAR IMAGE */}
        <div style={styles.carWrapper}>
          <img
            src={selectedColor.img}
            alt={selectedColor.name}
            style={styles.carImage}
          />
          <img
            src="https://static3.toyotabharat.com/images/showroom/a32/colors/img-bottom-line-circle-1016x328.svg"
            alt="background circles"
            style={styles.backgroundCircles}
          />
        </div>

        {/* RIGHT PANEL – TABS + COLORS */}
        <div style={styles.rightPanel}>

          {/* TABS */}
          <div style={styles.tabsWrapper}>
            {tabs.map((tab) => (
              <div
                key={tab}
                style={{
                  ...styles.tab,
                  ...(activeTab === tab
                    ? styles.tabActive
                    : styles.tabInactive),
                }}
                onClick={() => handleTabChange(tab)}
              >
                {tab.replace("-", " ")}
              </div>
            ))}
          </div>

          {/* COLOR LIST */}
          <div style={styles.colorPanel}>
            {currentColors.map((color) => (
              <div
                key={color.name}
                style={{
                  ...styles.colorItem,
                  background:
                    selectedColor.name === color.name
                      ? "#111"
                      : "#e0e0e0",
                  color:
                    selectedColor.name === color.name
                      ? "#fff"
                      : "#000",
                }}
                onClick={() => setSelectedColor(color)}
              >
                <div
                  style={{
                    ...styles.colorBox,
                    backgroundColor: color.colorCode,
                    border:
                      selectedColor.name === color.name
                        ? "2px solid #fff"
                        : "1px solid #bbb",
                  }}
                />
                <span style={styles.colorName}>{color.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

// Helper to determine text color (white or black) based on background
function getContrastYIQ(hexcolor: string) {
  let hex = hexcolor.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000" : "#fff";
}

// CSS styles
const styles: any = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
    maxWidth: "1530px",
    margin: "0 auto",
    backgroundColor: "#fff",
    color: "#000",
  },
  titleSection: {
    marginBottom: "30px",
    position: "relative",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#e10600",
    margin: 0,
  },
  subtitleWrapper: {
    position: "relative",
    display: "inline-block",
    marginTop: "10px",
  },
  subtitle: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    margin: 0,
  },
  angledLine: {
    position: "absolute",
    width: "70px",
    height: "5px",
    backgroundColor: "#e10600",
    bottom: "-12px",
    left: 0,
    transform: "rotate(-28deg)",
    transformOrigin: "left",
  },
  rightPanel: {
    width: "260px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  tabsWrapper: {
    display: "flex",
    background: "#f2f2f2",
    padding: "6px",
    borderRadius: "8px",
    gap: "6px",
  },

  tab: {
    flex: 1,
    textAlign: "center",
    padding: "10px 0",
    fontSize: "0.9rem",
    fontWeight: 600,
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  tabActive: {
    background: "linear-gradient(135deg, #2b0f0f, #5a1a1a)",
    color: "#fff",
  },

  tabInactive: {
    background: "#fff",
    color: "#000",
    border: "1px solid #ddd",
  },

  carSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "40px",
  },
  carWrapper: {
    flex: 1,
    position: "relative",
    minWidth: "300px",
    textAlign: "center",
  },
  carImage: {
    maxWidth: "100%",
    height: "auto",
    position: "relative",
    zIndex: 2,
  },
  backgroundCircles: {
    position: "absolute",
    bottom: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "85%",
    zIndex: 1,
    pointerEvents: "none",
  },
  colorPanel: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  colorItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  colorBox: {
    width: "46px",
    height: "46px",
    borderRadius: "6px",
    flexShrink: 0,
  },

  colorName: {
    fontSize: "0.9rem",
    fontWeight: 500,
  },

  // colorBox: {
  //   width: "55px",
  //   height: "55px",
  //   borderRadius: "8px",
  //   cursor: "pointer",
  //   transition: "all 0.3s ease",
  //   flexShrink: 0,
  // },


  // Responsive
  "@media (max-width: 768px)": {
    container: { padding: "20px 15px" },
    title: { fontSize: "2rem" },
    subtitle: { fontSize: "1rem" },
    carSection: {
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
    },
    colorPanel: {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    colorItem: {
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      width: "80px",
    },
    colorBox: {
      width: "50px",
      height: "50px",
    },
    colorName: {
      fontSize: "0.75rem",
      textAlign: "center",
    },
  },
};

export default ColorSelectionPage;
