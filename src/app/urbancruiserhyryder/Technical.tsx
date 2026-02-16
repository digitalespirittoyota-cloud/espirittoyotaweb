"use client";
import { useState } from "react";

/* ===================== TYPES ===================== */
type Powertrain = "E-CNG" | "NEODRIVE" | "HYBRID";

type Variant =
  | "E CNG-S"
  | "E CNG-G"
  | "NEODRIVE -E"
  | "NEODRIVE-S"
  | "NEODRIVE-G(O)"
  | "NEODRIVE-V"
  | "HYBRID-S"
  | "HYBRID-G(O)"
  | "HYBRID-V";

const VARIANTS_BY_POWERTRAIN: Record<Powertrain, Variant[]> = {
  "E-CNG": ["E CNG-S", "E CNG-G"],
  NEODRIVE: ["NEODRIVE -E", "NEODRIVE-S", "NEODRIVE-G(O)", "NEODRIVE-V"],
  HYBRID: ["HYBRID-S", "HYBRID-G(O)", "HYBRID-V"],
};

interface SpecItem {
  label: string;
  value: string;
}

interface SpecSection {
  title: string;
  data: SpecItem[];
}

interface VariantSpecs {
  ENGINE?: SpecSection;
  TRANSMISSION?: SpecSection;
  DRIVE?: SpecSection;
  DIMENSIONS?: SpecSection;
  SUSPENSION?: SpecSection;
  BRAKES?: SpecSection;
  WHEEL_TYRE?: SpecSection;
  FEATURES?: SpecSection;
}


