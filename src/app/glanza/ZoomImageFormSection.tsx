

// "use client";
// import { useEffect, useRef, useState } from "react";


// interface FormField {
//   label: string;
//   options?: string[];
// }

// interface Props {
//   testDriveImage: string;
//   emiImage: string;
//   testDriveFields: FormField[];
//   emiFields: FormField[];
//   emiTitle: string;
// }

// export default function ZoomImageFormSection({
//   testDriveImage,
//   emiImage,
//   testDriveFields,
//   emiFields,
//   emiTitle,
// }: Props) {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const [visible, setVisible] = useState(false);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setVisible(true),
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} style={{ width: "100%", color: "#000" }}>
//       {/* ================= TEST DRIVE ================= */}
//       <div style={{ ...wrapperStyle }}>
//         <div style={imageStyle(visible)}>
//           <img src={testDriveImage} style={imgStyle} />
//         </div>

//         <div style={formStyle(visible)}>
//           <img
//             src="https://static.toyotabharat.com/images/showroom/glanza/new/txt-testdrive.png"
//             style={{ width: 160, marginBottom: 30 }}
//           />

//           <div style={gridStyle}>
//             {testDriveFields.map((f, i) =>
//               f.options ? (
//                 <select
//                   key={i}
//                   onFocus={() => setActiveIndex(i)}
//                   onBlur={() => setActiveIndex(null)}
//                   style={inputStyle(activeIndex === i)}
//                 >
//                   <option>{f.label}</option>
//                   {f.options.map((o, j) => (
//                     <option key={j}>{o}</option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   key={i}
//                   placeholder={f.label}
//                   style={inputStyle(false)}
//                 />
//               )
//             )}
//           </div>

//           <button style={buttonStyle}>SUBMIT</button>
//         </div>
//       </div>

//       {/* ================= EMI ================= */}
//       <div style={{ ...wrapperStyle }}>
//         <div style={imageStyle(visible)}>
//           <img src={emiImage} style={imgStyle} />
//         </div>

//         <div style={formStyle(visible)}>
//           <h2 style={emiTitleStyle}>{emiTitle}</h2>

//           {emiFields.map((f, i) => (
//             <select
//               key={i}
//               onFocus={() => setActiveIndex(i)}
//               onBlur={() => setActiveIndex(null)}
//               style={inputStyle(activeIndex === i)}
//             >
//               <option>{f.label}</option>
//               {f.options?.map((o, j) => (
//                 <option key={j}>{o}</option>
//               ))}
//             </select>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const wrapperStyle: React.CSSProperties = {
//   display: "flex",
//   flexWrap: "wrap",
//   minHeight: "720px",
//   justifyContent: "center",
//   alignItems: "stretch",
// };

// const imageStyle = (v: boolean): React.CSSProperties => ({
//   flex: "1 1 60%",
//   minWidth: 280,
//   transform: v ? "scale(1)" : "scale(1.08)",
//   transition: "1.2s ease",
// });

// const formStyle = (v: boolean): React.CSSProperties => ({
//   flex: "1 1 35%",
//   minWidth: 280,
//   background: "#fff",
//   padding: "50px 30px",
//   transform: v ? "translateY(0)" : "translateY(80px)",
//   opacity: v ? 1 : 0,
//   transition: "1s ease",
//   color: "#000",
//   boxSizing: "border-box",
// });

// const imgStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
// };

// const gridStyle: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 16,
// };

// const inputStyle = (a: boolean): React.CSSProperties => ({
//   width: "100%",
//   padding: 14,
//   marginBottom: 18,
//   border: a ? "1px solid #0066ff" : "1.5px solid #000",
//   color: "#000",
//   fontSize: 14,
//   boxSizing: "border-box",
// });

// const buttonStyle: React.CSSProperties = {
//   marginTop: 30,
//   padding: "10px 40px",
//   background: "#63c018",
//   border: "none",
//   cursor: "pointer",
//   color: "#fff",
//   fontWeight: 400,
// };

// const emiTitleStyle: React.CSSProperties = {
//   marginBottom: 30,
//   padding: "14px 18px",
//   borderTop: "2px solid #000",
//   borderRight: "2px solid #000",
//   color: "#000",
//   fontSize: 18,
//   fontWeight: 600,
// };

// /* ================= RESPONSIVE MEDIA QUERIES ================= */
// const responsiveStyles = `
//   @media (max-width: 1024px) {
//     .wrapper { flex-direction: column; }
//     .form { width: 100%; padding: 40px 20px; }
//   }
//   @media (max-width: 768px) {
//     .form { padding: 30px 15px; }
//     select, input { font-size: 13px; }
//   }
//   @media (max-width: 425px) {
//     .form { padding: 20px 10px; }
//     select, input { font-size: 12px; }
//   }
//   @media (max-width: 375px) {
//     select, input { font-size: 11px; padding: 10px; }
//   }
//   @media (max-width: 320px) {
//     select, input { font-size: 10px; padding: 8px; }
//   }
// `;






















"use client";
import { useEffect, useRef, useState } from "react";

/* ================= TYPES ================= */

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

/* ================= COMPONENT ================= */

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
    <section ref={sectionRef} style={{ width: "100%", color: "#000" }}>
      {/* ================= TEST DRIVE ================= */}
      <div style={wrapperStyle}>
        <div style={imageStyle(visible)}>
          <img src={testDriveImage} style={imgStyle} />
        </div>

        <div style={formStyle(visible)}>
          <img
            src="https://static.toyotabharat.com/images/showroom/glanza/new/txt-testdrive.png"
            style={{ width: 160, marginBottom: 30 }}
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
              opacity: consentChecked ? 1 : 0.5,
              cursor: consentChecked ? "pointer" : "not-allowed",
            }}
            disabled={!consentChecked}
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* ================= EMI ================= */}
      <div style={wrapperStyle}>
        <div style={imageStyle(visible)}>
          <img src={emiImage} style={imgStyle} />
        </div>

        <div style={formStyle(visible)}>
          <h2 style={emiTitleStyle}>{emiTitle}</h2>

          {emiFields.map((f, i) => (
            <select
              key={i}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
              style={inputStyle(activeIndex === i)}
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

/* ================= STYLES ================= */

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  minHeight: "720px",
  justifyContent: "center",
  alignItems: "stretch",
};

const imageStyle = (v: boolean): React.CSSProperties => ({
  flex: "1 1 60%",
  minWidth: 280,
  transform: v ? "scale(1)" : "scale(1.08)",
  transition: "1.2s ease",
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
  padding: "10px 40px",
  background: "#63c018",
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
