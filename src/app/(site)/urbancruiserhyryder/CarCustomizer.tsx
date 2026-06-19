// "use client";
// import React, { useState } from "react";

// /* ===================== IMAGES ===================== */
// const MONOTONE_COLORS = [
//   { name: "Monotone Cafe White", url: "/models/urbancruiserhyryder/cafe-white.webp" },
//   { name: "Monotone Enticing Silver", url: "/models/urbancruiserhyryder/enticing-silver.webp" },
//   { name: "Monotone Gaming Grey", url: "/models/urbancruiserhyryder/gaming-grey.webp" },
//   { name: "Monotone Sportin Red", url: "/models/urbancruiserhyryder/sporting-red.webp" },
//   { name: "Monotone Midnight Black", url: "/models/urbancruiserhyryder/midnight-black.webp" },
//   { name: "Monotone Cave Black", url: "/models/urbancruiserhyryder/cave-black.webp" },
//   { name: "Monotone Speedy Blue", url: "/models/urbancruiserhyryder/speedy-blue.webp" },
// ];

// const DUALTONE_COLORS = [
//   { name: "Dualtone Cafe White X Midnight Black", url: "/models/urbancruiserhyryder/cafe-white-midnight-black.webp" },
//   { name: "Dualtone Sportin Red X Midnight Black", url: "/models/urbancruiserhyryder/sporting-red-midnight-black.webp" },
//   { name: "Dualtone Enticing Silver X Midnight Black", url: "/models/urbancruiserhyryder/enticing-silver-midnight.webp" },
//   { name: "Dualtone Speedy Blue X Midnight Black", url: "/models/urbancruiserhyryder/speedy-blue-midnight-black.webp" },
// ];

// /* ===================== COMPONENT ===================== */
// const CarCustomizer: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"Monotone" | "Dualtone">("Monotone");
//   const [selectedColor, setSelectedColor] = useState(MONOTONE_COLORS[0].url);

//   const colors = activeTab === "Monotone" ? MONOTONE_COLORS : DUALTONE_COLORS;

//   return (
//     <div style={styles.container}>
//       {/* Tab Switch */}
//       <div style={styles.tabContainer}>
//         <h1 style={{fontSize:"26px",fontStyle:"italic",fontWeight:"900"}}>HY ON CUSTOMISATION</h1>
//         <span  style={{display:"flex",gap:"20px",}}>
//             <button
//           onClick={() => { setActiveTab("Monotone"); setSelectedColor(MONOTONE_COLORS[0].url); }}
//           style={{ ...styles.tab, backgroundColor: activeTab === "Monotone" ? "#cce3e6d0" : "#fff" }}
//         >
//           Monotone
//         </button>
//         <button
//           onClick={() => { setActiveTab("Dualtone"); setSelectedColor(DUALTONE_COLORS[0].url); }}
//           style={{ ...styles.tab, backgroundColor: activeTab === "Dualtone" ? "#cce3e6d0" : "#fff" }}
//         >
//           Dualtone
//         </button>
//         </span>
//       </div>

//       {/* Car Image */}
//       <div style={styles.imageContainer}>
//         <img src={selectedColor} alt="Car" style={styles.carImage} />
//       </div>

//       {/* Color Options */}
//       <div style={styles.colorsContainer}>
//         {colors.map((color) => (
//           <div key={color.name} style={styles.colorOption} onClick={() => setSelectedColor(color.url)}>
//             <div style={{ ...styles.colorCircle, backgroundColor: color.name.includes("Black") ? "#000" : color.name.includes("Red") ? "#A00" : color.name.includes("Blue") ? "#0077B6" : color.name.includes("Silver") ? "#C0C0C0" : "#FFF" }} />
//             <span style={styles.colorLabel}>{color.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* Download & Specs Buttons */}
//       <div style={styles.buttonContainer}>
//         <button style={{ ...styles.actionButton, backgroundColor: "#00AEEF" }}>Download Brochure</button>
//         <button style={{ ...styles.actionButton, backgroundColor: "#0056B3" }}>Specifications</button>
//       </div>
//     </div>
//   );
// };