/* ===================== SPEC DATA ===================== */
/* ===================== SPEC DATA ===================== */
const specifications: Record<Powertrain, Record<Variant, VariantSpecs>> = {
  HYBRID: {
    "HYBRID-V": {
      ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity", value: "1490 cm³" },
          { label: "Max Power", value: "68 kW @ 5500 rpm" },
          { label: "Max Torque", value: "122 Nm @ 4400 rpm" },
          { label: "Battery Type", value: "Lithium-ion" },
          { label: "Battery Voltage", value: "177.6 V" },
        ],
      },
      TRANSMISSION: {
        title: "TRANSMISSION",
        data: [{ label: "Type", value: "e-Drive" }],
      },
      DRIVE: {
        title: "DRIVE",
        data: [{ label: "Drive Type", value: "2WD" }],
      },
    },
    "HYBRID-G(O)": {
      ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity", value: "1490 cm³" },
          { label: "Max Power", value: "68 kW" },
        ],
      },
    },
    "HYBRID-S": {
      ENGINE: {
        title: "ENGINE",
        data: [{ label: "Engine Capacity", value: "1490 cm³" }],
      },
    },
  },

  NEODRIVE: {
    "NEODRIVE -E": {
      ENGINE: {
        title: "ENGINE",
        data: [{ label: "Fuel Type", value: "Petrol" }],
      },
    },
    "NEODRIVE-S": {
      ENGINE: {
        title: "ENGINE",
        data: [{ label: "Fuel Type", value: "Petrol" }],
      },
    },
    "NEODRIVE-G(O)": {
      ENGINE: {
        title: "ENGINE",
        data: [{ label: "Fuel Type", value: "Petrol" }],
      },
    },
    "NEODRIVE-V": {
      ENGINE: {
        title: "ENGINE",
        data: [{ label: "Fuel Type", value: "Petrol" }],
      },
    },
  },

  "E-CNG": {
    "E CNG-S": {
      ENGINE: {
        title: "ENGINE (E-CNG)",
        data: [
          { label: "Type", value: "Inline 4-cylinder" },
          { label: "Displacement (cc)", value: "1462" },
          { label: "Fuel Type", value: "Petrol + CNG" },
          {
            label: "Max Power",
            value:
              "74 kW (100.6 PS) @ 6000 rpm [Gasoline mode], 64.6 kW (87.8 PS) @ 5500 rpm [CNG mode]",
          },
          {
            label: "Max Torque",
            value:
              "136 Nm @ 4400 rpm [Gasoline mode], 121.5 Nm @ 4200 rpm [CNG mode]",
          },
          { label: "OBD", value: "OBD2" },
          { label: "ISG", value: "ISG" },
        ],
      },
      TRANSMISSION: {
        title: "TRANSMISSION",
        data: [
          { label: "Type", value: "5MT" },
          { label: "Drive Type", value: "2WD" },
        ],
      },
      "DIMENSIONS & WEIGHT": {
        title: "DIMENSIONS & WEIGHT",
        data: [
          { label: "Length (mm)", value: "4365" },
          { label: "Width (mm)", value: "1795" },
          { label: "Height (mm)", value: "1645" },
          { label: "Wheelbase (mm)", value: "2600" },
          { label: "Turning Radius (m)", value: "5.4" },
          {
            label: "Fuel Tank Capacity",
            value:
              "Gasoline: 0.045 m3 (45 l), CNG: 0.055 m3 (55 l) [Water equivalent]",
          },
          { label: "Fuel Efficiency", value: "26.6 km/kg [CNG mode]" },
          { label: "Seating Capacity", value: "5" },
          { label: "Kerb Weight (kg)", value: "1245" },
          { label: "Gross Vehicle Weight (kg)", value: "1705" },
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Front", value: "MacPherson strut" },
          { label: "Rear", value: "Torsion beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Front", value: "Ventilated disc" },
          { label: "Rear", value: "Solid disc" },
          { label: "EPB", value: "-" },
        ],
      },
      "WHEEL & TYRE SIZE": {
        title: "WHEEL & TYRE SIZE",
        data: [
          { label: "Tyre Size", value: "215 / 60 R17 (43.18 cm)" },
          { label: "Wheel", value: "Steel wheel with full wheel cap" },
          { label: "Tire repair kit", value: "-" },
        ],
      },
      FEATURES: {
        title: "FEATURES",
        data: [
          {
            label: "Exterior",
            value:
              "Projector Headlamps Bi-Halogen, LED Position lamp, Twin LED Day-time running lamp / Side turn lamp, Auto Headlight -, Headlight levelling (manual), LED Tail Stop Lamp, High mount stop lamp, Follow me home headlamp -, ORVM with turn indicator, Front Upper Grille - Unique crystal acrylic type -, Black wheel arch cladding (Front & rear), Back door garnish Silver, Roof Rails (Black), Skid Plate (Front & Rear) Silver, Front Variable Intermittent wiper -, Rear window wiper & washer -, Front Windshield / Front Door/ Rear Door/Quarter/ Back Door Green Glass, Optional Stylish Dual Tone Exterior (In Selected Colours) -, Roof end spoiler, Side under protection garnish, Sharkfin Antenna, Chrome belt line garnish -, Body color outside door handle",
          },
          {
            label: "Safety & Security",
            value:
              "Dual Front Airbags (Driver + Co Driver), Front Side and Curtain Airbag, Surround View Monitor (360 degree camera) -, Reverse Parking Camera, Front seatbelt pre-tension & force limiter, Adjustable shoulder anchor (front seatbelts), Rear seats belts type Side:3 points / Center:3 points, Seat belt reminder (Front & Rear) Lamp + Buzzer, ISOFIX Child Seat Restraint System, ABS with EBD, Vehicle Stability Control, Hill Hold Control, Hill descendant -, Tire-pressure monitoring system (TPMS), Immobilizer, Advanced Body Structure (TECT Body), Side Impact Protection Beam, Pedal release system, Rear Parking Sensors, Day/night rear view mirror (Manual), Child-proof rear door locks, Warning Lamp/ Reminder for (Low Fuel, Door Ajar, Headlamp On), Speed Warning Buzzer*1",
          },
          {
            label: "Interior",
            value:
              "Dual tone Black x Brown interior -, Black interior, Ambient lighting -, New Smart Playcast Touchscreen Audio*2 with MP3/ AM / FM / Bluetooth / USB / Smartphone Connect (Apple CarPlay/ Android Auto) Hey Siri, Okay Google compatible 17.78cm, Arkamys Sound tuning -, Premium Audio -, 4 Speakers, Tweeter (2 Units) -, Information display (TFT Color) 10.16 cm (4.2inch), Soft touch IP with premium stitch -, Chrome inside door handle, IP Garnish (Gloss Silver), Front (side) ventilation knob (Satin chrome), Centre ventilation knob & fin (Satin silver), Steering Garnish (Satin chrome), Shift Garnish (Gloss black paint + Satin silver paint) (Resin), Hazard Garnish (Outer) (Satin silver) (Resin), Air conditioner Control Panel (Matte black), Rear AC vent Garnish & Knob (Satin chrome), Front door garnish (Silver), Door armrest Black Fabric, Switch bezel Resin, Artificial Leather seats with perforations*4 (black fabric), Leather Steering wheel*4 -, Assist Grips (3 Units), Luggage Shelf Strings, Spot map lamp (Roof front), Reading Lamp (one on each side of the roof), Trunk/Luggage room lamp, Glove box light, Front footwell light (Driver & Co driver side), Courtesy lamp -",
          },
          {
            label: "Comfort & Convenience",
            value:
              "Panoramic Roof -, Head-up Display -, Front Wireless Charger -, Toyota i-Connect, Front sliding armrest (with storage), USB (Front x1 / Rear x 2), USB Charger Rear (High speed type 15w) Type C×2, Adjustable Tilt & Telescopic steering, Power Steering (EPS), Cruise Control, Steering mounted commands (Audio, BT, Cruise control), Paddle Shift -, Auto air conditioner, Rear AC vents, PM2.5 filter, PM2.5 Display with Color & Numbers(AQI Display in Infotainment DA) -, Ventilated seats (D+P) -, Drive mode switch -, Driver seat height adjust, Seat back pocket (D+P), Separately folding rear seat backs & cushions (60/40), Reclining rear seats, Rear headrest- removable type (3 Units), Rear center armrest with cupholder, Power Seat -, Keyless Entry, Push start/stop button, Power door locks (Central Locking), Fr & rr door pet bottle holder (1000ml), Power windows (D-side auto up/down), Auto folding outside mirror -, Electric outside mirrors (electric fold), D+P vanity mirror, D+P vanity mirror lamp -, D+P ticket holder, Centre console with cupholder (2 cups), Accessory socket (Center console), Accessory socket (Luggage room), Gear Shift indicator -, Driver footrest, Rear door Sunshade -",
          },
        ],
      },
    },
    "E CNG-G": {
      ENGINE: {
        title: "ENGINE (E-CNG)",
        data: [
          { label: "Type", value: "Inline 4-cylinder" },
          { label: "Displacement (cc)", value: "1462" },
          { label: "Fuel Type", value: "Petrol + CNG" },
          {
            label: "Max Power",
            value:
              "74 kW (100.6 PS) @ 6000 rpm [Gasoline mode], 64.6 kW (87.8 PS) @ 5500 rpm [CNG mode]",
          },
        ],
      },
    },
  },
};


