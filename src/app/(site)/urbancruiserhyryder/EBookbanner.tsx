"use client";
import React from "react";

export default function EBookBanner() {
  const handleBookNow = () => {
    window.open("https://www.toyotabharat.com/online-booking/?model-id=19", "_blank");
  };

  return (
    <section className="ebook-banner">
      <div className="banner-container">
        {/* Main Banner Image */}
        <div className="banner-image-wrapper" onClick={handleBookNow}>
          <img
            src="/models/urbancruiserhyryder/uch-ebook.webp"
            alt="Toyota Urban Cruiser Hyryder - E-Book Now"
            className="banner-image"
          />
          
          {/* E-Book Now Badge */}
          {/* <div className="ebook-badge">
            <span className="badge-e">E</span>
            <span className="badge-text">- BOOK NOW</span>
          </div> */}
        </div>

        {/* Side Action Buttons */}
        <div className="side-actions">
          <button className="action-btn" aria-label="Find Dealer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
          </button>
          
          <button className="action-btn" aria-label="Test Drive">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          <button className="action-btn" aria-label="Price">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="currentColor"/>
            </svg>
          </button>
          
          <button className="action-btn" aria-label="Compare">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" fill="currentColor"/>
            </svg>
          </button>
          
          <button className="action-btn" aria-label="Brochure">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Enquire Now Button (Top Right) */}
        <button className="enquire-btn">
          <svg className="phone-icon" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
          </svg>
          <span>Enquire Now!</span>
        </button>
      </div>

      <style jsx>{`
        .ebook-banner {
          position: relative;
          width: 100%;
          background: #f5f5f5;
          overflow: hidden;
        }

        .banner-container {
          position: relative;
          width: 100%;
          max-width: 100vw;
        }

        .banner-image-wrapper {
          position: relative;
          width: 100%;
          cursor: pointer;
          overflow: hidden;
        }

        .banner-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        /* Side Action Buttons */
        .side-actions {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10;
        }

        .action-btn {
          width: 52px;
          height: 52px;
          background: #000;
          border: 2px solid #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #fff;
        }

        .action-btn:hover {
          background: #e30613;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(227, 6, 19, 0.4);
        }

        .action-btn svg {
          width: 24px;
          height: 24px;
        }

        /* Enquire Now Button (Top Right) */
        .enquire-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #e30613;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(227, 6, 19, 0.3);
          z-index: 10;
        }

        .enquire-btn:hover {
          background: #c20510;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(227, 6, 19, 0.4);
        }

        .enquire-btn:active {
          transform: translateY(0);
        }

        .phone-icon {
          animation: ring 2s infinite;
        }

        @keyframes ring {
          0%, 100% {
            transform: rotate(0deg);
          }
          10%, 30% {
            transform: rotate(-15deg);
          }
          20%, 40% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(0deg);
          }
        }

        /* LARGE DESKTOP (1920px+) */
        @media (min-width: 1920px) {
          .banner-image {
            max-height: 500px;
          }
        }

        /* DESKTOP (1440px - 1919px) */
        @media (max-width: 1919px) {
          .banner-image {
            max-height: 450px;
          }
        }

        /* LAPTOP (1200px - 1439px) */
        @media (max-width: 1439px) {
          .ebook-badge {
            padding: 16px 30px;
          }

          .badge-e {
            font-size: 38px;
          }

          .badge-text {
            font-size: 26px;
          }

          .action-btn {
            width: 48px;
            height: 48px;
          }

          .action-btn svg {
            width: 22px;
            height: 22px;
          }
        }

        /* TABLET LANDSCAPE (1024px - 1199px) */
        @media (max-width: 1199px) {
          .ebook-badge {
            padding: 14px 25px;
            left: 2.5%;
          }

          .badge-e {
            font-size: 34px;
          }

          .badge-text {
            font-size: 22px;
          }

          .enquire-btn {
            padding: 12px 24px;
            font-size: 16px;
          }

          .action-btn {
            width: 44px;
            height: 44px;
          }

          .action-btn svg {
            width: 20px;
            height: 20px;
          }
        }

        /* TABLET PORTRAIT (768px - 1023px) */
        @media (max-width: 1023px) {
          .ebook-badge {
            padding: 12px 22px;
          }

          .badge-e {
            font-size: 30px;
          }

          .badge-text {
            font-size: 20px;
            letter-spacing: 1.5px;
          }

          .side-actions {
            right: 12px;
            gap: 10px;
          }

          .action-btn {
            width: 42px;
            height: 42px;
          }

          .action-btn svg {
            width: 18px;
            height: 18px;
          }

          .enquire-btn {
            top: 12px;
            right: 12px;
            padding: 10px 20px;
            font-size: 15px;
          }

          .phone-icon {
            width: 22px;
            height: 22px;
          }
        }

        /* MOBILE LANDSCAPE (640px - 767px) */
        @media (max-width: 767px) {
          .ebook-badge {
            padding: 10px 18px;
            left: 2%;
          }

          .badge-e {
            font-size: 26px;
          }

          .badge-text {
            font-size: 18px;
            letter-spacing: 1px;
          }

          .side-actions {
            right: 8px;
            gap: 8px;
          }

          .action-btn {
            width: 38px;
            height: 38px;
            border-radius: 6px;
          }

          .action-btn svg {
            width: 16px;
            height: 16px;
          }

          .enquire-btn {
            top: 10px;
            right: 10px;
            padding: 9px 18px;
            font-size: 14px;
          }

          .phone-icon {
            width: 20px;
            height: 20px;
          }
        }

        /* MOBILE PORTRAIT (480px - 639px) */
        @media (max-width: 639px) {
          .ebook-badge {
            padding: 8px 16px;
          }

          .badge-e {
            font-size: 22px;
          }

          .badge-text {
            font-size: 16px;
          }

          .side-actions {
            right: 6px;
            gap: 6px;
          }

          .action-btn {
            width: 36px;
            height: 36px;
          }

          .action-btn svg {
            width: 14px;
            height: 14px;
          }

          .enquire-btn {
            padding: 8px 16px;
            font-size: 13px;
          }
        }

        /* SMALL MOBILE (375px - 479px) */
        @media (max-width: 479px) {
          .ebook-badge {
            padding: 7px 14px;
            left: 1.5%;
          }

          .badge-e {
            font-size: 20px;
          }

          .badge-text {
            font-size: 14px;
            letter-spacing: 0.5px;
          }

          .side-actions {
            right: 5px;
            gap: 5px;
          }

          .action-btn {
            width: 32px;
            height: 32px;
            border-width: 1px;
          }

          .action-btn svg {
            width: 13px;
            height: 13px;
          }

          .enquire-btn {
            top: 8px;
            right: 8px;
            padding: 7px 14px;
            font-size: 12px;
            gap: 6px;
          }

          .phone-icon {
            width: 18px;
            height: 18px;
          }
        }

        /* EXTRA SMALL MOBILE (up to 374px) */
        @media (max-width: 374px) {
          .ebook-badge {
            padding: 6px 12px;
          }

          .badge-e {
            font-size: 18px;
          }

          .badge-text {
            font-size: 12px;
          }

          .side-actions {
            right: 4px;
            gap: 4px;
          }

          .action-btn {
            width: 28px;
            height: 28px;
          }

          .action-btn svg {
            width: 12px;
            height: 12px;
          }

          .enquire-btn {
            padding: 6px 12px;
            font-size: 11px;
          }

          .phone-icon {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </section>
  );
}
