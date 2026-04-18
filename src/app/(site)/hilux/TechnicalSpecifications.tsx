"use client";

import { useState } from "react";
import { specificationsData } from "./data";
import "./technical.css";

export default function TechnicalSpecifications() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="tech-section">
      <h2 className="tech-title">Technical Specifications</h2>

      {specificationsData.map((section, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleSection(index)}
          >
            <span>{section.title}</span>
            <span className="icon">
              {activeIndex === index ? "–" : "+"}
            </span>
          </div>

          {activeIndex === index && (
            <div className="accordion-content">
              {section.blocks.map((block: any, i: number) => (
                <div key={i} className="block-wrapper">
                  
                  {/* TABLE */}
                  {block.type === "table" && (
                    <table className="spec-table">
                      <tbody>
                        {block.rows.map((row: any, j: number) => (
                          <tr key={j}>
                            <td className="label">{row.label}</td>
                            <td className="value">
                              {row.value.split("\n").map(
                                (line: string, k: number) => (
                                  <div key={k}>{line}</div>
                                )
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {/* BULLET */}
                  {block.type === "bullet" && (
                    <ul className="bullet-list">
                      {block.items.map(
                        (item: string[] | string, j: number) => (
                          <li key={j}>
                            {Array.isArray(item)
                              ? item.map((line, k) => (
                                  <div key={k}>{line}</div>
                                ))
                              : item}
                          </li>
                        )
                      )}
                    </ul>
                  )}

                  {/* TWO COLUMN */}
                  {block.type === "twoColumn" && (
                    <div className="two-column">
                      {block.rows.map((row: any, j: number) => (
                        <div className="row" key={j}>
                          <div className="left">{row.left}</div>
                          <div className="right">{row.right}</div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
