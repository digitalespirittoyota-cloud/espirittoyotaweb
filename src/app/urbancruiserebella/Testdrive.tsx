
"use client";
import React, { useState } from "react";

const MODELS = ["Glanza", "Urban Cruiser eBella", "Hyryder", "Innova Hycross", "Fortuner", "Camry","Urban Cruiser Hyryder","Innova Crysta","Hilux","Vellfire","Land Cruiser 300","Lengender"];
const TIME_SLOTS = ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];

export default function ToyotaEBellaPage() {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "Bhubaneswar",
    model: "Glanza",
    date: "",
    preferredTime: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (!form.mobile.match(/^\d{10}$/)) e.mobile = "Enter valid 10-digit number";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter valid email";
    if (!form.model) e.model = "Model is required";
    if (!form.date) e.date = "Date is required";
    if (!form.preferredTime) e.preferredTime = "Time is required";
    return e;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const e = { ...prev }; delete e[field]; return e; });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <style>{`
        
        /* ── FULL PAGE ── */
        .page {
          min-height: 70vh;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        @media (max-width: 900px) {
          .page { grid-template-columns: 1fr; }
          .left-side { min-height: 55vw; }
        }

        /* ── LEFT — car image ── */
        .left-side {
          position: relative;
          overflow: hidden;
        }

        .car-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

        /* dark vignette on right edge so form blends */
        .left-side::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(
            90deg,
            transparent 55%,
            rgba(0,0,0,0.7) 80%,
            rgba(0,0,0,0.95) 100%
          );
          pointer-events: none;
        }

        /* ── RIGHT — form area ── */
        .right-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 36px;
          background: #000;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 500px) {
          .right-side { padding: 32px 16px; }
        }

        /* ── FORM CARD — black background ── */
        .form-card {
          background: #111111;
          border-radius: 20px;
          padding: 38px 32px 34px;
          width: 100%;
          max-width: 460px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.07),
            0 32px 80px rgba(0,0,0,0.8),
            0 0 60px rgba(215,25,33,0.08);
        }

        @media (max-width: 500px) {
          .form-card { padding: 28px 18px 24px; border-radius: 16px; }
        }

        .form-heading {
          font-family: 'Rajdhani', sans-serif;
          font-size: 24px; font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
          letter-spacing: 0.3px;
        }

        .form-rule {
          width: 100%; height: 1.5px;
          background: rgba(255,255,255,0.1);
          margin-top: 8px; margin-bottom: 22px;
        }

        /* Fields */
        .field { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }

        .field-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          margin-bottom: 12px;
        }

        @media (max-width: 440px) { .field-row { grid-template-columns: 1fr; } }

        .field-wrap { position: relative; display: flex; align-items: center; }

        .field-icon {
          position: absolute; left: 14px; color: #666;
          pointer-events: none; z-index: 1;
          display: flex; align-items: center;
        }

        /* Dark inputs */
        .f-input, .f-select {
          width: 100%;
          padding: 13px 14px 13px 44px;
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          font-size: 14px; color: #e8e8e8;
          background: rgba(255,255,255,0.05);
          font-family: 'Rajdhani', 'Segoe UI', sans-serif;
          font-weight: 500; outline: none;
          -webkit-appearance: none; appearance: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }

        .f-input::placeholder { color: #666; }

        .f-input:focus, .f-select:focus {
          border-color: #d71921;
          background: rgba(215,25,33,0.07);
          box-shadow: 0 0 0 3px rgba(215,25,33,0.12);
        }

        .f-select option { background: #1a1a1a; color: #e8e8e8; }

        .f-input.err, .f-select.err {
          border-color: #e53e3e;
          background: rgba(229,62,62,0.08);
        }

        /* Model — red border highlight */
        .model-hi {
          border-color: #d71921 !important;
          box-shadow: 0 0 0 2px rgba(215,25,33,0.15) !important;
        }

        /* City — read-only style */
        .city-input {
          color: #aaa !important;
          cursor: default;
        }

        .f-caret {
          position: absolute; right: 13px;
          pointer-events: none; color: #555; font-size: 11px;
        }

        .err-msg {
          font-size: 11px; color: #ff6b6b;
          padding-left: 2px; font-family: 'Rajdhani', sans-serif;
        }

        /* Submit */
        .submit-btn {
          width: 100%; padding: 16px 20px;
          background: #d71921; color: #fff; border: none;
          border-radius: 10px;
          font-size: 17px; font-weight: 700; letter-spacing: 0.5px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          font-family: 'Rajdhani', sans-serif;
          margin-top: 12px;
          transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
          box-shadow: 0 4px 24px rgba(215,25,33,0.4);
        }
        .submit-btn:hover { background: #b5141b; box-shadow: 0 6px 32px rgba(215,25,33,0.55); }
        .submit-btn:active { transform: scale(0.985); }

        /* Success */
        .success-wrap { text-align: center; padding: 36px 12px; }
        .success-circle {
          width: 68px; height: 68px; background: #d71921; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px; font-size: 28px; color: #fff;
        }
        .success-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: 26px; font-weight: 700; color: #fff; margin-bottom: 10px;
        }
        .success-body { color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.8; }
        .success-body strong { color: #d71921; }
      `}</style>

      <div className="page">

        {/* ── LEFT — Toyota eBella car image ── */}
        <div className="left-side">
          <img
            className="car-img"
            src="https://static.toyotabharat.com/images/showroom/a32/popup-form-img.png"
            alt="Toyota Urban Cruiser eBella"
          />
        </div>

        {/* ── RIGHT — Black form card ── */}
        <div className="right-side">
          <div className="form-card">
            {submitted ? (
              <div className="success-wrap">
                <div className="success-circle">✓</div>
                <div className="success-title">Booking Confirmed!</div>
                <div className="success-body">
                  Thank you, <strong>{form.fullName}</strong>!<br />
                  Your test drive for <strong>{form.model}</strong><br />
                  is scheduled on {form.date} at {form.preferredTime}.<br />
                  Our team will reach you at {form.mobile}.
                </div>
              </div>
            ) : (
              <>
                <div className="form-heading">Schedule Your Test Drive</div>
                <div className="form-rule" />

                {/* Full Name */}
                <div className="field">
                  <div className="field-wrap">
                    <span className="field-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </span>
                    <input
                      className={`f-input${errors.fullName ? " err" : ""}`}
                      placeholder="Full Name *"
                      value={form.fullName}
                      onChange={e => handleChange("fullName", e.target.value)}
                    />
                  </div>
                  {errors.fullName && <span className="err-msg">{errors.fullName}</span>}
                </div>

                {/* Mobile */}
                <div className="field">
                  <div className="field-wrap">
                    <span className="field-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.69-1.69a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    <input
                      className={`f-input${errors.mobile ? " err" : ""}`}
                      placeholder="Mobile Number *"
                      type="tel"
                      value={form.mobile}
                      onChange={e => handleChange("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
                    />
                  </div>
                  {errors.mobile && <span className="err-msg">{errors.mobile}</span>}
                </div>

                {/* Email */}
                <div className="field">
                  <div className="field-wrap">
                    <span className="field-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <input
                      className={`f-input${errors.email ? " err" : ""}`}
                      placeholder="Email Address *"
                      type="email"
                      value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                    />
                  </div>
                  {errors.email && <span className="err-msg">{errors.email}</span>}
                </div>

                {/* City (fixed) + Model */}
                <div className="field-row">
                  <div className="field" style={{ margin: 0 }}>
                    <div className="field-wrap">
                      <span className="field-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </span>
                      <input
                        className="f-input city-input"
                        value="Bhubaneswar"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="field" style={{ margin: 0 }}>
                    <div className="field-wrap">
                      <span className="field-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="3" width="15" height="13"/>
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                          <circle cx="5.5" cy="18.5" r="2.5"/>
                          <circle cx="18.5" cy="18.5" r="2.5"/>
                        </svg>
                      </span>
                      <select
                        className={`f-select model-hi${errors.model ? " err" : ""}`}
                        value={form.model}
                        onChange={e => handleChange("model", e.target.value)}
                      >
                        <option value="">Select Model *</option>
                        {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                      <span className="f-caret">▼</span>
                    </div>
                    {errors.model && <span className="err-msg">{errors.model}</span>}
                  </div>
                </div>

                {/* Date + Time */}
                <div className="field-row">
                  <div className="field" style={{ margin: 0 }}>
                    <div className="field-wrap">
                      <span className="field-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                      </span>
                      <input
                        className={`f-input${errors.date ? " err" : ""}`}
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={e => handleChange("date", e.target.value)}
                        style={{ color: form.date ? "#e8e8e8" : "#666",
                          colorScheme: "dark"
                        }}
                      />
                    </div>
                    {errors.date && <span className="err-msg">{errors.date}</span>}
                  </div>
                  <div className="field" style={{ margin: 0 }}>
                    <div className="field-wrap">
                      <span className="field-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                      </span>
                      <select
                        className={`f-select${errors.preferredTime ? " err" : ""}`}
                        value={form.preferredTime}
                        onChange={e => handleChange("preferredTime", e.target.value)}
                      >
                        <option value="">Preferred Time *</option>
                        {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <span className="f-caret">▼</span>
                    </div>
                    {errors.preferredTime && <span className="err-msg">{errors.preferredTime}</span>}
                  </div>
                </div>

                {/* Submit */}
                <button className="submit-btn" onClick={handleSubmit}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Book Test Drive Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}