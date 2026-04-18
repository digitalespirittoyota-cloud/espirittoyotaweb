'use client';

import React, { useState, useEffect } from 'react';
import Table from '@/admin/components/Table';
import { TableSkeleton } from '@/admin/components/Skeleton';
import Modal from '@/admin/components/Modal';
import { Search, Calendar, Phone, Mail, Car, MessageSquare, Tag, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function BookingsPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/bookings?page=${page}&limit=50`);
      if (res.ok) {
        const result = await res.json();
        setData(result.data || []);
        setPagination(result.pagination || { page: 1, totalPages: 1 });
      } else {
        toast.error('Failed to fetch bookings');
      }
    } catch (err) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchData(newPage);
    }
  };

  const columns = [
    { key: 'uniqueId', label: 'ID', render: (val: string) => <span className="font-mono text-xs font-bold text-gray-500">{val}</span> },
    { key: 'name', label: 'Customer', render: (val: string, row: any) => (
      <div>
        <p className="font-bold text-gray-900">{val}</p>
        <p className="text-xs text-gray-400">{row.email}</p>
      </div>
    )},
    { key: 'phone', label: 'Phone', render: (val: string) => (
      <a href={`tel:${val}`} className="flex items-center text-blue-600 hover:underline">
        <Phone size={12} className="mr-1" /> {val}
      </a>
    )},
    { key: 'carModel', label: 'Vehicle', render: (val: string, row: any) => (
        <div>
            <p className="font-bold text-gray-700">{val}</p>
            {row.registrationNumber && <p className="text-[10px] bg-gray-100 px-1 inline-block rounded font-mono border border-gray-200">{row.registrationNumber}</p>}
        </div>
    ) },
    { key: 'serviceType', label: 'Service', render: (val: string) => <span className="text-red-600 font-semibold">{val}</span> },
    { key: 'date', label: 'Date', render: (val: string) => (
      <p className="flex items-center text-xs text-gray-700"><Calendar size={12} className="mr-1" /> {val}</p>
    )},
    { key: 'status', label: 'Status', render: (val: string) => (
      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
        val === 'new' ? 'bg-blue-100 text-blue-700' : 
        val === 'contacted' ? 'bg-amber-100 text-amber-700' : 
        'bg-green-100 text-green-700'
      }`}>
        {val}
      </span>
    )},
  ];

  const filteredData = data.filter((item: any) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.carModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.serviceType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.uniqueId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDetails = (row: any) => {
    setSelectedBooking(row);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Service Bookings</h1>
          <p className="text-sm text-gray-500">Manage vehicle service appointments</p>
        </div>
        <div className="flex items-center gap-2">
           <button 
             onClick={() => handlePageChange(pagination.page - 1)}
             disabled={pagination.page <= 1}
             className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50"
           >
             <ChevronLeft size={16} />
           </button>
           <span className="text-sm font-medium">Page {pagination.page} of {pagination.totalPages}</span>
           <button 
             onClick={() => handlePageChange(pagination.page + 1)}
             disabled={pagination.page >= pagination.totalPages}
             className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50"
           >
             <ChevronRight size={16} />
           </button>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search by name, model, service or ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all shadow-sm"
        />
      </div>

      {loading ? (
        <TableSkeleton rows={8} cols={columns.length} />
      ) : (
        <Table
          columns={columns}
          data={filteredData}
          onView={openDetails}
        />
      )}

      {/* Detail Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Service Booking Details"
      >
        {selectedBooking && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-xs text-gray-400 uppercase font-black mb-1">Customer</p>
                <p className="font-bold text-gray-900">{selectedBooking.name}</p>
                <p className="text-sm text-gray-600 flex items-center mt-1"><Mail size={12} className="mr-1" /> {selectedBooking.email}</p>
                <p className="text-sm text-gray-600 flex items-center mt-1"><Phone size={12} className="mr-1" /> {selectedBooking.phone}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-xs text-gray-400 uppercase font-black mb-1">Appointment</p>
                <p className="text-sm font-bold text-red-600 flex items-center"><Calendar size={14} className="mr-1" /> {selectedBooking.date}</p>
                {selectedBooking.time && <p className="text-sm text-gray-600 flex items-center mt-1"><Clock size={14} className="mr-1" /> {selectedBooking.time}</p>}
                <p className="text-sm text-gray-500 mt-1"><span className="font-semibold">ID:</span> {selectedBooking.uniqueId}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2 flex items-center">
                    <Car size={14} className="mr-1" /> Vehicle Info
                  </p>
                  <p className="text-lg font-black text-gray-900">{selectedBooking.carModel}</p>
                  {selectedBooking.registrationNumber && (
                    <p className="mt-1 text-sm font-mono bg-yellow-50 text-yellow-800 px-2 py-0.5 rounded border border-yellow-100 inline-block uppercase">
                      {selectedBooking.registrationNumber}
                    </p>
                  )}
                  {selectedBooking.mileage && <p className="text-sm text-gray-600 mt-2">Current Mileage: <span className="font-bold">{selectedBooking.mileage} km</span></p>}
               </div>
               <div className="p-4 bg-red-600 text-white rounded-xl shadow-md">
                  <p className="text-xs text-red-100 uppercase font-bold mb-2">Service Selection</p>
                  <p className="text-xl font-black">{selectedBooking.serviceType}</p>
                  <div className="mt-2 h-1 w-12 bg-white/30 rounded-full" />
                  {selectedBooking.pickup === 'yes' && (
                    <p className="text-xs font-bold mt-2 flex items-center">
                      <MapPin size={12} className="mr-1" /> Home Pickup Requested
                    </p>
                  )}
               </div>
            </div>

            {selectedBooking.message && (
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1 flex items-center">
                  <MessageSquare size={14} className="mr-1" /> Requirements
                </p>
                <p className="text-sm text-gray-700 leading-relaxed italic">{selectedBooking.message}</p>
              </div>
            )}

            <div className="flex justify-end pt-4 gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  toast.success('Appointment confirmed and customer notified');
                  setIsModalOpen(false);
                }}
                className="px-6 py-2 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800 shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