// /* ===================== STYLES ===================== */
// const styles: Record<string, React.CSSProperties> = {
//   container: {
//     maxWidth: "1600px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor:"#fff",
//     color:"black",
//   },
//   tabContainer: {
//   display: "flex",
//   flexDirection:"column",
//   gap: "30px",
//   marginBottom: "20px",
//   borderBottom:"1px solid #bbb6b69e"
// //   justifyContent: "center", // <-- this centers the buttons
// },
 
//   tab: {
//     padding: "10px 20px",
//     // backgroundColor:"#cce3e6d0",
//     // border: "1px solid #ccc",
//     cursor: "pointer",
//     borderRadius: "4px",
//   },
//   imageContainer: {
//   display: "flex",           // use flex to center
//   justifyContent: "center",  // horizontal center
//   alignItems: "center",      // vertical center (optional)
//   marginBottom: "20px",
// },
// carImage: {
//   width: "100%",          // responsive
//   maxWidth: "1000px",     // increase max width
//   height: "auto",         // keep aspect ratio
//   borderRadius: "8px",
// },


//   colorsContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: "15px",
//     marginBottom: "20px",
//     // borderTop:"1px solid #a8a4a4df",
//   },
//   colorOption: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     cursor: "pointer",
//     minWidth: "80px",
//   },
//   colorCircle: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     marginBottom: "5px",
//     border: "1px solid #ccc",
//   },
//   colorLabel: {
//     fontSize: "12px",
//     textAlign: "center",
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//   },
//   actionButton: {
//     padding: "10px 25px",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default CarCustomizer;

















"use client";
import React, { useState } from "react";

/* ===================== IMAGES ===================== */
const MONOTONE_COLORS = [
  { name: "Monotone Cafe White", url: "/models/urbancruiserhyryder/cafe-white.webp" },
  { name: "Monotone Enticing Silver", url: "/models/urbancruiserhyryder/enticing-silver.webp" },
  { name: "Monotone Gaming Grey", url: "/models/urbancruiserhyryder/gaming-grey.webp" },
  { name: "Monotone Sportin Red", url: "/models/urbancruiserhyryder/sporting-red.webp" },
  { name: "Monotone Midnight Black", url: "/models/urbancruiserhyryder/midnight-black.webp" },
  { name: "Monotone Cave Black", url: "/models/urbancruiserhyryder/cave-black.webp" },
  { name: "Monotone Speedy Blue", url: "/models/urbancruiserhyryder/speedy-blue.webp" },
];

const DUALTONE_COLORS = [
   { name: "Monotone Cafe White", url: "/models/urbancruiserhyryder/cafe-white.webp" },
  { name: "Monotone Enticing Silver", url: "/models/urbancruiserhyryder/enticing-silver.webp" },
  { name: "Monotone Gaming Grey", url: "/models/urbancruiserhyryder/gaming-grey.webp" },
  { name: "Monotone Sportin Red", url: "/models/urbancruiserhyryder/sporting-red.webp" },
  { name: "Monotone Midnight Black", url: "/models/urbancruiserhyryder/midnight-black.webp" },
  { name: "Monotone Cave Black", url: "/models/urbancruiserhyryder/cave-black.webp" },
  { name: "Monotone Speedy Blue", url: "/models/urbancruiserhyryder/speedy-blue.webp" },
  // { name: "Dualtone Cafe White X Midnight Black", url: "/models/urbancruiserhyryder/cafe-white-midnight-black.webp" },
  // { name: "Dualtone Sportin Red X Midnight Black", url: "/models/urbancruiserhyryder/sporting-red-midnight-black.webp" },
  // { name: "Dualtone Enticing Silver X Midnight Black", url: "/models/urbancruiserhyryder/enticing-silver-midnight.webp" },
  // { name: "Dualtone Speedy Blue X Midnight Black", url: "/models/urbancruiserhyryder/speedy-blue-midnight-black.webp" },
];

