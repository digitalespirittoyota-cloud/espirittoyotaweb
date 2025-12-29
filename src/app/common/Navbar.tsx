"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Models", href: "/#models" },
    { name: "Service", href: "/service" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white border-b border-gray-100 py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* 1. Left: Logo */}
            <Link href="/" className="relative w-[140px] h-[36px] md:w-[160px] md:h-[42px] transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="Espirit Toyota Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* 2. Center: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-gray-800 hover:text-red-600 font-bold text-sm tracking-widest uppercase transition-colors"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* 3. Right: Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Phone Number */}
              <a
                href="tel:7935428989"
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors group mr-2"
              >
                <div className="bg-gray-100 p-2 rounded-full group-hover:bg-red-50 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-bold text-sm tracking-wide">79354 28989</span>
              </a>

              {/* Test Drive Button */}
              <Link
                href="/test-drive"
                className="bg-black text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                TEST DRIVE
              </Link>

              {/* Enquiry Button */}
              <Link
                href="/#enquiry"
                className="border border-red-600 text-red-600 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider hover:bg-red-600 hover:text-white transition-all shadow-sm flex items-center gap-2"
              >
                ENQUIRY
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              {/* Mobile Phone Icon */}
              <a href="tel:7935428989" className="md:hidden text-gray-700 hover:text-red-600">
                <Phone size={22} />
              </a>

              <button
                className="p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl lg:hidden flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-bold text-gray-800 py-3 px-2 border-b border-gray-50 hover:bg-gray-50 hover:text-red-600 rounded-lg transition-colors"
              >
                {link.name}
                <ChevronRight size={16} className="text-gray-400" />
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/test-drive"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-black text-white text-center py-3.5 rounded-xl font-bold uppercase tracking-wide shadow-md"
              >
                Book Test Drive
              </Link>
              <Link
                href="/#enquiry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border border-red-600 text-red-600 text-center py-3.5 rounded-xl font-bold uppercase tracking-wide hover:bg-red-50"
              >
                Enquiry Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap due to fixed header */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-[72px]' : 'h-[80px]'}`}></div>
    </>
  );
}
