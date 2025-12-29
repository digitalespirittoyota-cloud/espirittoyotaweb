import type { Metadata } from 'next';
import React from 'react';

import { Settings, Wrench, ShieldCheck, Car, Clock, DollarSign, Headset } from 'lucide-react';
import ServiceForm from '../components/ServiceForm';

export const metadata: Metadata = {
    title:
        'Espirit Toyota Service Center | Authorized Toyota Car Service & Repair',
    description:
        'Authorized Espirit Toyota Service Center for car maintenance, repair, body & paint, and roadside assistance. Book your Toyota service today.',
    keywords: [
        'toyota service center',
        'toyota service',
        'toyota car service',
        'authorized toyota service center',
        'toyota service booking',
        'toyota car maintenance',
        'toyota repair service',
        'toyota body and paint service',
        'toyota roadside assistance',
        'toyota service center near me',
        'espirit toyota service',
        'espirit toyota service center',
        'toyota service bhubaneswar',
    ],
};


const services = [
    {
        icon: <Wrench size={40} />,
        title: "General Repair",
        description: "Expert diagnosis and repair ensuring your Toyota performs at its best."
    },
    {
        icon: <Clock size={40} />,
        title: "Periodical Maintenance",
        description: "Scheduled services to keep your vehicle running smoothly and efficiently."
    },
    {
        icon: <Car size={40} />,
        title: "Express Maintenance",
        description: "Quick 60-minute service for those who value their time."
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "Body & Paint",
        description: "State-of-the-art facility to restore your car's original shine and finish."
    },
    {
        icon: <DollarSign size={40} />,
        title: "Value Added Services",
        description: "Car spa, interior cleaning, and anti-rust treatments."
    },
    {
        icon: <Headset size={40} />,
        title: "24/7 Roadside Assistance",
        description: "Emergency support whenever and wherever you need it."
    }
];

export default function ServicePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* 1. Banner Section */}
            <div className="relative bg-[#1a1a1a] text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/90 z-0"></div>
                {/* Background Image Placeholder if needed */}
                <div className="max-w-7xl mx-auto text-center relative z-10 animate-in fade-in duration-700 slide-in-from-bottom-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Authorized Espirit Toyota Service Center</h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Espirit Toyota is an authorized Toyota service center offering complete car
                        maintenance, repair, body and paint services. Book your Toyota service with
                        certified technicians, genuine spare parts, and fast turnaround time.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* 2. Service Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* 3. Booking / CTA Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                    <div className="p-10 md:p-14 flex flex-col justify-center bg-gray-900 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Service Today</h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Ensure your Toyota gets the care it deserves. Schedule your appointment now for a hassle-free experience.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="text-red-500" />
                                <span>100% Genuine Parts</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Settings className="text-red-500" />
                                <span>Certified Technicians</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="text-red-500" />
                                <span>On-time Delivery</span>
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            <a href="tel:7935428989" className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition w-fit">
                                Call Now
                            </a>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 bg-gray-50 flex items-center justify-center">
                        {/* Reusing existing ContactForm but contextualizing it could require props, 
                            for now using it as a general inquiry form or we could build a specific Booking form.
                            Given the constraints, reusing the ContactForm is a safe start. */}
                        <div className="w-full">
                            <h3 className="hidden text-2xl font-bold text-gray-800 mb-6 text-center">Service Enquiry Form</h3>
                            <ServiceForm />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
