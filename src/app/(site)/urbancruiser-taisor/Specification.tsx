"use client";
/**
 * TaisorSpecifications.tsx
 * Exact pixel-match of the Specifications section from:
 * https://www.toyotabharat.com/showroom/urbancruiser-taisor/
 *
 * Colors extracted via pixel analysis of the live site screenshot:
 *   Page outer BG          : #e6e6e6
 *   Label column BG        : #f5f5f5
 *   Section row BG (odd)   : #f5f5f5
 *   Section row BG (even)  : #f2f2f2
 *   Section border         : #e8e8e8
 *   Section label text     : #000000
 *   Section arrow          : #000000
 *   Variant card header BG : #2d2d2d
 *   Variant section dark   : #606060
 *   Variant name text      : #ffffff
 *   Starting At label      : #999999
 *   Price text             : #ffffff
 *   Remove btn border      : #808080
 *   Remove btn text        : #cccccc
 *   Active tab BG          : #eb0a1e  (Toyota Red)
 *   Inactive tab BG        : #282830  (Toyota Near-Black)
 *   Tab text               : #ffffff
 *   View All border        : #1a1a1a
 *   View All text          : #1a1a1a
 *   Disclaimer BG          : #ffffff
 *   Disclaimer title       : #000000
 *   Disclaimer body        : #444444
 *   Nav arrow BG           : #f5f5f5
 *   Nav arrow text         : #333333
 *   Nav arrow border       : #cccccc
 *
 * Font: Toyota uses 'ToyotaType' (proprietary). Fallback: Arial, Helvetica, sans-serif.
 *   Variant name       : 16px / bold / #ffffff
 *   Starting At        : 11px / normal / #999
 *   Price              : 17px / bold / #ffffff
 *   Remove btn         : 12px / normal / #ccc
 *   SPECIFICATIONS     : 38px / 900 / italic / #000
 *   Section label      : 13px / 700 / #000  (uppercase tracking)
 *   Arrow              : 10px / #000
 *   Disclaimer title   : 11px / 700 / #000 / letter-spacing 1.5px / uppercase
 *   Disclaimer body    : 12px / 400 / #444
 *   Tab text           : 18px / 700 / italic / #fff
 *   View All           : 13px / 700 / #1a1a1a / border 1.5px
 */

import { useState, useRef } from "react";

/* ─── Types ──────────────────────────────────────────────── */
interface Variant {
  name: string;
  price: string;
}

interface SpecRow {
  label: string;
  vals: string[];
}

interface SpecSection {
  section: string;
  rows: SpecRow[];
}

/* ─── Toyota Brand Colors (exact) ────────────────────────── */
const TOYOTA_RED    = "#eb0a1e";
const TOYOTA_DARK   = "#282830";
const PAGE_BG       = "#e6e6e6";
const LABEL_COL_BG  = "#f5f5f5";
const SEC_ROW_ODD   = "#f5f5f5";
const SEC_ROW_EVEN  = "#f2f2f2";
const SEC_BORDER    = "#e8e8e8";
const CARD_DARK_BG  = "#2d2d2d";
const CARD_SEC_BG   = "#3c3c3c";   /* section placeholder on dark variant col */
const DISCLAIMER_BG = "#ffffff";

/* ─── Data ───────────────────────────────────────────────── */
const ALL_VARIANTS: Variant[] = [
  { name: "E MT",              price: "₹ 7,25,000/-"  },
  { name: "S MT",              price: "₹ 7,74,000/-"  },
  { name: "E MT (CNG)",        price: "₹ 8,24,000/-"  },
  { name: "S+ MT",             price: "₹ 8,47,000/-"  },
  { name: "S AMT",             price: "₹ 8,72,000/-"  },
  { name: "S+ AMT",            price: "₹ 9,06,000/-"  },
  { name: "G 1.0L Turbo MT",   price: "₹ 10,20,000/-" },
  { name: "V 1.0L Turbo MT",   price: "₹ 11,08,000/-" },
  { name: "G 1.0L Turbo AT",   price: "₹ 11,40,000/-" },
  { name: "V 1.0L Turbo AT",   price: "₹ 12,23,000/-" },
];

