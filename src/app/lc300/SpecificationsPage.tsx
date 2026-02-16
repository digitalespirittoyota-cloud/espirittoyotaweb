


"use client";
import React, { useState } from "react";

interface SpecificationItem {
  label: string;
  value: {
    zx: string | string[];
    grs: string | string[];
  };
}

interface SpecificationSection {
  title: string;
  items: SpecificationItem[];
}

interface VehicleVariant {
  id: string;
  name: string;
}

interface Props {
  variants: VehicleVariant[];
  specifications: SpecificationSection[];
}

const SpecificationsPage: React.FC<Props> = ({
  variants,
  specifications,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(
    specifications[0]?.title
  );

  const renderValue = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value.map((line, idx) => (
        <div key={idx}>{line}</div>
      ));
    }
    return value;
  };

  return (
    <div className="spec-wrapper">

      {/* ===== HEADER ===== */}
      <div className="spec-header">
        <h1>Specifications</h1>

       <button
  className="brochure-btn"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/lc300/e-brochure-lc-300 (3).pdf";
    link.download = "Brochure.pdf";
    link.click();
  }}
>
  Download Brochure
</button>

      </div>

      {/* ===== VARIANT BAR ===== */}
      <div className="variant-bar">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className={`variant-title ${
              variant.id === "lc" ? "left" : ""
            }`}
          >
            {variant.name}
          </div>
        ))}
      </div>

      {/* ===== SECTIONS ===== */}
      {specifications.map((section) => (
        <div key={section.title}>
          <div
            className={`section-header ${
              activeSection === section.title ? "open" : ""
            }`}
            onClick={() =>
              setActiveSection(
                activeSection === section.title ? null : section.title
              )
            }
          >
            {section.title}
          </div>

          {activeSection === section.title &&
            section.items.map((item, i) => {
              const same =
                JSON.stringify(item.value.zx) ===
                JSON.stringify(item.value.grs);

              return (
                <div key={i} className="spec-row">
                  <div className="label">{item.label}</div>

                  {same ? (
                    <div className="value center">
                      {renderValue(item.value.zx)}
                    </div>
                  ) : (
                    <>
                      <div className="value">
                        {renderValue(item.value.zx)}
                      </div>
                      <div className="value">
                        {renderValue(item.value.grs)}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      ))}

    <style jsx>{`
  .spec-wrapper {
    padding: 60px 40px;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }

  /* ================= HEADER ================= */

  .spec-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px 30px 60px;
    gap: 20px;
  }

  .spec-header h1 {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: -1px;
    margin: 0;
  }

  /* ================= BROCHURE BUTTON ================= */

  .brochure-btn {
    background: #000;
    color: #fff;
    border: none;
    padding: 16px 42px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    clip-path: polygon(
      0 0,
      calc(100% - 22px) 0,
      100% 22px,
      100% 100%,
      0 100%
    );
  }

  .brochure-btn:hover {
    background: #e4002b;
    transform: translateY(-2px);
  }

  /* ================= VARIANT BAR ================= */

  .variant-bar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: #e5e5e5;
    padding: 24px 60px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;

    clip-path: polygon(
      0 0,
      calc(100% - 22px) 0,
      100% 22px,
      100% 100%,
      22px 100%,
      0 calc(100% - 22px)
    );
  }

  .variant-title {
    text-align: center;
  }

  .variant-title.left {
    text-align: left;
  }

  /* ================= SECTION HEADER ================= */

  .section-header {
    background: #e5e5e5;
    padding: 20px 60px;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 20px;

    clip-path: polygon(
      0 0,
      calc(100% - 22px) 0,
      100% 22px,
      100% 100%,
      22px 100%,
      0 calc(100% - 22px)
    );
  }

  .section-header.open {
    background: #000;
    color: #fff;
  }

  /* ================= SPEC ROW ================= */

  .spec-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 18px 60px;
    border-bottom: 1px solid #ddd;
    align-items: center;
  }

  .label {
    text-align: left;
    font-size: 16px;
    word-break: break-word;
  }

  .value {
    text-align: center;
    font-size: 16px;
    word-break: break-word;
  }

  .value div {
    margin-bottom: 4px;
  }

  .value.center {
    grid-column: 2 / 4;
    text-align: center;
  }

  /* ================= LARGE TABLET ================= */

  @media (max-width: 1200px) {
    .spec-header,
    .variant-bar,
    .section-header,
    .spec-row {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  /* ================= TABLET ================= */

  @media (max-width: 992px) {
    .spec-header h1 {
      font-size: 32px;
    }

    .variant-bar {
      font-size: 18px;
    }

    .section-header {
      font-size: 18px;
    }

    .spec-row {
      font-size: 15px;
    }
  }

  /* ================= MOBILE ================= */

  @media (max-width: 768px) {
    .spec-wrapper {
      padding: 40px 20px;
    }

    .spec-header {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 0 20px 0;
    }

    .spec-header h1 {
      font-size: 30px;
    }

    .brochure-btn {
      width: 100%;
      text-align: center;
      padding: 14px 20px;
    }

    .variant-bar {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 16px 20px;
      font-size: 16px;
    }

    .section-header {
      padding: 16px 20px;
      font-size: 16px;
    }

    .spec-row {
      grid-template-columns: 1fr;
      padding: 16px 20px;
      row-gap: 10px;
    }

    .label {
      font-weight: 600;
      text-align: left;
    }

    .value {
      text-align: left;
    }

    .value.center {
      grid-column: auto;
    }
  }

  /* ================= SMALL MOBILE ================= */

  @media (max-width: 480px) {
    .spec-header h1 {
      font-size: 26px;
    }

    .variant-bar {
      font-size: 14px;
    }

    .section-header {
      font-size: 14px;
    }

    .label,
    .value {
      font-size: 14px;
    }
  }
`}</style>

    </div>
  );
};

export default SpecificationsPage;






