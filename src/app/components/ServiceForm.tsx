"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { models } from "../utils/data";
import { useFormSubmit } from "../hooks/useFormSubmit";

const serviceTypes = [
    "Periodical Maintenance",
    "General Repair",
    "Express Maintenance",
    "Body & Paint",
    "Car Spa / Detailing",
    "Wheel Alignment/Balancing",
    "Others"
];

export default function ServiceForm() {
    const {
        formData,
        loading,
        errors,
        handleChange,
        handleSubmit,
        setInitialData
    } = useFormSubmit({
        endpoint: "/api/booking",
        successMessage: "Service booking request sent successfully!",
    });

    React.useEffect(() => {
        setInitialData({
            name: "",
            email: "",
            phone: "",
            carModel: "",
            registrationNumber: "",
            serviceType: "",
            date: "",
            message: "",
            formType: "Service Booking",
        });
    }, []);

    const validate = (data: any) => {
        const newErrors: { [key: string]: string } = {};
        if (!data.name?.trim()) newErrors.name = "Full Name is required";
        if (!data.email?.trim() || !/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Valid Email is required";
        if (!data.phone?.trim() || data.phone.length < 10) newErrors.phone = "Valid Phone Number is required";
        if (!data.carModel) newErrors.carModel = "Please select a model";
        if (!data.serviceType) newErrors.serviceType = "Please select a service type";
        if (!data.date) newErrors.date = "Preferred Date is required";

        return newErrors;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        handleSubmit(e, validate);
    };

    return (
        <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book A Service</h3>

            <div className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                            placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone || ""}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                            placeholder="10-digit number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Model */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model *</label>
                        <select
                            name="carModel"
                            value={formData.carModel || ""}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.carModel ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        >
                            <option value="">Select Model</option>
                            {models.map((car: any, idx: number) => (
                                <option key={idx} value={car.name}>{car.name}</option>
                            ))}
                        </select>
                        {errors.carModel && <p className="text-red-500 text-xs mt-1">{errors.carModel}</p>}
                    </div>

                    {/* Reg Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                        <input
                            type="text"
                            name="registrationNumber"
                            value={formData.registrationNumber || ""}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                            placeholder="e.g. OD-02-X-1234"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                        <select
                            name="serviceType"
                            value={formData.serviceType || ""}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.serviceType ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        >
                            <option value="">Select Service</option>
                            {serviceTypes.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))}
                        </select>
                        {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
                    </div>

                    {/* Preferred Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date || ""}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.date ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-600'}`}
                        />
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions (Optional)</label>
                    <textarea
                        name="message"
                        value={formData.message || ""}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none resize-none"
                        placeholder="Any specific requests or issues..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#d71920] text-white font-bold py-3 rounded-lg hover:bg-black transition-all duration-300 flex items-center justify-center space-x-2 disabled:bg-gray-400"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            <span>Processing...</span>
                        </>
                    ) : (
                        <span>Book Appointment Now</span>
                    )}
                </button>
            </div>
        </form>
    );
}
