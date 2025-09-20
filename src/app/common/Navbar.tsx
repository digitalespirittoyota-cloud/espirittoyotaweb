'use client';

import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="relative w-full border-b border-gray-200 shadow-sm bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[150px] h-[40px] md:w-[180px] md:h-[50px]">
              <Image
                src="/logo.png"
                alt="Toyota Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 180px"
                priority
              />
            </div>
          </Link>

          {/* Right: Contact */}
          <div className="flex items-center gap-6">
            {/* Contact Number (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2">
              <Phone className="text-red-600 w-5 h-5" />
              <a
                href="tel:7873045559"
                className="hover:underline text-black font-medium"
              >
                7873045559
              </a>
            </div>

            {/* Enquiry Button */}
            <div className="flex items-center gap-2">
              <a
                href="#enquiry"
                className="text-red-600 font-semibold border border-red-600 px-3 py-1 rounded-lg transition hover:bg-red-600 hover:text-white"
              >
                Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call Button (mobile only) */}
      <a
        href="tel:7873045559"
        className="fixed bottom-5 right-5 md:hidden flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition"
      >
        <Phone className="w-6 h-6" />
      </a>
    </header>
  );
};

export default Navbar;
