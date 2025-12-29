"use client";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { models } from "../utils/data";

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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        model: "",
        registrationNumber: "",
        serviceType: "",
        date: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Full Name is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid Email is required";
        if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = "Valid Phone Number is required";
        if (!formData.model) newErrors.model = "Please select a model";
        if (!formData.serviceType) newErrors.serviceType = "Please select a service type";
        if (!formData.date) newErrors.date = "Preferred Date is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        try {
            const response = await fetch("/api/service", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Service booking request sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    model: "",
                    registrationNumber: "",
                    serviceType: "",
                    date: "",
                    message: "",
                });
            } else {
                toast.error("Failed to submit request. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <Toaster position="top-center" />
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book A Service</h3>

            <div className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        // placeholder="Enter Full Name"
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            // placeholder="9876543210"
                            maxLength={10}
                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            // placeholder="john@example.com"
                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Car Model */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model *</label>
                        <select
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all bg-white ${errors.model ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                        >
                            <option value="">Select Model</option>
                            {models.map((car, idx) => (
                                <option key={idx} value={car.name}>{car.name}</option>
                            ))}
                        </select>
                        {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model}</p>}
                    </div>

                    {/* Registration Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Registration No. (Optional)</label>
                        <input
                            type="text"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            placeholder="OD-02-XY-1234"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all bg-white ${errors.serviceType ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                        >
                            <option value="">Select Service</option>
                            {serviceTypes.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))}
                        </select>
                        {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all ${errors.date ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                        />
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message (Optional)</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any specific issues or requests..."
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                    {loading ? <Loader2 className="animate-spin" size={20} /> : "Book Appointment"}
                </button>
            </div>
        </form>
    );
}
