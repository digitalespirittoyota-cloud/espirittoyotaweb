"use client";
import { useState } from "react";
import "./HiluxLegacyMediaSection.css";

export default function HiluxLegacyMediaSection() {
  const [open, setOpen] = useState(false);
  const videoId = "ZWLiqsxh81E";

  return (
    <section className="hilux-wrap">

      {/* TOP IMAGE */}
      <div className="hilux-top">
        <img src="/hilux/legacy-cars.webp" alt="Hilux Legacy" />
      </div>

      {/* BLACK + VIDEO */}
      <div className="hilux-black">

        <div className="hilux-video">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
          />
          <button onClick={() => setOpen(true)}>
            <span />
          </button>
        </div>

      </div>

      {/* MODAL */}
      {open && (
        <div className="hilux-modal">
          <div className="hilux-modal-box">
            <button className="hilux-close" onClick={() => setOpen(false)}>✕</button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </section>
  );
}






