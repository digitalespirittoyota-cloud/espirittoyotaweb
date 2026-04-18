"use client";

import React from "react";
import { User, Phone, Mail, Car, MapPin, Calendar, Clock, Send } from "lucide-react";
import { useFormSubmit } from "../hooks/useFormSubmit";

const carModels = [
    "GLANZA",
    "URBAN CRUISER",
    "HYRDER",
    "INNOVA CRYSTA",
    "INNOVA HYCROSS",
    "HILUX",
    "FORTUNER",
    "LEGENDER",
    "NEW CAMRY HYBRID",
    "ELECTRIC VEHICLE",
    "VELLFIRE",
];

export default function TestDriveForm() {
    const {
        formData,
        loading,
        errors,
        handleChange,
        handleSubmit,
        setInitialData
    } = useFormSubmit({
        endpoint: "/api/test-drive",
        successMessage: "Test Drive Request Sent Successfully!",
    });

    React.useEffect(() => {
        setInitialData({
            name: "",
            phone: "",
            email: "",
            city: "",
            model: "",
            date: "",
            time: "",
            formType: "Test Drive",
        });
    }, []);

    const validate = (data: any) => {
        const newErrors: { [key: string]: string } = {};

        if (!data.name?.trim()) newErrors.name = "Name is required";

        if (!data.phone?.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(data.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }

        if (!data.email?.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!data.city?.trim()) newErrors.city = "City is required";
        if (!data.model?.trim()) newErrors.carModel = "Please select a model";
        if (!data.date?.trim()) newErrors.date = "Preferred date is required";
        if (!data.time?.trim()) newErrors.time = "Preferred time is required";

        return newErrors;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        handleSubmit(e, validate);
    };

    return (
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                    Schedule Your Test Drive
                </h3>
                <p className="text-gray-500">Pick your favorite model and preferred time</p>
            </div>

            <form onSubmit={handleFormSubmit} noValidate className="space-y-4">

                {/* Name */}
                <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600"
                            }`}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone || ""}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600"
                                }`}
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600"
                                }`}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* City */}
                    <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                        <input
                            type="text"
                            name="city"
                            value={formData.city || ""}
                            onChange={handleChange}
                            placeholder="Your City"
                            className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.city ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600"
                                }`}
                        />
                        {errors.city && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.city}</p>}
                    </div>

                    {/* Car Model */}
                    <div className="relative group">
                        <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                        <select
                            name="model"
                            value={formData.model || ""}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.carModel ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600 text-gray-600"
                                }`}
                        >
                            <option value="">Select Car Model</option>
                            {carModels.map((m) => (
                                <option key={m} value={m}>
                                    {m}
                                </option>
                            ))}
                        </select>
                        {errors.carModel && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.carModel}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date */}
                    <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                        <input
                            type="date"
                            name="date"
                            value={formData.date || ""}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.date ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600"
                                }`}
                        />
                        {errors.date && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.date}</p>}
                    </div>

                    {/* Time */}
                    <div className="relative group">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                        <select
                            name="time"
                            value={formData.time || ""}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.time ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600 text-gray-600"
                                }`}
                        >
                            <option value="">Preferred Time Slot</option>
                            <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                            <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                            <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                            <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                        </select>
                        {errors.time && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.time}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#d71920] hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:bg-gray-400 mt-6"
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <>
                            <Send size={18} />
                            <span>Request Test Drive</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
