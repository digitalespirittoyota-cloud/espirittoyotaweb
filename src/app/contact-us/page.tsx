// app/contact-us/page.tsx
import type { Metadata } from 'next';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ShowroomLocator from '../components/ShowroomLocator';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact Espirit Toyota Dealer | Showroom Address, Phone & Support',
    description:
        'Contact Espirit Toyota showroom for sales, service, test drive and customer support. Get showroom address, phone number and assistance today.',
    keywords: [
        'toyota contact',
        'contact toyota showroom',
        'toyota dealer contact',
        'toyota showroom contact number',
        'toyota customer support',
        'toyota sales enquiry',
        'toyota service contact',
        'toyota test drive contact',
        'authorized toyota dealer',
        'espirit toyota contact',
    ],
};


export default function ContactUsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* 1. Banner Section */}
            <div className="relative bg-[#1a1a1a] text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Espirit Toyota Showroom</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Looking to contact an authorized Toyota showroom? Espirit Toyota is here to
                        help you with sales enquiries, service support, and test drive bookings.
                        Contact our Toyota dealer team for the latest offers, pricing, and assistance.
                    </p>
                </div>
                {/* Decorative pattern/overlay could go here */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* 2. Contact Form Section */}
                    <div>
                        <ContactForm />
                    </div>

                    {/* 3. Showroom Information & Map */}
                    <div>
                        <ShowroomLocator />
                    </div>
                </div>
                {/* 5. Quick Support Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

                    <Link href="/test-drive" className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300">
                        <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                            <ArrowRight size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Test Drive Booking</h4>
                        <p className="text-gray-500 mb-4">Experience the thrill of driving a Toyota. Schedule your test drive today.</p>
                        <span className="text-red-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Book Now <ArrowRight size={16} />
                        </span>
                    </Link>

                    <Link href="/#enquiry" className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <ArrowRight size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Sales Enquiry</h4>
                        <p className="text-gray-500 mb-4">Looking for a new car? Get the best quotes and offers from our team.</p>
                        <span className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Contact Sales <ArrowRight size={16} />
                        </span>
                    </Link>

                    <Link href="/service" className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300">
                        <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <ArrowRight size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Service Support</h4>
                        <p className="text-gray-500 mb-4">Book a service appointment or get support for your existing Toyota.</p>
                        <span className="text-green-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Book Service <ArrowRight size={16} />
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
}
