"use client";

import React from "react";
import { User, Phone, Mail, Car, Send } from "lucide-react";
import Image from "next/image";
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

interface EnquiryProps {
  id?: string;
}

const Enquiry: React.FC<EnquiryProps> = ({ id }) => {
  const {
    formData,
    loading,
    errors,
    handleChange,
    handleSubmit,
    setInitialData
  } = useFormSubmit({
    endpoint: "/api/enquiry",
    successMessage: "Enquiry Sent Successfully!",
  });

  React.useEffect(() => {
    setInitialData({
      name: "",
      phone: "",
      email: "",
      carModel: "",
      formType: "General Enquiry",
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

    if (!data.carModel?.trim()) newErrors.carModel = "Please select a model";

    return newErrors;
  };


  const handleFormSubmit = (e: React.FormEvent) => {
    handleSubmit(e, validate);
  };

  return (
    <section id={id} className="relative w-full min-h-[600px] md:h-[100vh] flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Glassmorphism Container */}
      <div className="relative z-10 w-[92%] max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md">

        {/* Left Side: Dynamic Text Content */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-black/40 text-white">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Ready to drive <br />
            <span className="text-[#d71920]">Your Toyota?</span>
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-sm">
            Experience the perfect blend of luxury, power, and commitment. Get in touch with us for exclusive offers and test drive bookings.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-red-600 rounded-full group-hover:scale-110 transition-transform">
                <Car size={24} />
              </div>
              <span className="text-lg font-medium">Wide selection of models</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-red-600 rounded-full group-hover:scale-110 transition-transform">
                <Send size={24} />
              </div>
              <span className="text-lg font-medium">Instant Callback</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquire Now</h3>
            <p className="text-sm text-gray-500 italic">* All fields are mandatory</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
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

            {/* Phone */}
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
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
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="Email ID"
                className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600"
                  }`}
              />
              {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.email}</p>}
            </div>

            {/* Car Models Dropdown */}
            <div className="relative group">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors font-extrabold" size={20} />
              <select
                name="carModel"
                value={formData.carModel || ""}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all ${errors.carModel ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-red-600 text-gray-600"
                  }`}
              >
                <option value="">Select Model</option>
                {carModels.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4L6 8L10 4" />
                </svg>
              </div>
              {errors.carModel && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium">{errors.carModel}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#d71920] hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:bg-gray-400"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
