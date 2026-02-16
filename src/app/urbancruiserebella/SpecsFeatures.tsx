
"use client";
import React, { useState } from "react";
import ComparisonTable from "./TableExpansion";

const specifications = [
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

const features = [
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
      { label: "Rear defogger (electric)", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Overspeed alert", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Door lock status", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Adaptive cruise control steering commands", E1: "✖", E2: "✖", E3: "✔" },
      { label: "Lane keep assist steering wheel commands", E1: "✖", E2: "✖", E3: "✔" },



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
  {
    section: "Comfort & Convenience",
    key: "comfort",
    rows: [
      { label: "Wireless smartphone charger", E1: "✖", E2: "✔", E3: "✔" },
      { label: "Front power windows up / down auto", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Rear power windows up / down auto", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Tailgate open electronic type", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Charge port internal opener type", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Driver door key cyliner", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Power door lock", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Keyless entry", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Keyless push start / stop system", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Auto door lock by speed", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Drive mode switch", E1: "✔", E2: "✔", E3: "✔" },
      { label: "10.25 TFT combimeter", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Switch illumination colour white", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Audio commands on steering", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Voice commands on steering", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Info display button on steering", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Auto climate control with rear vents", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Spot map lamp roof front", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Reading lamp roof side", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Luggage room lamp", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Glove box lamp", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Front footwell lamp", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Ambient light door line and console spot", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Driver sunvisor & vanity mirror & ticket holder", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Passenger sunvisor vanity mirror & ticket holder", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Driver foot rest", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Overhead console", E1: "✔", E2: "✔", E3: "✔" },
      { label: "USB socket Fr 2 x Rr 2", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Front centre armrest", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Air purifier PM2.5 filter", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Snow mode switch", E1: "✔", E2: "✔", E3: "✔" },



    ],
  },
  {
    section: "Charging",
    key: "charging",
    rows: [
      { label: "Charge lid light", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Charge cable - portable", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Vehicle connector type 2", E1: "✔", E2: "✔", E3: "✔" },
      { label: "EV plug type M", E1: "✔", E2: "✔", E3: "✔" },
      { label: "AC wallmount charger compatibility [7.2kW]", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Fast charge vehicle inlet CCS2 type", E1: "✔", E2: "✔", E3: "✔" },

    ],
  },
  {
    section: "Connected Car Features",
    key: "connectedCarFeatures",
    rows: [
      { label: "EV features - charging, battery SOC & scheduling", E1: "✔", E2: "✔", E3: "✔" },
      { label: "EV charging - history & summary", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Remote commands - AC, seat ventilation, door locks, windows", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Emergency call feature - SOS call", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Location-based service - find my car, location sharing & summary", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Guest driver monitor - geo fencing, speed limiting & alerts", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Convenience - smart watch connectivity, Siri, etc.", E1: "✔", E2: "✔", E3: "✔" },
      { label: "Security - theft / immobilisation", E1: "✔", E2: "✔", E3: "✔" },

    ],
  },
];



export default function SpecificationComparison() {
  const [activeTab, setActiveTab] = useState<"specs" | "features">("specs");
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const data = activeTab === "specs" ? specifications : features;

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Close if already open
        : [...prev, index] // Add to open sections
    );
  };

  return (
    <>
      <div className="comparison-wrapper">
        {/* Tabs */}
        <div className="top-tabs">
          <button
            className={activeTab === "specs" ? "active" : ""}
            onClick={() => {
              setActiveTab("specs");
              setOpenSections([0]);
            }}
          >
            Specifications
          </button>
          <button
            className={activeTab === "features" ? "active" : ""}
            onClick={() => {
              setActiveTab("features");
              setOpenSections([0]);
            }}
          >
            Features
          </button>
        </div>

        <ComparisonTable
          data={data}
          activeTab={activeTab}
          openSections={openSections}
          toggleSection={toggleSection}
        />

        {/* ================= DISCLAIMER SECTION ================= */}
        <div className="disclaimer-wrap">
          <img
            src="/disclaimer-lines2-379x643.svg"
            className="disclaimer-img"
            alt="Disclaimer"
          />

          <div className="disclaimer-text">

            <p>
              <strong style={{ fontSize: "20px", fontStyle: "italic" }}>
                Disclaimer
              </strong>
            </p>

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

      {/* INTERNAL CSS */}
      <style jsx>{`
        .comparison-wrapper {
          width: 100%;
          padding: 30px;
          color: #000;
          background:#fff;
        }

        .top-tabs {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-bottom: 20px;
        }

        .top-tabs button {
          padding: 8px 20px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: #f5f5f5;
          cursor: pointer;
        }

        .top-tabs button.active {
          background: linear-gradient(to right, #b10505 0%,
    #8a0000 50%,
    #000 100%);
          color: #fff;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1.2fr repeat(3, 1fr);
          gap: 16px;
        }

        .column {
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
        }

        .column-header {
          background: linear-gradient(to right, #000, #333);
          color: #fff;
          padding: 12px;
          font-weight: 600;
          text-align: center;
        }
        

        .spec-col .column-header {
          text-align: left;
          padding-left: 20px;
        }

        .section-header {
          background: linear-gradient(to right, #000, #333);
          color: #fff;
          padding: 12px 20px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
        }

        .row {
          padding: 14px 20px;
          border-bottom: 1px solid #eee;
          min-height: 52px;
          display: flex;
          align-items: center;
          
          
        }

        .row.label {
          font-weight: 500;
          background: #fafafa;
          
        }

        .disclaimer-wrap {
  height: 600px;
  position: relative;
  margin-top: 30px;
  padding: 20px;
  background: #fff;
}

.disclaimer-img {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 200px;
}

.disclaimer-text {
  font-size: 12px;
  color: #555;
  line-height: 2.3;
  max-width: 990px;
  padding-left: 160px;
}

.disclaimer-text.mobile {
  padding-left: 0;
}
/* Mobile Responsive */
        @media (max-width: 768px) {
          .comparison-wrapper {
            padding: 16px;
          }

          .top-tabs {
            justify-content: center;
            width: 100%;
            margin-bottom: 16px;
          }

          .top-tabs button {
            padding: 10px 20px;
            font-size: 14px;
            flex: 1;
          }

          .disclaimer-wrap {
            min-height: auto;
            padding: 16px;
            margin-top: 24px;
          }

          .disclaimer-img {
            position: relative;
            width: 100%;
            max-width: 150px;
            margin: 0 auto 16px;
            display: block;
          }

          .disclaimer-text {
            padding-left: 0;
            font-size: 11px;
            line-height: 1.8;
          }
        }

        /* Tablet Responsive */
        @media (min-width: 769px) and (max-width: 1024px) {
          .comparison-wrapper {
            padding: 24px;
          }

          .top-tabs button {
            padding: 11px 25px;
            font-size: 14px;
          }

          .disclaimer-wrap {
            margin-top: 24px;
          }

          .disclaimer-text {
            padding-left: 100px;
          }

          .disclaimer-img {
            width: 150px;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .comparison-wrapper {
            padding: 40px;
          }

          .top-tabs button {
            padding: 14px 40px;
            font-size: 16px;
          }
        }



      `}</style>
    </>
  );
}







































