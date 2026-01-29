
"use client";
import React, { useState } from "react";

interface SpecRow {
  label: string;
  G?: string;
  GX?: string;
  GXPlus?: string;
  VX?: string;
  ZX?: string;
}

/* ================= GRADE ================= */
const gradeSpecs: SpecRow[] = [
  
  { label: "Manual", G: "Manual", GX: "Manual", GXPlus: "Manual", VX: "Manual", ZX: "Manual" },

];

/* ================= ENGINE TYPE ================= */
const engineTypeSpecs: SpecRow[] = [
  { label: "Displacement", G: "2393 cm³", GX: "2393 cm³", GXPlus: "2393 cm³", VX: "2393 cm³", ZX: "2393 cm³" },
  { label: "Drive Modes", G: "ECO & Power", GX: "ECO & Power", GXPlus: "ECO & Power", VX: "ECO & Power", ZX: "ECO & Power" },
  { label: "Max Output", G: "110 kW (150 PS)", GX: "110 kW (150 PS)", GXPlus: "110 kW (150 PS)", VX: "110 kW (150 PS)", ZX: "110 kW (150 PS)" },
  { label: "Max Torque", G: "343 Nm", GX: "343 Nm", GXPlus: "343 Nm", VX: "343 Nm", ZX: "343 Nm" },
];

/* ================= ENGINE / TRANSMISSION ================= */
const engineSpecs: SpecRow[] = [
  { label: "Transmission Type", G: "5 Speed Manual", GX: "5 Speed Manual", GXPlus: "5 Speed Manual", VX: "5 Speed Manual", ZX: "5 Speed Manual" },
  { label: "Tyres", G: "205/65 R16 Steel", GX: "205/65 R16 Alloy", GXPlus: "215/55 R17 Alloy", VX: "215/55 R17 Alloy", ZX: "215/55 R17 Alloy" },
];

/* ================= INTERIOR ================= */
const interiorSpecs: SpecRow[] = [
  { label: "Ambient Illumination", G: "X", GX: "X", GXPlus: "X", VX: "✔", ZX: "✔" },
  { label: "Steering Wheel", G: "Urethane", GX: "Urethane", GXPlus: "Urethane", VX: "Leather", ZX: "Leather" },
  { label: "Speedometer", G: "MID", GX: "MID", GXPlus: "MID", VX: "3D TFT MID", ZX: "3D TFT MID" },
  { label: "Shift Lever Knob", G: "Urethane", GX: "Urethane", GXPlus: "Leather", VX: "Leather", ZX: "Leather" },
  { label: "Door Inner Garnish", G: "Material Colour", GX: "Material Colour", GXPlus: "Wood Finish", VX: "Silver & Piano Black", ZX: "Silver & Wood Finish" },
];

/* ================= EXTERIOR ================= */
const exteriorSpecs: SpecRow[] = [
  { label: "Radiator Grille", G: "New Design Black", GX: "New Design Black & Silver", GXPlus: "New Design Black & Silver", VX: "New Design Premium Black & Chrome", ZX: "New Design Premium Black & Chrome" },
  { label: "Grille Garnish", G: "X", GX: "X", GXPlus: "Silver", VX: "X", ZX: "X" },
  { label: "Bumper Emblem", G: '"CRYSTA" Embossed', GX: '"CRYSTA" Embossed', GXPlus: "Silver", VX: "Chrome", ZX: "Chrome" },
  { label: "Headlamp", G: "Multireflector", GX: "Multireflector", GXPlus: "Multireflector", VX: "Automatic LED Projector, Halogen with LED Clearance Lamp", ZX: "Automatic LED Projector, Halogen with LED Clearance Lamp" },
  { label: "Front Fog Lamp", G: "X", GX: "X", GXPlus: "With Silver Garnish", VX: "Halogen with Chrome Garnish", ZX: "Halogen with Chrome Garnish" },
  { label: "Wheels", G: "Steel Wheel with Full Wheel Cap", GX: "Steel Wheel with Full Wheel Cap", GXPlus: "Alloy Wheels", VX: "Alloy Wheels", ZX: "Alloy Wheels" },
  { label: "Outside Rear View Mirror", G: "Body Coloured, Electric Adjust with Side Turn Indicators", GX: "Body Coloured, Electric Adjust with Side Turn Indicators", GXPlus: "Body Coloured, Electric Adjust & Retract, Welcome Lights with Side Turn Indicators", VX: "Body Coloured, Electric Adjust & Retract, Welcome Lights with Side Turn Indicators", ZX: "Body Coloured, Electric Adjust & Retract, Welcome Lights with Side Turn Indicators" },
  { label: "Side P Mold", G: "X", GX: "X", GXPlus: "Chrome", VX: "X", ZX: "X" },
  { label: "Black-Out Door Frame", G: "X", GX: "✓", GXPlus: "With Side Visor Chrome", VX: "✓", ZX: "✓" },
  { label: "Door Outside Handle", G: "Body Colour", GX: "Body Colour", GXPlus: "Chrome", VX: "Chrome", ZX: "Chrome" },
];