/* Default visible in screenshot: S AMT, S+ AMT, G 1.0L Turbo MT, V 1.0L Turbo MT */
const DEFAULT_VISIBLE = [4, 5, 6, 7];

const SECTIONS: SpecSection[] = [
  {
    section: "DIMENSIONS",
    rows: [
      { label: "Length (cm)",            vals: ["399.5","399.5","399.5","399.5","399.5","399.5","399.5","399.5","399.5","399.5"] },
      { label: "Width (cm)",             vals: ["176.5","176.5","176.5","176.5","176.5","176.5","176.5","176.5","176.5","176.5"] },
      { label: "Height (unladen) (cm)",  vals: ["155.0","155.0","155.0","155.0","155.0","155.0","155.5","155.5","155.5","155.5"] },
      { label: "Wheelbase (cm)",         vals: ["252.0","252.0","252.0","252.0","252.0","252.0","252.0","252.0","252.0","252.0"] },
      { label: "Ground Clearance (mm)",  vals: ["190","190","190","190","190","190","190","190","190","190"] },
    ],
  },
  {
    section: "WEIGHT",
    rows: [
      { label: "Kerb Weight (kg)",           vals: ["960","965","1015","970","970","975","1015","1020","1020","1025"] },
      { label: "Gross Vehicle Weight (kg)",  vals: ["1425","1430","1460","1430","1430","1440","1460","1465","1465","1470"] },
    ],
  },
  {
    section: "ENGINE, TRANSMISSION & CHASSIS",
    rows: [
      { label: "Engine Type",                     vals: ["K12N","K12N","K12N (CNG)","K12N","K12N","K12N","K10C Turbo","K10C Turbo","K10C Turbo","K10C Turbo"] },
      { label: "Displacement (cc)",               vals: ["1197","1197","1197","1197","1197","1197","998","998","998","998"] },
      { label: "No. of Cylinders",                vals: ["4","4","4","4","4","4","3","3","3","3"] },
      { label: "Max. Power (PS @ rpm)",           vals: ["90 @ 6000","90 @ 6000","77.4 @ 6000","90 @ 6000","90 @ 6000","90 @ 6000","100 @ 5500","100 @ 5500","100 @ 5500","100 @ 5500"] },
      { label: "Max. Torque (Nm @ rpm)",          vals: ["113 @ 4400","113 @ 4400","98.5 @ 4300","113 @ 4400","113 @ 4400","113 @ 4400","147.6 @ 2000-4500","147.6 @ 2000-4500","147.6 @ 2000-4500","147.6 @ 2000-4500"] },
      { label: "Fuel Type",                       vals: ["Petrol","Petrol","CNG + Petrol","Petrol","Petrol","Petrol","Petrol","Petrol","Petrol","Petrol"] },
      { label: "Emission Norm",                   vals: ["BS6 Phase 2","BS6 Phase 2","BS6 Phase 2","BS6 Phase 2","BS6 Phase 2","BS6 Phase 2","BS6 Phase 2","BS6 Phase 2","BS6 Phase 2","BS6 Phase 2"] },
      { label: "Transmission Type",               vals: ["Manual","Manual","Manual","Manual","AMT","AMT","Manual","Manual","Automatic","Automatic"] },
      { label: "No. of Gears",                    vals: ["5","5","5","5","5","5","5","5","6","6"] },
      { label: "Drive Type",                      vals: ["FWD","FWD","FWD","FWD","FWD","FWD","FWD","FWD","FWD","FWD"] },
      { label: "Front Suspension",                vals: ["MacPherson Strut","MacPherson Strut","MacPherson Strut","MacPherson Strut","MacPherson Strut","MacPherson Strut","MacPherson Strut","MacPherson Strut","MacPherson Strut","MacPherson Strut"] },
      { label: "Rear Suspension",                 vals: ["Torsion Beam","Torsion Beam","Torsion Beam","Torsion Beam","Torsion Beam","Torsion Beam","Torsion Beam","Torsion Beam","Torsion Beam","Torsion Beam"] },
      { label: "Front Brake",                     vals: ["Disc","Disc","Disc","Disc","Disc","Disc","Disc","Disc","Disc","Disc"] },
      { label: "Rear Brake",                      vals: ["Drum","Drum","Drum","Drum","Drum","Drum","Drum","Drum","Drum","Drum"] },
      { label: "Fuel Efficiency (km/l or km/kg)", vals: ["21.71","21.71","28.51 km/kg","21.71","22.79","22.79","21.18","21.18","19.86","19.86"] },
    ],
  },
  
];

