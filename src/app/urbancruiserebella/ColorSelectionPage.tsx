
// "use client";
// import React, { useState } from "react";

// // Dual-tone color data
// const dualToneColors = [
//   {
//     name: "Caffe White Dual Tone",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Artic-White%20DT-1050x350.png",
//     colorCode: "#d9d9d9",
//   },
//   {
//     name: "Sportin Red Dual Tone",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Opulent-Red-DT-1050x350.png",
//     colorCode: "#991b2f",
//   },
//   {
//     name: "Land Breeze Green Dual Tone",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Landbreeze-Green-DT-1050x350.png",
//     colorCode: "#7a7c6b",
//   },
//   {
//     name: "Enticing Silver Dual Tone",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Splendid-Silver-DT-1050x350.png",
//     colorCode: "#9b9b9b",
//   },
// ];

// // Mono-tone color data
// const monoToneColors = [
//   {
//     name: "Caffe White",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Artic-White-MT-1050x350.png",
//     colorCode: "#ffffff",
//   },
//   {
//     name: "Bluish Black",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Bluish-Black-MT-1050x350.png",
//     colorCode: "#000000",
//   },
//   {
//     name: "Gaming Gray",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Grandeur-Grey-MT-1050x350.png",
//     colorCode: "#3f403eeb",
//   },
//   {
//     name: "Enticing Silver",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Splendid-Silver-MT-1050x350.png",
//     colorCode: "#c0c0c0",
//   },
//   {
//     name: "Sportin Red",
//     img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Opulent-Red-MT-1050x350.png",
//     colorCode: "#991b2f",
//   },
// ];

// const tabs = ["DUAL-TONE", "MONO-TONE"];

// const ColorSelectionPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [selectedColor, setSelectedColor] = useState(dualToneColors[0]);

//   const currentColors = activeTab === "DUAL-TONE" ? dualToneColors : monoToneColors;

//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     setSelectedColor(tab === "DUAL-TONE" ? dualToneColors[0] : monoToneColors[0]);
//   };

//   return (
//     <div style={styles.container}>
//       {/* Title Section */}
//       <div style={styles.titleSection}>
//         <h1 style={styles.title}>COLOURS</h1>
//         <div style={styles.subtitleWrapper}>
//           <p style={styles.subtitle}>
//             A <span style={{ color: "#e10600" }}>PALETTE</span> THAT MAKES A STATEMENT
//           </p>
//           <div style={styles.angledLine}></div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div style={styles.tabs}>
//         {tabs.map((tab) => (
//           <div
//             key={tab}
//             style={{
//               ...styles.tab,
//               background: activeTab === tab
//                 ? "linear-gradient(90deg, #e10600 0%, #ff4d4d 100%)"
//                 : "#f5f5f5",
//               color: activeTab === tab ? "#fff" : "#000",
//             }}
//             onClick={() => handleTabChange(tab)}
//           >
//             {tab}
//           </div>
//         ))}
//       </div>

//       {/* Car + Colors Section */}
//       <div style={styles.carSection}>
//         <div style={styles.carWrapper}>
//           <img
//             src={selectedColor.img}
//             alt={selectedColor.name}
//             style={styles.carImage}
//           />
//           <img
//             src="https://static3.toyotabharat.com/images/showroom/a32/colors/img-bottom-line-circle-1016x328.svg"
//             alt="background circles"
//             style={styles.backgroundCircles}
//           />
//         </div>

//         {/* Color Panel */}
//         <div style={styles.colorPanel}>
//           {currentColors.map((color) => (
//             <div key={color.name} style={styles.colorItem}>
//               <div
//                 onClick={() => setSelectedColor(color)}
//                 style={{
//                   ...styles.colorBox,
//                   backgroundColor: color.colorCode,
//                   border:
//                     selectedColor.name === color.name
//                       ? "3px solid #e10600"
//                       : "2px solid #d0d0d0",
//                 }}
//                 title={color.name}
//               />
//               <span style={styles.colorName}>{color.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // CSS styles
// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     padding: "40px 20px",
//     maxWidth: "1530px",
//     margin: "0 auto",
//     backgroundColor: "#fff",
//     color: "#000",
//   },
//   titleSection: {
//     marginBottom: "30px",
//     position: "relative",
//   },
//   title: {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     color: "#e10600",
//     margin: 0,
//   },
//   subtitleWrapper: {
//     position: "relative",
//     display: "inline-block",
//     marginTop: "10px",
//   },
//   subtitle: {
//     fontSize: "1.3rem",
//     fontStyle: "italic",
//     margin: 0,
//   },
//   angledLine: {
//     position: "absolute",
//     width: "70px",
//     height: "5px",
//     backgroundColor: "#e10600",
//     bottom: "-12px",
//     left: 0,
//     transform: "rotate(-28deg)",
//     transformOrigin: "left",
//   },
//   tabs: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "30px",
//   },
//   tab: {
//     padding: "10px 25px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     transition: "all 0.3s ease",
//     userSelect: "none",
//   },
//   carSection: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     flexWrap: "wrap",
//     gap: "40px",
//   },
//   carWrapper: {
//     flex: 1,
//     position: "relative",
//     minWidth: "300px",
//     textAlign: "center",
//   },
//   carImage: {
//     maxWidth: "100%",
//     height: "auto",
//     position: "relative",
//     zIndex: 2,
//   },
//   backgroundCircles: {
//     position: "absolute",
//     bottom: "-30px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "85%",
//     zIndex: 1,
//     pointerEvents: "none",
//   },
//   colorPanel: {
//     width: "200px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//     marginTop: "20px",
    
