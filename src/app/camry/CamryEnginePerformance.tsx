"use client";
import React, { useState } from "react";
import { BsJustify } from "react-icons/bs";

const CamryEnginePerformance = () => {
  const [activeTab, setActiveTab] = useState<"engine" | "performance">("engine");

  return (
    <section style={styles.wrapper}>
      {/* Heading */}
      <div style={styles.headingWrapper}>
  <img
    src="/models/camry/qoate-1.webp"
    alt="quote-left"
    style={styles.quoteLeft}
  />

  <div>
    <p style={styles.presenting}>DISCOVER THE NEW</p>
    <h2 style={styles.elegant}>5TH GEN HYBRID ENGINE</h2>
  </div>

  <img
    src="/models/camry/qoate-2.webp"
    alt="quote-right"
    style={styles.quoteRight}
  />
</div>


      {/* Tabs */}
      <div style={styles.tabContainer}>
        <button
          onClick={() => setActiveTab("engine")}
          style={{
            ...styles.tab,
            ...(activeTab === "engine" ? styles.activeTab : {}),
          }}
        >
          ENGINE
        </button>

        <button
          onClick={() => setActiveTab("performance")}
          style={{
            ...styles.tab,
            ...(activeTab === "performance" ? styles.activeTab : {}),
          }}
        >
          PERFORMANCE
        </button>
      </div>

      {/* Description */}
      {activeTab === "engine" && (
        <p style={styles.description}>
          The Toyota Camry features a 2.5L Dynamic Force Engine with 5th Gen Hybrid
          Technology and a high-capacity lithium-ion battery. It delivers 221 Nm
          of torque at 3200 rpm, 25.49 km/l* fuel efficiency, and smooth
          acceleration with an advanced e-CVT Transmission across Sport, Eco,
          and Normal modes.
        </p>
      )}

      {activeTab === "performance" && (
        <p style={styles.description}>
          Enjoy effortless power and precision with MacPherson strut front and
          multi-link rear suspension, offering a balanced, comfortable ride and
          dynamic responsiveness for every journey.
        </p>
      )}

      {/* Content */}
      {activeTab === "engine" ? (
        <div style={styles.engineGrid}>
          {/* Left */}
          <div >
            <img
              src="/models/camry/camry4.webp"
              style={styles.engineImage}
              alt="Camry Engine"
            />

            <div style={styles.infoBox}>221 NM OF TORQUE AT 3200 RPM</div>
            <div style={styles.infoBox}>25.49 KM/L* FUEL EFFICIENCY</div>
            <div style={styles.infoBox}>
              E-CVT TRANSMISSION WITH SPORT, ECO AND NORMAL MODES
            </div>
          </div>

          {/* Right */}
          <img
            src="/models/camry/camry5.webp"
            style={styles.engineRightImage}
            alt="Engine Detail"
          />
        </div>
      ) : (
        <div style={styles.performanceSection}>
          <img
            src="/models/camry/performance-1.webp"
            style={styles.performanceBanner}
            alt="Performance Banner"
          />

          <div style={styles.thumbGrid} >
            <img
              src="/models/camry/performance-2.webp"
              style={styles.thumb}
              alt=""
            />
            <img
              src="/models/camry/performance-3.webp"
              style={styles.thumb}
              alt=""
            />
            <img
              src="/models/camry/performance-4.webp"
              style={styles.thumb}
              alt=""
            />
          </div>
        </div>
      )}
    </section>
  );
};
const styles: any = {
  wrapper: {
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "40px 16px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff", // white background
  color: "#000",           // black text
  borderBottom: "1px solid #70707038",
  paddingBottom: "40px",
  },

  headingWrapper: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  marginBottom: "30px",
},

presenting: {
  fontSize: "1.1rem",
  fontWeight: 100,
  textTransform: "uppercase",
  letterSpacing: "5px",
  lineHeight: "25px",
  position: "relative",
  width: "fit-content",
  marginLeft: "-10%",
},


elegant: {
  display: "block",
  fontSize: "1.5em",
  marginBlockStart: "0.50em",
  marginBlockEnd: "0.83em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
//   fontWeight: "bold",
},


quoteLeft: {
  width: "15px",
  height: "27px",
  transform: "translateY(-50px)",
},

quoteRight: {
  width: "15px",
  height: "27px",
  transform: "translateY(30px)",
},


  tabContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },

  tab: {
    padding: "10px 40px",
    border: "1px solid #000",
    background: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    letterSpacing: "1px",
  },

  activeTab: {
    background: "#e7e2e2a7",
    color: "#000",
  },

  description: {
    maxWidth: "1050px",
    margin: "0 auto 40px",
    textAlign: "center",          // center text
    padding: "0 0 30px 0",        // padding bottom 30px
    fontSize: "18px",             // font size 18px
    fontFamily: "'ToyotaTypeLight', Arial, sans-serif", // ToyotaTypeLight font
    lineHeight: "1.6",
    color: "#333",
},

 
  /* ENGINE */
engineGrid: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  alignItems: "center",
  width: "70%",        // 👈 SAME as performanceSection content
  margin: "0 auto",   // 👈 center in main wrapper
},



  engineImage: {
    width: "100%",
    marginBottom: "20px",
  },

 engineRightImage: {
  width: "70%",
  margin: "0 auto",   // 👈 center inside its grid column
  display: "block",
},


  infoBox: {
    border: "1px solid #ccc",
    padding: "14px",
    marginBottom: "12px",
    fontSize: "14px",
  },

  /* PERFORMANCE */
/* PERFORMANCE */
performanceSection: {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // centers everything
},

performanceBanner: {
  width: "70%",        // decrease banner size (adjust 50–65 as you like)
  marginBottom: "25px",
},

thumbGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyItems: "center", // center thumbnails in each column
  width: "70%",
  gap:"15px"
},

thumb: {
  width: "100%",       // decrease thumbnail size
},


  /* RESPONSIVE */
  "@media(maxWidth: 768px)": {
    engineGrid: {
      gridTemplateColumns: "1fr",
    },
    thumbGrid: {
      gridTemplateColumns: "1fr",
    },
  },
};


export default CamryEnginePerformance;
