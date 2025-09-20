"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    model: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.model.trim()) newErrors.model = "Please select a model";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all required fields", {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #f00",
        },
      });
      return;
    }

    setErrors({});
    toast.success("Enquiry submitted successfully!", {
      style: {
        background: "#1a1a1a",
        color: "#fff",
        border: "1px solid #f00",
      },
    });

    console.log("Form submitted:", formData);

    // Reset form
    setFormData({ name: "", phone: "", email: "", model: "" });
  };

  return (
    <section id={id} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 relative">
      {/* Toaster */}
      <Toaster position="top-right" />

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Enquiry Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            title="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            title="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            title="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Model of Car */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Model of Car <span className="text-red-500">*</span>
          </label>
          <select
            title="Model of Car"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.model ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select a model</option>
            {carModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Enquiry;
