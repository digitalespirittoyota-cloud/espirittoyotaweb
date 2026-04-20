'use client';

import React from 'react';
import { Bell, User, Search, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/admin/redux/authSlice';

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth || {});

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/auth/logout', { method: 'POST' });
      if (res.ok) {
        dispatch(logout());
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        toast.success('Logged out');
        router.push('/admin/login');
      }
    } catch (err) {
      toast.error('Logout failed');
    }
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30">
      {/* Search Bar */}
      <div className="hidden md:flex">
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800 ">{user?.username.toLowerCase() || 'Admin User'}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role || 'Access Restricted'}</p>
          </div>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors uppercase font-bold text-sm">
            {user?.username?.charAt(0).toUpperCase() || 'A'}
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="p-2 text-gray-500 hover:text-red-600 transition-colors"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}