/* ===================== COLOR MAP ===================== */
const getCircleColor = (name: string): string => {
  if (name.includes("Cave Black")) return "#1a1a1a";
  if (name.includes("Midnight Black")) return "#2b2b2b";
  if (name.includes("Gaming Grey")) return "#6b6b6b";
  if (name.includes("Enticing Silver")) return "#C0C0C0";
  if (name.includes("Sportin Red")) return "#7a0e0e";
  if (name.includes("Speedy Blue")) return "#0077B6";
  if (name.includes("Cafe White")) return "#f0ede8";
  return "#ccc";
};

/* ===================== COMPONENT ===================== */
const CarCustomizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Monotone" | "Dualtone">("Monotone");
  const [selectedColor, setSelectedColor] = useState(MONOTONE_COLORS[0].url);

  const colors = activeTab === "Monotone" ? MONOTONE_COLORS : DUALTONE_COLORS;

  return (
    <div style={styles.container}>
      {/* Tab Switch */}
      <div style={styles.tabContainer}>
        <h1 style={{ fontSize: "26px", fontStyle: "italic", fontWeight: "900" }}>
          HY ON CUSTOMISATION
        </h1>
        <span style={{ display: "flex", gap: "20px" }}>
          <button
            onClick={() => {
              setActiveTab("Monotone");
              setSelectedColor(MONOTONE_COLORS[0].url);
            }}
            style={{
              ...styles.tab,
              backgroundColor: activeTab === "Monotone" ? "#cce3e6d0" : "#fff",
            }}
          >
            Monotone
          </button>
          <button
            onClick={() => {
              setActiveTab("Dualtone");
              setSelectedColor(DUALTONE_COLORS[0].url);
            }}
            style={{
              ...styles.tab,
              backgroundColor: activeTab === "Dualtone" ? "#cce3e6d0" : "#fff",
            }}
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
        {colors.map((color) => {
          const parts = color.name.split(" ");
          const prefix = parts[0]; // "Monotone" or "Dualtone"
          const colorName = parts.slice(1).join(" ");

          return (
            <div
              key={color.name}
              style={styles.colorOption}
              onClick={() => setSelectedColor(color.url)}
            >
              <div
                style={{
                  ...styles.colorCircle,
                  backgroundColor: getCircleColor(color.name),
                }}
              />
              <span style={styles.colorLabel}>{prefix}</span>
              <span style={styles.colorLabel}>{colorName}</span>
            </div>
          );
        })}
      </div>

      {/* Download & Specs Buttons */}
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.actionButton, backgroundColor: "#00AEEF" }}>
          DOWNLOAD BROCHURE
        </button>
        <button style={{ ...styles.actionButton, backgroundColor: "#1a4fa0" }}>
          SPECIFICATIONS
        </button>
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
    backgroundColor: "#fff",
    color: "black",
  },
  tabContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginBottom: "20px",
    borderBottom: "1px solid #bbb6b69e",
  },
  tab: {
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  carImage: {
    width: "100%",
    maxWidth: "1000px",
    height: "auto",
    borderRadius: "8px",
  },
  colorsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
    marginBottom: "30px",
    paddingTop: "16px",
    borderTop: "1px solid #e0e0e0",
  },
  colorOption: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    minWidth: "90px",
    gap: "4px",
  },
  colorCircle: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    marginBottom: "6px",
    border: "2px solid #ddd",
    boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
  },
  colorLabel: {
    fontSize: "12px",
    textAlign: "center",
    color: "#333",
    lineHeight: "1.3",
    fontWeight: "500",
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    gap: "0px",
  },
  actionButton: {
    flex: 1,
    padding: "16px 0",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
  },
};

export default CarCustomizer;