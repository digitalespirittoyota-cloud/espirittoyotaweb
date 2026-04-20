'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangePasswordSchema, type ChangePasswordInput } from '@/app/lib/schemas';
import { toast } from 'react-hot-toast';
import { Lock, Eye, EyeOff, ShieldCheck, Save, Loader2 } from 'lucide-react';

export default function SettingsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ChangePasswordInput>({
        resolver: zodResolver(ChangePasswordSchema),
    });

    const onSubmit = async (data: ChangePasswordInput) => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/admin/auth/change-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                toast.success('Password updated successfully. Logging out...');
                reset();
                // Delay redirect to allow toast to be visible
                setTimeout(() => {
                    window.location.href = '/admin/login';
                }, 2000);
            } else {
                toast.error(result.message || 'Failed to update password');
            }
        } catch (err) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                        Settings
                        <span className="text-red-600">.</span>
                    </h1>
                    <p className="text-sm text-gray-500 mt-2 font-medium">
                        Manage your account security and preferences
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Info */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="p-6 bg-red-50 rounded-3xl border border-red-100/50">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-red-200">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-lg font-black text-gray-900 leading-tight">Security First</h3>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                            Updating your password regularly helps keep your administrative account secure from unauthorized access.
                        </p>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 -mr-16 -mt-16 rounded-full opacity-50" />

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center gap-2">
                                    <Lock size={14} className="text-red-600" /> Password Security
                                </h4>
                                <div className="h-0.5 w-12 bg-red-600 rounded-full" />
                            </div>

                            <div className="space-y-4 pt-4">
                                {/* Old Password */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Current Password</label>
                                    <div className="relative group">
                                        <input
                                            type={showOldPassword ? "text" : "password"}
                                            {...register('oldPassword')}
                                            className={`w-full pl-4 pr-12 py-3.5 bg-gray-50 border-2 rounded-2xl outline-none transition-all font-medium ${errors.oldPassword ? 'border-red-100 focus:border-red-200 text-red-600' : 'border-transparent focus:border-red-600 focus:bg-white text-gray-900'}`}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowOldPassword(!showOldPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                                        >
                                            {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    {errors.oldPassword && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.oldPassword.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* New Password */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">New Password</label>
                                        <div className="relative group">
                                            <input
                                                type={showNewPassword ? "text" : "password"}
                                                {...register('newPassword')}
                                                className={`w-full pl-4 pr-12 py-3.5 bg-gray-50 border-2 rounded-2xl outline-none transition-all font-medium ${errors.newPassword ? 'border-red-100 focus:border-red-200 text-red-600' : 'border-transparent focus:border-red-600 focus:bg-white text-gray-900'}`}
                                                placeholder="••••••••"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                                            >
                                                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                        {errors.newPassword && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.newPassword.message}</p>}
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Confirm New Password</label>
                                        <div className="relative group">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                {...register('confirmPassword')}
                                                className={`w-full pl-4 pr-12 py-3.5 bg-gray-50 border-2 rounded-2xl outline-none transition-all font-medium ${errors.confirmPassword ? 'border-red-100 focus:border-red-200 text-red-600' : 'border-transparent focus:border-red-600 focus:bg-white text-gray-900'}`}
                                                placeholder="••••••••"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                                            >
                                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.confirmPassword.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-50 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-3.5 bg-black text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-600 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all shadow-xl shadow-gray-200 disabled:opacity-70 disabled:hover:bg-black disabled:hover:translate-y-0 flex items-center gap-2 group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" /> Updating...
                                        </>
                                    ) : (
                                        <>
                                            <Save size={18} className="group-hover:animate-bounce" /> Update Password
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
