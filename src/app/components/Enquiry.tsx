"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { User, Phone, Mail, Car, Send } from "lucide-react";
import Image from "next/image";

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

    if (!formData.model.trim()) newErrors.model = "Please select a model";

    return newErrors;
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Check if any empty fields
      const emptyFields = Object.keys(validationErrors).filter(
        (key) => formData[key as keyof typeof formData].trim() === ""
      );

      if (emptyFields.length > 0) {
        toast.error("Please fill all required fields", {
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #f00",
          },
        });
      } else {
        // Show specific validation errors
        toast.error(Object.values(validationErrors).join(", "), {
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #f00",
          },
        });
      }
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
    <section
      id={id}
      className="w-full bg-gray-100 flex flex-col md:flex-row"
    >
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <Image
          src="/banner/showroom.jpg"
          alt="Car Banner"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <Toaster position="top-right" />

        <h3 className="text-3xl font-bold mb-6 text-gray-800">
          Enquiry Form
        </h3>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name (Full Width) */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              title="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full pl-10 pr-3 pt-5 pb-2 border rounded-lg focus:outline-none transition-all
                ${errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-black"
                }`}
            />
            <label
              className="absolute left-10 top-1 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:text-base peer-focus:top-1 
                peer-focus:text-sm peer-focus:text-red-600"
            >
              Name <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Email (Full Width) */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              title="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full pl-10 pr-3 pt-5 pb-2 border rounded-lg focus:outline-none transition-all
      ${errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-black"
                }`}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
            />
            <label
              className="absolute left-10 top-1 text-gray-500 text-sm transition-all 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:text-base peer-focus:top-1 
                peer-focus:text-sm peer-focus:text-red-600"
            >
              Email <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Phone + Model (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                title="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setFormData({ ...formData, phone: value });
                  }
                }}
                maxLength={10}
                placeholder=" "
                className={`peer w-full pl-10 pr-3 pt-5 pb-2 border rounded-lg focus:outline-none transition-all
      ${errors.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-black"
                  }`}
                pattern="^[0-9]{10}$"
                required
              />
              <label
                className="absolute left-10 top-1 text-gray-500 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                  peer-placeholder-shown:text-base peer-focus:top-1 
                  peer-focus:text-sm peer-focus:text-red-600"
              >
                Phone <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Model */}
            <div className="relative">
              <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <select
                title="Model of Car"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className={`peer w-full pl-10 pr-3 pt-5 pb-2 border rounded-lg bg-white focus:outline-none transition-all
                  ${errors.model
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-black"
                  }`}
              >
                <option value="">Select a model</option>
                {carModels.map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              <label
                className="absolute left-10 top-1 text-gray-500 text-sm transition-all peer-focus:text-red-600"
              >
                Model of Car <span className="text-red-500">*</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Send size={18} /> Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Enquiry;
