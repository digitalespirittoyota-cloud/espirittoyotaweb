"use client";
import React from "react";

const CamrySafetyConnected: React.FC = () => {
  const handleInfoClick = (title: string) => {
    alert(`Info clicked for ${title}`);
  };

  return (
    <section style={styles.wrapper}>
      {/* LEFT CARD */}
      <div style={styles.originaldiv} >
        <div style={styles.card}>
        <img
          src="/models/camry/camry18.webp"
          alt="Safety"
          style={styles.image}
        />

        {/* <div style={styles.topLabel}>SAFETY</div> */}

        <div style={styles.bottomBar}>
          <span style={styles.bottomText}>LANE DEPARTURE ALERT</span>
          <button
            style={styles.infoBtn}
            onClick={() => handleInfoClick("Lane Departure Alert")}
          >
            Info
          </button>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div style={styles.card}>
        <img
          src="/models/camry/camry19.webp"
          alt="Connected Tech"
          style={styles.image}
        />

        {/* <div style={styles.topLabel}>CONNECTED TECH</div> */}

        <div style={styles.bottomBar}>
          <span style={styles.bottomText}>CONNECTED SERVICES</span>
          <button
            style={styles.infoBtn}
            onClick={() => handleInfoClick("Connected Services")}
          >
            Info
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CamrySafetyConnected;

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: "flex",
    gap: "24px",
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "20px",
    flexWrap: "wrap",
    backgroundColor:"#fff",
    color:"#000",
  },
 originaldiv:{
    maxWidth: "1100px",
    display: "flex",
    gap: "24px",
    margin: "0 auto",
    padding: "20px",
    flexWrap: "wrap",
 },
  card: {
    position: "relative",
    flex: "1 1 48%",
    overflow: "hidden",
    minHeight: "420px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  topLabel: {
    position: "absolute",
    top: "20px",
    right: "20px",
    border: "1px solid #fff",
    padding: "6px 14px",
    color: "#fff",
    fontSize: "14px",
    letterSpacing: "1px",
    background: "rgba(0,0,0,0.3)",
  },

  bottomBar: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    background: "rgba(160,160,160,0.9)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
  },

  bottomText: {
    color: "#fff",
    fontSize: "14px",
    fontStyle: "italic",
  },

  infoBtn: {
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    padding: "4px 12px",
    fontSize: "13px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};
