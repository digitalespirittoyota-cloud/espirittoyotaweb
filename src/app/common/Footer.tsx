// Footer.tsx
import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

type FooterLink = {
  title: string;
  links: string[];
};

const footerData: FooterLink[] = [
  {
    title: "PRODUCTS",
    links: ["GLANZA", "URBAN CRUISER", "HYRDER", "INNOVA CRYSTA", "INNOVA HYCROSS", "HILUX", "FORTUNER", "LEGENDER", "NEW CAMRY HYBRID", "ELECTRIC VEHICLE", "VELLFIRE"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6">
        {footerData.map((section) => (
          <div key={section.title}>
            <h3 className="font-bold mb-3">{section.title}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link} className="text-sm mb-1 hover:text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-3">ESPIRIT TOYOTA</h3>
          <p className="text-sm mb-2">2514, NH 5, Telengapentha, Cuttack, Cuttack-754001</p>
          <p className="text-sm mb-2">📞 +91 78730 44152</p>
          <p className="text-sm mb-2">📞 +91 78730 44885</p>
          <p className="text-sm mb-2">📞 +91 78730 44445</p>
          <p className="text-sm mb-2">✉ marketing@fieldtoyota.com</p>

          <div className="flex gap-3 mt-3">
            <FaYoutube size={20} className="hover:text-red-600 cursor-pointer" />
            <FaFacebookF size={20} className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <span>© 2025 TKM. All Rights Reserved.</span>
        <span>Powered By Renaissance Technologies</span>
      </div>
    </footer>
  );
};

export default Footer;