/* ===================== DISCLAIMER ===================== */
const disclaimerPoints = [
  "1 -Speed Warning Buzzer gives audible warning of Over Speed to Driver, If Vehicle Speed >80 km/h then two beeps will sound every minute If Vehicle Speed >120 km/h, continuous beeps will sound. This Buzzer does not indicate any Malfunction in Vehicle",
  "2 -Application Features & Displays may vary depending on different Operating Systems or Smartphone Devices used. Avoid using the phone while driving for your safety Apple CarPlay is registered trademark of Apple Inc. Android Auto is registered Trademark of Google Inc. Bluetooth is a registered Trademark of Bluetooth SIG",
  "3 -Lithium Ion Battery poses safety & environmental hazard if disposed inappropriately. Do not dispose battery in garbage bin. Always ask Toyota Authorized Dealer for replacing or disposing battery",
  "4 -Some Parts of Leather appointed upholstery will contain man - made material",
  "5 -As per certification under Rule 115(G) of CMVR 1989",
  " -Vehicle pictures and specifications detailed in this brochure may vary between models & equipment. Addition of Features may change figures in this chart. Actual colour of the vehicle body & upholstery might differ slightly from images depicted in this brochure. Features are grade specific. Toyota Kirloskar Motor Pvt Ltd reserves the right to alter the details of specifications and equipment without a notice.",
];