/* ─── Dimension constants (px) ───────────────────────────── */
const LABEL_COL_W   = 308;   /* fixed label column width */
const VARIANT_COL_W = 308;   /* each variant column width */
const HEADER_H      = 118;   /* variant card header height */
const SECTION_H     = 56;    /* each section accordion row height */
const DATA_ROW_H    = 50;    /* each spec data row height */

/* ─── Component ──────────────────────────────────────────── */
export default function TaisorSpecifications() {
  const [shown, setShown]     = useState<boolean[]>(
    ALL_VARIANTS.map((_, i) => DEFAULT_VISIBLE.includes(i))
  );
  const [expanded, setExpanded] = useState<Record<number, boolean>>(
    Object.fromEntries(SECTIONS.map((_, i) => [i, false]))
  );
  const [activeTab, setActiveTab] = useState<"spec" | "feat">("spec");
  const scrollRef = useRef<HTMLDivElement>(null);

  const visibleIdx = ALL_VARIANTS.map((_, i) => i).filter(i => shown[i]);

  const removeVariant = (vi: number) =>
    setShown(p => { const n = [...p]; n[vi] = false; return n; });

  const toggleSection = (si: number) =>
    setExpanded(p => ({ ...p, [si]: !p[si] }));

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "left" ? -VARIANT_COL_W : VARIANT_COL_W, behavior: "smooth" });

  return (
    <>
      {/* Inject Toyota Type font + global resets */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,600;0,700;0,900;1,700;1,900&display=swap');
        .tkm-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
        .tkm-scroll::-webkit-scrollbar { display: none; }
        .tkm-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .tkm-sec-row:hover  { background: #ebebeb !important; cursor: pointer; }
        .tkm-remove:hover   { background: rgba(255,255,255,0.07) !important; }
        .tkm-nav:hover      { background: #ebebeb !important; }
        .tkm-viewall:hover  { background: #f0f0f0 !important; }
      `}</style>

      <div
        className="tkm-wrap"
        style={{
          fontFamily: "'ToyotaType', 'Noto Sans', Arial, Helvetica, sans-serif",
          background: PAGE_BG,
          padding: "0 0 0",
          minWidth: 0,
        }}
      >

        {/* ── TOP ROW: Tabs + View All ──────────────────── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "0 24px 14px",
        }}>
          {/* Parallelogram tabs */}
          <div style={{ display: "flex", height: "52px" }}>

            {/* Specifications tab */}
            <button
              onClick={() => setActiveTab("spec")}
              style={{
                height: "52px",
                padding: "0 52px",
                background: activeTab === "spec" ? TOYOTA_RED : TOYOTA_DARK,
                border: "none",
                outline: "none",
                cursor: "pointer",
                clipPath: "polygon(0 0, 91% 0, 100% 100%, 0% 100%)",
                position: "relative",
                zIndex: activeTab === "spec" ? 2 : 1,
              }}
            >
              <em style={{
                fontSize: "14px",
                fontWeight: 700,
                fontStyle: "italic",
                color: "#ffffff",
                letterSpacing: "0.2px",
                fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
              }}>Specifications</em>
            </button>

            {/* Features tab */}
            <button
              onClick={() => setActiveTab("feat")}
              style={{
                height: "52px",
                padding: "0 52px",
                background: activeTab === "feat" ? TOYOTA_RED : TOYOTA_DARK,
                border: "none",
                outline: "none",
                cursor: "pointer",
                clipPath: "polygon(0 0, 100% 0, 91% 100%, 9% 100%)",
                marginLeft: "-16px",
                position: "relative",
                zIndex: activeTab === "feat" ? 2 : 1,
              }}
            >
              <em style={{
                fontSize: "18px",
                fontWeight: 700,
                fontStyle: "italic",
                color: "#ffffff",
                letterSpacing: "0.2px",
                fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
              }}>Features</em>
            </button>
          </div>

          {/* View All + */}
          <button
            className="tkm-viewall"
            style={{
              border: "1.5px solid #1a1a1a",
              padding: "8px 22px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1a1a1a",
              background: "#ffffff",
              cursor: "pointer",
              letterSpacing: "0.3px",
              fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
            }}
          >
            View All +
          </button>
        </div>

        {/* ── MAIN PANEL ─────────────────────────────────── */}
        <div style={{
          display: "flex",
          margin: "0 24px",
          background: PAGE_BG,
          position: "relative",
          overflow: "hidden",
        }}>

          {/* ── FIXED LABEL COLUMN ── */}
          <div style={{
            flexShrink: 0,
            width: LABEL_COL_W,
            background: LABEL_COL_BG,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
          }}>

            {/* Hero cell — "SPECIFICATIONS" */}
            <div style={{
              height: HEADER_H,
              background: LABEL_COL_BG,
              display: "flex",
              alignItems: "center",
              padding: "0 22px",
              borderBottom: `1px solid ${SEC_BORDER}`,
              borderRight: `1px solid ${SEC_BORDER}`,
              flexShrink: 0,
            }}>
              <span style={{
                fontSize: "37px",
                fontWeight: 700,
                fontStyle: "Sans-Serif",
                color: "#000000",
                letterSpacing: "-0.5px",
                lineHeight: 1.0,
                fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
              }}>
                SPECIFICATIONS
              </span>
            </div>

            {/* Section accordion rows */}
            {SECTIONS.map((sec, si) => (
              <div key={si} style={{ flexShrink: 0 }}>
                {/* Section header */}
                <div
                  className="tkm-sec-row"
                  onClick={() => toggleSection(si)}
                  style={{
                    height: SECTION_H,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 22px",
                    background: si % 2 === 0 ? SEC_ROW_ODD : SEC_ROW_EVEN,
                    borderBottom: `1px solid ${SEC_BORDER}`,
                    borderRight: `1px solid ${SEC_BORDER}`,
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <span style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#000000",
                    lineHeight: 1.35,
                    maxWidth: "220px",
                    fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
                  }}>
                    {sec.section}
                  </span>
                  <span style={{
                    fontSize: "10px",
                    color: "#000000",
                    marginLeft: "8px",
                    flexShrink: 0,
                    fontWeight: 400,
                  }}>
                    {expanded[si] ? "▲" : "▼"}
                  </span>
                </div>

                {/* Expanded spec label rows */}
                {expanded[si] && sec.rows.map((row, ri) => (
                  <div
                    key={ri}
                    style={{
                      height: DATA_ROW_H,
                      display: "flex",
                      alignItems: "center",
                      padding: "0 22px",
                      background: ri % 2 === 0 ? "#ffffff" : "#f7f7f7",
                      borderBottom: `1px solid ${SEC_BORDER}`,
                      borderRight: `1px solid ${SEC_BORDER}`,
                    }}
                  >
                    <span style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#333333",
                      lineHeight: 1.4,
                      fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
                    }}>
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* ── SCROLLABLE VARIANT AREA ── */}
          <div style={{ flex: 1, position: "relative", minWidth: 0 }}>

            {/* Left nav arrow — overlaps border of label col */}
            <button
              className="tkm-nav"
              onClick={() => scroll("left")}
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: "36px",
                height: "46px",
                background: "#f5f5f5",
                border: `1px solid #cccccc`,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                color: "#333333",
                padding: 0,
                boxShadow: "1px 0 4px rgba(0,0,0,0.08)",
              }}
            >
              &#171;
            </button>

            {/* Right nav arrow */}
            <button
              className="tkm-nav"
              onClick={() => scroll("right")}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: "36px",
                height: "46px",
                background: "#f5f5f5",
                border: `1px solid #cccccc`,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                color: "#333333",
                padding: 0,
                boxShadow: "-1px 0 4px rgba(0,0,0,0.08)",
              }}
            >
              &#187;
            </button>

            {/* Scrollable variant strip */}
            <div
              className="tkm-scroll"
              ref={scrollRef}
              style={{
                display: "flex",
                overflowX: "auto",
                height: "100%",
              }}
            >
              {visibleIdx.map((vi) => (
                <div
                  key={vi}
                  style={{
                    flexShrink: 0,
                    width: VARIANT_COL_W,
                    display: "flex",
                    flexDirection: "column",
                    borderRight: "1px solid #222222",
                  }}
                >
                  {/* ── Variant header ── */}
                  <div style={{
                    height: HEADER_H,
                    background: CARD_DARK_BG,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "18px 18px 16px",
                    flexShrink: 0,
                    borderBottom: "1px solid #222222",
                  }}>
                    {/* Variant name */}
                    <span style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "0.15px",
                      fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
                    }}>
                      {ALL_VARIANTS[vi].name}
                    </span>

                    {/* Starting At + Price + Remove */}
                    <div style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}>
                      <div>
                        <span style={{
                          display: "block",
                          fontSize: "11px",
                          fontWeight: 400,
                          color: "#999999",
                          marginBottom: "3px",
                          letterSpacing: "0.3px",
                          fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
                        }}>
                          Starting At
                        </span>
                        <span style={{
                          display: "block",
                          fontSize: "17px",
                          fontWeight: 700,
                          color: "#ffffff",
                          letterSpacing: "0.1px",
                          fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
                        }}>
                          {ALL_VARIANTS[vi].price}
                        </span>
                      </div>

                      <button
                        className="tkm-remove"
                        onClick={() => removeVariant(vi)}
                        style={{
                          background: "transparent",
                          border: "1px solid #808080",
                          color: "#cccccc",
                          fontSize: "12px",
                          fontWeight: 400,
                          padding: "6px 13px",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          letterSpacing: "0.2px",
                          flexShrink: 0,
                          fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
                        }}
                      >
                        Remove −
                      </button>
                    </div>
                  </div>

                  {/* ── Section rows (dark placeholder + expanded data) ── */}
                  {SECTIONS.map((sec, si) => (
                    <div key={si} style={{ flexShrink: 0 }}>
                      {/* Dark section placeholder cell */}
                      <div style={{
                        height: SECTION_H,
                        background: CARD_SEC_BG,
                        borderBottom: "1px solid #222222",
                        flexShrink: 0,
                      }} />

                      {/* Expanded data cells */}
                      {expanded[si] && sec.rows.map((row, ri) => (
                        <div
                          key={ri}
                          style={{
                            height: DATA_ROW_H,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 12px",
                            fontSize: "13px",
                            fontWeight: 400,
                            color: "#1a1a1a",
                            background: ri % 2 === 0 ? "#ffffff" : "#f7f7f7",
                            borderBottom: `1px solid ${SEC_BORDER}`,
                            textAlign: "center",
                            flexShrink: 0,
                            fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
                          }}
                        >
                          {row.vals[vi] === "—"
                            ? <span style={{ color: "#bbbbbb" }}>—</span>
                            : row.vals[vi]}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DISCLAIMER ──────────────────────────────────── */}
        <div style={{
          background: DISCLAIMER_BG,
          margin: "0 24px",
          padding: "20px 22px 24px",
          borderTop: "1px solid #e0e0e0",
        }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#000000",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "12px",
            fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
          }}>
            DISCLAIMER
          </p>
          <p style={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#444444",
            lineHeight: 1.7,
            marginBottom: "6px",
            fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
          }}>
            1 – Spare tyre wheel is steel material. Size is 195/60 R16 (40.64cm).
          </p>
          <p style={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#444444",
            lineHeight: 1.7,
            fontFamily: "'ToyotaType', 'Noto Sans', Arial, sans-serif",
          }}>
            2 – Application features &amp; displays may vary depending on different operating systems or
            smartphone devices used. Avoid using the phone while driving for your safety. Apple CarPlay
            is a registered trademark of Apple Inc. Android Auto is a registered Trademark of Google Inc.
            Bluetooth is a registered trademark of Bluetooth SIG.
          </p>
        </div>

      </div>
    </>
  );
}