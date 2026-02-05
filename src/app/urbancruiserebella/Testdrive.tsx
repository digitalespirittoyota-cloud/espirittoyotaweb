
"use client";
import { useEffect, useRef, useState } from "react";

/* ================= TYPES ================= */

interface FormField {
  label: string;
  options?: string[];
}

interface Props {
  emiImage: string;
  testDriveFields: FormField[];
}

/* ================= COMPONENT ================= */

export default function Testdrive({
//   testDriveImage,
  
  testDriveFields,
  
}: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ✅ CHECKBOX STATES (INSIDE COMPONENT)
  const [exchangeChecked, setExchangeChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ width: "100%", color: "#000", }}>
      {/* ================= TEST DRIVE ================= */}
      <div style={wrapperStyle}>
        <div style={imageStyle(visible)}>
          
        </div>

        <div style={formStyle(visible)}>
          <p style={{ fontSize: 34, fontWeight: 590, marginBottom: 10 ,fontStyle:"italic"}}>
            TEST DRIVE
          </p>

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

          {/* ===== CHECKBOX SECTION ===== */}
          <div style={{ marginTop: 20 }}>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={exchangeChecked}
                onChange={(e) => setExchangeChecked(e.target.checked)}
                style={checkboxStyle}
              />
              <span>
                Would you like to exchange your existing car with
                <strong> Toyota U Trust</strong>
              </span>
            </label>

            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                style={checkboxStyle}
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
              opacity: consentChecked ? 1 : 0.9,
              cursor: consentChecked ? "pointer" : "not-allowed",
            }}
            disabled={!consentChecked}
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* ================= EMI ================= */}
      
    </section>
  );
}

/* ================= STYLES ================= */

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: "720px",
  justifyContent: "center",
  alignItems: "stretch",
};

const imageStyle = (v: boolean): React.CSSProperties => ({
  flex: "1 1 30%",
  minWidth: 280,
  backgroundColor:"#fff",
//   transform: v ? "scale(1)" : "scale(1.08)",
//   transition: "1.2s ease",
});

const formStyle = (v: boolean): React.CSSProperties => ({
  flex: "1 1 35%",
  minWidth: 280,
  background: "#fff",
  padding: "50px 30px",
  transform: v ? "translateY(0)" : "translateY(80px)",
  opacity: v ? 1 : 0,
  transition: "1s ease",
  color: "#000",
  boxSizing: "border-box",
});

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
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
});

const buttonStyle: React.CSSProperties = {
  marginTop: 30,
  padding: "7px 340px",
  background: "#e12b1adf",
  border: "none",
  cursor: "pointer",
  color: "#fff",
  fontWeight: 400,
};

const checkboxLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  fontSize: 13,
  color: "#000",
  lineHeight: 1.4,
  marginBottom: 12,
  cursor: "pointer",
};

const checkboxStyle: React.CSSProperties = {
  marginTop: 3,
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
