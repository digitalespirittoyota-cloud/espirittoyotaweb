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

    if (!formData.model.trim()) newErrors.model = "Please select a model";

    return newErrors;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Step 1: Validate form
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // अगर empty fields हैं
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
        // Specific validation errors
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
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Enquiry submitted successfully!", {
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #0f0",
          },
        });

        // Reset form
        setFormData({ name: "", phone: "", email: "", model: "" });
      } else {
        toast.error("Failed to send email: " + result.message, {
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #f00",
          },
        });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error sending form:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }

      toast.error("Something went wrong while sending email", {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #f00",
        },
      });
    } finally {
      setLoading(false);
    }
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
          {/* Submit */}
          <button
            type="submit"
            disabled={loading} // ✅ Disable while sending
            className={`w-full text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2
    ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
              }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Please wait…
              </>
            ) : (
              <>
                <Send size={18} /> Submit Enquiry
              </>
            )}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Enquiry;
