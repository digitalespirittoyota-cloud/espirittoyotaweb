"use client";
import React, { useState } from "react";

interface CarSpec {
  title: string;
  seating: string;
  features: string[];
  image: string;
}

const petrolCars: CarSpec[] = [
  {
    title: "PETROL (G-SLF)",
    seating: "7/8 Seater",
    features: [
      "2.0L TNGA Petrol Engine with Direct Shift CVT",
      "Front and Back Disc Brakes",
      "ABS with EBD",
      "Dual LED Headlamps",
    ],
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/car-color-g-slf.webp",
  },
  {
    title: "PETROL (GX)",
    seating: "7/8 Seater",
    features: [
      "R16 (40.64 cm), Alloy Wheels with Center Cap",
      "Front Grille with Gun Metal Finish",
      "Android Auto & Apple CarPlay",
      "Smart entry system",
    ],
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/car-color-gx.webp",
  },
  {
    title: "PETROL GX(O)",
    seating: "7/8 Seater",
    features: [
      "25.65 cm Connect Audio",
      "Dual Tone Interior (Chestnut & Black)",
      "Panoramic View Monitor with Dynamic Back Guide",
      "Automatic Climate Control",
      "Rear Retractable Sunshade",
    ],
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/car-color-gx-o.webp",
  },
];

const hybridCars: CarSpec[] = [
  {
    title: "HYBRID (VX)",
    seating: "7/8 Seater",
    features: [
      "Paddle Shifters",
      "Triple LED with LED position lamp & Chrome ornamentation",
      "Full LED Rear Combi lamps",
      "Automatic Climate Control",
      "17” (43.18 cm) Alloy wheel",
    ],
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/car-color-vx-o.webp",
  },
  {
    title: "HYBRID VX(O)",
    seating: "7/8 Seater",
    features: [
      "Panoramic Roof with Mood Lighting",
      "LED Fog Lamps",
      "25.65 cm connect Audio",
      "Wireless Apple CarPlay",
      "6 SRS Airbags",
    ],
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/car-color-vx-o.webp",
  },
  {
    title: "HYBRID (ZX)",
    seating: "7-SEATER",
    features: [
      "Dual Function DRLs [DRL + Indicator]",
      "18” (45.72 cm) Gunmetal Grey Metallic Alloy Wheel",
      "Powered Ottoman Seats",
      "Ventilated Front Seats",
      "Powered Back Door",
      "9 Speaker JBL System (Including Subwoofer)",
      "8-Way Power Adjustable Driver Seat with Memory + Slide Return & Away Function",
    ],
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/car-color-zx.webp",
  },
  {
    title: "HYBRID ZX(O)",
    seating: "7-SEATER",
    features: [
      "Toyota Safety Sense Suite*",
      "Dynamic Radar Cruise Control",
      "Lane Trace Assist",
      "Rear Cross Traffic Alert",
      "Blind Spot Monitor",
      "Pre-Collision System**",
      "Auto High Beam",
    ],
    image:
      "https://static.toyotabharat.com/images/showroom/innova-hycross/car-color-zx.webp",
  },
];

const CarSpecs: React.FC = () => {
  const [isHybrid, setIsHybrid] = useState(false);

  const cars = isHybrid ? hybridCars : petrolCars;
  const inactiveCars = isHybrid ? petrolCars : hybridCars;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <span style={{ fontStyle: "italic", color: "#293c8f" }}>
          MY NEW HY
        </span>{" "}
        Specification
      </h2>

      {/* Toggle */}
      <div style={styles.toggle}>
        <button
          onClick={() => setIsHybrid(false)}
          style={isHybrid ? styles.toggleBtnInactive : styles.toggleBtnActive}
        >
          Petrol
        </button>
        <button
          onClick={() => setIsHybrid(true)}
          style={isHybrid ? styles.toggleBtnActive : styles.toggleBtnInactive}
        >
          Hybrid
        </button>
      </div>

      {/* Cards */}
      <div style={styles.cardRow}>
        {cars.map((car, idx) => (
          <div
            key={idx}
            style={{
              ...styles.card,
              borderLeft: idx === 0 ? "none" : "2px solid black",
            }}
          >
            <img src={car.image} alt={car.title} style={styles.carImage} />
            <h3 style={styles.carTitle}>{car.title}</h3>
            <p style={styles.seating}>
              Seating Capacity: {car.seating}
            </p>
            <p style={styles.featuresTitle}>Key Features</p>
            <ul style={styles.features}>
              {car.features.map((f, i) => (
                <li key={i}>- {f}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* One inactive card only in Petrol */}
        {!isHybrid && inactiveCars[0] && (
          <div
            style={{
              ...styles.card,
              ...styles.inactiveCard,
              borderLeft: "2px solid black",
            }}
          >
            <img
              src={inactiveCars[0].image}
              alt={inactiveCars[0].title}
              style={styles.carImage}
            />
            <h3 style={styles.carTitle}>{inactiveCars[0].title}</h3>
            <p style={styles.seating}>
              Seating Capacity: {inactiveCars[0].seating}
            </p>
            <p style={styles.featuresTitle}>Key Features</p>
            <ul style={styles.features}>
              {inactiveCars[0].features.map((f, i) => (
                <li key={i}>- {f}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom Buttons */}
      <div style={styles.buttons}>
        <button
          style={styles.bottomBtn}
          onClick={() =>
            window.open(
              "https://www.toyotabharat.com/documents/brochures/e-brochure-hycross.pdf",
              "_blank"
            )
          }
        >
          Download Brochure
        </button>
        <button style={styles.bottomBtn}>Explore More</button>
      </div>
    </div>
  );
};

// STYLES
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px 30px",
    textAlign: "center",
    backgroundColor: "#fff",
    color:"black",  
  },
  heading: {
    fontSize: "34px",
    fontWeight: 700,
    marginBottom: "25px",
  },
  toggle: {
    display: "inline-flex",
    marginBottom: "45px",
    border: "1px solid #ccc",
  },
  toggleBtnActive: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "12px 30px",
    border: "none",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
  },
  toggleBtnInactive: {
    backgroundColor: "#eee",
    color: "#888",
    padding: "12px 30px",
    border: "none",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
  },
  cardRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },
  card: {
    flex: "0 1 300px",
    padding: "20px",
    textAlign: "left",
  },
  inactiveCard: {
    opacity: 0.3,
  },
  carImage: {
    width: "100%",
    marginBottom: "15px",
  },
  carTitle: {
    fontSize: "20px",
    fontWeight: 700,
    borderBottom: "2px solid black",
    marginBottom: "8px",
  },
  seating: {
    fontSize: "16px",
    marginBottom: "12px",
  },
  featuresTitle: {
    fontSize: "16px",
    fontWeight: 700,
  },
  features: {
    paddingLeft: "20px",
    fontSize: "18px",
    lineHeight: 2.2,
    fontWeight: "bold",
  },
  buttons: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  bottomBtn: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "12px 30px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  },
};

export default CarSpecs;
