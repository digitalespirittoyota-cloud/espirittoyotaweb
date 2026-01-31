"use client";
import React, { useState } from "react";

/* ===================== TYPES ===================== */
type Variant = {
  name: string;
  price: string;
  fuel: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
    seating: string;
    turningRadius: string;
  };
};

const variants: Variant[] = [
  {
    name: "S MT NEO DRIVE",
    price: "₹10,44,200",
    fuel: "45l (0.045m3)",
    dimensions: {
      length: "446.0 cm",
      width: "173.5 cm",
      height: "169.0 cm",
      wheelbase: "274.0 cm",
      seating: "7N Seater",
      turningRadius: "5.2 m",
    },
  },
  {
    name: "S MT CNG",
    price: "₹11,35,900",
    fuel: "Petrol 45l (0.045m3) CNG 60l (0.060m3)",
    dimensions: {
      length: "446.0 cm",
      width: "173.5 cm",
      height: "169.0 cm",
      wheelbase: "274.0 cm",
      seating: "7N Seater",
      turningRadius: "5.2 m",
    },
  },
  // Add other variants similarly
];

/* ===================== COMPONENT ===================== */
const TechnicalSpecifications: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>(["DIMENSIONS"]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        TECHNICAL <span style={styles.highlight}>SPECIFICATIONS</span>
      </h2>

      {/* VARIANT TABLE */}
      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          {variants.map((v) => (
            <div key={v.name} style={styles.variantHeader}>
              <strong>{v.name}</strong>
              <div style={styles.remove}>Remove ⓘ</div>
              <div>{v.price}</div>
            </div>
          ))}
        </div>

        {/* DIMENSIONS ROW */}
        {openSections.includes("DIMENSIONS") && (
          <div style={styles.tableBody}>
            {[
              "Overall Length",
              "Overall Width",
              "Overall Height",
              "Wheelbase",
              "Seating capacity",
              "Min Turning Radius",
              "Fuel Tank capacity (litres)",
            ].map((attr, idx) => (
              <div key={idx} style={styles.tableRow}>
                <div style={styles.attribute}>{attr}</div>
                {variants.map((v) => {
                  const value =
                    attr === "Overall Length"
                      ? v.dimensions.length
                      : attr === "Overall Width"
                      ? v.dimensions.width
                      : attr === "Overall Height"
                      ? v.dimensions.height
                      : attr === "Wheelbase"
                      ? v.dimensions.wheelbase
                      : attr === "Seating capacity"
                      ? v.dimensions.seating
                      : attr === "Min Turning Radius"
                      ? v.dimensions.turningRadius
                      : attr === "Fuel Tank capacity (litres)"
                      ? v.fuel
                      : "";
                  return (
                    <div key={v.name} style={styles.value}>
                      {value}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECTIONS */}
      {[
        "WEIGHT",
        "ENGINE, TRANSMISSION & CHASSIS",
        "EXTERIORS",
        "INTERIORS",
        "INSTRUMENT CLUSTER",
        "COMFORT & CONVENIENCE",
        "INFOTAINMENT",
        "SAFETY",
        "TOYOTA I CONNECT",
      ].map((section) => (
        <div key={section} style={styles.section}>
          <div
            style={styles.sectionHeader}
            onClick={() => toggleSection(section)}
          >
            {section}
            <span style={styles.plus}>
              {openSections.includes(section) ? "-" : "+"}
            </span>
          </div>
          {openSections.includes(section) && (
            <div style={styles.sectionContent}>
              <p>Details about {section} will go here...</p>
            </div>
          )}
        </div>
      ))}

      {/* DISCLAIMER */}
      <div style={styles.disclaimer}>
        <strong>DISCLAIMER</strong>
        <p>
          *1 - Fuel efficiency as certified by the test agency under rule 115
          of CMVR, 1989 under standard test conditions. Actual mileage on road
          may vary.
        </p>
        <p>*2 - Spare Tyre Wheel is Steel Material...</p>
        <p>*3 - Application Features & Displays may vary...</p>
      </div>
    </div>
  );
};

/* ===================== STYLES ===================== */
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "95%",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor:"#fff",
    color:"black",
  },
  heading: {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "24px",
  },
  highlight: {
    color: "#00bfff",
  },
  tableContainer: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    overflowX: "auto",
    marginBottom: "20px",
  },
  tableHeader: {
    display: "flex",
    backgroundColor: "#f5f5f5",
    fontWeight: "bold",
  },
  variantHeader: {
    minWidth: "200px",
    textAlign: "center",
    padding: "10px",
    borderRight: "1px solid #ccc",
  },
  remove: {
    fontSize: "12px",
    color: "#888",
  },
  tableBody: {},
  tableRow: {
    display: "flex",
    borderTop: "1px solid #eee",
  },
  attribute: {
    minWidth: "200px",
    padding: "8px",
    fontWeight: "bold",
    backgroundColor: "#f9f9f9",
    borderRight: "1px solid #ccc",
  },
  value: {
    minWidth: "200px",
    padding: "8px",
    textAlign: "center",
    borderRight: "1px solid #ccc",
  },
  section: {
    borderTop: "1px solid #ccc",
  },
  sectionHeader: {
    padding: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plus: {
    fontSize: "18px",
  },
  sectionContent: {
    padding: "10px 20px",
    backgroundColor: "#f9f9f9",
  },
  disclaimer: {
    marginTop: "20px",
    fontSize: "12px",
    lineHeight: "1.4",
  },
};

export default TechnicalSpecifications;
