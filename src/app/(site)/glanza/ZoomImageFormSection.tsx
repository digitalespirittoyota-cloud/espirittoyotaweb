
"use client";
import { useEffect, useRef, useState } from "react";

interface FormField {
  label: string;
  options?: string[];
}

interface Props {
  testDriveImage: string;
  emiImage: string;
  testDriveFields: FormField[];
  emiFields: FormField[];
  emiTitle: string;
}

export default function ZoomImageFormSection({
  testDriveImage,
  emiImage,
  testDriveFields,
  emiFields,
  emiTitle,
}: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [exchangeChecked, setExchangeChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ width: "100%", color: "#000" }}>

      {/* ===== TEST DRIVE ===== */}
      <div style={rowStyle}>

        {/* Image stretches to match form height */}
        <div style={imagePanelStyle(visible)}>
          <img src={testDriveImage} style={imgStyle} alt="Test Drive" />
        </div>

        {/* Form panel — drives the height */}
        <div style={formPanelStyle(visible)}>
          <img
            src="/models/glanza/txttestdrive.webp"
            style={{ width: 160, marginBottom: 30 }}
            alt="Test Drive"
          />

          <div style={gridStyle}>
            {testDriveFields.map((f, i) =>
              f.options ? (
                <select
                  key={i}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(null)}
                  style={inputStyle(activeIndex === i)}
                >
                  <option>{f.label}</option>
                  {f.options.map((o, j) => (
                    <option key={j}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  key={i}
                  placeholder={f.label}
                  style={inputStyle(false)}
                />
              )
            )}
          </div>

          <div style={{ marginTop: 20 }}>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={exchangeChecked}
                onChange={(e) => setExchangeChecked(e.target.checked)}
                style={{ marginTop: 3 }}
              />
              <span>
                Would you like to exchange your existing car with{" "}
                <strong>Toyota U Trust</strong>
              </span>
            </label>

            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                style={{ marginTop: 3 }}
              />
              <span>
                I hereby agree to receive emails, calls and SMS related to
                promotional activities and services, by or on behalf of TKM.
                <span style={knowMoreStyle}> Know More</span>
              </span>
            </label>
          </div>

          <button
            style={{
              ...buttonStyle,
              opacity: consentChecked ? 1 : 0.5,
              cursor: consentChecked ? "pointer" : "not-allowed",
            }}
            disabled={!consentChecked}
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* ===== EMI ===== */}
      <div style={rowStyle}>
        <div style={imagePanelStyle(visible)}>
          <img src={emiImage} style={imgStyle} alt="EMI Calculator" />
        </div>

        <div style={formPanelStyle(visible)}>
          <h2 style={emiTitleStyle}>{emiTitle}</h2>

          {emiFields.map((f, i) => (
            <select
              key={i}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
              style={{ ...inputStyle(activeIndex === i), display: "block" }}
            >
              <option>{f.label}</option>
              {f.options?.map((o, j) => (
                <option key={j}>{o}</option>
              ))}
            </select>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== STYLES ===== */

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "stretch",   // both panels same height
};

// Image panel: fills the height driven by the form
const imagePanelStyle = (v: boolean): React.CSSProperties => ({
  flex: "1 1 55%",
  minWidth: 280,
  overflow: "hidden",
  transform: v ? "scale(1)" : "scale(1.08)",
  transition: "1.2s ease",
  // Key fix: use a fixed aspect ratio on desktop so image
  // doesn't go taller than the viewport
  maxHeight: "80vh",
});

const formPanelStyle = (v: boolean): React.CSSProperties => ({
  flex: "1 1 40%",
  minWidth: 280,
  background: "#fff",
  padding: "50px 40px",
  transform: v ? "translateY(0)" : "translateY(80px)",
  opacity: v ? 1 : 0,
  transition: "1s ease",
  color: "#000",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",   // vertically center form content
});

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  display: "block",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 16,
};

const inputStyle = (a: boolean): React.CSSProperties => ({
  width: "100%",
  padding: 14,
  marginBottom: 18,
  border: a ? "1px solid #0066ff" : "1.5px solid #000",
  color: "#000",
  fontSize: 14,
  boxSizing: "border-box",
  background: "#fff",
  outline: "none",
});

const buttonStyle: React.CSSProperties = {
  marginTop: 20,
  padding: "12px 40px",
  background: "#63c018",
  border: "none",
  cursor: "pointer",
  color: "#fff",
  fontWeight: 500,
  fontSize: 14,
  letterSpacing: 1,
  alignSelf: "flex-start",
};

const checkboxLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  fontSize: 13,
  color: "#000",
  lineHeight: 1.5,
  marginBottom: 12,
  cursor: "pointer",
};

const knowMoreStyle: React.CSSProperties = {
  color: "#d32f2f",
  marginLeft: 4,
  cursor: "pointer",
  fontWeight: 500,
};

const emiTitleStyle: React.CSSProperties = {
  marginBottom: 30,
  padding: "14px 18px",
  borderTop: "2px solid #000",
  borderRight: "2px solid #000",
  color: "#000",
  fontSize: 18,
  fontWeight: 600,
};