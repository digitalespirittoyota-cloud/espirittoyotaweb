"use client";
import React, { useState } from "react";

type Mode = "specs" | "features";

const SpecsFeatures = () => {
  const [mode, setMode] = useState<Mode>("specs");
  const [openSections, setOpenSections] = useState<string[]>([]);

  const specsData = [
    {
      section: "Dimensions",
      key: "dimensions",
      rows: [
        { label: "Length (mm)", E1: "4285", E2: "4285", E3: "4285" },
        { label: "Width (mm)", E1: "1800", E2: "1800", E3: "1800" },
        { label: "Height (unladen) (mm)", E1: "1640", E2: "1640", E3: "1640" },
        { label: "Wheelbase (mm)", E1: "2700", E2: "2700", E3: "2700" },
        { label: "Seat Capacity", E1: "5", E2: "5", E3: "5" },
        { label: "Min. turning radius (m)", E1: "5.2", E2: "5.2", E3: "5.2" },
      ],
    },
    {
      section: "Electric powertrain, Transmission & chassis",
      key: "powertrain",
      rows: [
        {
          label: "High Voltage Battery Type",
          E1: "Lithium Iron-Phosphate battery pack",
          E2: "Lithium Iron-Phosphate battery pack",
          E3: "Lithium Iron-Phosphate battery pack",
        },
        { label: "Capacity (kWh)", E1: "49", E2: "61", E3: "61" },
        { label: "Motor power (kW)", E1: "106", E2: "128", E3: "128" },
        { label: "Motor torque (Nm)", E1: "180", E2: "200", E3: "200" },
        { label: "Drive Type", E1: "FWD", E2: "FWD", E3: "FWD" },
        { label: "Range*", E1: "440", E2: "543", E3: "543" },
        { label: "Front & rear brakes", E1: "18\"Ventilated discs", E2: "18\"Ventilated discs", E3: "18\"Ventilated discs" },
        { label: "Parking brake", E1: "Electric parking brake", E2: "Electric parking brake", E3: "Electric parking brake" },
        { label: "Front suspension", E1: "MacPherson strut with stabilizer", E2: "MacPherson strut with stabilizer", E3: "MacPherson strut with stabilizer" },
        { label: "Rear suspension", E1: "Rear multi-link suspension", E2: "Rear multi-link suspension", E3: "Rear multi-link suspension" },
        { label: "Wheel size", E1: "225/55 R18", E2: "225/55 R18", E3: "225/55 R18" },
        

      ],
    },
    {
      section: "Weight",
      key: "weight",
      rows: [
        { label: "Kerb weight (kg)", E1: "1725", E2: "1785", E3: "1815" },
        { label: "Gross vehicle weight (kg)", E1: "2180", E2: "2250", E3: "2250" },
        
      ],
    },
  ];

  const featuresData = [
    {
      section: "Exteriors",
      key: "exteriors",
      rows: [
        { label: "LED headlamp", E1: "✔", E2: "✔", E3: "✔" },
        { label: "LED DRL", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Auto headlights", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Headlamp levelling", E1: "Manual", E2: "Manual", E3: "Auto" },
        { label: "ORVM side turn indicator", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Welcome home lamp", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Tail lamp", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Brake lamp", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Emergency stop signal", E1: "✔", E2: "✔", E3: "✔" },
        { label: "High mount stop lamp", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Licence lamp", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Alloy wheel 225/55 R 18 machine cut with AL centre cap", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Spare tyre 18\" alloy wheel", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Tyre pressure monitor system (TPMS)", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Stylish body side moulding", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Windscreen wiper with rain sensor", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Rear wiper & washer", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Front windshield with noise shut & IR cut", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Shark fin roof antenna", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Wheel arch with extension", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Roof end spoiler", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Body coloured ORVM elec adj + fold + key linked", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Dual-tone exterior (in selected colors)", E1: "✖", E2: "✖", E3: "✔" },


      ],
    },
    {
      section: "Interiors",
      key: "interiors",
      rows: [
        { label: "EPS with synthetic leather steering", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Tilt + telescopic steering", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Driver seat height adjust", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Front & rear pillow type headrest", E1: "Manual", E2: "Manual", E3: "Auto" },
        { label: "Rear centre armrest with cupholder", E1: "✔", E2: "✔", E3: "✔" },
        { label: "40 : 20 : 40 split rear seats", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Reclining rear seat cushion", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Sliding rear seat", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Seatback pocket passenger side", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Centre console with cup holder & accessory socket", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Centre lower box", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Luggage shelf", E1: "✖", E2: "✔", E3: "✔" },
        { label: "Ventilated seat driver & front passenger", E1: "✖", E2: "✖", E3: "✔" },
        { label: "Seat upholstery type", E1: "Fabric", E2: "Fabric", E3: "Syn. leather+fabric" },
        { label: "Panoramic roof with fixed glass", E1: "✖", E2: "✖", E3: "✔" },
        { label: "Power driver seat", E1: "✖", E2: "✖", E3: "✔" },
        

      ],
    },
    {
      section: "Safety",
      key: "safety",
      rows: [
        {
          label: "SRS airbag #",
          E1: "07 Airbags (Driver, Passenger, Front Side, Curtain, Driver Knee)",
          E2: "07 Airbags (Driver, Passenger, Front Side, Curtain, Driver Knee)",
          E3: "07 Airbags (Driver, Passenger, Front Side, Curtain, Driver Knee)",
        },
        { label: "Front & rear 3-point ELR seatbelt", E1: "✔", E2: "✔", E3: "✔" },
        { label: "ISOFIX child seat restraint system", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Front seatbelt pretensioners with force limiters", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Day/night rear view mirror", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Back camera", E1: "✖", E2: "✔", E3: "✖" },
        { label: "Panoramic 360-degree monitor camera", E1: "✖", E2: "✖", E3: "✔" },
        { label: "ABS / EBD / VSC", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Hill hold control", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Multi collision brake", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Regenerative braking system", E1: "✔", E2: "✔", E3: "✔" },
        { label: "ImmobiliserAdvanced driver assistance system**, adaptive cruise control, lane keep assist, lane departure warning, rear cross traffic alert, stagger warning, blind spot monitor, pre-collision system**, adaptive high beam system ", E1: "✖", E2: "✖", E3: "✔" },
        { label: "Security alarm door & hood & shock sensor & siren", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Acoustic vehicle alerting system", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Front and rear parking sensors", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Seatbelt reminder D+P+rear alarm + lamp", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Rear defogger (electric)",  E1: "✔", E2: "✔", E3: "✔" },
        { label: "Overspeed alert",  E1: "✔", E2: "✔", E3: "✔" },
        { label: "Door lock status",  E1: "✔", E2: "✔", E3: "✔" },
        { label: "Adaptive cruise control steering commands",  E1: "✖", E2: "✖", E3: "✔" },
        { label: "Lane keep assist steering wheel commands",  E1: "✖", E2: "✖", E3: "✔" },

        

      ],
    },
    {
      section: "Infotainment",
      key: "infotainment",
      rows: [
        { label: "10.1\" multimedia screen", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Wireless Android Auto and Apple CarPlay^", E1: "✔", E2: "✔", E3: "✔" },
        { label: "4 speakers", E1: "✔", E2: "✔", E3: "✔" },
        { label: "Tweeter", E1: "✖", E2: "✖", E3: "✔" },
        { label: "Sub woofer", E1: "✖", E2: "✖", E3: "✔" },
        { label: "IP speaker", E1: "✖", E2: "✖", E3: "✔" },
        { label: "JBL premium audio", E1: "✖", E2: "✖", E3: "✔" },
        
        
        

      ],
    },
  ];

  const activeData = mode === "specs" ? specsData : featuresData;

  const toggleSection = (key: string) => {
    if (openSections.includes(key)) {
      setOpenSections(openSections.filter((k) => k !== key));
    } else {
      setOpenSections([...openSections, key]);
    }
  };

  return (
    <div style={styles.page}>
      {/* Mode Toggle */}
      <div style={styles.toggleWrap}>
        <button
          style={mode === "specs" ? styles.activeBtn : styles.btn}
          onClick={() => setMode("specs")}
        >
          Specifications
        </button>
        <button
          style={mode === "features" ? styles.activeBtn : styles.btn}
          onClick={() => setMode("features")}
        >
          Features
        </button>
      </div>

      {/* Grid Container */}
      <div style={styles.gridContainer}>
        {/* Left Column - Labels */}
        <div style={styles.left}>
          <div style={styles.leftTitle}>
            {mode === "specs" ? "Specifications" : "Features"}
          </div>

          {activeData.map((section) => (
            <div key={section.key}>
              <div
                style={{
                  ...styles.accordion,
                  background: "#000",
                  color: "#fff",
                }}
                onClick={() => toggleSection(section.key)}
              >
                <span>{section.section}</span>
                <span style={styles.arrow}>
                  {openSections.includes(section.key) ? "▲" : "▼"}
                </span>
              </div>

              {openSections.includes(section.key) && (
                <div>
                  {section.rows.map((row, i) => (
                    <div
                      key={i}
                      style={{
                        ...styles.leftRow,
                        background: i % 2 === 0 ? "#f9f9f9" : "#fff",
                      }}
                    >
                      {row.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Columns */}
        <div style={styles.right}>
          {/* Header */}
          <div style={styles.rightHeader}>
            <div style={{ ...styles.colHeader, borderRight: "1px solid #ccc" }}>E1</div>
            <div style={{ ...styles.colHeader, borderRight: "1px solid #ccc" }}>E2</div>
            <div style={styles.colHeader}>E3</div>
          </div>

          {/* Data Rows */}
          {activeData
            .filter((section) => openSections.includes(section.key))
            .map((section) =>
              section.rows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.dataRow,
                    background: i % 2 === 0 ? "#f9f9f9" : "#fff",
                  }}
                >
                  <div style={{ ...styles.col, borderRight: "1px solid #ccc", borderBottom: "1px solid #ccc" }}>
                    {row.E1}
                  </div>
                  <div style={{ ...styles.col, borderRight: "1px solid #ccc", borderBottom: "1px solid #ccc" }}>
                    {row.E2}
                  </div>
                  <div style={{ ...styles.col, borderBottom: "1px solid #ccc" }}>{row.E3}</div>
                </div>
              ))
            )}
        </div>
      </div>
      {/* ================= DISCLAIMER SECTION ================= */}
<div style={styles.disclaimerWrap}>
  {/* Right side image */}
  <img
    src="/disclaimer-lines2-379x643.svg"
    alt="Disclaimer design"
    style={styles.disclaimerImg}
  />

  {/* Disclaimer text */}
  <div style={styles.disclaimerText}>
    <p><strong style={{fontSize:"20px",fontStyle:"italic"}}>Disclaimer</strong></p>

    <p>
      * Range as per AIS 040 (Rev.1) (km). ARAI certification under controlled
      conditions for new battery pack.
    </p>

    <p>
      * Actual mileage/range may vary based on driving and operating conditions.
      543 km is in-house certified range for 61 kWh variant, which may vary with
      driving pattern, road conditions, and other factors. Full-charge range
      pending for certification under Rule 124 of the Central Motor Vehicles
      Rules, 1989.
    </p>

    <p>
      # The driver is always responsible for paying attention to the vehicle
      surroundings & driving safely as there are limitations to the degree of
      recognition & controlling performance that this system can provide.
    </p>

    <p>
      # For more details on the functioning of airbags, please refer to the
      owner's manual.
    </p>

    <p>
      ** This function is activated when the vehicle's speed is within the range
      of approximately 5 to 180 km/h. The system assists in mitigating damage.
      However, the braking ability varies on road and driving conditions.
    </p>

    <p>
      ^ Application features & displays may vary depending on different operating
      systems or smartphone devices used. Avoid using the phone while driving for
      your safety.
    </p>

    <p>
      Apple CarPlay is registered trademark of Apple Inc. Android Auto is
      registered Trademark of Google Inc. Bluetooth is a registered Trademark of
      Bluetooth SIG.
    </p>

    <p>
      Speed Warning Buzzer gives audible warning of overspeed to driver.
      <br />– If vehicle speed &gt; 80 km/h, then two beeps will sound every minute.
      <br />– If vehicle speed &gt; 120 km/h, continuous beeps will sound.
      <br />– This buzzer does not indicate any malfunction in vehicle.
    </p>

    <p>
      Vehicles pictured and specifications detailed vary between models &
      equipment. Actual colour of the vehicle body & upholstery might differ from
      the images depicted.
    </p>

    <p>
      The prices of the cars may change without prior notice. Please check the
      latest prices and variant specifications with your Toyota dealer before
      booking the car. Additional premium for dual-tone colour applicable on
      premium grade.
    </p>
  </div>
</div>

    </div>
  );
};

export default SpecsFeatures;

/* ================= INTERNAL CSS ================= */
const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    background: "#f6f6f6",
    color: "#000",
  },

  toggleWrap: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  btn: {
    padding: "10px 18px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "#eee",
    cursor: "pointer",
    fontWeight: 500,
  },

  activeBtn: {
    padding: "10px 18px",
    borderRadius: "6px",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: 500,
  },

  gridContainer: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: "20px",
    alignItems: "start",
  },

  left: {
    background: "#fff",
    borderRadius: "6px",
    padding: "10px",
  },

  leftTitle: {
    background: "#000",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "10px",
  },

  accordion: {
    padding: "12px",
    marginTop: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 500,
  },

  arrow: {
    fontSize: "10px",
  },

  leftRow: {
    padding: "10px 8px",
    color: "#333",
    fontSize: "14px",
  },

  right: {
    background: "#fff",
    borderRadius: "6px",
    overflowX: "auto",
  },

  rightHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  colHeader: {
    background: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "12px",
    fontWeight: 500,
    fontSize: "14px",
    borderBottom: "1px solid #ccc",
  },

  dataRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  col: {
    padding: "12px",
    textAlign: "center",
    fontWeight: 500,
    fontSize: "14px",
  },
  disclaimerWrap: {
    height:"600px",
  position: "relative",
  background: "#fff",
  marginTop: "30px",
  padding: "20px",
  borderRadius: "6px",
},

disclaimerImg: {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "200px",
  opacity: 0.95,
},

disclaimerText: {
  fontSize: "12px",
  color: "#555",
  lineHeight: "2.3",
  maxWidth:"990px",
  paddingLeft:"160px",
},

};