//   },
//   colorItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     backgroundColor:"#6b6767e5",
//     color:"#fff",
//   },
//   colorBox: {
//     width: "55px",
//     height: "55px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     flexShrink: 0,
    
//   },
//   colorName: {
//     fontSize: "0.9rem",
//     fontWeight: "500",
//   },

//   // Responsive
//   "@media (max-width: 768px)": {
//     container: { padding: "20px 15px" },
//     title: { fontSize: "2rem" },
//     subtitle: { fontSize: "1rem" },
//     carSection: {
//       flexDirection: "column",
//       alignItems: "center",
//       gap: "30px",
//     },
//     colorPanel: {
//       width: "100%",
//       flexDirection: "row",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "20px",
//     },
//     colorItem: {
//       flexDirection: "column",
//       alignItems: "center",
//       gap: "8px",
//       width: "80px",
//     },
//     colorBox: {
//       width: "50px",
//       height: "50px",
//     },
//     colorName: {
//       fontSize: "0.75rem",
//       textAlign: "center",
//     },
//   },
// };

// export default ColorSelectionPage;


























"use client";
import React, { useState } from "react";

// Dual-tone color data
const dualToneColors = [
  {
    name: "Caffe White Dual Tone",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Artic-White%20DT-1050x350.png",
    colorCode: "#d9d9d9",
  },
  {
    name: "Sportin Red Dual Tone",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Opulent-Red-DT-1050x350.png",
    colorCode: "#991b2f",
  },
  {
    name: "Land Breeze Green Dual Tone",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Landbreeze-Green-DT-1050x350.png",
    colorCode: "#7a7c6b",
  },
  {
    name: "Enticing Silver Dual Tone",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Splendid-Silver-DT-1050x350.png",
    colorCode: "#9b9b9b",
  },
];

// Mono-tone color data
const monoToneColors = [
  {
    name: "Caffe White",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Artic-White-MT-1050x350.png",
    colorCode: "#d9d9d9",
  },
  {
    name: "Bluish Black",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Bluish-Black-MT-1050x350.png",
    colorCode: "#000000",
  },
  {
    name: "Gaming Gray",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Grandeur-Grey-MT-1050x350.png",
    colorCode: "#3f403eeb",
  },
  {
    name: "Enticing Silver",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Splendid-Silver-MT-1050x350.png",
    colorCode: "#c0c0c0",
  },
  {
    name: "Sportin Red",
    img: "https://static3.toyotabharat.com/images/showroom/a32/colors/Opulent-Red-MT-1050x350.png",
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

      {/* Tabs */}
      <div style={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab}
            style={{
              ...styles.tab,
              background: activeTab === tab
                ? "linear-gradient(90deg, #e10600 0%, #ff4d4d 100%)"
                : "#f5f5f5",
              color: activeTab === tab ? "#fff" : "#000",
            }}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Car + Colors Section */}
      <div style={styles.carSection}>
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

        {/* Color Panel */}
        <div style={styles.colorPanel}>
          {currentColors.map((color) => {
            const textColor = getContrastYIQ(color.colorCode);

            return (
              <div
                key={color.name}
                style={{
                  ...styles.colorItem,
                  backgroundColor: color.colorCode, // dynamic background
                  color: textColor, // dynamic text color
                }}
              >
                <div
                  onClick={() => setSelectedColor(color)}
                  style={{
                    ...styles.colorBox,
                    backgroundColor: color.colorCode,
                    border:
                      selectedColor.name === color.name
                        ? "3px solid #d2cccc"
                        : "2px solid #d0d0d0",
                  }}
                  title={color.name}
                />
                <span style={styles.colorName}>{color.name}</span>
              </div>
            );
          })}
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
const styles: { [key: string]: React.CSSProperties } = {
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
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "30px",
  },
  tab: {
    padding: "10px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    userSelect: "none",
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
    width: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  colorItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "5px 10px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  },
  colorBox: {
    width: "55px",
    height: "55px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    flexShrink: 0,
  },
  colorName: {
    fontSize: "0.9rem",
    fontWeight: "500",
  },

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
