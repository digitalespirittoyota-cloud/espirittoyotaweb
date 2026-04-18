"use client";

import React from "react";
import { User, Phone, Mail, MessageSquare, Send, BookOpen } from "lucide-react";
import { useFormSubmit } from "../hooks/useFormSubmit";

export default function ContactForm() {
    const {
        formData,
        loading,
        errors,
        handleChange,
        handleSubmit,
        setInitialData
    } = useFormSubmit({
        endpoint: "/api/contact",
        successMessage: "Message Sent Successfully!",
    });

    React.useEffect(() => {
        setInitialData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
            formType: "Contact Us",
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

        if (!data.subject?.trim()) newErrors.subject = "Subject is required";
        if (!data.message?.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        handleSubmit(e, validate);
    };

    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-gray-100">
            <div className="mb-10">
                <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
                    Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    We&apos;d love to hear from you
                </h2>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={18} />
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ""}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-500'}`}
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={18} />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone || ""}
                                onChange={handleChange}
                                placeholder="10-digit number"
                                className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-500'}`}
                            />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.phone}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={18} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email || ""}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-500'}`}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Subject</label>
                        <div className="relative">
                            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={18} />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject || ""}
                                onChange={handleChange}
                                placeholder="How can we help?"
                                className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-500'}`}
                            />
                        </div>
                        {errors.subject && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.subject}</p>}
                    </div>
                </div>

                {/* Message */}
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Message</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within:text-red-500 transition-colors" size={18} />
                        <textarea
                            name="message"
                            value={formData.message || ""}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Your message here..."
                            className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/10 transition-all resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-red-500'}`}
                        ></textarea>
                    </div>
                    {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#d71920] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-black active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 disabled:bg-gray-400"
                >
                    {loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send size={18} />
                            <span>Send Message</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
