'use client';

import React, { useState, useEffect } from 'react';
import Table from '@/admin/components/Table';
import { TableSkeleton } from '@/admin/components/Skeleton';
import Modal from '@/admin/components/Modal';
import { Search, Calendar, Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight, Car, User, Info } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function TestDrivesPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/test-drives?page=${page}&limit=50`);
      if (res.ok) {
        const result = await res.json();
        setData(result.data || []);
        setPagination(result.pagination || { page: 1, totalPages: 1 });
      } else {
        toast.error('Failed to fetch test drives');
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
    { key: 'carModel', label: 'Model', render: (val: string) => <span className="font-bold text-red-600">{val}</span> },
    { key: 'date', label: 'Preferred Slot', render: (_: any, row: any) => (
      <div className="text-xs">
        <p className="flex items-center text-gray-700"><Calendar size={12} className="mr-1" /> {row.date}</p>
        <p className="flex items-center text-gray-400"><Clock size={12} className="mr-1" /> {row.time}</p>
      </div>
    )},
    { key: 'city', label: 'City', render: (val: string) => (
      <p className="flex items-center text-xs text-gray-500"><MapPin size={12} className="mr-1" /> {val}</p>
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
    (item.carModel || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.uniqueId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDetails = (row: any) => {
    setSelectedRequest(row);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Test Drive Requests</h1>
          <p className="text-sm text-gray-500">Manage customer test drive appointments</p>
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
          placeholder="Search by name, model or ID..."
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
        title="Test Drive Details"
      >
        {selectedRequest && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Customer Info</p>
                      <p className="font-bold text-gray-900 text-lg">{selectedRequest.name}</p>
                      <p className="text-sm text-gray-600 flex items-center mt-1"><Mail size={12} className="mr-1" /> {selectedRequest.email}</p>
                      <p className="text-sm text-gray-600 flex items-center mt-1"><Phone size={12} className="mr-1" /> {selectedRequest.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                      <Car size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Vehicle Interest</p>
                      <p className="font-bold text-gray-900 text-lg">{selectedRequest.carModel}</p>
                      <p className="text-sm text-gray-600 flex items-center mt-1"><MapPin size={12} className="mr-1" /> {selectedRequest.city}</p>
                    </div>
                  </div>
               </div>

               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-center">
                  <p className="text-center text-xs text-gray-400 font-bold uppercase mb-4 tracking-widest">Requested Schedule</p>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center text-2xl font-black text-gray-900">
                      <Calendar className="mr-2 text-red-600" size={24} />
                      {selectedRequest.date}
                    </div>
                    <div className="flex items-center text-xl font-bold text-gray-600">
                      <Clock className="mr-2 text-gray-400" size={20} />
                      {selectedRequest.time}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-center text-[10px] text-gray-400 font-mono uppercase">Request ID: {selectedRequest.uniqueId}</p>
                  </div>
               </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400 flex items-start gap-3">
               <Info className="text-amber-600 mt-1 shrink-0" size={18} />
               <div>
                  <p className="text-xs text-amber-700 font-bold uppercase mb-1">Internal Note</p>
                  <p className="text-sm text-amber-800">Please verify customer's driving license availability before confirming the slot.</p>
               </div>
            </div>

            <div className="flex justify-end pt-4 gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  toast.success('Test drive slot confirmed!');
                  setIsModalOpen(false);
                }}
                className="px-6 py-2.5 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-lg shadow-red-200 transition-all active:scale-95"
              >
                Confirm Slot
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
