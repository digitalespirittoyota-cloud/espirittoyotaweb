"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface UseFormSubmitOptions {
    endpoint: string;
    successMessage?: string;
    resetOnSuccess?: boolean;
}

export const useFormSubmit = <T extends Record<string, any>>({
    endpoint,
    successMessage = "Submitted successfully!",
    resetOnSuccess = true,
}: UseFormSubmitOptions) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<T>({} as T);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const setInitialData = (data: T) => {
        setFormData(data);
    };

    const handleSubmit = async (
        e: React.FormEvent,
        validate?: (data: T) => { [key: string]: string }
    ) => {
        e.preventDefault();

        if (validate) {
            const validationErrors = validate(formData);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                toast.error("Please fill all required fields correctly");
                return;
            }
        }

        setLoading(true);
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(successMessage);
                if (resetOnSuccess) {
                    // Reset form to empty but keeping the structure
                    const resetData = Object.keys(formData).reduce((acc, key) => {
                        acc[key as keyof T] = "" as any;
                        return acc;
                    }, {} as T);
                    setFormData(resetData);
                }
            } else {
                toast.error(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Network error. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        setFormData,
        loading,
        errors,
        setErrors,
        handleChange,
        handleSubmit,
        setInitialData,
    };
};