/* ================= SEATS & COMFORT ================= */
const seatsSpecs: SpecRow[] = [
  { label: "Air Conditioner", G: "Manual", GX: "Manual", GXPlus: "Manual", VX: "Auto Climate", ZX: "Auto Climate" },
  { label: "Driver Seat Height Adjust", G: "X", GX: "X", GXPlus: "✔", VX: "✔", ZX: "✔" },
  { label: "8 Way Power Driver Seat", G: "X", GX: "X", GXPlus: "X", VX: "X", ZX: "✔" },
  { label: "Seat Material", G: "Fabric", GX: "Fabric", GXPlus: "Premium Fabric", VX: "Premium Fabric", ZX: "Leather Option" },
  { label: "Cruise Control", G: "X", GX: "X", GXPlus: "X", VX: "✔", ZX: "✔" },
];

/* ================= SAFETY ================= */
const safetySpecs: SpecRow[] = [
  { label: "Airbags", G: "3", GX: "3", GXPlus: "3", VX: "7", ZX: "7" },
  { label: "ABS + EBD", G: "✔", GX: "✔", GXPlus: "✔", VX: "✔", ZX: "✔" },
  { label: "Vehicle Stability Control", G: "✔", GX: "✔", GXPlus: "✔", VX: "✔", ZX: "✔" },
  { label: "Hill Start Assist", G: "✔", GX: "✔", GXPlus: "✔", VX: "✔", ZX: "✔" },
  { label: "Back Monitor", G: "X", GX: "X", GXPlus: "✔", VX: "✔", ZX: "✔" },
];

/* ================= COMPONENT ================= */
const Specifications: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const renderTable = (data: SpecRow[]) => (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
        <thead style={{  color: "#000" }}>
          <tr>
            <th style={th}>GRADE</th>
            <th style={th}>G</th>
            <th style={th}>GX</th>
            <th style={th}>GX+</th>
            <th style={th}>VX</th>
            <th style={th}>ZX</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i} style={{ textAlign: "center", borderBottom: "1px solid #ccc",color:"black" }}>
              <td style={td}>{r.label}</td>
              <td style={td}>{r.G}</td>
              <td style={td}>{r.GX}</td>
              <td style={td}>{r.GXPlus}</td>
              <td style={td}>{r.VX}</td>
              <td style={td}>{r.ZX}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const Section = ({ id, title, data }: any) => (
    <>
      <div style={section} onClick={() => setOpen(open === id ? null : id)}>
        <span>{title}</span>
        <span>{open === id ? "▲" : "▼"}</span>
      </div>
      {open === id && renderTable(data)}
    </>
  );

  return (
    <div style={{ maxWidth: 1200, margin: "auto", padding: 20 }}>
      <h2 style={{ textAlign: "center",color:"black",fontWeight:"bolder",fontSize:"50px" }}>SPECIFICATIONS</h2>

      <Section id="grade" title="GRADE" data={gradeSpecs} />
      <Section id="engineType" title="ENGINE TYPE" data={engineTypeSpecs} />
      <Section id="engine" title="ENGINE, TRANSMISSION & CHASSIS" data={engineSpecs} />
      <Section id="interior" title="INTERIOR" data={interiorSpecs} />
      <Section id="exterior" title="EXTERIOR" data={exteriorSpecs} />
      <Section id="seats" title="SEATS, COMFORT & CONVENIENCE" data={seatsSpecs} />
      <Section id="safety" title="SAFETY & SECURITY" data={safetySpecs} />
    </div>
  );
};

/* ================= STYLES ================= */
const section: React.CSSProperties = {
  background: "#34344a",
  color: "#fff",
  padding: "12px 20px",
  marginTop: 6,
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  fontWeight: 600,
};

const th: React.CSSProperties = { padding: 10, border: "1px solid #ccc" };
const td: React.CSSProperties = { padding: 10, border: "1px solid #ddd", textAlign: "center" };

export default Specifications;

