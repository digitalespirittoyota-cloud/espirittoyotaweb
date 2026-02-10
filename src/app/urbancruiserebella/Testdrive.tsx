
"use client";
import React, { useEffect, useState } from "react";

/* ================= TYPES ================= */

interface FormField {
  label: string;
  options?: string[];
}

interface Props {
  testDriveFields: FormField[];
}

/* ================= COMPONENT ================= */

export default function Testdrive({ testDriveFields }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [consentChecked, setConsentChecked] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={sectionStyle}>
      <div
        style={{
          ...containerStyle,
          justifyContent: isMobile ? "center" : "flex-end",
        }}
      >
        <div
          style={{
            ...formWrapperStyle,
            width: isMobile ? "100%" : "760px",
          }}
        >
          <h2 style={titleStyle}>TEST DRIVE</h2>

          {/* FORM GRID */}
          <div
            style={{
              ...gridStyle,
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            }}
          >
            {testDriveFields.map((field, i) =>
              field.options ? (
                <select key={i} style={inputStyle}>
                  <option>{field.label}</option>
                  {field.options.map((opt, j) => (
                    <option key={j}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  key={i}
                  style={inputStyle}
                  placeholder={field.label}
                />
              )
            )}
          </div>

          {/* CHECKBOXES */}
          <div style={checkboxWrapStyle}>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" />
              <span>
                Would you like to exchange your existing car with
                <strong> Toyota U Trust</strong>?
              </span>
            </label>

            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
              />
              <span>
                I agree to receive emails, calls and SMS related to promotions and
                services from TKM.
                <span style={knowMoreStyle}> Know More</span>
              </span>
            </label>
          </div>

          {/* SUBMIT */}
          <button
            disabled={!consentChecked}
            style={{
              ...submitStyle,
              opacity: consentChecked ? 1 : 0.6,
              cursor: consentChecked ? "pointer" : "not-allowed",
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const sectionStyle: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  color:"#000",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1400px",
  margin: "0 auto",
  display: "flex",
  padding: "60px 20px",
};

const formWrapperStyle: React.CSSProperties = {
  background: "#fff",
};

const titleStyle: React.CSSProperties = {
  fontSize: "32px",
  fontStyle: "italic",
  fontWeight: 500,
  marginBottom: "28px",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gap: "18px 24px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "46px",
  border: "1px solid #cfcfcf",
  padding: "0 14px",
  fontSize: "14px",
  outline: "none",
  background: "#fff",
  
};

const checkboxWrapStyle: React.CSSProperties = {
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const checkboxLabelStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  fontSize: "14px",
  lineHeight: 1.4,
  cursor: "pointer",
};

const knowMoreStyle: React.CSSProperties = {
  color: "#e11c2a",
  fontWeight: 500,
  marginLeft: "4px",
  cursor: "pointer",
};

const submitStyle: React.CSSProperties = {
  marginTop: "26px",
  width: "100%",
  height: "48px",
  background: "#d9534f",
  color: "#fff",
  border: "none",
  fontSize: "15px",
  fontWeight: 500,
};
