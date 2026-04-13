"use client";
import React, { useState } from "react";

const safetyFeatures = [
  {
    title: "Lane Trace Assist",
    description:
      "Activates a host of sensors and cameras to keep your car centred in your lane.",
    image: "/models/innovahycross/hycross12.webp",
  },
  {
    title: "Dynamic Radar Cruise Control",
    description:
      "Cruise to every destination you want to go and enjoy the journey to the fullest.",
    image: "/models/innovahycross/hycross13.webp",
  },
  {
    title: "First-in-Segment Rear Cross Traffic Alert (RCTA)",
    description:
      "Alerts you if a vehicle is approaching from the left or right when you are reversing the car.",
    note: "*The driver is always responsible for paying attention to the vehicle surroundings & driving safely as there are limitations to degree of recognition & controlling performance that this system can provide.",
    image: "/models/innovahycross/hycross14.webp",
  },
];

const SafetyFeatures: React.FC = () => {
  const [isHover, setIsHover] = useState(false);

  const openToyotaSafetyPage = () => {
    window.open(
      "https://www.toyotabharat.com/showroom/innova/features-safety.html",
      "_blank"
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <span style={styles.headingTop}>MY NEW HY</span> of Incredible Safety
      </h2>
      <p style={styles.subHeading}>TOYOTA SAFETY SENSE™ (TSS)*</p>

      <div style={styles.featuresGrid}>
        {safetyFeatures.map((feature, index) => (
          <div key={index} style={styles.featureCard}>
            <img src={feature.image} alt={feature.title} style={styles.image} />
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDescription}>{feature.description}</p>
            {feature.note && <p style={styles.featureNote}>{feature.note}</p>}
          </div>
        ))}
      </div>

      <button
  style={{
    ...styles.button,
    backgroundColor: isHover ? "#fff" : "#000", // background color changes
    color: isHover ? "#000" : "#fff",           // text color changes
    border: "1px solid #000",                   // border always black
    transform: isHover ? "scale(1.05)" : "scale(1)", // subtle zoom
  }}
  onMouseEnter={() => setIsHover(true)}
  onMouseLeave={() => setIsHover(false)}
  onClick={openToyotaSafetyPage}
>
  Explore Safety Features
</button>

    </div>
  );
};

// Internal CSS styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fff",
    color: "black",
  },
  heading: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "5px",
  },
  headingTop: {
    color: "#1E40AF", // blue color
    fontStyle: "italic",
    fontWeight: 700,
  },
  subHeading: {
    fontSize: "16px",
    marginBottom: "40px",
    fontStyle: "italic",
    color: "#333",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginBottom: "40px",
  },
  featureCard: {
    textAlign: "center",
    padding: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "15px",
  },
  featureTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px",
  },
  featureDescription: {
    fontSize: "18px",
    color: "#555555c3",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  featureNote: {
    fontSize: "17px",
    color: "#999",
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: 600,
    transition: "all 0.3s ease",
  },
};

export default SafetyFeatures;
