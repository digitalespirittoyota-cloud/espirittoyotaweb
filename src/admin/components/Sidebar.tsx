'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Car,
  Users,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Database,
  Calendar,
  Clock,
  MessagesSquare,
  TrendingUp
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useSelector } from 'react-redux';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin', roles: ['admin', 'bidding', 'marketing'] },
  { name: 'Models', icon: Database, href: '/admin/models', roles: ['admin', 'bidding'] },
  { name: 'Cars', icon: Car, href: '/admin/cars', roles: ['admin', 'bidding'] },
  { name: 'Test Drives', icon: Calendar, href: '/admin/test-drives', roles: ['admin', 'marketing'] },
  { name: 'Bookings', icon: Clock, href: '/admin/bookings', roles: ['admin', 'marketing'] },
  { name: 'Enquiries', icon: Users, href: '/admin/enquiries', roles: ['admin', 'marketing'] },
  { name: 'Bidding', icon: TrendingUp, href: '/admin/bidding', roles: ['admin', 'bidding'] },
  { name: 'Contacts', icon: MessagesSquare, href: '/admin/contacts', roles: ['admin', 'marketing'] },
  { name: 'Settings', icon: Settings, href: '/admin/settings', roles: ['admin', 'bidding', 'marketing'] },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useSelector((state: any) => state.auth || {});

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const allowedItems = menuItems.filter(item =>
    !user || item.roles.includes(user.role)
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Overlay (Mobile) */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-slate-900 text-white",
        isCollapsed ? "w-20" : "w-64",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo / Header */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-slate-800">
            {!isCollapsed && <span className="text-xl font-bold">Admin Panel</span>}
            <button
              onClick={toggleSidebar}
              className="hidden lg:flex p-1 hover:bg-slate-800 rounded-md"
            >
              {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2">
            {allowedItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <item.icon size={20} className={cn("min-w-[20px]", !isCollapsed && "mr-4")} />
                  {!isCollapsed && <span className="font-medium">{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
            {!isCollapsed && <span>&copy; 2026 Espirit Toyota</span>}
            {isCollapsed && <span>ET</span>}
          </div>
        </div>
      </aside>
    </>
  );
}
