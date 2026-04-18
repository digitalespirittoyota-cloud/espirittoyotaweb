"use client";
import React from "react";

type VariantKey = "E1" | "E2" | "E3";

interface Row {
    label: string;
    E1: string;
    E2: string;
    E3: string;
}

interface Section {
    section: string;
    rows: Row[];
}

interface Props {
    data: {
        section: string;
        rows: {
            label: string;
            E1: string;
            E2: string;
            E3: string;
        }[];
    }[];
    activeTab: "specs" | "features";
    openSections: number[];
    toggleSection: (index: number) => void;
}

const ComparisonTable = ({
    data,
    activeTab,
    openSections,
    toggleSection,
}: Props) => {
    return (
        <>
            {/* ================= INTERNAL CSS ================= */}
            <style jsx>{`
                .table-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    gap: 16px;
                    width: 100%;
                }

                .column {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .column-header {
                    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                    color: #fff;
                    padding: 16px 20px;
                    font-weight: 600;
                    font-style: italic;
                    text-align: center;
                    border-radius: 8px;
                    font-size: 18px;
                }

                .column:first-child .column-header {
                    text-align: left;
                }

                .section-card {
                    background: #1a1a1a;
                    color: #fff;
                    padding: 16px 20px;
                    border-radius: 8px;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 500;
                    transition: background 0.3s;
                }

                .section-card:hover {
                    background: #2d2d2d;
                }

                .arrow {
                    font-size: 12px;
                    opacity: 0.8;
                    margin-left: 8px;
                    flex-shrink: 0;
                }

                .empty-card {
                    background: transparent;
                    padding: 16px 20px;
                    border-radius: 8px;
                    min-height: 56px;
                }

                .feature-card {
                    background: #fafafa;
                    padding: 16px 20px;
                    border-radius: 8px;
                    font-weight: 500;
                    min-height: 56px;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                }

                .value-card {
                    background: #fff;
                    padding: 16px 20px;
                    border-radius: 8px;
                    text-align: center;
                    min-height: 56px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #f0f0f0;
                    font-size: 14px;
                }

                /* Mobile View - Stacked Layout */
                @media (max-width: 768px) {
                    .table-container {
                        display: block;
                    }

                    .column {
                        margin-bottom: 24px;
                    }

                    .column:not(:first-child) .column-header {
                        display: none;
                    }

                    .column:not(:first-child) {
                        display: none;
                    }

                    .column:first-child {
                        display: block;
                    }

                    /* Mobile accordion style */
                    .mobile-variant-section {
                        margin-top: 12px;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        overflow: hidden;
                    }

                    .mobile-variant-header {
                        background: #f5f5f5;
                        padding: 12px 16px;
                        font-weight: 600;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;
                    }

                    .mobile-variant-content {
                        padding: 12px 16px;
                        background: #fff;
                        border-top: 1px solid #e0e0e0;
                    }

                    .column-header {
                        font-size: 16px;
                        padding: 14px 16px;
                    }

                    .section-card {
                        padding: 14px 16px;
                        font-size: 15px;
                    }

                    .feature-card {
                        padding: 14px 16px;
                        font-size: 13px;
                    }

                    .value-card {
                        padding: 14px 16px;
                        font-size: 13px;
                    }
                }

                /* Tablet View - 2 columns */
                @media (min-width: 769px) and (max-width: 1024px) {
                    .table-container {
                        gap: 12px;
                    }

                    .column-header {
                        font-size: 16px;
                        padding: 14px 16px;
                    }

                    .section-card {
                        padding: 14px 16px;
                        font-size: 14px;
                    }

                    .feature-card {
                        padding: 14px 16px;
                        font-size: 13px;
                        min-height: 52px;
                    }

                    .value-card {
                        padding: 14px 16px;
                        font-size: 13px;
                        min-height: 52px;
                    }
                }

                /* Large Desktop - More spacing */
                @media (min-width: 1440px) {
                    .table-container {
                        gap: 20px;
                    }

                    .column-header {
                        font-size: 20px;
                        padding: 18px 24px;
                    }

                    .section-card {
                        padding: 18px 24px;
                    }

                    .feature-card {
                        padding: 18px 24px;
                        font-size: 15px;
                    }

                    .value-card {
                        padding: 18px 24px;
                        font-size: 15px;
                    }
                }
            `}</style>

            {/* ================= DESKTOP TABLE GRID ================= */}
            <div className="table-container desktop-view">
                {/* Column 1 - Features/Specifications */}
                <div className="column">
                    <div className="column-header">
                        {activeTab === "specs" ? "Specifications" : "Features"}
                    </div>
                    {data.map((section, sIndex) => (
                        <React.Fragment key={sIndex}>
                            <div
                                className="section-card"
                                onClick={() => toggleSection(sIndex)}
                            >
                                <span>{section.section}</span>
                                <span className="arrow">
                                    {openSections.includes(sIndex) ? "▲" : "▼"}
                                </span>
                            </div>
                            {openSections.includes(sIndex) &&
                                section.rows.map((row, rIndex) => (
                                    <div key={rIndex} className="feature-card">
                                        {row.label}
                                    </div>
                                ))}
                        </React.Fragment>
                    ))}
                </div>

                {/* Column 2 - E1 */}
                <div className="column">
                    <div className="column-header">E1</div>
                    {data.map((section, sIndex) => (
                        <React.Fragment key={sIndex}>
                            <div className="empty-card"></div>
                            {openSections.includes(sIndex) &&
                                section.rows.map((row, rIndex) => (
                                    <div key={rIndex} className="value-card">
                                        {row.E1}
                                    </div>
                                ))}
                        </React.Fragment>
                    ))}
                </div>

                {/* Column 3 - E2 */}
                <div className="column">
                    <div className="column-header">E2</div>
                    {data.map((section, sIndex) => (
                        <React.Fragment key={sIndex}>
                            <div className="empty-card"></div>
                            {openSections.includes(sIndex) &&
                                section.rows.map((row, rIndex) => (
                                    <div key={rIndex} className="value-card">
                                        {row.E2}
                                    </div>
                                ))}
                        </React.Fragment>
                    ))}
                </div>

                {/* Column 4 - E3 */}
                <div className="column">
                    <div className="column-header">E3</div>
                    {data.map((section, sIndex) => (
                        <React.Fragment key={sIndex}>
                            <div className="empty-card"></div>
                            {openSections.includes(sIndex) &&
                                section.rows.map((row, rIndex) => (
                                    <div key={rIndex} className="value-card">
                                        {row.E3}
                                    </div>
                                ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ComparisonTable;