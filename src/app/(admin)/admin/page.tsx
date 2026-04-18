'use client';

import React from 'react';
import {
  Database,
  Car,
  Users,
  TrendingUp,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Dashboard() {
  // Use default empty arrays to handle uninitialized state
  const { items: models = [], loading: modelsLoading } = useSelector((state: any) => state.models || {});
  const { items: cars = [], loading: carsLoading } = useSelector((state: any) => state.cars || {});
  const { items: customers = [], loading: customersLoading } = useSelector((state: any) => state.customers || {});

  const isLoading = modelsLoading || carsLoading || customersLoading;

  const stats = [
    { name: 'Total Models', value: models.length, icon: Database, color: 'text-blue-600', bg: 'bg-blue-50', link: '/admin/models' },
    { name: 'Active Inventory', value: cars.length, icon: Car, color: 'text-red-600', bg: 'bg-red-50', link: '/admin/cars' },
    { name: 'New Inquiries', value: customers.length, icon: Users, color: 'text-green-600', bg: 'bg-green-50', link: '/admin/customers' },
  ];

  if (isLoading && models.length === 0 && cars.length === 0 && customers.length === 0) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-12 w-48 bg-gray-200 rounded-lg mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-100 rounded-2xl border border-gray-100"></div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-64 bg-gray-50 rounded-2xl border border-gray-100"></div>
            <div className="h-64 bg-gray-50 rounded-2xl border border-gray-100"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening today in your showroom.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {stats.map((stat) => (
          <Link href={stat.link} key={stat.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl transition-colors`}>
                <stat.icon size={24} />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">{stat.name}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1 text-right">{stat.value}</p>
              </div>
            </div>

          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Inquiries */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Recent Inquiries</h3>
            <Link href="/admin/customers" className="text-sm text-red-600 font-semibold hover:underline">View All</Link>
          </div>
          <div className="space-y-4 flex-1">
            {customers.slice(0, 5).map((c: any) => (
              <div key={c._id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-bold text-xs uppercase border border-red-100">
                    {c.name?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{c.name}</p>
                    <p className="text-[11px] text-gray-500">{c.carModel || 'General Inquiry'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 flex items-center uppercase tracking-wider font-bold">
                    <Clock size={10} className="mr-1" />
                    {new Date(c.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            {customers.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                <Users size={32} className="mb-2 opacity-20" />
                <p className="text-sm italic">No recent inquiries to show</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/admin/models" className="flex flex-col items-center justify-center px-8 py-4 border border-dashed border-gray-200 rounded-2xl hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all text-gray-500 group">
              <Database size={32} className="mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold">Add Model</span>
            </Link>
            <Link href="/admin/cars" className="flex flex-col items-center justify-center px-8 py-4 border border-dashed border-gray-200 rounded-2xl hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all text-gray-500 group">
              <Car size={32} className="mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold">Add Car</span>
            </Link>
          </div>
          <div className="mt-6 p-4 bg-slate-900 rounded-xl text-white">
            <h4 className="text-sm font-bold mb-1">System Status</h4>
            <div className="flex items-center text-[11px] text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {isLoading ? 'Fetching Data...' : 'Connected to MongoDB Atlas'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
