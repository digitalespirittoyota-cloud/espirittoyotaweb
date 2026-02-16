"use client";
import React, { useState } from "react";

/* ===================== IMAGES ===================== */
const MONOTONE_COLORS = [
  { name: "Cafe White", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/cafe-white.png" },
  { name: "Enticing Silver", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/enticing-silver.png" },
  { name: "Gaming Grey", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/gaming-grey.png" },
  { name: "Sportin Red", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/sporting-red.png" },
  { name: "Midnight Black", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/midnight-black.png" },
  { name: "Cave Black", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/cave-black.png" },
  { name: "Speedy Blue", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/speedy-blue.png" },
];

const DUALTONE_COLORS = [
  { name: "Cafe White X Midnight Black", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/cafe-white.png" },
  { name: "Sportin Red X Midnight Black", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/sporting-red.png" },
  { name: "Enticing Silver X Midnight Black", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/enticing-silver.png" },
  { name: "Speedy Blue X Midnight Black", url: "https://static3.toyotabharat.com/images/showroom/urbancruiser-hyryder/colors/speedy-blue.png" },
];

/* ===================== COMPONENT ===================== */
const CarCustomizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Monotone" | "Dualtone">("Monotone");
  const [selectedColor, setSelectedColor] = useState(MONOTONE_COLORS[0].url);

  const colors = activeTab === "Monotone" ? MONOTONE_COLORS : DUALTONE_COLORS;

  return (
    <div style={styles.container}>
      {/* Tab Switch */}
      <div style={styles.tabContainer}>
        <h1 style={{fontSize:"26px",fontStyle:"italic",fontWeight:"900"}}>HY ON CUSTOMISATION</h1>
        <span  style={{display:"flex",gap:"20px",}}>
            <button
          onClick={() => { setActiveTab("Monotone"); setSelectedColor(MONOTONE_COLORS[0].url); }}
          style={{ ...styles.tab, backgroundColor: activeTab === "Monotone" ? "#cce3e6d0" : "#fff" }}
        >
          Monotone
        </button>
        <button
          onClick={() => { setActiveTab("Dualtone"); setSelectedColor(DUALTONE_COLORS[0].url); }}
          style={{ ...styles.tab, backgroundColor: activeTab === "Dualtone" ? "#cce3e6d0" : "#fff" }}
        >
          Dualtone
        </button>
        </span>
      </div>

      {/* Car Image */}
      <div style={styles.imageContainer}>
        <img src={selectedColor} alt="Car" style={styles.carImage} />
      </div>

      {/* Color Options */}
      <div style={styles.colorsContainer}>
        {colors.map((color) => (
          <div key={color.name} style={styles.colorOption} onClick={() => setSelectedColor(color.url)}>
            <div style={{ ...styles.colorCircle, backgroundColor: color.name.includes("Black") ? "#000" : color.name.includes("Red") ? "#A00" : color.name.includes("Blue") ? "#0077B6" : color.name.includes("Silver") ? "#C0C0C0" : "#FFF" }} />
            <span style={styles.colorLabel}>{color.name}</span>
          </div>
        ))}
      </div>

      {/* Download & Specs Buttons */}
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.actionButton, backgroundColor: "#00AEEF" }}>Download Brochure</button>
        <button style={{ ...styles.actionButton, backgroundColor: "#0056B3" }}>Specifications</button>
      </div>
    </div>
  );
};

/* ===================== STYLES ===================== */
const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor:"#fff",
    color:"black",
  },
  tabContainer: {
  display: "flex",
  flexDirection:"column",
  gap: "30px",
  marginBottom: "20px",
  borderBottom:"1px solid #bbb6b69e"
//   justifyContent: "center", // <-- this centers the buttons
},
 
  tab: {
    padding: "10px 20px",
    // backgroundColor:"#cce3e6d0",
    // border: "1px solid #ccc",
    cursor: "pointer",
    borderRadius: "4px",
  },
  imageContainer: {
  display: "flex",           // use flex to center
  justifyContent: "center",  // horizontal center
  alignItems: "center",      // vertical center (optional)
  marginBottom: "20px",
},
carImage: {
  width: "100%",          // responsive
  maxWidth: "1000px",     // increase max width
  height: "auto",         // keep aspect ratio
  borderRadius: "8px",
},


  colorsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
    // borderTop:"1px solid #a8a4a4df",
  },
  colorOption: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    minWidth: "80px",
  },
  colorCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginBottom: "5px",
    border: "1px solid #ccc",
  },
  colorLabel: {
    fontSize: "12px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  actionButton: {
    padding: "10px 25px",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CarCustomizer;
