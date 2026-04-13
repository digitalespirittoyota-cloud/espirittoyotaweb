"use client";
import React, { useState, useEffect } from "react";

const TNGASection: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive adjustments
  const isMobile = windowWidth < 768;
  const logoSize = isMobile ? 250 : 500; // increased desktop logo size
  const textWidth = isMobile ? "100%" : "400px"; // narrower text content
  const padding = isMobile ? "40px 16px" : "80px 20px"; // more padding for bigger image

  return (
    <section
      style={{
        ...styles.wrapper,
        padding,
      }}
    >
      <div
        style={{
          ...styles.container,
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left Logo */}
        <div style={styles.logoWrapper}>
          <img
            src="/models/camry/camry26.webp"
            alt="TNGA Logo"
            style={{
              width: logoSize,
              height: "auto",
              maxWidth: "90%", // ensures it doesn't overflow on small screens
            }}
          />
        </div>

        {/* Right Text */}
        <div
          style={{
            ...styles.textWrapper,
            width: textWidth,
            marginTop: isMobile ? "20px" : 0,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <p style={styles.text}>
            The Toyota New Global Architecture (TNGA) is our new car-making
            philosophy and the foundation for all our future powertrain and
            vehicle development.
          </p>

          <p style={styles.text}>
            It marks a revolution in the way Toyota is designing, engineering,
            and manufacturing vehicles.
          </p>

          <p style={styles.text}>
            With shared high-performance core parts and components, we focus on
            elevating the unique appeal of each model and delivering vehicles
            that are more intuitive to drive.
          </p>

          <p style={styles.text}>
            The three pillars of TNGA are: better agility, better stability,
            and better visibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TNGASection;

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  },

  container: {
    display: "flex",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },

  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  text: {
    fontSize: "1rem",
    color: "#111",
    lineHeight: "1.75",
    marginBottom: "18px",
  },
};
