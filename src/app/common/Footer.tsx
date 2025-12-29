"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { address } from "../utils/data";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [currentAddressIndex, setCurrentAddressIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Hydration flag
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!mounted || !isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentAddressIndex(
        (prev) => (prev + 1) % address.company.addresses.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [mounted, isAutoPlaying]);

  const nextAddress = () => {
    setCurrentAddressIndex(
      (prev) => (prev + 1) % address.company.addresses.length
    );
    setIsAutoPlaying(false);
  };

  const prevAddress = () => {
    setCurrentAddressIndex((prev) =>
      prev === 0 ? address.company.addresses.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToAddress = (index: number) => {
    setCurrentAddressIndex(index);
    setIsAutoPlaying(false);
  };

  // Static SSR fallback
  const currentAddress = mounted
    ? address.company.addresses[currentAddressIndex]
    : address.company.addresses[0];

  return (
    <footer className="bg-[#333333] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Products */}
          {/* Left: Products & Services */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="sm:col-span-2">
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">
                {address.sections.products.title}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-1">
                  {address.sections.products.links
                    .slice(0, Math.ceil(address.sections.products.links.length / 2))
                    .map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                </ul>
                <ul className="space-y-1">
                  {address.sections.products.links
                    .slice(Math.ceil(address.sections.products.links.length / 2))
                    .map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Service & Support Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">
                SERVICE & SUPPORT
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/test-drive" className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm">
                    Book a Test Drive
                  </a>
                </li>
                <li>
                  <a href="/service" className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm">
                    Book a Service
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link href="/#enquiry" className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm">
                    Enquiry Form
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:07935428989"
                    className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm"
                  >
                    Helpline: 07935428989
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Address Carousel */}
          <div>
            <div className="relative bg-[#2f2f2f] p-4 rounded-lg shadow max-w-md">
              {/* Nav */}
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={prevAddress}
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                  aria-label="Previous address"
                >
                  <ChevronLeft size={16} className="text-gray-400" />
                </button>
                <div className="text-center">
                  <h5 className="text-white font-medium text-sm">
                    {currentAddress.name}
                  </h5>
                  <span className="text-gray-400 text-xs">
                    {currentAddressIndex + 1} of {address.company.addresses.length}
                  </span>
                </div>
                <button
                  onClick={nextAddress}
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                  aria-label="Next address"
                >
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </div>

              {/* Address */}
              <div className="text-gray-300 space-y-3 text-sm min-h-[120px]">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-gray-400 mt-0.5" />
                  <div>
                    <div>{currentAddress.location}</div>
                    <div>{currentAddress.area}</div>
                    <div>{currentAddress.pincode}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={14} className="text-gray-400 mt-0.5" />
                  <div>
                    {currentAddress.phone.map((phone, idx) => (
                      <div key={idx}>
                        <a
                          href={`tel:${phone}`}
                          className="hover:text-white transition-colors"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                    {/* {currentAddress.additionalPhone && (
                      <div>
                        <a
                          href={`tel:${currentAddress.additionalPhone}`}
                          className="hover:text-white transition-colors"
                        >
                          {currentAddress.additionalPhone}
                        </a>
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-gray-400" />
                  <a
                    href={`mailto:${currentAddress.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {currentAddress.email}
                  </a>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {address.company.addresses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToAddress(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentAddressIndex
                      ? "bg-red-500 w-6"
                      : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    aria-label={`Go to address ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="p-4">
              <nav className="flex justify-center gap-6 text-sm">
                {address.social.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <span className="font-bold text-white text-lg">ESPRITE TOYOTA</span>
              <span>{address.copyright}</span>
            </div>
            <div>
              Powered by{" "}
              <a
                href="https://jnine.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                J Nine Infotech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
// ------
export default Footer;
