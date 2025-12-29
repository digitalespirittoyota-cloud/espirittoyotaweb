"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
    {
        id: 1,
        name: "Cuttack",
        address: "Espirit Toyota, 2514, NH 5,Telengapentha,Cuttack-754001",
        phone: "+91 79354 28989",
        email: "marketing@fieldtoyota.com",
        mapSrc: "https://maps.google.com/maps?q=Espirit+Toyota,+2514,+NH+5,+Telengapentha,+Cuttack-754001&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: 2,
        name: "Bhubaneswar",
        address: "Espirit Toyota, Jaydev Vihar - Nandan Kanan Road, Plot No. 370/2119, Patia, Khurda Dist, Bhubaneswar, Odisha - 752101",
        phone: "+91 79354 28989",
        email: "marketing@fieldtoyota.com",
        mapSrc: "https://maps.google.com/maps?q=Espirit+Toyota,+Jaydev+Vihar+-+Nandan+Kanan+Road,+Plot+No.+370/2119,+Patia,+Khurda+Dist,+Bhubaneswar,+Odisha+-+752101&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },

    {
        id: 3,
        name: "Angul",
        address: "Espirit Toyota, Panchamahalla Chhak, Karadagadia, Angul-759132",
        phone: "+91 79354 28989",
        email: "marketing@fieldtoyota.com",
        mapSrc: "https://maps.google.com/maps?q=Espirit+Toyota,+Panchamahalla+Chhak,+Karadagadia,+Angul-759132&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: 4,
        name: "Sambalpur",
        address: "Espirit Toyota, Plot No - 225/226 , RMC Road ( NH-6) AT/PO - Bareipali, P.S - Ainthapali, Sambalpur-768006",
        phone: "+91 79354 28989",
        email: "marketing@fieldtoyota.com",
        mapSrc: "https://maps.google.com/maps?q=Espirit+Toyota,+Plot+No+-+225/226+,+RMC+Road+(+NH-6)+AT/PO+-+Bareipali,+P.S+-+Ainthapali,+Sambalpur-768006&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: 5,
        name: "Rourkela",
        address: "Espirit Toyota, Plot No : B/ 12 & 13 Kalunga Industrial Estate, Kalunga, Rourkela-770031",
        phone: "+91 79354 28989",
        email: "marketing@fieldtoyota.com",
        mapSrc: "https://maps.google.com/maps?q=Espirit+Toyota,+Plot+No+:+B/+12+&+13+Kalunga+Industrial+Estate,+Kalunga,+Rourkela-770031&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
];

export default function ShowroomLocator() {
    const [activeLocation, setActiveLocation] = useState(locations[0]);

    return (
        <div className="space-y-8">
            {/* Showroom Info */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Showroom Information</h3>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {locations.map((loc) => (
                        <button
                            key={loc.id}
                            onClick={() => setActiveLocation(loc)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeLocation.id === loc.id
                                ? "bg-red-600 text-white border-red-600 shadow-md"
                                : "bg-gray-50 text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-500"
                                }`}
                        >
                            {loc.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="space-y-6 flex-grow">
                    <div className="flex items-start gap-4 animate-in fade-in duration-300" key={activeLocation.id + "-address"}>
                        <div className="bg-red-50 p-3 rounded-full text-red-600 flex-shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Address</h4>
                            <p className="text-gray-600 mt-1">
                                {activeLocation.address}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 animate-in fade-in duration-300" key={activeLocation.id + "-phone"}>
                        <a
                            href={`tel:${activeLocation.phone.replace(/\s/g, "")}`}
                            className="bg-red-50 p-3 rounded-full text-red-600 flex-shrink-0 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                            <Phone size={24} />
                        </a>
                        <div>
                            <h4 className="font-bold text-gray-800">Phone</h4>
                            <p className="text-gray-600 mt-1 hover:text-red-600 transition-colors">
                                <a href={`tel:${activeLocation.phone.replace(/\s/g, "")}`}>{activeLocation.phone}</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 animate-in fade-in duration-300" key={activeLocation.id + "-email"}>
                        <a
                            href={`mailto:${activeLocation.email}`}
                            className="bg-red-50 p-3 rounded-full text-red-600 flex-shrink-0 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                            <Mail size={24} />
                        </a>
                        <div>
                            <h4 className="font-bold text-gray-800">Email</h4>
                            <p className="text-gray-600 mt-1 hover:text-red-600 transition-colors">
                                <a href={`mailto:${activeLocation.email}`}>{activeLocation.email}</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 animate-in fade-in duration-300">
                        <div className="bg-red-50 p-3 rounded-full text-red-600 flex-shrink-0">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Business Hours</h4>
                            <p className="text-gray-600 mt-1">Mon - Sun: 9:00 AM - 7:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Map Section */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-md h-64 md:h-80 relative group">
                <iframe
                    key={activeLocation.id + "-map"}
                    src={activeLocation.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/5 opacity-0">
                    <span className="bg-white px-4 py-2 rounded-lg shadow font-medium text-gray-700">Google Map Area</span>
                </div>
            </div>
        </div>
    );
}