/* ===================== COMPONENT ===================== */
export default function Technical() {
  const [powertrain, setPowertrain] = useState<Powertrain>("HYBRID");
  const [variant, setVariant] = useState<Variant>("HYBRID-V");

  const [showAll, setShowAll] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const currentSpecs = specifications[powertrain][variant];

  return (
    <>
      <style>{`
      *{box-sizing:border-box}
      body{margin:0}

      .tech-container{
        max-width:1600px;
        margin:auto;
        padding:30px 20px;
        font-family:Arial,Helvetica,sans-serif;
        background:#fff;   /* only specs section */
        color:#000;
      }

      .title{
        text-align:center;
        font-size:22px;
        letter-spacing:1px;
        margin-bottom:25px;
      }

      /* POWERTRAIN */
      .powertrain-bar{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        background:#e6edf6;
        height:48px;
        margin-bottom:15px;
      }

      .powertrain-tab{
        border:none;
        background:transparent;
        font-size:15px;
        cursor:pointer;
      }

      .powertrain-tab.active{
        background:#dce7f5;
        font-weight:600;
      }

      /* VARIANT */
      .variant-bar{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        background:#f5f7fa;
        height:44px;
        margin-bottom:35px;
      }

      .variant-tab{
        border:none;
        background:transparent;
        font-size:14px;
        cursor:pointer;
      }

      .variant-tab.active{
        background:#dce7f5;
        font-weight:600;
      }

      /* SPECS */
      .spec-grid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:60px;
      }

      .spec-title{
        color:red;
        font-weight:600;
        border-top:2px solid red;
        border-right:2px solid red;
        width:170px;
        padding:10px;
        margin-bottom:10px;
      }

      .spec-row{
        display:flex;
        justify-content:space-between;
        padding:6px 0;
        font-size:14px;
      }

      /* VIEW ALL */
      .view-all{
        text-align:center;
        margin:30px 0;
      }

      .view-all button{
        background:#e60000;
        color:#fff;
        border:none;
        padding:10px 35px;
        font-size:14px;
        cursor:pointer;
      }

      /* DISCLAIMER */
      .disclaimer{
        margin-top:40px;
      }

      .disclaimer button{
        background:#000;
        color:#fff;
        border:none;
        padding:8px 25px;
        cursor:pointer;
      }

      /* RESPONSIVE */
      @media(max-width:1024px){
        .spec-grid{grid-template-columns:1fr}
        .spec-title{width:100%;border-right:none}
      }

      @media(max-width:768px){
        .powertrain-bar,
        .variant-bar{
          grid-template-columns:1fr;
          height:auto;
        }
        .spec-row{
          flex-direction:column;
          gap:4px;
        }
      }
      `}</style>

      <div className="tech-container">

        <div className="title">TECHNICAL SPECIFICATIONS</div>

        {/* POWERTRAIN */}
        <div className="powertrain-bar">
          {(Object.keys(VARIANTS_BY_POWERTRAIN) as Powertrain[]).map((p) => (
            <button
              key={p}
              className={`powertrain-tab ${powertrain === p ? "active" : ""}`}
              onClick={() => {
                setPowertrain(p);
                setVariant(VARIANTS_BY_POWERTRAIN[p][0]);
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* VARIANT */}
        <div className="variant-bar">
          {VARIANTS_BY_POWERTRAIN[powertrain].map((v) => (
            <button
              key={v}
              className={`variant-tab ${variant === v ? "active" : ""}`}
              onClick={() => setVariant(v)}
            >
              {v.replace("-", " - ")}
            </button>
          ))}
        </div>

        {/* SPECS */}
        <div className="spec-grid">
          {currentSpecs &&
  Object.values(currentSpecs)
    .slice(0, showAll ? undefined : 3) // agar showAll false hai to sirf first 3 sections
    .map((section, i) =>
      section?.data?.length > 0 ? (
        <div key={i}>
          <div className="spec-title">{section.title}</div>
          {section.data.map((row, j) => (
            <div key={j} className="spec-row">
              <span>{row.label}</span>
              <strong>{row.value}</strong>
            </div>
          ))}
        </div>
      ) : null
    )}

        </div>

        {/* VIEW ALL */}
        <div className="view-all">
          <button onClick={() => setShowAll(!showAll)}>
            VIEW ALL
          </button>
        </div>

        {/* DISCLAIMER */}
        <div className="disclaimer">
          <h3>DISCLAIMER:</h3>
          <p>{disclaimerPoints[0]}</p>
          {showDisclaimer &&
            disclaimerPoints.slice(1).map((p, i) => <p key={i}>* {p}</p>)}
          <button onClick={() => setShowDisclaimer(!showDisclaimer)}>
            {showDisclaimer ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </div>
      </div>
    </>
  );
}
