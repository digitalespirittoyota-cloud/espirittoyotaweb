"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { User, Phone, Mail, Car, MapPin, Calendar, Clock, Send } from "lucide-react";

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
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        model: "",
        date: "",
        time: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.model.trim()) newErrors.model = "Please select a model";
        if (!formData.date.trim()) newErrors.date = "Preferred date is required";
        if (!formData.time.trim()) newErrors.time = "Preferred time is required";

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            toast.error("Please fill all required fields correctly", {
                style: {
                    background: "#1a1a1a",
                    color: "#fff",
                    border: "1px solid #f00",
                },
            });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/test-drive", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Test Drive Request Sent Successfully!", {
                    style: {
                        background: "#1a1a1a",
                        color: "#fff",
                        border: "1px solid #0f0",
                    },
                });
                setFormData({ name: "", phone: "", email: "", city: "", model: "", date: "", time: "" });
            } else {
                toast.error("Failed to send request: " + result.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <Toaster position="top-right" />

            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                Schedule Your Test Drive
            </h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Name */}
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600'}`}
                    />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="tel"
                            name="phone"
                            maxLength={10}
                            value={formData.phone}
                            onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, "");
                                if (val.length <= 10) setFormData({ ...formData, phone: val });
                            }}
                            placeholder="Mobile Number *"
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address *"
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        />
                    </div>
                </div>

                {/* City & Model Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City *"
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none transition-all ${errors.city ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        />
                    </div>

                    <div className="relative">
                        <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-white focus:outline-none transition-all appearance-none ${errors.model ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        >
                            <option value="">Select Model *</option>
                            {carModels.map((m) => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none transition-all ${errors.date ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-white focus:outline-none transition-all appearance-none ${errors.time ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        >
                            <option value="">Preferred Time *</option>
                            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                            <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full text-white font-bold py-4 rounded-lg shadow-lg transition-transform transform active:scale-95 flex items-center justify-center gap-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 hover:shadow-xl'}`}
                >
                    {loading ? 'Processing...' : <><Send size={20} /> Book Test Drive Now</>}
                </button>

            </form>
        </div>
    );
}
